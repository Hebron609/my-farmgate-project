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
          Every seed we plant, every partnership we build, reflects our
          commitment to sustainability, innovation, and people.
        </p>

        <div class="absolute bottom-10">
          <ScrollDownPage />
        </div>
      </div>
    </div>

    <section class="w-full px-6 py-16 bg-black md:py-40">
      <div class="max-w-5xl mx-auto text-center reveal-fade">
        <h2
          class="font-['Livvic'] text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          "We started this journey with a simple belief — that farming can feed
          the world
          <span
            class="text-[#129C48] decoration-[#F2CB00] underline decoration-4 underline-offset-4 md:underline-offset-8"
            >without harming it.</span
          >"
        </h2>
        <p
          class="max-w-3xl mx-auto mt-12 text-xl font-light leading-relaxed text-gray-400"
        >
          Redefining agriculture at a global scale.
        </p>
      </div>
    </section>

    <section class="w-full px-6 py-16 bg-white md:px-12 md:py-24">
      <div
        class="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24 items-start"
      >
        <div class="reveal-slide-right">
          <h3
            class="font-['Livvic'] text-[#129C48] text-xl font-bold uppercase tracking-widest mb-4 text-center md:text-left"
          >
            Our Company
          </h3>
          <h4
            class="font-['Livvic'] text-3xl md:text-4xl font-bold text-black leading-tight mb-8 text-center md:text-left"
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

    <!--<GrowWithUs />-->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import ScrollDownPage from "@/components/ScrollDownPage.vue";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.1,
});

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

// Image Imports
import aboutUsBanner from "@/assets/img/about-us-banner.jpg";
import farmPic9 from "@/assets/img/farm-pic9.jpg";
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

/* 320x568 Viewport Fixes - Preserving Structure */
@media (max-width: 380px) {
  /* Scale down massive hero heading to prevent word wrap breaking */
  h1 {
    font-size: 3.25rem !important;
    line-height: 1.1 !important;
  }
  
  /* Scale down the quote section heading */
  h2 {
    font-size: 1.75rem !important;
  }

  /* Reduce the height of the image container so it doesn't take up the whole screen height */
  .min-h-\[500px\] {
    min-height: 380px !important;
  }

  /* Keep the overlapping structure (-bottom-12), but reduce internal padding and text size
     so the box doesn't get ridiculously tall on narrow screens */
  .absolute.-bottom-12 {
    padding: 1.25rem !important;
  }

  .absolute.-bottom-12 h4 {
    font-size: 1.15rem !important;
    margin-bottom: 0.5rem !important;
  }

  .absolute.-bottom-12 p {
    font-size: 0.85rem !important;
    line-height: 1.5 !important;
  }
}
</style>
