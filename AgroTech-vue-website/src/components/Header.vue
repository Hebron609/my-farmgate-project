<template>
<div class="relative w-full">
    <!-- Header -->
    <div
      :class="[ 
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-30',
        isScrolled ? 'bg-[rgb(3,89,37)] shadow-md' : 'bg-transparent'
      ]"
    >
      <nav
        class="text-white flex justify-between items-center max-w-[1900px] mx-auto font-montserrat px-6 sm:px-8 h-35 "
      >
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <img
  class="w-[160px] sm:w-[260px] md:w-[280px] object-contain"
  src="/src/assets/img/fg logo-white1.png"
  alt="Logo"
/>

        </a>

        <!-- Right section -->
        <div class="flex items-center gap-4 sm:gap-6">

          <!-- SEARCH FEATURE -->
          <div class="relative flex items-center">
            <!-- Search icon -->
            <button
              @click="toggleSearch"
              class="flex justify-center items-center p-2 bg-white/25 backdrop-blur-md 
                     rounded-full cursor-pointer transition-all hover:bg-yellow-400 hover:text-black"
            >
              <font-awesome-icon :icon="['fas', 'search']" class="text-white text-lg" />
            </button>

<!-- Expanding search box -->
<transition name="slide">
  <div
    v-if="isSearchOpen"
    class="absolute right-12 w-64 sm:w-80 bg-white/20 backdrop-blur-xl
           rounded-2xl shadow-2xl border border-white/30 flex items-center px-4 py-2 mt-2
           focus-within:ring-2 focus-within:ring-yellow-400
           hidden:animate-none sm:animate-pulse"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="text-white/90 text-sm mr-2" />
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Type to search..."
      class="w-full bg-transparent text-white placeholder-white/70 text-sm focus:outline-none"
    />
  </div>
</transition>


            <!-- Suggestions Dropdown -->
            <transition name="fade">
              <ul
                v-if="isSearchOpen && searchQuery"
                class="absolute right-12 mt-40 w-64 sm:w-80 bg-white/25 backdrop-blur-2xl
                       shadow-2xl rounded-2xl border border-white/30 overflow-hidden"
              >
                <li
                  v-for="item in filteredSuggestions"
                  :key="item"
                  @click="selectSuggestion(item)"
                  class="px-6 py-4 text-white text-sm cursor-pointer hover:bg-yellow-400 hover:text-black transition-all"
                >
                  {{ item }}
                </li>

                <li
                  v-if="filteredSuggestions.length === 0"
                  class="px-6 py-4 text-white/80 text-sm"
                >
                  No results…
                </li>
              </ul>
            </transition>
          </div>

          <!-- Marketplace Button -->
          <a
            href="/marketplace.html"
            class="hidden lg:flex group relative overflow-hidden px-4 py-2
                   backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl
                   items-center  cursor-pointer"
          >
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <LeafIcon class="text-white" />
              <span class="text-sm font-semibold leading-none text-white">Marketplace</span>
            </span>

            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2
                     text-black transition-transform duration-300 transform translate-y-full
                     bg-yellow-400 group-hover:translate-y-0"
            >
              <LeafIcon class="text-black" />
              <span class="text-sm font-semibold leading-none">Marketplace</span>
            </span>
          </a>

          <!-- Hamburger -->
          <button
            @click="toggleMenu"
            class="relative w-8 h-8 flex items-center justify-center z-[100] cursor-pointer"
          >
            <div :class="['hamburger', { open: isMenuOpen }]">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>
    </div>

    <!-- Overlay Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 text-white bg-[#020f28] bg-cover bg-center bg-fixed"
        :style="{ backgroundImage: `url(${patternBg})` }"
      >
        <div class="absolute inset-0 bg-[rgba(0,0,0,0.65)] backdrop-blur-sm"></div>

        <div class="relative flex flex-col lg:flex-row lg:justify-between p-12 max-w-[1820px] mx-auto">
          <div class="absolute top-6 left-6">
            <a href="/"><img class="max-w-[160px] h-auto" src="/src/assets/img/fg logo-white1.png" alt="Logo" /></a>
          </div>

          <!-- Home -->
          <div class="flex-1 mt-20 mb-8 lg:mb-0">
            <h3 class="mb-4 text-2xl font-semibold">Home</h3>
            <ul class="space-y-3">
              <li>
                <a href="/index.html" class="relative text-xl font-medium pb-1 group">
                  Home
                  <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <!-- About -->
          <div class="flex-1 mt-20 mb-8 lg:mb-0">
            <h3 class="mb-4 text-2xl font-semibold">About Us</h3>
            <ul class="space-y-3">
              <li>
                <a href="/about.html" class="relative text-xl font-medium pb-1 group">
                  Our Story
                  <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/team.html" class="relative text-xl font-medium pb-1 group">
                  Team
                  <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Solutions -->
          <div class="flex-1 mt-20 mb-8 lg:mb-0">
            <h3 class="mb-4 text-2xl font-semibold">Solutions</h3>
            <ul class="space-y-3">
              <li>
                <a href="/solutions.html" class="relative text-xl font-medium pb-1 group">
                  Our Services
                  <span class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="flex-1 mt-20">
            <h3 class="mb-4 text-2xl font-semibold text-yellow-400">Connect</h3>
            <p>FarmGate Africa & Industries Limited</p>
            <p>Aveyime Mangoase, Volta Region, Ghana</p>
            <p class="flex items-center gap-2"><font-awesome-icon :icon="['fas','phone']"/> +233 30 398 0443</p>
            <p class="flex items-center gap-2"><font-awesome-icon :icon="['fas','envelope']"/> connect@farmgate.africa</p>
          </div>

          <!-- Close -->
          <button
            @click="toggleMenu"
            class="absolute text-3xl cursor-pointer top-6 right-6 lg:text-5xl hover:text-yellow-400"
          >
            &times;
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import LeafIcon from "./icons/LeafIcon.vue";
import patternBg from "@/assets/img/pattern-bg1.jpg";

/* Scroll */
const isScrolled = ref(false);
const handleScroll = () => (isScrolled.value = window.scrollY > 20);
onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

/* Menu */
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
watch(isMenuOpen, (open) => document.body.style.overflow = open ? "hidden" : "");

/* Search */
const isSearchOpen = ref(false);
const searchQuery = ref("");
const suggestions = ref([
  "Our Story",
  "Our Services",
  "Marketplace",
  "Sustainability",
  "Invest in FarmGate",
]);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) searchQuery.value = "";
};

const filteredSuggestions = computed(() =>
  suggestions.value.filter((s) =>
    s.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

const selectSuggestion = (item) => {
  searchQuery.value = item;
  isSearchOpen.value = false;
  const i = item.toLowerCase();
  if (i.includes("story")) window.location.href = "/about.html";
  else if (i.includes("service")) window.location.href = "/solutions.html";
  else if (i.includes("market")) window.location.href = "/marketplace.html";
};
</script>

<style scoped>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Hamburger styles */
.hamburger {
  width: 26px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hamburger span {
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: transform 0.35s ease, opacity 0.35s ease;

  
}
.hamburger span:nth-child(1) { width: 26px; }
.hamburger span:nth-child(2) { width: 20px; }
.hamburger span:nth-child(3) { width: 14px; }
.hamburger.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); width: 26px; }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); width: 26px; }
</style>
