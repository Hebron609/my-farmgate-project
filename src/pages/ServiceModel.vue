<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[var(--primary-color)] selection:text-white relative overflow-hidden"
    :style="dynamicStyles"
  >
    <!-- Decorative Farmgate Background Patterns -->
    <div class="absolute right-0 pointer-events-none top-[650px] opacity-5 z-0">
      <img class="h-[480px] w-auto max-w-none" :src="farmGateLogo" alt="" />
    </div>
    <div class="absolute left-0 pointer-events-none top-[1400px] opacity-5 z-0">
      <img class="h-[450px] w-auto max-w-none" :src="farmGateLogo" alt="" />
    </div>

    <Header :videoVariant="2" />

    <!-- Hero Banner (informational only — no CTAs or social links) -->
    <section
      class="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden bg-black"
    >
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${heroBanner})` }"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/80"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center min-h-[520px] md:min-h-[600px] px-6 py-20 text-center"
      >
        <h1
          class="font-['Livvic'] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl reveal-slide-up"
        >
          {{ hero.title }}
        </h1>

        <h2
          class="mt-4 font-['Livvic'] text-lg font-semibold text-[#F2CB00] sm:text-xl md:text-2xl max-w-3xl reveal-slide-up"
        >
          {{ hero.subtitle }}
        </h2>

        <p
          class="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg reveal-slide-up"
        >
          {{ hero.description }}
        </p>
      </div>
    </section>

    <!-- Category Toggle Switcher -->
    <section class="relative z-20 px-6 -mt-8">
      <div class="mx-auto max-w-2xl">
        <div
          class="flex rounded-full border border-gray-200 bg-white p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          role="tablist"
          aria-label="Service category"
        >
        <button
  v-for="category in categories"
  :key="category.key"
  type="button"
  role="tab"
  :aria-selected="activeCategory === category.key"
  @click="activeCategory = category.key"
  :class="[
    'flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-3 text-xs font-semibold transition-all duration-300 cursor-pointer sm:gap-2 sm:px-5 sm:text-sm border-2',
    activeCategory === category.key
      ? `${category.activeBg} text-white border-transparent shadow-md transform scale-[1.02]`
      : `bg-stone-50 text-gray-500 border-gray-100 hover:shadow-sm ${category.hoverText} ${category.hoverBorder} ${category.hoverBg}`
  ]"
>
  <font-awesome-icon
    :icon="['fas', category.icon]"
    class="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
    aria-hidden="true"
  />
  <span>{{ category.label }}</span>
</button>
        </div>
      </div>
    </section>

    <!-- Dynamic Content -->
    <main class="w-full relative z-10 py-16 md:py-24 overflow-hidden">
      <!-- Opportunities Storefront -->
      <section id="opportunities" class="mx-auto max-w-[1440px] px-6 mb-20 md:mb-28 reveal-slide-up">
        <div class="mb-12 text-center">
          <h3
            class="font-['Livvic'] text-3xl font-bold text-black md:text-4xl lg:text-5xl mb-6"
          >
            Available investment
            <span class="text-[var(--primary-color)] transition-colors duration-300">opportunities</span>
          </h3>

          <div class="mx-auto mb-6 h-1 w-24 bg-[#F2CB00]"></div>

          <p
            class="mx-auto mt-4 max-w-2xl text-sm text-gray-500 md:text-base font-light"
          >
            Explore current {{ activeContent.label.toLowerCase() }} investment
            cycles open for participation.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="card in visibleCards"
            :key="card.id"
            class="group/card flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl reveal-stagger"
          >
            <div class="relative h-52 overflow-hidden">
              <img
                :src="card.image"
                :alt="card.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <span
                :class="[
                  'absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
                  statusBadgeClass(card.status),
                ]"
              >
                {{ card.status }}
              </span>
            </div>

            <div class="flex flex-1 flex-col p-6">
              <div class="flex items-baseline justify-between gap-4 mb-4">
                <h4
                  class="font-['Livvic'] text-xl font-bold text-black group-hover/card:text-[var(--primary-color)] transition-colors duration-300 flex flex-wrap items-baseline gap-1.5"
                >
                  <span>{{ card.title }}</span>
                  <span
                    v-if="card.variety"
                    class="font-['Montserrat'] text-xs font-semibold text-gray-400 group-hover/card:text-gray-500 transition-colors"
                  >
                    ({{ card.variety }})
                  </span>
                </h4>

                <a
                  :href="`/opportunity-detail?id=${card.opportunityId}&ref=${props.serviceModel}`"
                  class="shrink-0 flex items-center gap-1 text-xs font-bold text-[var(--primary-color)] hover:opacity-85 transition-opacity"
                >
                  Learn more
                  <font-awesome-icon
                    :icon="['fas', 'chevron-right']"
                    class="h-2.5 w-2.5 transition-transform group-hover/card:translate-x-0.5"
                  />
                </a>
              </div>

              <dl class="divide-y divide-gray-100 text-sm">
                <div class="flex items-start justify-between gap-4 pb-3">
                  <dt class="text-gray-400 font-medium">Price</dt>
                  <dd class="font-bold text-black text-right">
                     {{ card.pricePerUnit }}
                  </dd>
                </div>
                <div class="flex items-start justify-between gap-4 py-3">
                  <dt class="text-gray-400 font-medium">Duration</dt>
                  <dd class="font-semibold text-gray-800 text-right">
                    {{ card.cycle }}
                  </dd>
                </div>
                <div class="flex items-start justify-between gap-4 py-3">
                  <dt class="text-gray-400 font-medium">Investment Window</dt>
                  <dd class="font-semibold text-gray-800 text-right">
                    {{ card.investmentWindow }}
                  </dd>
                </div>
                <div class="flex items-start justify-between gap-4 py-3">
                  <dt class="text-gray-400 font-medium">Est. ROI</dt>
                  <dd class="font-semibold text-[var(--primary-color)] text-right transition-colors duration-300">
                    {{ card.expectedRoi }}
                  </dd>
                </div>
                <div class="flex items-start justify-between gap-4 pt-3">
                  <dt class="text-gray-400 font-medium">Location</dt>
                  <dd class="font-semibold text-gray-800 text-right">
                    {{ card.location }}
                  </dd>
                </div>
              </dl>

              <!-- Invest Button Wrapper -->
              <div v-if="!isClosed(card.status)" class="relative mt-6 w-full max-w-[320px] mx-auto group/pulse">
                <!-- Pulsating Ripple Effect matching homepage button -->
                <div
                  class="absolute inset-0 z-0 w-full h-full rounded-full pointer-events-none bg-[var(--primary-color)] animate-solid-pulse"
                ></div>
                <button
                  type="button"
                  @click="handleInvest(card)"
                  class="relative z-10 w-full group/btn overflow-hidden inline-flex items-center justify-center rounded-full py-3 bg-[var(--primary-color)] text-white transition-all duration-300 hover:shadow-xl active:scale-[0.97] text-sm font-semibold cursor-pointer"
                >
                  <span
                    class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover/btn:-translate-y-full text-sm font-semibold text-white"
                  >
                    Invest now
                    <font-awesome-icon
                      :icon="['fas', 'arrow-right']"
                      class="h-3.5 w-3.5 text-white transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>

                  <span
                    class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black bg-[#F2CB00] transition-transform duration-300 transform translate-y-full group-hover/btn:translate-y-0 text-sm font-semibold"
                  >
                    Invest now
                    <font-awesome-icon
                      :icon="['fas', 'arrow-right']"
                      class="h-3.5 w-3.5 text-black"
                      aria-hidden="true"
                    />
                  </span>
                </button>
              </div>

              <!-- Closed Status Button -->
              <button
                v-else
                type="button"
                disabled
                class="mt-6 w-full max-w-[320px] mx-auto inline-flex items-center justify-center rounded-full py-3 bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed text-sm font-semibold"
              >
                <span class="flex items-center gap-2 text-sm font-semibold text-gray-400">
                  Closed
                  <font-awesome-icon
                    :icon="['fas', 'lock']"
                    class="h-3.5 w-3.5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </div>
          </article>
        </div>

        <!-- Load More / Show Less -->
        <div
          v-if="activeContent.cards.length > PAGE_SIZE"
          class="mt-12 flex flex-col items-center gap-3"
        >
          <!-- Count indicator -->
          <p class="text-xs font-semibold text-gray-400">
            Showing {{ visibleCards.length }} of {{ activeContent.cards.length }} investment opportunities
          </p>

          <!-- Load More button -->
          <div v-if="!allVisible" class="relative group/pulse">
            <div
              class="absolute inset-0 z-0 rounded-full pointer-events-none bg-neutral-700 group-hover/pulse:bg-[#FCE34D] transition-colors duration-300 animate-load-more-pulse"
            ></div>
            <button
              type="button"
              @click="loadMore"
              class="group/btn relative z-10 overflow-hidden inline-flex items-center gap-2.5 rounded-full bg-black px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-xl active:scale-[0.98] cursor-pointer"
            >
              <span class="flex items-center gap-2 transition-transform duration-300 group-hover/btn:-translate-y-full">
                Load more
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span class="absolute inset-0 flex items-center justify-center gap-2 bg-[#F2CB00] text-black font-bold text-sm transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0">
                Load more
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </button>
          </div>

          <!-- Show Less button (when all are visible) -->
          <button
            v-else
            type="button"
            @click="showLess"
            class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-600 shadow-sm transition-all duration-200 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] cursor-pointer"
          >
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="h-3 w-3" aria-hidden="true" />
            Show less
          </button>
        </div>
      </section>

      <!-- How It Works -->
      <section class="mx-auto max-w-[1440px] px-6 mb-20 md:mb-28 reveal-slide-up">
        <div class="mb-12 text-center">
          <h3
            class="font-['Livvic'] text-3xl font-bold text-black md:text-4xl lg:text-5xl mb-6"
          >
            How it <span class="text-[var(--primary-color)] transition-colors duration-300">works</span>
          </h3>

          <div class="mx-auto mb-6 h-1 w-24 bg-[#F2CB00]"></div>
        </div>

        <div class="relative">
          <div
            class="absolute top-10 left-[10%] right-[10%] hidden h-0.5 bg-[#F2CB00]/40 lg:block"
            aria-hidden="true"
          ></div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div
              v-for="(step, index) in activeContent.steps"
              :key="step.title"
              class="relative flex flex-col items-center text-center reveal-stagger"
            >
              <div
                class="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#F2CB00] bg-white shadow-lg"
              >
                <span class="font-['Livvic'] text-2xl font-bold text-[var(--primary-color)] transition-colors duration-300">
                  {{ index + 1 }}
                </span>
              </div>
              <h4 class="mb-2 font-['Livvic'] text-lg font-bold text-black">
                {{ step.title }}
              </h4>
              <p
                class="max-w-[220px] text-sm leading-relaxed text-gray-500 font-light"
              >
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Value Proposition -->
      <section class="relative w-full reveal-slide-up py-4">
        <!-- Decorative Background Pattern spanning across the right side of the screen -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-5 z-0">
          <img class="h-[460px] w-auto max-w-none" :src="farmGateLogo" alt="" />
        </div>
        <div class="absolute left-0 bottom-0 pointer-events-none opacity-5 z-0">
          <img class="h-[360px] w-auto max-w-none" :src="farmGateLogo" alt="" />
        </div>

        <div class="mx-auto max-w-[1440px] px-6 relative z-10">
          <div class="mb-12 text-center">
            <h3
              class="font-['Livvic'] text-3xl font-bold text-black md:text-4xl lg:text-5xl mb-6"
            >
              Why choose our
              <span class="text-[var(--primary-color)] transition-colors duration-300">{{ activeContent.label }}</span>
              investment model
            </h3>

            <div class="mx-auto mb-6 h-1 w-24 bg-[#F2CB00]"></div>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="prop in activeContent.valueProps"
              :key="prop.title"
              class="group relative rounded-[2rem] border border-gray-100 bg-stone-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-light-color)] hover:shadow-xl reveal-stagger"
            >
              <div
                class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-color)] text-white transition-all duration-300 group-hover:scale-105"
              >
                <img
                  v-if="prop.image"
                  :src="prop.image"
                  :alt="prop.title"
                  class="h-8 w-8 object-contain"
                />
                <font-awesome-icon
                  v-else
                  :icon="['fas', prop.icon]"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <h4
                class="mb-3 font-['Livvic'] text-xl font-bold text-black group-hover:text-[var(--primary-color)] transition-colors duration-300"
              >
                {{ prop.title }}
              </h4>
              <p class="text-sm leading-relaxed text-gray-500 font-light">
                {{ prop.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AuthRedirectModal :show="isRedirectingToLogin" :opportunityName="redirectOpportunityName" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AuthRedirectModal from "@/components/AuthRedirectModal.vue";

const isRedirectingToLogin = ref(false);
const redirectOpportunityName = ref("");

import heroBannerInvest from "@/assets/img/invest1.jpg";
import farmGateLogo from "@/assets/img/FARMGATE PATTERN _GREEN.png";
import heroBannerFarm from "@/assets/img/faso-farm.jpg";
import okraImg from "@/assets/img/okra1.jpg";
import onionImg from "@/assets/img/onion.jpg";
import yamImg from "@/assets/img/yam1.webp";
import maizeImg from "@/assets/img/maize.jpg";
import cassavaImg from "@/assets/img/cassava1.jpg";
import pepperImg from "@/assets/img/pepper-farm.jpg";
import riceImg from "@/assets/img/rice1.jpg";
import tomatoImg from "@/assets/img/tomato.jpg";
import soybeanImg from "@/assets/img/farm-crops.jpg";
import poultryImg from "@/assets/img/farm-pic4.webp";
import cattleImg from "@/assets/img/farm-tractor2.webp";
import catfishImg from "@/assets/img/catfish1.png";
import tilapiaImg from "@/assets/img/tilapia1.avif";

const props = defineProps({
  serviceModel: {
    type: String,
    default: "invest",
    validator: (value) => ["invest", "farm"].includes(value),
  },
});

const activeCategory = ref("crop");

const themeColors = computed(() => {
  switch (activeCategory.value) {
    case "livestock":
      return {
        primary: "#a15c1b",
        light: "#f5e6d3",
      };
    case "fishFarming":
      return {
        primary: "#058fc8",
        light: "#e0f2fe",
      };
    case "crop":
    default:
      return {
        primary: "#129C48",
        light: "#dcfce7",
      };
  }
});

const dynamicStyles = computed(() => {
  return {
    "--primary-color": themeColors.value.primary,
    "--primary-light-color": themeColors.value.light,
  };
});

const categories = [
  { 
    key: "crop", 
    label: "Crop", 
    icon: "seedling", 
    activeBg: "bg-[#129C48]", 
    hoverText: "hover:text-[#129C48]",
    hoverBorder: "hover:border-[#129C48]/30",
    hoverBg: "hover:bg-[#129C48]/5"
  },
  { 
    key: "livestock", 
    label: "Livestock", 
    icon: "cow", 
    activeBg: "bg-[#a15c1b]", 
    hoverText: "hover:text-[#a15c1b]",
    hoverBorder: "hover:border-[#a15c1b]/30",
    hoverBg: "hover:bg-[#a15c1b]/5"
  },
  { 
    key: "fishFarming", 
    label: "Fishery", 
    icon: "fish", 
    activeBg: "bg-[#058fc8]", 
    hoverText: "hover:text-[#058fc8]",
    hoverBorder: "hover:border-[#058fc8]/30",
    hoverBg: "hover:bg-[#058fc8]/5"
  },
];

const heroContent = {
  invest: {
    title: "Invest with us",
    subtitle: "For Guaranteed Crop Returns (GCR)",
    description:
      "This works on a grow-for-me model where potential investors have an opportunity to invest in a crop production for each cycle for a seasonal return on investment.",
  },
  farm: {
    title: "Farm with us",
    subtitle: "For Managed Farm Services (MFS)",
    description:
      "This model is perfectly designed to suit absentee investor farmers who are interested in alternate investment options for good medium-long term returns — lease an area of our arable serviced farm estate, facilities and labour resources for all your crop farming venture needs.",
  },
};

const hero = computed(() => heroContent[props.serviceModel]);

const heroBanner = computed(() =>
  props.serviceModel === "invest" ? heroBannerInvest : heroBannerFarm,
);

const dbModels = {
  crop: {
    label: "Crop",
    valueProps: [
      {
        title: "Secured Capital",
        icon: "money-bill-wave",
        description:
          "Your investment is protected through structured farm partnerships and transparent financial oversight.",
      },
      {
        title: "Smart Farming Technology",
        icon: "microchip",
        description:
          "Modern equipment and precision tools drive efficiency across every stage of the production cycle.",
      },
      {
        title: "Standardized Processes",
        icon: "clipboard-list",
        description:
          "Consistent agronomic protocols ensure quality control from land preparation through harvest.",
      },
      {
        title: "Good Yield",
        icon: "chart-line",
        description:
          "Data-driven crop management and expert supervision maximize productivity and returns.",
      },
    ],
    steps: [
      {
        title: "Select a Crop",
        description:
          "Choose from available crop cycles matched to season, soil profile, and projected returns.",
      },
      {
        title: "Invest & Monitor",
        description:
          "Fund your selected units and track progress through our managed farm operations platform.",
      },
      {
        title: "Harvest",
        description:
          "Our team manages harvesting, grading, and off-take at the end of each production cycle.",
      },
      {
        title: "Earn ROI",
        description:
          "Receive returns based on agreed cycle performance after successful harvest and sales.",
      },
      {
        title: "Farm Again",
        description:
          "Re-invest your accumulated returns or a portion of your capital into a brand new cycle.",
      },
    ],
    cards: [
      {
        id: 1,
        opportunityId: "crop-1",
        title: "Okra",
        variety: "Lady Finger",
        status: "Open",
        pricePerUnit: "GHS 950.00 / Unit",
        cycle: "4 Month Cycle",
        investmentWindow: "June 1 – June 30, 2026",
        expectedRoi: "13% - 17%",
        location: "Ahafo Region, Ghana",
        image: okraImg,
      },
      {
        id: 2,
        opportunityId: "crop-2",
        title: "Onion",
        variety: "Bawku Red",
        status: "Closed",
        pricePerUnit: "GHS 720.00 / Unit",
        cycle: "6 Month Cycle",
        investmentWindow: "Jan 10 – Feb 10, 2026",
        expectedRoi: "12% - 16%",
        location: "Eastern Region, Ghana",
        image: onionImg,
      },
      {
        id: 3,
        opportunityId: "crop-3",
        title: "Yam",
        variety: "Pona",
        status: "Open",
        pricePerUnit: "GHS 1,100.00 / Unit",
        cycle: "6 Month Cycle",
        investmentWindow: "June 5 – July 5, 2026",
        expectedRoi: "15% - 19%",
        location: "Volta Region, Ghana",
        image: yamImg,
      },
      {
        id: 4,
        opportunityId: "crop-4",
        title: "Maize",
        variety: "Obaatanpa",
        status: "Open",
        pricePerUnit: "GHS 680.00 / Unit",
        cycle: "4Month Cycle",
        investmentWindow: "June 1 – June 30, 2026",
        expectedRoi: "12% - 16%",
        location: "Brong-Ahafo Region, Ghana",
        image: maizeImg,
      },
      {
        id: 5,
        opportunityId: "crop-5",
        title: "Cassava",
        variety: "Bankye Hemaa",
        status: "Open",
        pricePerUnit: "GHS 540.00 / Unit",
        cycle: "9 Month Cycle",
        investmentWindow: "July 1 – July 31, 2026",
        expectedRoi: "14% - 18%",
        location: "Central Region, Ghana",
        image: cassavaImg,
      },
      {
        id: 6,
        opportunityId: "crop-6",
        title: "Pepper",
        variety: "Scotch Bonnet",
        status: "Closed",
        pricePerUnit: "GHS 810.00 / Unit",
        cycle: "3 Month Cycle",
        investmentWindow: "Feb 1 – Feb 28, 2026",
        expectedRoi: "11% - 15%",
        location: "Upper East Region, Ghana",
        image: pepperImg,
      },
      {
        id: 7,
        opportunityId: "crop-7",
        title: "Rice",
        variety: "AGRA Aromatic",
        status: "Open",
        pricePerUnit: "GHS 870.00 / Unit",
        cycle: "5 Month Cycle",
        investmentWindow: "July 1 – July 31, 2026",
        expectedRoi: "13% - 17%",
        location: "Northern Region, Ghana",
        image: riceImg,
      },
      {
        id: 8,
        opportunityId: "crop-8",
        title: "Tomato",
        variety: "Pectomech",
        status: "Open",
        pricePerUnit: "GHS 640.00 / Unit",
        cycle: "3Month Cycle",
        investmentWindow: "Aug 1 – Aug 31, 2026",
        expectedRoi: "12% - 15%",
        location: "Greater Accra Region, Ghana",
        image: tomatoImg,
      },
      {
        id: 9,
        opportunityId: "crop-9",
        title: "Soybean",
        variety: "Jenguma",
        status: "Open",
        pricePerUnit: "GHS 565.00 / Unit",
        cycle: "4 Month Cycle",
        investmentWindow: "June 20 – July 20, 2026",
        expectedRoi: "10% - 14%",
        location: "Upper West Region, Ghana",
        image: soybeanImg,
      },
    ],
  },
  livestock: {
    label: "Livestock",
    valueProps: [
      {
        title: "Healthy Breeds",
        icon: "heart",
        description:
          "Access to premium lineages selected for resilience and market performance.",
      },
      {
        title: "Feed Management",
        icon: "seedling",
        description:
          "Optimized nutritional plans tailored to each breed and growth stage.",
      },
      {
        title: "Biosecurity Protocols",
        icon: "shield-alt",
        description:
          "Strict sanitary controls protect herd health and reduce operational risk.",
      },
      {
        title: "Optimized Growth",
        icon: "chart-line",
        description:
          "Managed environments and veterinary oversight accelerate healthy development.",
      },
    ],
    steps: [
      {
        title: "Select Breed",
        description:
          "Choose a livestock portfolio aligned with your investment horizon and return targets.",
      },
      {
        title: "Fund Securely",
        description:
          "Allocate capital to verified units with full transparency on costs and timelines.",
      },
      {
        title: "Track Progress",
        description:
          "Monitor growth milestones, health metrics, and operational updates throughout the cycle.",
      },
      {
        title: "Market Access",
        description:
          "Benefit from established off-take channels and structured sales at cycle completion.",
      },
      {
        title: "Farm Again",
        description:
          "Re-invest your accumulated returns or a portion of your capital into a brand new cycle.",
      },
    ],
    cards: [
      {
        id: 1,
        opportunityId: "livestock-1",
        title: "Poultry",
        variety: "Broiler",
        status: "Closed",
        pricePerUnit: "GHS 550.00 / Unit",
        cycle: "8 Week Cycle",
        investmentWindow: "Feb 1 – Feb 28, 2026",
        expectedRoi: "11% - 15%",
        location: "Kasoa, Central Region",
        image: poultryImg,
      },
      {
        id: 2,
        opportunityId: "livestock-2",
        title: "Cattle",
        variety: "Sokoto Gudali",
        status: "Open",
        pricePerUnit: "GHS 2,400.00 / Unit",
        cycle: "6 Month Cycle",
        investmentWindow: "June 10 – July 15, 2026",
        expectedRoi: "16% - 21%",
        location: "Afram Plains, Eastern Region",
        image: cattleImg,
      },
    ],
  },
  fishFarming: {
    label: "Fish Farming",
    valueProps: [
      {
        title: "Water Quality Control",
        icon: "droplet",
        description:
          "Continuous monitoring of ponds and cages ensures optimal conditions for healthy fish stock.",
      },
      {
        title: "Healthy Stock",
        icon: "fish",
        description:
          "Certified fingerlings and juveniles sourced from verified hatcheries for strong growth rates.",
      },
      {
        title: "Biosecurity Protocols",
        icon: "shield-alt",
        description:
          "Strict pond management and sanitary controls reduce disease risk across production cycles.",
      },
      {
        title: "Market-Ready Harvest",
        icon: "truck",
        image: "/images/market-entry-strategy.png",
        description:
          "Structured off-take and processing partnerships deliver returns at peak market demand.",
      },
    ],
    steps: [
      {
        title: "Select Stock",
        description:
          "Choose a fish farming portfolio — catfish, tilapia, or mixed aquaculture cycles.",
      },
      {
        title: "Fund Securely",
        description:
          "Allocate capital to verified pond or cage units with transparent cost breakdowns.",
      },
      {
        title: "Monitor Growth",
        description:
          "Track feeding schedules, water quality, and biomass growth throughout the cycle.",
      },
      {
        title: "Harvest & Earn",
        description:
          "Receive returns after harvest, grading, and sale through established market channels.",
      },
      {
        title: "Farm Again",
        description:
          "Re-invest your accumulated returns or a portion of your capital into a brand new cycle.",
      },
    ],
    cards: [
      {
        id: 1,
        opportunityId: "fish-1",
        title: "Catfish",
        variety: "Clarias Gariepinus",
        status: "Closed",
        pricePerUnit: "GHS 680.00 / Unit",
        cycle: "5 Month Cycle",
        investmentWindow: "Mar 1 – Mar 31, 2026",
        expectedRoi: "14% - 18%",
        location: "Aveyime, Volta Region",
        image: catfishImg,
      },
      {
        id: 2,
        opportunityId: "fish-2",
        title: "Tilapia",
        variety: "Nile Tilapia",
        status: "Open",
        pricePerUnit: "GHS 1,850.00 / Unit",
        cycle: "6 Month Cycle",
        investmentWindow: "June 1 – June 30, 2026",
        expectedRoi: "15% - 20%",
        location: "Akuse, Volta Region",
        image: tilapiaImg,
      },
    ],
  },
};

const activeContent = computed(() => dbModels[activeCategory.value]);

// ── Pagination ────────────────────────────────────────────────────────────────
const PAGE_SIZE = 6;
const visibleCount = ref(PAGE_SIZE);

// Reset count whenever the user switches category
watch(activeCategory, () => { visibleCount.value = PAGE_SIZE; });

const visibleCards = computed(() =>
  activeContent.value.cards.slice(0, visibleCount.value)
);
const allVisible = computed(() =>
  visibleCount.value >= activeContent.value.cards.length
);
const loadMore = () => {
  visibleCount.value = Math.min(
    visibleCount.value + PAGE_SIZE,
    activeContent.value.cards.length
  );
};
const showLess = () => {
  visibleCount.value = PAGE_SIZE;
  // Scroll back up to the section
  document.getElementById("opportunities")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const statusBadgeClass = (status) => {
  const normalized = status.toLowerCase();
  if (normalized === "open") {
    return "bg-[#F2CB00] text-black shadow-sm font-bold";
  }
  if (normalized === "closed" || normalized === "close") {
    return "bg-[#E53E3E] text-white shadow-sm border border-red-500/20 font-bold";
  }
  return "bg-gray-600 text-white font-bold";
};

const isClosed = (status) => {
  const normalized = status.toLowerCase();
  return normalized === "closed" || normalized === "close";
};

const handleInvest = (card) => {
  const opportunityName = card.variety ? `${card.title} (${card.variety})` : card.title;
  const params = new URLSearchParams({
    opportunity: opportunityName,
    category: activeContent.value.label,
    model: props.serviceModel,
  });
  const targetUrl = `/schedule-call?${params.toString()}`;

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    isRedirectingToLogin.value = true;
    redirectOpportunityName.value = opportunityName;
    setTimeout(() => {
      window.location.href = `/login?redirect=${encodeURIComponent(targetUrl)}`;
    }, 3500);
    return;
  }

  window.location.href = targetUrl;
};

const goBackToHome = () => {
  sessionStorage.setItem("activateVideo2", "true");
  window.location.href = "/?v=2";
};

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

onMounted(() => {
  // Scroll to #opportunities if navigated back from opportunity detail
  if (window.location.hash === "#opportunities") {
    setTimeout(() => {
      const el = document.getElementById("opportunities");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }

  // When leaving service-model back to home, always restore Video 2 hero
  // by intercepting any logo/home link clicks in the header
  const homeLinks = document.querySelectorAll('a[href="/"]');
  homeLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("activateVideo2", "true");
      window.location.href = "/?v=2";
    });
  });

  const api = initScrollReveal();
  if (!api) return;

  api.reveal(".reveal-slide-up", {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 200,
  });
  api.reveal(".reveal-stagger", {
    ...revealEffects.stagger,
    duration: 600,
    interval: 120,
    delay: 100,
  });
});
</script>

<style scoped>
@keyframes pulseAnimateSolid {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1.05, 1.35);
    opacity: 0;
  }
}

.animate-solid-pulse {
  animation: pulseAnimateSolid 1.2s ease-out infinite;
}

@keyframes pulseAnimateLoadMore {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1.10, 1.22);
    opacity: 0;
  }
}

.animate-load-more-pulse {
  animation: pulseAnimateLoadMore 1.2s ease-out infinite;
}
</style>
