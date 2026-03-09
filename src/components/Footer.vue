<template>
  <section class="w-full mx-auto font-montserrat">
    <footer
      class="footer-bg text-gray-200 px-6 sm:px-8 min-h-[380px] flex flex-col justify-between py-14 sm:py-20 overflow-hidden"
    >
      <!-- Main Footer Content -->
      <div
        class="grid flex-1 grid-cols-1 gap-12 pb-20 footer-content sm:gap-16 md:grid-cols-2"
      >
        <!-- Left Content -->
        <div
          class="relative flex flex-col items-start justify-end h-full gap-6 sm:gap-8"
        ></div>
        <!-- Responsive footer logo: visible on all, absolute on desktop -->
        <img
          class="block sm:absolute w-[120px] sm:w-[150px] lg:w-[170px] h-auto cursor-pointer left-0 sm:left-0 bottom-2 sm:bottom-8 z-20 ml-0"
          :src="farmGateWhiteLogo"
          alt="Logo"
        />

        <!-- Right Content -->
        <div>
          <div
            class="grid grid-cols-2 text-sm sm:grid-cols-4 gap-x-6 gap-y-6 sm:gap-x-10 sm:text-base"
          >
            <FooterColumn
              title="Company"
              :items="[
                { label: 'About Us', href: 'about.html' },
                { label: 'Our Relevance', href: 'our-relevance.html' },
                { label: 'Investor Relations', href: 'index.html' },
                { label: 'Marketplace', href: 'marketplace.html' },
              ]"
            />
            <FooterColumn
              title="Governance"
              :items="[
                { label: 'Grievances', href: 'index.html' },
                { label: 'Financials', href: 'index.html' },
                { label: 'Anti-corruption policy', href: 'index.html' },
              ]"
            />
            <FooterColumn
              title="Legal"
              :items="[
                { label: 'Terms & Conditions', href: 'Terms.html' },
                { label: 'Refund & Return Policy', href: 'index.html' },
                { label: 'Privacy Policy', href: 'privacy.html' },
                { label: 'Risk Policy', href: 'index.html' },
                { label: 'Cookies Policy', href: 'Terms.html' },
              ]"
            />

            <FooterColumn
              title="Quick Links"
              :items="[
                { label: 'Book a farm visit', href: 'contact.html' },
                { label: 'Schedule a quick call', href: 'contact.html' },
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="flex flex-col flex-wrap items-center px-4 pt-8 text-sm text-center border-t sm:flex-row footer-content border-white/20 gap-y-3 gap-x-0 sm:gap-x-4 sm:justify-between"
      >
        <div
          class="flex justify-center w-full mb-2 sm:w-auto sm:mb-0 sm:justify-start"
        >
          <span class="font-semibold text-yellow-300">gateway to farming</span>
        </div>
        <div
          class="flex flex-col items-center w-full sm:w-auto sm:flex-row sm:justify-end gap-y-2 gap-x-4"
        >
          <span class="text-center break-words sm:text-right">
            © 2026 FarmGate Africa & Industries Ltd. | All rights reserved.
          </span>
          <span class="text-center break-words sm:text-right">
            Powered by:
            <a
              href="https://butterflytech.io"
              target="_blank"
              class="ml-1 text-yellow-300"
              >Butterfly Technologies</a
            >
          </span>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import FooterColumn from "./FooterColumn.vue";
import farmGateWhiteLogo from "@/assets/img/fg logo-white2.png";
</script>

<style scoped>
@import "@/assets/footer-bg.css";

/* Enhance text shadow for visibility */
.footer-content,
.footer-content * {
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.25),
    0 1px 2px rgba(0, 0, 0, 0.18);
}
</style>
