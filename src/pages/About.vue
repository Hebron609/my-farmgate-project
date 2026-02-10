<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <div class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${aboutUsBanner})` }"
      ></div>

       <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/70 animate-pulse"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/90 animate-ping"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/80 animate-pulse"
      ></div>

      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon
            class="mx-auto mb-6 h-16 w-16 text-[#F2CB00] animate-pulse"
          />

          <h1
            class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight"
          >
            OUR <br />
            <span class="text-[#129C48]">STORY.</span>
          </h1>
        </div>

        <p
          class="max-w-2xl mt-8 text-lg font-light leading-relaxed text-gray-300 delay-200 md:text-lg reveal-slide-up"
        >
          Redefining agriculture at a global scale.
        </p>

        <div class="absolute bottom-10 animate-bounce">
          <svg
            class="w-8 h-8 text-white opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>

    <section class="w-full px-6 py-24 bg-black md:py-40">
      <div class="max-w-5xl mx-auto text-center reveal-fade">
        <h2
          class="font-['Livvic'] text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          "We started this journey with a simple belief — that farming can feed
          the world
          <span
            class="text-[#129C48] decoration-[#F2CB00] underline decoration-4 underline-offset-8"
            >without harming it.</span
          >"
        </h2>
        <p
          class="max-w-3xl mx-auto mt-12 text-xl font-light leading-relaxed text-gray-400"
        >
          Every seed we plant, every partnership we build, reflects our
          commitment to sustainability, innovation, and people.
        </p>
      </div>
    </section>

    <section class="w-full px-6 py-24 bg-white md:px-12">
      <div
        class="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24 items-start"
      >
        <div class="reveal-slide-right">
          <h3
            class="font-['Livvic'] text-[#129C48] text-xl font-bold uppercase tracking-widest mb-4"
          >
            About Us
          </h3>
          <h4
            class="font-['Livvic'] text-3xl md:text-4xl font-bold text-black leading-tight mb-8"
          >
            Producers of high-quality farm products across the value chain.
          </h4>

          <div
            class="space-y-6 font-normal leading-relaxed prose prose-lg text-gray-600"
          >
            <p>
              We operate our own farms and also small-holder farmers in adopting
              best practices to bring out quality high-yielding produce. We turn
              these into quality value-added agricultural products for a ready
              market and supply raw material to feed industries.
            </p>
            <p>
              Currently, we grow diverse varieties of farm products and work
              hard to bring out the best value-added products from any produce
              we can find.
            </p>
            <p>
              At FarmGate Africa, we create opportunities that enable
              agribusinesses, food manufacturers, NGOs, Governments and Policy
              Analysts globally to intelligently foster sustainable farming
              initiatives while creating lasting gains for farmers everywhere
              through our innovative agri-tech platforms.
            </p>
            <p>
              Currently, we are partnering with various stakeholders to address
              food insecurity in Africa. Our focal areas are Smart Farming &
              AgriTech, Horticulture, Animal Husbandry, Aquaculture, Food
              Processing, Agri-Advisory and Training.
            </p>
          </div>
        </div>

        <div class="relative h-full min-h-[500px] w-full reveal-slide-left">
          <div class="w-full h-full overflow-hidden bg-gray-100 rounded-2xl">
            <img
              :src="farmPic9"
              alt="Farm Operations"
              class="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
          </div>

          <div
            class="absolute -bottom-12 md:bottom-12 left-6 right-6 rounded-xl bg-white p-8 shadow-2xl border-l-8 border-[#F2CB00]"
          >
            <h4 class="font-['Livvic'] text-xl font-bold text-black mb-2">
              Our 5-Year Strategic Plan:
              <span class="text-[#129C48]"
                >2030 Vision for Shared Prosperity</span
              >
            </h4>
            <p class="text-sm leading-relaxed text-gray-600">
              Helping the farmers grow their wealth. We provide farmers with
              access to quality inputs, tools, working capital financing,
              training, agronomist technical assistance support, market access
              and agritech solutions they can translate into sustainable gains
              and decent living incomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full px-6 py-32 bg-gray-50 md:px-12">
      <div class="mx-auto max-w-[1440px]">
        <div class="grid items-end grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          <div>
            <h2 class="font-['Livvic'] text-5xl font-bold text-black mb-6">
              What We Do
            </h2>
            <div class="h-1 w-24 bg-[#F2CB00]"></div>
          </div>
          <p class="text-lg text-gray-600">
            We partner with farmers and communities in Ghana to help the farmer
            grow more, sell more, connect more, protect the planet, and empower
            those behind each harvest.
          </p>
        </div>

        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger"
        >
          <div
            v-for="(item, index) in impacts"
            :key="index"
            class="relative p-8 overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-2xl hover:-translate-y-2 hover:shadow-xl"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#129C48] to-[#0a3f1f] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div class="relative z-10">
              <div
                class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-[#129C48] transition-colors group-hover:bg-white group-hover:text-[#129C48]"
              >
                <font-awesome-icon :icon="['fas', item.iconName]" size="lg" />
              </div>
              <p
                class="font-['Montserrat'] text-xl font-medium text-gray-900 transition-colors group-hover:text-white"
              >
                {{ item.title }}
              </p>
              <div
                class="mt-4 h-1 w-12 bg-[#F2CB00] transition-all group-hover:w-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full px-4 py-24 overflow-hidden bg-white md:px-12">
      <div class="mx-auto max-w-[1440px]">
        <div class="flex flex-col items-center mb-16">
          <h2
            class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black mb-6 text-center"
          >
            Strategic Initiatives
          </h2>
          <div class="h-1 w-24 bg-[#F2CB00]"></div>
        </div>

        <!-- Mobile: Grid Layout -->
        <div class="grid grid-cols-1 gap-6 md:hidden">
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="relative overflow-hidden rounded-[2rem] bg-cover bg-center"
            :style="{ backgroundImage: `url(${item.image})` }"
          >
            <div class="absolute inset-0 bg-black/40"></div>
            <div
              class="relative z-10 flex flex-col items-center justify-center p-6 text-center min-h-[300px]"
            >
              <h4
                class="font-['Livvic'] text-xl font-bold text-white uppercase tracking-widest drop-shadow-lg mb-4"
              >
                {{ item.title }}
              </h4>
              <p
                class="font-['Montserrat'] text-sm font-medium text-gray-100 mb-4 max-w-sm"
              >
                {{ item.description }}
              </p>
              <button
                @click="navigateToVideo2"
                class="relative flex items-center px-4 py-2 mx-auto overflow-hidden cursor-pointer backdrop-blur-md bg-white/25 rounded-4xl"
              >
                <span
                  class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <LeafIcon class="w-4 h-4 text-white" />
                  <span class="text-xs font-semibold leading-none text-white"
                    >Start growing with us</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-black" />
                  <span class="text-xs font-semibold leading-none"
                    >Start growing with us</span
                  >
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Desktop: Accordion/Flex Layout -->
        <div
          class="hidden md:flex h-[400px] md:h-[500px] w-full flex-col md:flex-row gap-4 md:gap-6"
        >
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="group relative flex-1 cursor-pointer overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3]"
          >
            <div
              class="absolute inset-0 h-full w-full bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:blur-[3px]"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>

            <div
              class="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover:bg-black/40"
            ></div>

            <div
              class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
              <h4
                class="translate-y-0 transform font-['Livvic'] text-xl md:text-2xl font-bold text-white uppercase tracking-widest drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-4"
              >
                {{ item.title }}
              </h4>

              <div
                class="max-w-md transition-all duration-500 delay-100 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p
                  class="font-['Montserrat'] text-sm md:text-base font-medium text-gray-100"
                >
                  {{ item.description }}
                </p>
                <button
                  @click="navigateToVideo2"
                  class="relative items-center px-4 py-2 mx-auto mt-4 overflow-hidden cursor-pointer button-group rounded-4xl"
                  style="display: inline-flex; align-items: center"
                >
                  <!-- Background layers -->
                  <span
                    class="absolute inset-0 transition-opacity duration-300 opacity-100 white-bg bg-white/25 backdrop-blur-md rounded-4xl"
                  ></span>
                  <span
                    class="absolute inset-0 transition-opacity duration-300 bg-yellow-400 opacity-0 yellow-bg rounded-4xl"
                  ></span>

                  <!-- White text content -->
                  <span
                    class="relative z-10 flex items-center gap-2 transition-opacity duration-300 opacity-100 white-text"
                  >
                    <LeafIcon class="w-4 h-4 text-white" />
                    <span class="text-xs font-semibold leading-none text-white"
                      >Start growing with us</span
                    >
                  </span>

                  <!-- Black text content (for yellow background) -->
                  <span
                    class="absolute inset-0 z-20 flex items-center justify-center gap-2 text-black transition-opacity duration-300 opacity-0 black-text rounded-4xl"
                  >
                    <LeafIcon class="w-4 h-4 text-black" />
                    <span class="text-xs font-semibold leading-none"
                      >Start growing with us</span
                    >
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--<GrowWithUs />-->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.1,
});

const navigateToVideo2 = () => {
  sessionStorage.setItem("activateVideo2", "true");
  window.location.href = "/";
};

onMounted(() => {
  const api = initScrollReveal();
  if (!api) return;
  api.reveal(".reveal-fade", { ...revealEffects.fade, duration: 900 });
  api.reveal(".reveal-slide-up", { ...revealEffects.slideUp, duration: 800 });
  api.reveal(".reveal-slide-left", {
    ...revealEffects.slideLeft,
    duration: 800,
  });
  api.reveal(".reveal-slide-right", {
    ...revealEffects.slideRight,
    duration: 800,
  });
  api.reveal(".reveal-stagger", {
    ...revealEffects.stagger,
    duration: 600,
    interval: 100,
  });
});

const impacts = ref([
  { title: "Enhance Productivity", iconName: "chart-line" },
  { title: "Increase incomes", iconName: "money-bill-wave" },
  { title: "Connect farmers to markets", iconName: "handshake" },
  { title: "Increase access to finance", iconName: "university" },
  { title: "Protect ecosystem", iconName: "shield-alt" },
  { title: "Act on climate changes", iconName: "cloud-sun" },
  { title: "Empower women & youth for job creation", iconName: "users" },
  {
    title: "Boost food security & Strengthen supply chain systems",
    iconName: "truck",
  },
  {
    title: "Provide CBTM support for FBO and co-operatives/FGO",
    iconName: "chalkboard-teacher",
  },
]);

// Image Imports
import aboutUsBanner from "@/assets/img/about-us-banner.jpg";
import farmPic9 from "@/assets/img/farm-pic9.jpg";
import farmPic1 from "@/assets/img/farm-pic1.jpg";
import farmPic2 from "@/assets/img/farm-pic2.jpg";
import farmPic3 from "@/assets/img/farm-pic3.jpg";

// Gallery Data
const galleryItems = ref([
  {
    title: "Sustainable Growth",
    description:
      "Implementing eco-friendly practices to ensure long-term agricultural viability.",
    image: farmPic1,
  },
  {
    title: "Community Power",
    description:
      "Empowering local farmers with the tools and knowledge to succeed together.",
    image: farmPic2,
  },
  {
    title: "Future Innovation",
    description:
      "Leveraging technology to revolutionize food production across Africa.",
    image: farmPic3,
  },
]);
</script>

<style scoped>
/* Ensure smooth flex transitions for the accordion effect */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button hover animation */
.button-group:hover .white-bg {
  opacity: 0;
}

.button-group:hover .yellow-bg {
  opacity: 1;
}

.button-group:hover .white-text {
  opacity: 0;
  pointer-events: none;
}

.button-group:hover .black-text {
  opacity: 1;
}
</style>
