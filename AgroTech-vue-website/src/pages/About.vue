<template>
  <div>
    <div class="relative overflow-hidden h-[580px]">
      <!--Header-component-->
      <Header />

      <img
        src="/src/assets/img/about-us-banner.jpg"
        class="absolute top-0 left-0 w-full h-[580px] object-cover brightness-[0.59] z-0"
        alt=""
      />

      <!-- Hero-section-content -->
<div
  class="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center top-[10px] px-4 sm:px-6 lg:px-8"
>
  <h1
    class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-5 md:px-6 flex items-center gap-2"
  >
    <font-awesome-icon icon="leaf" class="text-[10px] sm:text-xs md:text-sm" />
    <span>About Us</span>
  </h1>
  <p
    class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
  >
    We are committed to advancing agriculture.
  </p>

  <p
    class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
  >
    FarmGate is more than a company — we're a movement toward smarter, more sustainable farming.
  </p>
</div>
    </div>

    <!-- Our Track Record Section -->
    <section class="max-w-[1440px] mx-auto py-30 font-montserrat px-6">
      <div
        class="flex flex-col items-center gap-10 lg:flex-row lg:justify-between"
      >
        <!-- Heading -->
        <h1
          class="font-semibold max-w-[450px] text-center lg:text-left text-lg text-gray-500"
        >
          Our conservation efforts include reforestation, wetland restoration,
          and habitat preservation to enhance biodiversity and ecological
          health.
        </h1>

        <!-- Stats Container -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Card 1 -->
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">20+</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Years in Business
            </p>
          </div>

          <!-- Card 2 -->
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">1000+</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Farmers Supported
            </p>
          </div>

          <!-- Card 3 -->
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">98%</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-[1440px] mx-auto py-20 font-montserrat px-6">
      <div class="mx-2">
        <div class="relative">
          <img
            src="/src/assets/img/farm-pic7.jpg"
            class="w-full h-[480px] object-cover rounded-xl brightness-60 relative"
            alt=""
          />

          <!-- Hero-section-content -->
          <div
            class="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center top-[10px]"
          >
            <h1
              class="flex items-center gap-2 px-5 py-2 mb-4 text-sm font-semibold bg-white text-green-950 rounded-4xl"
            >
              <font-awesome-icon icon="leaf" class="text-xs" />
              <span>Who We Are</span>
            </h1>
            <p class="max-w-[700px] text-4xl font-semibold text-white mb-4">
              We are a team of agronomists, technologists, sustainability
              experts.
            </p>

            <p class="text-white max-w-[700px] text-sm mb-15">
              We partner with farmers and communities in over 15 countries to
              enhance productivity, protect the planet, and empower those behind
              each harvest.
            </p>

            <button
              class="md:flex group relative overflow-hidden p-4 rounded-4xl items-center gap-2 cursor-pointer bg-[rgb(3,89,37)] text-white font-semibold text-sm"
            >
              <span
                class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <font-awesome-icon icon="leaf" class="text-xs" />
                <span class="text-md">Let's work together</span>
              </span>
              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-300 bg-gradient-to-r group-hover:translate-y-0"
              >
                <font-awesome-icon icon="leaf" class="text-xs" />
                <span class="font-semibold text-md">Let's work together</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <!-- Tag -->
      <div class="mb-10">
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[139px]"
        >
          <font-awesome-icon icon="leaf" class="text-xs text-green-900" />
          <span class="text-xs font-semibold">Why choose us</span>
        </h1>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Left Side -->
        <div>
          <img
            src="/src/assets/img/farm-pic1.jpg"
            alt="Farm aerial"
            class="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div class="flex flex-col justify-center">
          <!-- Heading -->
          <h2
            class="text-3xl font-semibold leading-tight text-gray-900 lg:text-2xl max-w-[550px]"
          >
            We’re more than just a farm — we’re your trusted partner in
            sustainable growing.
          </h2>
          <p class="mt-4 text-gray-600">
            From using organic methods and precision irrigation to minimizing
            chemical inputs and reducing waste through composting, every
            decision we make is guided by long-term environmental
            responsibility.
          </p>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
            <!-- Card 1 -->
            <div class="p-6 bg-white shadow-sm rounded-xl">
              <img
                src="/src/assets/img/farm-pic10.jpg"
                alt="Innovation"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold text-gray-900">Effective Innovation</h3>
              <p class="mt-2 text-sm text-gray-600">
                Years of proven international experience in delivering scalable
                agricultural solutions across diverse climates and regions.
              </p>
            </div>

            <!-- Card 2 -->
            <div class="p-6 text-white bg-black rounded-xl">
              <img
                src="/src/assets/img/farm-pic4.jpg"
                alt="Sustainable"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold">Sustainable Practices</h3>
              <p class="mt-2 text-sm text-gray-300">
                From pesticide-free farming to smart water use, we’re committed
                to methods that respect the planet and generations.
              </p>
            </div>

            <!-- Card 3 -->
            <div class="p-6 text-white bg-green-900 rounded-xl">
              <img
                src="/src/assets/img/farm-pic2.jpg"
                alt="Market"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold">Trusted by Thousands</h3>
              <p class="mt-2 text-sm text-green-100">
                Farmers, distributors, and partners worldwide rely on us for
                quality, reliability, and long-term success.
              </p>
            </div>

            <!-- Card 4 -->
            <div class="p-6 bg-gray-50 rounded-xl">
              <img
                src="/src/assets/img/farm-pic1.jpg"
                alt="Global"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold text-gray-900">Global Expertise</h3>
              <p class="mt-2 text-sm text-gray-600">
                Years of international experience delivering scalable
                agricultural solutions across diverse climates and regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our-history-section -->
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <!-- Section Label -->
      <div class="flex justify-center">
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[110px] justify-center"
        >
          <font-awesome-icon icon="leaf" class="text-xs text-green-900" />
          <span class="text-xs font-semibold">Our history</span>
        </h1>
      </div>

      <!-- Heading -->
      <div class="flex justify-center mb-12">
        <h1
          class="text-3xl font-semibold text-center leading-tighter max-w-[380px]"
        >
          From humble roots to a global vision.
        </h1>
      </div>

      <!-- Timeline Component (placed below heading, full width) -->
      <Timeline />
    </section>

