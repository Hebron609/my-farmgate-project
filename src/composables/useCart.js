import { ref, onMounted, watch } from "vue";

export function useCart() {
  const cart = ref([]);
  const isCartOpen = ref(false);

  // Cart functions
  const addToCart = (productData) => {
    const existingItem = cart.value.find(
      (item) =>
        item.id === productData.id &&
        item.selectedWeight === (productData.selectedWeight || "Kg") &&
        item.selectedFarm === (productData.selectedFarm || ""),
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

    // Show toast notification (this will be handled by the component using this composable)
    return `Added ${productData.name} to cart!`;
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
    { deep: true },
  );

  return {
    cart,
    isCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    openCart,
    closeCart,
  };
}
