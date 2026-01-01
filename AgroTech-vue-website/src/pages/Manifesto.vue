<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div class="relative overflow-hidden h-[480px] md:h-[580px] pt-32">
      <img
        src="/src/assets/img/farm-pic6.jpg"
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
          <span>Our Manifesto</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          Our commitment to the future.
        </p>
        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          Read our guiding principles for sustainable agriculture.
        </p>
      </div>
    </div>

    <!-- Manifesto Content Section -->
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="mx-2">
        <div class="relative">
          <div
            class="flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6"
          >
            <p
              class="max-w-[90%] sm:max-w-[700px] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
            >
              We believe in agriculture that nourishes both people and the
              planet.
            </p>
            <p
              class="text-gray-600 max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 mt-2"
            >
              Our manifesto outlines our dedication to innovation,
              sustainability, and community empowerment in the agricultural
              sector.
            </p>
          </div>
        </div>
      </div>
    </section>

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
