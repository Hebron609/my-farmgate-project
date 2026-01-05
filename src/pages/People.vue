<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div class="relative overflow-hidden h-[480px] md:h-[580px] pt-32">
      <img
        src="/src/assets/img/group-farm-image.jpg"
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
          <span>Our People</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          The team behind the mission.
        </p>
        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          Meet the experts and innovators driving sustainable agriculture
          forward.
        </p>
      </div>
    </div>

    <!-- Team Section -->

    <!--
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="mb-10">
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[110px] justify-center"
        >
          <LeafIcon class="text-green-700" />
          <span class="text-xs font-semibold">Our Team</span>
        </h1>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <img
            src="/src/assets/img/farm-ceo.jpg"
            alt="CEO"
            class="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div class="flex flex-col justify-center">
          <h2
            class="text-3xl font-semibold leading-tight text-gray-900 lg:text-2xl max-w-[550px]"
          >
            Leadership with vision.
          </h2>
          <p class="mt-4 text-gray-600">
            Our CEO and leadership team bring decades of experience in
            agriculture and sustainability.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
        <div class="p-6 bg-white shadow-sm rounded-xl">
          <img
            src="/src/assets/img/farmer-img1.avif"
            alt="Team Member"
            class="w-12 h-12 mb-3 rounded-md"
          />
          <h3 class="font-semibold text-gray-900">Agronomist</h3>
          <p class="mt-2 text-sm text-gray-600">
            Specializing in crop science and soil health.
          </p>
        </div>
        <div class="p-6 text-white bg-black rounded-xl">
          <img
            src="/src/assets/img/farmer-img2.jpg"
            alt="Team Member"
            class="w-12 h-12 mb-3 rounded-md"
          />
          <h3 class="font-semibold">Technologist</h3>
          <p class="mt-2 text-sm text-gray-300">
            Developing smart farming solutions.
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
