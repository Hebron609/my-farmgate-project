<template>
  <div>
    <div class="relative overflow-hidden h-[480px] md:h-[780px]">
      <!--Header-component-->
      <Header :videoVariant="2" />

      <!-- Hero Section -->
      <div
        class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
      >
        <div
          class="absolute inset-0 bg-[url('/src/assets/img/about-us-banner.jpg')] bg-cover bg-center opacity-30"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
        ></div>

        <!-- Futuristic elements -->
        <div
          class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/30 animate-pulse"
        ></div>
        <div
          class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/50 animate-ping"
        ></div>
        <div
          class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/40 animate-pulse"
        ></div>

        <div
          class="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center"
        >
          <div class="mb-6">
            <LeafIcon
              class="w-12 h-12 mx-auto mb-4 text-green-400 animate-bounce"
            />
            <h1
              class="mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl"
            >
              ABOUT US
            </h1>
            <div
              class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
            ></div>
          </div>
          <p
            class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-medium"
          >
            We are committed to advancing agriculture
          </p>
          <p
            class="text-gray-400 max-w-[600px] text-sm md:text-base font-medium"
          >
            FarmGate is more than a company — we're a movement toward smarter,
            more sustainable farming
          </p>
        </div>
      </div>
    </div>

    <!-- Our Track Record Section -->
    <section class="max-w-[1440px] mx-auto pb-30 font-montserrat px-6 pt-10">
      <div
        class="flex flex-col items-center gap-10 lg:flex-row lg:justify-between"
      >
        <!-- Heading -->
        <h1
          class="font-semibold max-w-[450px] text-center lg:text-left text-lg text-gray-500"
        >
          Our conservation efforts include reforestation, wetland restoration,
          and habitat preservation to enhance biodiversity and ecological
          health.
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

    <section class="relative py-40 bg-stone-50 font-montserrat">
      <div class="sticky">
        <div
          class="w-full h-[300px] z-[-1] absolute top-[-165px] right-[150px]"
        >
          <img
            class="h-auto w-[480px] opacity-10"
            src="/src/assets/img/FarmGate Africa 1 1.png"
            alt=""
          />
        </div>
      </div>

      <div class="relative z-10 mx-auto max-w-[1440px] px-6">
        <div class="max-w-3xl mb-20">
          <!-- Tag -->
          <div class="mb-10">
            <h1
              class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[139px]"
            >
              <LeafIcon class="text-green-700" />
              <span class="text-xs font-semibold">Why choose us</span>
            </h1>
          </div>
          <h2 class="mb-8 text-4xl leading-tight md:text-6xl text-stone-900">
            Discover the values that <br />
            <span class="font-light text-stone-600">guide our mission.</span>
          </h2>
          <p
            class="pl-6 text-lg italic font-light leading-relaxed border-l-4 border-green-600 text-stone-600 md:text-xl"
          >
            "These are the deep-rooted principles that ensure every seed we sow
            leads to a harvest of shared prosperity across the continent."
          </p>
        </div>

        <div class="grid items-start grid-cols-1 gap-16 mb-24 lg:grid-cols-12">
          <div class="space-y-8 lg:col-span-7">
            <div
              class="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/10]"
            >
              <img
                src="/src/assets/img/farm-pic9.jpg"
                alt="Farming Value Chain"
                class="object-cover w-full h-full"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div
                class="absolute max-w-sm p-6 text-white border bottom-8 left-8 backdrop-blur-md bg-white/10 rounded-2xl border-white/20"
              >
                <p class="mb-2 text-sm font-medium tracking-widest uppercase">
                  Our Reach
                </p>
                <h4 class="text-xl font-semibold">
                  Empowering small-holder farmers through best-practice
                  adoption.
                </h4>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div
                class="p-8 transition-shadow bg-white border shadow-sm rounded-3xl border-stone-100 hover:shadow-md"
              >
                <h3 class="mb-4 text-xl font-bold text-stone-900">
                  The Value Chain
                </h3>
                <p class="text-sm leading-relaxed text-stone-600">
                  We operate across a significant section of the farming value
                  chain—operating our own farms and supplying raw material to
                  feed industries globally.
                </p>
              </div>
              <div class="p-8 text-white bg-green-900 shadow-xl rounded-3xl">
                <h3 class="mb-4 text-xl font-bold text-gray-50">Our Output</h3>
                <p class="text-sm leading-relaxed text-stone-300">
                  We grow diverse varieties of farm products, transforming them
                  into quality value-added agricultural products for ready
                  markets.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 lg:pt-9">
            <div
              class="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100 relative"
            >
              <div
                class="absolute flex items-center justify-center w-24 h-24 rounded-full -top-6 -right-6 bg-green-50"
              >
                <LeafIcon class="w-10 h-10 text-green-700" />
              </div>

              <h3 class="mb-6 font-serif text-3xl text-stone-900">
                Innovative Agri-Tech
              </h3>
              <p class="mb-8 leading-relaxed text-stone-600">
                At FarmGate Africa, we create opportunities that enable
                agribusinesses, food manufacturers, and governments to
                intelligently foster sustainable farming through our innovative
                platforms.
              </p>

              <ul class="space-y-4">
                <li
                  v-for="stake in [
                    'Agribusinesses',
                    'Food Manufacturers',
                    'NGOs',
                    'Governments',
                  ]"
                  :key="stake"
                  class="flex items-center gap-3 font-semibold text-stone-800"
                >
                  <span class="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                  {{ stake }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!--Tractor-Divider-->

        <div class="relative w-full overflow-hidden mb-22">
          <div class="relative z-10 leading-[0]">
            <svg
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              class="relative block w-full h-auto"
            >
              <path
                fill="#035925"
                fill-opacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>

            <img
              src="/images/tractor-removebg-preview.png"
              alt="Moving Tractor"
              class="absolute z-20 pointer-events-none tractor-sprite"
            />
          </div>
        </div>

        <div class="mx-6 mb-32">
          <h3
            class="text-2xl font-extrabold text-stone-900 mb-6 text-center uppercase tracking-[0.2em]"
          >
            Our Focal Areas
          </h3>
          <div
            class="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-green-400 to-green-800"
          ></div>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="area in focalAreas"
              :key="area.name"
              class="p-6 transition-shadow bg-white border shadow-sm cursor-default rounded-3xl border-stone-100 hover:shadow-lg group"
            >
              <div class="flex items-center mb-4">
                <div
                  class="flex items-center justify-center w-12 h-12 transition-colors bg-green-100 rounded-full group-hover:bg-green-700"
                >
                  <font-awesome-icon
                    :icon="area.icon"
                    class="w-6 h-6 text-green-700 group-hover:text-white"
                  />
                </div>
              </div>
              <h4 class="mb-2 text-xl font-bold text-stone-900">
                {{ area.name }}
              </h4>
              <p class="text-sm leading-relaxed text-stone-600">
                {{ area.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full bg-[#035925] text-white relative overflow-hidden">
        <div class="mx-auto max-w-[1440px] p-12 md:p-20">
          <div
            class="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center"
          >
            <div class="relative z-10">
              <h3 class="mb-6 text-3xl font-medium leading-tight md:text-4xl">
                Committed to Global Impact
              </h3>
              <p class="max-w-md mb-8 text-green-100/80">
                We are partnering with stakeholders to address food insecurity
                in Africa, dedicated to achieving the UN Sustainable Development
                Goals in every community.
              </p>

              <div class="flex flex-wrap gap-3">
                <span
                  v-for="sdg in [1, 2, 5, 8, 9, 13, 17]"
                  :key="sdg"
                  class="px-4 py-2 text-xs font-bold transition-colors border rounded-full bg-white/10 border-white/10 hover:bg-white/20"
                >
                  SDG {{ sdg }}
                </span>
              </div>
            </div>

            <div
              class="relative z-10 flex flex-col items-center justify-center lg:items-end"
            >
              <a
                href="/marketplace.html"
                class="relative flex items-center px-12 py-5 overflow-hidden bg-white rounded-full cursor-pointer group backdrop-blur-md"
              >
                <span
                  class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <LeafIcon class="w-4 h-4 text-[#035925]" />
                  <span
                    class="text-sm font-black leading-none text-[#035925] uppercase tracking-widest"
                    >Join our impact</span
                  >
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-black" />
                  <span
                    class="text-sm font-black leading-none tracking-widest uppercase"
                    >Join our impact</span
                  >
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          class="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 transform translate-x-1/4"
        ></div>
      </div>
    </section>

    <!-- Commented out section: Why choose us -->
    <!--
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="mb-10">
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[139px]"
        >
          <LeafIcon class="text-green-700" />
          <span class="text-xs font-semibold">Why choose us</span>
        </h1>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          <img
            src="/src/assets/img/farm-pic1.jpg"
            alt="Farm aerial"
            class="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div class="flex flex-col justify-center">
          <h2
            class="text-3xl font-semibold leading-tight text-gray-900 lg:text-2xl max-w-[550px]"
          >
            We’re more than just a farm — we’re your trusted partner in
            sustainable growing.
          </h2>
          <p class="mt-4 text-gray-600">
            From using organic methods and precision irrigation to minimizing
            chemical inputs and reducing waste through composting, every
            decision we make is guided by long-term environmental
            responsibility.
          </p>

          <div class="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
            <div class="p-6 bg-white shadow-sm rounded-xl">
              <img
                src="/src/assets/img/farm-pic10.jpg"
                alt="Innovation"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold text-gray-900">Effective Innovation</h3>
              <p class="mt-2 text-sm text-gray-600">
                Years of proven international experience in delivering scalable
                agricultural solutions across diverse climates and regions.
              </p>
            </div>

            <div class="p-6 text-white bg-black rounded-xl">
              <img
                src="/src/assets/img/farm-pic4.jpg"
                alt="Sustainable"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold">Sustainable Practices</h3>
              <p class="mt-2 text-sm text-gray-300">
                From pesticide-free farming to smart water use, we’re committed
                to methods that respect the planet and generations.
              </p>
            </div>

            <div class="p-6 text-white bg-green-900 rounded-xl">
              <img
                src="/src/assets/img/farm-pic2.jpg"
                alt="Market"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold">Trusted by Thousands</h3>
              <p class="mt-2 text-sm text-green-100">
                Farmers, distributors, and partners worldwide rely on us for
                quality, reliability, and long-term success.
              </p>
            </div>

            <div class="p-6 bg-gray-50 rounded-xl">
              <img
                src="/src/assets/img/farm-pic1.jpg"
                alt="Global"
                class="w-12 h-12 mb-3 rounded-md"
              />
              <h3 class="font-semibold text-gray-900">Global Expertise</h3>
              <p class="mt-2 text-sm text-gray-600">
                Years of international experience delivering scalable
                agricultural solutions across diverse climates and regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->

    <!-- Our-history-section -->
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <!-- Section Label -->
      <div class="flex justify-center">
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[120px] justify-center"
        >
          <LeafIcon class="text-green-700" />
          <span class="text-xs font-semibold">Our timeline</span>
        </h1>
      </div>

      <!-- Heading -->
      <div class="flex justify-center mb-12">
        <h1
          class="text-3xl font-semibold text-center leading-tighter max-w-[380px]"
        >
          From humble roots to a global vision.
        </h1>
      </div>

      <!-- Timeline Component (placed below heading, full width) -->
      <Timeline />
    </section>

    <!--
    <section
      class="max-w-[1440px] mx-auto py-10 sm:py-20 font-montserrat px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div class="mx-2">
        <div class="relative">
          <img
            src="/src/assets/img/farm-pic7.jpg"
            class="w-full max-w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[550px] object-cover rounded-xl brightness-60"
            alt="Farm Image"
          />
          <div
            class="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6"
          >
            <h1
              class="flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold bg-white sm:text-sm md:text-base lg:text-sm sm:px-5 text-green-950 rounded-4xl"
            >
              <LeafIcon class="text-green-700" />
              <span>Who We Are</span>
            </h1>
            <p
              class="max-w-[90%] sm:max-w-[700px] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight"
            >
              We are a team of agronomists, technologists, sustainability
              experts.
            </p>
            <p
              class="text-white max-w-[90%] sm:max-w-[700px] text-sm sm:text-base md:text-lg mb-6 sm:mb-8"
            >
              We partner with farmers and communities in over 15 countries to
              enhance productivity, protect the planet, and empower those behind
              each harvest.
            </p>
            <a
              href="/marketplace.html"
              class="md:flex group relative overflow-hidden p-3 sm:p-4 lg:p-3 rounded-4xl items-center gap-2 cursor-pointer bg-[rgb(3,89,37)] text-white font-semibold text-xs sm:text-sm md:text-base"
            >
              <span
                class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <LeafIcon class="text-white" />
                <span class="text-xs sm:text-sm md:text-base">Marketplace</span>
              </span>
              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-300 bg-gradient-to-r group-hover:translate-y-0"
              >
                <LeafIcon class="text-black" />
                <span class="text-xs font-semibold sm:text-sm md:text-base"
                  >Marketplace</span
                >
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    -->
    

    <GrowWithUs />

    <!--Footer-component-->
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Timeline from "../components/Timeline.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

const focalAreas = [
  {
    name: "Smart Farming",
    desc: "Leveraging technology for efficient agriculture.",
    icon: "fa-microchip",
  },
  {
    name: "Horticulture",
    desc: "Cultivating fruits, vegetables, and ornamental plants.",
    icon: "fa-seedling",
  },
  {
    name: "Animal Husbandry",
    desc: "Raising and breeding livestock for food and products.",
    icon: "fa-cow",
  },
  {
    name: "Aquaculture",
    desc: "Farming fish and aquatic organisms sustainably.",
    icon: "fa-fish",
  },
  {
    name: "Food Processing",
    desc: "Transforming raw agricultural products into consumable goods.",
    icon: "fa-industry",
  },
  {
    name: "Agri-Advisory",
    desc: "Providing expert guidance and consulting services.",
    icon: "fa-clipboard",
  },
  {
    name: "Training",
    desc: "Educating farmers and stakeholders on best practices.",
    icon: "fa-graduation-cap",
  },
];
</script>

<style scoped>
.tractor-sprite {
  width: 80px;
  bottom: 0;
  left: -100px;
  /* Adjust animation duration for 'Production-Ready' feel (15s as requested) */
  animation: moveTractorAlongWave 15s linear infinite;
}

@keyframes moveTractorAlongWave {
  0% {
    left: -100px;
    bottom: 15%;
    transform: rotate(0deg);
  }
  10% {
    left: 10%;
    bottom: 32%;
    transform: rotate(-5deg);
  }
  20% {
    left: 20%;
    bottom: 35%;
    transform: rotate(2deg);
  }
  30% {
    left: 30%;
    bottom: 30%;
    transform: rotate(0deg);
  }
  40% {
    left: 40%;
    bottom: 28%;
    transform: rotate(-15deg);
  }
  50% {
    left: 50%;
    bottom: 42%;
    transform: rotate(-12deg);
  }
  60% {
    left: 60%;
    bottom: 50%;
    transform: rotate(6deg);
  }
  70% {
    left: 70%;
    bottom: 45%;
    transform: rotate(0deg);
  }
  80% {
    left: 80%;
    bottom: 38%;
    transform: rotate(12deg);
  }
  90% {
    left: 90%;
    bottom: 35%;
    transform: rotate(6deg);
  }
  100% {
    left: 110%;
    bottom: 42%;
    transform: rotate(0deg);
  }
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .tractor-sprite {
    width: 50px;
    animation: moveTractorAlongWaveMobile 10s linear infinite;
  }
}

@keyframes moveTractorAlongWaveMobile {
  0% {
    left: -80px;
    bottom: 10%;
    transform: rotate(0deg);
  }
  50% {
    left: 50%;
    bottom: 25%;
    transform: rotate(-10deg);
  }
  100% {
    left: 110%;
    bottom: 10%;
    transform: rotate(0deg);
  }
}

/* Maintain Font consistency with your project */
.font-serif {
  font-family: "Playfair Display", serif;
}
</style>
