<template>
  <div>
    <div class="relative overflow-hidden h-[580px] pt-32">
      <!-- Header-component -->
      <Header :videoVariant="2" />

      <img
        src="/src/assets/img/our-solutions-banner.jpg"
        class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.56] z-0"
        alt=""
      />

      <!-- Hero-section-content -->
      <div
        class="absolute z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center top-2 sm:px-6 lg:px-8"
      >
        <h1
          class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-sm px-4 sm:px-5 md:px-3 flex items-center gap-2"
        >
          <LeafIcon class="text-white" />
          <span>Our solutions</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          Transforming agriculture through innovation.
        </p>

        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          Our goal is simple: to empower growers, strengthen supply chains, and
          regenerate the land we depend on.
        </p>
      </div>
    </div>

    <!--Flex-heading-->
    <section
      class="max-w-[1440px] mx-auto py-10 sm:py-12 font-montserrat px-4 sm:px-6 lg:px-8 border-b-2 border-b-gray-100 lg:pt-28"
    >
      <div
        class="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center"
      >
        <div>
          <h1
            class="flex items-center gap-1 px-2 py-1 mb-4 border border-gray-200 rounded-2xl"
          >
            <LeafIcon class="text-green-700" />
            <span class="text-[10px] sm:text-xs font-semibold"
              >Delivering impact at every level</span
            >
          </h1>
        </div>

        <div>
          <h1
            class="text-xl sm:text-2xl lg:text-4xl max-w-[90%] sm:max-w-[700px] font-semibold"
          >
            Explore how our integrated solutions help farms and food systems
            thrive.
          </h1>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <div
      class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16 font-montserrat"
    >
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
        <!-- Card -->
        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            src="/src/assets/img/farm-crops.jpg"
            alt="Precision Farming"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 lg:mb-0 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Precision farming
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              We use data-driven insights and smart technology to help farmers
              monitor soil health.
            </p>
          </div>
        </div>

        <!-- Repeat the same pattern for other items -->
        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            src="/src/assets/img/farm-irrigation.jpg"
            alt="Sustainable Irrigation"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Sustainable irrigation
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Our advanced irrigation systems reduce water waste and support
              efficient crop hydration.
            </p>
          </div>
        </div>

        <!-- Supply Chain Support -->
        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            src="/src/assets/img/farm-pic9.jpg"
            alt="Supply Chain Support"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Supply chain support
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Smarter post-harvest logistics and digital tracking systems for
              fresher, better-quality products.
            </p>
          </div>
        </div>

        <!-- Climate-Resilient Program -->
        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            src="/src/assets/img/farm-pic1.jpg"
            alt="Climate Resilient Program"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-32 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Climate-Resilient program
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Our team works closely with clients to implement scalable
              solutions that improve resilience and long-term productivity.
            </p>
          </div>
        </div>

        <!-- Technology Integration -->
        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            src="/src/assets/img/farm-pic6.jpg"
            alt="Technology Integration"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-34 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Technology integration
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              We bring cutting-edge technology into the heart of agriculture —
              making operations smarter, faster, and more resilient from field
              to market.
            </p>
          </div>
        </div>

        <!-- Organic Practices -->
        <div
          class="flex flex-col items-start overflow-hidden transition-shadow duration-300 bg-white shadow-md lg:flex-row lg:space-x-6 rounded-2xl hover:shadow-xl group"
        >
          <img
            src="/src/assets/img/farm-pic3.jpg"
            alt="Organic Practices"
            class="object-cover w-full h-56 transition-transform duration-500 transform md:h-64 lg:w-44 lg:h-34 group-hover:scale-105"
          />
          <div class="p-4">
            <h3
              class="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
            >
              Organic practices
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              Our organic practices prioritize soil vitality, natural inputs,
              and ecological harmony to produce high-quality crops without
              synthetic chemicals or GMOs.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--Grow-with-us-section-->
    <section
      class="max-w-[1440px] mx-auto py-20 font-montserrat px-4 sm:px-6 lg:px-8"
    >
      <div class="mx-2">
        <div class="relative">
          <img
            src="/src/assets/img/farm-pic9.jpg"
            class="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover rounded-xl brightness-60"
            alt=""
          />

          <div
            class="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6"
          >
            <p
              class="max-w-[90%] sm:max-w-[500px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight"
            >
              Grow something great together.
            </p>

            <p
              class="text-white max-w-[90%] sm:max-w-[490px] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 mt-2"
            >
              Whether you’re a farmer, distributor, or partner, we’re here to
              support your goals with sustainable solutions and global
              expertise.
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
  </div>

  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
</script>

<style></style>
