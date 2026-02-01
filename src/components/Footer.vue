<template>
  <section class="max-w-[1900px] mx-auto mt-20 font-montserrat px-6 sm:px-8 ">
    <footer
      class="grid grid-cols-1 gap-12 py-10 text-gray-800 bg-white sm:gap-16 md:grid-cols-2 "
    >
      <!-- Left Content -->
      <div class="flex flex-col items-start gap-6 sm:gap-8">
        <img
          class="w-[150px] sm:w-[150px] lg:w-[160px] h-auto cursor-pointer"
          :src="farmGateLogo"
          alt="Logo"
        />

       
        
      </div>

      <!-- Right Content -->
      <div>
        <div
          class="grid grid-cols-2 text-sm gap-x-6 gap-y-6 sm:grid-cols-3 sm:gap-x-10 md:grid-cols-4 sm:text-base"
        >
         
          <FooterColumn
            title="Company"
            :items="[
             { label: 'Our Story', href: 'about.html' },
             { label: 'Our Initiatives', href: 'solutions.html' },
             { label: 'Investor Relations', href: 'index.html' },
             { label: 'Marketplace', href: 'marketplace.html' },
            ]"
          />
          <FooterColumn
            title="Legal"
            :items="[
              { label: 'Terms & Conditions', href: 'Terms.html' },
              { label: 'Privacy Policy', href: 'privacy.html' },
              { label: 'Refund & Return Policy', href: 'index.html' },
              { label: 'Cookies', href: 'Terms.html' },
            ]"
          />
          <FooterColumn
            title="Quick links"
            :items="[
              

            ]"
          />
          
          <FooterColumn
            title="Quick links"
            :items="[
              

            ]"
          />
        </div>
      </div>
    </footer>
  </section>

  <!-- Bottom Bar -->
  <div class="bg-[rgb(3,89,37)] h-13 relative">
    <div
      class="absolute inset-0 flex flex-wrap items-center text-white font-normal text-sm max-w-[1900px] mx-auto px-4 sm:px-8 justify-center sm:justify-between gap-y-2"
    >
      <p class="text-center whitespace-nowrap sm:text-left">
        © 2025 FarmGate Africa & Industries. All rights reserved.
      </p>
      <p class="text-center whitespace-nowrap sm:text-right">
        Powered by:
        <a
          href="https://butterflytech.io"
          target="_blank"
          class="ml-1 text-yellow-300"
          >Butterfly Technologies</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import FooterColumn from "./FooterColumn.vue";

import farmGateLogo from "@/assets/img/FarmGate Africa 1 1.png";
</script>
