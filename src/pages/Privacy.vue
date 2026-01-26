<template>
  <div class="min-h-screen bg-white">
    <div class="bg-green-800 py-25">
      <Header :videoVariant="2" />
    </div>

    <section class="max-w-[1000px] mx-auto px-6 py-24 font-montserrat text-gray-800">
      
      <div class="mb-20 text-center reveal-fade">
        <h1 class="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Privacy Policy
        </h1>
        <p class="text-sm font-medium tracking-widest text-gray-500 uppercase">
          Last Updated: Jan 17, 2026
        </p>
      </div>

      <div class="space-y-16">
        
        <div class="reveal-slide-up">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Introduction.</h2>
          <p class="text-lg leading-relaxed">
            At FarmGate Africa, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our sustainable agriculture technology platform and services.
          </p>
        </div>

        <div class="reveal-slide-up">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Information We Collect.</h2>
          <p class="mb-6 text-lg leading-relaxed">
            To provide and improve our services, we collect data necessary for legitimate business purposes. This includes:
          </p>
          <ul class="pl-5 space-y-4 text-lg list-disc">
            <li>Personal identification information (Name, email address, phone number).</li>
            <li>Farm data and agricultural practices shared through our platforms.</li>
            <li>Transaction history and payment information processed by third-party providers.</li>
            <li>Device and usage data collected through cookies and tracking technologies.</li>
          </ul>
        </div>

        <div class="reveal-slide-up">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">How We Use Your Information.</h2>
          <p class="mb-6 text-lg leading-relaxed">
            The data we collect is used to enhance your experience and support our mission of sustainable farming. Specifically, we use it to:
          </p>
          <ol class="pl-5 space-y-4 text-lg list-decimal">
            <li>Provide, maintain, and personalize our Services.</li>
            <li>Process marketplace transactions and verify user accounts.</li>
            <li>Communicate updates, security alerts, and support messages.</li>
            <li>Analyze usage trends to improve our sustainable agricultural tools.</li>
          </ol>
        </div>

        <div class="reveal-slide-up">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Data Privacy and Protection.</h2>
          <p class="text-lg leading-relaxed">
            We store data securely and comply with applicable data protection laws, including GDPR and local Ghanaian regulations. We do not sell your personal data to third parties. Access to your information is restricted to authorized personnel who require it to perform their duties.
          </p>
        </div>

        <div class="reveal-slide-up">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Your Data Rights.</h2>
          <p class="mb-6 text-lg leading-relaxed">
            We believe in transparency and give you full control over your information. As a user, you have the right to:
          </p>
          <ul class="pl-5 space-y-4 text-lg list-disc">
            <li>Access the personal data we hold about you.</li>
            <li>Correct any inaccuracies in your personal information.</li>
            <li>Request the deletion of your data when it is no longer needed for our Services.</li>
            <li>Object to or restrict certain types of data processing.</li>
          </ul>
        </div>

        <div class="reveal-slide-up">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Changes to this Policy.</h2>
          <p class="text-lg leading-relaxed">
            We reserve the right to update this Privacy Policy at any time. Any changes will be effective immediately upon posting to this page, and we will update the "Last Updated" date at the top of this document accordingly.
          </p>
        </div>

        <div class="reveal-slide-up">
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Contact Us.</h2>
          <p class="text-lg leading-relaxed">
            If you have any questions regarding this Privacy Policy or how your data is handled, please contact our legal team at 
            <span class="font-bold text-[#035925] underline cursor-pointer">legal@farmgateafrica.com</span>.
          </p>
        </div>

      </div>
    </section>

    <GrowWithUs />

    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import GrowWithUs from "../components/GrowWithUs.vue";

const { init: initScrollReveal } = useScrollReveal({ duration: 800, delay: 100, viewFactor: 0.12 });

onMounted(() => {
  const api = initScrollReveal();
  if (!api) return;
  api.reveal(".reveal-fade", { ...revealEffects.fade, duration: 900, delay: 200 });
  api.reveal(".reveal-slide-up", { ...revealEffects.slideUp, duration: 700, delay: 150 });
});
</script>

<style scoped>
h1, h2 {
  letter-spacing: -0.02em;
}

p, li {
  color: #374151; /* text-gray-700 */
}
</style>