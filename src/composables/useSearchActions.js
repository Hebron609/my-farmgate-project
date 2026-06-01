/**
 * useSearchActions.js
 * ────────────────────
 * Action registry for the Farmgate global search system.
 *
 * Maps named action keys → handler functions so that clicking a
 * search result performs the EXACT same action as clicking the
 * real button / link on the page.
 *
 * To add a new action: add a key to the ACTION_HANDLERS map below.
 */

export function useSearchActions() {
  /**
   * Registry of all named action handlers.
   * Each handler receives `actionData` (from the search index entry).
   */
  const ACTION_HANDLERS = {
    // ── Navigation ──────────────────────────────────────────────────

    /** Navigate to any internal URL */
    navigate(data) {
      const url = data?.url;
      if (!url) throw new Error("navigate: missing url in actionData");
      window.location.href = url;
    },

    /** Navigate to a page then scroll to a named anchor */
    navigate_hash(data) {
      const { url, anchor } = data || {};
      if (!url) throw new Error("navigate_hash: missing url in actionData");
      const target = anchor ? `${url}#${anchor}` : url;
      window.location.href = target;
    },

    // ── Marketplace ─────────────────────────────────────────────────

    /** Navigate to the marketplace pre-filtered to a category */
    marketplace_category(data) {
      const category = data?.category || "";
      window.location.href = `/marketplace${category ? `?category=${encodeURIComponent(category)}` : ""}`;
    },

    /** Navigate to a product detail page */
    view_product(data) {
      const productId = data?.productId;
      if (!productId) {
        // Fallback: go to marketplace
        window.location.href = "/marketplace";
        return;
      }
      // Use Vue Router-style navigation via URL
      // ProductDetail route: /marketplace (SPA) uses router.push
      // Since we're outside Vue Router context here, we use the hash-based URL
      // that the existing marketplace router handles
      window.location.href = `/marketplace?product=${productId}`;
    },

    // ── Cart ─────────────────────────────────────────────────────────

    /**
     * Open the global cart drawer.
     * Dispatches a custom event that App.vue listens to via provide/inject.
     * The CartDrawer is always mounted in App.vue, so this works from any page.
     */
    open_cart() {
      // Dispatch a custom DOM event — App.vue will pick this up
      window.dispatchEvent(new CustomEvent("farmgate:open-cart"));
    },

    // ── Contact / Communication ──────────────────────────────────────

    /** Open WhatsApp chat */
    whatsapp_chat(data) {
      const number = data?.number || "233503301132";
      window.open(`https://wa.me/${number}`, "_blank", "noopener,noreferrer");
    },

    /** Open mailto link */
    email_us(data) {
      const email = data?.email || "connect@farmgate.africa";
      window.location.href = `mailto:${email}`;
    },

    /** Open tel link */
    call_us(data) {
      const number = data?.number || "+233596726914";
      window.location.href = `tel:${number}`;
    },

    /** Open Google Maps for the office location */
    open_map(data) {
      const query = data?.query || "Innohub+Growth+Centre+Accra";
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${query}`,
        "_blank",
        "noopener,noreferrer"
      );
    },

    // ── Special Page Actions ─────────────────────────────────────────

    /**
     * "Start Growing with Us" — activates the farmer onboarding video
     * on the Home page (same behaviour as the header menu button).
     */
    start_growing() {
      try {
        sessionStorage.setItem("activateVideo2", "true");
      } catch {
        // sessionStorage unavailable — still navigate
      }
      window.location.href = "/";
    },

    /**
     * Navigate to the Book Farm Visit page and scroll to the booking form.
     */
    book_farm_visit() {
      // If already on the page, just scroll
      if (window.location.pathname === "/book-farm-visit") {
        const el = document.getElementById("booking-form");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      // Otherwise navigate; the page will load and the anchor will work
      window.location.href = "/book-farm-visit#booking-form";
    },

    /**
     * Navigate to the Contact page and scroll to the message form section.
     */
    contact_form(data) {
      const anchor = data?.anchor || "contact-form";
      if (window.location.pathname === "/contact") {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.location.href = `/contact#${anchor}`;
    },
  };

  /**
   * Execute a search result's action.
   *
   * @param {string} actionKey - The action name from the search index entry
   * @param {object} actionData - The payload from the search index entry
   * @returns {boolean} true if action was handled, false otherwise
   */
  function executeAction(actionKey, actionData = {}) {
    if (!actionKey) {
      console.warn("[useSearchActions] executeAction called with no actionKey");
      return false;
    }

    const handler = ACTION_HANDLERS[actionKey];

    if (!handler) {
      console.warn(`[useSearchActions] Unknown action key: "${actionKey}"`);
      // Graceful fallback — if the entry has a route, navigate to it
      if (actionData?.url) {
        try {
          window.location.href = actionData.url;
          return true;
        } catch {
          return false;
        }
      }
      return false;
    }

    try {
      handler(actionData);
      return true;
    } catch (err) {
      console.error(`[useSearchActions] Action "${actionKey}" failed:`, err);

      // Graceful fallback — attempt plain navigation
      const fallbackUrl = actionData?.url || actionData?.route;
      if (fallbackUrl) {
        try {
          window.location.href = fallbackUrl;
        } catch {
          // nothing more we can do
        }
      }
      return false;
    }
  }

  return { executeAction };
}
