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
            src="/src/assets/img/fg logo.png"
            alt="Logo"
          />
        </a>

        <!-- Right section -->
        <div class="flex items-center gap-6">
          <!-- Marketplace Button -->
          <a
            href="/marketplace.html"
            class="hidden lg:flex group relative overflow-hidden p-4 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl items-center gap-2 cursor-pointer"
          >
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <font-awesome-icon icon="leaf" class="text-xs text-white" />
              <span class="text-sm font-semibold text-white">Marketplace</span>
            </span>
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
            >
              <font-awesome-icon icon="leaf" class="text-xs" />
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
        style="background-image: url('/src/assets/img/pattern-bg1.jpg')"
      >
        <div
          class="absolute inset-0 bg-[rgba(0,0,0,0.65)] backdrop-blur-sm"
        ></div>

        <!--Mobile-nav-->

        <div
          class="relative flex flex-col lg:flex-row lg:justify-between p-12 max-w-[1820px] mx-auto"
        >
          <div class="absolute top-6 left-6">
            <a href="/">
              <img
                class="max-w-[160px] h-auto"
                src="/src/assets/img/fg logo.png"
                alt="Logo"
              />
            </a>
          </div>

          <div class="flex-1 mb-8 lg:mb-0 mt-20">
            <h3 class="font-semibold text-2xl mb-4">Home</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="/index.html"
                  class="hover:text-yellow-400 transition text-xl"
                  >Home</a
                >
              </li>
            </ul>
          </div>

          <div class="flex-1 mb-8 lg:mb-0 mt-20">
            <h3 class="font-semibold text-2xl mb-4">About Us</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="/about.html"
                  class="hover:text-yellow-400 transition text-xl"
                  >Our Story</a
                >
              </li>
              <li>
                <a
                  href="/team.html"
                  class="hover:text-yellow-400 transition text-xl"
                  >Team</a
                >
              </li>
            </ul>
          </div>

          <div class="flex-1 mb-8 lg:mb-0 mt-20">
            <h3 class="font-semibold text-2xl mb-4">Solutions</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="/solutions.html"
                  class="hover:text-yellow-400 transition text-xl"
                  >Our Services</a
                >
              </li>
            </ul>
          </div>

          <div class="flex-1 mt-20">
            <h3 class="font-semibold text-2xl mb-4 text-yellow-400">Connect</h3>
            <p>FarmGate Africa</p>
            <p>Aveyime Mangoase, Volta Region, Ghana</p>
            <p>T: +233 30 398 0443</p>
            <p>E: connect@farmgate.africa</p>

            <div class="flex gap-3 mt-4">
              <a href="#"><font-awesome-icon icon="youtube" /></a>
              <a href="#"><font-awesome-icon icon="linkedin" /></a>
              <a href="#"><font-awesome-icon icon="facebook" /></a>
              <a href="#"><font-awesome-icon icon="instagram" /></a>
            </div>
          </div>

          <button
            @click="toggleMenu"
            class="absolute top-6 right-6 text-3xl lg:text-5xl hover:text-yellow-400 cursor-pointer"
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
