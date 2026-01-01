<template>
  <div>
    <div v-if="product" class="min-h-screen bg-gray-50 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          @click="goBackToMarketplace"
          type="button"
          class="group flex items-center text-gray-900 font-medium hover:text-green-600 transition-colors cursor-pointer rounded-lg relative z-10"
        >
          <div
            class="bg-white border border-gray-200 p-2 rounded-full mr-3 group-hover:border-green-500 shadow-sm"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </div>
          <span class="text-lg font-bold">Marketplace</span>
        </button>
      </div>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-white rounded-3xl p-6 md:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          <div class="space-y-4">
            <div
              class="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group"
            >
              <img
                :src="activeImage"
                :alt="product.name"
                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div class="grid grid-cols-4 gap-4">
              <button
                v-for="(img, index) in product.images || [product.image]"
                :key="index"
                @click="activeImage = img"
                class="aspect-square rounded-xl overflow-hidden border-2 transition-all"
                :class="
                  activeImage === img
                    ? 'border-green-500 ring-1 ring-green-500'
                    : 'border-transparent hover:border-gray-300'
                "
              >
                <img :src="img" class="w-full h-full object-contain" />
                <div
                  v-if="
                    index === 2 &&
                    (product.images || [product.image]).length > 3
                  "
                  class="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <div class="bg-white/90 rounded-full p-1.5 shadow-sm">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="text-gray-900"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div class="flex flex-col">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              {{ product.name }}
            </h1>
            <div class="text-2xl font-bold text-gray-900 mb-4">
              GHS{{ formattedPrice }}
            </div>

            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400 gap-0.5">
                <svg
                  v-for="i in 5"
                  :key="i"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>
              </div>
              <span class="ml-2 text-sm font-medium text-gray-500"
                >{{ product.reviews || 34 }} reviews</span
              >
            </div>

            <p class="text-gray-600 leading-relaxed mb-8">
              {{
                product.description ||
                "Fiber-rich, and protein-packed. Perfect for porridge, smoothies, or baking. Quick to cook, creamy, and keeps you energized all day."
              }}
            </p>

            <div class="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2"
                  >Weight</label
                >
                <div class="relative">
                  <div
                    @click="toggleWeightDropdown"
                    class="w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer flex items-center justify-between bg-white/80 backdrop-blur-sm"
                  >
                    {{ selectedWeight }}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      :class="weightDropdownOpen ? 'rotate-180' : ''"
                      class="transition-transform"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    v-if="weightDropdownOpen"
                    class="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl mt-1 z-10"
                  >
                    <div
                      @click="selectWeight('Kg')"
                      class="px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 cursor-pointer text-gray-700"
                    >
                      Kg
                    </div>
                    <div
                      @click="selectWeight('Bags')"
                      class="px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 cursor-pointer text-gray-700"
                    >
                      Bags
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2"
                  >Quantity</label
                >
                <div class="relative">
                  <div
                    @click="toggleQuantityDropdown"
                    class="w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer flex items-center justify-between bg-white/80 backdrop-blur-sm"
                  >
                    {{ selectedQuantity }}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      :class="quantityDropdownOpen ? 'rotate-180' : ''"
                      class="transition-transform"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    v-if="quantityDropdownOpen"
                    class="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl mt-1 z-10"
                  >
                    <div
                      v-for="num in [1, 2, 3, 4, 5]"
                      :key="num"
                      @click="selectQuantity(num)"
                      class="px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 cursor-pointer text-gray-700"
                    >
                      {{ num }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-8">
              <label class="block text-sm font-bold text-gray-700 mb-2"
                >Farm <span class="text-red-500">*</span></label
              >
              <div class="relative">
                <div
                  @click="toggleFarmDropdown"
                  class="w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer flex items-center justify-between bg-white/80 backdrop-blur-sm"
                >
                  {{ selectedFarm || "Please select farm" }}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    :class="farmDropdownOpen ? 'rotate-180' : ''"
                    class="transition-transform"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div
                  v-if="farmDropdownOpen"
                  class="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl mt-1 z-10"
                >
                  <div
                    v-for="farm in product.farms || [
                      'Obo Kwahu Organic',
                      'Tamale North Farms',
                    ]"
                    :key="farm"
                    @click="selectFarm(farm)"
                    class="px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 cursor-pointer text-gray-700"
                  >
                    {{ farm }}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4 mb-8">
              <button
                @click="addToBag"
                class="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl border border-gray-300 text-green-600 hover:bg-green-50 hover:border-green-500 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                  />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </button>

              <button
                @click="handleCheckout"
                class="flex-1 bg-green-600 text-white text-lg font-bold py-3.5 px-6 rounded-xl hover:bg-green-700 transition-transform active:scale-[0.99] shadow-lg shadow-green-200"
              >
                Checkout
              </button>
            </div>

            <div
              class="flex items-center gap-2 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="text-green-500"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span
                >Estimated delivery time:
                <span class="font-medium text-gray-900"
                  >Aug 20 - Aug 22</span
                ></span
              >
            </div>

            <div>
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-green-700 font-bold text-lg">Traceability</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="text-green-700 cursor-pointer"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>

              <ul class="space-y-3">
                <li
                  v-for="item in product.traceability || [
                    '100% natural and locally sourced',
                    'Grown in the Northern Region of Ghana',
                    'Non-GMO and organically cultivated',
                    'Available in two varieties: Rolled Oats & Steel-Cut Oats',
                  ]"
                  :key="item"
                  class="flex items-start text-gray-600 text-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="text-green-500 mr-3 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div
      v-else
      class="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div class="text-center">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
        <router-link
          :to="{ name: 'Marketplace' }"
          class="text-green-600 hover:underline"
        >
          Back to Marketplace
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import { products } from "../data/products.js";

