<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Hero Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.9] z-0"
      src="/src/assets/video/farmgate-original-video.mp4"
      autoplay
      muted
      loop
    ></video>

    <!-- Scroll Indicator -->
    <div class="absolute mt-12 transform -translate-x-1/2 bottom-6 left-1/2">
      <ScrollDown />
    </div>

    <!-- Hero-section-content -->
    <div
      class="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-full px-8 text-white z-10 pb-5 max-w-[1440px] mx-auto"
    >
      <div class="flex justify-center mb-2 font-montserrat">
        <!--Centered-hero-content-version-->

        <h1
          class="font-semibold max-w-[1000px] text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Impacting lives through sustainable agriculture...
        </h1>
      </div>

      <div class="flex justify-center">
        <p
          class="relative pb-2 mt-8 cursor-pointer group w-fit hover:text-yellow-400"
        >
          <span class="text-md">Start growing with us</span>
          <font-awesome-icon
            icon="arrow-right"
            class="ml-10 transition-transform duration-300 text-md group-hover:translate-x-5"
          />
          <span
            class="absolute left-0 bottom-0 h-[1px] w-full bg-white origin-left transition-transform duration-450 group-hover:scale-x-0"
          ></span>
        </p>
      </div>
    </div>

    <!-- Footer-section -->
  </div>
</template>

<script setup>
import ScrollDown from "@/components/ScrollDown.vue";
</script>

<style></style>
