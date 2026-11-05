<template>
  <div>
    <h3 class="mb-2 font-semibold text-white font-livvic">{{ title }}</h3>
    <ul class="space-y-1">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="hover:text-[#F2CB00] transition-colors"
      >
        <!-- Use button for actions, normal anchor for links -->
        <button
          v-if="item.action"
          @click="item.action"
          class="footer-underline-link text-left bg-transparent border-none p-0 cursor-pointer focus:outline-none"
        >
          {{ item.label }}
        </button>
        <a
          v-else
          :href="item.href"
          @click="handleLinkClick($event, item.href)"
          class="footer-underline-link"
        >{{ item.label }}</a>
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

function handleLinkClick(event, href) {
  if (!href || !href.includes("#")) return;

  const [path, hash] = href.split("#");
  if (!hash) return;

  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const targetPath = path.replace(/\/$/, "") || "/";

  // Check if target is current page (accounting for clean URLs and .html extensions)
  const isCurrentPage =
    currentPath === targetPath ||
    currentPath === `${targetPath}.html` ||
    `${currentPath}.html` === targetPath;

  if (isCurrentPage) {
    const el = document.getElementById(hash);
    if (el) {
      event.preventDefault();
      history.pushState(null, "", href);
      const HEADER_OFFSET = 90;
      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}
</script>
