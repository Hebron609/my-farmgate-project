<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <div class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${ImpactImg})` }"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon
            class="mx-auto mb-6 h-16 w-16 text-[#F2CB00] animate-pulse"
          />

          <h1
            class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight"
          >
            OUR <br />
            <span class="text-[#129C48]">IMPACT.</span>
          </h1>
        </div>

    
        <p
          class="mt-4 text-gray-400 max-w-[700px] text-sm md:text-base reveal-slide-up delay-300"
        >
          FarmGate Africa is more than a company — we aim to contribute towards
          achieving SDGs 1, 2, 5, 8, 9, 13 & 17 in every community we work. Join
          us make a big impact.
        </p>

        <div class="absolute bottom-10 animate-bounce">
          <svg
            class="w-8 h-8 text-white opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>

    <section
      class="relative block z-20 w-full min-h-[600px] h-[80vh] md:h-[800px] overflow-hidden font-montserrat bg-[#1b2418]"
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
        <div class="mb-8 md:pt-12 md:mb-0">
          <h2
            class="font-['Livvic'] text-3xl md:text-6xl font-bold text-white leading-tight reveal-impact-stats"
          >
            OUR IMPACT <span class="text-[#F2CB00]">STATS.</span>
          </h2>
        </div>

        <div
          class="flex flex-col justify-between gap-6 mt-0 md:gap-10 md:flex-row md:items-center md:mt-20"
        >
          <p
            class="md:max-w-[40%] leading-relaxed text-sm font-medium text-white md:text-lg opacity-90 reveal-slide-up"
          >
            Our conservation efforts include reforestation, wetland restoration,
            and habitat preservation to enhance biodiversity and ecological
            health.
          </p>

          <button
            class="relative inline-flex items-center px-4 py-4 mt-0 overflow-hidden bg-green-700 cursor-pointer md:px-8 group rounded-xl w-fit md:mt-0 reveal-slide-right"
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

        <div class="grid grid-cols-2 gap-3 mt-8 sm:grid-cols-2 md:grid-cols-5 sm:gap-6 md:gap-6 md:mt-0">
          <div
            v-for="(stat) in impactStats"
            :key="stat.label"
            class="group relative overflow-hidden rounded-lg md:rounded-2xl border border-white/10 bg-white/5 p-4 md:p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-[#F2CB00]/50 hover:-translate-y-2 reveal-stagger"
          >
            <div
              class="mb-2 font-['Livvic'] text-2xl md:text-5xl font-bold text-white group-hover:text-[#F2CB00] transition-colors"
            >
              {{ stat.value }}
            </div>
            <div
              class="h-1 w-8 bg-[#129C48] mb-3 md:mb-4 group-hover:w-full transition-all duration-500"
            ></div>
            <div
              class="font-['Montserrat'] text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white"
            >
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="w-full bg-[#035925] text-white relative overflow-hidden py-24"
    >
      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 transform translate-x-1/4"
      ></div>

      <div class="mx-auto max-w-[1440px] px-6 md:px-12 relative z-10">
        <div
          class="flex flex-col gap-16 lg:flex-row lg:justify-between lg:items-center"
        >
          <div class="lg:max-w-2xl">
            <h3
              class="font-['Livvic'] text-3xl md:text-5xl font-bold leading-tight mb-6 reveal-slide-left"
            >
              Committed to <br /><span class="text-[#F2CB00]"
                >Global Impact</span
              >
            </h3>
            <p
              class="mb-10 text-lg font-light leading-relaxed text-green-100 reveal-slide-up"
            >
              We are partnering with stakeholders to address food insecurity in
              Africa, dedicated to achieving the UN Sustainable Development
              Goals in every community.
            </p>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="sdg in [1, 2, 5, 8, 9, 13, 17]"
                :key="sdg"
                class="reveal-stagger-tag px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-[#035925] transition-all duration-300 font-bold text-sm cursor-default"
              >
                SDG {{ sdg }}
              </span>
            </div>
          </div>

          <div class="reveal-slide-right">
            <a
              href="/marketplace.html"
              class="relative flex items-center justify-center w-24 h-24 transition-all duration-300 bg-white rounded-full shadow-2xl group md:h-32 md:w-32 hover:scale-110"
            >
              <div
                class="absolute inset-0 rounded-full border-2 border-dashed border-white/50 animate-[spin_10s_linear_infinite] scale-125"
              ></div>
              <div
                class="flex flex-col items-center justify-center text-center"
              >
                <LeafIcon
                  class="w-6 h-6 text-[#035925] mb-1 group-hover:text-[#F2CB00] transition-colors"
                />
                <span
                  class="text-[10px] font-black uppercase tracking-widest text-[#035925] leading-tight"
                  >Join<br />Impact</span
                >
              </div>
            </a>
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
import ImpactImg from "@/assets/img/crop-planting.jpg"

import africanFarmVideo from "@/assets/video/African_Farm_Video_Generation.mp4";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
  mobile: true,
  desktop: true,
});

onMounted(() => {
  const api = initScrollReveal();
  if (!api) return;

  api.reveal(".reveal-fade", {
    ...revealEffects.fade,
    duration: 900,
    delay: 200,
  });
  api.reveal(".reveal-slide-up", {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 250,
  });
  api.reveal(".reveal-slide-left", {
    ...revealEffects.slideLeft,
    duration: 700,
    delay: 150,
  });
  api.reveal(".reveal-slide-right", {
    ...revealEffects.slideRight,
    duration: 700,
    delay: 200,
  });
  api.reveal(".reveal-stagger", {
    ...revealEffects.stagger,
    duration: 600,
    interval: 120,
    delay: 100,
  });
  api.reveal(".reveal-stagger-tag", {
    ...revealEffects.stagger,
    duration: 500,
    interval: 80,
    delay: 200,
  });
  api.reveal(".reveal-impact-stats", {
    ...revealEffects.slideUp,
    duration: 800,
    delay: 0,
    viewFactor: 0.1,
  });
});

const impactStats = [
  { value: "20+", label: "Projects Funded" },
  { value: "₵3.5m+", label: "Input Financing" },
  { value: "5acres", label: "Land Cultivated " },
  { value: "1000+", label: "Farmers Supported" },
  { value: "25+", label: "Communities Transformed" },
];
</script>

<style scoped>
/* Ensure smooth font rendering */
.font-livvic {
  font-family: "Livvic", sans-serif;
}
</style>
