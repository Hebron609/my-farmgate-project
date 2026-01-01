<template>
  <Transition name="cart-slide">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex" @click.self="closeCart">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <!-- Cart Sidebar -->
      <div class="relative ml-auto w-full max-w-md bg-white shadow-xl">
        <!-- Header -->
        <div
          class="flex items-center justify-between p-6 border-b border-gray-200"
        >
          <h2 class="text-lg font-semibold text-gray-900">Shopping Cart</h2>
          <button
            @click="closeCart"
            class="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-6 max-h-[calc(100vh-200px)]">
          <div v-if="cart.length === 0" class="text-center py-8">
            <p class="text-gray-500">Your cart is empty</p>
          </div>
          <div v-else class="space-y-4">
            <div
              v-for="(item, index) in cart"
              :key="index"
              class="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-16 h-16 object-cover rounded-md"
              />
              <div class="flex-1">
                <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
                <p class="text-sm text-gray-500">
                  {{ item.selectedWeight }} - {{ item.selectedFarm }}
                </p>
                <p class="text-green-600 font-semibold">
                  GHS{{ item.price.toFixed(2) }}
                </p>
              </div>
              <div class="flex items-center space-x-2">
                <button
                  @click="updateQuantity(index, item.quantity - 1)"
                  class="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span class="font-semibold w-8 text-center">{{
                  item.quantity
                }}</span>
                <button
                  @click="updateQuantity(index, item.quantity + 1)"
                  class="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                @click="removeFromCart(index)"
                class="p-2 text-red-500 hover:text-red-700"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cart.length > 0" class="border-t border-gray-200 p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-semibold">Subtotal:</span>
            <span class="text-lg font-bold text-green-600"
              >GHS{{ totalPrice.toFixed(2) }}</span
            >
          </div>
          <button
            @click="goToCheckout"
            class="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["close", "update-quantity", "remove-item"]);

const closeCart = () => {
  emit("close");
};

const goToCheckout = () => {
  closeCart();
  router.push({ name: "Checkout" });
};

const updateQuantity = (index, quantity) => {
  if (quantity <= 0) {
    emit("remove-item", index);
  } else {
    emit("update-quantity", { index, quantity });
  }
};

const removeFromCart = (id) => {
  emit("remove-item", id);
};

const totalPrice = computed(() => {
  return props.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});
</script>

<style scoped>
.cart-slide-enter-active,
.cart-slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.cart-slide-enter-from {
  transform: translateX(100%);
}

.cart-slide-leave-to {
  transform: translateX(100%);
}

.cart-slide-enter-active .backdrop,
.cart-slide-leave-active .backdrop {
  transition: opacity 0.3s ease-in-out;
}

.cart-slide-enter-from .backdrop {
  opacity: 0;
}

.cart-slide-leave-to .backdrop {
  opacity: 0;
}
</style>
