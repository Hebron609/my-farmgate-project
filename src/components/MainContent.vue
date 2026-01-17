<template>
  <div class="relative z-10 bg-gray-100">
    <!--About-pattern-section-->
    <div class="absolute top-70 right-30 w-full h-[300px] z-[-1]">
      <img
        class="h-auto w-[480px] opacity-6"
        :src="farmGateLogo"
        alt=""
      />
    </div>

    <section class="max-w-[1440px] mx-auto pt-10 lg:py-30 font-montserrat">
      <!--About-flex-container-->
      <div
        class="flex flex-col gap-10 mx-8 mt-10 sm:flex-row sm:items-start sm:justify-between"
      >
        <!--Left-section-->
        <div class="w-full sm:w-[50%] flex flex-col items-start gap-4 mt-2">
          <h1
            class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[120px]"
          >
            <font-awesome-icon icon="leaf" class="text-xs text-green-900" />
            <span class="text-xs font-semibold">About us</span>
          </h1>

          <h1 class="text-4xl max-w-[500px] mb-7 font-semibold font-monserrat">
            We are committed to advancing agriculture.
          </h1>

          <p class="max-w-[500px] mb-7 text-gray-700 text-md">
            Our mission is to redefine what’s possible in modern farming —
            creating lasting value for communities, ecosystems, and future
            generations. Rooted in tradition, driven by innovation — we grow
            more than crops, we grow impact.
          </p>

          <!--About-Btn-->
          <a
            href="/marketplace.html"
            class="md:flex group relative overflow-hidden p-3 sm:p-4 lg:p-5 rounded-4xl items-center gap-2 cursor-pointer bg-[rgb(3,89,37)] text-white font-semibold text-xs sm:text-sm md:text-base"
          >
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <font-awesome-icon
                icon="leaf"
                class="text-[10px] sm:text-xs md:text-sm"
              />
              <span class="text-xs sm:text-sm md:text-base">Marketplace</span>
            </span>
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-300 bg-gradient-to-r group-hover:translate-y-0"
            >
              <font-awesome-icon
                icon="leaf"
                class="text-[10px] sm:text-xs md:text-sm"
              />
              <span class="text-xs font-semibold sm:text-sm md:text-base"
                >Marketplace</span
              >
            </span>
          </a>
        </div>

        <!--Right-section-->
        <div class="grid grid-cols-2 grid-rows-2 gap-4 w-full sm:w-[45%]">
          <!-- Image 1 (spans both columns) -->
          <div class="col-span-2">
            <img
              :src="farmCrops"
              alt=""
              class="w-full h-[250px] object-cover rounded-2xl brightness-85"
            />
          </div>

          <!-- Image 2 -->
          <div>
            <img
              :src="soilSampling"
              alt=""
              class="object-cover w-full rounded-2xl"
            />
          </div>

          <!-- Image 3 -->
          <div>
            <img
              :src="farmTractor2"
              alt=""
              class="object-cover w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!--Our-solution-grid-->

  <div class="relative z-10">
    <!--About-pattern-section-->

    <section class="max-w-[1440px] mx-auto py-30 font-montserrat px-4 lg:px-8">
      <!-- Section Tag -->
      <h1
        class="flex items-center gap-1 px-3 py-1 mb-8 text-green-900 bg-white border border-gray-200 rounded-2xl w-fit"
      >
        <font-awesome-icon icon="leaf" class="text-xs" />
        <span class="text-xs font-semibold">Our solutions</span>
      </h1>

      <!-- Grid wrapper -->
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <!-- Intro Section -->
        <div class="flex flex-col gap-4 text-center lg:text-left lg:col-span-3">
          <h1
            class="text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl"
          >
            Transforming agriculture through innovation.
          </h1>
          <p class="text-sm text-gray-600 sm:text-base">
            We deliver end-to-end agricultural solutions that combine
            traditional farming wisdom with modern innovation.
          </p>

          <button
            class="group relative overflow-hidden px-6 py-3 rounded-3xl flex items-center gap-2 cursor-pointer bg-[rgb(3,89,37)] text-white font-semibold text-sm w-fit mx-auto lg:mx-0 mt-4"
          >
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <font-awesome-icon icon="leaf" class="text-xs" />
              <span>Discover our solutions</span>
            </span>
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-300 bg-gradient-to-r group-hover:translate-y-0"
            >
              <font-awesome-icon icon="leaf" class="text-xs" />
              <span class="font-semibold">Discover our solutions</span>
            </span>
          </button>
        </div>

        <!-- Solution Cards -->
        <div
          class="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-9"
        >
          <!-- Background accent (desktop/tablet only) -->
          <div
            class="absolute inset-x-0 -top-10 md:h-[420px] lg:h-[480px] bg-gray-50 rounded-xl hidden md:block left-15 right-15"
            style="z-index: 0"
          ></div>

          <!-- Card 1 -->
          <div class="relative z-10 overflow-hidden rounded-lg">
            <!-- Media wrapper with fixed aspect so overlay & image always match -->
            <div class="w-full md:w-1/2 h-[400px] md:h-[380px]">
              <img
                :src="farmerImg1"
                alt="Precision farming"
                class="absolute inset-0 object-cover w-full h-full"
              />
              <!-- Overlay -->
              <div
                class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <!-- Text -->
              <div class="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
                <h3 class="text-lg font-bold">Precision farming</h3>
                <p class="text-sm leading-tight">
                  We use data-driven insights and smart technology to help
                  farmers monitor soil health.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="relative z-10 overflow-hidden rounded-lg">
            <div class="w-full md:w-1/2 h-[400px] md:h-[380px]">
              <img
                :src="womenFarm"
                alt="Personalized services"
                class="absolute inset-0 object-cover w-full h-full"
              />
              <div
                class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
                <h3 class="text-lg font-bold">Personalized services</h3>
                <p class="text-sm leading-tight">
                  We provide tailored solutions for farmers to maximize crop
                  yield and efficiency.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="relative z-10 overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1"
          >
            <div class="w-full md:w-1/2 h-[400px] md:h-[380px]">
              <img
                :src="farmIrrigation"
                alt="Sustainable irrigation"
                class="absolute inset-0 object-cover w-full h-full"
              />
              <div
                class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <div class="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
                <h3 class="text-lg font-bold">Sustainable irrigation</h3>
                <p class="text-sm leading-tight">
                  Smart irrigation systems that conserve water and improve crop
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainable Agriculture Section -->
    <section
      class="max-w-[1440px] mx-auto py-16 font-montserrat bg-gray-50 rounded-xl"
    >
      <div
        class="grid items-center grid-cols-1 gap-12 mx-6 md:grid-cols-2 lg:grid-cols-12"
      >
        <!-- Image -->
        <div class="md:col-span-1 lg:col-span-6">
          <img
            :src="fasoFarm"
            alt="Sustainable Agriculture"
            class="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[580px] object-cover rounded-2xl brightness-90"
          />
        </div>

        <!-- Content -->
        <div class="flex flex-col justify-center md:col-span-1 lg:col-span-6">
          <h2
            class="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-[500px] tracking-tight"
          >
            Sustainability at our core.
          </h2>

          <p
            class="mb-10 text-gray-700 max-w-[500px] text-sm sm:text-base mt-4"
          >
            We are dedicated to promoting sustainable farming practices that
            protect the environment and ensure food security for future
            generations.
          </p>

          <div class="pb-4 mb-4 border-b border-gray-300 max-w-[480px]">
            <h3 class="font-semibold">Composting</h3>
            <p class="text-sm sm:text-base">
              Reducing waste and returning nutrients to the soil
            </p>
          </div>

          <div class="pb-4 border-b border-gray-300 max-w-[480px]">
            <h3 class="font-semibold">Water-saving systems</h3>
            <p class="text-sm sm:text-base">
              Smart irrigation that conserves every drop
            </p>
          </div>

          <a
            href="/marketplace.html"
            class="md:flex group relative overflow-hidden p-3 sm:p-4 lg:p-5 rounded-4xl items-center gap-2 cursor-pointer bg-[rgb(3,89,37)] text-white font-semibold text-xs sm:text-sm md:text-base"
          >
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <font-awesome-icon
                icon="leaf"
                class="text-[10px] sm:text-xs md:text-sm"
              />
              <span class="text-xs sm:text-sm md:text-base">Marketplace</span>
            </span>
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-300 bg-gradient-to-r group-hover:translate-y-0"
            >
              <font-awesome-icon
                icon="leaf"
                class="text-[10px] sm:text-xs md:text-sm"
              />
              <span class="text-xs font-semibold sm:text-sm md:text-base"
                >Marketplace</span
              >
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Our Track Record Section -->
    <section class="max-w-[1440px] mx-auto py-20 font-montserrat px-6">
      <div
        class="flex flex-col items-center gap-10 lg:items-start lg:flex-row lg:justify-between"
      >
        <!-- Heading -->
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-[350px] text-center lg:text-left"
        >
          Our track record speaks for itself
        </h1>

        <!-- Stats Container -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Card 1 -->
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">20+</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Years in Business
            </p>
          </div>

          <!-- Card 2 -->
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">1000+</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Farmers Supported
            </p>
          </div>

          <!-- Card 3 -->
          <div class="p-6 text-center rounded-lg bg-gray-50 lg:text-left">
            <h2 class="text-4xl font-bold text-green-900 sm:text-5xl">98%</h2>
            <p class="pt-3 text-sm font-semibold text-gray-700 sm:text-base">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why-choose-us-section -->

    <div class="relative">
      <div class="sticky top-32">
        <!--About-pattern-section-->
        <div class="w-full h-[300px] z-[-1] absolute top-70 bottom-80 right-30">
          <img
            class="h-auto w-[480px] opacity-6"
            :src="farmGateLogo"
            alt=""
          />
        </div>
      </div>
      <!-- Why Choose Us Section -->
      <section
        class="relative max-w-[1440px] mx-auto py-20 font-montserrat px-6 lg:px-8"
      >
        <div class="flex flex-col lg:flex-row lg:gap-12">
          <!-- Left Sticky Text -->
          <div class="w-full mb-10 lg:w-1/2 lg:pr-8 lg:mb-0">
            <div class="sticky top-32">
              <h1
                class="flex items-center gap-1 px-2 py-1 mb-4 border border-gray-200 rounded-2xl w-fit"
              >
                <font-awesome-icon icon="leaf" class="text-xs text-green-900" />
                <span class="text-xs font-semibold">Why choose us</span>
              </h1>
              <h2
                class="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-[500px]"
              >
                Your partner in modern farming
              </h2>
              <p class="text-gray-600 text-sm sm:text-base max-w-[500px]">
                We help farmers and agribusinesses embrace smart, sustainable
                practices. Whether you’re beginning your journey or improving
                existing methods, we’ll support you every step of the way.
              </p>
            </div>
          </div>

          <!-- Right Scrollable Images -->
          <div class="w-full space-y-12 lg:w-1/2">
            <!-- Card -->
            <div>
              <div class="overflow-hidden rounded-xl">
                <img
                  :src="farmPic5"
                  alt="Smart Irrigation"
                  class="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-[430px] mb-4 rounded-xl transition-transform duration-500 ease-in-out hover:scale-110 shadow-lg"
                />
              </div>
              <h3 class="text-lg font-semibold sm:text-xl">
                Smart Irrigation & Water Management
              </h3>
              <p class="text-sm text-gray-500 sm:text-base">
                Use water efficiently with precision systems for healthier crops
                and less waste.
              </p>
            </div>

            <!-- Card -->
            <div>
              <div class="overflow-hidden rounded-xl">
                <img
                  :src="farmPic3"
                  alt="Soil Health"
                  class="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-[430px] mb-4 rounded-xl transition-transform duration-500 ease-in-out hover:scale-110 shadow-lg"
                />
              </div>
              <h3 class="text-lg font-semibold sm:text-xl">
                Soil Health & Crop Monitoring
              </h3>
              <p class="text-sm text-gray-500 sm:text-base">
                Boost soil fertility and track crop growth with smart,
                data-driven insights.
              </p>
            </div>

            <!-- Card -->
            <div>
              <div class="overflow-hidden rounded-xl">
                <img
                  :src="farmPic4"
                  alt="Sustainable Farm Planning"
                  class="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-[430px] mb-4 rounded-xl transition-transform duration-500 ease-in-out hover:scale-110 shadow-lg"
                />
              </div>
              <h3 class="text-lg font-semibold sm:text-xl">
                Sustainable Farm Planning
              </h3>
              <p class="text-sm text-gray-500 sm:text-base">
                Plan for long-term success with strategies that balance yield
                and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Testimonials & Founder Section -->

    <!-- Founder-team-section -->
    <section class="max-w-[1440px] mx-auto py-16 px-4 font-montserrat">
      <div
        class="flex flex-col overflow-hidden rounded-lg shadow-lg lg:flex-row lg:items-stretch"
      >
        <!-- Image Section -->
        <div class="relative w-full lg:w-1/2">
          <img
            src="/src/assets/img/farm-ceo.jpg"
            alt="Founder & CEO"
            class="h-[300px] sm:h-[380px] lg:h-full w-full object-cover"
          />

          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          ></div>

          <!-- Label -->
          <h1
            class="absolute text-sm font-medium tracking-wide text-white bottom-4 left-4 sm:text-base"
          >
            Founder & CEO
          </h1>
        </div>

        <!-- Text Section -->
        <div
          class="relative flex flex-col justify-between w-full p-6 text-white bg-green-800 lg:w-1/2 sm:p-10 lg:p-12"
        >
          <!-- Quote -->
          <h1 class="text-lg font-medium leading-relaxed sm:text-xl lg:text-xl">
            “We started this journey with a simple belief — that farming can
            feed the world without harming it. Every seed we plant, every
            partnership we build, reflects our commitment to sustainability,
            innovation, and people.”
          </h1>

          <!-- Name -->
          <h3 class="mt-6 text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Dr. Jabez Linden
          </h3>

          <!-- Button -->
          <div class="flex mt-8">
            <button
              class="relative flex items-center gap-2 px-6 py-3 overflow-hidden text-sm font-semibold transition-all border rounded-3xl bg-white/20 backdrop-blur-md border-white/30 hover:shadow-lg group"
            >
              <!-- Default Text -->
              <span
                class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <font-awesome-icon icon="leaf" class="text-xs" />
                <span>Meet our team</span>
              </span>

              <!-- Hover Text -->
              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
              >
                <font-awesome-icon icon="leaf" class="text-xs" />
                <span>Meet our team</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="max-w-[1440px] mx-auto py-20 font-montserrat">
      <!-- Small Tag -->
      <h1
        class="flex items-center gap-1 px-3 py-1 mx-8 mb-4 text-xs font-semibold border border-gray-200 rounded-full max-w-max"
      >
        <font-awesome-icon icon="leaf" class="text-xs text-green-900" />
        What our partners say
      </h1>

      <!-- Section Heading + Controls -->
      <div
        class="flex flex-col mx-8 mb-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-[500px]"
        >
          Trusted by farmers & businesses worldwide.
        </h2>

        <!-- Controls (default for large screens) -->
        <div class="hidden gap-3 lg:flex">
          <button
            @click="prevSlide"
            class="flex items-center justify-center w-10 h-10 transition border rounded-full cursor-pointer hover:bg-gray-100"
          >
            <font-awesome-icon icon="chevron-left" />
          </button>
          <button
            @click="nextSlide"
            class="flex items-center justify-center w-10 h-10 transition border rounded-full cursor-pointer hover:bg-gray-100"
          >
            <font-awesome-icon icon="chevron-right" />
          </button>
        </div>
      </div>

      <!-- Testimonials Wrapper -->
      <div class="relative px-8 overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <!-- Each Slide -->
          <div
            class="flex-shrink-0 w-full px-4 md:w-1/2 lg:w-1/3"
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div
              :class="testimonial.bg"
              class="flex flex-col justify-between h-full p-8 shadow-sm rounded-xl"
            >
              <p class="mb-4 text-sm" :class="testimonial.textColor">
                {{ testimonial.text }}
              </p>
              <div class="flex items-center mt-auto">
                <img
                  :src="testimonial.img"
                  alt=""
                  class="object-cover w-10 h-10 mr-3 rounded-full"
                />
                <div>
                  <h4 class="font-semibold" :class="testimonial.textColor">
                    {{ testimonial.name }}
                  </h4>
                  <p v-if="testimonial.role" class="text-xs text-gray-500">
                    {{ testimonial.role }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls (for smaller screens) -->
      <div class="flex justify-center gap-3 mt-6 lg:hidden sm:mt-12">
        <button
          @click="prevSlide"
          class="flex items-center justify-center w-10 h-10 transition border rounded-full cursor-pointer hover:bg-gray-100"
        >
          <font-awesome-icon icon="chevron-left" />
        </button>
        <button
          @click="nextSlide"
          class="flex items-center justify-center w-10 h-10 transition border rounded-full cursor-pointer hover:bg-gray-100"
        >
          <font-awesome-icon icon="chevron-right" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

import ceoDp from "@/assets/img/farm-ceo.jpg";
import farmGateLogo from '@/assets/img/FarmGate Africa 1 1.png';
import farmCrops from '@/assets/img/farm-crops.jpg';
import soilSampling from '@/assets/img/soil-sampling.jpg';
import farmTractor2 from '@/assets/img/farm-tractor2.jpg';
import farmerImg1 from '@/assets/img/farmer-img1.avif';
import womenFarm from '@/assets/img/Women-farm.jpg';
import farmIrrigation from '@/assets/img/farm-irrigation.jpg';
import fasoFarm from '@/assets/img/faso-farm.jpg';
import farmPic5 from '@/assets/img/farm-pic5.jpg';
import farmPic3 from '@/assets/img/farm-pic3.jpg';
import farmPic4 from '@/assets/img/farm-pic4.jpg';

const activeIndex = ref(0);

const testimonials = [
  {
    text: "Working with James has transformed the way we operate. Their sustainable approach and reliable delivery have made them an essential part of our supply chain.",
    name: "Mark Adu",
    role: "CEO of Artana",
    img: ceoDp,
    bg: "bg-gray-50",
    textColor: "text-gray-700",
  },
  {
    text: "Their team brings not only expertise but real care for the land and the farmers.",
    name: "Lisa Quaye",
    img: ceoDp,
    bg: "bg-black",
    textColor: "text-white",
  },
  {
    text: "We’ve seen measurable improvements in both crop quality and operational efficiency since partnering with them.",
    name: "Rebecca Gamor",
    img: ceoDp,
    bg: "bg-white border",
    textColor: "text-gray-700",
  },
  {
    text: "Their consistency, quality, and eco-friendly practices are unmatched in the farming industry.",
    name: "Fred Boateng",
    role: "Founder of AgroTech",
    img: ceoDp,
    bg: "bg-green-900",
    textColor: "text-white",
  },
];

const nextSlide = () => {
  if (activeIndex.value < testimonials.length - 1) {
    activeIndex.value++;
  } else {
    activeIndex.value = 0; // loop back
  }
};

const prevSlide = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  } else {
    activeIndex.value = testimonials.length - 1; // loop back
  }
};
</script>


