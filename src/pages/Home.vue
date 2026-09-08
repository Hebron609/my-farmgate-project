<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";

const currentPage = ref("home");

// Check sessionStorage before initializing videoVariant
const savedVariant = sessionStorage.getItem("activateVideo2") === "true";
const urlVariant = new URLSearchParams(window.location.search).get("v") === "2";
const initialVariant = (savedVariant || urlVariant) ? 2 : 1;

// Only clear after we've consumed it — do NOT clear here so back-button
// navigation (BFCache miss) can also read it in the pageshow handler
const videoVariant = ref(initialVariant);

// Clean ?v=2 from URL silently if present
if (urlVariant) {
  const url = new URL(window.location.href);
  url.searchParams.delete("v");
  window.history.replaceState({}, "", url.pathname + (url.search || ""));
}

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

onMounted(() => {
  // Clear sessionStorage now that we've consumed it for initial render
  sessionStorage.removeItem("activateVideo2");

  // Check for hash in URL to determine video variant
  if (window.location.hash === "#video2") {
    videoVariant.value = 2;
  }

  // When browser Back/Forward button restores this page (BFCache miss),
  // pageshow fires — check sessionStorage to restore Video 2 if needed.
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      // BFCache restore — page wasn't re-evaluated, videoVariant is intact
      // Nothing needed; Vue state is preserved by BFCache
      return;
    }
    // Fresh reload via back button (BFCache miss) — sessionStorage already
    // consumed above, but if it's still set (navigated away quickly), use it
    if (sessionStorage.getItem("activateVideo2") === "true") {
      sessionStorage.removeItem("activateVideo2");
      videoVariant.value = 2;
    }
  });

  const api = initScrollReveal();
  if (!api) return;
  api.reveal(".reveal-fade", {
    ...revealEffects.fade,
    duration: 900,
    delay: 200,
  });
  api.reveal(".reveal-slide-up", {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 200,
  });
  api.reveal(".reveal-slide-left", {
    ...revealEffects.slideLeft,
    duration: 700,
    delay: 150,
  });
  api.reveal(".reveal-slide-right", {
    ...revealEffects.slideRight,
    duration: 700,
    delay: 200,
  });
  api.reveal(".reveal-stagger", {
    ...revealEffects.stagger,
    duration: 600,
    interval: 120,
    delay: 100,
  });
});
</script>

<template>
  <div class="relative">
    <!--Header-component-->
    <Header
      :showMobileLogo="false"
      :videoVariant="videoVariant"
      @pageChange="currentPage = $event"
    />
    <Hero
      v-if="currentPage === 'home'"
      :videoVariant="videoVariant"
      @update:videoVariant="videoVariant = $event"
    />
  </div>
</template>

<style scoped></style>
