<template>
  <!--Grow-with-us-section-->
  <section
    class="max-w-[1440px] mx-auto py-20 font-montserrat px-4 sm:px-6 lg:px-8"
  >
    <div class="mx-2">
      <div class="relative">
        <img
          :src="farmPic9"
          class="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover rounded-xl brightness-60"
          alt=""
        />

        <div
          class="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center sm:px-6"
        >
          <h2
            class="max-w-[90%] sm:max-w-[500px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight"
          >
            Let grow something great together.
          </h2>

          <p
            class="text-white max-w-[90%] sm:max-w-[490px] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 mt-2"
          >
            Whether you’re an organization, an NGO, a farmer, distributor, a
            coporate body an individual, we’re here to partner you, to achieve
            your sustainable farming goals.
          </p>

          <a
            href="/marketplace.html"
            class="relative flex items-center px-4 py-2 overflow-hidden bg-yellow-400 cursor-pointer group rounded-4xl"
          >
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <LeafIcon class="text-black" />
              <span class="text-sm font-semibold leading-none text-black"
                >Marketplace</span
              >
            </span>

            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-white transition-transform duration-300 transform translate-y-full bg-[#129C48]/40 backdrop-blur-md group-hover:translate-y-0 rounded-4xl"
            >
              <LeafIcon class="text-white" />
              <span class="text-sm font-semibold leading-none text-white"
                >Marketplace</span
              >
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import farmPic9 from "@/assets/img/farm-pic7.jpg";
import LeafIcon from "@/components/icons/LeafIcon.vue";
</script>
