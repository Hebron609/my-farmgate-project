<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

<!-- Hero Section -->
<div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <div
        class="absolute inset-0 bg-[url('/src/assets/img/crop-planting.jpg')] bg-cover bg-center opacity-20"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
      ></div>

      <!-- Futuristic elements -->
      <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/30 animate-pulse"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/50 animate-ping"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/40 animate-pulse"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center"
      >
        <div class="mb-6">
          <LeafIcon
            class="w-12 h-12 mx-auto mb-4 text-green-400 animate-bounce"
          />
          <h1
            class="mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl"
          >
            OUR IMPACT
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
        We are committed to advancing agriculture and impacting lives.

        </p>
        <p class="text-gray-300 max-w-[600px] text-sm md:text-base">
          FarmGate Africa is more than a company — we aim to contribute towards achieving SDGs 1, 2, 5, 8, 9, 13 & 17 in every community we work. Join us make a big impact.

        </p>
      </div>
    </div>

    <div class="min-h-screen selection:bg-green-100">
      <section
        class="relative block -mt-2 z-20 w-full min-h-[600px] h-[80vh] md:h-[800px] overflow-hidden font-montserrat bg-[#1b2418]"
      >
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 block object-cover w-full h-full scale-[1.30] object-center"
        >
          <source :src="africanFarmVideo" type="video/mp4" />
        </video>

        <div class="absolute inset-0 bg-[#1b2418]/70"></div>

        <div
          class="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 flex flex-col justify-between h-full"
        >
          <div class="md:pt-12">
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-white md:text-5xl mt-[-50px] md:mt-[-65px]"
            >
              OUR IMPACT STATS
            </h2>
          </div>

          <div
            class="flex flex-col justify-between gap-10 md:flex-row md:items-center md:mt-20 mt-[-120px] ]"
          >
            <p
              class="md:max-w-[40%] leading-relaxed text-sm font-medium leading-relaxed text-white md:text-lg opacity-90"
            >
              Our conservation efforts include reforestation,
wetland restoration, and habitat preservation
to enhance biodiversity and ecological health.

            </p>

            <button
              class="relative inline-flex items-center px-4 py-4 mb-2 overflow-hidden bg-green-700 cursor-pointer md:px-8 group rounded-xl w-fit mt-[-20px] md:mt-[-10px]"
            >
              <span
                class="flex items-center gap-3 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <span
                  class="text-xs font-bold tracking-widest text-white uppercase"
                  >JOIN US NOW</span
                >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>

              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-3 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
              >
                <span class="text-xs font-bold tracking-widest uppercase"
                  >JOIN US NOW</span
                >
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            class="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6 mt-[-32px] md:mt-0"
          >
            <div
              v-for="stat in impactStats"
              :key="stat.label"
              class="bg-[#4b5320]/80 p-4 md:p-12 flex flex-col justify-center min-h-[60px] md:min-h-[80px] rounded-xl"
            >
              <div class="mb-2 text-2xl font-bold text-white md:text-5xl">
                {{ stat.value }}
              </div>
              <div
                class="text-xs font-medium leading-tight text-white md:text-sm opacity-90"
              >
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="w-full bg-[#035925] text-white relative overflow-hidden">
        <div class="mx-auto max-w-[1440px] p-12 md:p-20">
          <div
            class="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center"
          >
            <div class="relative z-10">
              <h3 class="mb-6 text-3xl font-medium leading-tight md:text-4xl">
                Committed to Global Impact
              </h3>
              <p class="max-w-md mb-8 text-green-100/80">
                We are partnering with stakeholders to address food insecurity
                in Africa, dedicated to achieving the UN Sustainable Development
                Goals in every community.
              </p>

              <div class="flex flex-wrap gap-3">
                <span
                  v-for="sdg in [1, 2, 5, 8, 9, 13, 17]"
                  :key="sdg"
                  class="px-4 py-2 text-xs font-bold transition-colors border rounded-full bg-white/10 border-white/10 hover:bg-white/20"
                >
                  SDG {{ sdg }}
                </span>
              </div>
            </div>

            <div
              class="relative z-10 flex flex-col items-center justify-center lg:items-end"
            >
              <a
                href="/marketplace.html"
                class="relative flex items-center px-12 py-5 overflow-hidden bg-white rounded-full cursor-pointer group backdrop-blur-md"
              >
                <span
                  class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <LeafIcon class="w-4 h-4 text-[#035925]" />
                  <span
                    class="text-sm font-black leading-none text-[#035925] uppercase tracking-widest"
                    >Join our impact</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-black" />
                  <span
                    class="text-sm font-black leading-none tracking-widest uppercase"
                    >Join our impact</span
                  >
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          class="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 transform translate-x-1/4"
        ></div>
      </div>

     
    </div>

    <GrowWithUs />

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
            :src="farmerImg"
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
import GrowWithUs from "../components/GrowWithUs.vue";

import missionHeroImg from "@/assets/img/Mission-hero-img1.png";
import africanFarmVideo from "@/assets/video/African_Farm_Video_Generation.mp4";
import farmGateLogo from "@/assets/img/FarmGate Africa 1 1.png";
import visionFutureImg from "@/assets/img/Vision-future-img.jpg";
import farmerImg from "@/assets/img/farmer.webp";

const impactStats = [
  { value: "20+", label: "Projects Funded" },
  { value: "₵3.5m+", label: "Input Financing" },
  { value: "5acres", label: "Land Cultivated " },
  { value: "1000+", label: "Farmers Supported" },
  { value: "25+", label: "Local communities transformed" },
];
</script>

<style></style>
