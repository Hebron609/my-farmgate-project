<template>
  <div>
    <h3 class="mb-2 font-semibold text-white font-livvic">{{ title }}</h3>
    <ul class="space-y-1">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="hover:text-[#F2CB00] transition-colors"
      >
        <!-- Use normal anchor for multipage -->
        <a :href="item.href" class="footer-underline-link">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
