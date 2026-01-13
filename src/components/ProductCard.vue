<template>
  <div
    class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-transparent hover:border-green-100"
    @click="$emit('view-details', product)"
  >
    <div
      class="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3"
    >
      <div
        class="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold tracking-wide"
        :class="
          product.inStock
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-600'
        "
      >
        {{
          product.inStock
            ? `${product.stock} ${product.unit} in stock`
            : "Out Of Stock"
        }}
      </div>

      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
      />

      <button
        v-if="product.inStock"
        @click.stop="handleAddToCart"
        class="absolute bottom-3 right-3 w-9 h-9 bg-white border border-green-200 rounded-full flex items-center justify-center text-green-600 shadow-sm hover:bg-green-600 hover:text-white transition-colors duration-200 z-10"
        title="Add to Cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      </button>
    </div>

    <div class="space-y-1">
      <h3 class="font-bold text-gray-900 text-base line-clamp-1">
        {{ product.name }}
      </h3>

      <div class="flex items-baseline justify-between">
        <div class="flex items-baseline gap-1">
          <span class="text-md font-semibold text-gray-900">
            GHS{{ Number(product.price).toFixed(2) }}
          </span>
          <span class="text-xs text-gray-400 font-normal">
            / {{ product.unit }}
          </span>
        </div>

        <div class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-yellow-400 fill-current"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>

          <span class="text-xs font-bold text-gray-900">{{
            product.rating
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Define Props
const props = defineProps({
  product: {
    type: Object,
    required: true,
    // Expected structure:
    // {
    //   id: 1,
    //   name: "Local Oats",
    //   price: 48.00,
    //   image: "...",
    //   stock: 20,
    //   unit: "bags",
    //   inStock: true,
    //   rating: 4.9,
    //   reviews: 34
    // }
  },
});

// Define Emits
const emit = defineEmits(["view-details", "add-to-cart"]);

// Actions
const handleAddToCart = () => {
  emit("add-to-cart", {
    ...props.product,
    quantity: 1, // Default quantity
  });
};
</script>
