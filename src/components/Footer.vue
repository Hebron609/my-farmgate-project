<template>
  <section class="w-full mx-auto mt-20 font-montserrat">
    <footer class="bg-[rgb(3,89,37)] text-gray-300 px-6 sm:px-8 py-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 gap-12 py-10 sm:gap-16 md:grid-cols-2">
        <!-- Left Content -->
        <div class="flex flex-col items-start gap-6 sm:gap-8">
          <img
            class="w-[150px] sm:w-[150px] lg:w-[170px] h-auto cursor-pointer"
            :src="farmGateWhiteLogo"
            alt="Logo"
          />
        </div>

        <!-- Right Content -->
        <div>
          <div
            class="grid grid-cols-2 text-sm gap-x-6 gap-y-6 sm:gap-x-10 sm:text-base"
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
                { label: 'Refund & Return Policy', href: 'index.html' },
                { label: 'Privacy Policy', href: 'privacy.html' },
                { label: 'Cookies', href: 'Terms.html' },
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/20 pt-8 flex flex-wrap items-center justify-center sm:justify-between gap-y-2 text-sm">
        <p class="text-center whitespace-nowrap sm:text-left">
          © 2026 FarmGate Africa & Industries. All rights reserved.
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
    </footer>
  </section>
</template>

<script setup>
import FooterColumn from "./FooterColumn.vue";

import farmGateWhiteLogo from "@/assets/img/fg logo-white2.png";
</script>
