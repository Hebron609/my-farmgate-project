<template>
  <div>
    <div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <Header :videoVariant="2" />
      <div
        class="absolute inset-0 bg-center bg-cover opacity-20"
        :style="{ backgroundImage: `url(${heroPic})` }"
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
            OUR RELEVANCE
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          Transforming lives through sustainable agriculture
        </p>
        <p class="text-gray-400 max-w-[600px] text-sm md:text-base">
          We exist to impact lives through sustainable agriculture and shared
          prosperity
        </p>
      </div>
    </div>

    <div class="min-h-screen selection:bg-green-100">
      <section class="relative w-full px-6 py-16 overflow-hidden bg-white">
        <div class="max-w-[1440px] mx-auto">
          <h2
            class="mb-16 text-4xl font-bold tracking-wide text-center text-black md:text-5xl"
          >
            OUR PURPOSE
          </h2>

          <div
            class="relative grid items-start grid-cols-1 gap-12 md:grid-cols-2"
          >
            <div
              class="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#129C48] -translate-x-1/2 opacity-30"
            ></div>

            <div class="flex flex-col items-center text-center group">
              <div
                class="mb-6 text-[#129C48] transform transition-transform duration-300 group-hover:scale-110"
              >
                <font-awesome-icon :icon="['fas', 'bullseye']" size="3x" />
              </div>

              <h3
                class="text-[#129C48] font-semibold text-2xl mb-4 tracking-wider uppercase"
              >
                MISSION
              </h3>

              <p
                class="text-gray-700 font-['Montserrat'] font-normal text-lg md:text-xl leading-relaxed max-w-sm"
              >
                We exist to impact lives through sustainable agriculture and
                shared prosperity.
              </p>
            </div>

            <div class="flex flex-col items-center text-center group">
              <div
                class="mb-6 text-[#129C48] transform transition-transform duration-300 group-hover:scale-110"
              >
                <font-awesome-icon :icon="['fas', 'eye']" size="3x" />
              </div>

              <h3
                class="text-[#129C48] font-semibold text-2xl mb-4 tracking-wider uppercase"
              >
                VISION
              </h3>

              <p
                class="text-gray-700 font-['Montserrat'] font-normal text-lg md:text-xl leading-relaxed max-w-sm"
              >
                To become a backbone for the agricultural revolution in Africa.
              </p>
            </div>
          </div>
        </div>

        <div class="absolute bottom-4 left-4 text-[#94C93D] opacity-40">
          <LeafIcon class="w-[60px] h-[60px]" />
        </div>
        <div
          class="absolute bottom-4 right-4 text-[#94C93D] opacity-40 transform scale-x-[-1]"
        >
          <LeafIcon class="w-[60px] h-[60px]" />
        </div>
      </section>

      <section class="py-25 bg-stone-50 mt-15">
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
            <h2 class="font-semibold md:text-3xl text-stone-800">
              Our Roots of Impact
            </h2>
            <p class="md:max-w-[50%] leading-relaxed text-md text-stone-600">
              At FGAl, we share a set of core values which underpin and shape
              the way we do our work. The FGAI General Business Principles, Code
              of Conduct and Ethics and Compliance Manual help everyone at FGAI
              to act in line with these values and comply with relevant laws and
              regulations.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div
              class="p-10 text-center transition-all bg-white border shadow-sm group border-stone-100 rounded-2xl hover:shadow-md"
            >
              <div class="flex justify-center mb-8">
                <img
                  src="@/assets/img/wired-outline-1468-morale-hover-pinch.gif"
                  alt="Integrity - Morale Icon"
                  class="object-contain w-20 h-20"
                />
              </div>
              <h3 class="mb-3 text-2xl font-bold text-stone-800">Integrity</h3>
              <p class="font-medium leading-relaxed text-stone-500">
                Strong moral principles, trustworthiness and honesty
              </p>
            </div>

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

              <h3 class="mb-3 text-2xl font-bold text-stone-800">
                Accountability
              </h3>
              <p class="font-medium text-stone-500">
                Stewardship, answerable, discipline and focus
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
                Respect for people, quality, excellence and going the extra mile
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
        </div>
      </section>
    </div>

    <section
      ref="footprintSection"
      class="py-10 overflow-hidden bg-white md:py-24 font-montserrat"
    >
      <div class="px-6 mx-auto max-w-[1440px]">
        <div class="mb-16 text-center md:text-left">
          <div
            class="flex items-center justify-center gap-3 mb-4 md:justify-start"
          >
            <!-- Tag -->
            <div class="mt-10 mb-5">
              <h1
                class="flex items-center gap-1 px-2 py-1 mb-2 border-gray-200 border-1 rounded-2xl max-w-[139px]"
              >
                <LeafIcon class="text-green-700" />
                <span class="text-xs font-semibold">Our Footprint</span>
              </h1>
            </div>
          </div>

          <div class="items-center md:flex md:justify-between">
            <h2
              class="text-2xl font-semibold leading-tight md:text-3xl text-stone-900 md:max-w-[30%] mb-4"
            >
              Measuring the Scope of Our Agricultural Impact
            </h2>
            <p class="md:max-w-[40%]">
              FarmGate Africa strategically manages its agricultural footprint
              to balance large-scale economic development with essential social
              well-being. By operating across the entire agricultural value
              chain, the organization produces high-quality goods that serve two
              distinct purposes.
            </p>
          </div>
        </div>

        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div
            class="group relative flex flex-col justify-between p-12 rounded-[3rem] bg-stone-100 border border-stone-100 hover:shadow-2xl transition-all duration-700 h-[480px] overflow-hidden"
          >
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-6">
                <span class="w-8 h-[2px] bg-[#035925]"></span>
                <span
                  class="text-xs font-bold tracking-widest uppercase text-[#035925]"
                  >Industrial Catalyst</span
                >
              </div>
              <h3 class="mb-4 text-3xl font-bold text-stone-900">
                Industrial Growth
              </h3>
              <p class="max-w-[90%] text-base leading-relaxed text-gray-700">
                <strong
                  >65% of what we produce is to drive industrial growth.</strong
                >
                We help boost local industrial expansion by supplying
                high-quality, value-added raw materials that strengthen regional
                supply chains and fuel manufacturing growth.
              </p>
            </div>

            <div class="mt-auto">
              <div class="mb-6">
                <span
                  class="text-7xl md:text-8xl font-black text-[#035925] opacity-40 group-hover:opacity-100 transition-all duration-500 block"
                >
                  {{ displayValues[0] }}%
                </span>
                <span
                  class="block text-sm font-medium tracking-tighter uppercase text-stone-600 font-montserrat"
                  >Current Production Capacity</span
                >
              </div>

              <div class="w-full h-5 overflow-hidden rounded-full bg-stone-200">
                <div
                  class="h-full bg-[#035925] transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(3,89,37,0.3)]"
                  :style="{ width: displayValues[0] + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="group relative flex flex-col justify-between p-12 rounded-[3rem] bg-[#129C48] text-white shadow-2xl hover:scale-[1.03] transition-all duration-700 h-[480px] overflow-hidden"
          >
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-6">
                <span class="w-8 h-[2px] bg-yellow-400"></span>
                <span
                  class="text-xs font-bold tracking-widest text-[#F2CB00] uppercase"
                  >Household Catalyst</span
                >
              </div>
              <h3 class="mb-4 text-3xl font-bold text-white">
                Household Consumption
              </h3>
              <p class="max-w-[90%] text-base leading-relaxed text-green-50/80">
                <strong
                  >35% of whatever we grow is aimed at contributing to daily
                  households’ consumption.</strong
                >
                We at FGAI ensure that a significant portion of our production
                is funneled directly into households as our contribution to help
                combat food insecurity and support the daily nutritional needs
                of individuals, families and animals.
              </p>
            </div>

            <div class="mt-auto">
              <div class="mb-6">
                <span
                  class="block font-black text-white transition-all duration-500 text-7xl md:text-8xl opacity-40 group-hover:opacity-100"
                >
                  {{ displayValues[1] }}%
                </span>
                <span
                  class="block text-sm font-medium tracking-tighter text-green-100 uppercase font-montserrat"
                  >Direct Household Reach</span
                >
              </div>

              <div class="w-full h-5 overflow-hidden rounded-full bg-white/10">
                <div
                  class="h-full transition-all duration-1000 ease-out bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  :style="{ width: displayValues[1] + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-32 overflow-hidden font-montserrat">
      <div
        class="absolute inset-0 bg-center bg-cover"
        :style="{ backgroundImage: `url(/images/our-goal-bg-image.avif)` }"
      ></div>
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative px-6 mx-auto max-w-[1440px] z-10">
        <div class="mb-16 text-center">
          <div class="flex items-center justify-center">
            <h1
              class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-md px-4 sm:px-5 md:px-3 flex items-center gap-2"
            >
              <LeafIcon class="text-white" />
              <span>Our Goal</span>
            </h1>
          </div>

          <p
            class="max-w-4xl mx-auto leading-relaxed text-white text-body-lg font-montserrat"
          >
            Our goal is practically simple – we aim to produce what we want from
            what we have by innovatively deploying Africa’s technology to
            contribute to solving Africa’s food security problems, while
            empowering growers, regenerating the land we depend on and
            strengthening supply chains and market access engagement.
          </p>
        </div>
      </div>
    </section>

    <GrowWithUs />


    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import heroPic from "@/assets/img/farm-pic3.jpg";


library.add(faBullseye, faEye);

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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateValue(0, 65);
          setTimeout(() => animateValue(1, 35), 500);
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
      displayValues.value = [65, 35];
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

import ourSolutionsBanner from "@/assets/img/our-solutions-banner.jpg";
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
