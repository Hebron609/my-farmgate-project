/**
 * useScrollReveal – Vue composable for ScrollReveal.js
 *
 * Respects prefers-reduced-motion, supports fade-in, slide-up, and slide-in
 * from left/right with configurable delay and duration. Use from onMounted
 * so the DOM and container are ready.
 *
 * @see https://scrollrevealjs.org/
 */

import ScrollReveal from 'scrollreveal';

const DEFAULT_DURATION = 800;
const DEFAULT_DELAY = 150;
const DEFAULT_DISTANCE = '40px';
const DEFAULT_EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

/**
 * Returns true if the user prefers reduced motion (accessibility).
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Use ScrollReveal in a component. Call init() inside onMounted.
 *
 * @param {Object} [options] – Optional global defaults
 * @param {number} [options.duration] – Animation duration (ms)
 * @param {number} [options.delay] – Delay before animation (ms)
 * @param {string} [options.distance] – Travel distance (e.g. '40px')
 * @param {string} [options.easing] – CSS easing
 * @param {Element|string} [options.container] – Scroll container selector or element
 * @returns {{ init: Function, sr: ScrollReveal | null }}
 */
export function useScrollReveal(options = {}) {
  function init() {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion()) return;

    const base = {
      duration: options.duration ?? DEFAULT_DURATION,
      delay: options.delay ?? DEFAULT_DELAY,
      distance: options.distance ?? DEFAULT_DISTANCE,
      easing: options.easing ?? DEFAULT_EASING,
      opacity: 0,
      origin: 'bottom',
      reset: false,
      cleanup: true,
      desktop: true,
      mobile: true,
      viewFactor: 0.1,
      ...options,
    };

    const instance = ScrollReveal(base);

    return {
      reveal(selector, config = {}) {
        instance.reveal(selector, config);
      },
      get sr() {
        return instance;
      },
    };
  }

  return { init, prefersReducedMotion };
}

/**
 * Predefined effect configs for consistent use across pages.
 * Override duration/delay per call as needed.
 */
export const revealEffects = {
  fade: {
    opacity: 0,
    scale: 0.98,
    distance: '0px',
    duration: 700,
    easing: 'ease-out',
  },
  slideUp: {
    origin: 'bottom',
    distance: '36px',
    duration: 750,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  slideLeft: {
    origin: 'left',
    distance: '48px',
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  slideRight: {
    origin: 'right',
    distance: '48px',
    duration: 700,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  stagger: {
    origin: 'bottom',
    distance: '24px',
    duration: 600,
    interval: 120,
    easing: 'ease-out',
  },
};
