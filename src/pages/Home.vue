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

    <!-- Preview Sections -->
     <!--
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="p-6 bg-white shadow-sm rounded-xl">
          <h3 class="font-semibold text-gray-900">About Us</h3>
          <p class="mt-2 text-sm text-gray-600">
            Learn about our mission and vision.
          </p>
          <a href="/about.html" class="text-green-600 mt-4 inline-block"
            >Read More</a
          >
        </div>
        <div class="p-6 bg-white shadow-sm rounded-xl">
          <h3 class="font-semibold text-gray-900">Our Solutions</h3>
          <p class="mt-2 text-sm text-gray-600">
            Explore our agricultural innovations.
          </p>
          <a href="/solutions.html" class="text-green-600 mt-4 inline-block"
            >Explore</a
          >
        </div>
        <div class="p-6 bg-white shadow-sm rounded-xl">
          <h3 class="font-semibold text-gray-900">Marketplace</h3>
          <p class="mt-2 text-sm text-gray-600">
            Connect with farmers and buyers.
          </p>
          <a href="/marketplace.html" class="text-green-600 mt-4 inline-block"
            >Visit</a
          >
        </div>
      </div>
    </section>

  -->

    <!--Main-content---->
    <!-- <MainContent v-else />-->

    <!--Main-content-->

    <!-- <MainContent />-->
    <!--Footer-component-->
    <!-- <Footer />-->
  </div>
</template>

<style scoped></style>
