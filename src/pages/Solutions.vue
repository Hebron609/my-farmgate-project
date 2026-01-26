<template>
  <div class="min-h-screen bg-white">
    <div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <Header :videoVariant="2" />
      <div
        class="absolute inset-0 bg-center bg-cover opacity-20"
        :style="{ backgroundImage: `url(${ourSolutionsBanner})` }"
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
        <div class="mb-6 reveal-fade">
          <LeafIcon
            class="w-12 h-12 mx-auto mb-4 text-green-400 animate-bounce"
          />
          <h1
            class="mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl"
          >
            OUR SOLUTIONS
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-light reveal-slide-up"
        >
          Transforming agriculture through innovation
        </p>
        <p class="text-gray-400 max-w-[600px] text-sm md:text-base reveal-slide-up">
          Discover our comprehensive solutions for sustainable farming and
          agricultural success
        </p>
      </div>
    </div>

    <section class="relative mx-auto py-25 bg-stone-50">
      <div class="max-w-[1440px] mx-auto px-6">
        <div class="mx-6 mb-32">
          
          
          <!-- Our Mandate Flex-->
          <div class="items-center justify-between mb-20 md:flex">
            <h3 class="text-2xl md:text-3xl md:max-w-[30%] reveal-slide-left">We believe sustainable farming holds the answer</h3>
            
            <p class="md:max-w-[40%] reveal-slide-right">FarmGate Africa is leading the way in partnership with farmers and farmer group organizations (FGOs) to unlock the transformative potential of sustainable agriculture and shared prosperity.
</p>
          </div>

          <h3
            class="text-2xl font-extrabold text-stone-900 mb-6 text-center uppercase tracking-[0.2em] reveal-slide-up"
          >
            Our Mandate
          </h3>
          <div
            class="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-green-400 to-green-800 reveal-slide-up"
          ></div>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="area in focalAreas"
              :key="area.name"
              class="p-6 transition-shadow bg-white border shadow-sm cursor-default rounded-3xl border-stone-100 hover:shadow-lg group reveal-stagger"
            >
              <div class="flex items-center mb-4">
                <div
                  class="flex items-center justify-center w-12 h-12 transition-colors bg-green-100 rounded-full group-hover:bg-green-700"
                >
                  <font-awesome-icon
                    :icon="area.icon"
                    class="w-6 h-6 text-green-700 group-hover:text-white"
                  />
                </div>
              </div>
              <h4 class="mb-2 text-xl font-bold text-stone-900">
                {{ area.name }}
              </h4>
              <p class="text-sm leading-relaxed text-stone-600">
                {{ area.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GrowWithUs />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

import ourSolutionsBanner from "@/assets/img/our-solutions-banner.jpg";

const { init: initScrollReveal } = useScrollReveal({ duration: 800, delay: 100, viewFactor: 0.12 });

onMounted(() => {
  const api = initScrollReveal();
  if (!api) return;
  api.reveal(".reveal-fade", { ...revealEffects.fade, duration: 900, delay: 200 });
  api.reveal(".reveal-slide-up", { ...revealEffects.slideUp, duration: 750, delay: 200 });
  api.reveal(".reveal-slide-left", { ...revealEffects.slideLeft, duration: 700, delay: 150 });
  api.reveal(".reveal-slide-right", { ...revealEffects.slideRight, duration: 700, delay: 200 });
  api.reveal(".reveal-stagger", { ...revealEffects.stagger, duration: 600, interval: 120, delay: 100 });
});

const focalAreas = [
  {
    name: "Smart Farming",
    desc: "Leveraging technology for efficient agriculture.",
    icon: "fa-microchip",
  },
  {
    name: "Horticulture",
    desc: "Cultivating fruits, vegetables, and ornamental plants.",
    icon: "fa-seedling",
  },
  {
    name: "Animal Husbandry",
    desc: "Raising and breeding livestock for food and products.",
    icon: "fa-cow",
  },
  {
    name: "Aquaculture",
    desc: "Farming fish and aquatic organisms sustainably.",
    icon: "fa-fish",
  },
  {
    name: "Food Processing",
    desc: "Transforming raw agricultural products into consumable goods.",
    icon: "fa-industry",
  },
  {
    name: "Agri-Advisory",
    desc: "Providing expert guidance and consulting services.",
    icon: "fa-clipboard",
  },
  {
    name: "Training",
    desc: "Educating farmers and stakeholders on best practices.",
    icon: "fa-graduation-cap",
  },
];
</script>
