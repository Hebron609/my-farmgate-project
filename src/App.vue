<template>
  <router-view />
  <CartDrawer
    :is-open="isCartOpen"
    :cart="cart"
    @close="closeCart"
    @update-quantity="updateQuantity"
    @remove-item="removeFromCart"
  />
  <ToastNotification :show="showToast" :message="toastMessage" />
</template>

<script setup>
import { ref, provide } from "vue";
import CartDrawer from "./components/CartDrawer.vue";
import ToastNotification from "./components/ToastNotification.vue";
import { useCart } from "./composables/useCart";

// Cart state and functions from composable
const {
  cart,
  isCartOpen,
  addToCart,
  updateQuantity,
  removeFromCart,
  openCart,
  closeCart,
} = useCart();

// Toast state
const showToast = ref(false);
const toastMessage = ref("");

// Enhanced addToCart with toast
const addToCartWithToast = (productData) => {
  const message = addToCart(productData);
  toastMessage.value = message;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

// Provide cart functions globally
provide("cart", cart);
provide("addToCart", addToCartWithToast);
provide("openCart", openCart);
</script>
