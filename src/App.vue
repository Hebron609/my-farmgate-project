<template>
  <router-view v-slot="{ Component, route }">
    <Transition name="route-fade" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </Transition>
  </router-view>
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
import { onMounted, onUnmounted, ref, provide } from "vue";
import { useRouter } from "vue-router";
import CartDrawer from "./components/CartDrawer.vue";
import ToastNotification from "./components/ToastNotification.vue";
import { useCart } from "./composables/useCart";

const router = useRouter();

const handleInternalNavigation = (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const link = event.target.closest("a");
  if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

  const url = new URL(link.href, window.location.origin);
  if (url.origin !== window.location.origin) return;

  const resolved = router.resolve({
    path: url.pathname,
    query: Object.fromEntries(url.searchParams),
    hash: url.hash,
  });
  if (!resolved.matched.length) return;

  event.preventDefault();
  router.push(resolved.fullPath);
};

onMounted(() => document.addEventListener("click", handleInternalNavigation));
onUnmounted(() => document.removeEventListener("click", handleInternalNavigation));

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

<style>
.route-fade-enter-active,
.route-fade-leave-active {
  transition: opacity 0.16s ease;
}

.route-fade-enter-from,
.route-fade-leave-to {
  opacity: 0;
}
</style>
