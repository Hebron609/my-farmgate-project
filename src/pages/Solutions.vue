<template>
  <div class="min-h-screen bg-white">
    <div
      class="relative overflow-hidden h-[500px] md:h-[600px]  bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <Header :videoVariant="2" />
      <div
        class="absolute inset-0 bg-[url('/src/assets/img/our-solutions-banner.jpg')] bg-cover bg-center opacity-20"
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
            OUR SOLUTIONS
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          Transforming agriculture through innovation
        </p>
        <p class="text-gray-400 max-w-[600px] text-sm md:text-base">
          Discover our comprehensive solutions for sustainable farming and agricultural success
        </p>
      </div>
    </div>

    <section class="overflow-hidden bg-white pt-15 md:pt-24 font-montserrat">
      <div class="px-6 mx-auto mb-20 text-center max-w-7xl">
        <div class="flex items-center justify-center gap-2 mb-4">
          
          <div>
              <h1
                class="inline-flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl"
              >
                <LeafIcon class="text-green-700" />
                <span class="text-sm font-semibold">Our Solutions</span>
              </h1>
            </div>
    
        </div>
        <h2
          class="text-2xl font-medium leading-tight md:text-5xl text-stone-900 font-montserrat"
        >
          Reliable expertise to drive your <br />
          greatest success
        </h2>
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
              <h3 class="mb-3 text-2xl font-bold md:text-3xl">
                {{ card.title }}
              </h3>
              <p
                class="text-sm leading-relaxed md:text-base text-stone-200 line-clamp-2 opacity-90"
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

    <section class="py-10 overflow-hidden bg-white md:py-24 font-montserrat">
    <div class="px-6 mx-auto max-w-[1440px]">
      
      <div class="mb-16 text-center md:text-left">
        <div class="flex items-center justify-center gap-3 mb-4 md:justify-start">
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
          <h2 class="text-2xl font-semibold leading-tight md:text-3xl text-stone-900 md:max-w-[30%] mb-4">
          Measuring the Scope of Our Agricultural Impact
        </h2>
          <p class="md:max-w-[40%]">FarmGate Africa strategically manages its agricultural footprint to balance large-scale economic development with essential social well-being. By operating across the entire agricultural value chain, the organization produces high-quality goods that serve two distinct purposes.</p>
        </div>
       
      </div>

      <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
    <div 
      class="group relative flex flex-col justify-between p-12 rounded-[3rem] bg-stone-100 border border-stone-100 hover:shadow-2xl transition-all duration-700 min-h-[480px]"
      @mouseenter="animateValue(0, 65)"
      @mouseleave="resetValue(0)"
    >
      <div class="relative z-10">
        <div class="flex items-center gap-2 mb-6">
          <span class="w-8 h-[2px] bg-[#035925]"></span>
          <span class="text-xs font-bold tracking-widest uppercase text-[#035925]">Industrial Catalyst</span>
        </div>
        <h3 class="mb-4 text-3xl font-bold text-stone-900">Industrial Growth</h3>
        <p class="max-w-sm text-base leading-relaxed text-gray-700">
          We drive industrial expansion by supplying high-quality, value-added raw materials that strengthen regional supply chains and fuel manufacturing growth.
        </p>
      </div>

      <div class="mt-auto">
        <div class="flex items-end justify-between mb-6">
          <span class="text-xs font-bold tracking-tighter uppercase text-stone-400">Current Production Capacity</span>
          <span class="text-7xl md:text-8xl font-black text-[#035925] opacity-20 group-hover:opacity-100 transition-all duration-500">
            {{ displayValues[0] }}%
          </span>
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
      class="group relative flex flex-col justify-between p-12 rounded-[3rem] bg-[#035925] text-white shadow-2xl hover:scale-[1.03] transition-all duration-700 min-h-[480px]"
      @mouseenter="animateValue(1, 35)"
      @mouseleave="resetValue(1)"
    >
      <div class="relative z-10">
        <div class="flex items-center gap-2 mb-6">
          <span class="w-8 h-[2px] bg-yellow-400"></span>
          <span class="text-xs font-bold tracking-widest text-yellow-400 uppercase">Community Support</span>
        </div>
        <h3 class="mb-4 text-3xl font-bold text-white">Household Consumption</h3>
        <p class="max-w-sm text-base leading-relaxed text-green-50/80">
          A significant portion of our production is funneled directly into households to combat food insecurity and support the daily nutritional needs of families.
        </p>
      </div>

      <div class="mt-auto">
        <div class="flex items-end justify-between mb-6">
          <span class="text-xs font-bold tracking-tighter uppercase text-green-200/50">Direct Household Reach</span>
          <span class="font-black text-white transition-all duration-500 text-7xl md:text-8xl opacity-20 group-hover:opacity-100">
            {{ displayValues[1] }}%
          </span>
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

    
     <GrowWithUs />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

