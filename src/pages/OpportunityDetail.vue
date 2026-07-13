<template>
  <div
    :class="['w-full min-h-screen bg-white font-[Montserrat] selection:text-white relative overflow-hidden', categoryTheme.selection]"
  >
    <!-- Decorative Background Patterns -->
    <div class="absolute right-0 pointer-events-none top-[100px] opacity-5 z-0">
      <img class="h-[480px] w-auto max-w-none" :src="farmGateLogo" alt="" />
    </div>
    <div class="absolute left-0 pointer-events-none bottom-[100px] opacity-5 z-0">
      <img class="h-[450px] w-auto max-w-none" :src="farmGateLogo" alt="" />
    </div>

    <Header :videoVariant="2" :forceScrolled="true" />

    <main class="mx-auto max-w-[1440px] px-4 pt-24 pb-10 sm:px-6 lg:px-10 lg:pt-28 lg:pb-14 relative z-10">

      <!-- Back Button -->
      <button
        type="button"
        @click="goBack"
        :class="['group mb-8 flex items-center gap-2.5 text-sm font-semibold text-gray-600 transition-colors duration-200 cursor-pointer', categoryTheme.hoverText]"
      >
        <span
          :class="['flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all duration-200', categoryTheme.groupHoverBorder, categoryTheme.groupHoverBg]"
        >
          <font-awesome-icon
            :icon="['fas', 'arrow-left']"
            class="h-3.5 w-3.5"
          />
        </span>
        {{ backButtonLabel }}
      </button>

      <!-- Two-Column Grid -->
      <div
        v-if="opportunity"
        class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 reveal-slide-up"
      >

        <!-- ── LEFT COLUMN: Media (7 cols) ───────────────────────────── -->
        <div class="lg:col-span-7">
          <div
            class="group relative w-full overflow-hidden rounded-[2rem] bg-gray-100 shadow-md"
            style="aspect-ratio: 4 / 3;"
          >
            <img
              :src="opportunity.image"
              :alt="opportunity.title"
              class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <!-- Subtle gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
            ></div>
          </div>

          <!-- Secondary context card below image -->
          <div
            class="mt-6 rounded-2xl border border-gray-100 bg-stone-50 px-6 py-5 shadow-sm"
          >
            <h3
              class="mb-3 font-['Livvic'] text-base font-bold text-black"
            >
              Investment Overview
            </h3>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-start gap-2.5">
                <font-awesome-icon
                  :icon="['fas', 'circle-check']"
                  :class="['mt-0.5 h-4 w-4 shrink-0', categoryTheme.textPrimary]"
                  aria-hidden="true"
                />
                Fully managed farm operations with expert agronomists on site.
              </li>
              <li class="flex items-start gap-2.5">
                <font-awesome-icon
                  :icon="['fas', 'circle-check']"
                  :class="['mt-0.5 h-4 w-4 shrink-0', categoryTheme.textPrimary]"
                  aria-hidden="true"
                />
                Transparent cost structure with no hidden fees beyond the stated operational charge.
              </li>
              <li class="flex items-start gap-2.5">
                <font-awesome-icon
                  :icon="['fas', 'circle-check']"
                  :class="['mt-0.5 h-4 w-4 shrink-0', categoryTheme.textPrimary]"
                  aria-hidden="true"
                />
                Returns disbursed at harvest completion via your registered payment method.
              </li>
              <li class="flex items-start gap-2.5">
                <font-awesome-icon
                  :icon="['fas', 'circle-check']"
                  :class="['mt-0.5 h-4 w-4 shrink-0', categoryTheme.textPrimary]"
                  aria-hidden="true"
                />
                Progress updates and farm reports available throughout the cycle.
              </li>
            </ul>
          </div>
        </div>

        <!-- ── RIGHT COLUMN: Details (5 cols) ───────────────────────── -->
        <div class="flex flex-col lg:col-span-5">

          <!-- Badges -->
          <div class="mb-4 flex flex-wrap items-center gap-2">
            <span
              :class="['inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold tracking-wide', categoryTheme.bgLight, categoryTheme.textPrimary]"
            >
              <font-awesome-icon
                :icon="['fas', categoryIcon]"
                class="h-3 w-3"
                aria-hidden="true"
              />
              {{ opportunity.category }}
            </span>
            <span
              :class="statusBadgeClass"
              class="inline-flex items-center rounded-full px-3.5 py-1 text-xs font-bold tracking-wide"
            >
              {{ opportunity.status }}
            </span>
          </div>

          <!-- Title -->
          <h1
            class="font-['Livvic'] text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl"
          >
            {{ opportunity.title }}
            <span
              v-if="opportunity.variety"
              class="block font-['Montserrat'] text-sm font-semibold text-gray-400 mt-1"
            >
              ({{ opportunity.variety }})
            </span>
          </h1>

          <!-- Description -->
          <p
            class="mt-4 text-sm font-light leading-relaxed text-gray-500 sm:text-base"
          >
            {{ opportunity.description }}
          </p>

          <!-- Location row -->
          <p
            v-if="opportunity.location"
            class="mt-3 flex items-center gap-1.5 text-xs font-semibold text-gray-400"
          >
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
              :class="['h-3.5 w-3.5', categoryTheme.textPrimary]"
              aria-hidden="true"
            />
            {{ opportunity.location }}
          </p>

          <!-- Divider -->
          <hr class="my-6 border-gray-100" />

          <!-- Financial Overview 2×2 Grid -->
          <div class="grid grid-cols-2 gap-3">

            <!-- Price per Unit -->
            <div
              class="rounded-2xl border border-gray-100 bg-stone-50 p-4 shadow-sm"
            >
              <p class="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Price
              </p>
              <p class="font-['Livvic'] text-xl font-bold text-black">
                {{ opportunity.pricePerUnit }}
              </p>
            </div>

            <!-- Measured ROI — highlighted -->
            <div
              :class="['rounded-2xl border p-4 shadow-sm', categoryTheme.borderLight, categoryTheme.bgSubtle]"
            >
              <p :class="['mb-1 text-[10px] font-bold uppercase tracking-widest', categoryTheme.textLight]">
                Est. ROI
              </p>
              <p :class="['font-[Livvic] text-xl font-bold', categoryTheme.textPrimary]">
                {{ opportunity.expectedRoi }}
              </p>
            </div>

            <!-- Duration -->
            <div
              class="rounded-2xl border border-gray-100 bg-stone-50 p-4 shadow-sm"
            >
              <p class="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Duration
              </p>
              <p class="font-['Livvic'] text-base font-bold leading-snug text-black">
                {{ opportunity.cycle }}
              </p>
            </div>

            <!-- Investment Window -->
            <div
              class="rounded-2xl border border-gray-100 bg-stone-50 p-4 shadow-sm"
            >
              <p class="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Investment Window
              </p>
              <p class="font-['Livvic'] text-sm font-bold leading-snug text-black">
                {{ opportunity.investmentWindow }}
              </p>
            </div>

          </div>

          <!-- Invest Now Button -->
          <div class="relative mt-8 w-full group/pulse">
            <!-- Pulsating ripple -->
            <div
              :class="['absolute inset-0 z-0 rounded-full pointer-events-none animate-solid-pulse', categoryTheme.btnBg]"
            ></div>

            <button
              type="button"
              @click="handleFund"
              :class="['group/btn relative z-10 overflow-hidden inline-flex w-full items-center justify-center rounded-full px-6 py-4 transition-all duration-300 hover:shadow-xl active:scale-[0.98] cursor-pointer', categoryTheme.btnBg]"
            >
              <!-- Default label (slides up on hover) -->
              <span
                class="flex items-center gap-2.5 text-sm font-bold text-white transition-transform duration-300 group-hover/btn:-translate-y-full"
              >
                Invest now
                <font-awesome-icon
                  :icon="['fas', 'arrow-right']"
                  class="h-3.5 w-3.5"
                  aria-hidden="true"
                />
              </span>

              <!-- Hover label (slides in from below) -->
              <span
                class="absolute inset-0 flex items-center justify-center gap-2.5 bg-[#F2CB00] text-sm font-bold text-black transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0"
              >
                Invest now
                <font-awesome-icon
                  :icon="['fas', 'arrow-right']"
                  class="h-3.5 w-3.5"
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>

          <!-- Disclaimer -->
          <div
            class="mt-5 flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-xs leading-relaxed text-gray-400"
          >
            <font-awesome-icon
              :icon="['fas', 'circle-info']"
              class="mt-0.5 h-4 w-4 shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <p>
              All investments are subject to agricultural cycle maturity periods.
              Returns are disbursed within <strong class="text-gray-500">30 days</strong> of
              confirmed harvest and sale. Past performance does not guarantee future
              results. FarmGate Africa acts as a managed farm operator, not a licensed
              financial advisor.
            </p>
          </div>

        </div>
        <!-- end right column -->
      </div>
      <!-- end grid -->

      <!-- Not found state -->
      <div
        v-else
        class="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center"
      >
        <font-awesome-icon
          :icon="['fas', 'circle-exclamation']"
          class="h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
        <h2 class="font-['Livvic'] text-2xl font-bold text-gray-700">
          Opportunity Not Found
        </h2>
        <p class="text-sm text-gray-400">
          This investment opportunity may have closed or been removed.
        </p>
        <button
          type="button"
          @click="goBack"
          :class="['mt-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90', categoryTheme.btnBg]"
        >
          {{ backButtonLabel }}
        </button>
      </div>

    </main>

    <AuthRedirectModal :show="isRedirectingToLogin" :opportunityName="redirectOpportunityName" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AuthRedirectModal from "@/components/AuthRedirectModal.vue";
