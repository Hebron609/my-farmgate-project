/**
 * useGlobalSearch.js
 * ───────────────────
 * Upgraded global search composable for the Farmgate website.
 *
 * Features:
 *  - Uses fullTextSearchIndex as the single source of truth (~60+ entries)
 *  - Weighted relevance scoring (title > keyword exact > keyword partial)
 *  - Results grouped by type: page, product, action, category, link, form
 *  - Max 12 results total, max 4 per group
 *  - selectResult() dispatches the correct action via useSearchActions
 *  - Cmd+K / Ctrl+K keyboard shortcut support (toggle)
 *  - Composable is a singleton (shared state across Header instances)
 */

import { ref, computed, onMounted, onUnmounted } from "vue";
import { fullTextSearchIndex } from "@/data/fullTextSearchIndex";
import { useSearchActions } from "@/composables/useSearchActions";
import { useInPageSearch } from "@/composables/useInPageSearch";

// ── Singleton shared state ───────────────────────────────────────────────────
// Using module-level refs so all Header instances share one search state
const searchQuery = ref("");
const showResults = ref(false);
const isSearchOpen = ref(false);

// ── Constants ────────────────────────────────────────────────────────────────
const MAX_TOTAL_RESULTS = 12;
const MAX_PER_GROUP = 4;

// Human-readable group labels & ordering
const GROUP_CONFIG = {
  in_page:  { label: "On this page", icon: ['fas', 'map-marker-alt'], order: 0 },
  section:  { label: "Page Sections", icon: ['fas', 'puzzle-piece'], order: 1 },
  page:     { label: "Pages",      icon: ['fas', 'file-alt'], order: 2 },
  product:  { label: "Products",   icon: ['fas', 'leaf'], order: 3 },
  category: { label: "Categories", icon: ['fas', 'tags'], order: 4 },
  action:   { label: "Actions",    icon: ['fas', 'bolt'], order: 5 },
  form:     { label: "Forms",      icon: ['fas', 'clipboard-list'], order: 6 },
  link:     { label: "Links",      icon: ['fas', 'link'], order: 7 },
};

// ── Scoring helper ───────────────────────────────────────────────────────────
/**
 * Score a single index entry against the query.
 * Returns 0 if no match, >0 for increasing relevance.
 */
function scoreEntry(entry, query) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  const title = entry.title.toLowerCase();
  const desc  = (entry.description || "").toLowerCase();
  const keys  = (entry.keywords || []).map((k) => k.toLowerCase());

  let score = 0;

  // ── Title matching (highest weight) ──
  if (title === q) {
    score += 100;                         // exact title
  } else if (title.startsWith(q)) {
    score += 80;                          // title starts with query
  } else if (title.includes(q)) {
    score += 60;                          // title contains query
  } else {
    // Check if every word in query appears in the title
    const words = q.split(/\s+/);
    if (words.every((w) => title.includes(w))) {
      score += 45;
    }
  }

  // ── Description matching (medium weight) ──
  if (desc.includes(q)) {
    score += 20;
  }

  // ── Keyword matching ──
  for (const kw of keys) {
    if (kw === q) {
      score += 40;                        // exact keyword match
      break;
    } else if (kw.startsWith(q) || q.startsWith(kw)) {
      score += 25;
      break;
    } else if (kw.includes(q) || q.includes(kw)) {
      score += 15;
      break;
    }
  }

  // ── Boost actions/buttons slightly when user types action-like words ──
  const actionTriggers = ["book", "open", "start", "send", "call", "chat", "buy", "add", "checkout", "schedule", "contact", "view"];
  if (entry.type === "action" || entry.type === "form") {
    if (actionTriggers.some((t) => q.startsWith(t) || q.includes(t))) {
      score += 10;
    }
  }

  return score;
}

