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
            class="relative inline-flex items-center px-4 py-4 mt-0 overflow-hidden bg-green-700 cursor-pointer md:px-4 group rounded-xl w-fit md:mt-0 reveal-slide-right"
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
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-3 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
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
          class="grid grid-cols-2 gap-3 mt-6 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4 md:gap-6 md:mt-0"
        >
          <div
            v-for="stat in impactStats"
            :key="stat.label"
            class="group relative overflow-hidden rounded-lg md:rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-[#F2CB00]/50 hover:-translate-y-2 reveal-stagger flex flex-col justify-between"
          >
            <div>
              <div
                class="flex items-baseline gap-1 mb-2 font-['Livvic'] text-white group-hover:text-[#F2CB00] transition-colors"
              >
                <span
                  v-if="stat.isPrefix && stat.unit"
                  class="text-2xl font-bold md:text-5xl"
                >
                  {{ stat.unit }}
                </span>
                <span class="text-3xl font-bold leading-none md:text-5xl">
                  {{ stat.value }}
                </span>
                <span
                  v-if="!stat.isPrefix && stat.unit"
                  class="ml-1 font-semibold tracking-wide text-md md:text-base opacity-80"
                >
                  {{ stat.unit }}
                </span>
              </div>
              <div
                class="h-1 w-8 bg-[#129C48] mb-4 group-hover:w-full transition-all duration-500"
              ></div>
            </div>
            <div
              class="font-['Montserrat'] text-[12px] md:text-[13px] font-bold tracking-widest text-gray-300 group-hover:text-white leading-snug"
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

          <div class="z-30">
            <div
              class="relative w-full lg:w-[580px] h-64 lg:h-[350px] rounded-2xl"
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

    <section class="w-full px-4 py-24 overflow-hidden bg-white md:px-12">
      <div class="mx-auto max-w-[1440px]">
        <div class="flex flex-col items-center mb-16">
          <h2
            class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black mb-6 text-center"
          >
            Strategic Initiatives
          </h2>
          <div class="h-1 w-24 bg-[#F2CB00]"></div>
        </div>

        <div class="grid grid-cols-1 gap-6 md:hidden">
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="relative overflow-hidden rounded-[2rem] bg-cover bg-center"
            :style="{ backgroundImage: `url(${item.image})` }"
          >
            <div class="absolute inset-0 bg-black/40"></div>
            <div
              class="relative z-10 flex flex-col items-center justify-center p-6 text-center min-h-[300px]"
            >
              <h4
                class="font-['Livvic'] text-xl font-bold text-white uppercase tracking-widest drop-shadow-lg mb-4"
              >
                {{ item.title }}
              </h4>
              <p
                class="font-['Montserrat'] text-sm font-medium text-gray-100 mb-4 max-w-sm"
              >
                {{ item.description }}
              </p>
              <button
                @click="navigateToVideo2"
                class="relative flex items-center px-4 py-2 mx-auto overflow-hidden cursor-pointer group/button backdrop-blur-md bg-white/25 rounded-4xl"
              >
                <span
                  class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover/button:-translate-y-full"
                >
                  <LeafIcon class="w-4 h-4 text-white" />
                  <span class="text-xs font-semibold leading-none text-white"
                    >Start growing with us</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover/button:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-black" />
                  <span class="text-xs font-semibold leading-none"
                    >Start growing with us</span
                  >
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          class="hidden md:flex h-[400px] md:h-[500px] w-full flex-col md:flex-row gap-4 md:gap-6"
        >
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="group/card relative flex-1 overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3]"
          >
            <div
              class="absolute inset-0 h-full w-full bg-cover bg-center transition-all duration-700 group-hover/card:scale-110 group-hover/card:blur-[3px]"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>

            <div
              class="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover/card:bg-black/50"
            ></div>

            <div
              class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
              <h4
                class="translate-y-0 transform font-['Livvic'] text-xl md:text-2xl font-bold text-white uppercase tracking-widest drop-shadow-lg transition-transform duration-500 group-hover/card:-translate-y-4"
              >
                {{ item.title }}
              </h4>

              <div
                class="max-w-md transition-all duration-500 delay-100 translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100"
              >
                <p
                  class="font-['Montserrat'] text-sm md:text-base font-medium text-gray-100"
                >
                  {{ item.description }}
                </p>
                <button
                  @click="navigateToVideo2"
                  class="relative items-center px-4 py-2 mx-auto mt-4 overflow-hidden cursor-pointer group/button button-group rounded-4xl"
                  style="display: inline-flex; align-items: center"
                >
                  <span
                    class="absolute inset-0 transition-opacity duration-300 opacity-100 white-bg bg-white/25 backdrop-blur-md rounded-4xl group-hover/button:opacity-0"
                  ></span>
                  <span
                    class="absolute inset-0 transition-opacity duration-300 bg-yellow-400 opacity-0 yellow-bg rounded-4xl group-hover/button:opacity-100"
                  ></span>

                  <span
                    class="relative z-10 flex items-center gap-2 transition-opacity duration-300 opacity-100 white-text group-hover/button:opacity-0"
                  >
                    <LeafIcon class="w-4 h-4 text-white" />
                    <span class="text-xs font-semibold leading-none text-white"
                      >Start growing with us</span
                    >
                  </span>

                  <span
                    class="absolute inset-0 z-20 flex items-center justify-center gap-2 text-black transition-opacity duration-300 opacity-0 black-text rounded-4xl group-hover/button:opacity-100"
                  >
                    <LeafIcon class="w-4 h-4 text-black" />
                    <span class="text-xs font-semibold leading-none"
                      >Start growing with us</span
                    >
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    let
    <GrowWithUs />

    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";
import ImpactImg from "@/assets/img/Women-farm.jpg";
import farmPic1 from "@/assets/img/farm-pic1.jpg";
import farmPic2 from "@/assets/img/farm-pic2.jpg";
import farmPic3 from "@/assets/img/farm-pic3.jpg";

import africanFarmVideo from "@/assets/video/African_Farm_Video_Generation.mp4";
import climateAnimationData from "@/assets/animations/climate-lottie.json";
import windTurbineSvg from "@/assets/img/svgviewer-output1.svg?raw";

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

    // animate();
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
  { value: "3.5m+", unit: "₵", isPrefix: true, label: "Inputs Financed" },
  { value: "200+", unit: "acres", isPrefix: false, label: "Land Cultivated" },
  { value: "600+", unit: "", isPrefix: false, label: "Farmers Impacted" },
  { value: "27+", unit: "", isPrefix: false, label: "Communities Transformed" },
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
]);
</script>

<style scoped>
/* Ensure smooth font rendering */
.font-livvic {
  font-family: "Livvic", sans-serif;
}
</style>
