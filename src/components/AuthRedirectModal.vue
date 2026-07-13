<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div class="w-full max-w-md p-8 text-center bg-[#0a140d] border border-[#129C48]/50 rounded-3xl shadow-2xl relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-[#129C48]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-[#F2CB00]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute inset-0 z-0 pointer-events-none opacity-[0.08] bg-[url('/images/FARMGATE%20PATTERN%20_GREEN.png')] bg-cover bg-center"></div>
        
        <div class="relative z-10 flex flex-col items-center">
          <div class="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-tr from-[#129C48] to-[#F2CB00] p-0.5 shadow-xl shadow-[#129C48]/20 flex items-center justify-center animate-bounce">
            <div class="w-full h-full bg-[#0a140d] rounded-[14px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#F2CB00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-extrabold text-white tracking-tight">Authentication Required</h3>
          <p class="mt-2 text-sm text-white/70 leading-relaxed">
            Please sign in to your investor account to proceed with <span v-if="opportunityName" class="font-bold text-[#F2CB00]">{{ opportunityName }}</span><span v-else>this investment</span>.
          </p>

          <div class="w-full mt-6 bg-white/10 rounded-full h-2 overflow-hidden p-0.5">
            <div
              class="h-full bg-gradient-to-r from-[#129C48] via-[#F2CB00] to-[#129C48] rounded-full transition-all duration-[3400ms] ease-linear"
              :style="{ width: progressWidth + '%' }"
            ></div>
          </div>
          <p class="mt-3 text-xs font-semibold text-white/50 animate-pulse">Redirecting to login portal...</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  opportunityName: {
    type: String,
    default: "",
  },
});

const progressWidth = ref(0);

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      progressWidth.value = 0;
      setTimeout(() => {
        progressWidth.value = 100;
      }, 50);
    } else {
      progressWidth.value = 0;
    }
  },
  { immediate: true }
);
</script>
