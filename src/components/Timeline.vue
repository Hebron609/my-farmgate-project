<template>
  <section class="max-w-[1440px] mx-auto px-6  font-montserrat">
    <!-- Year Selector -->
    <div class="flex justify-center gap-3 mb-12">
      <button
        v-for="year in years"
        :key="year"
        @click="activeYear = year"
        :class="[
          'px-4 py-1 rounded-full border transition-all duration-300',
          activeYear === year
            ? 'bg-green-900 text-white font-semibold'
            : 'bg-white border-gray-300 hover:bg-gray-100'
        ]"
      >
        {{ year }}
      </button>
    </div>

    <!-- Content -->
    <div class="grid items-stretch gap-8 md:grid-cols-2">
      <!-- Text Section -->
      <div class="flex flex-col justify-start p-8 rounded-lg shadow-sm bg-gray-50">
        <font-awesome-icon icon="leaf" class="mb-4 text-3xl text-green-900" />
        <h2 class="mb-4 text-2xl font-bold text-green-900">
          {{ activeContent.title }}
        </h2>
        <p class="leading-relaxed text-gray-700 text-md">
          {{ activeContent.text }}
        </p>
      </div>

      <!-- Image Section -->
      <div>
        <img
          :src="activeContent.image"
          :alt="activeContent.title"
          class="w-full h-full min-h-[350px] object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const years = [2010, 2014, 2018, 2025];
const activeYear = ref(2010);


import farmPic2 from "@/assets/img/farm-pic2.jpg"
import farmPic6 from "@/assets/img/farm-pic6.jpg"
import farmPic3 from "@/assets/img/farm-pic3.jpg"
import farmPic1 from "@/assets/img/farm-pic1.jpg"

const content = {
  2010: {
    title: "Agricultural Group is founded with a mission to support sustainable farming.",
    text: "Agricultural Group was founded with a clear purpose: to make farming more sustainable, efficient, and accessible. What began as a local initiative focused on soil restoration and water conservation quickly gained traction among forward-thinking growers.",
    image: farmPic2
  },
  2014: {
    title: "Expansion into regional farming projects.",
    text: "By 2014, the group expanded operations, introducing innovative irrigation systems and farmer training programs that transformed local communities.",
    image: farmPic6
  },
  2018: {
    title: "Technology-driven solutions introduced.",
    text: "2018 marked the integration of precision farming tools, data-driven insights, and partnerships with agri-tech companies to boost productivity.",
    image: farmPic3
  },
  2025: {
    title: "Global recognition in sustainable agriculture.",
    text: "Today, Agricultural Group is recognized internationally for advancing eco-friendly farming practices, driving food security, and empowering smallholder farmers worldwide.",
    image: farmPic1
  }
};

const activeContent = computed(() => content[activeYear.value]);
</script>
