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
import { ref, provide, onMounted, watch } from "vue";
import CartDrawer from "./components/CartDrawer.vue";
import ToastNotification from "./components/ToastNotification.vue";

// Cart state
const cart = ref([]);
const isCartOpen = ref(false);

// Toast state
const showToast = ref(false);
const toastMessage = ref("");

// Cart functions
const addToCart = (productData) => {
  const existingItem = cart.value.find(
    (item) =>
      item.id === productData.id &&
      item.selectedWeight === (productData.selectedWeight || "Kg") &&
      item.selectedFarm === (productData.selectedFarm || "")
  );
  if (existingItem) {
    existingItem.quantity += productData.quantity;
  } else {
    cart.value.push({
      ...productData,
      selectedWeight: productData.selectedWeight || "Kg",
      selectedFarm: productData.selectedFarm || "",
    });
  }

  // Show toast notification
  toastMessage.value = `Added ${productData.name} to cart!`;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

const updateQuantity = ({ index, quantity }) => {
  cart.value[index].quantity = quantity;
  if (cart.value[index].quantity <= 0) {
    cart.value.splice(index, 1);
  }
};

const removeFromCart = (index) => {
  cart.value.splice(index, 1);
};

const openCart = () => {
  isCartOpen.value = true;
};

const closeCart = () => {
  isCartOpen.value = false;
};

// Load cart from localStorage
onMounted(() => {
  const savedCart = localStorage.getItem("marketplace-cart");
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
});

// Save cart to localStorage
watch(
  cart,
  (newCart) => {
    localStorage.setItem("marketplace-cart", JSON.stringify(newCart));
  },
  { deep: true }
);

// Provide cart functions globally
provide("cart", cart);
provide("addToCart", addToCart);
provide("openCart", openCart);
</script>
