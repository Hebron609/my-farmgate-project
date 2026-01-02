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
      <a href="/solutions.html">
        <ScrollDown />
      </a>
    </div>

    <!-- Hero Content -->
    <div
      :class="[
        'absolute left-1/2 -translate-x-1/2 w-full px-8 text-white z-10 pb-5 max-w-[1440px] mx-auto text-center transition-all duration-700 ease-in-out hero-content',
        showOptions ? 'top-[25%]' : 'top-1/2 -translate-y-1/2',
      ]"
    >
      <!-- Logo for video1: just above the heading -->
      <a v-if="videoVariant === 1" href="/" class="block mb-12">
        <img
          src="/src/assets/img/fg logo-white2.png"
          alt="FarmGate Africa Logo"
          class="block w-40 mx-auto sm:hidden"
        />
      </a>

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
              class="w-3.5 h-4.5 rotate-[15deg]"
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

          <span class="relative z-10"> Start growing with us </span>

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
          class="flex flex-wrap items-stretch justify-center gap-6 max-w-[1000px] mx-auto mt-8 sm:mt-20 transition-all duration-700 ease-in-out"
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
            How it works
          </button>
        </div>
      </div>
    </div>

    <!--Social Icons section-->
    <transition name="fade-up">
      <div
        :class="['social-icons-hero', videoVariant === 2 ? 'video2' : '']"
        class="absolute z-20 flex flex-col items-center gap-4 transform -translate-y-1/2 top-1/2 right-6"
      >
        <div
          v-for="(social, index) in socials"
          :key="social.name"
          class="flex items-center gap-3 group"
          :style="{ transitionDelay: index * 0.1 + 's' }"
        >
          <span
            class="hidden text-right text-white transition-all duration-500 translate-x-3 opacity-0 w-28 group-hover:opacity-100 group-hover:translate-x-0 sm:inline-block"
          >
            {{ social.name }}
          </span>
          <a
            :href="social.link"
            target="_blank"
            class="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 backdrop-blur-md bg-black/40 border border-transparent rounded-full group-hover:bg-transparent group-hover:text-[rgb(255,255,0)] group-hover:border-[rgb(255,255,0)]"
          >
            <div
              v-if="social.svg"
              v-html="social.svg"
              class="w-6 h-6 text-current"
            ></div>
            <font-awesome-icon
              v-else
              :icon="['fab', social.icon]"
              class="text-lg"
            />
          </a>
        </div>
      </div>
    </transition>

    <!-- Logo for video2: centered small between marketplace and right items -->
  </div>
</template>

<script setup>
import ScrollDown from "@/components/ScrollDown.vue";
import { ref } from "vue";

