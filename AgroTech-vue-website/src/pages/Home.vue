<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";

import { ref } from "vue";

const currentPage = ref("home");
const videoVariant = ref(1);
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

    <!--Main-content---->
    <!-- <MainContent v-else />-->

    <!--Main-content-->

    <!-- <MainContent />-->
    <!--Footer-component-->
    <!-- <Footer />-->
  </div>
</template>

<style scoped></style>
