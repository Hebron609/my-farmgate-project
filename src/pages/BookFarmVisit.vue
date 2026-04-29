<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <section class="relative w-full h-screen overflow-hidden bg-black">
      <!-- Background Video/Image -->
      <video
        v-if="showVideo"
        class="absolute inset-0 z-0 object-cover w-full h-full opacity-60"
        autoplay
        muted
        loop
        playsinline
        poster="/images/hero-fallback.jpg"
      >
        <source
          src="/videos/farm-hero-video1.m3u8"
          type="application/x-mpegURL"
        />
        <source
          src="/videos/farmgate-original-video.m3u8"
          type="application/x-mpegURL"
        />
      </video>
      <img
        v-else
        src="/images/hero-fallback.jpg"
        class="absolute inset-0 z-0 object-cover w-full h-full opacity-60"
        alt="Farm background"
      />
      <div class="absolute inset-0 z-10 bg-black/40"></div>

      <!-- Social Icons -->
      <div
        class="fixed z-30 flex flex-col gap-3 social-icons left-8 bottom-32 md:bottom-16 md:left-10"
      >
        <a
          v-for="icon in social"
          :key="icon.label"
          :href="icon.href"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-center w-12 h-12 transition-transform border rounded-full shadow-lg border-white/10 bg-black/40 backdrop-blur-md hover:-translate-y-1"
          :aria-label="icon.label"
        >
          <component :is="icon.icon" class="w-6 h-6 text-white" />
        </a>
      </div>

      <!-- Main Content Block -->
      <div
        class="absolute z-20 flex flex-col items-center w-full max-w-lg px-4 -translate-x-1/2 -translate-y-1/2 hero-center left-1/2 top-1/2"
      >
        <div class="text-center reveal-slide-up">
          <img
            src="/images/brand-logo.svg"
            alt="FarmGate Africa"
            class="w-24 h-24 mx-auto mb-6 drop-shadow-lg"
            draggable="false"
          />
          <h1
            class="mb-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg font-['Livvic']"
          >
            Experience <br />
            <span class="text-[#129C48]">Our Farms</span>
          </h1>
          <p
            class="text-gray-300 text-lg mb-12 max-w-[600px] mx-auto font-light leading-relaxed"
          >
            Discover the heart of sustainable agriculture. Join us for an
            immersive tour of our innovative farm networks across Africa.
          </p>

          <!-- Main CTA Button with Glow -->
          <div class="relative flex flex-col items-center w-full">
            <span
              class="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <span
                class="block w-64 h-20 rounded-full bg-[#129C48] blur-3xl opacity-30"
              ></span>
            </span>
            <button
              @click="scrollToForm"
              class="relative z-10 px-12 py-5 text-xl font-bold text-white transition-all duration-300 rounded-full shadow-2xl bg-[#129C48] hover:bg-[#F2CB00] hover:text-black hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#129C48]/40 cursor-pointer flex items-center gap-3"
            >
              <LeafIcon class="w-6 h-6" />
              Book Your Visit Now
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute z-30 flex flex-col items-center -translate-x-1/2 scroll-indicator left-1/2 bottom-8"
      >
        <img
          src="/images/scroll-mouse.gif"
          alt="Scroll down"
          class="w-8 h-8 mb-1"
          draggable="false"
        />
        <span
          class="text-xs font-bold tracking-widest text-white animate-bounce"
        >
          Scroll to Book
        </span>
      </div>
    </section>

    <!-- Booking Form Section -->
    <section
      id="booking-form"
      class="px-6 max-[360px]:px-4 py-24 max-[360px]:py-12 bg-white md:px-12"
    >
      <div class="max-w-[1000px] mx-auto relative overflow-visible">
        <LeafIcon
          class="hidden md:block absolute right-[-150px] top-30 z-10 w-[380px] h-[380px] text-[#129C48] opacity-4"
        />
        <div
          class="relative mb-16 max-[360px]:mb-8 text-center reveal-slide-up"
        >
          <h2
            class="font-['Livvic'] text-4xl max-[360px]:text-[1.75rem] max-[360px]:leading-tight md:text-5xl font-bold text-black mb-4 max-[360px]:mb-2"
          >
            Book to tour <span class="text-[#129C48]">our farms</span>
          </h2>
          <div
            class="h-1 w-24 bg-[#F2CB00] mx-auto mb-6 max-[360px]:mb-4"
          ></div>
          <p
            class="text-xl max-[360px]:text-base font-light text-gray-600 px-2"
          >
            Experience sustainable agriculture firsthand. Schedule your visit
            today.
          </p>
        </div>

        <div class="p-2 bg-white reveal-slide-up">
          <form
            @submit.prevent="submitForm"
            class="space-y-8 max-[360px]:space-y-5"
          >
            <div
              class="grid grid-cols-1 gap-8 max-[360px]:gap-5 md:grid-cols-2"
            >
              <div class="relative group">
                <label
                  for="lastName"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >Last Name *</label
                >
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="Osei"
                  :class="{ 'border-red-500': errors.lastName }"
                />
                <p v-if="errors.lastName" class="mt-1 text-xs text-red-500">
                  {{ errors.lastName }}
                </p>
              </div>

              <div class="relative group">
                <label
                  for="firstName"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >First Name *</label
                >
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="Kwame"
                  :class="{ 'border-red-500': errors.firstName }"
                />
                <p v-if="errors.firstName" class="mt-1 text-xs text-red-500">
                  {{ errors.firstName }}
                </p>
              </div>
            </div>

            <div
              class="grid grid-cols-1 gap-8 max-[360px]:gap-5 md:grid-cols-2"
            >
              <div class="relative group">
                <label
                  for="email"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >Email *</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="kwame.osei@gmail.com"
                  :class="{ 'border-red-500': errors.email }"
                />
                <p v-if="errors.email" class="mt-1 text-xs text-red-500">
                  {{ errors.email }}
                </p>
              </div>

              <div class="relative group">
                <label
                  for="phone"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >Phone</label
                >
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="+233 54 123 4567"
                  :class="{ 'border-red-500': errors.phone }"
                />
                <p v-if="errors.phone" class="mt-1 text-xs text-red-500">
                  {{ errors.phone }}
                </p>
              </div>
            </div>

            <div
              class="grid grid-cols-1 gap-8 max-[360px]:gap-5 md:grid-cols-1"
            >
              <div class="relative group">
                <label
                  for="preferredDate"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >Preferred Date *</label
                >
                <input
                  id="preferredDate"
                  v-model="form.preferredDate"
                  type="text"
                  onfocus="this.type = 'date'"
                  onblur="this.type = this.value ? 'date' : 'text'"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="Select Date"
                  :class="{ 'border-red-500': errors.preferredDate }"
                />
                <p
                  v-if="errors.preferredDate"
                  class="mt-1 text-xs text-red-500"
                >
                  {{ errors.preferredDate }}
                </p>
              </div>
            </div>

            <div>
              <label
                class="block mb-4 max-[360px]:mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
                >Visit Type *</label
              >
              <div class="flex flex-wrap gap-4 max-[360px]:gap-2">
                <label
                  v-for="option in visitTypeOptions"
                  :key="option.value"
                  class="relative cursor-pointer group"
                >
                  <input
                    v-model="form.visitType"
                    :value="option.value"
                    type="radio"
                    name="visitType"
                    class="sr-only peer"
                    required
                  />
                  <div
                    class="px-6 py-3 max-[360px]:px-4 max-[360px]:py-2 rounded-full border border-gray-200 text-gray-600 peer-checked:bg-[#129C48] peer-checked:text-white peer-checked:border-[#129C48] hover:border-[#129C48] transition-all duration-300 text-sm max-[360px]:text-xs font-medium"
                  >
                    {{ option.label }}
                  </div>
                </label>
              </div>
              <p
                v-if="errors.visitType"
                class="mt-2 max-[360px]:mt-1 text-xs text-red-500"
              >
                {{ errors.visitType }}
              </p>
            </div>

            <div>
              <label
                class="block mb-4 max-[360px]:mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
                >Farm Interest *</label
              >
              <div class="flex flex-wrap gap-4 max-[360px]:gap-2">
                <label
                  v-for="option in farmInterestOptions"
                  :key="option.value"
                  class="relative cursor-pointer group"
                >
                  <input
                    v-model="form.farmInterest"
                    :value="option.value"
                    type="radio"
                    name="farmInterest"
                    class="sr-only peer"
                    required
                  />
                  <div
                    class="px-6 py-3 max-[360px]:px-4 max-[360px]:py-2 rounded-full border border-gray-200 text-gray-600 peer-checked:bg-[#129C48] peer-checked:text-white peer-checked:border-[#129C48] hover:border-[#129C48] transition-all duration-300 text-sm max-[360px]:text-xs font-medium"
                  >
                    {{ option.label }}
                  </div>
                </label>
              </div>
              <p
                v-if="errors.farmInterest"
                class="mt-2 max-[360px]:mt-1 text-xs text-red-500"
              >
                {{ errors.farmInterest }}
              </p>
            </div>

            <div class="relative group">
              <label
                for="message"
                class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                >Message *</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300 resize-none max-[360px]:min-h-[80px]"
                placeholder="Tell us more about your visit goals..."
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-xs text-red-500">
                {{ errors.message }}
              </p>
            </div>

            <div class="pt-8 max-[360px]:pt-4 text-center">
              <button
                type="submit"
                class="relative inline-flex items-center px-4 py-4 max-[360px]:py-3 max-[360px]:px-5 mt-0 overflow-hidden bg-green-700 cursor-pointer md:px-4 group rounded-[12px] w-fit md:mt-0 reveal-slide-right disabled:opacity-50 disabled:cursor-not-allowed text-sm max-[360px]:text-xs"
                :disabled="isSubmitting"
              >
                <span
                  class="flex items-center gap-3 max-[360px]:gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <span
                    class="text-sm max-[360px]:text-xs font-bold tracking-widest text-white"
                  >
                    {{ isSubmitting ? "Booking..." : "Submit Booking" }}
                  </span>
                  <svg
                    v-if="!isSubmitting"
                    class="w-4 h-4 max-[360px]:w-3 max-[360px]:h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-3 max-[360px]:gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <span
                    class="text-sm max-[360px]:text-xs font-bold tracking-widest"
                  >
                    {{ isSubmitting ? "Booking..." : "Submit Booking" }}
                  </span>
                  <svg
                    v-if="!isSubmitting"
                    class="w-4 h-4 max-[360px]:w-3 max-[360px]:h-3 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import Footer from "../components/Footer.vue";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