const route = useRoute();
const router = useRouter();
const addToCart = inject("addToCart");

// --- State ---
const selectedWeight = ref("Kg");
const selectedQuantity = ref(1);
const selectedFarm = ref("");
const activeImage = ref("");
const weightDropdownOpen = ref(false);
const quantityDropdownOpen = ref(false);
const farmDropdownOpen = ref(false);

// --- Computed Product ---
const product = computed(() => {
  const id = parseInt(route.params.id);
  return products.find((p) => p.id === id) || null;
});

// --- Formatting Helpers ---
const formattedPrice = computed(() => {
  if (!product.value) return "0.00";
  return Number(product.value.price * selectedQuantity.value).toFixed(2);
});

// --- Watchers ---
watch(
  product,
  (newVal) => {
    if (newVal) {
      activeImage.value =
        newVal.images && newVal.images.length ? newVal.images[0] : newVal.image;
      if (newVal.farms && newVal.farms.length)
        selectedFarm.value = newVal.farms[0];
    }
  },
  { immediate: true }
);

// --- Actions ---
const goBackToMarketplace = () => {
  router.push({ name: "Marketplace" });
};

const toggleWeightDropdown = () => {
  weightDropdownOpen.value = !weightDropdownOpen.value;
};

const selectWeight = (value) => {
  selectedWeight.value = value;
  weightDropdownOpen.value = false;
};

const toggleQuantityDropdown = () => {
  quantityDropdownOpen.value = !quantityDropdownOpen.value;
};

const selectQuantity = (value) => {
  selectedQuantity.value = value;
  quantityDropdownOpen.value = false;
};

const toggleFarmDropdown = () => {
  farmDropdownOpen.value = !farmDropdownOpen.value;
};

const selectFarm = (value) => {
  selectedFarm.value = value;
  farmDropdownOpen.value = false;
};

const handleCheckout = () => {
  if (!selectedFarm.value) {
    alert("Please select a farm before checkout.");
    return;
  }
  addToBag();
  // Navigate to checkout page
  router.push({ name: "Checkout" });
};

const addToBag = () => {
  if (!product.value) return;

  const cartItem = {
    ...product.value,
    quantity: selectedQuantity.value,
    selectedWeight: selectedWeight.value,
    selectedFarm: selectedFarm.value,
  };

  addToCart(cartItem);

  
};
</script>
