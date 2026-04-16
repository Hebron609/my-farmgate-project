<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <section class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-[url('/images/farm-visit1.webp')] bg-cover bg-center bg-no-repeat opacity-55"
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

    <section class="px-6 py-24 bg-white md:px-12">
      <div class="mx-auto max-w-[1440px]">
        <div class="text-center mb-14 reveal-fade">
          <h2 class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black">
            The <span class="text-[#129C48]">FarmGate Edge</span>
          </h2>
          <div class="h-1 w-24 bg-[#F2CB00] mx-auto mt-5"></div>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article
            v-for="item in edgePillars"
            :key="item.title"
            class="group relative bg-stone-50 p-10 rounded-[2rem] shadow-2xl transition-all duration-300 -translate-y-2 border border-green-100 reveal-slide-up cursor-default hover:bg-stone-50 hover:shadow-sm hover:translate-y-0 hover:border-gray-100"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#129C48]/5 to-transparent opacity-100 transition-opacity duration-300 rounded-[2rem] group-hover:opacity-0"
            ></div>

            <div class="relative z-10">
              <div
                class="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#129C48] text-white transition-all duration-300 scale-110 shadow-sm group-hover:bg-green-50 group-hover:text-[#129C48] group-hover:scale-100"
              >
                <font-awesome-icon
                  :icon="['fas', item.iconName]"
                  class="w-7 h-7"
                />
              </div>

              <h3
                class="mb-4 font-['Livvic'] text-2xl font-bold text-[#129C48] transition-colors group-hover:text-black"
              >
                {{ item.title }}
              </h3>
              <p
                v-if="item.description"
                class="font-light leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700"
              >
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";

const edgePillars = [
  {
    title: "Enhance productivity & crop yield",
    description:
      "We help farmers produce more from the same land through better practices and stronger field support.",
    iconName: "chart-line",
  },
  {
    title: "Increase farmer incomes",
    description:
      "Our approach focuses on turning higher productivity into better earnings and more stable livelihoods.",
    iconName: "money-bill-wave",
  },
  {
    title: "Provide access to farmer financing",
    description:
      "We connect farmers to financing options that make it easier to invest, grow, and expand sustainably.",
    iconName: "university",
  },
  {
    title:
      "Provide CBTM or training support for FBO/FGO and farmer co-operatives",
    description:
      "We strengthen farmer groups with practical training, business support, and capacity-building that lasts.",
    iconName: "chalkboard-teacher",
  },
];

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
