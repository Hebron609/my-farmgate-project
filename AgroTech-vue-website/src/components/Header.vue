<template>
  <div>
    <!-- Header -->
    <div
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-[rgb(3,89,37)]' : 'bg-transparent',
      ]"
    >
      <nav
        class="text-white flex justify-between items-center p-4 max-w-[1820px] mx-auto font-montserrat sm:px-8"
      >
        <!-- Logo -->
        <a href="/">
          <img
            class="max-w-[160px] h-auto"
            src="/src/assets/img/fg logo-white.png"
            alt="Logo"
          />
        </a>

        <!-- Right section -->
        <div class="flex items-center gap-6">
          <a
            href="/marketplace.html"
            class="hidden lg:flex group relative overflow-hidden p-3 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl items-center gap-2 cursor-pointer"
          >
            <!-- NORMAL STATE -->
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <LeafIcon class="text-white" />
              <span class="text-sm font-semibold text-white">Marketplace</span>
            </span>

            <!-- HOVER STATE -->
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
            >
              <LeafIcon class="text-black" />
              <span class="text-sm font-semibold">Marketplace</span>
            </span>
          </a>

          <!-- Animated Stairs Hamburger -->
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

    <!-- Full-screen Overlay Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 text-white bg-[#020f28] bg-cover bg-center bg-fixed"
        :style="{ backgroundImage: `url(${patternBg})` }"
      >
        <div class="absolute inset-0 bg-[rgba(0,0,0,0.65)] backdrop-blur-sm"></div>

        <!--Mobile-nav-->
        <div
          class="relative flex flex-col lg:flex-row lg:justify-between p-12 max-w-[1820px] mx-auto"
        >
          <div class="absolute top-6 left-6">
            <a href="/">
              <img
                class="max-w-[160px] h-auto"
                src="/src/assets/img/fg logo-white.png"
                alt="Logo"
              />
            </a>
          </div>

          <div class="flex-1 mt-20 mb-8 lg:mb-0">
            <h3 class="mb-4 text-2xl font-semibold">Home</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="/index.html"
                  class="text-xl font-medium relative transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full pb-1"
                  >Home</a
                >
              </li>
            </ul>
          </div>

          <div class="flex-1 mt-20 mb-8 lg:mb-0">
            <h3 class="mb-4 text-2xl font-semibold">About Us</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="/about.html"
                  class="text-xl font-medium relative transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full pb-1"
                  >Our Story</a
                >
              </li>
              <li>
                <a
                  href="/team.html"
                  class="text-xl font-medium relative transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full pb-1"
                  >Team</a
                >
              </li>
            </ul>
          </div>

          <div class="flex-1 mt-20 mb-8 lg:mb-0">
            <h3 class="mb-4 text-2xl font-semibold">Solutions</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="/solutions.html"
                  class="text-xl font-medium relative transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full pb-1"
                  >Our Services</a
                >
              </li>
            </ul>
          </div>

          <div class="flex-1 mt-20">
  <h3 class="mb-4 text-2xl font-semibold text-yellow-400">Connect</h3>
  <p>FarmGate Africa</p>
  <p>Aveyime Mangoase, Volta Region, Ghana</p>
  
  <p class="flex items-center gap-2">
  <font-awesome-icon :icon="['fas', 'phone']" class="text-white" />
  +233 30 398 0443
</p>

<p class="flex items-center gap-2">
  <font-awesome-icon :icon="['fas', 'envelope']" class="text-white" />
  connect@farmgate.africa
</p>

<!--

<div class="flex gap-3 mt-4">
  <a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
  <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
  <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
  <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
</div>

-->

</div>


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
import { ref, onMounted, onUnmounted, watch } from "vue";
import LeafIcon from "./icons/LeafIcon.vue";
import patternBg from '@/assets/img/pattern-bg1.jpg' // <-- import image

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animated Stairs Hamburger */
.hamburger {
  width: 26px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: transform 0.35s ease, opacity 0.35s ease;
}

/* Stairs offset */
.hamburger span:nth-child(1) {
  width: 26px;
}
.hamburger span:nth-child(2) {
  width: 20px;
}
.hamburger span:nth-child(3) {
  width: 14px;
}

/* Open animation (turns into X) */
.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  width: 26px;
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  width: 26px;
}
</style>
