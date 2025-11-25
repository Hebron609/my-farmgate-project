<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";


import { ref } from 'vue';

const currentPage = ref('home');
</script>

<template>
  <div class="relative">
    <!--Header-component-->
    <Header @pageChange="currentPage = $event" />
    <Hero v-if="currentPage === 'home'" />

    <!--Main-content---->
   <!-- <MainContent v-else />-->

    <!--Main-content-->

   <!-- <MainContent />-->
    <!--Footer-component-->
   <!-- <Footer />-->
  </div>
</template>





<style scoped></style>
