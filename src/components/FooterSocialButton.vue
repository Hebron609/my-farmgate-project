<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center gap-2 px-2 py-1 font-semibold transition duration-300 ease-in-out border border-gray-300 cursor-pointer rounded-2xl text-green-950 hover:bg-green-900 hover:text-white"
  >
    <font-awesome-icon :icon="icon" class="text-sm" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  href: {
    type: String,
    required: true
  }
})
</script>
