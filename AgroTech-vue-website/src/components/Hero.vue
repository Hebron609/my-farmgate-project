<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Hero Background Video -->
    <video
      :key="videoKey"
      class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.7] z-0"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source :src="currentVideo" type="video/mp4" />
    </video>

    <!-- Scroll Indicator -->
    <div class="absolute mt-12 transform -translate-x-1/2 bottom-6 left-1/2">
      <ScrollDown />
    </div>

    <!-- Hero Content -->
    <div
      :class="[
        'absolute left-1/2 -translate-x-1/2 w-full px-8 text-white z-10 pb-5 max-w-[1440px] mx-auto text-center transition-all duration-700 ease-in-out hero-content',
        showOptions ? 'top-[25%]' : 'top-1/2 -translate-y-1/2',
      ]"
    >
      <h1
        class="font-montserrat font-semibold max-w-[1000px] text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        {{ mainHeading }}
      </h1>

      <div v-if="!showOptions" class="flex justify-center mt-10">
        <button
          @click="activateOptions"
          class="relative flex items-center gap-2 px-6 py-3 overflow-hidden text-base font-semibold text-white transition-all duration-300 rounded-full shadow-lg cursor-pointer group bg-gradient-to-r from-green-800 to-yellow-600 hover:shadow-xl animate-bounce-button"
        >
          <!-- Icon Circle -->
<div
  class="flex items-center justify-center bg-white rounded-full shadow-sm w-7 h-7"
>
  <svg
    width="14"
    height="18"
    viewBox="0 0 5 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-3.5 h-4.5"
  >
    <path
      d="M4.85 2.41003C4.53 3.81003 3.78 4.59003 2.61 4.75003V6.13003C2.49 6.19003 2.36 6.26003 2.24 6.33003V4.75003C1.07 4.59003 0.32 3.81003 0 2.41003C1.42 2.73003 2.21 3.49003 2.36 4.68003H2.49C2.65 3.48003 3.43 2.73003 4.85 2.41003Z"
      fill="#129C48"
    />
    <path
      d="M2.42987 0C1.62987 1.26 1.62987 2.37 2.41987 3.34C3.20987 2.37 3.21987 1.26 2.42987 0Z"
      fill="#129C48"
    />
  </svg>
