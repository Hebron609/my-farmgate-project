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

        <div class="absolute bottom-10">
          <ScrollDownPage />
        </div>
      </div>
    </div>

    <section
      id="fg-impact-stats"
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
        class="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-20 pt-8 md:pt-14 flex flex-col justify-between h-full"
      >
        <div class="mb-8 md:pt-12 md:mb-0">
          <h2
            class="font-['Livvic'] text-3xl md:text-6xl font-bold text-white leading-tight reveal-impact-stats"
          >
            Our Impact <span class="text-[#F2CB00]">Stats.</span>
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
            class="relative inline-flex items-center px-4 py-4 mt-0 overflow-hidden bg-green-700 cursor-pointer md:px-4 group rounded-[12px] w-fit md:mt-0 reveal-slide-right"
          >
            <span
              class="flex items-center gap-3 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <span class="text-sm font-bold tracking-widest text-white"
                >Send us a message</span
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
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-3 text-black transition-transform duration-300 transform translate-y-full bg-[#F2CB00] group-hover:translate-y-0"
            >
              <span class="text-sm font-bold tracking-widest"
                >Send us a message</span
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
          class="grid grid-cols-2 gap-3 mt-6 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4 md:gap-6 lg:gap-3 xl:gap-6 md:mt-0"
        >
          <div
            v-for="stat in impactStats"
            :key="stat.label"
            class="group relative overflow-hidden rounded-lg md:rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 lg:p-3 xl:p-6 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-[#F2CB00]/50 hover:-translate-y-2 reveal-stagger flex flex-col justify-between"
          >
            <div>
              <div
                class="flex items-baseline gap-1 mb-2 font-['Livvic'] text-white group-hover:text-[#F2CB00] transition-colors"
              >
                <span
                  v-if="stat.isPrefix && stat.unit"
                  class="text-2xl font-bold md:text-5xl lg:text-3xl xl:text-5xl"
                >
                  {{ stat.unit }}
                </span>
                <span
                  class="text-3xl font-bold leading-none md:text-5xl lg:text-3xl xl:text-5xl"
                >
                  {{ stat.value }}
                </span>
                <span
                  v-if="!stat.isPrefix && stat.unit"
                  class="ml-1 text-sm font-semibold tracking-wide md:text-base lg:text-xs xl:text-base opacity-80"
                >
                  {{ stat.unit }}
                </span>
              </div>
              <div
                class="h-1 w-8 bg-[#129C48] mb-4 group-hover:w-full transition-all duration-500"
              ></div>
            </div>
            <div
              class="font-['Montserrat'] text-[12px] md:text-[13px] lg:text-[10px] xl:text-[13px] font-bold tracking-widest text-gray-300 group-hover:text-white leading-snug"
            >
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="w-full bg-[#035925] text-white relative overflow-hidden py-16 md:py-24"
    >
      <div
        class="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 transform translate-x-1/4"
      ></div>

      <div class="mx-auto max-w-[1440px] px-6 md:px-12 relative z-10">
        <div
          class="flex flex-col gap-10 lg:gap-8 xl:gap-16 lg:flex-row lg:justify-between lg:items-center"
        >
          <div class="w-full lg:w-[50%] xl:max-w-2xl">
            <h3
              class="font-['Livvic'] text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 md:mb-6 text-center md:text-left reveal-slide-left"
            >
              Committed to <br /><span class="text-[#F2CB00]"
                >Global Impact</span
              >
            </h3>
            <p
              class="mb-8 text-base font-light leading-relaxed text-green-100 lg:mb-10 md:text-lg lg:text-base xl:text-lg reveal-slide-up"
            >
              We are partnering with stakeholders to address food insecurity in
              Africa, dedicated to achieving the UN Sustainable Development
              Goals in every community.
            </p>

            <div class="flex flex-wrap gap-2 md:gap-3">
            <div class="flex flex-wrap gap-2 md:gap-3">
              <button
                v-for="sdg in [1, 2, 5, 8, 9, 13, 17]"
                :key="sdg"
                @click="handleSdgClick(sdg)"
                class="px-4 py-2 text-xs font-bold transition-all duration-300 border rounded-full cursor-pointer reveal-stagger-tag md:px-6 md:py-3 md:text-sm"
                :class="[
                  selectedSdgHub && selectedSdgHub.number === sdg
                    ? 'bg-[#F2CB00] text-black border-[#F2CB00] shadow-[0_0_15px_rgba(242,203,0,0.3)]'
                    : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                ]"
              >
                SDG {{ sdg }}
              </button>
            </div>
            </div>
          </div>

          <div class="z-30 w-full lg:w-[45%] xl:w-auto">
            <div
              class="relative w-full xl:w-[580px] h-64 lg:h-[280px] xl:h-[350px] rounded-2xl"
            >
              <div
                ref="staticTurbineContainer"
                class="absolute inset-0 z-0 pointer-events-none static-turbine"
                v-html="windTurbineSvg"
              ></div>
              <div
                ref="lottieContainer"
                class="absolute inset-0 z-10 lottie-impact"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Impact Hub Section -->
    <section
      class="w-full bg-gradient-to-b from-white via-[#f8faf7] to-[#f0f5ee] py-16 md:py-32 relative overflow-hidden"
    >
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 pointer-events-none opacity-3 mix-blend-multiply"
      ></div>

      <div class="mx-auto max-w-[1440px] px-6 md:px-12 relative z-10">
        <!-- Section Header -->
        <div class="mb-10 text-center md:mb-20">
          <p
            class="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#129C48]"
          >
            Explore Our Impact
          </p>
          <h2
            class="font-['Livvic'] text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-3 md:mb-6"
          >
            Transforming Africa's<span class="text-[#129C48]">
              Farming Future.</span
            >
          </h2>
          <p
            class="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg"
          >
            Click on any Sustainable Development Goal to explore FarmGate Africa's
            contributions, impact metrics, and key focus areas.
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-3 md:gap-10">
          <!-- SDG Grid (Left) -->
          <div class="lg:col-span-1">
            <div class="grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-3 lg:gap-3 max-w-[420px] mx-auto lg:mx-0">
              <button
                v-for="sdg in sdgItems"
                :key="sdg.number"
                @click="handleSdgClick(sdg.number)"
                @mouseenter="selectSdgHub(sdg.number)"
                type="button"
                class="relative aspect-square overflow-hidden transition-all duration-500 transform group rounded-2xl cursor-pointer bg-[#f0f5ee] border border-white/50"
                :class="[
                  selectedSdgHub && selectedSdgHub.number === sdg.number
                    ? 'shadow-[0_20px_40px_rgba(18,156,72,0.15)] ring-2'
                    : 'shadow-sm hover:shadow-lg hover:-translate-y-1',
                ]"
                :style="
                  selectedSdgHub && selectedSdgHub.number === sdg.number
                    ? { '--tw-ring-color': sdg.color, backgroundColor: 'white' }
                    : {}
                "
              >
                <!-- Icon Container (Dead Centered - Compact Proportions) -->
                <div class="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  <img
                    :src="sdg.image"
                    :alt="sdg.title"
                    class="object-contain w-full h-full transition-all duration-500 transform group-hover:scale-75 group-hover:-translate-y-4 drop-shadow-md"
                  />
                </div>

                <!-- Label (Bottom Anchored) -->
                <div class="absolute bottom-0 left-0 right-0 p-3 text-center transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 class="font-['Livvic'] font-bold text-[10px] md:text-xs text-gray-900 leading-tight line-clamp-1">
                    {{ sdg.title }}
                  </h3>
                </div>

                <!-- Subtle Overlay on Selection -->
                <div
                  v-if="selectedSdgHub && selectedSdgHub.number === sdg.number"
                  class="absolute inset-0 pointer-events-none"
                  :style="{ backgroundColor: sdg.color, opacity: '0.03' }"
                ></div>
              </button>
            </div>
          </div>

          <!-- Detail Panel (Right) -->
          <div class="lg:col-span-2" v-if="selectedSdgHub" id="sdg-detail-panel">
            <div
              class="relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <!-- Colored Top Bar -->
              <div
                class="h-2 md:h-1.5 w-full transition-colors duration-500"
                :style="{ backgroundColor: selectedSdgHub.color }"
              ></div>

              <div class="p-8 md:p-10">
                <!-- Header -->
                <div class="mb-8">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="flex-shrink-0">
                      
                    </div>
                    <div>
                      <p
                        class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1"
                      >
                        SDG {{ selectedSdgHub.number }}
                      </p>
                      <h3
                        class="font-['Livvic'] text-2xl md:text-3xl font-bold text-gray-900"
                      >
                        {{ selectedSdgHub.title }}
                      </h3>
                    </div>
                  </div>
                </div>

                <!-- Detailed Description -->
                <div class="pb-8 mb-8 border-b border-gray-200/50">
                  <p
                    class="mb-4 text-base leading-relaxed text-gray-700 md:text-lg"
                  >
                    {{ selectedSdgHub.description }}
                  </p>
                  <p
                    class="text-sm italic leading-relaxed text-gray-600 md:text-base"
                  >
                    {{ selectedSdgHub.longDescription }}
                  </p>
                </div>

                <!-- Impact Stats Grid -->
                <div class="mb-8">
                  <p
                    class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4"
                  >
                    FarmGate Africa's Contribution Stats
                  </p>
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      v-for="(stat, idx) in selectedSdgHub.stats"
                      :key="idx"
                      class="p-4 transition-colors border rounded-lg bg-gradient-to-br from-white to-gray-50 border-gray-200/50 hover:border-gray-300"
                    >
                      <div
                        class="text-2xl font-bold md:text-3xl font-['Livvic']"
                        :style="{ color: selectedSdgHub.color }"
                      >
                        {{ stat.value }}
                      </div>
                      <p
                        class="mt-2 text-xs font-medium text-gray-600 md:text-sm"
                      >
                        {{ stat.label }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Related Initiatives -->
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4"
                  >
                    Key Focus Areas
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(initiative, idx) in selectedSdgHub.initiatives"
                      :key="idx"
                      class="inline-flex items-center px-3 py-2 text-xs font-semibold transition-all duration-300 border rounded-full md:text-sm"
                      :class="[
                        idx % 2 === 0
                          ? 'bg-green-50 border-[#129C48]/30 text-[#035925]'
                          : 'bg-yellow-50 border-[#F2CB00]/30 text-yellow-800',
                      ]"
                    >
                      {{ initiative }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Visual Impact Bar -->
              <div class="px-8 pb-8 md:px-10">
                <p
                  class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3"
                >
                  Impact Progress
                </p>
                <div
                  class="relative h-3 overflow-hidden bg-gray-200 rounded-full"
                >
                  <div
                    class="absolute inset-y-0 left-0 transition-all duration-700 rounded-full"
                    :style="{
                      width: selectedSdgHub.impact + '%',
                      backgroundColor: selectedSdgHub.color,
                    }"
                  ></div>
                </div>
                <p class="mt-2 text-xs text-gray-500">
                  {{ selectedSdgHub.impact }}% of our
                  {{ selectedSdgHub.year }} goals achieved
                </p>
              </div>
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
import { computed, onMounted, ref } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import { useHighlightOnLoad } from "@/composables/useHighlightOnLoad";
import Header from "@/components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";
import ImpactImg from "@/assets/img/Women-farm.jpg";
import farmPic1 from "@/assets/img/farm-pic1.jpg";
import farmPic2 from "@/assets/img/farm-pic2.jpg";
import farmPic3 from "@/assets/img/farm-pic3.jpg";
import farmPic4 from "@/assets/img/farm-pic4.jpg";

