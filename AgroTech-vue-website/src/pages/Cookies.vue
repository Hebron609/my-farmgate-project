<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div class="relative overflow-hidden h-[580px] pt-32">
      <img
        src="/src/assets/img/farm-pic4.jpg"
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
          <span>Cookies Policy</span>
        </h1>
        <p
          class="max-w-[90%] sm:max-w-[700px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 sm:mb-8"
        >
          How we use cookies.
        </p>
        <p
          class="text-white max-w-[90%] sm:max-w-[500px] text-sm sm:text-base md:text-lg"
        >
          Understand our cookie practices and your choices.
        </p>
      </div>
    </div>

    <!-- Cookies Content Section -->
    <section class="max-w-[1440px] mx-auto px-6 py-20 font-montserrat">
      <div class="prose prose-lg max-w-none">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device when you
          visit our website.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          We use cookies to improve your browsing experience, analyze site
          traffic, and personalize content.
        </p>

        <h2>Types of Cookies</h2>
        <ul>
          <li>Essential cookies: Required for the website to function.</li>
          <li>
            Analytics cookies: Help us understand how visitors use our site.
          </li>
          <li>Marketing cookies: Used to deliver relevant advertisements.</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. However,
          disabling cookies may affect site functionality.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about our Cookies Policy, contact us at
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