import farmGateLogo from "@/assets/img/FARMGATE PATTERN _GREEN.png";

const isRedirectingToLogin = ref(false);
const redirectOpportunityName = ref("");

// ── Asset imports (mirrors ServiceModel.vue) ──────────────────────────────────
import okraImg       from "@/assets/img/okra1.jpg";
import onionImg      from "@/assets/img/onion.jpg";
import yamImg        from "@/assets/img/yam1.webp";
import maizeImg      from "@/assets/img/maize.jpg";
import cassavaImg    from "@/assets/img/cassava1.jpg";
import pepperImg     from "@/assets/img/pepper-farm.jpg";
import riceImg       from "@/assets/img/rice1.jpg";
import tomatoImg     from "@/assets/img/tomato.jpg";
import soybeanImg    from "@/assets/img/farm-crops.jpg";
import poultryImg    from "@/assets/img/farm-pic4.webp";
import cattleImg     from "@/assets/img/farm-tractor2.webp";
import catfishImg    from "@/assets/img/catfish1.png";
import tilapiaImg    from "@/assets/img/tilapia1.avif";

// ── All investment opportunities (sourced from ServiceModel.vue cards) ────────
const allOpportunities = [
  // ── Crop ────────────────────────────────────────────────────────────────────
  {
    id: "crop-1",
    category: "Crop",
    title: "Okra",
    variety: "Lady Finger",
    status: "Open",
    description:
      "Okra (Abelmoschus esculentus) is a warm-season vegetable prized for its tender pods. It thrives in the tropical climate of Ghana's Ahafo Region and is widely used in soups and stews. Lady Finger okra produces slender, ribbed pods with excellent market demand in both local and export markets.",
    pricePerUnit: "GHS 950.00 / Unit",
    expectedRoi: "13% - 17%",
    cycle: "4 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "June 1 – June 30, 2026",
    location: "Ahafo Region, Ghana",
    image: okraImg,
  },
  {
    id: "crop-2",
    category: "Crop",
    title: "Onion",
    variety: "Bawku Red",
    status: "Closed",
    description:
      "The Bawku Red onion is a locally adapted variety known for its pungent flavour, long shelf life, and strong demand across West African markets. Grown in Ghana's Eastern Region under controlled irrigation, this cycle offers investors a proven commodity with stable off-take channels.",
    pricePerUnit: "GHS 720.00 / Unit",
    expectedRoi: "12% - 16%",
    cycle: "6 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "Jan 10 – Feb 10, 2026",
    location: "Eastern Region, Ghana",
    image: onionImg,
  },
  {
    id: "crop-3",
    category: "Crop",
    title: "Yam",
    variety: "Pona",
    status: "Open",
    description:
      "Pona yam is one of Ghana's most commercially valuable yam varieties, prized for its floury texture and rich taste. Cultivated in the fertile soils of the Volta Region, this cycle benefits from established market linkages and strong domestic and export demand.",
    pricePerUnit: "GHS 1,100.00 / Unit",
    expectedRoi: "15% - 19%",
    cycle: "6-Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "June 5 – July 5, 2026",
    location: "Volta Region, Ghana",
    image: yamImg,
  },
  {
    id: "crop-4",
    category: "Crop",
    title: "Maize",
    variety: "Obaatanpa",
    status: "Open",
    description:
      "Obaatanpa is a high-quality protein maize (HQPM) variety developed for superior nutritional value and yield. Grown in the Brong-Ahafo Region under managed field conditions, this cycle leverages strong domestic demand for both food and feed markets.",
    pricePerUnit: "GHS 680.00 / Unit",
    expectedRoi: "12% - 16%",
    cycle: "4 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "June 1 – June 30, 2026",
    location: "Brong-Ahafo Region, Ghana",
    image: maizeImg,
  },
  {
    id: "crop-5",
    category: "Crop",
    title: "Cassava",
    variety: "Bankye Hemaa",
    status: "Open",
    description:
      "Bankye Hemaa is a high-yielding, disease-resistant cassava variety with excellent starch content, widely grown across Ghana's Central Region. This cycle targets industrial starch and gari processing markets with structured off-take partnerships in place.",
    pricePerUnit: "GHS 540.00 / Unit",
    expectedRoi: "14% - 18%",
    cycle: "9 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "July 1 – July 31, 2026",
    location: "Central Region, Ghana",
    image: cassavaImg,
  },
  {
    id: "crop-6",
    category: "Crop",
    title: "Pepper",
    variety: "Scotch Bonnet",
    status: "Closed",
    description:
      "Scotch Bonnet pepper is one of the most commercially valued hot pepper varieties in West Africa, used in cooking and industrial chilli processing. Grown in the Upper East Region, this cycle benefits from high market demand and strong export potential.",
    pricePerUnit: "GHS 810.00 / Unit",
    expectedRoi: "11% - 15%",
    cycle: "3 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "Feb 1 – Feb 28, 2026",
    location: "Upper East Region, Ghana",
    image: pepperImg,
  },
  {
    id: "crop-7",
    category: "Crop",
    title: "Rice",
    variety: "AGRA Aromatic",
    status: "Open",
    description:
      "AGRA Aromatic Rice is a high-yielding rainfed and irrigated lowland variety grown extensively across Ghana's Northern Region. Known for its aromatic fragrance and long grain quality, this cycle targets premium domestic retail and institutional off-take markets.",
    pricePerUnit: "GHS 870.00 / Unit",
    expectedRoi: "13% - 17%",
    cycle: "5 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "July 1 – July 31, 2026",
    location: "Northern Region, Ghana",
    image: riceImg,
  },
  {
    id: "crop-8",
    category: "Crop",
    title: "Tomato",
    variety: "Pectomech",
    status: "Open",
    description:
      "Pectomech tomato is an industry-preferred variety with firm fruit walls and high solids content, making it ideal for fresh market supply and processing. Cultivated in Greater Accra with drip irrigation, this short 3-month cycle delivers rapid turnover.",
    pricePerUnit: "GHS 640.00 / Unit",
    expectedRoi: "12% - 15%",
    cycle: "3 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "Aug 1 – Aug 31, 2026",
    location: "Greater Accra Region, Ghana",
    image: tomatoImg,
  },
  {
    id: "crop-9",
    category: "Crop",
    title: "Soybean",
    variety: "Jenguma",
    status: "Open",
    description:
      "Jenguma is a non-shattering, high-protein soybean variety well suited to the agro-ecological conditions of Ghana's Upper West Region. This cycle feeds into commercial poultry feed mills and edible oil processors with guaranteed purchase contracts.",
    pricePerUnit: "GHS 565.00 / Unit",
    expectedRoi: "10% - 14%",
    cycle: "4 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "June 20 – July 20, 2026",
    location: "Upper West Region, Ghana",
    image: soybeanImg,
  },

  // ── Livestock ────────────────────────────────────────────────────────────────
  {
    id: "livestock-1",
    category: "Livestock",
    title: "Poultry",
    variety: "Broiler",
    status: "Closed",
    description:
      "Ross 308 Broiler chickens are raised under biosecure conditions in Kasoa, managed by trained technicians with optimised feed conversion ratios. This cycle delivers lean, market-ready birds within 8 weeks, targeting both retail and hospitality off-take channels.",
    pricePerUnit: "GHS 550.00 / Unit",
    expectedRoi: "11% - 15%",
    cycle: "8 Week Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "Feb 1 – Feb 28, 2026",
    location: "Kasoa, Central Region",
    image: poultryImg,
  },
  {
    id: "livestock-2",
    category: "Livestock",
    title: "Cattle",
    variety: "Sokoto Gudali",
    status: "Open",
    description:
      "The Sokoto Gudali is a hardy West African breed well adapted to Ghana's savanna conditions. Raised on natural pasture and supplementary feed on the Afram Plains, this 6-month cycle targets premium beef markets with structured off-take agreements in place at cycle launch.",
    pricePerUnit: "GHS 2,400.00 / Unit",
    expectedRoi: "16% - 21%",
    cycle: "6 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "June 10 – July 15, 2026",
    location: "Afram Plains, Eastern Region",
    image: cattleImg,
  },

  // ── Fish Farming ─────────────────────────────────────────────────────────────
  {
    id: "fish-1",
    category: "Fish Farming",
    title: "Catfish",
    variety: "Clarias Gariepinus",
    status: "Closed",
    description:
      "Clarias Gariepinus (African Catfish) is the most widely farmed catfish species in Ghana, valued for its fast growth rate, hardiness, and consistent demand. Pond-raised in Aveyime under strict biosecurity protocols, returns are driven by structured processing and market linkages.",
    pricePerUnit: "GHS 680.00 / Unit",
    expectedRoi: "14% - 18%",
    cycle: "5 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "Mar 1 – Mar 31, 2026",
    location: "Aveyime, Volta Region",
    image: catfishImg,
  },
  {
    id: "fish-2",
    category: "Fish Farming",
    title: "Tilapia",
    variety: "Nile Tilapia",
    status: "Open",
    description:
      "Oreochromis niloticus (Nile Tilapia) is one of the world's most farmed fish species. Raised in cage units on the Akuse stretch of the Volta River, this cycle leverages premium water quality and optimised feeding schedules to deliver consistent market-weight fish at harvest.",
    pricePerUnit: "GHS 1,850.00 / Unit",
    expectedRoi: "15% - 20%",
    cycle: "6 Month Cycle",
    operationalCharge: "10.00%",
    investmentWindow: "June 1 – June 30, 2026",
    location: "Akuse, Volta Region",
    image: tilapiaImg,
  },
];