const props = defineProps({
  videoVariant: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["update:videoVariant"]);

import investImg from "@/assets/img/invest1.jpg";
import farmerImg from "@/assets/img/farmer.webp";
import trackImg from "@/assets/img/track.webp";

import video1 from "@/assets/video/farmgate-original-video-compressed.mp4";
import video2 from "@/assets/video/farm-hero-video2-compressed.mp4";

// TEXT
const mainHeading = ref("Impacting lives through sustainable agriculture...");

const videoVariant = ref(props.videoVariant); // 1 for first video, 2 for second video

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
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="38"
  height="38"
  preserveAspectRatio="xMidYMid meet"
  style="display:block; width:38px; height:38px; object-fit:contain; overflow:visible;"
  fill="currentColor"
  stroke="currentColor"
  stroke-width="0.2"
  stroke-linecap="round"
  stroke-linejoin="round"
  paint-order="stroke fill"
  vector-effect="non-scaling-stroke"
>
  <path d="M12.6817 8.96741C12.8677 8.87876 13.0339 8.75775 13.1874 8.62084C15.0701 6.94125 14.0217 3.6902 11.3825 3.54423C9.33442 3.39061 7.90788 5.75501 8.76715 7.64449C9.0184 8.19697 9.51794 8.77039 10.0967 8.98834C9.83969 8.97281 9.04848 8.93141 8.8066 8.98147C8.48718 9.04755 8.46577 9.49072 8.80717 9.54319C9.0388 9.57877 9.32557 9.55387 9.5641 9.55354L11.0802 9.55369L13.4556 9.55519C13.6167 9.5574 13.842 9.59614 13.9721 9.47689C14.0812 9.3768 14.0905 9.19875 13.9842 9.09232C13.8223 8.93025 13.522 8.96497 13.315 8.96539L12.6817 8.96741ZM11.4932 4.11799C13.5892 4.32052 14.3096 7.00275 12.7187 8.29871C12.3033 8.63707 11.6725 8.85315 11.1358 8.77916C9.11062 8.58259 8.32717 5.86144 9.93382 4.57627C10.3521 4.24166 10.9586 4.0545 11.4932 4.11799Z"/>
  <path d="M11.3998 8.26587C10.8931 8.40987 11.1338 8.12899 10.7884 7.97974C9.84538 7.57227 10.2313 6.52395 10.5964 6.84222C10.6807 6.91568 10.7621 7.25337 10.9295 7.42272C11.3071 7.80469 12.0239 7.33639 11.6914 6.97024C11.4902 6.74865 11.199 6.80659 10.9348 6.75342C10.0895 6.58332 9.97708 5.42419 10.6564 5.0598C10.7515 5.00877 10.9313 4.96647 10.9967 4.88468C10.9993 4.74214 11.0896 4.635 11.2276 4.5957C11.593 4.59747 11.5144 4.79014 11.6098 4.92117C11.6474 4.97292 11.7793 5.01409 11.8384 5.04799C12.6593 5.51907 12.4194 6.53134 11.9696 6.30975C11.8305 6.24128 11.8687 5.98808 11.823 5.85964C11.5807 5.1792 10.5682 5.47635 10.7926 5.97345C10.9308 6.27979 11.4578 6.21218 11.7367 6.32179C12.4873 6.61677 12.5042 7.66452 11.7919 7.97412C11.7376 7.9977 11.6775 7.99939 11.6223 8.02249C11.5991 8.15288 11.5141 8.21063 11.3998 8.26587Z"/>
  <path d="M17.3977 8.5035C17.5834 8.31911 17.7926 8.1507 18.0027 7.995C18.1684 7.87211 18.5943 7.65345 18.3729 7.40032C18.1897 7.19088 17.5258 7.05693 17.2628 7.03601C16.3114 6.9804 15.8805 7.42905 15.1522 7.50581C14.8828 7.5342 14.5562 7.28062 14.3228 7.36807C14.1964 7.41547 14.1002 7.63005 14.1654 7.75342C14.2888 7.9866 15.4764 8.11267 15.6094 8.08087C15.7303 8.05192 15.8358 7.95975 15.9415 7.89697C16.3882 7.63166 17.018 7.51207 17.5249 7.63987C17.2244 7.91036 16.3468 8.63872 16.3914 9.07166C16.407 9.22248 16.5535 9.33255 16.7027 9.31233C16.8781 9.28856 16.9377 9.11471 17.0296 8.98811C17.7973 9.30877 18.104 9.9483 18.515 10.5808C18.9756 11.2896 19.7214 11.4304 20.4764 11.5946C20.6583 12.3018 20.611 13.0359 20.4194 13.7354C19.0737 14.1669 19.2426 13.8702 18.269 14.8948C17.8872 15.2965 17.4025 15.6268 16.9136 15.8827C16.5042 16.0969 16.0179 16.2447 15.7011 16.5909C15.073 17.2775 15.0709 18.3078 15.1126 19.1846C14.8547 19.1812 14.5883 19.1984 14.3318 19.1727C14.0872 18.5488 14.1798 17.6938 13.2297 17.4973C12.9037 17.4298 12.5764 17.5377 12.2529 17.5687C11.5545 17.6358 10.8639 17.5141 10.188 17.3452C8.8416 17.0086 8.40251 17.0124 8.23402 18.5458L8.16341 19.18C7.91711 19.1845 7.6698 19.1866 7.4238 19.1725C7.40103 18.0429 7.46703 16.8329 6.65692 15.9345C5.75741 14.9368 4.96736 14.0908 4.70006 12.6804C4.2957 10.5467 5.69662 8.55405 7.72226 7.96815C8.00321 7.88688 8.43251 7.90342 8.34997 7.49058C8.19168 7.19186 7.8492 7.33526 7.60143 7.41476C5.81722 7.98735 4.68585 9.05715 4.23078 10.8584C3.28203 10.4833 4.65892 9.75112 3.80883 9.56947C3.26752 9.71231 2.92121 11.0602 4.11772 11.3892C3.91732 13.0096 4.62663 14.488 5.66505 15.6917C6.01743 16.1002 6.40563 16.3879 6.61338 16.9053C6.85635 17.5103 6.86377 18.1756 6.86643 18.8177C6.86775 19.1296 6.75199 19.6823 7.18594 19.7367C7.35652 19.7581 8.19277 19.7676 8.36812 19.7391C9.04616 19.6287 8.54122 17.6676 9.18671 17.7023C9.4359 17.7157 9.84056 17.836 10.0992 17.8962C11.0123 18.1087 11.7701 18.2292 12.7038 18.0699C14.043 17.8413 13.4247 19.2592 14.066 19.6908C14.2617 19.8225 14.5897 19.7485 14.811 19.7462C15.603 19.7377 15.7211 19.8903 15.6723 18.9825C15.6388 18.3593 15.6523 17.381 16.1446 16.9332C16.363 16.7346 16.8287 16.554 17.1062 16.411C17.6782 16.1166 18.1978 15.7593 18.6514 15.3019C18.859 15.0926 19.0281 14.8017 19.2996 14.6685C19.726 14.4593 20.6547 14.3771 20.8881 14.0274C21.1816 13.5878 21.319 11.6351 20.8505 11.1714C20.7032 11.0257 20.1958 10.9828 19.976 10.9175C19.1077 10.6595 19.1125 10.3769 18.643 9.70548C18.3115 9.23148 17.8833 8.81756 17.3977 8.5035Z"/>
  <path d="M16.5662 11.8703C17.8661 11.9647 18.0163 10.1471 16.7788 9.98934C15.5264 9.90313 15.3449 11.6964 16.5662 11.8703ZM16.7342 10.538C17.2814 10.649 17.1096 11.4337 16.6061 11.3176C16.1124 11.1613 16.2046 10.5107 16.7342 10.538ZM7.99158 11.057C8.47765 11.0671 8.96497 11.0605 9.45119 11.0606L13.7613 11.0596C13.981 11.0597 14.2054 11.0783 14.4242 11.0699C14.8207 11.0547 14.8233 10.6044 14.4649 10.5028C14.23 10.4815 13.9539 10.5031 13.7148 10.5034L9.47992 10.5035C9.23324 10.5034 7.99139 10.4516 7.83292 10.5431C7.60795 10.6731 7.72424 11.0279 7.99158 11.057Z"/>
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
      <svg viewBox="0 0 24 24"
  width="38"
  height="38"
  preserveAspectRatio="xMidYMid meet"
  style="display:block; width:38px; height:38px; object-fit:contain; overflow:visible;"
  fill="currentColor"
  stroke=""
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  vector-effect="non-scaling-stroke" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 14.25C4.38375 14.25 3.375 15.2588 3.375 16.5C3.375 17.7412 4.38375 18.75 5.625 18.75C6.86625 18.75 7.875 17.7412 7.875 16.5C7.875 15.2588 6.86625 14.25 5.625 14.25ZM5.625 18C4.79625 18 4.125 17.3288 4.125 16.5C4.125 15.6712 4.79625 15 5.625 15C6.45375 15 7.125 15.6712 7.125 16.5C7.125 17.3288 6.45375 18 5.625 18Z" fill="currentColor"/>
<path d="M21.75 14.6325V11.625C21.75 10.7962 21.0788 10.125 20.25 10.125H18.75V7.5C18.75 7.29375 18.5813 7.125 18.375 7.125H18V6.17625C18 5.74875 18.24 5.3625 18.6225 5.17125L19.2938 4.8375C19.4775 4.74375 19.5525 4.51875 19.4625 4.335C19.3688 4.15125 19.1438 4.07625 18.96 4.16625L18.2888 4.5C17.6513 4.81875 17.2537 5.46375 17.2537 6.17625V7.125H16.8787C16.6725 7.125 16.5037 7.29375 16.5037 7.5V10.125H13.0463L11.7338 4.875H12.0037C12.6225 4.875 13.1287 4.36875 13.1287 3.75C13.1287 3.13125 12.6225 2.625 12.0037 2.625H2.25C2.04375 2.625 1.875 2.79375 1.875 3V4.5C1.875 4.70625 2.04375 4.875 2.25 4.875H2.625V10.1775C1.98 10.3462 1.5 10.9275 1.5 11.625V13.9125C1.0275 14.6625 0.75 15.5475 0.75 16.5C0.75 17.8387 1.29375 19.0537 2.17125 19.935C2.17125 19.9387 2.175 19.9425 2.17875 19.9462C2.1825 19.95 2.18625 19.95 2.19 19.9537C3.07125 20.8312 4.28625 21.375 5.625 21.375C6.96375 21.375 8.17875 20.8312 9.06 19.9537C9.06375 19.9537 9.0675 19.95 9.07125 19.9462C9.075 19.9425 9.075 19.9387 9.07875 19.935C9.52125 19.4925 9.8775 18.96 10.1212 18.375H15.8212C16.17 20.085 17.685 21.375 19.4963 21.375C21.5625 21.375 23.2463 19.6913 23.2463 17.625C23.2463 16.4025 22.6538 15.3188 21.7463 14.6325H21.75ZM17.25 7.875H18V10.125H17.25V7.875ZM15 10.875H19.125V11.625C19.125 11.8313 18.9563 12 18.75 12H15.375C15.1687 12 15 11.8313 15 11.625V10.875ZM12.27 10.125H6.375V4.875H10.9575L12.27 10.125ZM2.625 3.375H12C12.2063 3.375 12.375 3.54375 12.375 3.75C12.375 3.95625 12.2063 4.125 12 4.125H2.625V3.375ZM5.625 4.875V10.125H3.375V4.875H5.625ZM9.375 16.875H9.73125C9.6525 17.73 9.315 18.5137 8.79375 19.1362L8.5425 18.885C8.39625 18.7388 8.16 18.7388 8.01375 18.885C7.8675 19.0313 7.8675 19.2675 8.01375 19.4138L8.265 19.665C7.63875 20.1862 6.85875 20.5237 6.00375 20.6025V20.2463C6.00375 20.04 5.835 19.8713 5.62875 19.8713C5.4225 19.8713 5.25375 20.04 5.25375 20.2463V20.6025C4.39875 20.5237 3.615 20.1862 2.9925 19.665L3.24375 19.4138C3.39 19.2675 3.39 19.0313 3.24375 18.885C3.0975 18.7388 2.86125 18.7388 2.715 18.885L2.46375 19.1362C1.9425 18.51 1.605 17.73 1.52625 16.875H1.8825C2.08875 16.875 2.2575 16.7063 2.2575 16.5C2.2575 16.2937 2.08875 16.125 1.8825 16.125H1.52625C1.605 15.27 1.9425 14.4863 2.46375 13.8638L2.715 14.115C2.79 14.19 2.88375 14.2238 2.98125 14.2238C3.07875 14.2238 3.1725 14.1862 3.2475 14.115C3.39375 13.9687 3.39375 13.7325 3.2475 13.5862L2.99625 13.335C3.6225 12.8138 4.4025 12.4763 5.2575 12.3975V12.7537C5.2575 12.96 5.42625 13.1287 5.6325 13.1287C5.83875 13.1287 6.0075 12.96 6.0075 12.7537V12.3975C6.8625 12.4763 7.64625 12.8138 8.26875 13.335L8.0175 13.5862C7.87125 13.7325 7.87125 13.9687 8.0175 14.115C8.0925 14.19 8.18625 14.2238 8.28375 14.2238C8.38125 14.2238 8.475 14.1862 8.55 14.115L8.80125 13.8638C9.3225 14.49 9.66 15.27 9.73875 16.125H9.3825C9.17625 16.125 9.0075 16.2937 9.0075 16.5C9.0075 16.7063 9.17625 16.875 9.3825 16.875H9.375ZM15.75 17.625H10.365C10.4212 17.3813 10.4625 17.13 10.4813 16.875H15.825C15.7763 17.1187 15.75 17.37 15.75 17.625ZM10.4813 16.125C10.3913 14.9362 9.87375 13.8638 9.07875 13.065C9.07875 13.0613 9.075 13.0575 9.07125 13.0538C9.0675 13.05 9.06375 13.05 9.06 13.0463C8.17875 12.1688 6.96375 11.625 5.625 11.625C4.28625 11.625 3.1275 12.1462 2.25 12.99V11.625C2.25 11.2125 2.5875 10.875 3 10.875H14.25V11.625C14.25 12.2437 14.7563 12.75 15.375 12.75H18.75C19.3687 12.75 19.875 12.2437 19.875 11.625V10.875H20.25C20.6625 10.875 21 11.2125 21 11.625V14.19C20.5387 13.9875 20.0325 13.875 19.5 13.875C17.9662 13.875 16.6463 14.8013 16.065 16.125H10.4813ZM19.5 20.625C17.8463 20.625 16.5 19.2787 16.5 17.625C16.5 15.9713 17.8463 14.625 19.5 14.625C21.1537 14.625 22.5 15.9713 22.5 17.625C22.5 19.2787 21.1537 20.625 19.5 20.625Z" fill="currentColor"/>
<path d="M19.5 15.75C18.465 15.75 17.625 16.59 17.625 17.625C17.625 18.66 18.465 19.5 19.5 19.5C20.535 19.5 21.375 18.66 21.375 17.625C21.375 16.59 20.535 15.75 19.5 15.75ZM19.5 18.75C18.8813 18.75 18.375 18.2437 18.375 17.625C18.375 17.0063 18.8813 16.5 19.5 16.5C20.1187 16.5 20.625 17.0063 20.625 17.625C20.625 18.2437 20.1187 18.75 19.5 18.75ZM12 13.5C11.7937 13.5 11.625 13.6687 11.625 13.875V15C11.625 15.2063 11.7937 15.375 12 15.375C12.2063 15.375 12.375 15.2063 12.375 15V13.875C12.375 13.6687 12.2063 13.5 12 13.5ZM13.5 13.5C13.2937 13.5 13.125 13.6687 13.125 13.875V15C13.125 15.2063 13.2937 15.375 13.5 15.375C13.7063 15.375 13.875 15.2063 13.875 15V13.875C13.875 13.6687 13.7063 13.5 13.5 13.5ZM15 13.5C14.7937 13.5 14.625 13.6687 14.625 13.875V15C14.625 15.2063 14.7937 15.375 15 15.375C15.2063 15.375 15.375 15.2063 15.375 15V13.875C15.375 13.6687 15.2063 13.5 15 13.5Z" fill="currentColor"/>
</svg>

    `,
    image: farmerImg,
    description:
      "This model is perfectly designed to suit absentee investor farmers who are interested in alternate investment options for good medium-long term returns: where you can lease an area of our arable serviced farm estate, facilities and labour resources for all your crop farming venture needs and we provide agronomist advice to help improve crop yields. This works on a farm-for-me model without your physical presence on the farm, where potential investors have the opportunity to invest in a farm set-up.",
  },
  {
    title: "Track with us",
    subtitle: "For day-to-day Decisive Farm Monitoring (DFM)",
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="38" width="38" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"></path>
      </svg>
    `,
    image: trackImg,
    description:
      'We offer a seamless one-stop-shop opportunity to track, monitor and decide on farm operational activities, i.e. from planting, harvesting to sales, as well as crop investment cycles at the click of a button. This operates on pay-as-you-go model with "myFarm" ERP solution. Now you can easily farm from your phone everywhere you are. With this model farming is borderless.',
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
  mainHeading.value = "gateway to farming";
  currentVideo.value = video2;
  videoKey.value++;
  videoVariant.value = 2;
  emit("update:videoVariant", 2);
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
    top: 15% !important;
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

/* Default mobile for first video */
@media (max-width: 640px) {
  .social-icons-hero {
    top: auto;
    bottom: 110px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    flex-direction: row;
    gap: 10px;
  }
}

/* Mobile for second video */
@media (max-width: 640px) {
  .video2 {
    display: none !important;
  }
}

/* hide the hover labels only on mobile */
@media (max-width: 640px) {
  .social-icons-hero span {
    display: none !important;
  }
}

/* hide video2 logo when menu is open */
:global(.menu-open .video2-logo) {
  display: none;
}
</style>
