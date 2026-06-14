<template>
  <section class="w-full mx-auto font-montserrat">
    <footer
      class="footer-bg text-gray-200 px-6 sm:px-8 min-h-[380px] flex flex-col justify-between py-14 sm:py-20 overflow-hidden"
    >
      <!-- Main Footer Content -->
      <div
        class="grid flex-1 grid-cols-1 gap-12 pb-20 footer-content sm:gap-16 lg:grid-cols-2"
      >
        <!-- Left Content -->
        <div
          class="relative flex flex-col items-start justify-end h-full gap-6 sm:gap-8"
        ></div>
        <!-- Responsive footer logo: visible on all, absolute on desktop -->
        <img
          class="block lg:absolute w-[120px] sm:w-[150px] lg:w-[170px] h-auto cursor-pointer left-0 lg:left-0 bottom-2 lg:bottom-8 z-20 ml-0"
          :src="farmGateWhiteLogo"
          alt="Logo"
        />

        <!-- Right Content -->
        <div class="relative flex flex-col h-full">
          <div
            class="grid grid-cols-2 text-sm sm:grid-cols-3 gap-x-6 gap-y-6 sm:gap-x-10 sm:text-base"
          >
            <FooterColumn
              title="Company"
              :items="[
                { label: 'About Us', href: '/about' },
                { label: 'Our Relevance', href: '/our-relevance' },
                { label: 'Investor Relations', href: '/' },
                { label: 'Marketplace', href: '/marketplace' },
              ]"
            />
            <FooterColumn
              title="Governance"
              :items="[
                { label: 'Grievances', href: '/' },
                { label: 'Financials', href: '/' },
                { label: 'Anti-corruption policy', href: '/' },
              ]"
            />
            <FooterColumn
              title="Legal"
              :items="[
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Refund & Return Policy', href: '/' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Risk Policy', href: '/' },
                { label: 'Cookies Policy', href: '/terms' },
              ]"
            />
          </div>

          <!-- Social Icons positioned at bottom right above the border -->
          <div
            class="flex items-center justify-center w-full gap-3 mt-12 lg:mt-auto lg:w-auto lg:absolute lg:-bottom-12 lg:right-0 lg:justify-end translate-y-2 lg:translate-y-4"
          >
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="flex items-center justify-center w-[36px] h-[36px] transition-all duration-300 border border-white/30 rounded-full text-white bg-white/5 backdrop-blur-sm hover:bg-[#F2CB00] hover:text-black hover:border-[#F2CB00] hover:-translate-y-1 shadow-sm hover:shadow-lg group"
            >
              <div
                v-if="social.svg"
                v-html="social.svg"
                class="w-[18px] h-[18px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              ></div>
              <font-awesome-icon
                v-else-if="social.icon"
                :icon="['fab', social.icon]"
                class="text-[15px] transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="flex flex-col flex-wrap items-start px-4 pt-6 pb-8 sm:pb-8 text-sm text-center border-t lg:flex-row footer-content border-white/20 gap-y-3 gap-x-0 lg:gap-x-4 lg:justify-between"
      >
        <div
          class="flex justify-center w-full mb-2 lg:w-auto lg:mb-0 lg:justify-start"
        >
          <span class="font-semibold text-[#F2CB00]">gateway to farming</span>
        </div>
        <div
          class="flex flex-col items-center w-full lg:w-auto lg:items-end gap-y-2"
        >
          <span class="text-center lg:text-right lg:whitespace-nowrap">
            © 2025-2026 FarmGate Africa & Industries Ltd.
            <span class="hidden lg:inline"> | All rights reserved.</span>
          </span>
          <span class="text-center lg:hidden">All rights reserved.</span>
          <span class="text-center lg:text-right lg:whitespace-nowrap">
            Powered by:
            <a
              href="https://butterflytech.io"
              target="_blank"
              class="ml-1 text-[#F2CB00]"
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

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/farmgate-africa-industries/",
    svg: `
<svg id="brand-linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M0,0H24V24H0Z" fill="none"></path>
  <path d="M4,4,4,6A2,2,0,0,1,6,4H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="M8,11v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M8,8v.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M12,16V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M16,16V13a2,2,0,0,0-4,0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
    `,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@farmgateafrica?si=cmGVgyhsOkbbzmv9",
    svg: `
<svg id="brand-youtube" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M0,0H24V24H0Z" fill="none"></path>
  <path d="M3,5,3,9A4,4,0,0,1,7,5H17a4,4,0,0,1,4,4v6a4,4,0,0,1-4,4H7a4,4,0,0,1-4-4Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
  <path d="M10,9l5,3-5,3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
    `,
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@farmgate.africa?_t=ZM-8uDH4dxrfC3&_r=1",
    svg: `
<svg id="brand-tiktok" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M0,0H24V24H0Z" fill="none"></path>
  <path d="M9,12a4,4,0,1,0,4,4V4a5,5,0,0,0,5,5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
    `,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/farmgate_africa?igsh=YnAzN2Vsb3NqbmV4",
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M0,0H24V24H0Z" fill="none"></path>
  <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"></rect>
  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"></circle>
  <circle cx="16.5" cy="7.5" r="1" fill="currentColor"></circle>
</svg>
    `,
  },
  {
    name: "X (Twitter)",
    link: "https://x.com/FarmGate_Africa?t=ez-1Eavg8y9abxxLS_F0gw&s=09",
    icon: "x-twitter",
  },
];
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
