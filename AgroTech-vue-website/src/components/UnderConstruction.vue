<template>
  <div class="relative flex items-center justify-center min-h-screen px-4">
    <!-- Blurred Background Layer -->
    <div
      class="fixed inset-0 bg-[url('/images/pattern-bg1.webp')] bg-cover bg-center blur-2xl bg-black/40"
    ></div>
    <!-- Content -->
    <div
      class="relative z-10 max-w-lg p-8 mx-auto text-center border shadow-xl bg-white/30 backdrop-blur-md border-white/20 rounded-3xl"
    >
      <!-- Illustration Placeholder -->
      <picture>
        <source
          srcset="/images/under-construction-placeholder.webp"
          type="image/webp"
        />
        <img
          src="/images/under-construction-placeholder.png"
          alt="A friendly vector illustration of a sprouting plant with gears and farming tools around it, symbolizing growth and construction in agriculture."
          class="mx-auto mb-8 w-[480px] h-auto"
        />
      </picture>

      <!-- Heading -->
      <h1 class="mb-4 text-3xl font-bold text-gray-900">
        We are constructing this page for you.
      </h1>

      <!-- Sub-text -->
      <p class="mb-8 text-gray-200">
        We're working hard to bring you new features. Check back soon!
      </p>

      <!-- Call to Action Button -->
      <a
        href="/"
        class="inline-block px-6 py-3 font-semibold text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700"
      >
        Go Back Home
      </a>
    </div>
  </div>
</template>

<script setup>
  import patternBg from "@/assets/img/pattern-bg1.webp";
// No additional script needed for this component
</script>
