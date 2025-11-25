<template>
<section class="max-w-[1440px] mx-auto mt-20 font-montserrat px-6 sm:px-8">
  <footer
    class="grid grid-cols-1 gap-12 py-10 text-gray-800 bg-white sm:gap-16 md:grid-cols-2"
  >
    <!-- Left Content -->
    <div class="flex flex-col items-start gap-6 sm:gap-8">
      <img
        class="w-[180px] sm:w-[220px] lg:w-[260px] h-auto cursor-pointer"
        src="/src/assets/img/fg logo.png"
        alt="Logo"
      />
      <h3
        class="text-lg sm:text-xl md:text-2xl font-semibold leading-snug max-w-[90%] sm:max-w-[280px]"
      >
        Redefining agriculture at a global scale.
      </h3>
      <!-- Social Links -->
      <div class="flex flex-wrap items-center gap-4">
        <FooterSocialButton
          icon="fa-brands fa-instagram"
          label="Instagram"
          href="https://instagram.com"
        />
        <FooterSocialButton
          icon="fa-brands fa-youtube"
          label="YouTube"
          href="https://youtube.com"
        />
        <FooterSocialButton
          icon="fa-brands fa-facebook-f"
          label="Facebook"
          href="https://facebook.com"
        />
      </div>
    </div>

    <!-- Right Content -->
    <div>
      <div
        class="grid grid-cols-2 text-sm gap-x-6 gap-y-6 sm:grid-cols-3 sm:gap-x-10 md:grid-cols-4 sm:text-base"
      >
        <FooterColumn
          title="Home"
          :items="[{ label: 'Home', href: 'index.html' }]"
        />
        <FooterColumn
          title="Company"
          :items="[
            { label: 'About Us', href: 'about.html' },
            { label: 'Our Team', href: 'team.html' },
            { label: 'Pricing', href: 'pricing.html' },
          ]"
        />
        <FooterColumn
          title="Solutions"
          :items="[
            { label: 'My Farm', href: 'climate-resilient.html' },
            { label: 'Marketplace', href: 'tech-integration.html' },
            { label: 'FarmGate', href: 'organic.html' },
            { label: 'AgroTech', href: 'supply-support.html' },
            { label: 'Diba Foods', href: 'irrigation.html' },
          ]"
        />
        <FooterColumn
          title="Information"
          :items="[
            { label: 'Blog', href: 'blog.html' },
            { label: 'FAQ', href: 'faq.html' },
            { label: 'Gallery', href: 'gallery.html' },
          ]"
        />
      </div>
    </div>
  </footer>
</section>



  <!-- Bottom Bar -->
  <div class="bg-[rgb(3,89,37)] h-13 relative">
    <div
      class="absolute inset-0 flex flex-wrap items-center text-white font-normal text-sm max-w-[1440px] mx-auto px-4 sm:px-8 justify-center sm:justify-between gap-y-2"
    >
      <p class="text-center whitespace-nowrap sm:text-left">
        © 2025 FarmGate Africa & Industries. All rights reserved.
      </p>
      <p class="text-center whitespace-nowrap sm:text-right">
        Powered by:
        <span class="ml-1 text-yellow-300">Butterfly Technologies</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import FooterColumn from "./FooterColumn.vue";
import FooterSocialButton from "./FooterSocialButton.vue";
</script>
