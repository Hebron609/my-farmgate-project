<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <section class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-[url('/images/our-edge2.jpg')] bg-cover bg-center bg-no-repeat opacity-55"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/80"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon class="mx-auto mb-6 h-16 w-16 text-[#F2CB00]" />
          <h1
            class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight"
          >
            OUR <br />
            <span class="text-[#129C48]">EDGE.</span>
          </h1>
        </div>
        <p
          class="max-w-3xl mt-8 text-lg font-light leading-relaxed text-gray-300 md:text-xl reveal-slide-up"
        >
          FarmGate combines execution strength, market intelligence, and
          inclusive partnerships to build resilient agricultural systems that
          scale.
        </p>
      </div>
    </section>

    <section class="relative px-6 py-24 overflow-hidden bg-white md:px-12">
      <div
        class="absolute left-0 pointer-events-none bottom-[-100px] opacity-5"
      >
        <img class="h-[480px] w-auto" :src="farmGateLogo" alt="" />
      </div>
      <div class="absolute right-0 pointer-events-none top-[50px] opacity-4">
        <img class="h-[350px] w-auto" :src="farmGateLogo" alt="" />
      </div>
      <div class="mx-auto max-w-[1440px] relative z-10">
        <div
          class="flex flex-col items-center justify-center w-full gap-8 text-center mb-14 reveal-fade"
        >
          <div
            class="flex flex-col items-center justify-center w-full text-center"
          >
            <h2 class="font-['Livvic'] text-5xl font-bold text-black mb-6">
              What We Do
            </h2>
            <div class="h-1 w-24 bg-[#F2CB00] mx-auto"></div>
            <div
              class="flex flex-col items-center justify-center w-full mt-8 space-y-4 text-lg text-center text-gray-600"
            >
              <p class="mx-auto text-center md:max-w-[70%]">
                We partner with farmers across regions and beyond to help
                improve livelihoods within local communities by helping farmers
                to build capacity, grow more, sell more, sell for more, connect
                more, and empower those behind each harvest while preserving the
                environment that feeds us for the seasons ahead.
              </p>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger"
        >
          <article
            v-for="item in whatWeDoItems"
            :key="item.title"
            class="relative p-8 overflow-hidden transition-all duration-500 ease-out border bg-gradient-to-br from-white via-stone-50/50 to-green-50/30 border-green-100/50 shadow-md group rounded-2xl hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(18,156,72,0.15)] hover:border-green-200"
            style="transform-origin: center"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#129C48]/95 via-[#0f6e37]/95 to-[#0a3f1f]/95 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 pointer-events-none"
            ></div>
            <div
              class="absolute -inset-0.5 bg-gradient-to-br from-[#F2CB00]/20 to-transparent opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 blur-sm pointer-events-none"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#129C48]/3 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-out pointer-events-none"
            ></div>

            <div class="relative z-10">
              <div
                class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-green-100/50 text-[#129C48] shadow-sm shadow-green-200/50 transition-all duration-500 ease-out group-hover:bg-white group-hover:text-[#129C48] group-hover:scale-110 group-hover:shadow-lg"
              >
                <font-awesome-icon
                  :icon="['fas', item.iconName]"
                  size="lg"
                  class="transition-transform duration-500 group-hover:rotate-6"
                />
              </div>

              <h3
                class="text-lg font-semibold text-gray-900 transition-all duration-500 ease-out group-hover:text-white"
                style="
                  font-family: Livvic, sans-serif;
                  font-weight: 700;
                  letter-spacing: 0.3px;
                "
              >
                {{ item.title }}
              </h3>

              <div
                class="overflow-hidden transition-all duration-700 ease-out max-h-0 group-hover:mt-4 group-hover:max-h-24"
              >
                <p
                  class="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-white/90"
                >
                  {{ item.description }}
                </p>
              </div>

              <div
                class="mt-4 h-1.5 w-12 bg-gradient-to-r from-[#F2CB00] to-[#F2CB00]/60 transition-all duration-700 ease-out group-hover:w-full group-hover:shadow-[0_0_12px_rgba(242,203,0,0.5)] rounded-full"
              ></div>
            </div>
          </article>
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
                class="relative flex items-center px-4 py-2 mx-auto overflow-hidden cursor-pointer group/button backdrop-blur-md bg-white/25 rounded-4xl"
              >
                <span
                  class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover/button:-translate-y-full"
                >
                  <LeafIcon class="w-4 h-4 text-white" />
                  <span class="text-xs font-semibold leading-none text-white"
                    >Start growing with us</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover/button:translate-y-0"
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

        <div
          class="relative hidden w-screen overflow-hidden -translate-x-1/2 md:block left-1/2 right-1/2"
          @mouseleave="edgeHoverSide = null"
        >
          <div
            class="initiatives-edge-track h-[400px] md:h-[500px]"
            :class="{
              'initiatives-edge-track--left': edgeHoverSide === 'left',
              'initiatives-edge-track--right': edgeHoverSide === 'right',
            }"
          >
            <div
              v-for="(item, index) in galleryItems"
              :key="index"
              class="group/card relative flex-1 overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[3]"
              @mouseenter="
                edgeHoverSide =
                  index === 0
                    ? 'left'
                    : index === galleryItems.length - 1
                      ? 'right'
                      : null
              "
            >
              <div
                class="absolute inset-0 h-full w-full bg-cover bg-center transition-all duration-700 group-hover/card:scale-110 group-hover/card:blur-[3px]"
                :style="{ backgroundImage: `url(${item.image})` }"
              ></div>

              <div
                class="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover/card:bg-black/50"
              ></div>

              <div
                class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              >
                <h4
                  class="translate-y-0 transform flex items-center justify-center max-w-[14rem] font-['Livvic'] text-xl md:text-2xl font-bold text-white uppercase tracking-widest drop-shadow-lg transition-all duration-500 group-hover/card:-translate-y-4 group-hover/card:max-w-none group-hover/card:whitespace-nowrap"
                >
                  {{ item.title }}
                </h4>

                <div
                  class="max-w-md transition-all duration-500 delay-100 translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100"
                >
                  <p
                    class="font-['Montserrat'] text-sm md:text-base font-medium text-gray-100"
                  >
                    {{ item.description }}
                  </p>
                  <button
                    @click="navigateToVideo2"
                    class="relative items-center px-4 py-2 mx-auto mt-4 overflow-hidden cursor-pointer group/button button-group rounded-4xl"
                    style="display: inline-flex; align-items: center"
                  >
                    <span
                      class="absolute inset-0 transition-opacity duration-300 opacity-100 white-bg bg-white/25 backdrop-blur-md rounded-4xl group-hover/button:opacity-0"
                    ></span>
                    <span
                      class="absolute inset-0 transition-opacity duration-300 bg-yellow-400 opacity-0 yellow-bg rounded-4xl group-hover/button:opacity-100"
                    ></span>

                    <span
                      class="relative z-10 flex items-center gap-2 transition-opacity duration-300 opacity-100 white-text group-hover/button:opacity-0"
                    >
                      <LeafIcon class="w-4 h-4 text-white" />
                      <span
                        class="text-xs font-semibold leading-none text-white"
                        >Start growing with us</span
                      >
                    </span>

                    <span
                      class="absolute inset-0 z-20 flex items-center justify-center gap-2 text-black transition-opacity duration-300 opacity-0 black-text rounded-4xl group-hover/button:opacity-100"
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
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import farmPic1 from "@/assets/img/farm-pic1.jpg";
import farmPic2 from "@/assets/img/farm-pic2.jpg";
import farmPic8 from "@/assets/img/farm-pic8.jpg";
import farmPic9 from "@/assets/img/farmer-img1.avif";
import farmPic3 from "@/assets/img/Vision-future-img.jpg";
import farmPic4 from "@/assets/img/farm-pic4.jpg";
import farmGateLogo from "@/assets/img/FARMGATE PATTERN _GREEN.png";