// ── Routing ───────────────────────────────────────────────────────────────────
// No Vue Router on this page — resolve ID from the URL query string directly
const urlParams = new URLSearchParams(window.location.search);
const paramId = urlParams.get("id");
const paramOpportunity = urlParams.get("opportunity");

const opportunity = computed(() => {
  if (paramId) {
    const foundById = allOpportunities.find(
      (o) => o.id.toLowerCase() === paramId.toLowerCase()
    );
    if (foundById) return foundById;
  }
  if (paramOpportunity) {
    const query = paramOpportunity.toLowerCase().trim();
    const foundByQuery = allOpportunities.find((o) => {
      const titleLower = (o.title || "").toLowerCase();
      const varietyLower = (o.variety || "").toLowerCase();
      const idLower = (o.id || "").toLowerCase();
      const fullLower = `${o.title} (${o.variety})`.toLowerCase();
      return (
        titleLower === query ||
        varietyLower === query ||
        idLower === query ||
        fullLower === query ||
        query.includes(titleLower) ||
        titleLower.includes(query)
      );
    });
    if (foundByQuery) return foundByQuery;
  }
  // Default fallback: first open opportunity (Okra – Lady Finger)
  return allOpportunities.find((o) => o.status === "Open") ?? allOpportunities[0];
});