import africanFarmVideo from "@/assets/video/African_Farm_Video_Generation.mp4";
import climateAnimationData from "@/assets/animations/climate-lottie.json";
import windTurbineSvg from "@/assets/img/svgviewer-output1.svg?raw";
import ScrollDownPage from "@/components/ScrollDownPage.vue";

const lottieContainer = ref(null);
const staticTurbineContainer = ref(null);
let lottieInstance = null;

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
  mobile: true,
  desktop: true,
});

const navigateToVideo2 = () => {
  sessionStorage.setItem("activateVideo2", "true");
  window.location.href = "/";
};

// Initialize Lottie on mount
onMounted(async () => {
  const { init: initHighlight } = useHighlightOnLoad();
  initHighlight();
  
  // Initialize selected SDG for the hub
  selectedSdgHub.value = sdgItems[0];

  // Set up Intersection Observer to play animation when element comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isInViewport !== undefined) {
          if (entry.isInViewport && !lottieInstance) {
            initializeLottie();
          } else if (!entry.isInViewport && lottieInstance) {
            lottieInstance.pause();
          }
        }
      });
    },
    { threshold: 0.1 },
  );

  if (lottieContainer.value) {
    observer.observe(lottieContainer.value);
  }

  // Try to load Lottie right away as a fallback
  setTimeout(() => {
    if (!lottieInstance && lottieContainer.value) {
      initializeLottie();
    }
  }, 100);

  // Mark the turbine blade group for CSS animation
  setTimeout(() => {
    markTurbineBlades();
    applyAdditionalAnimations();
  }, 0);

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

