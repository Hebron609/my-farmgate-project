<script setup>
defineProps({
  color: {
    type: String,
    default: "currentColor", // inherits text color
  },
  size: {
    type: String,
    default: "w-3.5 h-4.5", // tailwind classes
  },
  rotate: {
    type: String,
    default: "rotate-[15deg]",
  },
});
</script>

<template>
  <svg
    :class="[size, rotate]"
    viewBox="0 0 5 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.85 2.41003C4.53 3.81003 3.78 4.59003 2.61 4.75003V6.13003C2.49 6.19003 2.36 6.26003 2.24 6.33003V4.75003C1.07 4.59003 0.32 3.81003 0 2.41003C1.42 2.73003 2.21 3.49003 2.36 4.68003H2.49C2.65 3.48003 3.43 2.73003 4.85 2.41003Z"
      :fill="color"
    />
    <path
      d="M2.42987 0C1.62987 1.26 1.62987 2.37 2.41987 3.34C3.20987 2.37 3.21987 1.26 2.42987 0Z"
      :fill="color"
    />
  </svg>
</template>