// ── Derived UI helpers ────────────────────────────────────────────────────────
const statusBadgeClass = computed(() => {
  const s = opportunity.value?.status?.toLowerCase() ?? "";
  if (s === "open")   return "bg-[#F2CB00] text-black";
  if (s === "closed") return "bg-red-500 text-white";
  return "bg-gray-500 text-white";
});

const categoryIcon = computed(() => {
  const cat = opportunity.value?.category?.toLowerCase() ?? "";
  if (cat === "crop")          return "seedling";
  if (cat === "livestock")     return "cow";
  if (cat === "fish farming")  return "fish";
  return "leaf";
});

const categoryTheme = computed(() => {
  const cat = opportunity.value?.category?.toLowerCase() ?? "";
  if (cat === "livestock") {
    return {
      primary: "#a15c1b",
      bgLight: "bg-[#a15c1b]/10",
      bgSubtle: "bg-[#a15c1b]/5",
      borderLight: "border-[#a15c1b]/20",
      textLight: "text-[#a15c1b]/70",
      textPrimary: "text-[#a15c1b]",
      btnBg: "bg-[#a15c1b]",
      hoverText: "hover:text-[#a15c1b]",
      groupHoverBorder: "group-hover:border-[#a15c1b]",
      groupHoverBg: "group-hover:bg-[#a15c1b]/5",
      gradientFrom: "from-[#a15c1b]",
      selection: "selection:bg-[#a15c1b]",
    };
  }
  if (cat === "fishery" || cat === "fish farming") {
    return {
      primary: "#058fc8",
      bgLight: "bg-[#058fc8]/10",
      bgSubtle: "bg-[#058fc8]/5",
      borderLight: "border-[#058fc8]/20",
      textLight: "text-[#058fc8]/70",
      textPrimary: "text-[#058fc8]",
      btnBg: "bg-[#058fc8]",
      hoverText: "hover:text-[#058fc8]",
      groupHoverBorder: "group-hover:border-[#058fc8]",
      groupHoverBg: "group-hover:bg-[#058fc8]/5",
      gradientFrom: "from-[#058fc8]",
      selection: "selection:bg-[#058fc8]",
    };
  }
  return {
    primary: "#129C48",
    bgLight: "bg-[#129C48]/10",
    bgSubtle: "bg-[#129C48]/5",
    borderLight: "border-[#129C48]/20",
    textLight: "text-[#129C48]/70",
    textPrimary: "text-[#129C48]",
    btnBg: "bg-[#129C48]",
    hoverText: "hover:text-[#129C48]",
    groupHoverBorder: "group-hover:border-[#129C48]",
    groupHoverBg: "group-hover:bg-[#129C48]/5",
    gradientFrom: "from-[#129C48]",
    selection: "selection:bg-[#129C48]",
  };
});

