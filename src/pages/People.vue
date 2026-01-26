<template>
  <div class="selection:bg-green-100">
    <Header :videoVariant="2" />

    <div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <div
        class="absolute inset-0 bg-center bg-cover opacity-30"
        :style="{ backgroundImage: `url(${heroImage})` }"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
      ></div>

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
            OUR PEOPLE
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          The team behind the mission.
        </p>
        <p class="text-gray-400 max-w-[600px] text-sm md:text-base">
          Meet the experts and innovators driving sustainable agriculture
          forward.
        </p>
      </div>
    </div>

    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div>
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[110px] justify-center"
        >
          <LeafIcon class="text-green-700" />
          <span class="text-xs font-semibold">Our Team</span>
        </h1>
      </div>

      <section class="pb-20" aria-label="Our Team">
        <div class="md:flex justify-between items-start mb-12">
          <div>
            <h3 class="mb-2 text-2xl font-semibold md:text-3xl md:max-w-[50%]">
              Meet Our <span class="text-[#129C48]">Diverse Team</span>
            </h3>
            <p class="text-gray-600 md:max-w-[60%] mb-8">
              Meet the experts and innovators driving sustainable agriculture
              forward.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <button
              v-for="dept in uniqueDepartments"
              :key="dept"
              @click="activeDepartment = dept"
              :class="[
                'group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg',
                activeDepartment === dept
                  ? 'bg-[#129C48] text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300',
              ]"
              :aria-pressed="activeDepartment === dept"
            >
              {{ dept }}
              <svg
                :class="[
                  'inline-block ml-2 w-4 h-4 transition-transform duration-300',
                  activeDepartment === dept
                    ? 'rotate-0'
                    : '-rotate-52 group-hover:rotate-0',
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

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div
            v-for="member in filteredTeam"
            :key="member.name"
            class="group bg-white border-2 border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#F2CB00] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            @click="openModal(member)"
          >
            <!-- Image Container with Hover Overlay -->
            <div class="relative w-28 h-28 md:w-40 md:h-40 mx-auto mb-4">
              <img
                :src="member.photoUrl"
                :alt="'Photo of ' + member.name"
                class="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <!-- Premium Hover Overlay -->
            <!--
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-br from-green-600/90 via-green-700/85 to-emerald-800/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              >
                <div
                  class="text-center px-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                >
                  <p
                    class="text-white text-xs md:text-sm font-semibold tracking-wide leading-tight"
                  >
                    {{ member.title }}
                  </p>
                </div>
              </div>
              
              <div
                class="absolute inset-0 rounded-full border-2 border-green-400/0 group-hover:border-green-400/60 transition-all duration-300 scale-100 group-hover:scale-110"
              ></div>
            </div>
          -->

            <h3
              class="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-green-700"
            >
              {{ member.name }}
            </h3>
            <!-- Title visible on mobile, hidden on larger screens unless hover -->
            <p
              class="text-sm text-gray-500 mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100"
            >
              {{ member.title }}
            </p>
            <p
              class="text-xs text-gray-400 group-hover:text-[#F2CB00] transition-colors duration-300"
            >
              Click to view profile
            </p>
          </div>
        </div>
      </section>
    </section>

    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto"
      >
        <div
          @click="closeModal"
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        ></div>

        <div
          class="relative bg-white rounded-[1.5rem] shadow-2xl max-w-sm md:max-w-5xl w-full flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none"
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
            class="w-full md:w-[55%] p-6 md:p-12 flex flex-col justify-center overflow-y-auto"
          >
            <h3 class="text-2xl font-bold leading-tight md:text-3xl">
              {{ selectedMember.name }}
            </h3>
            <p
              class="mt-1 text-base md:text-lg font-semibold tracking-tight text-[#035925]"
            >
              {{ selectedMember.title }}
            </p>

            <div
              class="mt-4 md:mt-8 mb-6 md:mb-26 overflow-y-auto max-h-[200px] md:max-h-[300px]"
            >
              <p class="text-sm leading-relaxed md:text-base text-stone-600">
                {{ selectedMember.bio }}
              </p>
            </div>

            <div>
              <a
                :href="selectedMember.socialLinks.linkedin"
                target="_blank"
                class="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3.5 bg-[#0077b5] text-white text-sm md:text-base font-bold rounded-full hover:bg-[#006396] transition-all active:scale-95"
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
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";
import { TEAM_DATA } from "./teamData.js";

import heroImage from "../assets/img/group-farm-image.jpg";
import nelsonImage from "../assets/img/Nelson.png";

import { ref, computed } from "vue";

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
