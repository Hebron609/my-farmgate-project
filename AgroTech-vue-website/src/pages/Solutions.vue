<template>
  <div>
    <div class="relative overflow-hidden h-[580px]">
      <!--Header-component-->
      <Header />

      <img
        src="/src/assetsnpm/img/our-solutions-banner.jpg"
        class="absolute top-0 left-0 w-full h-[580px] object-cover brightness-[0.56] z-0"
        alt=""
      />

      <!-- Hero-section-content -->
      <div
        class="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center top-[10px]"
      >
        <h1
          class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-sm px-5 flex items-center gap-2"
        >
          <font-awesome-icon icon="leaf" class="text-xs" />
          <span>Our solutions</span>
        </h1>
        <p class="max-w-[700px] text-5xl font-semibold text-white mb-8">
          Transforming agriculture through innovation.
        </p>

        <p class="text-white max-w-[500px]">
          Our goal is simple: to empower growers, strengthen supply chains, and regenerate the land we depend on.
        </p>
      </div>
    </div>

    <!--Flex-heading-->
    <section class="max-w-[1440px] mx-auto py-30 font-montserrat px-8">
      <div class="flex items-center justify-between">
        <div>
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl "
        >
          <font-awesome-icon icon="leaf" class="text-xs text-green-900" />
          <span class="text-xs font-semibold">Delivering impact at every level</span>
        </h1>
      </div>

      <div>
        <h1 class="text-2xl max-w-[700px] font-semibold lg:text-4xl">
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