// Social icon SVGs
const WhatsApp = {
  template:
    '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 2.003a9.995 9.995 0 0 0-8.47 15.47l-1.13 4.13 4.24-1.11a9.995 9.995 0 1 0 5.36-18.49zm0 18.18a8.18 8.18 0 0 1-4.16-1.15l-.3-.18-2.52.66.67-2.45-.2-.31A8.18 8.18 0 1 1 12.004 20.18zm4.47-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44-.15-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.3 3.68.6.21 1.07.33 1.44.42.6.13 1.15.11 1.58.07.48-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/></svg>',
};
const LinkedIn = {
  template:
    '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>',
};

const social = [
  {
    label: "WhatsApp",
    href: "https://wa.me/233503301132",
    icon: WhatsApp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/farmgate-africa-industries/",
    icon: LinkedIn,
  },
];

const actions = [
  {
    label: "Book a farm visit",
    lottie: "/images/Location Pin.json",
  },
  {
    label: "Schedule a quick call",
    lottie: "/images/Missed Call.json",
  },
];

const showVideo = ref(true);

// Form data
const form = reactive({
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  preferredDate: "",
  visitType: "",
  farmInterest: "",
  message: "",
});

// Options
const visitTypeOptions = [
  { value: "individual", label: "Individual" },
  { value: "group", label: "Group / Family" },
  { value: "corporate", label: "Corporate" },
  { value: "educational", label: "Educational / Research" },
];

