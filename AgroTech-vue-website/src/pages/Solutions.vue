<template>
  <div>
    <div class="relative overflow-hidden h-[400px] sm:h-[500px] md:h-[580px]">
  <!-- Header-component -->
  <Header />

  <img
    src="/src/assets/img/our-solutions-banner.jpg"
    class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.56] z-0"
    alt=""
  />

  <!-- Hero-section-content -->
  <div
    class="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6 lg:px-8"
  >
    <h1
      class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 md:px-6 flex items-center gap-2"
    >
      <font-awesome-icon icon="leaf" class="text-[10px] sm:text-xs md:text-sm" />
      <span>Our solutions</span>
    </h1>
    <p
      class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
    >
      Transforming agriculture through innovation.
    </p>

    <p
      class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
    >
      Our goal is simple: to empower growers, strengthen supply chains, and regenerate the land we depend on.
    </p>
  </div>
</div>

<!--Flex-heading-->
<section class="max-w-[1440px] mx-auto py-10 sm:py-20 font-montserrat px-4 sm:px-6 lg:px-8">
  <div class="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
    <div>
      <h1
        class="flex items-center gap-1 px-2 py-1 mb-4 border border-gray-200 rounded-2xl"
      >
        <font-awesome-icon icon="leaf" class="text-[10px] sm:text-xs text-green-900" />
        <span class="text-[10px] sm:text-xs font-semibold">Delivering impact at every level</span>
      </h1>
    </div>

    <div>
      <h1 class="text-xl sm:text-2xl lg:text-4xl max-w-[90%] sm:max-w-[700px] font-semibold">
        Explore how our integrated solutions help farms and food systems thrive.
      </h1>
    </div>
  </div>
</section>
  </div>

  <Footer />
   
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

</script>

<style>

</style>