const isFromDashboard = computed(() => {
  const ref = new URLSearchParams(window.location.search).get("ref");
  return ref === "dashboard" || (typeof document !== "undefined" && document.referrer.includes("investor-dashboard"));
});

const backButtonLabel = computed(() => {
  return isFromDashboard.value ? "Back to dashboard" : "Back to investment opportunities";
});

const goBack = () => {
  if (isFromDashboard.value) {
    window.location.href = "/investor-dashboard";
    return;
  }
  const ref = new URLSearchParams(window.location.search).get("ref") || "invest";
  window.location.href = `/service-model.html?model=${ref}#opportunities`;
};

const handleFund = () => {
  if (!opportunity.value) return;
  const opportunityName = opportunity.value.variety
    ? `${opportunity.value.title} (${opportunity.value.variety})`
    : opportunity.value.title;
  const params = new URLSearchParams({
    opportunity: opportunityName,
    category: opportunity.value.category,
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

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

onMounted(() => {
  const api = initScrollReveal();
  if (!api) return;
  api.reveal(".reveal-slide-up", {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 150,
  });
});
</script>

<style scoped>
@keyframes pulseAnimateSolid {
  0%   { transform: scale(1, 1);       opacity: 1; }
  100% { transform: scale(1.05, 1.35); opacity: 0; }
}
.animate-solid-pulse {
  animation: pulseAnimateSolid 1.2s ease-out infinite;
}
</style>
