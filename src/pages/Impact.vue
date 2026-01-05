<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div class="relative overflow-hidden h-[480px] md:h-[580px] pt-32">
      <img
        src="/src/assets/img/farm-pic1.jpg"
        class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.59] z-0"
        alt=""
      />

      <div
        class="absolute z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center top-2 sm:px-6 lg:px-8"
      >
        <h1
          class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-sm px-4 sm:px-5 md:px-3 flex items-center gap-2"
        >
          <LeafIcon class="text-white" />
          <span>Our Impact</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          Transforming lives through sustainable agriculture.
        </p>
        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          See the real difference we're making in communities across Africa.
        </p>
      </div>
    </div>

    <!-- Impact Stats Section -->
    <section class="max-w-[1440px] mx-auto py-30 font-montserrat px-6">
      <div
        class="flex flex-col items-center gap-10 lg:flex-row lg:justify-between"
      >
        <h1
          class="font-semibold max-w-[450px] text-center lg:text-left text-lg text-gray-500"
        >
          Our measurable impact on farmers, communities, and the environment.
        </h1>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">1000+</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Farmers Supported
            </p>
          </div>
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">50+</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Communities Reached
            </p>
          </div>
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">98%</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stories Section -->
     <!--
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="mb-10">
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[139px]"
        >
          <LeafIcon class="text-green-700" />
          <span class="text-xs font-semibold">Impact Stories</span>
        </h1>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <img
            src="/src/assets/img/farmer.webp"
            alt="Farmer Story"
            class="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div class="flex flex-col justify-center">
          <h2
            class="text-3xl font-semibold leading-tight text-gray-900 lg:text-2xl max-w-[550px]"
          >
            Empowering farmers with sustainable solutions.
          </h2>
          <p class="mt-4 text-gray-600">
            Hear from farmers who have transformed their livelihoods through our
            programs.
          </p>
        </div>
      </div>
    </section>

    -->

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
</script>

<style></style>
