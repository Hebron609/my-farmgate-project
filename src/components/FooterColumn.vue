<template>
  <div>
    <h4 class="font-semibold text-[rgb(13,46,26)] mb-2">{{ title }}</h4>
    <ul class="space-y-1">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="hover:text-[rgb(3,89,37)] transition-colors"
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
