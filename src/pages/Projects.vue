<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div class="relative overflow-hidden h-[480px] md:h-[580px] pt-32">
      <img
        :src="farmTractor1"
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
          <span>Our Projects</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          Innovative initiatives driving change.
        </p>
        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          Explore our ongoing projects that are making a difference in
          agriculture.
        </p>
      </div>
    </div>

    <!-- Projects Grid Section -->
    <!--
    <section
      class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16 font-montserrat"
    >
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            :src="farmCrops"
            alt="Project 1"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 lg:mb-0 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Sustainable Farming Initiative
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Empowering local farmers with modern techniques and tools.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            :src="farmIrrigation"
            alt="Project 2"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Water Conservation Project
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Implementing efficient irrigation systems to save water resources.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            :src="farmPic9"
            alt="Project 3"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Community Training Program
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Educating communities on best agricultural practices.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            :src="farmPic1"
            alt="Project 4"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Technology Integration
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Bringing cutting-edge tech to traditional farming methods.
            </p>
          </div>
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

import farmTractor1 from "@/assets/img/farm-tractor1.jpg";
import farmCrops from "@/assets/img/farm-crops.jpg";
import farmIrrigation from "@/assets/img/farm-irrigation.jpg";
import farmPic9 from "@/assets/img/farm-pic9.jpg";
import farmPic1 from "@/assets/img/farm-pic1.jpg";
</script>

<style></style>
