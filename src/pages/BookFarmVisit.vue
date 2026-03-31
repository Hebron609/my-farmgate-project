<template>
  <section class="relative w-full h-screen overflow-hidden bg-black">
    <!-- Background Video/Image -->
    <video
      v-if="showVideo"
      class="absolute inset-0 w-full h-full object-cover z-0"
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
      <!-- fallback image for unsupported browsers -->
    </video>
    <img
      v-else
      src="/images/hero-fallback.jpg"
      class="absolute inset-0 w-full h-full object-cover z-0"
      alt="Farm background"
    />
    <div class="absolute inset-0 bg-black/60 z-10"></div>

    <!-- Social Icons -->
    <div
      class="social-icons fixed z-30 flex flex-col gap-3 left-8 bottom-32 md:bottom-16 md:left-10"
    >
      <a
        v-for="icon in social"
        :key="icon.label"
        :href="icon.href"
        target="_blank"
        rel="noopener"
        class="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1"
        :aria-label="icon.label"
      >
        <component :is="icon.icon" class="w-6 h-6 text-white" />
      </a>
    </div>

    <!-- Main Content Block -->
    <div
      class="hero-center absolute left-1/2 top-1/2 z-20 flex flex-col items-center w-full max-w-lg px-4 -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src="/images/brand-logo.svg"
        alt="FarmGate Africa"
        class="w-24 h-24 mb-4 drop-shadow-lg"
        draggable="false"
      />
      <h1
        class="text-white text-4xl sm:text-5xl font-extrabold text-center mb-6 leading-tight drop-shadow-lg"
      >
        Grow With Africa’s<br />
        Leading Farm Network
      </h1>
      <!-- Main CTA Button with Glow -->
      <div class="relative w-full flex flex-col items-center">
        <span
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <span
            class="block w-56 h-16 rounded-full bg-gradient-to-r from-green-800 to-yellow-600 blur-2xl opacity-60 animate-pulse"
          ></span>
        </span>
        <button
          class="relative z-10 px-10 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-green-800 to-yellow-600 shadow-xl transition-transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-400/40"
        >
          Start growing with us
        </button>
      </div>
      <!-- Secondary Action Buttons -->
      <div class="secondary-actions mt-8 flex w-full justify-center gap-8">
        <div
          v-for="action in actions"
          :key="action.label"
          class="flex flex-col items-center group"
        >
          <div
            class="w-16 h-16 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-lg mb-2 transition-transform group-hover:-translate-y-1"
          >
            <lottie-player
              :src="action.lottie"
              background="transparent"
              speed="1"
              style="width: 32px; height: 32px"
              loop
              autoplay
            ></lottie-player>
          </div>
          <span
            class="uppercase tracking-[0.2em] text-[11px] text-white/90 font-semibold"
          >
            {{ action.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="scroll-indicator absolute left-1/2 bottom-8 z-30 flex flex-col items-center -translate-x-1/2"
    >
      <img
        src="/images/scroll-mouse.gif"
        alt="Scroll down"
        class="w-8 h-8 mb-1"
        draggable="false"
      />
      <span class="text-white text-xs font-bold animate-bounce tracking-widest">
        Click to Explore
      </span>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

// Social icon SVGs (replace with your own or use Heroicons)
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
    href: "https://wa.me/2340000000000",
    icon: WhatsApp,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/farmgate-africa",
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

onMounted(() => {
  // Dynamically load Lottie player if not present
  if (!window.customElements.get("lottie-player")) {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }
  // Fallback for browsers that can't play video
  showVideo.value = !!document.createElement("video").canPlayType;
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
  .secondary-actions .w-16,
  .secondary-actions .h-16 {
    width: 44px !important;
    height: 44px !important;
  }
  .secondary-actions lottie-player {
    width: 24px !important;
    height: 24px !important;
  }
}
@media (max-height: 800px) {
  .hero-center {
    top: 45% !important;
    transform: translateX(-50%) translateY(-45%) !important;
  }
  .secondary-actions {
    margin-top: 1.5rem !important;
  }
}
</style>