const edgeHoverSide = ref(null);

const whatWeDoItems = [
  {
    title: "Enhance productivity & crop yield",
    description:
      "Help farmers produce more from the same land through better practices and stronger field support.",
    iconName: "chart-line",
  },
  {
    title: "Increase farmer incomes",
    description:
      "Turn higher productivity into stronger earnings and more stable livelihoods for farming families.",
    iconName: "money-bill-wave",
  },
  {
    title: "Connect farmers to markets",
    description:
      "Create better market access so farmers can reach more buyers and sell with greater confidence.",
    iconName: "handshake",
  },
  {
    title: "Provide access to farmer financing",
    description:
      "Open up financing options that make it easier to invest, grow, and scale sustainably.",
    iconName: "university",
  },
  {
    title: "Protect ecosystems",
    description:
      "Support farming approaches that preserve soil, water, and biodiversity for the long term.",
    iconName: "shield-alt",
  },
  {
    title: "Act on climate change",
    description:
      "Promote resilient farming practices that help communities adapt to changing climate conditions.",
    iconName: "cloud-sun",
  },
  {
    title: "Empower women & youth for job creation",
    description:
      "Back women and young people with opportunities, training, and pathways into agriculture-led work.",
    iconName: "users",
  },
  {
    title: "Boost food security & Strengthen supply chain systems",
    description:
      "Improve supply reliability so more communities have access to consistent, affordable food.",
    iconName: "truck",
  },
  {
    title: "Provide farmer training & capacity building",
    description:
      "Deliver training and business support that helps farmer groups grow stronger and more coordinated.",
    iconName: "chalkboard-teacher",
  },
];

