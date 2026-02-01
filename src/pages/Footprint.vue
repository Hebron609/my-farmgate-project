<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <div class="relative h-screen w-full overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${footprintHeroPic})` }"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/80"
      ></div>

      <div
        class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon
            class="mx-auto mb-6 h-16 w-16 text-[#F2CB00]  animate-pulse"
          />

          <h1
            class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight"
          >
            OUR <br />
            <span class="text-[#129C48]">FOOTPRINT.</span>
          </h1>
        </div>

        <p
          class="mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-lg reveal-slide-up delay-200"
        >
          We are not just farming, We are engineering thae backbone of Africa's agricultural revolution.
        </p>

        <div class="absolute bottom-10 animate-bounce">
          <svg
            class="h-8 w-8 text-white opacity-50"
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

    <section ref="footprintSection" class="w-full bg-white py-24 px-6 md:px-12">
      <div class="mx-auto max-w-[1440px]">
        <div class="mb-16 md:flex md:items-end md:justify-between">
          <div class="md:max-w-xl">
            <div class="inline-flex">
              <a
                href="/marketplace.html"
                class="inline-flex group relative overflow-hidden px-3 py-1 rounded-4xl items-center justify-center cursor-pointer bg-gray-50 border border-gray-200 whitespace-nowrap"
              >
                <span
                  class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <LeafIcon class="text-[#129C48] w-4 h-4 shrink-0" />
                  <span
                    class="text-xs font-semibold tracking-wider text-gray-500"
                    >Start growing with us</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-black shrink-0" />
                  <span class="text-xs font-semibold leading-none"
                    >Start growing with us</span
                  >
                </span>
              </a>
            </div>
            <h2
              class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black leading-tight mb-6"
            >
              Our Footprint
            </h2>
            <div class="h-1 w-24 bg-[#F2CB00]"></div>
          </div>

          <p
            class="mt-8 md:mt-0 md:max-w-[50%] text-gray-600 text-lg leading-relaxed font-light"
          >
            FarmGate Africa & Industries strategically manages its agricultural footprint to
            balance large-scale economic development with essential social
            well-being. By operating across the entire agricultural value chain,
            the organization produces high-quality goods that serve two distinct
            purposes.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            class="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-gray-50 p-10 md:p-14 hover:shadow-2xl transition-all duration-500 border border-gray-100 reveal-slide-left"
          >
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-8">
                <div class="h-[2px] w-10 bg-black"></div>
                <span
                  class="font-bold uppercase tracking-widest text-sm text-black"
                  >Industrial Catalyst</span
                >
              </div>
              <h3 class="mb-6 font-['Livvic'] text-3xl font-bold text-black">
                Industrial Growth
              </h3>
              <p class="text-gray-600 leading-relaxed text-lg">
                <strong class="text-black"
                  >65% of what we produce is to drive industrial growth.</strong
                >
                We help boost local industrial expansion by supplying
                high-quality, value-added raw materials that strengthen regional
                supply chains and fuel manufacturing growth.
              </p>
            </div>

            <div class="mt-16">
              <div class="mb-4 flex items-baseline gap-2">
                <span
                  class="text-6xl md:text-8xl font-['Livvic'] font-bold text-black opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {{ displayValues[0] }}%
                </span>
                <span
                  class="text-sm font-bold uppercase tracking-widest text-gray-400"
                  >Current Capacity</span
                >
              </div>
              <div class="h-4 w-full rounded-full bg-gray-200 overflow-hidden">
                <div
                  class="h-full bg-black transition-all duration-1000 ease-out"
                  :style="{ width: displayValues[0] + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#129C48] p-10 md:p-14 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] reveal-slide-right"
          >
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-8">
                <div class="h-[2px] w-10 bg-[#F2CB00]"></div>
                <span
                  class="font-bold uppercase tracking-widest text-sm text-[#F2CB00]"
                  >Household Catalyst</span
                >
              </div>
              <h3 class="mb-6 font-['Livvic'] text-3xl font-bold text-white">
                Household Consumption
              </h3>
              <p class="text-green-50 leading-relaxed text-lg opacity-90">
                <strong class="text-white"
                  >35% of whatever we grow is aimed at contributing to daily
                  households' consumption.</strong
                >
                We at FGAI ensure that a significant portion of our production
                is funneled directly into households as our contribution to help
                combat food insecurity.
              </p>
            </div>

            <div class="mt-16">
              <div class="mb-4 flex items-baseline gap-2">
                <span
                  class="text-6xl md:text-8xl font-['Livvic'] font-bold text-white opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {{ displayValues[1] }}%
                </span>
                <span
                  class="text-sm font-bold uppercase tracking-widest text-green-200"
                  >Direct Reach</span
                >
              </div>
              <div class="h-4 w-full rounded-full bg-white/20 overflow-hidden">
                <div
                  class="h-full bg-[#F2CB00] transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(242,203,0,0.5)]"
                  :style="{ width: displayValues[1] + '%' }"
                ></div>
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
import { ref, onMounted, onUnmounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLeaf, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import footprintHeroPic from "@/assets/img/footprint-banner.webp";
import farmPic9 from "@/assets/img/farm-pic9.jpg";
import farmGateLogo from "@/assets/img/FarmGate Africa 1 1.png";

library.add(faLeaf, faRecycle);

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

const footprintSection = ref(null);
const isMobile = ref(false);
const displayValues = ref([0, 0]);
let intervals = [null, null];
let hasAnimated = false;

const animateValue = (index, target) => {
  if (isMobile.value) return;
  if (intervals[index]) clearInterval(intervals[index]);
  let current = displayValues.value[index];
  const increment = target / 50;
  intervals[index] = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(intervals[index]);
      intervals[index] = null;
    }
    displayValues.value[index] = Math.round(current);
  }, 50);
};

onMounted(() => {
  const api = initScrollReveal();
  if (api) {
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
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateValue(0, 40);
          setTimeout(() => animateValue(1, 60), 500);
        }
      });
    },
    { threshold: 0.5 },
  );
  if (footprintSection.value) {
    observer.observe(footprintSection.value);
  }

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
    if (isMobile.value) {
      displayValues.value = [40, 60];
    } else {
      displayValues.value = [0, 0];
    }
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
/* Ensure smooth transitions if Tailwind utility classes aren't sufficient */
</style>
