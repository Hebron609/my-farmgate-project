<template>
  <div>
    <div class="relative overflow-hidden h-[480px] md:h-[580px] pt-32">
      <!--Header-component-->
      <Header :videoVariant="2" />

      <img
        src="/images/Marketplace-banner .png"
        class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.59] z-0"
        alt=""
      />

      <!-- Hero-section-content -->
      <div
        class="absolute z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center top-2 sm:px-6 lg:px-8"
      >
        <h1
          class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-sm px-4 sm:px-5 md:px-3 flex items-center gap-2"
        >
          <LeafIcon class="text-white" />
          <span>Marketplace</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          Connecting farmers and buyers.
        </p>

        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          Discover fresh produce and agricultural products in our digital
          marketplace.
        </p>
      </div>
    </div>

    <!-- Marketplace Header with Filters -->
    <MarketplaceHeader
      :products="products"
      :cart="cart"
      @filters-changed="updateFilters"
      @open-cart="openCart"
    />

    <!-- Marketplace Content Section -->
    <section class="bg-gray-50">
      <div class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
        <!-- Product Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
            @view-details="viewDetails"
          />
        </div>
      </div>
    </section>

    <!--Footer-component-->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, inject } from "vue";
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import ProductCard from "../components/ProductCard.vue";
import MarketplaceHeader from "../components/MarketplaceHeader.vue";
import { products } from "../data/products.js";

const router = useRouter();
const cart = inject("cart");
const addToCart = inject("addToCart");
const openCart = inject("openCart");
const filters = ref({
  searchQuery: "",
  selectedCategory: "All",
  selectedPrice: "",
  sortBy: "latest",
  itemsPerPage: 10,
});

const updateFilters = (newFilters) => {
  filters.value = { ...newFilters };
};

const viewDetails = (product) => {
  router.push({ name: "ProductDetail", params: { id: product.id } });
};

const filteredProducts = computed(() => {
  let filtered = products;

  // Search by name or description
  if (filters.value.searchQuery) {
    filtered = filtered.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(filters.value.searchQuery.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(filters.value.searchQuery.toLowerCase())
    );
  }

  // Filter by category
  if (filters.value.selectedCategory !== "All") {
    filtered = filtered.filter(
      (product) => product.category === filters.value.selectedCategory
    );
  }

  // Filter by price range
  if (filters.value.selectedPrice) {
    if (filters.value.selectedPrice === "under-50") {
      filtered = filtered.filter((product) => product.price < 50);
    } else if (filters.value.selectedPrice === "50-100") {
      filtered = filtered.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (filters.value.selectedPrice === "over-100") {
      filtered = filtered.filter((product) => product.price > 100);
    }
  }

  // Sort
  if (filters.value.sortBy === "price-low") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (filters.value.sortBy === "price-high") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (filters.value.sortBy === "rating") {
    filtered = filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // latest - assuming by id descending
    filtered = filtered.sort((a, b) => b.id - a.id);
  }

  // Pagination
  const start = 0;
  const end = filters.value.itemsPerPage;
  return filtered.slice(start, end);
});
</script>

<style></style>