const farmInterestOptions = [
  { value: "vegetable-hub", label: "Oyarifa Vegetable Hub" },
  { value: "smart-farm", label: "Akuse Smart Farm" },
  { value: "poultry", label: "Poultry Section" },
  { value: "greenhouse", label: "Greenhouse Technology" },
  { value: "general", label: "General Farm Tour" },
];

// Validation errors
const errors = reactive({
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  preferredDate: "",
  visitType: "",
  farmInterest: "",
});

const isSubmitting = ref(false);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = () => {
  let isValid = true;
  Object.keys(errors).forEach((key) => (errors[key] = ""));

  if (!form.lastName.trim()) {
    errors.lastName = "Last name is required.";
    isValid = false;
  }
  if (!form.firstName.trim()) {
    errors.firstName = "First name is required.";
    isValid = false;
  }
  if (!form.email.trim()) {
    errors.email = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Invalid email format.";
    isValid = false;
  }
  if (!form.phone.trim()) {
    errors.phone = "Phone is required.";
    isValid = false;
  }
  if (!form.preferredDate) {
    errors.preferredDate = "Please pick a date.";
    isValid = false;
  }
  if (!form.visitType) {
    errors.visitType = "Please select a visit type.";
    isValid = false;
  }
  if (!form.farmInterest) {
    errors.farmInterest = "Please select a farm area.";
    isValid = false;
  }
  if (!form.message.trim()) {
    errors.message = "Message is required.";
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) return;
  isSubmitting.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(
      "Thank you! Your farm tour request has been received. We will contact you shortly.",
    );
    Object.keys(form).forEach((key) => (form[key] = ""));
  } catch (error) {
    alert("An error occurred. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

const scrollToForm = () => {
  const formElement = document.getElementById("booking-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  if (!window.customElements.get("lottie-player")) {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }
  showVideo.value = !!document.createElement("video").canPlayType;

  // Reveal animations
  const api = initScrollReveal();
  if (!api) return;
  api.reveal(".reveal-slide-up", {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 200,
  });
  api.reveal(".reveal-slide-right", {
    ...revealEffects.slideRight,
    duration: 700,
    delay: 200,
  });
});
</script>

<style scoped>
@media (max-width: 380px) and (max-height: 600px) {
  .hero-center {
    top: 40% !important;
    transform: translateX(-50%) translateY(-40%) !important;
  }
  .scroll-indicator {
    bottom: 2px !important;
    transform: translateX(-50%) scale(0.6) !important;
    transform-origin: bottom center !important;
  }
  .social-icons {
    bottom: 58px !important;
    top: auto !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    flex-direction: row !important;
  }
}

.rounded-4xl {
  border-radius: 2rem;
}
</style>
