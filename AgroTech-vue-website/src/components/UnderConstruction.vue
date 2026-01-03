<template>
  <div class="flex items-center justify-center min-h-screen px-4 bg-gray-50">
    <!-- Blur background effect -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div
        class="bg-green-200 rounded-full w-96 h-96 blur-3xl opacity-20"
      ></div>
    </div>

    <div class="mx-auto text-center max-w-none">
      <!-- Illustration Placeholder -->
      <img
        src="/images/under-construction-placeholder1.png"
        alt="A friendly vector illustration of a sprouting plant with gears and farming tools around it, symbolizing growth and construction in agriculture."
        class="object-contain w-[150vw] h-auto md:w-[980px] md:h-auto md:scale-100 scale-150"
      />

      <!-- Heading -->
      <h1 class="mb-4 -mt-2 text-3xl font-bold text-gray-900 mt- md:-mt-30 md:text-4xl">
        We are constructing this 
        <span class="text-green-600">page for you</span>.
      </h1>

      <!-- Sub-text -->
      <p class="mb-8 text-gray-500">
        We're working hard to bring you new features. Check back soon!
      </p>

      <!-- Call to Action Button -->
      <a
        href="/"
        class="inline-block px-6 py-3 font-semibold text-white transition duration-200 rounded-full bg-gradient-to-r from-green-800 to-yellow-600 hover:shadow-xl hover:scale-105"
      >
        Go Back Home
      </a>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for this component
</script>