</div>


          <span class="relative z-10"> Start Growing With Us </span>

          <font-awesome-icon
            :icon="['far', 'arrow-right']"
            class="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      <!-- Features Section -->
      <transition name="fade-up">
        <div
          v-if="showOptions"
          class="flex flex-wrap items-center justify-center gap-6 max-w-[1000px] mx-auto mt-8 sm:mt-20 transition-all duration-700 ease-in-out"
        >
          <div
            v-for="option in options"
            :key="option.title"
            @click="openModal(option)"
            class="flex flex-col items-center text-center text-white cursor-pointer group w-full sm:w-[45%] lg:w-[30%]"
          >
            <div
              class="px-2 py-3 mb-4 transition-all duration-300 rounded-lg bg-white/15 backdrop-blur-xs group-hover:bg-black/40"
            >
              <!-- Custom SVG Icon -->
              <div
                v-html="option.svg"
                class="text-white w-[38px] h-[38px]"
              ></div>
            </div>

            <h3
              class="font-medium text-lg sm:text-xl relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
            >
              {{ option.title }}
            </h3>

            <p
              class="text-sm sm:text-md text-[rgb(255,255,0)] mt-2 max-w-[300px]"
            >
              {{ option.subtitle }}
            </p>
          </div>
        </div>
      </transition>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div
        class="relative flex flex-col w-full max-w-6xl overflow-hidden bg-white shadow-xl rounded-2xl sm:flex-row animate-fadeIn"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute text-3xl text-gray-600 top-2 right-3 hover:text-gray-900 sm:text-4xl"
        >
          &times;
        </button>

        <!-- Left Image -->
        <img
          :src="selectedOption.image"
          alt="option image"
          class="object-cover w-full h-52 sm:h-auto sm:w-1/2"
        />

        <!-- Right Text Box -->
        <div
          class="flex flex-col justify-between w-full p-5 text-gray-800 sm:w-1/2 sm:p-6"
        >
          <div class="overflow-y-auto max-h-[65vh] sm:max-h-full">
            <!-- ✅ Icon + Title Row (final corrected version) -->
            <div class="flex items-center gap-4 mb-4">
              <!-- Icon Box -->
              <div
                class="flex items-center justify-center flex-shrink-0 bg-green-100 rounded-lg shared-icon-box w-14 h-14"
              >
                <!-- SVG Wrapper -->
                <div
                  v-html="selectedOption.svg"
                  class="flex items-center justify-center text-green-700 modal-svg w-7 h-7"
                  aria-hidden="true"
                ></div>
              </div>

              <!-- Title -->
              <h2
                class="text-xl font-bold leading-tight text-green-600 sm:text-2xl"
              >
                {{ selectedOption.title }}
              </h2>
            </div>

            <!-- Description -->
            <p class="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              {{ selectedOption.description }}
            </p>
          </div>

          <!-- Button -->
          <button
            @click="closeModal"
            class="py-2 mt-2 text-sm text-white transition bg-green-600 rounded-lg hover:bg-green-700 sm:text-base"
          >
            How It Works
          </button>
        </div>
      </div>
    </div>

    <!-- Social Icons Section -->
    <transition name="fade-up">
      <div class="absolute z-20 flex flex-col items-end gap-4 -translate-y-1/2 right-16 top-1/2 social-icons-hero">

    <div
      v-for="(social, index) in socials"
      :key="social.name"
      class="flex items-center gap-3 group"
      :style="{ transitionDelay: index * 0.1 + 's' }"
    >
      <!-- Label -->
      <span
        class="text-right text-white transition-all duration-500 translate-x-3 opacity-0 w-28 group-hover:opacity-100 group-hover:translate-x-0"
      >
        {{ social.name }}
      </span>

      <!-- Icon -->
      <a
  :href="social.link"
  target="_blank"
  class="flex items-center justify-center w-12 h-12 text-green-600 transition-all duration-300 
         bg-white/80 border border-transparent rounded-full 
        group-hover:bg-transparent group-hover:text-[rgb(255,255,0)] group-hover:border-[rgb(255,255,0)]"
>

        <!-- SVG version -->
        <div
          v-if="social.svg"
          v-html="social.svg"
          class="w-6 h-6 text-current"
        ></div>

        

        <!-- Keep WhatsApp default font-awesome -->
        <font-awesome-icon
          v-else
          :icon="['fab', social.icon]"
          class="text-lg"
        />
      </a>
    </div>
  </div>
</transition>



  </div>
</template>

<script setup>
import ScrollDown from "@/components/ScrollDown.vue";
import { ref } from "vue";

import investImg from "@/assets/img/invest1.jpg";
import farmerImg from "@/assets/img/farmer.webp";
import trackImg from "@/assets/img/track.webp";

import video1 from "@/assets/video/farmgate-original-video.mp4";
import video2 from "@/assets/video/farm-hero-video1.mp4";

// TEXT
const mainHeading = ref("Impacting lives through sustainable agriculture...");

// VIDEO HANDLING
const currentVideo = ref(video1);
const videoKey = ref(0);

const showOptions = ref(false);
const showModal = ref(false);
const selectedOption = ref({});

