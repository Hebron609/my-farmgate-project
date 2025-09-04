<template>
  <div
    :class="[ 
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-[rgb(3,89,37)]' : 'bg-transparent',
    ]"
  >
    <nav
      class="text-white flex justify-between items-center p-4 max-w-[1440px] mx-auto font-montserrat sm:px-8"
    >
      <!-- Logo -->
      <a href="#">
        <img
          class="max-w-[130px] h-auto"
          src="/src/assets/img/fg logo.png"
          alt="Logo"
        />
      </a>

      <!-- Desktop Nav -->
      <div class="items-center hidden gap-10 text-sm font-semibold lg:flex">
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          :href="item.href"
          :class="[ 
            'relative pb-2 overflow-hidden group transition-colors',
            currentPath === item.href ? 'text-yellow-400 font-bold' : 'text-white'
          ]"
        >
          <span
            class="block transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >{{ item.label }}</span
          >
          <span
            class="absolute inset-0 block transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"
            >{{ item.label }}</span
          >
          <div
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"
          ></div>
        </a>
      </div>

      <!-- Desktop CTA Button -->
      <button
        class="hidden lg:flex group relative overflow-hidden p-4 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl items-center gap-2 cursor-pointer"
      >
        <span
          class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
        >
          <font-awesome-icon icon="leaf" class="text-xs" />
          <span class="text-sm font-semibold">Let's work together</span>
        </span>
        <span
          class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
        >
          <font-awesome-icon icon="leaf" class="text-xs" />
          <span class="text-sm font-semibold">Let's work together</span>
        </span>
      </button>

      <!-- Hamburger Button -->
      <button @click="toggleMenu" class="lg:hidden z-[100] cursor-pointer">
        <font-awesome-icon
          :icon="isMenuOpen ? '' : 'bars'"
          :class="[isMenuOpen ? 'text-black' : 'text-white']"
          class="text-2xl transition-colors duration-300"
        />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-from-top">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 flex flex-col items-center px-4 pt-10 pb-6 text-lg text-black bg-white lg:hidden font-montserrat"
      >
        <!-- Mobile Logo and Close Button -->
        <div class="flex items-center justify-between w-full px-4 mb-6">
          <img
            class="max-w-[100px] h-auto"
            src="/src/assets/img/fg logo.png"
            alt="Logo"
          />
          <button @click="toggleMenu" class="z-[101] cursor-pointer">
            <font-awesome-icon icon="times" class="text-2xl text-black" />
          </button>
        </div>

        <!-- Mobile Menu Items -->
        <div class="flex flex-col items-center gap-5">
          <a
            v-for="(item, index) in menuItems"
            :key="index"
            :href="item.href"
            @click="toggleMenu"
            :class="[ 
              'transition-colors',
              currentPath === item.href ? 'text-yellow-400 font-bold' : 'text-black'
            ]"
          >
            {{ item.label }}
          </a>

          <!-- CTA button on mobile -->
          <button
            class="mt-6 flex items-center gap-2 px-6 py-3 bg-[rgb(3,89,37)] text-white rounded-full"
          >
            <font-awesome-icon icon="leaf" class="text-xs" />
            <span class="text-sm font-semibold">Let's work together</span>
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

// Get current page path (e.g. "/about.html")
const currentPath = ref(window.location.pathname);

// Scroll background
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// Toggle menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Lock background scroll on mobile
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Menu items
const menuItems = [
  { label: "Home", href: "/index.html" },
  { label: "About Us", href: "/about.html" },
  { label: "Solutions", href: "/solutions.html" },
  { label: "Marketplace", href: "/marketplace.html" },
  { label: "Pricing", href: "/pricing.html" },
];
</script>

<style scoped>
.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: all 0.4s ease;
}
.slide-from-top-enter-from,
.slide-from-top-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
