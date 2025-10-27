<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Hero Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.9] z-0"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source
        src="/src/assets/video/farmgate-original-video.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Scroll Indicator -->
    <div class="absolute mt-12 transform -translate-x-1/2 bottom-6 left-1/2">
      <ScrollDown />
    </div>

   <!-- Hero Content -->
<div
  :class="[
    'absolute left-1/2 -translate-x-1/2 w-full px-8 text-white z-10 pb-5 max-w-[1440px] mx-auto text-center transition-all duration-700 ease-in-out hero-content',
    showOptions ? 'top-[25%]' : 'top-1/2 -translate-y-1/2'
  ]"
>
  <h1
    class="font-montserrat font-semibold max-w-[1000px] text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
  >
    Impacting lives through sustainable agriculture...
  </h1>

  <!-- CTA Button -->
  <div v-if="!showOptions" class="flex justify-center">
    <p
      @click="toggleOptions"
      class="relative pb-2 mt-8 cursor-pointer group w-fit hover:text-yellow-400"
    >
      <span class="text-md">Start growing with us</span>
      <font-awesome-icon
        :icon="['far', 'arrow-right']"
        class="ml-10 transition-transform duration-300 text-md group-hover:translate-x-5"
      />
      <span
        class="absolute left-0 bottom-0 h-[1px] w-full bg-white origin-left transition-transform duration-450 group-hover:scale-x-0"
      ></span>
    </p>
  </div>

  <!-- Features Section -->
  <transition name="fade-up">
    <div
      v-if="showOptions"
      class="flex flex-wrap items-center justify-center gap-8 max-w-[1000px] mx-auto mt-14 sm:mt-20 transition-all duration-700 ease-in-out"
    >
      <div
        v-for="option in options"
        :key="option.title"
        @click="openModal(option)"
        class="flex flex-col items-center text-center text-white cursor-pointer group w-full sm:w-[45%] lg:w-[30%]"
      >
        <!-- Icon Box -->
        <div
          class="px-2 py-3 mb-4 transition-all duration-300 rounded-lg bg-white/15 backdrop-blur-xs group-hover:bg-black/40"
        >
          <font-awesome-icon
            :icon="['fas', option.icon]"
            class="text-4xl"
          />
        </div>

        <!-- Title + hover underline -->
        <h3
          class="font-medium text-lg sm:text-xl relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
        >
          {{ option.title }}
        </h3>

        <p class="text-sm sm:text-md text-white mt-2 max-w-[300px]">
          {{ option.subtitle }}
        </p>
      </div>
    </div>
  </transition>
</div>


    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60"
      @click.self="closeModal"
    >
      <div
        class="relative flex flex-col w-full max-w-3xl overflow-hidden bg-white shadow-xl rounded-2xl sm:flex-row animate-fadeIn"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute text-4xl text-gray-600 top-3 right-3 hover:text-gray-900"
        >
          &times;
        </button>

        <!-- Left Image -->
        <img
          :src="selectedOption.image"
          alt="option image"
          class="object-cover w-full h-64 sm:w-1/2 sm:h-auto"
        />

        <!-- Right Text Box -->
        <div class="flex flex-col justify-between p-6 text-gray-800 sm:w-1/2">
          <div>
            <!-- Shared Icon Box -->
            <div
              class="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-green-50"
            >
              <font-awesome-icon
                :icon="['fas', selectedOption.icon]"
                class="text-2xl text-green-700"
              />
            </div>

            <h2 class="mb-2 text-2xl font-bold text-green-600">
              {{ selectedOption.title }}
            </h2>
            <p class="mb-6 leading-relaxed text-gray-600">
              {{ selectedOption.description }}
            </p>
          </div>

          <button
            @click="closeModal"
            class="py-2 mt-2 text-white transition bg-green-600 rounded-lg hover:bg-green-700"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ScrollDown from "@/components/ScrollDown.vue";
import { ref } from "vue";

const showOptions = ref(false);
const showModal = ref(false);
const selectedOption = ref({});

const options = [
  {
    title: "Invest with us",
    subtitle: "For Guaranteed Crop Returns (GCR)",
    icon: "chart-line", // <- FontAwesome icon name
    image: "/src/assets/img/invest.webp",
    description:
      "This works on a grow-for-me model where potential investors have an opportunity to invest in a crop production portfolio cycle for an ROI either as an individual, a group or a corporate body.",
  },
  {
    title: "Farm with us",
    subtitle: "For Managed Farm Services (MFS)",
    icon: "briefcase",
    image: "/src/assets/img/farmer.webp",
    description:
      "This model is perfectly designed to suit absentee investor farmers who are interested in alternate investment options for good medium-long term returns: where you can lease an area of our arable serviced farm estate, facilities and labour resources for all your crop farming venture needs and we provide agronomist advice to help improve crop yields. This works on a farm-for-me model without your physical presence on the farm, where potential investors have the opportunity to invest in a farm set-up",
  },
  {
    title: "Track with us",
    subtitle:
      "For day-to-day farm monitoring and real-time decision-making processes.",
    icon: "chart-bar",
    image: "/src/assets/img/track.webp",
    description:
      "We offer a seamless one-stop-shop opportunity to track, monitor and decide on farm operational activities, i.e. from planting, harvesting to sales, as well as crop investment cycles at the click of a button. This operates on everywhere-you-go model with ERP solution. Now you can easily farm from your phone everywhere you are. With this model farming is borderless.",
  },
];

function toggleOptions() {
  showOptions.value = true;
}

function openModal(option) {
  selectedOption.value = option;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease-in-out;
}

/* Smooth fade-up animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
}

.fade-up-enter-active {
  animation: fadeUp 0.8s ease forwards;
}
.fade-up-leave-active {
  animation: fadeDown 0.8s ease forwards;
}

/* Feature item stagger animation */
.feature-enter {
  animation: fadeUp 0.8s ease forwards;
}

.feature-enter:nth-child(1) {
  animation-delay: 0.1s;
}
.feature-enter:nth-child(2) {
  animation-delay: 0.3s;
}
.feature-enter:nth-child(3) {
  animation-delay: 0.5s;
}

/* ------------------------------ */
/* ✅ MOBILE RESPONSIVE STYLES */
/* ------------------------------ */
@media (max-width: 640px) {
  .feature-enter {
    margin-bottom: 1.5rem;
  }

  .feature-enter .text-4xl {
    font-size: 2rem; /* smaller icons on mobile */
  }

  .feature-enter h3 {
    font-size: 1rem !important;
    margin-top: 0.5rem;
  }

  .feature-enter p {
    font-size: 0.8rem !important;
    line-height: 1.3rem;
  }

  .feature-enter .rounded-lg {
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
  }

  /* Reduce hero padding and adjust text */
  .text-center h1 {
    font-size: 1.8rem !important;
    line-height: 2.3rem !important;
  }

  /* Add space between each feature item */
  .feature-enter:not(:last-child) {
    margin-bottom: 2rem;
  }

  /* Align all content centrally on small screens */
  .flex.flex-wrap.items-center.justify-center {
    flex-direction: column;
    gap: 2rem;
  }
}

.hero-content {
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-up-enter-active {
  transition: all 0.6s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive fine-tuning */
@media (max-width: 1024px) {
  .hero-content {
    transition: all 0.8s ease;
  }
  .hero-content.top-\[25\%\] {
    top: 28% !important;
  }
}

@media (max-width: 640px) {
  .hero-content.top-\[25\%\] {
    top: 12% !important;
  }
}

</style>
