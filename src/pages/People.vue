<template>
  <div class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white">
    <Header :videoVariant="2" />

    <div class="relative h-screen w-full overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${heroImage})` }"
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

      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>

      <div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div class="reveal-slide-up">
          <LeafIcon class="mx-auto mb-6 h-16 w-16 text-[#F2CB00] animate-pulse" />
          
          <h1 class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight">
            OUR <br />
            <span class="text-[#129C48]">PEOPLE.</span>
          </h1>
        </div>

    
         <p class="mt-4 text-gray-400 max-w-[600px] text-sm md:text-base reveal-slide-up delay-300">
          Meet the experts and innovators behind the mission towards driving sustainable agriculture forward.
        </p>

        <div class="absolute bottom-10 animate-bounce">
          <svg class="h-8 w-8 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>

    <section class="w-full bg-white pb-20 px-6 md:px-12 relative overflow-hidden mt-14" aria-label="Our Team">
        <div class="absolute top-0 right-0 opacity-5 pointer-events-none">
             <LeafIcon class="w-[300px] h-[300px] text-[#129C48]" />
        </div>

      <div class="mx-auto max-w-[1440px] relative z-10">
        <div class="inline-flex ">
              <a
                href="/solutions.html"
                class="inline-flex group relative overflow-hidden px-3 py-1.5 rounded-4xl items-center justify-center cursor-pointer bg-gray-50 border border-gray-200 whitespace-nowrap md:mb-10 mb-5"
              >
                <span
                  class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <LeafIcon class="text-[#129C48] w-4 h-4 shrink-0" />
                  <span
                    class="text-xs font-semibold tracking-wider text-gray-500"
                    >Our solution</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-black shrink-0" />
                  <span class="text-xs font-semibold leading-none"
                    >Our solution</span
                  >
                </span>
              </a>
            </div>
        
        <div class="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">

          
           
           <div class="md:max-w-xl reveal-slide-right">
            
              <h2 class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                 Who <span class="text-[#129C48]">We Are</span>
              </h2>
              <div class="h-1 w-24 bg-[#F2CB00] mb-8"></div>
               <p class="text-gray-600 text-lg leading-relaxed font-light md:max-w-[70%]">
                 We are a team of agronomists, technologists, agripreneur, and sustainability experts.
              </p>
           </div>

           <div class="flex flex-wrap gap-3 reveal-slide-left justify-end">
              <button
              v-for="dept in uniqueDepartments"
              :key="dept"
              @click="activeDepartment = dept"
              :class="[
                'px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 group',
                activeDepartment === dept
                  ? 'bg-[#129C48] text-white border-[#129C48] shadow-lg scale-105'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#129C48] hover:text-[#129C48]',
              ]"
              :aria-pressed="activeDepartment === dept"
            >
              {{ dept }}
              <svg
                :class="[
                  'w-4 h-4 transition-transform duration-300',
                  activeDepartment === dept
                    ? 'rotate-0'
                    : '-rotate-45 group-hover:rotate-0',
                ]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
           </div>
        </div>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          <div
            v-for="member in filteredTeam"
            :key="member.name"
            class="group cursor-pointer transition-all duration-300 reveal-stagger mx-auto w-32 sm:w-48 lg:w-48 text-center"
            @click="openModal(member)"
            :aria-label="'View profile of ' + member.name"
          >
            <div class="relative overflow-hidden rounded-full aspect-square hover:shadow-2xl hover:scale-105 hover:border-4 hover:border-gray-300 transition-all duration-300">
                <img
                    :src="member.photoUrl"
                    :alt="'Photo of ' + member.name"
                    class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-end items-center text-center pb-4"
                >
                    <h3
                        class="text-white text-xs sm:text-sm md:text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 font-serif"
                    >
                        {{ member.name.split(" ")[0] }}
                    </h3>
                    <p
                        class="text-[#F2CB00] text-xs sm:text-sm md:text-base font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200 font-montserrat"
                    >
                        {{ member.title.split(" ")[0] }}
                    </p>
                </div>
            </div>
            <div class="mt-4 md:hidden">
                <h3 class="font-bold text-black">{{ member.name.split(" ")[0] }}</h3>
                <p class="text-sm text-[#129C48]">{{ member.title.split(" ")[0] }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto"
      >
        <div
          @click="closeModal"
          class="absolute inset-0 bg-black/70 backdrop-blur-xl"
        ></div>

        <div
          class="relative bg-white rounded-[1.5rem] shadow-2xl max-w-sm sm:max-w-md md:max-w-5xl w-full flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none"
        >
          <button
            @click="closeModal"
            class="absolute z-20 px-3 py-1 text-[10px] md:text-sm font-bold uppercase border-2 rounded-full top-4 right-4 md:top-6 md:right-6 border-stone-300 text-stone-500 bg-white/80 md:bg-transparent hover:bg-stone-100"
          >
            close x
          </button>

          <div class="w-full md:w-[45%] h-56 md:h-auto shrink-0">
            <img
              :src="selectedMember.photoUrl"
              :alt="selectedMember.name"
              class="object-cover w-full h-full"
            />
          </div>

          <div
            class="w-full md:w-[55%] p-4 sm:p-6 md:p-12 flex flex-col justify-center overflow-y-auto"
          >
            <h3 class="text-xl sm:text-2xl font-bold leading-tight md:text-3xl">
              {{ selectedMember.name }}
            </h3>
            <p
              class="mt-1 text-sm sm:text-base md:text-lg font-semibold tracking-tight text-[#035925]"
            >
              {{ selectedMember.title }}
            </p>

            <div
              class="mt-3 md:mt-8 mb-4 md:mb-26 overflow-y-auto max-h-[150px] sm:max-h-[200px] md:max-h-[300px]"
            >
              <p
                class="text-xs sm:text-sm leading-relaxed md:text-base text-stone-600"
              >
                {{ selectedMember.bio }}
              </p>
            </div>

            <div>
              <a
                :href="selectedMember.socialLinks.linkedin"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3.5 bg-[#0077b5] text-white text-xs sm:text-sm md:text-base font-bold rounded-full hover:bg-[#006396] transition-all active:scale-95"
              >
                Connect on Linkedin
                <svg
                  class="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
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
import { ref, computed, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";
import { TEAM_DATA } from "./teamData.js";

import heroImage from "../assets/img/group-farm-image.jpg";

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
  api.reveal(".reveal-slide-right", {
    ...revealEffects.slideRight,
    duration: 700,
    delay: 200,
  });
  api.reveal(".reveal-stagger", {
    ...revealEffects.stagger,
    duration: 600,
    interval: 100,
    delay: 100,
  });
});

const isOpen = ref(false);
const selectedMember = ref(null);
const activeDepartment = ref("All");

const openModal = (member) => {
  selectedMember.value = member;
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const uniqueDepartments = computed(() => [
  "All",
  ...new Set(TEAM_DATA.map((m) => m.department)),
]);

const filteredTeam = computed(() => {
  let filtered =
    activeDepartment.value === "All"
      ? TEAM_DATA
      : TEAM_DATA.filter((m) => m.department === activeDepartment.value);
  return filtered.sort((a, b) => (a.order || 0) - (b.order || 0));
});
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > .relative,
.modal-leave-active > .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from > .relative,
.modal-leave-to > .relative {
  transform: scale(0.95);
}
</style>