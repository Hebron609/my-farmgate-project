<template>
  <div class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white">
    <Header :videoVariant="2" />

    <div class="relative h-screen w-full overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${ourSolutionsBanner})` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>

      <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10  border-green-400/50 animate-pulse"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/70 animate-ping"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/60 animate-pulse"
      ></div>


      <div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div class="reveal-slide-up">
          <LeafIcon class="mx-auto mb-6 h-16 w-16 text-[#F2CB00] animate-pulse" />
          
          <h1 class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight">
            OUR <br />
            <span class="text-[#129C48]">SOLUTIONS.</span>
          </h1>
        </div>

         <p class="mt-4 text-gray-400 max-w-[600px] text-sm md:text-base reveal-slide-up delay-300">
          Discover our comprehensive offerings for sustainable farming and  transforming agriculture through innovation.
        </p>

        <div class="absolute bottom-10 animate-bounce">
          <svg class="h-8 w-8 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>

    <section class="w-full bg-white pb-20 px-6 md:px-12 relative overflow-hidden mt-14">
        <div class="absolute top-0 right-0 opacity-5 pointer-events-none">
             <LeafIcon class="w-[300px] h-[300px] text-[#129C48]" />
        </div>

        

      <div class="mx-auto max-w-[1440px] relative z-10">

        <div class="inline-flex">
              <a
                href="/marketplace.html"
                class="inline-flex group relative overflow-hidden px-4 py-2 rounded-4xl items-center justify-center cursor-pointer bg-gray-50 border border-gray-200 whitespace-nowrap md:mb-10 mb-5"
              >
                <span
                  class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <LeafIcon class="text-[#129C48] w-4 h-4 shrink-0" />
                  <span
                    class="text-xs font-semibold tracking-wider text-gray-500"
                    >Marketplace</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-black shrink-0" />
                  <span class="text-xs font-semibold leading-none"
                    >Marketplace</span
                  >
                </span>
              </a>
            </div>
        
        <div class="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
           <div class="md:max-w-2xl reveal-slide-right">
            
              <h3 class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black leading-tight">
                 We believe sustainable farming <span class="text-[#129C48]">holds the answer.</span>
              </h3>
           </div>

           <div class="md:max-w-xl reveal-slide-left">
               <div class="h-1 w-24 bg-[#F2CB00] mb-8"></div>
               <p class="text-gray-600 text-lg leading-relaxed font-light">
                 FarmGate Africa & Industries is leading the way in partnership with farmers and farmer group organizations (FGOs) to unlock the transformative potential of sustainable agriculture and shared prosperity.
              </p>
           </div>
        </div>

        <div>
           <div class="mb-16 text-center reveal-slide-up">
              <h3 class="font-['Livvic'] text-3xl font-bold uppercase tracking-widest text-black mb-4">
                Our Core Mandate
              </h3>
              <div class="h-1 w-16 bg-[#129C48] mx-auto"></div>
           </div>

           <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="area in focalAreas"
              :key="area.name"
              class="group relative bg-stone-50 p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 reveal-stagger cursor-default"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-[#129C48]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[2rem]"></div>

              <div class="relative z-10">
                  <div class="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-[#129C48] transition-all duration-300 group-hover:bg-[#129C48] group-hover:text-white group-hover:scale-110 shadow-sm">
                    <font-awesome-icon
                        :icon="['fas', area.icon.replace('fa-', '')]" 
                        class="w-7 h-7"
                    />
                  </div>

                  <h4 class="mb-4 font-['Livvic'] text-2xl font-bold text-black group-hover:text-[#129C48] transition-colors">
                    {{ area.name }}
                  </h4>
                  <p class="text-gray-500 leading-relaxed font-light group-hover:text-gray-700 transition-colors">
                    {{ area.desc }}
                  </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";

// FontAwesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faMicrochip, 
  faSeedling, 
  faCow, 
  faFish, 
  faIndustry, 
  faClipboard, 
  faGraduationCap,
  faRobot,
  faCloudSun
} from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faMicrochip, faSeedling, faCow, faFish, faIndustry, faClipboard, faGraduationCap, faRobot, faCloudSun);

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
    name: "AgriTech",
    desc: "Implementing automation, robotics, and data analytics to optimize farming practices and increase productivity.",
    icon: "fa-robot",
  },
  {
    name: "Climate Smart Agriculture",
    desc: "Leveraging technology for efficient agriculture.",
    icon: "fa-microchip",
  },
  {
    name: "Horticulture",
    desc: "Cultivating crops, fruits, vegetables, tubers, cereals and other tree crops.",
    icon: "fa-seedling",
  },
  {
    name: "Animal Husbandry",
    desc: "Raising and breeding livestock for food and products.",
    icon: "fa-cow",
  },
  {
    name: "Aquaculture",
    desc: "Farming  aquatic organisms sustainably.",
    icon: "fa-fish",
  },
  {
    name: "Food Processing",
    desc: "Transforming raw agricultural products into value-added consumable goods.",
    icon: "fa-industry",
  },
  {
    name: "Agri-Advisory",
    desc: "Providing expert guidance and consulting services.",
    icon: "fa-clipboard",
  },
  {
    name: "Training-CBTM",
    desc: "Educating farmers and stakeholders on best practices.",
    icon: "fa-graduation-cap",
  },
];
</script>