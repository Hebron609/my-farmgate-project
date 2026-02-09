<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";

const currentPage = ref("home");

// Check sessionStorage before initializing videoVariant
const initialVariant =
  sessionStorage.getItem("activateVideo2") === "true" ? 2 : 1;
if (initialVariant === 2) {
  sessionStorage.removeItem("activateVideo2");
}
const videoVariant = ref(initialVariant);

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

onMounted(() => {
  // Check for hash in URL to determine video variant
  if (window.location.hash === "#video2") {
    videoVariant.value = 2;
  }

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
