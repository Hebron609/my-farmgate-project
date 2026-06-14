/**
 * useHighlightOnLoad.js
 * ─────────────────────
 * Detects a cross-page search highlight request embedded in the URL
 * and triggers a smooth scroll + flash highlight on the target element.
 *
 * URL convention (set by useSearchActions navigate_section):
 *   /some-page#fg-highlight:section-id
 *
 * Usage: call `useHighlightOnLoad()` inside onMounted() of every page.
 */

export function useHighlightOnLoad() {
  /**
   * Scroll to and highlight an element by its ID.
   * @param {string} id — the DOM element id to target
   */
  function highlightElement(id) {
    const el = document.getElementById(id);
    if (!el) return;

    // Offset so the header doesn't cover the element
    const HEADER_OFFSET = 80;

    const y =
      el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Flash highlight — remove first to allow re-trigger
    el.classList.remove("search-highlight");
    void el.offsetWidth; // reflow
    el.classList.add("search-highlight");

    setTimeout(() => {
      el.classList.remove("search-highlight");
    }, 2800);
  }

  /**
   * Parse the current URL hash for our convention and trigger highlight.
   * Should be called inside onMounted().
   */
  function init() {
    const hash = window.location.hash; // e.g. "#fg-highlight:hero-section"
    if (!hash || !hash.startsWith("#fg-highlight:")) return;

    const sectionId = hash.replace("#fg-highlight:", "");
    if (!sectionId) return;

    // Small delay so the page finishes rendering reveal animations etc.
    setTimeout(() => {
      highlightElement(sectionId);
      // Clean the hash from the URL without a page reload
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }, 600);
  }

  return { init, highlightElement };
}
