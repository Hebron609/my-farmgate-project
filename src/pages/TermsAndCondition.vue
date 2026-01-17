<template>
  <div class="min-h-screen bg-white">
    <div class="bg-green-800 py-25">
      <Header :videoVariant="2" />
    </div>

    <section class="max-w-[1000px] mx-auto px-6 py-24 font-montserrat text-gray-800">
      
      <div class="mb-20 text-center">
        <h1 class="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Terms & Conditions
        </h1>
        <p class="text-sm font-medium tracking-widest text-gray-500 uppercase">
          Last Updated: Jan 17, 2026
        </p>
      </div>

      <div class="space-y-16">
        
        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Introduction.</h2>
          <p class="text-lg leading-relaxed">
            Welcome to FarmGate Africa, a sustainable agriculture technology platform designed to provide a comprehensive and engaging farming experience. By accessing or using FarmGate Africa, you agree to comply with and be bound by the following Terms & Conditions. Please read these terms carefully before using the platform.
          </p>
        </div>

        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Acceptance of Terms.</h2>
          <p class="text-lg leading-relaxed">
            By registering for an account, accessing, or using FarmGate Africa, you accept and agree to be bound by these Terms & Conditions, as well as any additional terms, conditions, and policies referenced herein or available by hyperlink. If you do not agree to all of these terms, please do not use the platform.
          </p>
        </div>

        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Eligibility.</h2>
          <p class="text-lg leading-relaxed">
            FarmGate Africa is intended for users who are at least 18 years old. By using the platform, you represent that you meet this age requirement and that you have the legal capacity to enter into these Terms & Conditions. If you are under 18, you must obtain consent from a parent or legal guardian before using FarmGate Africa.
          </p>
        </div>

        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Account Registration.</h2>
          <p class="mb-6 text-lg leading-relaxed">
            To access certain features of FarmGate Africa, you may be required to create an account. When creating an account, you agree to:
          </p>
          <ol class="pl-5 space-y-4 text-lg list-decimal">
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security of your account by keeping your password confidential.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
            <li>Take responsibility for all activities that occur under your account.</li>
          </ol>
        </div>

        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Sustainable Agriculture Commitment.</h2>
          <p class="mb-6 text-lg leading-relaxed">
            FarmGate Africa is dedicated to promoting sustainable agricultural practices. Users are encouraged to engage in environmentally responsible farming methods, including:
          </p>
          <ul class="pl-5 space-y-4 text-lg list-disc">
            <li>Conservation of soil health and biodiversity.</li>
            <li>Efficient water usage and irrigation practices.</li>
            <li>Reduced chemical inputs and organic farming methods.</li>
            <li>Carbon footprint reduction and climate-resilient practices.</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Limitation of Liability.</h2>
          <p class="text-lg leading-relaxed">
            To the maximum extent permitted by law, FarmGate Africa shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Services. We provide our Services "as is" without warranties of any kind, either express or implied.
          </p>
        </div>

        <div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900">Contact Information.</h2>
          <p class="text-lg leading-relaxed">
            For questions about these Terms and Conditions, please contact us at 
            <span class="font-bold text-green-700 underline cursor-pointer">connect@farmgate.africa</span>.
          </p>
        </div>

      </div>
    </section>

    <GrowWithUs />

    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import GrowWithUs from "../components/GrowWithUs.vue";
</script>

<style scoped>
/* Matching the screenshot's specific clean feel */
h1, h2 {
  letter-spacing: -0.02em;
}

p, li {
  color: #374151; /* text-gray-700 */
}
</style>