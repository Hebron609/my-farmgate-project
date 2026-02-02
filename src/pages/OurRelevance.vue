<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <div class="relative h-screen w-full overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${heroPic})` }"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
      ></div>

      <div
        class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon
            class="mx-auto mb-6 h-16 w-16 text-[#F2CB00] animate-pulse"
          />

          <h1
            class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight"
          >
            OUR <br />
            <span class="text-[#129C48]">RELEVANCE.</span>
          </h1>
        </div>

        <p
          class="mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-lg reveal-slide-up delay-200"
        >
          We believe that the future can be grown.
        </p>

        <div class="absolute bottom-10 animate-bounce">
          <svg
            class="h-8 w-8 text-white opacity-50"
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

    <section
      class="w-full bg-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div class="mx-auto max-w-[1440px]">
        <div
          class="relative grid items-start grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24"
        >
          <div
            class="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#F2CB00] -translate-x-1/2 opacity-50"
          ></div>

          <div
            class="flex flex-col items-center text-center group reveal-slide-left"
          >
            <div
              class="mb-6 text-[#129C48] transform transition-transform duration-300 group-hover:scale-110"
            >
              <font-awesome-icon :icon="['fas', 'bullseye']" size="4x" />
            </div>

            <h3
              class="font-['Livvic'] text-black font-bold text-3xl mb-4 tracking-wider uppercase"
            >
              MISSION
            </h3>

            <p
              class="text-gray-600 font-['Montserrat'] font-light text-xl leading-relaxed max-w-[70%]"
            >
              We exist to impact lives through sustainable agriculture and
              shared prosperity.
            </p>
          </div>

          <div
            class="flex flex-col items-center text-center group reveal-slide-right"
          >
            <div
              class="mb-6 text-[#129C48] transform transition-transform duration-300 group-hover:scale-110"
            >
              <font-awesome-icon :icon="['fas', 'eye']" size="4x" />
            </div>

            <h3
              class="font-['Livvic'] text-black font-bold text-3xl mb-4 tracking-wider uppercase"
            >
              VISION
            </h3>

            <p
              class="text-gray-600 font-['Montserrat'] font-light text-xl leading-relaxed max-w-sm"
            >
              To become a backbone for the agricultural revolution in Africa.
            </p>
          </div>
        </div>

        <div class="mt-24 flex justify-center">
            <div class="flex flex-col items-center text-center group reveal-slide-up max-w-lg">
                <div class="mb-6 text-[#129C48] transform transition-transform duration-300 group-hover:scale-110">
                    <font-awesome-icon :icon="['fas', 'gem']" size="4x" />
                </div>
                <h3 class="font-['Livvic'] text-black font-bold text-3xl mb-4 tracking-wider uppercase">
                    CORE VALUES
                </h3>
                <p class="text-gray-600 font-['Montserrat'] font-light text-xl leading-relaxed">
                    Our principles of integrity, accountability, and service guide every decision and action we take.
                </p>
            </div>
        </div>
      </div>
    </section>

    <section
      class="w-full bg-stone-50 py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div class="absolute top-0 right-0 opacity-5 pointer-events-none">
        <img class="h-[600px] w-auto" :src="farmGateLogo" alt="" />
      </div>

      <div class="mx-auto max-w-7xl relative z-10">
        <div class="mb-20 flex flex-col items-center text-center">
          <a
            href="/marketplace.html"
            class="flex group relative overflow-hidden px-3 py-1 rounded-4xl items-center justify-center cursor-pointer bg-gray-50 border border-gray-200"
          >
            <span
              class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <LeafIcon class="text-[#129C48] w-4 h-4" />
              <span class="text-xs font-semibold tracking-wider text-gray-500"
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
          </a>

          <h2
            class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black mb-8 leading-tight max-w-3xl"
          >
            Discover the values that <br />
            <span class="text-[#129C48]">guide our mission.</span>
          </h2>

          <p class="text-gray-600 text-lg leading-relaxed max-w-3xl font-light">
            At FGAl, we share a set of core values which underpin and shape the
            way we do our work. The FGAI General Business Principles, Code of
            Conduct and Ethics and Compliance Manual help everyone at FGAI to
            act in line with these values and comply with relevant laws and
            regulations.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            class="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 reveal-stagger"
          >
            <div class="mb-8 flex justify-center">
              <img
                src="@/assets/img/wired-outline-1468-morale-hover-pinch.gif"
                alt="Integrity"
                class="h-24 w-24 object-contain"
              />
            </div>
            <h3
              class="mb-4 text-center font-['Livvic'] text-2xl font-bold text-black group-hover:text-[#129C48] transition-colors"
            >
              Integrity
            </h3>
            <p class="text-center text-gray-500 leading-relaxed">
              Strong moral principles, trustworthiness and honesty
            </p>
          </div>

          <div
            class="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 reveal-stagger"
          >
            <div class="mb-8 flex justify-center">
              <img
                src="@/assets/img/wired-outline-20-love-heart-hover-heartbeat.gif"
                alt="Accountability"
                class="h-24 w-24 object-contain"
              />
            </div>
            <h3
              class="mb-4 text-center font-['Livvic'] text-2xl font-bold text-black group-hover:text-[#129C48] transition-colors"
            >
              Accountability
            </h3>
            <p class="text-center text-gray-500 leading-relaxed">
              Stewardship, answerable, discipline and focus
            </p>
          </div>

          <div
            class="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 reveal-stagger"
          >
            <div class="mb-8 flex justify-center">
              <img
                src="@/assets/img/wired-outline-1827-growing-plant-hover-pinch.gif"
                alt="Service"
                class="h-24 w-24 object-contain"
              />
            </div>
            <h3
              class="mb-4 text-center font-['Livvic'] text-2xl font-bold text-black group-hover:text-[#129C48] transition-colors"
            >
              Service
            </h3>
            <p class="text-center text-gray-500 leading-relaxed">
              Respect for people, quality, excellence and going the extra mile
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center mt-20 opacity-30">
          <div class="h-px w-full bg-gray-400"></div>
          <div class="px-4"><LeafIcon class="w-6 h-6 text-gray-400" /></div>
          <div class="h-px w-full bg-gray-400"></div>
        </div>
      </div>
    </section>

   

    <section
      class="relative h-[600px] w-full overflow-hidden flex items-center justify-center"
    >
      <div
        class="absolute inset-0 bg-cover bg-center bg-fixed"
        :style="{ backgroundImage: `url(${farmPic9})` }"
      ></div>
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 px-6 max-w-4xl text-center">
        <div class="mb-8 flex justify-center reveal-fade">
         
          <a
              href="/marketplace.html"
              class="flex group relative overflow-hidden px-3 py-1.5 backdrop-blur-md bg-white/20 rounded-4xl items-center cursor-pointer"
            >
              <span
                class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <LeafIcon class="w-4 h-4 text-white" />
                <span class="text-xs font-semibold leading-none text-white"
                  >Our goal</span
                >
              </span>

              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
              >
                <LeafIcon class="w-4 h-4 text-black" />
                <span class="text-xs font-semibold leading-none"
                  >Our goal</span
                >
              </span>
            </a>
          
        </div>

        <p
          class="font-['Livvic'] text-2xl md:text-4xl font-bold text-white leading-tight reveal-slide-up"
        >
          Our goal is practically simple – we aim to produce what we need from
          what we have by innovatively deploying Africa’s technology to
          contribute to solving Africa’s food insecurity and nutrition problems.
        </p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBullseye, faEye, faGem } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import heroPic from "@/assets/img/farm-pic3.jpg";
