<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Navigation -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <button
            @click="goBackToCart"
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
            <span class="text-lg font-bold">Back to Cart</span>
          </button>
          <h1 class="text-lg font-semibold text-gray-900">Checkout</h1>
        </div>

        <!-- Progress Bar -->
        <div class="mt-6 flex items-center justify-center">
          <div class="flex items-center">
            <div class="flex items-center">
              <div
                class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="ml-2 text-sm font-medium text-gray-900">Cart</span>
            </div>
            <div class="mx-4 w-8 h-0.5 bg-gray-300"></div>
            <div class="flex items-center">
              <div
                class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="ml-2 text-sm font-medium text-green-600"
                >Checkout</span
              >
            </div>
            <div class="mx-4 w-8 h-0.5 bg-gray-300"></div>
            <div class="flex items-center">
              <div
                class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>
              <span class="ml-2 text-sm font-medium text-gray-500"
                >Delivering</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-6 rounded-lg shadow-sm"
      >
        <!-- Left Column -->
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white p-6 rounded-lg">
            <h2 class="text-lg font-semibold text-gray-900 mb-6">
              Payment Method
            </h2>

            <div class="space-y-6">
              <div class="grid grid-cols-3 gap-4">
                <button
                  v-for="method in mobileMoney"
                  :key="method.id"
                  @click="selectedPayment = method.id"
                  :class="[
                    'h-16 border rounded-lg flex items-center justify-center transition-all duration-200 gap-2',
                    selectedPayment === method.id
                      ? 'border-green-600 bg-green-50 ring-1 ring-green-600'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
                  ]"
                >
                  <img
                    :src="method.image"
                    :alt="method.name"
                    class="h-8 w-auto object-contain"
                  />
                  <span
                    :style="{
                      color:
                        method.name === 'MTN Mobile Money'
                          ? '#003857'
                          : method.name === 'Telecel cash'
                          ? '#E42628'
                          : method.name === 'Airtel tigo'
                          ? '#1E3F77'
                          : '#374151',
                    }"
                    class="text-xs font-semibold"
                  >
                    {{ method.name }}
                  </span>
                </button>
              </div>

              <div class="relative py-2">
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div class="w-full border-t border-gray-200"></div>
                </div>
                <div class="relative flex justify-center">
                  <span
                    class="bg-white px-4 text-sm text-gray-400 font-medium tracking-wider"
                    >OR</span
                  >
                </div>
              </div>

              <!--Card-section-->

              <div class="grid grid-cols-3 gap-4">
                <button
                  v-for="method in cardMethods"
                  :key="method.id"
                  @click="selectedPayment = method.id"
                  :class="[
                    'h-16 border rounded-lg flex items-center justify-center transition-all duration-200',
                    selectedPayment === method.id
                      ? method.id === 'amex'
                        ? 'border-green-600 bg-[#006FCF] ring-1 ring-green-600'
                        : 'border-green-600 bg-green-50 ring-1 ring-green-600'
                      : method.id === 'amex'
                        ? 'border-gray-200 hover:border-gray-300 hover:opacity-80'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
                    method.id === 'amex' && selectedPayment !== method.id ? 'bg-[#006FCF]' : '',
                  ]"
                >
                  <img
                    v-if="method.image"
                    :src="method.image"
                    :alt="method.name"
                    class="h-5 w-auto object-contain"
                  />
                  <span v-else class="text-sm font-bold text-gray-700">{{
                    method.name
                  }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Delivery Methods -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">
              Delivery Method
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <button
                @click="deliveryMethod = 'delivery'"
                :class="[
                  'p-4 border rounded-lg text-left transition-colors',
                  deliveryMethod === 'delivery'
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300',
                ]"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Delivery</div>
                    <div class="text-sm text-gray-500">GHS 35.00</div>
                  </div>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.89922 2.49922V1.59922C7.89922 1.10216 7.49627 0.699219 6.99922 0.699219H1.59922C1.10216 0.699219 0.699219 1.10216 0.699219 1.59922V9.69922C0.699219 10.1963 1.10216 10.5992 1.59922 10.5992H2.75636M7.89922 2.49922H11.1264C11.3651 2.49922 11.594 2.59404 11.7628 2.76282L15.0992 6.09922M7.89922 2.49922V6.09922M15.0992 6.09922V9.69922C15.0992 10.1963 14.6963 10.5992 14.1992 10.5992H13.0421M15.0992 6.09922H7.89922M7.89922 10.5992V6.09922M7.89922 10.5992H5.84208M7.89922 10.5992H9.95636M5.84208 10.5992C5.84208 11.4513 5.15131 12.1421 4.29922 12.1421C3.44712 12.1421 2.75636 11.4513 2.75636 10.5992M5.84208 10.5992C5.84208 9.74712 5.15131 9.05636 4.29922 9.05636C3.44712 9.05636 2.75636 9.74712 2.75636 10.5992M13.0421 10.5992C13.0421 11.4513 12.3513 12.1421 11.4992 12.1421C10.6471 12.1421 9.95636 11.4513 9.95636 10.5992M13.0421 10.5992C13.0421 9.74712 12.3513 9.05636 11.4992 9.05636C10.6471 9.05636 9.95636 9.74712 9.95636 10.5992"
                      stroke="#4CAF50"
                      stroke-width="1.4"
                    />
                  </svg>
                </div>
              </button>
              <button
                @click="deliveryMethod = 'pickup'"
                :class="[
                  'p-4 border rounded-lg text-left transition-colors',
                  deliveryMethod === 'pickup'
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300',
                ]"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <div class="font-medium text-gray-900">Pick up</div>
                    <div class="text-sm text-gray-500">Free</div>
                  </div>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.807701 4.29922L3.32642 0.940933C3.44054 0.78877 3.61964 0.699219 3.80984 0.699219H12.2056C12.3958 0.699219 12.5749 0.78877 12.689 0.940933L15.2077 4.29922M0.807701 4.29922H15.2077M0.807701 4.29922C0.807701 4.29922 0.0362723 7.89922 2.6077 7.88474M15.2077 4.29922C15.2077 4.29922 15.9791 7.89922 13.4077 7.88474M2.6077 7.88474C5.17913 7.89922 5.43627 4.29922 5.43627 4.29922C5.43627 4.29922 5.43627 7.89922 8.0077 7.89922C10.5791 7.89922 10.5791 4.29922 10.5791 4.29922C10.5791 4.29922 10.8363 7.89922 13.4077 7.88474M2.6077 7.88474V14.4949C2.6077 14.8287 2.87825 15.0992 3.21199 15.0992H6.2077M13.4077 7.88474V14.4949C13.4077 14.8287 13.1372 15.0992 12.8034 15.0992H9.67913M6.2077 15.0992V11.2035C6.2077 10.8698 6.47825 10.5992 6.81199 10.5992H9.07484C9.40858 10.5992 9.67913 10.8698 9.67913 11.2035V15.0992M6.2077 15.0992H9.67913"
                      stroke="#707070"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <!-- Delivery Address -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">
              Delivery Address
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Country</label
                >
                <select
                  v-model="address.country"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  <option value="Ghana">Ghana</option>
                </select>
              </div>
              <div></div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >First Name</label
                >
                <input
                  v-model="address.firstName"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Last Name</label
                >
                <input
                  v-model="address.lastName"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Address</label
                >
                <input
                  v-model="address.address"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Apartment</label
                >
                <input
                  v-model="address.apartment"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >City</label
                >
                <input
                  v-model="address.city"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Province</label
                >
                <input
                  v-model="address.province"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Postal Code</label
                >
                <input
                  v-model="address.postalCode"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white p-6 rounded-lg sticky top-4 shadow-sm">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>

            <!-- Product List -->
            <div class="space-y-4 mb-6">
              <div
                v-for="item in cart"
                :key="item.id"
                class="flex items-center space-x-3"
              >
                <div class="relative">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-12 h-12 object-cover rounded-md"
                  />
                  <span
                    class="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >{{ item.quantity }}</span
                  >
                </div>
                <div class="flex-1">
                  <h3 class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    GHS{{ item.price.toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Discount -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Discount Code</label
              >
              <div class="flex space-x-2">
                <input
                  v-model="discountCode"
                  type="text"
                  placeholder="Enter code"
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <button
                  class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Apply
                </button>
              </div>
            </div>

            <!-- Calculations -->
            <div class="border-t pt-4 space-y-2">
              <div class="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>GHS{{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span>Delivery</span>
                <span>GHS{{ deliveryFee.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span>Tax</span>
                <span>GHS{{ tax.toFixed(2) }}</span>
              </div>
              <div
                class="flex justify-between text-lg font-semibold pt-2 border-t"
              >
                <span>Total</span>
                <span>GHS{{ total.toFixed(2) }}</span>
              </div>
            </div>

            <!-- Pay Button -->
            <button
              class="w-full mt-6 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Pay GHS{{ total.toFixed(2) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cart = inject("cart");
const openCart = inject("openCart");

// Functions
const goBackToCart = () => {
  router.push({ name: "Marketplace" });
  openCart();
};

// Reactive data
const selectedPayment = ref("");
const deliveryMethod = ref("delivery");
const discountCode = ref("");
const address = ref({
  country: "Ghana",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  province: "",
  postalCode: "",
});

// Payment methods
const mobileMoney = [
  { id: "mtn", name: "MTN Mobile Money", image: "/images/Mtn-momo.png" },
  { id: "telecel", name: "Telecel cash", image: "/images/Telecel-cash.png" },
  { id: "airteltigo", name: "Airtel tigo", image: "/images/Airtel-cash.png" },
];

const cardMethods = [
  { id: "visa", name: "Visa", image: "/images/Visa.png" },
  { id: "amex", name: "Amex", image: "/images/Amex-Vector.png" },
  { id: "mastercard", name: "Mastercard", image: "/images/Mastercard.png" },
];

// Computed properties
const subtotal = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

const deliveryFee = computed(() => {
  return deliveryMethod.value === "delivery" ? 35.0 : 0.0;
});

const tax = computed(() => {
  return 1.0; // Fixed tax for demo
});

const total = computed(() => {
  return subtotal.value + deliveryFee.value + tax.value;
});
</script>