// OPTIONS LIST
const options = [
  {
    title: "Invest with us",
    subtitle: "For Guaranteed Crop Returns (GCR)",
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="38" width="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path>
      </svg>
    `,
    image: investImg,
    description:
      "This works on a grow-for-me model where potential investors have an opportunity to invest in a crop production portfolio cycle for an ROI either as an individual, a group or a corporate body.",
  },
  {
    title: "Farm with us",
    subtitle: "For Managed Farm Services (MFS)",
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="38" width="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
      </svg>
    `,
    image: farmerImg,
    description:
      "This model is perfectly designed to suit absentee investor farmers who are interested in alternate investment options for good medium-long term returns: where you can lease an area of our arable serviced farm estate, facilities and labour resources for all your crop farming venture needs and we provide agronomist advice to help improve crop yields. This works on a farm-for-me model without your physical presence on the farm, where potential investors have the opportunity to invest in a farm set-up.",
  },
  {
    title: "Track with us",
    subtitle: "For day-to-day farm monitoring",
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="38" width="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"></path>
      </svg>
    `,
    image: trackImg,
    description:
      'We offer a seamless one-stop-shop opportunity to track, monitor and decide on farm operational activities, i.e. from planting, harvesting to sales, as well as crop investment cycles at the click of a button. This operates on everywhere-you-go model with "myFarm" ERP solution. Now you can easily farm from your phone everywhere you are. With this model farming is borderless.',
  },
];

// SOCIALS LIST
const socials = [
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/233503301132",
    svg: null,
  },

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/farmgate-africa-industries/",
    svg: `
      <svg id="brand-linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24">
        <path d="M0,0H24V24H0Z" fill="none"></path>
        <path d="M4,4,4,6A2,2,0,0,1,6,4H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Z"
        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2"></path>
        <path d="M8,11v5" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M8,8v.01" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12,16V11" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M16,16V13a2,2,0,0,0-4,0" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
  },

  {
    name: "YouTube",
    link: "https://youtube.com/@farmgateafrica?si=cmGVgyhsOkbbzmv9",
    svg: `
      <svg id="brand-youtube" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24">
        <path d="M0,0H24V24H0Z" fill="none"></path>
        <path d="M3,5,3,9A4,4,0,0,1,7,5H17a4,4,0,0,1,4,4v6a4,4,0,0,1-4,4H7a4,4,0,0,1-4-4Z"
        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2"></path>
        <path d="M10,9l5,3-5,3Z" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    `,
  },

  {
    name: "TikTok",
    link: "https://www.tiktok.com/@farmgate.africa?_t=ZM-8uDH4dxrfC3&_r=1",
    svg: `
      <svg id="brand-tiktok" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24">
        <path d="M0,0H24V24H0Z" fill="none"></path>
        <path d="M9,12a4,4,0,1,0,4,4V4a5,5,0,0,0,5,5" fill="none"
        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2"></path>
      </svg>
    `,
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/farmgate_africa?igsh=YnAzN2Vsb3NqbmV4",
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24">
        <path d="M0,0H24V24H0Z" fill="none"></path>
        <rect x="4" y="4" width="16" height="16" rx="4"
        stroke="currentColor" stroke-width="2" fill="none"></rect>
        <circle cx="12" cy="12" r="3"
        stroke="currentColor" stroke-width="2" fill="none"></circle>
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor"></circle>
      </svg>
    `,
  },

  {
    name: "X (Twitter)",
    link: "https://x.com/FarmGate_Africa?t=ez-1Eavg8y9abxxLS_F0gw&s=09",
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
        fill="currentColor"></path>
</svg>

    `,
  },
];

import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onBeforeUnmount(() => {
  document.body.style.overflow = "auto";
});

function activateOptions() {
  showOptions.value = true;
  mainHeading.value = "gateway to Farming";
  currentVideo.value = video2;
  videoKey.value++;
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

.hero-content {
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (max-width: 1024px) {
  .hero-content.top-\[25\%\] {
    top: 28% !important;
  }
}

@media (max-width: 640px) {
  .hero-content.top-\[25\%\] {
    top: 12% !important;
  }
}

/* Smooth leaf bounce */
@keyframes bounce-smooth {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}
.animate-bounce-smooth {
  animation: bounce-smooth 1.3s infinite ease-in-out;
}

/* Full button soft bounce */
@keyframes button-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
.animate-bounce-button {
  animation: button-bounce 1.8s infinite ease-in-out;
}

/* ensure the injected SVG centers correctly */
.modal-svg {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* force svg to scale properly */
.modal-svg svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* ensure svg inherits color */
.modal-svg svg [fill]:not([fill="none"]) {
  fill: currentColor;
}
.modal-svg svg [stroke] {
  stroke: currentColor;
}

@media (max-width: 640px) {
  .social-icons-hero {
    display: none;
  }
}

</style>
