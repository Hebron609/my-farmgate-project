<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div class="relative overflow-hidden h-[480px] md:h-[580px] pt-32">
      <img
        :src="missionHeroImg"
        class="absolute top-0 left-0 w-full h-full object-cover brightness-[1] z-0"
        style="transform: scale(1.1)"
        alt=""
      />

      <div
        class="absolute z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center top-2 sm:px-6 lg:px-8"
      >
        <h1
          class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-sm px-4 sm:px-5 md:px-3 flex items-center gap-2"
        >
          <LeafIcon class="text-white" />
          <span>Our Mission</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          Transforming lives through sustainable agriculture.
        </p>
        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          We exist to impact lives through sustainable agriculture and shared
          prosperity.
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
          class="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col justify-between h-full"
        >
          <div class="md:pt-12">
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-white md:text-5xl"
            >
              OUR IMPACT
            </h2>
          </div>

          <div
            class="flex flex-col justify-between gap-6 md:flex-row md:items-center md:mt-20"
          >
            <p
              class="max-w-2xl text-base font-medium leading-relaxed text-white md:text-lg opacity-90"
            >
              By providing modern technology, sustainable farming practices, and
              direct market access, we have empowered smallholder farmers to
              maximize their yields and secure their financial future.
            </p>

            <button
              class="relative inline-flex items-center px-4 py-4 mb-2 overflow-hidden bg-green-700 cursor-pointer md:px-8 group rounded-xl w-fit"
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

          <div class="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-6">
            <div
              v-for="stat in impactStats"
              :key="stat.label"
              class="bg-[#4b5320]/80 p-8 md:p-12 flex flex-col justify-center min-h-[180px] rounded-xl"
            >
              <div class="mb-2 text-4xl font-bold text-white md:text-6xl">
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

      <section class="py-32 bg-stone-50 font-montserrat">
        <div class="sticky">
          <div
            class="w-full h-[300px] z-[-1] absolute top-[150px] right-[150px]"
          >
            <img
              class="h-auto w-[480px] opacity-10"
              :src="farmGateLogo"
              alt=""
            />
          </div>
        </div>
        <div class="px-6 mx-auto max-w-7xl">
          <div class="mb-8">
            <h1
              class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[119px]"
            >
              <LeafIcon class="text-green-700" />
              <span class="text-sm font-semibold">Our Values</span>
            </h1>
          </div>

          <div
            class="mb-20 max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <h2 class="text-xl font-semibold text-stone-800">
              Our Roots of Impact
            </h2>
            <p class="md:max-w-[40%] leading-relaxed text-md text-stone-600">
              At FGAI, our core values underpin every action. We operate under
              strict Business Principles and Ethics to ensure we act in line
              with our mission and global regulations.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div
              class="p-10 text-center transition-all bg-white border shadow-sm group border-stone-100 rounded-2xl hover:shadow-md"
            >
              <div class="flex justify-center mb-8">
                <img
                  src="@/assets/img/wired-outline-1827-growing-plant-hover-pinch.gif"
                  alt="Integrity - Growing Plant"
                  class="object-contain w-20 h-20"
                />
              </div>
              <h3 class="mb-3 text-2xl font-bold text-stone-800">Integrity</h3>
              <p class="font-medium leading-relaxed text-stone-500">
                Built on trust and radical honesty in every transaction,
                ensuring ethical growth from the ground up.
              </p>
            </div>

            <div
              class="p-10 text-center transition-all bg-white border shadow-sm group border-stone-100 rounded-2xl hover:shadow-md"
            >
              <div class="flex justify-center mb-8">
                <img
                  src="@/assets/img/wired-outline-1468-morale-hover-pinch.gif"
                  alt="Accountability - Morale Icon"
                  class="object-contain w-20 h-20"
                />
              </div>
              <h3 class="mb-3 text-2xl font-bold text-stone-800">
                Accountability
              </h3>
              <p class="font-medium text-stone-500">
                Discipline, focus, and dedicated stewardship of resources.
              </p>
            </div>

            <div
              class="p-10 text-center transition-all bg-white border shadow-sm group border-stone-100 rounded-2xl hover:shadow-md"
            >
              <div class="flex justify-center mb-8">
                <img
                  src="@/assets/img/wired-outline-20-love-heart-hover-heartbeat.gif"
                  alt="Service - Love Heart Icon"
                  class="object-contain w-20 h-20"
                />
              </div>
              <h3 class="mb-3 text-2xl font-bold text-stone-800">Service</h3>
              <p class="font-medium text-stone-500">
                Respect for people, excellence, and going the extra mile.
              </p>
            </div>
          </div>

          <div class="flex items-center my-16">
            <div class="flex-1 border-t border-stone-300"></div>
            <div class="mx-4">
              <LeafIcon class="w-8 h-8 text-green-700" />
            </div>
            <div class="flex-1 border-t border-stone-300"></div>
          </div>

          <div class="mt-20">
            <div class="mb-8">
              <h1
                class="inline-flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl"
              >
                <LeafIcon class="text-green-700" />
                <span class="text-sm font-semibold">Our Vision</span>
              </h1>
            </div>

            <div class="max-w-[1440px] mx-auto">
              <div class="grid items-stretch grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h2
                    class="mb-4 text-2xl font-semibold text-stone-800 md:max-w-[50%]"
                  >
                    Our 2030 Vision for Shared Prosperity
                  </h2>
                  <p class="leading-relaxed text-md text-stone-600 max-w-[70%]">
                    Helping the farmers grow their wealth. We provide farmers
                    with access to quality inputs, tools, working capital
                    financing, training, agronomist technical assistance
                    support, market access and agritech solutions they can
                    translate into sustainable gains and decent living incomes.
                  </p>
                </div>
                <div>
                  <img
                    :src="visionFutureImg"
                    alt="Farmer Vision"
                    class="object-cover w-full h-[480px] rounded-2xl mb-4"
                  />
                  <h2 class="mb-2 text-2xl font-semibold text-stone-800">
                    The Future We Seed
                  </h2>
                  <p class="leading-relaxed text-md text-stone-600">
                    To be the backbone of Africa’s agricultural revolution,
                    building the infrastructure for sustainable continental
                    prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  { value: "50K+", label: "Hectares of farmland cultivated" },
  { value: "100K+", label: "Farmers supported with inputs" },
  { value: "25+", label: "Local communities transformed" },
  { value: "45%", label: "Average increase in crop yield" },
];
</script>

<style></style>
