<template>
  <div class="bg-gray-50">
    <div
      class="max-w-[1440px] mx-auto space-y-8 flex justify-between items-center px-4 sm:px-6 lg:px-8 pt-10 font-montserrat lg:flex-row lg:space-x-6 lg:space-y-0 flex-col gap-4 md:gap-6 lg:gap-75"
    >
      <!-- Left Section: Description -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
          All Products
        </h2>
        <p class="text-gray-500 mt-1">
          Explore range of fresh and organic produce, where quality meets
          affordability.
        </p>
      </div>

      <!-- Right Section: Filters -->
      <div>
        <div class="flex flex-wrap gap-4">
          <!-- Search Products -->
          <div class="relative">
            <input
              id="search"
              v-model="searchQuery"
              type="text"
              placeholder="Search Products"
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent pr-10 bg-white/80 backdrop-blur-sm"
            />
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          <!-- Select Category -->
          <div class="relative">
            <button
              @click="isCategoryOpen = !isCategoryOpen"
              class="relative px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent pr-8 bg-white/80 backdrop-blur-sm w-full text-left"
            >
              <span>{{
                selectedCategory === "All"
                  ? "Select Category"
                  : selectedCategory
              }}</span>
              <svg
                class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              v-if="isCategoryOpen"
              class="absolute mt-1 w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg z-10"
            >
              <div
                @click="
                  selectedCategory = 'All';
                  isCategoryOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                All
              </div>
              <div
                v-for="category in categories"
                :key="category"
                @click="
                  selectedCategory = category;
                  isCategoryOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {{ category }}
              </div>
            </div>
          </div>

          <!-- Select Price -->
          <div class="relative">
            <button
              @click="isPriceOpen = !isPriceOpen"
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent pr-10 bg-white/80 backdrop-blur-sm flex items-center justify-between w-full"
            >
              <span>{{
                selectedPrice
                  ? selectedPrice
                      .replace("-", " - ")
                      .replace("under", "Under")
                      .replace("over", "Over")
                      .replace("50", "GHS 50")
                      .replace("100", "100")
                  : "Select Price"
              }}</span>
              <svg
                class="w-4 h-4 text-gray-400 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              v-if="isPriceOpen"
              class="absolute mt-1 w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg z-10"
            >
              <div
                @click="
                  selectedPrice = '';
                  isPriceOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Select Price
              </div>
              <div
                @click="
                  selectedPrice = 'under-50';
                  isPriceOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Under GHS 50
              </div>
              <div
                @click="
                  selectedPrice = '50-100';
                  isPriceOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                GHS 50 - 100
              </div>
              <div
                @click="
                  selectedPrice = 'over-100';
                  isPriceOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Over GHS 100
              </div>
            </div>
          </div>

          <!-- Sort by: Latest -->
          <div class="relative">
            <button
              @click="isSortOpen = !isSortOpen"
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent pr-10 bg-white/80 backdrop-blur-sm flex items-center justify-between w-full"
            >
              <span>{{
                sortBy === "latest"
                  ? "Sort by: Latest"
                  : sortBy === "price-low"
                  ? "Price: Low to High"
                  : sortBy === "price-high"
                  ? "Price: High to Low"
                  : "Rating"
              }}</span>
              <svg
                class="w-4 h-4 text-gray-400 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              v-if="isSortOpen"
              class="absolute mt-1 w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg z-10"
            >
              <div
                @click="
                  sortBy = 'latest';
                  isSortOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Sort by: Latest
              </div>
              <div
                @click="
                  sortBy = 'price-low';
                  isSortOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Price: Low to High
              </div>
              <div
                @click="
                  sortBy = 'price-high';
                  isSortOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Price: High to Low
              </div>
              <div
                @click="
                  sortBy = 'rating';
                  isSortOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Rating
              </div>
            </div>
          </div>

          <!-- Show: 10 -->
          <div class="relative">
            <button
              @click="isShowOpen = !isShowOpen"
              class="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent pr-10 bg-white/80 backdrop-blur-sm flex items-center justify-between w-full"
            >
              <span>Show: {{ itemsPerPage }}</span>
              <svg
                class="w-4 h-4 text-gray-400 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              v-if="isShowOpen"
              class="absolute mt-1 w-full bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg z-10"
            >
              <div
                @click="
                  itemsPerPage = 10;
                  isShowOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Show: 10
              </div>
              <div
                @click="
                  itemsPerPage = 20;
                  isShowOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Show: 20
              </div>
              <div
                @click="
                  itemsPerPage = 50;
                  isShowOpen = false;
                  applyFilters();
                "
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                Show: 50
              </div>
            </div>
          </div>

          <!-- Cart Icon -->
          <button
            @click="emit('open-cart')"
            class="relative p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
              />
            </svg>
            <span
              v-if="cart.length > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse"
            >
              {{ cart.length }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits, watch } from "vue";
import { categories } from "../data/products.js";

// Props
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  cart: {
    type: Array,
    default: () => [],
  },
});

// Emits
const emit = defineEmits(["filters-changed", "open-cart"]);

// Reactive state for filters
const searchQuery = ref("");
const selectedCategory = ref("All");
const selectedPrice = ref("");
const sortBy = ref("latest");
const itemsPerPage = ref(10);

// Dropdown states
const isCategoryOpen = ref(false);
const isPriceOpen = ref(false);
const isSortOpen = ref(false);
const isShowOpen = ref(false);

// Watch search query to apply filters dynamically
watch(searchQuery, () => {
  applyFilters();
});

// Function to get current filters
const getCurrentFilters = () => ({
  searchQuery: searchQuery.value,
  selectedCategory: selectedCategory.value,
  selectedPrice: selectedPrice.value,
  sortBy: sortBy.value,
  itemsPerPage: itemsPerPage.value,
});

// Computed to check if any filters are active
const hasActiveFilters = computed(() => {
  return (
    searchQuery.value || selectedCategory.value !== "All" || selectedPrice.value
  );
});

// Apply filters function
const applyFilters = () => {
  emit("filters-changed", {
    searchQuery: searchQuery.value,
    selectedCategory: selectedCategory.value,
    selectedPrice: selectedPrice.value,
    sortBy: sortBy.value,
    itemsPerPage: itemsPerPage.value,
  });
};

// Clear specific filter
const clearFilter = (filterType) => {
  switch (filterType) {
    case "search":
      searchQuery.value = "";
      break;
    case "category":
      selectedCategory.value = "All";
      break;
    case "price":
      selectedPrice.value = "";
      break;
  }
  applyFilters();
};

// Clear all filters
const clearAllFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "All";
  selectedPrice.value = "";
  applyFilters();
};
</script>
