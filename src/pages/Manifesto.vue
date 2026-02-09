<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <div class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${farmTractor1})` }"
      ></div>

      <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/60 animate-pulse"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/70 animate-ping"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/60 animate-pulse"
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
            <span class="text-[#129C48]">MANIFESTO.</span>
          </h1>
        </div>

        <p
          class="mt-4 text-gray-400 max-w-[600px] text-sm md:text-base reveal-slide-up delay-300"
        >
          Discover our core principles that drive innovation and shared
          prosperity in agriculture.
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
      class="relative w-full px-6 pb-20 overflow-hidden bg-white md:px-12 mt-14"
    >
      <div class="absolute top-0 right-0 pointer-events-none opacity-5">
        <LeafIcon class="w-[300px] h-[300px] text-[#129C48]" />
      </div>

      <div class="mx-auto max-w-[1440px] relative z-10">
        <div class="inline-flex">
          <button
            @click="navigateToVideo2"
            class="relative flex items-center justify-center px-4 py-2 mb-5 overflow-hidden font-semibold bg-yellow-400 border border-gray-200 cursor-pointer group rounded-4xl md:mb-10"
          >
            <span
              class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <LeafIcon class="w-4 h-4 text-black" />
              <span class="text-xs font-semibold tracking-wider text-black"
                >Start growing with us</span
              >
            </span>

            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-[#129C48] group-hover:translate-y-0"
            >
              <LeafIcon class="w-4 h-4 text-white" />
              <span class="text-xs font-semibold leading-none text-white"
                >Start growing with us</span
              >
            </span>
          </button>
        </div>

        <div
          class="flex flex-col justify-between mb-16 md:flex-row md:items-start md:gap-12"
        >
          <div class="md:max-w-2xl reveal-slide-right">
            <h2
              class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black leading-tight"
            >
              Our Core <span class="text-[#129C48]">Principles</span>
            </h2>
          </div>

          <div class="md:max-w-xl reveal-slide-left">
            <div class="h-1 w-24 bg-[#F2CB00] mb-8"></div>
            <p class="text-lg font-light leading-relaxed text-gray-600">
              Discover the values that guide our mission. These are the
              deep-rooted principles that ensure every seed we sow leads to a
              harvest of shared prosperity across the continent.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(point, index) in manifestoPoints"
            :key="index"
            class="group relative bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden reveal-stagger cursor-pointer h-full flex flex-col"
            @click="toggleExpand(index)"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="point.image"
                :alt="point.alt"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover:bg-black/40"
              ></div>

              <div
                class="absolute top-4 left-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-['Livvic'] font-bold text-lg group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300"
              >
                {{ index + 1 }}
              </div>
            </div>

            <div class="relative flex flex-col flex-grow p-6 md:p-8">
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#129C48] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              ></div>

              <h3
                class="mb-3 font-['Livvic'] text-xl font-bold text-black group-hover:text-[#129C48] transition-colors leading-tight"
              >
                {{ point.title }}
              </h3>

              <div class="relative flex-grow">
                <div
                  class="text-sm font-light leading-relaxed text-gray-600 line-clamp-4"
                  v-html="point.description"
                ></div>
                <div
                  class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"
                ></div>
              </div>

              <div
                class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between group-hover:border-[#129C48]/20 transition-colors"
              >
                <span
                  class="text-xs font-bold uppercase tracking-widest text-[#129C48]"
                  >Read More</span
                >
                <div
                  class="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#129C48] group-hover:text-white transition-all duration-300"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Transition name="modal">
      <div
        v-if="expandedIndex !== null"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
        @click.self="closeExpand"
      >
        <div
          class="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-7xl h-auto max-h-[95vh] flex flex-col md:flex-row overflow-hidden modal-content"
          @click.stop
        >
          <button
            @click="closeExpand"
            class="absolute z-20 px-4 py-2 text-xs font-bold tracking-widest text-white uppercase transition-colors border rounded-full border-white/20 top-6 right-6 bg-black/50 hover:bg-black backdrop-blur-md"
          >
            Close
          </button>

          <div class="relative w-full h-64 md:w-2/5 md:h-auto shrink-0">
            <div
              class="absolute inset-0 bg-[#129C48]/10 mix-blend-overlay z-10 pointer-events-none"
            ></div>
            <img
              :src="manifestoPoints[expandedIndex].image"
              :alt="manifestoPoints[expandedIndex].alt"
              class="object-cover w-full h-full"
            />
          </div>

          <div
            class="flex flex-col justify-center w-full p-8 overflow-y-auto bg-white md:w-3/5 md:p-14 md:overflow-y-visible"
          >
            <div>
              <div class="mb-4 inline-flex items-center gap-2 text-[#129C48]">
                <LeafIcon class="w-5 h-5" />
                <span class="text-sm font-bold tracking-wider uppercase"
                  >Principle {{ expandedIndex + 1 }}</span
                >
              </div>

              <h3
                class="font-['Livvic'] text-3xl md:text-5xl font-bold text-black mb-6 leading-tight"
              >
                {{ manifestoPoints[expandedIndex].title }}
              </h3>

              <div class="h-1.5 w-24 bg-[#F2CB00] mb-8"></div>

              <div
                class="space-y-4 text-lg font-light leading-relaxed text-gray-600 md:text-xl"
                v-html="manifestoPoints[expandedIndex].description"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <GrowWithUs />

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

import farmTractor1 from "@/assets/img/farm-tractor1.jpg";
import farmTractor2 from "@/assets/img/farm-tractor2.jpg";
import groupFarmImage from "@/assets/img/group-farm-image.jpg";
import womenFarm from "@/assets/img/Women-farm.jpg";
import invest1 from "@/assets/img/invest1.jpg";
import SoilSample from "@/assets/img/soil-sampling.jpg";
import farmCrops from "@/assets/img/farm-crops.jpg";

// Using one hero image consistent with theme, or select specifically
const heroImage = farmTractor2;

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

const navigateToVideo2 = () => {
  sessionStorage.setItem("activateVideo2", "true");
  window.location.href = "/";
};

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
    delay: 200,
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
});

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

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: all 0.3s ease-out;
}
.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(10px);
}
</style>