import farmPic9 from "@/assets/img/farm-pic9.jpg";
import farmGateLogo from "@/assets/img/FarmGate Africa 1 1.png";

library.add(faBullseye, faEye, faGem);

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

const footprintSection = ref(null);
const isMobile = ref(false);
const displayValues = ref([0, 0]);
let intervals = [null, null];
let hasAnimated = false;

const animateValue = (index, target) => {
  if (isMobile.value) return;
  if (intervals[index]) clearInterval(intervals[index]);
  let current = displayValues.value[index];
  const increment = target / 50;
  intervals[index] = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(intervals[index]);
      intervals[index] = null;
    }
    displayValues.value[index] = Math.round(current);
  }, 50);
};

onMounted(() => {
  const api = initScrollReveal();
  if (api) {
    api.reveal(".reveal-fade", {
      ...revealEffects.fade,
      duration: 900,
      delay: 200,
    });
    api.reveal(".reveal-slide-up", {
      ...revealEffects.slideUp,
      duration: 750,
      delay: 200,
    });
    api.reveal(".reveal-slide-left", {
      ...revealEffects.slideLeft,
      duration: 700,
      delay: 150,
    });
    api.reveal(".reveal-slide-right", {
      ...revealEffects.slideRight,
      duration: 700,
      delay: 200,
    });
    api.reveal(".reveal-stagger", {
      ...revealEffects.stagger,
      duration: 600,
      interval: 120,
      delay: 100,
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateValue(0, 65);
          setTimeout(() => animateValue(1, 35), 500);
        }
      });
    },
    { threshold: 0.5 },
  );
  if (footprintSection.value) {
    observer.observe(footprintSection.value);
  }

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
    if (isMobile.value) {
      displayValues.value = [65, 35];
    } else {
      displayValues.value = [0, 0];
    }
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
/* Ensure smooth transitions if Tailwind utility classes aren't sufficient */
</style>
