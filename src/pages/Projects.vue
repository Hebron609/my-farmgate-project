<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white overflow-x-hidden"
  >
    <Header :videoVariant="2" />

    <div class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${farmPic})` }"
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
            <span class="text-[#129C48]">PROJECTS.</span>
          </h1>
        </div>

        <p
          class="mt-4 text-gray-300 max-w-[750px] text-sm md:text-base reveal-slide-up delay-300"
        >
          At FGAI, we believe every interventions have the power to make a
          difference, and we trust there is a solution to poverty, food
          insecurity and sustainable impact.
        </p>

        <p
          class="max-w-[750px] mt-4 text-sm text-gray-400 delay-300 md:text-base reveal-slide-up"
        >
          Our impactful projects and investments are aimed at enhancing food
          systems and improving livelihoods. Explore our current projects that
          are making a difference in agriculture.
        </p>

        <div class="absolute bottom-10">
          <ScrollDownPage />
        </div>
      </div>
    </div>

    <section
      class="pb-24 overflow-hidden bg-white pt-15 md:pt-24 font-montserrat"
    >
      <div class="px-6 mx-auto mb-20 text-center max-w-7xl">
        <div
          class="flex items-center justify-center gap-2 mb-6 reveal-slide-left"
        >
          <div class="inline-flex">
            <button
              @click="navigateToVideo2"
              class="relative flex items-center justify-center px-4 py-2 mb-5 overflow-hidden font-semibold bg-yellow-400 border border-gray-200 cursor-pointer group rounded-4xl md:mb-10"
            >
              <span
                class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <LeafIcon class="w-4 h-4 text-black" />
                <span class="text-sm font-semibold tracking-wider text-black"
                  >Start growing with us</span
                >
              </span>

              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-[#129C48] group-hover:translate-y-0"
              >
                <LeafIcon class="w-4 h-4 text-white" />
                <span class="text-sm font-semibold leading-none text-white"
                  >Start growing with us</span
                >
              </span>
            </button>
          </div>
        </div>
        <h2
          class="font-['Livvic'] text-4xl md:text-6xl font-bold text-black leading-tight reveal-slide-up"
        >
          Explore our <span class="text-[#129C48]">ongoing projects.</span>
        </h2>
        <div class="h-1 w-24 bg-[#F2CB00] mx-auto mt-8"></div>
      </div>

      <div
        class="carousel-scene relative w-full md:h-[550px] flex items-center justify-center overflow-x-clip h-[430px]"
      >
        <div
          v-for="(card, trackIndex) in displayOrder"
          :key="card.id"
          :class="getTrackStatus(trackIndex)"
          class="absolute card-item transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        >
          <div
            :class="[
              'relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 preserve-3d',
              trackIndex === 2 ? 'border-none' : 'border-[1px] border-white/20',
            ]"
          >
            <!-- Removed top-right badge; indicator moved next to title -->

            <img
              :src="card.image"
              class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
            ></div>

            <div
              class="absolute bottom-0 left-0 w-full p-5 md:py-4 md:px-6 backdrop-blur-xl rounded-b-[2.5rem] text-white"
            >
              <h3
                class="mb-1 text-lg font-bold md:text-xl font-['Livvic'] relative pl-6"
              >
                <span
                  :class="[
                    'ongoing-dot ongoing-dot-abs',
                    card.id === 4 ? 'completed-dot' : '',
                  ]"
                  aria-hidden="true"
                ></span>
                <span class="inline-block">{{ card.title }}</span>
              </h3>
              <p
                class="text-xs leading-relaxed md:text-sm text-stone-200 opacity-90 font-['Montserrat'] whitespace-pre-line pl-5"
              >
                {{ card.description }}
              </p>
            </div>
          </div>

          <div
            v-if="trackIndex === 2"
            class="absolute inset-0 z-[100] flex items-center justify-between px-6 pointer-events-none transform translate-z-10"
          >
            <button
              @click.stop="handlePrev"
              class="pointer-events-auto p-2 bg-[#0a4d3c] rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer absolute left-[-2px]"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              @click.stop="handleNext"
              class="pointer-events-auto p-2 bg-[#0a4d3c] rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer absolute right-[-2px] z-[100]"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="w-full bg-[#129C48] py-24 text-white reveal-fade relative overflow-hidden"
    >
      <div class="relative z-10 px-6 mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2
            class="font-['Livvic'] text-3xl font-bold tracking-widest uppercase mb-4"
          >
            Our impact in Numbers
          </h2>
          <div class="h-1 w-24 bg-[#F2CB00] mx-auto"></div>
        </div>

        <div
          class="grid grid-cols-2 gap-4 text-center sm:gap-6 md:gap-4 lg:gap-8 md:grid-cols-4"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col items-center h-full group reveal-stagger"
          >
            <div
              class="flex flex-col items-center justify-center w-full p-3 mb-2 transition-transform duration-300 border shadow-lg h-[170px] lg:h-[190px] rounded-2xl md:rounded-3xl bg-white/20 backdrop-blur-md border-white/30 sm:p-4 lg:p-6 group-hover:scale-105"
            >
              <div
                class="w-full px-2 mb-1 font-['Livvic'] text-white md:mb-2 drop-shadow-lg"
              >
                <span
                  class="block w-full text-3xl font-bold tracking-tight text-center whitespace-nowrap sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl"
                >
                  {{ stat.number }}
                </span>
              </div>

              <div
                class="w-full px-2 font-['Montserrat'] text-[#F2CB00] font-bold uppercase tracking-widest drop-shadow flex items-start justify-center h-16 md:h-12 lg:h-14"
              >
                <span
                  class="block w-full text-sm text-center whitespace-pre-line"
                >
                  {{ stat.label.replace(" ", "\n") }}
                </span>
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
import { ref, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";

import farmPic from "@/assets/img/farm-pic4.jpg";
import farmCrops from "@/assets/img/okra1.jpg";
import farmIrrigation from "@/assets/img/onion.jpg";
import farmPic9 from "@/assets/img/farm-pic2.jpg";
import farmPic1 from "@/assets/img/pepper-farm.jpg";
import farmPic6 from "@/assets/img/cassava1.jpg";
import farmPic3 from "@/assets/img/yam1.webp";
import ScrollDownPage from "../components/ScrollDownPage.vue";

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
  api.reveal(".reveal-stagger", {
    ...revealEffects.stagger,
    duration: 600,
    interval: 100,
  });
});

const solutions = [
  {
    id: 1,
    title: "Danso Community 20-acre Lady's Finger Okra Farming Project",
    image: farmCrops,
    description: `\u2022 Tullow Agriventure Programme (TAP)\n\u2022 Eastern Region, Ghana`,
  },
  {
    id: 2,
    title: "15-acre Onion Farming Project at Danso Village",
    image: farmIrrigation,
    description: `\u2022 Tullow Agriventure Programme (TAP)\n\u2022 Eastern Region, Ghana`,
  },
  {
    id: 3,
    title: "⁠Asutsuare Rice farm project",
    image: farmPic9,
    description: `\u2022 Tullow Agriventure Programme (TAP)\n\u2022 Eastern Region, Ghana`,
  },
  {
    id: 4,
    title: "201-acre Ahafo Pepper Farm Project",
    image: farmPic1,
    description: `\u2022 Tullow Agriventure Programme (TAP)\n\u2022 Ahafo Region, Ghana`,
  },
  {
    id: 5,
    title: "Topease No. 2 Community 100-acre Block Cassava Farming",
    image: farmPic3,
    description: `\u2022 Tullow Agriventure Programme (TAP)\n\u2022 Eastern Region, Ghana`,
  },
  {
    id: 6,
    title: "Danso Community Yam Block Farm project",
    image: farmPic6,
    description: `\u2022 Tullow Agriventure Programme (TAP)\n\u2022 Eastern Region, Ghana`,
  },
];

const displayOrder = ref([...solutions]);

const getTrackStatus = (index) => {
  // SYMMETRICAL 5-SLOT TRACK FOR 6 CARDS:
  if (index === 0) return "hidden-far-left"; // Exit/Entry point Left (-250%)
  if (index === 1) return "prev"; // Visible Left (-105%)
  if (index === 2) return "active"; // CENTER FOCUS (0%)
  if (index === 3) return "next"; // Visible Right (105%)

  return "hidden-far-right"; // Index 4 & 5 wait here (+250%)
};

const handleNext = () => {
  const first = displayOrder.value.shift();
  displayOrder.value.push(first);
};

const handlePrev = () => {
  const last = displayOrder.value.pop();
  displayOrder.value.unshift(last);
};

const stats = ref([
  { number: "550+", label: "Farmers Supported" },
  { number: "27+", label: "Communities Transformed" },
  { number: "2", label: "Sponsored Partners" },
  { number: "₵2.72m", label: "Working Capital Provided" },
]);
</script>

<style scoped>
.carousel-scene {
  perspective: 2500px;
}
.preserve-3d {
  transform-style: preserve-3d;
}
.ongoing-dot {
  width: 10px;
  height: 10px;
  background: #16a34a; /* vivid green */
  border-radius: 9999px;
  box-shadow: 0 0 0 6px rgba(22, 163, 74, 0.12);
  display: inline-block;
  position: relative;
}

.ongoing-dot::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  background: rgba(22, 163, 74, 0.55);
  border-radius: 9999px;
  transform: translate(-50%, -50%) scale(1);
  opacity: 0.95;
  animation: ripple 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.95;
  }
  70% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0.35;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
.ongoing-dot-abs {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
}

.completed-dot {
  width: 10px;
  height: 10px;
  background: #ffffff;
  box-shadow: none;
}

.completed-dot::after {
  content: none;
  animation: none;
}

.translate-z-10 {
  transform: translateZ(60px);
}

.card-item {
  width: 600px;
  height: 500.09px;
  transform-style: preserve-3d;
  left: 50%;
  margin-left: -300px;
  position: absolute;
  /* 0.8s transition ensures the slide through the viewport is visible and smooth */
  transition:
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s ease;
}

.active {
  z-index: 100;
  transform: translateX(0) translateZ(150px);
  opacity: 1;
}

.prev {
  z-index: 50;
  transform: translateX(-103%) translateZ(-350px) rotateY(-28deg) scale(0.85);
  opacity: 0.45;
  filter: blur(0.8px);
}

.next {
  z-index: 50;
  transform: translateX(103%) translateZ(-350px) rotateY(28deg) scale(0.85);
  opacity: 0.45;
  filter: blur(0.8px);
}

/* OFF-SCREEN WAITING ROOMS */
.hidden-far-left {
  opacity: 0;
  z-index: 10;
  transform: translateX(-250%) translateZ(-500px);
}

.hidden-far-right {
  opacity: 0;
  z-index: 10;
  transform: translateX(250%) translateZ(-500px);
}

@media (max-width: 768px) {
  .card-item {
    width: 320px;
    height: 400px;
    margin-left: -160px;
  }
  .prev,
  .next {
    opacity: 0;
    transform: translateX(0) scale(0.5);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 2.5s linear infinite;
}
</style>
