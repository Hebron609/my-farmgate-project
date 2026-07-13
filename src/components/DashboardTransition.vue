<template>
  <transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-[250] flex flex-col items-center justify-center bg-[#050f09] text-white overflow-hidden select-none"
    >
      <!-- Subtle ambient glow effects -->
      <div
        class="absolute -top-40 -left-40 w-96 h-96 bg-[#129C48]/15 rounded-full blur-[120px] pointer-events-none"
      ></div>
      <div
        class="absolute -bottom-40 -right-40 w-96 h-96 bg-[#F2CB00]/10 rounded-full blur-[120px] pointer-events-none"
      ></div>

      <!-- 1. Branded Background Graphic (FarmGate Topographic Crop Pattern) -->
      <div
        class="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <img
          :src="patternBg"
          alt=""
          class="absolute -bottom-16 -right-16 w-[650px] max-w-none opacity-35 object-contain transform rotate-6 transition-all duration-1000"
        />
        <img
          :src="patternBg"
          alt=""
          class="absolute -top-24 -left-24 w-[500px] max-w-none opacity-20 object-contain transform -rotate-12"
        />
      </div>

      <!-- 2. Central Journey Indicator Container -->
      <div class="relative z-10 flex flex-col items-center px-6 text-center">
        <!-- Brand Badge / Mini Icon -->
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#129C48]/40 bg-[#0a1f11]/80 px-4 py-1.5 backdrop-blur-sm shadow-lg shadow-[#129C48]/10"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2CB00] opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-[#F2CB00]"
            ></span>
          </span>
          <span class="text-xs font-bold uppercase tracking-widest text-[#F2CB00]">
            FarmGate Secure Session
          </span>
        </div>

        <!-- Dynamic Welcome Status Text -->
        <h2
          class="text-white font-semibold text-lg sm:text-xl md:text-2xl tracking-wide transition-all duration-500 font-['Livvic'] min-h-[2rem]"
        >
          {{ statusText }}
        </h2>

        <!-- 3. Timeline / Horizontal Progress Element -->
        <div class="mt-8 relative flex items-center">
          <!-- Track Line -->
          <div
            class="h-1.5 w-64 sm:w-80 bg-gray-800/90 border border-gray-700/60 rounded-full overflow-visible relative shadow-inner"
          >
            <!-- Animated Primary FarmGate Green Bar -->
            <div
              class="h-full bg-gradient-to-r from-[#129C48] via-[#22c55e] to-[#4ade80] rounded-full transition-all duration-200 ease-out relative"
              :style="{ width: `${progress}%` }"
            >
              <!-- Leading Circular Node connecting to Timeline Concept -->
              <div
                class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F2CB00] border-2 border-white shadow-md shadow-[#F2CB00]/60 flex items-center justify-center transition-transform duration-200"
                :class="{ 'scale-110': progress > 0 }"
              >
                <!-- Inner micro-glow pulse -->
                <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Percentage / Sub-caption -->
        <div class="mt-4 flex items-center justify-between w-64 sm:w-80 text-xs text-gray-400 font-medium">
          <span class="tracking-wider uppercase">Loading Dashboard</span>
          <span class="font-mono text-[#F2CB00] font-semibold">{{ Math.round(progress) }}%</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import patternBg from "@/assets/img/FARMGATE PATTERN _GREEN.png";

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 2400, // Total transition duration in ms
  },
});

const statusText = ref("Authenticating...");
const progress = ref(0);

let progressInterval = null;
let textTimeout = null;

const startJourney = () => {
  progress.value = 0;
  statusText.value = "Authenticating...";

  // Transition status text half-way through the journey
  textTimeout = setTimeout(() => {
    statusText.value = "Preparing your farm dashboard...";
  }, props.duration * 0.45);

  const stepTime = 30; // Update every 30ms
  const totalSteps = props.duration / stepTime;
  const increment = 100 / totalSteps;

  progressInterval = setInterval(() => {
    if (progress.value < 100) {
      // Ease out slightly near 100%
      const currentIncrement =
        progress.value > 85 ? increment * 0.6 : increment;
      progress.value = Math.min(100, progress.value + currentIncrement);
    } else {
      clearInterval(progressInterval);
    }
  }, stepTime);
};

onMounted(() => {
  if (props.show) {
    startJourney();
  }
});

onBeforeUnmount(() => {
  if (progressInterval) clearInterval(progressInterval);
  if (textTimeout) clearTimeout(textTimeout);
});
</script>

<style scoped>
/* Scoped keyframes for subtle float animation if needed */
@keyframes pulse-subtle {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