async function initializeLottie() {
  if (!lottieContainer.value || lottieInstance) return;

  try {
    const lottie = await import("lottie-web");

    lottieInstance = lottie.default.loadAnimation({
      container: lottieContainer.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: climateAnimationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    lottieInstance.addEventListener("DOMLoaded", () => {
      const svg = lottieContainer.value?.querySelector("svg");
      if (svg) {
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.style.display = "block";
      }
      lottieInstance.setSpeed(1);
      lottieInstance.goToAndPlay(0, true);
    });
  } catch (err) {
    console.error("Failed to load Lottie animation:", err);
  }
}

function markTurbineBlades() {
  const root = staticTurbineContainer.value?.querySelector("svg");
  if (!root) return;

  // Reset previous wrappers if this runs more than once.
  const existingWrappers = Array.from(root.querySelectorAll(".turbine-rotor"));
  existingWrappers.forEach((wrapper) => {
    const parent = wrapper.parentNode;
    if (!parent) return;
    while (wrapper.firstChild) {
      parent.insertBefore(wrapper.firstChild, wrapper);
    }
    parent.removeChild(wrapper);
  });

  const bladePaths = Array.from(
    root.querySelectorAll('path[d*="36.145999908447266"]'),
  );
  const bladeGroups = bladePaths
    .map((path) => path.closest("g"))
    .filter(Boolean);
  if (!bladeGroups.length) return;

  const grouped = new Map();
  bladeGroups.forEach((group) => {
    const scaleAncestor = findScaleAncestor(group);
    const key = scaleAncestor || group.parentNode;
    if (!key) return;

    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(group);
  });

  grouped.forEach((groups) => {
    if (!groups.length) return;
    const firstGroup = groups[0];
    if (!firstGroup || !firstGroup.parentNode) return;

    const wrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");
    wrapper.classList.add("turbine-rotor");
    firstGroup.parentNode.insertBefore(wrapper, firstGroup);

    groups.forEach((group) => {
      wrapper.appendChild(group);
    });

    try {
      const bbox = wrapper.getBBox();
      wrapper.style.transformBox = "fill-box";
      wrapper.style.transformOrigin = "center";
      if (bbox.width > 0 && bbox.height > 0) {
        const centerX = bbox.x + bbox.width / 1.8;
        const centerY = bbox.y + bbox.height / 2.5; // Push down 12px for better centering
        wrapper.style.transformOrigin = `${centerX}px ${centerY}px`;
      }
    } catch (err) {
      // Ignore bbox errors in case the element is not renderable yet.
    }
  });
}

function findScaleAncestor(element) {
  let current = element.parentElement;
  while (
    current &&
    current.tagName &&
    current.tagName.toLowerCase() !== "svg"
  ) {
    const transform = current.getAttribute("transform");
    const matrix = parseMatrix(transform);
    if (matrix) {
      const { a, d } = matrix;
      if (a > 0.5 && a < 0.98 && d > 0.5 && d < 0.98) {
        return current;
      }
    }
    current = current.parentElement;
  }
  return null;
}

function parseMatrix(transform) {
  if (!transform) return null;
  const match = transform.match(/matrix\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(",").map((v) => Number(v.trim()));
  if (parts.length < 6 || parts.some((n) => !Number.isFinite(n))) return null;
  return {
    a: parts[0],
    b: parts[1],
    c: parts[2],
    d: parts[3],
    e: parts[4],
    f: parts[5],
  };
}

function applyAdditionalAnimations() {
  const root = staticTurbineContainer.value?.querySelector("svg");
  if (!root) return;

  // Apply pulsing to circles
  const circles = Array.from(root.querySelectorAll("circle"));
  circles.forEach((circle) => {
    // Only animate visible circles
    if (
      circle.getAttribute("display") !== "none" &&
      circle.parentElement?.getAttribute("style")?.includes("display: block")
    ) {
      circle.classList.add("pulse-circle");
    }
  });

  // Find all g elements and identify turbine poles by checking for nested groups with blade paths
  const allGroups = Array.from(root.querySelectorAll("g[transform]"));
  const turbinePoles = [];

  allGroups.forEach((group) => {
    const transform = group.getAttribute("transform");
    // Look for scale transforms that match our turbine scales
    if (
      transform &&
      (transform.includes("0.952") ||
        transform.includes("0.711") ||
        transform.includes("0.527"))
    ) {
      turbinePoles.push(group);
    }
  });

  console.log("Found turbine poles:", turbinePoles.length); // Debug log

  turbinePoles.forEach((pole, index) => {
    // Move to end of parent to ensure it renders on top
    const parent = pole.parentNode;
    if (parent) {
      parent.appendChild(pole);
    }

    // Apply continuous looping animation
    const animationDuration = 6000; // 4 seconds per loop
    const downDuration = 1000; // 1 second to move down
    const upDuration = 1000; // 1 second to move back up
    const pauseDuration = 3000; // 2 seconds at top

    const animate = () => {
      const loopStartTime = Date.now();

      const animateFrame = () => {
        const elapsed = (Date.now() - loopStartTime) % animationDuration;
        let progress = 0;
        let translateY = 0;

        if (elapsed < downDuration) {
          // Moving down
          progress = elapsed / downDuration;
          translateY = progress * 480; // Move 120px down
        } else if (elapsed < downDuration + upDuration) {
          // Moving back up
          progress = (elapsed - downDuration) / upDuration;
          translateY = 150 - progress * 120; // Move back up
        }
        // else: stays at top for pauseDuration

        // Update transform
        const currentTransform = pole.getAttribute("transform") || "";
        const baseTransform = currentTransform.split("translate")[0].trim();
        pole.setAttribute(
          "transform",
          `${baseTransform} translate(0, ${translateY})`,
        );

        requestAnimationFrame(animateFrame);
      };

      animateFrame();
    };

    animate();
  });

  // Apply wave effect to wind/flowing lines (curved paths with stroke)
  const allPaths = Array.from(root.querySelectorAll("path[stroke]"));
  allPaths.forEach((path) => {
    const d = path.getAttribute("d");
    const stroke = path.getAttribute("stroke");
    // Wind lines typically have curves (C or M commands indicating curves)
    if (d && d.includes("C") && stroke && stroke.toLowerCase() === "#ffffff") {
      // Skip the blade paths
      if (!d.includes("36.145999908447266")) {
        path.classList.add("wave-line");
      }
    }
  });

  // Apply drawing animation to structural lines (horizontal and vertical lines)
  const structuralLines = Array.from(
    root.querySelectorAll('path[stroke-width="5"]'),
  );
  structuralLines.forEach((line) => {
    const d = line.getAttribute("d");
    // Structural elements are typically simpler paths (not curves, or very specific patterns)
    if (
      d &&
      ((d.includes("M") && !d.includes("C")) || d.match(/^M[\d\s,.-]+$/))
    ) {
      line.classList.add("draw-stroke");
      const length = line.getTotalLength?.() || 100;
      line.style.strokeDasharray = length;
    }
  });
}

// FORMATTED DATA TO SEPARATE UNITS FROM VALUES
const impactStats = [
  { value: "6+", unit: "", isPrefix: false, label: "Projects Funded" },
  { value: "3.5m", unit: "₵", isPrefix: true, label: "Inputs Financed" },
  { value: "200+", unit: "", isPrefix: false, label: "Acres Cultivated" },
  { value: "600+", unit: "", isPrefix: false, label: "Farmers Impacted" },
  { value: "4+", unit: "", isPrefix: false, label: "Regions Covered" },
  {
    value: "89%",
    unit: "",
    isPrefix: false,
    label: "Impact Growth Satisfaction Rate",
  },
];

const galleryItems = ref([
  {
    title: "Sustainable Growth",
    description:
      "Implementing eco-friendly practices to ensure long-term agricultural viability.",
    image: farmPic1,
  },
  {
    title: "Community Empowerment",
    description:
      "Empowering local farmers with the tools and knowledge to succeed together.",
    image: farmPic2,
  },
  {
    title: "Future Innovation",
    description:
      "Leveraging technology to revolutionize food production across Africa.",
    image: farmPic3,
  },
  {
    title: "Urban Farming & Agri-Tourism",
    description:
      "Building vibrant city farms and immersive agri-tourism experiences that connect communities to sustainable food systems.",
    image: farmPic4,
  },
]);

const activeSdgNumber = ref(1);
const selectedSdgHub = ref(null);

const activeSdg = computed(() => {
  return (
    sdgItems.find((item) => item.number === activeSdgNumber.value) ??
    sdgItems[0]
  );
});

const toggleSdg = (number) => {
  activeSdgNumber.value = number;
};

const selectSdgHub = (number) => {
  const sdg = sdgItems.find((item) => item.number === number);
  if (sdg) {
    selectedSdgHub.value = sdg;
  }
};

const handleSdgClick = (number) => {
  selectSdgHub(number);
  // Universal smooth scroll to the detail panel
  setTimeout(() => {
    const panel = document.getElementById("sdg-detail-panel");
    if (panel) {
      const y = panel.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 100);
};

const sdgItems = [
  {
    number: 1,
    title: "No Poverty",
    description:
      "Supporting smallholder farmers with inputs and training to increase productivity and income, breaking cycles of poverty.",
    longDescription:
      "FarmGate Africa provides comprehensive support through financial services, agricultural inputs, and capacity building programs designed to lift smallholder farmers out of poverty. Our integrated approach combines access to credit with agronomic training to ensure sustainable income growth.",
    color: "#E5243B",
    metric: "600+ Farmers",
    stats: [
      { value: "600+", label: "Farmers Reached" },
      { value: "45%", label: "Income Increase" },
      { value: "₵3.5m", label: "Inputs Financed" },
      { value: "6+", label: "Projects Funded" },
    ],
    initiatives: [
      "Input Financing",
      "Farmer Training",
      "Market Access",
      "Cooperative Support",
    ],
    impact: 78,
    year: "2025",
    image: "/images/E-WEB-Goal-01.png",
  },
  {
    number: 2,
    title: "Zero Hunger",
    description:
      "Boosting sustainable agriculture and food security with innovative farming techniques and market access solutions.",
    longDescription:
      "Our food security initiatives focus on increasing agricultural productivity while ensuring nutritional diversity. We combine sustainable farming practices with market linkages to ensure farmers can reliably feed their families and communities.",
    color: "#DDA250",
    metric: "200+ Acres",
    stats: [
      { value: "200+", label: "Acres Cultivated" },
      { value: "85%", label: "Yield Growth" },
      { value: "15K", label: "Tons Produced" },
      { value: "25+", label: "Crop Varieties" },
    ],
    initiatives: [
      "Climate-Smart Agriculture",
      "Crop Diversification",
      "Irrigation Systems",
      "Food Storage",
    ],
    impact: 82,
    year: "2025",
    image: "/images/E-WEB-Goal-02.png",
  },
  {
    number: 5,
    title: "Gender Equality",
    description:
      "Empowering women farmers and entrepreneurs with equal opportunities, training, and leadership roles in agriculture.",
    longDescription:
      "Gender equality is central to our mission. We actively promote women's participation in all aspects of agriculture, from farm management to market leadership, ensuring equal access to resources and decision-making opportunities.",
    color: "#DD3E34",
    metric: "40% Women",
    stats: [
      { value: "40%", label: "Women Leaders" },
      { value: "150+", label: "Women Trained" },
      { value: "85%", label: "Retention Rate" },
      { value: "3:1", label: "Income Ratio" },
    ],
    initiatives: [
      "Women Farmer Groups",
      "Leadership Training",
      "Childcare Support",
      "Market Networks",
    ],
    impact: 75,
    year: "2025",
    image: "/images/E-WEB-Goal-05.png",
  },
  {
    number: 8,
    title: "Decent Work & Economic Growth",
    description:
      "Creating employment opportunities and sustainable livelihoods for rural communities through agricultural value chains.",
    longDescription:
      "We are committed to building strong agricultural value chains that create decent work and economic growth. Our approach generates employment at every stage—from production to processing and marketing—ensuring sustainable livelihoods for rural communities.",
    color: "#A21E48",
    metric: "150+ Jobs",
    stats: [
      { value: "150+", label: "Direct Jobs" },
      { value: "400+", label: "Indirect Jobs" },
      { value: "92%", label: "Wage Growth" },
      { value: "₵12m", label: "Wages Paid" },
    ],
    initiatives: [
      "Agro-Processing",
      "Youth Employment",
      "Value Chain Dev",
      "Skills Training",
    ],
    impact: 80,
    year: "2025",
    image: "/images/E-WEB-Goal-08.png",
  },
  {
    number: 9,
    title: "Industry, Innovation & Infrastructure",
    description:
      "Leveraging technology and digital solutions to modernize agriculture and build resilient farming infrastructure.",
    longDescription:
      "Technology drives transformation in agriculture. We invest in digital platforms, mobile solutions, and agri-tech innovations that help farmers make data-driven decisions, optimize resource use, and connect to markets more effectively.",
    color: "#DD1C3B",
    metric: "10+ Tech Solutions",
    stats: [
      { value: "10+", label: "Tech Tools" },
      { value: "5K+", label: "Digital Users" },
      { value: "89%", label: "Adoption Rate" },
      { value: "40%", label: "Cost Savings" },
    ],
    initiatives: [
      "Mobile App",
      "IoT Sensors",
      "Data Analytics",
      "E-Commerce Platform",
    ],
    impact: 76,
    year: "2025",
    image: "/images/E-WEB-Goal-09.png",
  },
  {
    number: 13,
    title: "Climate Action",
    description:
      "Advancing adaptation and low-carbon farming practices to build resilience against climate change impacts.",
    longDescription:
      "Climate change poses unprecedented challenges to agriculture. We build resilience through climate-smart practices, water management, renewable energy adoption, and farmer training on adaptation strategies to ensure farming remains viable in a changing climate.",
    color: "#407D52",
    metric: "50% Emissions ↓",
    stats: [
      { value: "50%", label: "Emissions Reduction" },
      { value: "2K", label: "Trees Planted" },
      { value: "100Ha", label: "Agroforestry" },
      { value: "95%", label: "Water Efficiency" },
    ],
    initiatives: [
      "Agroforestry",
      "Water Harvesting",
      "Solar Energy",
      "Soil Conservation",
    ],
    impact: 88,
    year: "2025",
    image: "/images/E-WEB-Goal-13.png",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    description:
      "Collaborating with stakeholders across sectors to drive transformative impact and achieve sustainable development.",
    longDescription:
      "No organization can achieve the SDGs alone. FarmGate builds strategic partnerships with government, NGOs, private sector, and communities to leverage diverse expertise and resources for greater collective impact.",
    color: "#1F4788",
    metric: "20+ Partners",
    stats: [
      { value: "20+", label: "Partner Organizations" },
      { value: "8", label: "Government Agencies" },
      { value: "15", label: "NGO Partners" },
      { value: "5K+", label: "Community Reps" },
    ],
    initiatives: [
      "Multi-Stakeholder Networks",
      "Policy Advocacy",
      "Joint Programs",
      "Knowledge Sharing",
    ],
    impact: 84,
    year: "2025",
    image: "/images/E-WEB-Goal-17.png",
  },
];
</script>

<style scoped>
/* Ensure smooth font rendering */
.font-livvic {
  font-family: "Livvic", sans-serif;
}
</style>
