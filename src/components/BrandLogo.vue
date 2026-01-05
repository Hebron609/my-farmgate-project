<script setup>
import { computed } from "vue";

const props = defineProps({
  /**
   * - "auto": choose based on theme/contrast CSS (fallback: gradient in light, mono in dark)
   * - "gradient": green/yellow gradient treatment
   * - "mono": high-contrast monochrome (inherits currentColor)
   */
  variant: {
    type: String,
    default: "auto",
    validator: (v) => ["auto", "gradient", "mono"].includes(v),
  },
  /**
   * Accessible label for screen readers.
   */
  label: {
    type: String,
    default: "FarmGate",
  },
});

const ariaLabel = computed(() => props.label);
</script>

<template>
  <!--
    Container-query driven responsive logo:
    - full lockup shown when there is space
    - compact mark shown when constrained
  -->
  <span
    class="brandLogo"
    :data-variant="variant"
    :aria-label="ariaLabel"
    role="img"
  >
    <!-- Full lockup -->
    <svg
      class="brandLogo__full"
      viewBox="0 0 240 64"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="fg-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0f7a3a" />
          <stop offset="0.6" stop-color="#1aa34a" />
          <stop offset="1" stop-color="#f2c94c" />
        </linearGradient>
      </defs>

      <!-- Gradient treatment -->
      <g class="brandLogo__treatment brandLogo__treatment--gradient">
        <!-- Leaf mark (scaled up from the existing LeafIcon paths) -->
        <g transform="translate(12 10) scale(5.6)">
          <path
            d="M4.85 2.41003C4.53 3.81003 3.78 4.59003 2.61 4.75003V6.13003C2.49 6.19003 2.36 6.26003 2.24 6.33003V4.75003C1.07 4.59003 0.32 3.81003 0 2.41003C1.42 2.73003 2.21 3.49003 2.36 4.68003H2.49C2.65 3.48003 3.43 2.73003 4.85 2.41003Z"
            fill="url(#fg-gradient)"
          />
          <path
            d="M2.42987 0C1.62987 1.26 1.62987 2.37 2.41987 3.34C3.20987 2.37 3.21987 1.26 2.42987 0Z"
            fill="url(#fg-gradient)"
          />
        </g>

        <text
          x="58"
          y="41"
          font-family="Montserrat, system-ui, -apple-system, Segoe UI, sans-serif"
          font-size="32"
          font-weight="700"
          letter-spacing="0.2px"
          fill="url(#fg-gradient)"
        >
          FarmGate
        </text>

        <text
          x="60"
          y="56"
          font-family="Montserrat, system-ui, -apple-system, Segoe UI, sans-serif"
          font-size="14"
          font-weight="600"
          letter-spacing="2px"
          fill="rgba(15, 122, 58, 0.95)"
        >
          AFRICA
        </text>
      </g>

      <!-- Monochrome treatment -->
      <g class="brandLogo__treatment brandLogo__treatment--mono">
        <g transform="translate(12 10) scale(5.6)">
          <path
            d="M4.85 2.41003C4.53 3.81003 3.78 4.59003 2.61 4.75003V6.13003C2.49 6.19003 2.36 6.26003 2.24 6.33003V4.75003C1.07 4.59003 0.32 3.81003 0 2.41003C1.42 2.73003 2.21 3.49003 2.36 4.68003H2.49C2.65 3.48003 3.43 2.73003 4.85 2.41003Z"
            fill="currentColor"
          />
          <path
            d="M2.42987 0C1.62987 1.26 1.62987 2.37 2.41987 3.34C3.20987 2.37 3.21987 1.26 2.42987 0Z"
            fill="currentColor"
          />
        </g>

        <text
          x="58"
          y="41"
          font-family="Montserrat, system-ui, -apple-system, Segoe UI, sans-serif"
          font-size="32"
          font-weight="700"
          letter-spacing="0.2px"
          fill="currentColor"
        >
          FarmGate
        </text>

        <text
          x="60"
          y="56"
          font-family="Montserrat, system-ui, -apple-system, Segoe UI, sans-serif"
          font-size="14"
          font-weight="600"
          letter-spacing="2px"
          fill="currentColor"
          opacity="0.9"
        >
          AFRICA
        </text>
      </g>
    </svg>

    <!-- Compact mark -->
    <svg
      class="brandLogo__mark"
      viewBox="0 0 5 7"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="fg-gradient-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0f7a3a" />
          <stop offset="0.6" stop-color="#1aa34a" />
          <stop offset="1" stop-color="#f2c94c" />
        </linearGradient>
      </defs>

      <g class="brandLogo__treatment brandLogo__treatment--gradient">
        <path
          d="M4.85 2.41003C4.53 3.81003 3.78 4.59003 2.61 4.75003V6.13003C2.49 6.19003 2.36 6.26003 2.24 6.33003V4.75003C1.07 4.59003 0.32 3.81003 0 2.41003C1.42 2.73003 2.21 3.49003 2.36 4.68003H2.49C2.65 3.48003 3.43 2.73003 4.85 2.41003Z"
          fill="url(#fg-gradient-mark)"
        />
        <path
          d="M2.42987 0C1.62987 1.26 1.62987 2.37 2.41987 3.34C3.20987 2.37 3.21987 1.26 2.42987 0Z"
          fill="url(#fg-gradient-mark)"
        />
      </g>

      <g class="brandLogo__treatment brandLogo__treatment--mono">
        <path
          d="M4.85 2.41003C4.53 3.81003 3.78 4.59003 2.61 4.75003V6.13003C2.49 6.19003 2.36 6.26003 2.24 6.33003V4.75003C1.07 4.59003 0.32 3.81003 0 2.41003C1.42 2.73003 2.21 3.49003 2.36 4.68003H2.49C2.65 3.48003 3.43 2.73003 4.85 2.41003Z"
          fill="currentColor"
        />
        <path
          d="M2.42987 0C1.62987 1.26 1.62987 2.37 2.41987 3.34C3.20987 2.37 3.21987 1.26 2.42987 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  </span>