// ── Composable ───────────────────────────────────────────────────────────────
export function useGlobalSearch() {
  const { executeAction } = useSearchActions();
  const { searchPage, handleInPageAction } = useInPageSearch();

  // ── Flat scored results ──────────────────────────────────────────────────
  const searchResults = computed(() => {
    const q = searchQuery.value.trim();
    if (!q) return [];

    const scored = [];

    // 1. Get global index results
    for (const entry of fullTextSearchIndex) {
      const score = scoreEntry(entry, q);
      if (score > 0) {
        scored.push({ ...entry, _score: score });
      }
    }

    // Sort global by score descending
    scored.sort((a, b) => b._score - a._score);
    const topGlobal = scored.slice(0, MAX_TOTAL_RESULTS);

    // 2. Get local DOM results
    const localResults = searchPage(q);

    // Combine them (local at the top because of high artificial _score)
    const combined = [...localResults, ...topGlobal];
    combined.sort((a, b) => b._score - a._score);

    return combined.slice(0, MAX_TOTAL_RESULTS + 3); // Allow a bit more capacity with local
  });

  // ── Grouped results (for the UI) ─────────────────────────────────────────
  const groupedResults = computed(() => {
    const q = searchQuery.value.trim();
    if (!q) return [];

    // Collect per-group buckets
    const buckets = {};

    for (const entry of searchResults.value) {
      const type = entry.type || "page";
      if (!buckets[type]) buckets[type] = [];
      if (buckets[type].length < MAX_PER_GROUP) {
        buckets[type].push(entry);
      }
    }

    // Convert to sorted array of groups
    return Object.entries(buckets)
      .map(([type, items]) => ({
        type,
        label: GROUP_CONFIG[type]?.label || type,
        icon:  GROUP_CONFIG[type]?.icon  || ['fas', 'search'],
        order: GROUP_CONFIG[type]?.order || 99,
        items,
      }))
      .sort((a, b) => a.order - b.order);
  });

  // ── Derived flags ────────────────────────────────────────────────────────
  const hasResults   = computed(() => searchResults.value.length > 0);
  const totalCount   = computed(() => searchResults.value.length);

  // ── Select a result ──────────────────────────────────────────────────────
  /**
   * Called when the user clicks (or keyboard-confirms) a search result.
   * Closes the search, then dispatches the entry's action.
   */
  const selectResult = (result) => {
    clearSearch();
    closeSearch();

    if (!result) return;

    if (result.type === "in_page") {
      handleInPageAction(result);
      return;
    }

    try {
      const handled = executeAction(result.action, result.actionData);

      // If no handler matched but there's a route, fall back to navigation
      if (!handled && result.route) {
        window.location.href = result.route;
      }
    } catch (err) {
      console.error("[useGlobalSearch] selectResult error:", err);
      // Last resort fallback
      if (result.route) {
        try { window.location.href = result.route; } catch { /* ignore */ }
      }
    }
  };

  // ── Search controls ──────────────────────────────────────────────────────
  const clearSearch = () => {
    searchQuery.value = "";
    showResults.value = false;
  };

  const openSearch = () => {
    isSearchOpen.value = true;
    showResults.value  = !!searchQuery.value.trim();
  };

  const closeSearch = () => {
    isSearchOpen.value = false;
    // Don't clear the query immediately so the user can re-open
  };

  const toggleSearch = () => {
    if (isSearchOpen.value) {
      closeSearch();
    } else {
      openSearch();
    }
  };

  const handleSearchInput = () => {
    showResults.value = true;
  };

  // ── Cmd+K / Ctrl+K shortcut ──────────────────────────────────────────────
  const handleKeyboardShortcut = (e) => {
    const isMac   = navigator.platform.toUpperCase().includes("MAC");
    const modKey  = isMac ? e.metaKey : e.ctrlKey;

    if (modKey && e.key === "k") {
      e.preventDefault();
      toggleSearch();
    }
  };

  // Lifecycle hooks — call these inside a setup() or <script setup>
  const mountShortcut   = () => window.addEventListener("keydown", handleKeyboardShortcut);
  const unmountShortcut = () => window.removeEventListener("keydown", handleKeyboardShortcut);

  return {
    // State
    searchQuery,
    showResults,
    isSearchOpen,

    // Computed
    searchResults,
    groupedResults,
    hasResults,
    totalCount,

    // Methods
    selectResult,
    clearSearch,
    openSearch,
    closeSearch,
    toggleSearch,
    handleSearchInput,
    mountShortcut,
    unmountShortcut,
  };
}