const galleryItems = ref([
  {
    title: "Sustainable Growth",
    description:
      "Implementing eco-friendly practices to ensure long-term agricultural viability.",
    image: farmPic1,
  },
  {
    title: "Community Empowerment",
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
  {
    title: "Urban Farming & Agri-Tourism",
    description:
      "Building vibrant city farms and immersive agri-tourism experiences that connect communities to sustainable food systems.",
    image: farmPic4,
  },
  {
    title: "Enduring Partnerships",
    description:
      "We're committed to a long-term, collaborative relationship built on mutual trust, shared values, and consistent, intentional effort to overcome challenges and achieve common goals. We do this with our farmers and stakeholders.",
    image: farmPic8,
  },
  {
    title: "Farmer Focus",
    description:
      "Every solution we create is designed with farmers at heart, ensuring practical, accessible, and beneficial outcomes for agricultural communities.",
    image: farmPic9,
  }
]);

const navigateToVideo2 = () => {
  sessionStorage.setItem("activateVideo2", "true");
  window.location.href = "/";
};

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 120,
  viewFactor: 0.12,
});

onMounted(() => {
  const api = initScrollReveal();
  if (!api) return;

  api.reveal(".reveal-fade", {
    ...revealEffects.fade,
    duration: 800,
    delay: 150,
  });

  api.reveal(".reveal-slide-up", {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 150,
    interval: 100,
  });
});
</script>

<style scoped>
.initiatives-edge-track {
  --edge-peek: clamp(5rem, 10vw, 9rem);
  --edge-focus-inset: clamp(1.1rem, 2.6vw, 2.4rem);
  --edge-gap: clamp(1rem, 1.8vw, 1.5rem);
  width: calc(100vw + (var(--edge-peek) * 2));
  margin-left: calc(var(--edge-peek) * -1);
  padding-inline: clamp(1.25rem, 5vw, 4.5rem);
  display: flex;
  gap: var(--edge-gap);
  transform: translateX(0);
  transition: transform 700ms cubic-bezier(0.25, 1, 0.5, 1);
}

.initiatives-edge-track--left {
  transform: translateX(calc(var(--edge-peek) + var(--edge-focus-inset)));
}

.initiatives-edge-track--right {
  transform: translateX(
    calc((var(--edge-peek) * -1) - var(--edge-focus-inset))
  );
}
</style>
