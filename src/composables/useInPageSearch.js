/**
 * useInPageSearch.js
 * ───────────────────
 * Scans the active DOM for visible text matching the query.
 * Handles scrolling, highlighting, and triggering actionable elements.
 */

export function useInPageSearch() {
  /**
   * Search the current DOM for matching text.
   * @param {string} query The search query.
   * @returns {Array} Array of formatted result objects.
   */
  function searchPage(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    // Target tags that usually contain readable text or actions
    const selectors = "h1, h2, h3, h4, h5, h6, p, button, a, label, li, th, td, span.searchable, div[role='button']";
    const elements = document.querySelectorAll(selectors);

    const matches = [];
    const MAX_LOCAL_RESULTS = 5;

    for (const el of elements) {
      if (matches.length >= MAX_LOCAL_RESULTS) break;

      // Skip elements that are hidden (no layout box)
      // Note: offsetParent is null for fixed elements sometimes, so we check offsetWidth/Height too
      if (el.offsetWidth === 0 && el.offsetHeight === 0) continue;

      // Get direct text content (simplified snippet)
      // We use textContent, but clean up extra whitespace
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      const lowerText = text.toLowerCase();

      if (text && lowerText.includes(q)) {
        // Determine what kind of element this is for descriptive purposes
        let tagName = el.tagName.toLowerCase();
        let elementType = "Text";
        
        if (tagName === "button" || tagName === "a" || el.getAttribute("role") === "button") {
          elementType = "Actionable";
        } else if (tagName.startsWith("h")) {
          elementType = "Heading";
        } else if (tagName === "label") {
          elementType = "Form Label";
        } else if (tagName === "th" || tagName === "td") {
          elementType = "Table Data";
        }

        // Generate a small snippet showing the matched text
        const index = lowerText.indexOf(q);
        const start = Math.max(0, index - 15);
        const end = Math.min(text.length, index + q.length + 15);
        let snippet = text.substring(start, end);
        if (start > 0) snippet = "..." + snippet;
        if (end < text.length) snippet = snippet + "...";

        matches.push({
          id: `in_page_${matches.length}_${Math.random().toString(36).substr(2, 5)}`,
          title: snippet,
          type: "in_page",
          description: `On this page · ${elementType}`,
          // Store DOM node reference to interact with it later
          node: el,
          _score: 200, // Very high base score so it appears at the top
        });
      }
    }

    return matches;
  }

  /**
   * Action handler for in-page search results.
   * @param {Object} result The search result object containing the DOM node.
   */
  function handleInPageAction(result) {
    if (!result || !result.node) return;
    
    const el = result.node;

    // 1. Scroll smoothly to the center of the viewport
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    // 2. Add the highlight flash class
    // Remove it first just in case it's already there
    el.classList.remove("search-highlight");
    
    // Force a reflow so the browser picks up the class removal/addition
    void el.offsetWidth;
    
    // Add the class
    el.classList.add("search-highlight");

    // Remove it after the animation ends (2s)
    setTimeout(() => {
      el.classList.remove("search-highlight");
    }, 2000);

    // 3. If it's an actionable element, trigger it
    const tagName = el.tagName.toLowerCase();
    if (tagName === "button" || tagName === "a" || el.getAttribute("role") === "button") {
      // Delay click slightly so user sees the scroll and highlight first
      setTimeout(() => {
        el.click();
      }, 500);
    }
  }

  return {
    searchPage,
    handleInPageAction,
  };
}
