<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <div
        class="absolute inset-0 bg-[url('/src/assets/img/farm-tractor1.jpg')] bg-cover bg-center opacity-20"
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
            OUR MANIFESTO
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          Guiding principles for a sustainable future
        </p>
        <p class="text-gray-400 max-w-[600px] text-sm md:text-base">
          Discover our core values that drive innovation and shared prosperity
          in agriculture
        </p>
      </div>
    </div>

    <!-- Manifesto Content Section -->
    <section class="py-20 bg-white font-montserrat">
      <div class="px-6 mx-auto max-w-[1440px]">
        <div>
          <h1
            class="inline-flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl"
          >
            <LeafIcon class="text-green-700" />
            <span class="text-sm font-semibold">Our Manifesto</span>
          </h1>
        </div>
        <div
          class="flex flex-col items-center justify-between mb-16 md:flex-row"
        >
          <h2 class="mb-4 text-2xl font-bold text-black md:text-3xl">
            Our Core Principles
          </h2>
          <p class="text-gray-600 text-md md:max-w-[40%]">
            Discover the values that guide our mission. These are the
            deep-rooted principles that ensure every seed we sow leads to a
            harvest of shared prosperity across the continent
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(point, index) in manifestoPoints"
            :key="index"
            class="overflow-hidden transition-shadow duration-300 bg-white border-2 border-green-200 shadow-lg rounded-2xl hover:shadow-xl group"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="point.image"
                :alt="point.alt"
                class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 transition-colors duration-300 bg-green-600/20 group-hover:bg-green-600/30"
              ></div>
              <div
                class="absolute flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-green-600 rounded-full top-4 left-4"
              >
                {{ index + 1 }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="mb-3 text-xl font-semibold text-green-800">
                {{ point.title }}
              </h3>
              <p
                class="text-sm leading-relaxed text-gray-700 line-clamp-4"
                v-html="point.description"
              ></p>
              <button
                class="mt-4 font-medium text-green-600 transition-colors duration-200 hover:text-green-800"
                @click="toggleExpand(index)"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <!-- Expanded Modal -->
        <div
          v-if="expandedIndex !== null"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          @click="closeExpand"
        >
          <div
            class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            @click.stop
          >
            <div class="relative h-48 overflow-hidden rounded-t-2xl">
              <img
                :src="manifestoPoints[expandedIndex].image"
                :alt="manifestoPoints[expandedIndex].alt"
                class="object-cover w-full h-full"
              />
              <div class="absolute inset-0 bg-green-600/20"></div>
              <div
                class="absolute flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-green-600 rounded-full top-4 left-4"
              >
                {{ expandedIndex + 1 }}
              </div>
              <button
                class="absolute p-2 transition-colors duration-200 rounded-full top-4 right-4 bg-white/80 hover:bg-white"
                @click="closeExpand"
              >
                <svg
                  class="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="p-8">
              <h3 class="mb-4 text-2xl font-semibold text-green-800">
                {{ manifestoPoints[expandedIndex].title }}
              </h3>
              <p
                class="leading-relaxed text-gray-700"
                v-html="manifestoPoints[expandedIndex].description"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GrowWithUs />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

import farmTractor2 from "@/assets/img/farm-tractor2.jpg";
import groupFarmImage from "@/assets/img/group-farm-image.jpg";
import womenFarm from "@/assets/img/Women-farm.jpg";
import invest1 from "@/assets/img/invest1.jpg";
import SoilSample from "@/assets/img/soil-sampling.jpg";
import farmCrops from "@/assets/img/farm-crops.jpg";

const manifestoPoints = ref([
  {
    title: "We're in it for the long-term",
    description:
      "Short-term returns are important, but our focus is long-term goals, and long-lasting impact. We know that true success does not simply lie in what happens immediately next. In everything we do, we think about the long-term implications and impacts. This is why we continually invest in our people, partners, infrastructure facilities, technologies, our farmers and arable farmlands close to water sources. This is why we are determined and aim to thrive for more than 100 years. This is why we have developed a user-friendly, innovative farmer connect solution  <strong>'myFarm' – a seamless agri-tech ERP solution that supports farming operation, connect farming actors and drives actionable insights.</strong>",
    image: farmTractor2,
    alt: "Long-term investment",
  },
  {
    title: "True sustainability is hinged on shared prosperity",
    description:
      "Shared prosperity lies behind everything we do. This is why shared value and equity is central to our ethos. We drive a greater fairness of outcomes for everyone along the agribusiness and agriculture value chain.",
    image: SoilSample,
    alt: "Shared prosperity",
  },
  {
    title: "Humility drives success",
    description:
      "Stand up. Be Humble. We have audacious goals. We also recognize that we cannot revolutionize the world overnight. By admitting our constraints and celebrating the small victories, we maintain a realistic overview of the work we are doing and its potential for change and impact. At the same time, our goals hold up an ideal to guide and inspire us.",
    image: womenFarm,
    alt: "Humility drives success",
  },
  {
    title: "Technology makes things better, not a solution",
    description:
      "We're the gateway to farming. Leveraging technology to improve processes, systems and connecting farmers worldwide is amazing!!! From Blockchain-enabled ledgers to using digital services to make both farmers and investors bankable to simply having the very best farm management solution accessible, we are at the forefront of using technology to make the farming universe better for everyone.",
    image: invest1,
    alt: "Technology makes things better",
  },
  {
    title: "Quality is a specialty approach, not a product",
    description:
      "If you're happy. We're happy. While we mainly focus on 100% organic quality and traceability farming, we recognize that every farm produces a variety of different qualities. FGAI's specialty is derived from offering quality farm products; where we engaged and work closely with farmers to find lasting solutions to everyday farming challenges as soon as possible. And once produce is ready, we sort, grade, off-take and sell it, fresh from the farm to your table.",
    image: farmCrops,
    alt: "Quality is a specialty approach",
  },
]);

const expandedIndex = ref(null);

const toggleExpand = (index) => {
  expandedIndex.value = index;
};

const closeExpand = () => {
  expandedIndex.value = null;
};
</script>

<style></style>
