<template>
  <div
    class="min-h-screen bg-[#FDFCF8] flex flex-col justify-center items-center px-4"
  >
    <!-- Blur background effect -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div
        class="bg-green-200 rounded-full w-96 h-96 blur-3xl opacity-20"
      ></div>
    </div>

    <!-- Central Illustration -->
    <div class="relative z-10 mb-2">
      <img
        src="/images/Marketplace-illustration.png"
        alt="Digital Farmers' Market Illustration"
        class="object-contain w-[150vw] h-auto md:w-[980px] md:h-auto md:scale-100 scale-160 mb-5"
      />
    </div>

    <!-- Headline -->
    <h1
      class="relative z-10 mb-4 -mt-20 text-3xl font-bold text-center text-gray-800 md:-mt-45 md:text-4xl "
    >
      Building a Market Experience
      <span class="text-green-600">Like No Other</span>
    </h1>

    <!-- Subtext -->
    <p class="relative z-10 max-w-md mb-8 text-center text-gray-600 md:text-lg">
      We are busy constructing a unique digital space for fresh produce
      commerce. Get ready for something special.
    </p>

    <!-- Call to Action Button -->
    <a
      href="/"
      class="relative z-10 px-6 py-3 font-bold text-white transition-all duration-200 rounded-full bg-gradient-to-r from-green-800 to-yellow-600 hover:shadow-xl hover:scale-105"
    >
      Go Back Home
    </a>
  </div>
</template>

<script setup>
// No script needed for this component
</script>
