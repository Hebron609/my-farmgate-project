<template>
  <div>
    <p class="font-semibold text-white mb-2">{{ title }}</p>
    <ul class="space-y-1">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="hover:text-[#F2CB00] transition-colors"
      >
        <!-- Use normal anchor for multipage -->
        <a :href="item.href">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: {
    type: Array,
    default: () => []
  }
})
</script>