</template>

<style scoped>
.brandLogo {
  /* configurable sizing */
  --brandLogo-maxW: 180px;
  --brandLogo-minW: 72px;
  --brandLogo-maxH: 44px;

  display: inline-grid;
  align-items: center;
  justify-items: center;

  inline-size: clamp(var(--brandLogo-minW), 18vw, var(--brandLogo-maxW));
  max-inline-size: 100%;
  max-block-size: var(--brandLogo-maxH);

  /* enables container queries for lockup/mark switching */
  container-type: inline-size;

  /* monochrome defaults inherit currentColor from parent */
  color: currentColor;
}

.brandLogo__full,
.brandLogo__mark {
  display: block;
  inline-size: 100%;
  block-size: auto;
  max-block-size: var(--brandLogo-maxH);
}

/* start with full lockup */
.brandLogo__mark {
  display: none;
}

/* When width is constrained, switch to mark to avoid overlap/wrapping */
@container (max-width: 140px) {
  .brandLogo__full {
    display: none;
  }
  .brandLogo__mark {
    display: block;
    inline-size: auto;
    block-size: min(28px, var(--brandLogo-maxH));
  }
}

/* Variant switching */
.brandLogo__treatment {
  display: none;
}

.brandLogo[data-variant="gradient"] .brandLogo__treatment--gradient {
  display: block;
}

.brandLogo[data-variant="mono"] .brandLogo__treatment--mono {
  display: block;
}

/* Auto: gradient in light scheme, mono in dark scheme */
.brandLogo[data-variant="auto"] .brandLogo__treatment--gradient {
  display: block;
}

@media (prefers-color-scheme: dark) {
  .brandLogo[data-variant="auto"] .brandLogo__treatment--gradient {
    display: none;
  }
  .brandLogo[data-variant="auto"] .brandLogo__treatment--mono {
    display: block;
  }
}

/* Prevent SVG text selection/cursor weirdness */
.brandLogo svg {
  user-select: none;
}
</style>