const isMobile = ref(false);
const displayValues = ref([0, 0]);
let intervals = [null, null];

// Check if mobile on mount and resize
onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
    if (isMobile.value) {
      displayValues.value = [65, 35];
    } else {
      displayValues.value = [0, 0];
    }
  };
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

const animateValue = (index, target) => {
  if (isMobile.value) return; // No animation on mobile
  // Clear any existing interval for this card
  if (intervals[index]) clearInterval(intervals[index]);
  
  // Start counting from current value to target
  intervals[index] = setInterval(() => {
    if (displayValues.value[index] < target) {
      displayValues.value[index]++;
    } else {
      clearInterval(intervals[index]);
    }
  }, 20); // Speed of the counter
};

const resetValue = (index) => {
  if (isMobile.value) return; // No reset animation on mobile
  if (intervals[index]) clearInterval(intervals[index]);
  
  // Smoothly reset back to 0
  intervals[index] = setInterval(() => {
    if (displayValues.value[index] > 0) {
      displayValues.value[index]--;
    } else {
      clearInterval(intervals[index]);
    }
  }, 10);
};

// 6 CARDS AS REQUESTED
const solutions = [
  {
    id: 1,
    title: "AgriTech & Smart Farming",
    image: "/src/assets/img/farm-crops.jpg",
    description:
      "Leveraging cutting-edge technology and data analytics to optimize farming practices.",
  },
  {
    id: 2,
    title: "Horticulture",
    image: "/src/assets/img/farm-irrigation.jpg",
    description:
      "Modernizing your business with data-driven insights and technology.",
  },
  {
    id: 3,
    title: "Animal Husbandry",
    image: "/src/assets/img/farm-pic9.jpg",
    description:
      "Growth roadmaps and tailored strategies for agricultural expansion.",
  },
  {
    id: 4,
    title: "Aquaculture",
    image: "/src/assets/img/farm-pic1.jpg",
    description:
      "Streamlining workflows to boost productivity and reduce operational costs.",
  },
  {
    id: 5,
    title: "Agri-Value Additions (Food Processing)",
    image: "/src/assets/img/farm-pic6.jpg",
    description:
      "Sustainable fish and seafood farming in controlled environments promoting food security.",
  },
  {
    id: 6,
    title: "Agri-Advisory & Training.",
    image: "/src/assets/img/farm-pic3.jpg",
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
  // All cards move one slot to the left
  // Index 1 (Prev) -> Index 0 (Hidden-Far-Left)
  // Index 2 (Active) -> Index 1 (Prev)
  // Index 3 (Next) -> Index 2 (Active)
  const first = displayOrder.value.shift();
  displayOrder.value.push(first);
};

const handlePrev = () => {
  // All cards move one slot to the right
  // Index 2 (Active) -> Index 3 (Next)
  // Index 1 (Prev) -> Index 2 (Active)
  // Index 3 (Next) -> Index 4 (Hidden-Far-Right)
  const last = displayOrder.value.pop();
  displayOrder.value.unshift(last);
};
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
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
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
