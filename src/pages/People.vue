<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <div
        class="absolute inset-0 bg-[url('/src/assets/img/group-farm-image.jpg')] bg-cover bg-center opacity-30"
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
            OUR PEOPLE
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="max-w-[800px] text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          The team behind the mission.
        </p>
        <p class="text-gray-400 max-w-[600px] text-sm md:text-base">
          Meet the experts and innovators driving sustainable agriculture
          forward.
        </p>
      </div>
    </div>

    <!-- Team Section -->

    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="mb-10">
        <h1
          class="flex items-center gap-1 px-2 py-1 mb-4 border-gray-200 border-1 rounded-2xl max-w-[110px] justify-center"
        >
          <LeafIcon class="text-green-700" />
          <span class="text-xs font-semibold">Our Team</span>
        </h1>
      </div>

      <!--Our-Team-heading-flex-->
      <div
        class="flex-col items-center justify-between gap-6 mb-12 md:flex md:flex-row"
      >
        <h3 class="mb-2 text-2xl font-semibold md:text-3xl md:max-w-[20%]">
          Meet Our <span class="text-green-800">Diverse Team</span>
        </h3>

        <p class="md:max-w-[30%] text-gray-600">
          We are a team of highly motivated professionals ready to go great
          lengths to grow your business with you, whatever your needs are!
        </p>
      </div>

      <div class="px-4 py-16 font-sans bg-white">
        <div
          class="flex flex-col items-start justify-between gap-20 mx-auto max-w-[1440px] lg:flex-row"
        >
          <div class="flex-1 space-y-8">
            <svg
              class="w-12 h-12 mb-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.816 9.12 8.808 9.12 3.816 0 6.84-2.568 6.84-6.264 0-3.36-2.448-5.64-5.568-5.64-1.296 0-2.496.432-3.312 1.128-.6.48-1.152.6-1.464.144.6-3.168 3.144-6.552 7.344-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.816 9.12 8.808 9.12 3.816 0 6.84-2.568 6.84-6.264 0-3.36-2.448-5.64-5.568-5.64-1.296 0-2.496.432-3.312 1.128-.6.48-1.152.6-1.464.144.6-3.168 3.144-6.552 7.344-9.024L25.864 4z"
              />
            </svg>
            <blockquote
              class="text-2xl font-semibold leading-snug text-gray-900 sm:text-3xl md:max-w-[85%]"
            >
              "We started this journey with a simple belief — that farming can
              feed the world without harming it. Every seed we plant, every
              partnership we build, reflects our commitment to sustainability,
              innovation, and people."
            </blockquote>
            <div>
              <div class="text-4xl font-semibold text-gray-900 sm:text-5xl">
                Nelson Madiba Amo
              </div>
              <div class="mt-2 text-lg text-gray-500">Founder & CEO</div>
            </div>
          </div>
          <div>
            <img
              class="object-cover w-[480px] h-auto rounded-3xl"
              :src="nelsonImage"
              alt="James Der Linden, Founder & CEO"
            />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="member in team"
          :key="member.name"
          @click="openModal(member)"
          class="group relative overflow-hidden rounded-3xl bg-white cursor-pointer aspect-[4/5]"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div
            class="absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:opacity-100"
          >
            <h4
              class="text-2xl font-bold text-white transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              {{ member.name }}
            </h4>
            <p
              class="font-medium tracking-wide text-green-400 transition-transform duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0"
            >
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Modal -->
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4"
      >
        <div
          @click="closeModal"
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        ></div>
        <div
          class="relative bg-white rounded-[1.5rem] shadow-2xl max-w-sm md:max-w-5xl w-full flex flex-col md:flex-row overflow-hidden"
        >
          <button
            @click="closeModal"
            class="absolute z-10 px-4 py-1 text-sm font-bold uppercase border-2 rounded-full top-6 right-6 border-stone-300 text-stone-500 hover:bg-stone-100"
          >
            close x
          </button>

          <div class="w-full md:w-[45%] h-[400px] md:h-auto">
            <img
              :src="selectedMember.image"
              :alt="selectedMember.name"
              class="object-cover w-full h-full"
            />
          </div>

          <div
            class="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center"
          >
            <h3 class="text-3xl font-bold leading-tight">
              {{ selectedMember.name }}
            </h3>
            <p class="mt-1 text-lg font-semibold tracking-tight text-[#035925]">
              {{ selectedMember.role }}
            </p>

            <div class="mt-8 mb-26 overflow-y-auto max-h-[300px]">
              <p class="leading-relaxed text-stone-600">
                {{ selectedMember.bio }}
              </p>
            </div>

            <div>
              <a
                :href="selectedMember.linkedin"
                target="_blank"
                class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0077b5] text-white font-bold rounded-full hover:bg-[#006396] transition-all active:scale-95"
              >
                Connect on Linkedin
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <GrowWithUs />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

import heroImage from "../assets/img/group-farm-image.jpg";
import nelsonImage from "../assets/img/Nelson.png";

import { ref } from "vue";

const isOpen = ref(false);
const selectedMember = ref(null);

const openModal = (member) => {
  selectedMember.value = member;
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const team = [
  {
    name: "Emmanuel G. Baiden",
    role: "Finance Business Partner",
    image: "/images/Emmanuel.png",
    bio: "Emmanuel is a finance professional with over a decade of experience in business operations and project management. He leads financial management for major grants and impact-focused projects at Innohub including an SGB Climate Investment Fund. An MSc holder in Accounting and Finance, he strengthens Innohub's operations through robust financial leadership.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Juliet Yayra Dzasi",
    role: "Programs Lead",
    image: "/images/Juliet.png",
    bio: "Juliet is a results-driven program manager with expertise in managing impactful projects like the MTN Ghana SME Support Programme and the Tullow AgriVentures Programme. She is currently pursuing a Master's degree in Development Management from KNUST, holds a BA in Rural Development, a training certificate in Project Management from PMI, and an executive certificate in Business Administration from Accra Business School.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rachael Frempah",
    role: "Finance Lead",
    image: "/images/Rachael.png",
    bio: "Rachael is a skilled finance professional with expertise in strategic financial planning, analysis, and grant management. She excels in delivering financial insights and driving process improvements to support business growth. Before Innohub, she worked as a Finance Officer at GHIPSS, handling accounts receivable. Rachael holds a BSc in Banking and Finance from UGBS and is pursuing ACCA certification to become a Chartered Accountant.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Samuel Boateng",
    role: "Creative Media Lead",
    image: "/images/Sammy.png",
    bio: "A self-taught creative with expertise in videography, photography, graphic design, and sound design, Samuel oversees media production at Innohub, crafting impactful video documentaries for partners like Tullow, MTN, and Fidelity Bank. With a BSc in Physics from UCC, he previously led Ghana Tech Lab's Creative Space Team, training over 1,000 youths in digital multimedia. His diverse portfolio includes collaborations with brands such as WACOMP, StartOA, and EMTECH.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rachael Frempah",
    role: "Finance Lead",
    image: "/images/Rachael.png",
    bio: "Rachael is a skilled finance professional with expertise in strategic financial planning, analysis, and grant management. She excels in delivering financial insights and driving process improvements to support business growth. Before Innohub, she worked as a Finance Officer at GHIPSS, handling accounts receivable. Rachael holds a BSc in Banking and Finance from UGBS and is pursuing ACCA certification to become a Chartered Accountant.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Juliet Yayra Dzasi",
    role: "Programs Lead",
    image: "/images/Juliet.png",
    bio: "Juliet is a results-driven program manager with expertise in managing impactful projects like the MTN Ghana SME Support Programme and the Tullow AgriVentures Programme. She is currently pursuing a Master's degree in Development Management from KNUST, holds a BA in Rural Development, a training certificate in Project Management from PMI, and an executive certificate in Business Administration from Accra Business School.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Samuel Boateng",
    role: "Creative Media Lead",
    image: "/images/Sammy.png",
    bio: "A self-taught creative with expertise in videography, photography, graphic design, and sound design, Samuel oversees media production at Innohub, crafting impactful video documentaries for partners like Tullow, MTN, and Fidelity Bank. With a BSc in Physics from UCC, he previously led Ghana Tech Lab's Creative Space Team, training over 1,000 youths in digital multimedia. His diverse portfolio includes collaborations with brands such as WACOMP, StartOA, and EMTECH.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Emmanuel G. Baiden",
    role: "Finance Business Partner",
    image: "/images/Emmanuel.png",
    bio: "Emmanuel is a finance professional with over a decade of experience in business operations and project management. He leads financial management for major grants and impact-focused projects at Innohub including an SGB Climate Investment Fund. An MSc holder in Accounting and Finance, he strengthens Innohub's operations through robust financial leadership.",
    linkedin: "https://linkedin.com",
  },
];
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > .relative,
.modal-leave-active > .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from > .relative,
.modal-leave-to > .relative {
  transform: scale(0.95);
}
</style>
