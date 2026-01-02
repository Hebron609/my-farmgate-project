<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div class="relative overflow-hidden h-[580px] pt-32">
      <img
        src="/images/Privacy.jpg"
        class="absolute top-0 left-0 w-full h-full object-cover brightness-[0.59] z-0"
        alt=""
      />

      <div
        class="absolute z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center top-13 sm:px-6 lg:px-8"
      >
        <h1
          class="mb-4 font-semibold text-white py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl text-xs sm:text-sm md:text-base lg:text-sm px-4 sm:px-5 md:px-3 flex items-center gap-2"
        >
          <LeafIcon class="text-white" />
          <span>Privacy Policy</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          Your privacy matters to us.
        </p>
        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          Learn how we protect your personal information.
        </p>
      </div>
    </div>

    <!-- Privacy Content Section -->
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="prose prose-lg max-w-none">
        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how FarmGate Africa collects, uses, and
          protects your personal information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you
          create an account or contact us.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information to provide our services, communicate with you,
          and improve our platform.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at
          connect@farmgateafrica.com.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
</script>

<style></style>