<!--Grow-with-us-section-->
<section class="max-w-[1440px] mx-auto py-20 font-montserrat px-4 sm:px-6 lg:px-8">
  <div class="mx-2">
    <div class="relative">
      <img
        src="/src/assets/img/farm-pic9.jpg"
        class="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover rounded-xl brightness-60"
        alt=""
      />

      <div
        class="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6"
      >
        <p
          class="max-w-[90%] sm:max-w-[500px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight"
        >
          Grow something great together.
        </p>

        <p
          class="text-white max-w-[90%] sm:max-w-[490px] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 mt-2"
        >
          Whether you’re a farmer, distributor, or partner, we’re here to support your goals with sustainable solutions and global expertise.
        </p>

        <button
          class="md:flex group relative overflow-hidden p-3 sm:p-4 rounded-4xl items-center gap-2 cursor-pointer bg-[rgb(3,89,37)] text-white font-semibold text-xs sm:text-sm"
        >
          <span
            class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
          >
            <font-awesome-icon icon="leaf" class="text-[10px] sm:text-xs" />
            <span class="text-xs sm:text-sm">Let's work together</span>
          </span>
          <span
            class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-300 bg-gradient-to-r group-hover:translate-y-0"
          >
            <font-awesome-icon icon="leaf" class="text-[10px] sm:text-xs" />
            <span class="text-xs font-semibold sm:text-sm">Let's work together</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

    <!--Footer-component-->
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Timeline from "../components/Timeline.vue";
</script>

<style></style>
