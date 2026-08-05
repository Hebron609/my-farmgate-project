<template>
  <div class="min-h-screen bg-stone-50 font-['Montserrat'] flex flex-col selection:bg-green-100 selection:text-green-900 overflow-x-hidden relative" :style="dynamicStyles">
    <!-- Decorative Farmgate Background Patterns -->
    <div class="absolute right-0 pointer-events-none top-[600px] opacity-5 z-0">
      <img class="h-[480px] w-auto max-w-none" :src="farmGatePattern" alt="" />
    </div>
    <div class="absolute left-0 pointer-events-none top-[1300px] opacity-5 z-0">
      <img class="h-[450px] w-auto max-w-none" :src="farmGatePattern" alt="" />
    </div>

    <!-- Header Navigation -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <section class="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden py-24 md:py-32 bg-stone-900">
      <!-- Dynamic Background Image with Smooth Cross-Fade -->
      <transition name="fade-bg">
        <div :key="currentHeroImage" class="absolute inset-0">
          <img
            :src="currentHeroImage"
            alt="Our Product Offerings"
            class="object-cover w-full h-full transition-transform duration-1000 ease-out"
          />
          <!-- Dark Overlay for Readability -->
          <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/50"></div>
        </div>
      </transition>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-[1440px] mx-auto px-6 text-center text-white">
        <h1 class="font-['Livvic'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Our Product <span class="text-[#F2CB00]">Offerings</span> 
        </h1>
        <p class="max-w-2xl mx-auto mt-4 text-sm font-light leading-relaxed text-gray-200 transition-all duration-300 sm:text-base md:text-lg">
          {{ dynamicHeroSubtitle }}
        </p>
      </div>
    </section>

    <!-- Product Grid Storefront with Unified Search & Filter Bar -->
    <main class="relative z-10 flex-1 w-full py-8 md:py-16">
      <section class="mx-auto max-w-[1440px] px-6">
       

        <!-- Unified Search and Filter Bar -->
        <div class="flex flex-col max-w-4xl mx-auto mb-12 overflow-hidden bg-white border border-gray-300 shadow-sm md:flex-row rounded-2xl md:rounded-full md:h-14">
          <!-- Left Side (Search Input) -->
          <div class="flex items-center flex-1 px-4 py-3 md:py-0">
            <font-awesome-icon :icon="['fas', 'search']" class="w-4 h-4 mr-3 text-gray-400 shrink-0" />
            <input
              type="text"
              v-model="searchQuery"
              placeholder="All crops grown & animals raised"
              class="flex-1 text-sm text-gray-800 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0 md:text-base"
            />
          </div>

          <!-- The Divider -->
          <div class="self-center hidden w-px h-8 bg-gray-300 md:block"></div>

          <!-- Right Side (Category Dropdown) -->
          <div class="relative flex items-center border-t border-gray-200 md:border-t-0 bg-gray-50 md:bg-transparent">
            <select
              v-model="selectedCategory"
              class="w-full h-full py-3 pl-6 text-sm font-medium text-white bg-black border-none appearance-none cursor-pointer md:w-auto focus:outline-none focus:ring-0 pr-11 md:py-0 md:text-base"
            >
              <option value="">Sort by Category</option>
              <option value="Crops">Crops</option>
              <option value="Livestock">Livestock</option>
              <option value="Fishery">Fishery</option>
            </select>
            <svg
              class="absolute w-4 h-4 text-white transition-colors -translate-y-1/2 pointer-events-none right-5 top-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        <!-- Empty state when no products match -->
        <div v-if="filteredProducts.length === 0" class="py-16 text-center">
          <p class="text-lg font-light text-gray-500">No offerings found matching your search or filter criteria.</p>
        </div>

        <!-- Product Cards Grid -->
        <transition-group
          v-else
          tag="div"
          name="card-stagger"
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <article
            v-for="product in filteredProducts"
            :key="product.id"
            class="flex flex-col overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-md cursor-pointer"
            @click="openOrderModal(product)"
          >
            <!-- Card Image Header -->
            <div class="relative h-56 overflow-hidden bg-green-50">
              <img
                :src="product.image"
                :alt="product.name"
                class="object-contain w-full h-full bg-brand-green-light"
                :class="product.imageClass || ''"
              />
              <!-- Order Badge -->
              <div class="absolute z-10 top-4 right-4">
                <button
                  type="button"
                  @click.stop="openOrderModal(product)"
                  class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold text-white shadow-md bg-[#129C48] hover:bg-[#0d7a38] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  Pre-order
                </button>
              </div>

            </div>

            <!-- Card Body (Minimalist Product Name & Price) -->
            <div class="flex items-start justify-between px-4 py-4 bg-white">
              <h3 class="font-['Livvic'] text-lg font-bold text-gray-800 tracking-tight">
                {{ product.name }}
              </h3>
              
              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#129C48" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                  <span class="font-['Livvic'] text-lg font-bold text-gray-800 tracking-tight">
                    GHS {{ (product.price || 150).toFixed(2).split('.')[0] }}<sup class="text-[0.65em] font-bold">.{{ (product.price || 150).toFixed(2).split('.')[1] }}</sup>
                  </span>
                </div>
                <p class="text-sm font-bold text-green-600 mt-1">{{ product.weight.replace('/', ' / ') }}</p>
              </div>
            </div>
          </article>
        </transition-group>
      </section>
    </main>

    <Transition name="modal">
      <div
        v-if="orderModal.visible"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-lg"
        @click.self="closeOrderModal"
      >
        <div
          class="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden modal-content"
          @click.stop
        >
          <!-- Top Green Accent Bar -->
          <div class="h-2.5 bg-[#129C48] w-full"></div>

          <!-- Close Icon (Top Right) -->
          <button
            @click="closeOrderModal"
            class="absolute z-20 top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="p-6 md:p-8">
            <div class="flex flex-col items-start gap-5 mb-6 sm:flex-row">
              <div class="inline-block p-2 border border-gray-200 shadow-sm rounded-xl bg-green-50">
                <img
                  v-if="orderModal.product"
                  :src="orderModal.product.image"
                  :alt="orderModal.product.name"
                  class="object-contain w-14 h-14"
                  :class="orderModal.product.imageClass || ''"
                />
              </div>
              <div>
                <h2 class="font-['Livvic'] text-xl font-bold text-gray-900">
                  {{ orderModal.product?.name }}
                </h2>
                <p class="mt-1 text-sm font-bold text-green-600">
                  {{ orderModal.product?.weight.replace('/', ' / ') }}
                </p>
                <p class="mt-1 text-xs text-gray-500 font-mono">
                  Pre-order ticket: {{ orderModal.orderNumber }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <!-- Quantity and Amount Row -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block mb-1 text-sm font-bold text-gray-700">
                    Quantity <template v-if="orderModal.product?.weight?.includes('crate')">(Crates)</template><template v-else-if="orderModal.product?.weight?.includes('bag')">(Bags)</template>
                  </label>
                  <div class="relative flex items-center">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <input
                      v-model.number="orderModal.quantity"
                      type="number"
                      min="1"
                      placeholder="1"
                      class="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#129C48] focus:border-transparent text-sm bg-gray-50/50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label class="block mb-1 text-sm font-bold text-gray-700">Amount (GHS)</label>
                  <div class="relative flex items-center">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#129C48] font-bold text-xs">
                      GHS
                    </div>
                    <input
                      :value="(orderModal.quantity * (orderModal.product?.price || 150)).toFixed(2)"
                      type="text"
                      disabled
                      class="w-full pl-11 pr-3 py-3 rounded-xl border border-gray-200 text-gray-800 font-bold bg-gray-100 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label class="block mb-1 text-sm font-bold text-gray-700">Client Name</label>
                <div class="relative flex items-center">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    v-model="orderModal.customerName"
                    type="text"
                    placeholder="Enter your full name"
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#129C48] focus:border-transparent text-sm bg-gray-50/50 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label class="block mb-1 text-sm font-bold text-gray-700">Pick up point</label>
                <div class="relative flex items-center">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <select
                    v-model="orderModal.pickupPoint"
                    class="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#129C48] focus:border-transparent text-sm appearance-none bg-gray-50/50 focus:bg-white transition-all cursor-pointer"
                    :class="orderModal.pickupPoint === '' ? 'text-gray-400' : 'text-gray-800'"
                  >
                    <option value="" disabled selected hidden>Select your pick up point</option>
                    <option value="Greater Accra Region">Greater Accra Region</option>
                    <option value="Eastern Region">Eastern Region</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label class="block mb-1 text-sm font-bold text-gray-700">Phone number</label>
                <div class="relative flex items-center">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    v-model="orderModal.phoneNumber"
                    type="tel"
                    placeholder="233 50 000 0000"
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#129C48] focus:border-transparent text-sm bg-gray-50/50 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label class="block mb-1 text-sm font-bold text-gray-700">Mode of payment</label>
                <div class="relative flex items-center">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <select
                    v-model="orderModal.paymentMode"
                    class="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#129C48] focus:border-transparent text-sm appearance-none bg-gray-50/50 focus:bg-white transition-all cursor-pointer"
                    :class="orderModal.paymentMode === '' ? 'text-gray-400' : 'text-gray-800'"
                  >
                    <option value="" disabled selected hidden>Select mode of payment</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Cash">Cash</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Terms and Conditions Checkbox -->
              <div class="mt-4 border-t border-gray-100 pt-4">
                <label class="flex items-start gap-3 cursor-pointer group">
                  <div class="relative flex items-center justify-center mt-0.5">
                    <input type="checkbox" v-model="orderModal.acceptedTerms" class="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-[#129C48] checked:border-[#129C48] transition-colors cursor-pointer focus:ring-2 focus:ring-[#129C48] focus:ring-offset-1" />
                    <svg class="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span class="text-sm text-gray-600 leading-snug select-none">
                    I have read and agree to the 
                    <button type="button" @click.prevent="showTerms = !showTerms" class="text-[#129C48] font-bold hover:underline">
                      Terms &amp; Conditions
                    </button>.
                  </span>
                </label>
                
                <!-- Expandable Terms Content -->
                <transition
                  enter-active-class="transition-all duration-300 ease-out overflow-hidden"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-40 opacity-100"
                  leave-active-class="transition-all duration-200 ease-in overflow-hidden"
                  leave-from-class="max-h-40 opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <div v-if="showTerms" class="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-500 overflow-y-auto max-h-32">
                    <p class="mb-2"><strong class="text-gray-700">1. Pre-orders:</strong> Submitting this form expresses your intent to purchase. A representative will contact you to finalize the order.</p>
                    <p class="mb-2"><strong class="text-gray-700">2. Payment:</strong> Do not send money until a Farmgate representative has confirmed your order and provided official payment details.</p>
                    <p><strong class="text-gray-700">3. Fulfillment:</strong> Orders are fulfilled based on stock availability and harvest schedules.</p>
                  </div>
                </transition>
              </div>

              <!-- Side-by-Side Centered Equal-Size Action Buttons -->
              <div class="flex items-center justify-center w-full gap-3 pt-3 mt-4">
                <button
                  type="button"
                  @click="closeOrderModal"
                  class="flex-1 py-3.5 px-4 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-2xl hover:bg-black hover:text-white hover:border-black focus:outline-none transition-all duration-300 cursor-pointer text-center"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  @click="proceedToOrder"
                  :disabled="!orderModal.acceptedTerms"
                  class="relative z-10 flex-1 group/btn overflow-hidden inline-flex items-center justify-center rounded-2xl py-3.5 bg-[#129C48] text-white transition-all duration-300 hover:shadow-xl active:scale-[0.97] text-sm font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span class="flex items-center gap-2 text-sm font-semibold text-white transition-transform duration-300 transform translate-y-0 group-hover/btn:-translate-y-full">
                    Proceed to order
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>

                  <span class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black bg-[#F2CB00] transition-transform duration-300 transform translate-y-full group-hover/btn:translate-y-0 text-sm font-semibold">
                    Proceed to order
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

// Import Hero Images
const cropHeroImg = "/images/Marketplace-banner .webp";
import fisheryHeroImg from "../assets/img/catfish1.webp";
import livestockHeroImg from "../assets/img/livestock-banner.webp";

// Import Decorative Background Pattern
import farmGatePattern from "../assets/img/FARMGATE PATTERN _GREEN.webp";

// Import Product Images
import okraImg from "../assets/img/close-up-fresh-green-okra.webp";
import okra1Img from "../assets/img/ladyfinger-okra.webp";
import onionImg from "../assets/img/onion.webp";
import tomatoImg from "../assets/img/tomato.webp";
import habaneroImg from "../assets/img/habanero-pepper-new.webp";
import chiliImg from "../assets/img/chili-pepper.webp";
import gardenEggsImg from "../assets/img/garden-eggs Background Removed.webp";
import pineappleImg from "../assets/img/pineapple.webp";
import cassavaImg from "../assets/img/cassava.webp";
import tilapiaImg from "../assets/img/tilapia.webp";
import catfishImg from "../assets/img/catfish.webp";
import smokableCatfishImg from "../assets/img/smokable catfish.webp";
import pigImg from "../assets/img/pig.webp";

// 1. Search & Filter State
const searchQuery = ref("");
const selectedCategory = ref("");

onMounted(() => {
  // Preload hero background images into browser cache so transitions never flash or wait for decoding
  [cropHeroImg, fisheryHeroImg, livestockHeroImg].forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

const dynamicHeroSubtitle = computed(() => {
  const cat = selectedCategory.value ? selectedCategory.value.toLowerCase() : "";
  if (cat === "livestock") {
    return "Premium livestock raised with modern husbandry practices, bio-secure housing, and veterinary care.";
  } else if (cat === "fishery") {
    return "Fresh and processed fishery products from cage and pond systems with certified quality standards.";
  }
  return "Discover our range of high-quality crops grown with precision farming and sustainable practices.";
});

const currentHeroImage = computed(() => {
  const cat = selectedCategory.value ? selectedCategory.value.toLowerCase() : "";
  if (cat === "livestock") {
    return livestockHeroImg;
  } else if (cat === "fishery") {
    return fisheryHeroImg;
  }
  return cropHeroImg; // default for Crops or when no category ("Sort by Category") is selected
});

const dynamicStyles = computed(() => ({
  "--primary-color": "#129C48",
  "--primary-light-color": "#dcfce7",
}));

const orderModal = ref({
  visible: false,
  product: null,
  orderNumber: "",
  quantity: 1,
  customerName: "",
  phoneNumber: "",
  paymentMode: "",
  pickupPoint: "",
  acceptedTerms: false,
});

const showTerms = ref(false);

const openOrderModal = (product) => {
  showTerms.value = false;
  orderModal.value = {
    visible: true,
    product,
    orderNumber: "POT-" + Math.floor(100000 + Math.random() * 900000),
    quantity: 1,
    customerName: "",
    phoneNumber: "",
    paymentMode: "",
    pickupPoint: "",
    acceptedTerms: false,
  };
};

const closeOrderModal = () => {
  orderModal.value.visible = false;
};

const proceedToOrder = () => {
  const { product, customerName, phoneNumber, paymentMode, pickupPoint } = orderModal.value;
  const message = `New Order%0A%0AProduct: ${product.name}%0AWeight: ${product.weight.replace('/', ' / ')}%0AStock Available: ${product.stock}%0A%0ACustomer Name: ${encodeURIComponent(customerName || 'N/A')}%0APhone Number: ${encodeURIComponent(phoneNumber || 'N/A')}%0AMode of Payment: ${encodeURIComponent(paymentMode)}%0APick Up Point: ${encodeURIComponent(pickupPoint || 'N/A')}`;
  window.open(`https://wa.me/233503301132?text=${message}`, '_blank');
  closeOrderModal();
};

// 2. Products Data Array
const products = ref([
  // Crop
  {
    id: "local-okra",
    name: "Local Okra",
    weight: "20kg/crate",
    stock: 150,
    botanicalName: "Abelmoschus esculentus",
    category: "crop",
    image: okraImg,
    description: "High-yielding local okra cultivation tailored for rapid domestic consumption and processing markets across West Africa.",
  },
  {
    id: "ladyfinger-okra",
    name: "Lady's Finger Okra",
    weight: "20kg/crate",
    stock: 120,
    botanicalName: "Abelmoschus esculentus var.",
    category: "crop",
    image: okra1Img,
    description: "Premium tender Lady's Finger Okra okra variety selected for high nutritional density, uniform pod growth, and strong export demand.",
  },
  {
    id: "onion",
    name: "Red Onion",
    weight: "20kg/crate",
    stock: 200,
    botanicalName: "Allium cepa",
    category: "crop",
    image: onionImg,
    description: "Large-scale red and white bulb onion cultivation utilizing modern drip irrigation and proper post-harvest curing storage.",
  },
  {
    id: "tomato",
    name: "Tomato",
    weight: "20kg/crate",
    stock: 180,
    botanicalName: "Solanum lycopersicum",
    category: "crop",
    image: tomatoImg,
    description: "Greenhouse and open-field commercial tomato farming with guaranteed off-take from regional paste processing facilities.",
  },
  {
    id: "habanero-pepper",
    name: "Habanero Pepper",
    weight: "20kg/crate",
    stock: 90,
    botanicalName: "Capsicum chinense",
    category: "crop",
    image: habaneroImg,
    imageClass: "transform scale-150",
    description: "Vibrant, high-pungency habanero pepper cycles cultivated for premium spice extraction and international export grade markets.",
  },
  {
    id: "chili-pepper",
    name: "Chili Pepper",
    weight: "20kg/crate",
    stock: 140,
    botanicalName: "Capsicum annuum",
    category: "crop",
    image: chiliImg,
    description: "Drought-resistant chili pepper varieties grown under precision monitoring for both dried spice and fresh culinary distributors.",
  },
  {
    id: "garden-eggs",
    name: "Garden Eggs",
    weight: "20kg/crate",
    stock: 110,
    botanicalName: "Solanum aethiopicum",
    category: "crop",
    image: gardenEggsImg,
    description: "Staple African eggplant variety producing high per-hectare yields, supplying fresh produce markets throughout the region.",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    weight: "20kg/crate",
    stock: 75,
    botanicalName: "Ananas comosus",
    category: "crop",
    image: pineappleImg,
    description: "Sweet MD2 and Sugarloaf pineapple plantations optimized for fresh fruit export and local juice processing plants.",
  },
  {
    id: "cassava",
    name: "Cassava",
    weight: "50kg/bag",
    stock: 100,
    botanicalName: "Manihot esculenta",
    category: "crop",
    image: cassavaImg,
    description: "Industrial-grade high-starch cassava farming supplying starch processing factories, flour mills, and regional food security off-takers.",
  },

  // Fishery
  {
    id: "fresh-tilapia",
    name: "Fresh Tilapia",
    weight: "20kg/crate",
    stock: 60,
    botanicalName: "Oreochromis niloticus",
    category: "fishery",
    image: tilapiaImg,
    description: "Deep-water cage and high-density pond tilapia farming with automated feeding protocols and bio-secured water management.",
  },
  {
    id: "fresh-catfish",
    name: "Fresh Catfish",
    weight: "20kg/crate",
    stock: 45,
    botanicalName: "Clarias gariepinus",
    category: "fishery",
    image: catfishImg,
    description: "Fast-growing African sharptooth catfish raised in controlled recirculation systems, delivering dependable bi-annual harvest weights.",
  },
  {
    id: "oven-dried-catfish",
    name: "Oven-Dried Catfish",
    weight: "20kg/crate",
    stock: 55,
    botanicalName: "Clarias gariepinus (Processed)",
    category: "fishery",
    image: smokableCatfishImg,
    description: "Integrated farming and hygienic kiln-smoking production line adding shelf stability and high profit margins for domestic retail.",
  },

  // Livestock
  {
    id: "pig",
    name: "Pig",
    weight: "100kg/live weight",
    stock: 8,
    botanicalName: "Sus scrofa domesticus",
    category: "livestock",
    image: pigImg,
    description: "Commercial swine husbandry using superior genetics, bio-secure housing, and veterinary surveillance to supply meat processors.",
  },
]);

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    // Search query filter
    const query = searchQuery.value.trim().toLowerCase();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.botanicalName.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query);

    // Category dropdown filter
    let matchesCategory = true;
    if (selectedCategory.value) {
      const cat = selectedCategory.value.toLowerCase();
      if (cat === "crops" || cat === "crop") {
        matchesCategory = p.category === "crop";
      } else if (cat === "livestock") {
        matchesCategory = p.category === "livestock";
      } else if (cat === "fishery") {
        matchesCategory = p.category === "fishery";
      } else {
        matchesCategory = p.category.toLowerCase() === cat;
      }
    }

    return matchesSearch && matchesCategory;
  });
});


</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: all 0.3s ease-out;
}
.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(10px);
}

.fade-bg-enter-active {
  transition: opacity 0.8s ease-out;
  z-index: 10;
}
.fade-bg-leave-active {
  transition: opacity 0.8s ease-in;
  z-index: 1;
}
.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.card-stagger-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.card-stagger-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

@keyframes pulseAnimateSolid {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1.05, 1.35);
    opacity: 0;
  }
}

.animate-solid-pulse {
  animation: pulseAnimateSolid 1.2s ease-out infinite;
}
</style>
