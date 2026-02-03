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
          class="mt-4 text-gray-400 max-w-[600px] text-sm md:text-base reveal-slide-up delay-300"
        >
          Explore our ongoing projects that are making a difference in
          agriculture.
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
      class="pb-24 overflow-hidden bg-white pt-15 md:pt-24 font-montserrat"
    >
      <div class="px-6 mx-auto mb-20 text-center max-w-7xl">
        <div
          class="flex items-center justify-center gap-2 mb-6 reveal-slide-left"
        >
        <div class="inline-flex">
              <a
                href="/marketplace.html"
                class="inline-flex group relative overflow-hidden px-3 py-1.5 rounded-4xl items-center justify-center cursor-pointer bg-gray-50 border border-gray-200 whitespace-nowrap md:mb-8"
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
            <img
              :src="card.image"
              class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"
            ></div>

            <div class="absolute bottom-0 left-0 w-full p-8 text-white md:p-10">
              <h3 class="mb-3 text-2xl font-bold md:text-3xl font-['Livvic']">
                {{ card.title }}
              </h3>
              <p
                class="text-sm leading-relaxed md:text-base text-stone-200 line-clamp-2 opacity-90 font-['Montserrat']"
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
            Our Year in Numbers
          </h2>
          <div class="h-1 w-24 bg-[#F2CB00] mx-auto"></div>
        </div>

        <div class="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col items-center reveal-stagger group"
          >
            <div
              class="font-['Livvic'] text-5xl md:text-7xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              {{ stat.number }}
            </div>
            <div
              class="font-['Montserrat'] text-[#F2CB00] text-sm md:text-base font-bold uppercase tracking-widest"
            >
              {{ stat.label }}
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
import { ref, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

import farmPic from "@/assets/img/farm-pic4.jpg";
import farmCrops from "@/assets/img/farm-crops.jpg";
import farmIrrigation from "@/assets/img/farm-irrigation.jpg";
import farmPic9 from "@/assets/img/farm-pic9.jpg";
import farmPic1 from "@/assets/img/farm-pic1.jpg";
import farmPic6 from "@/assets/img/farm-pic6.jpg";
import farmPic3 from "@/assets/img/farm-pic3.jpg";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
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
    title: "AgriTech & Smart Farming",
    image: farmCrops,
    description:
      "Leveraging cutting-edge technology and data analytics to optimize farming practices.",
  },
  {
    id: 2,
    title: "Horticulture",
    image: farmIrrigation,
    description:
      "Modernizing your business with data-driven insights and technology.",
  },
  {
    id: 3,
    title: "Animal Husbandry",
    image: farmPic9,
    description:
      "Growth roadmaps and tailored strategies for agricultural expansion.",
  },
  {
    id: 4,
    title: "Aquaculture",
    image: farmPic1,
    description:
      "Streamlining workflows to boost productivity and reduce operational costs.",
  },
  {
    id: 5,
    title: "Agri-Value Additions",
    image: farmPic6,
    description:
      "Sustainable fish and seafood farming in controlled environments promoting food security.",
  },
  {
    id: 6,
    title: "Agri-Advisory & Training.",
    image: farmPic3,
    description:
      "Equipping stakeholders with knowledge for better agricultural practices and decision-making.",
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
  { number: "1000+", label: "Farmers Impacted" },
  { number: "10", label: "Regions Covered" },
  { number: "50+", label: "Partners" },
  { number: "100%", label: "Growth" },
]);
</script>

<style scoped>
.carousel-scene {
  perspective: 2500px;
}
.preserve-3d {
  transform-style: preserve-3d;
}
.translate-z-10 {
  transform: translateZ(60px);
}

.card-item {
  width: 600px;
  height: 440px;
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
</style>
