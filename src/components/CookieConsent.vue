<template>
  <Transition name="fade">
    <div v-if="showBanner" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-100">
        <!-- Tabs -->
        <div class="flex border-b border-gray-100 bg-gray-50/50">
          <button 
            @click="activeTab = 'Consent'"
            class="flex-1 py-5 text-center font-bold text-sm transition-colors border-b-2"
            :class="activeTab === 'Consent' ? 'text-[#129C48] border-[#129C48] bg-white' : 'text-gray-500 border-transparent hover:text-gray-800'"
          >
            Consent
          </button>
          <button 
            @click="activeTab = 'Details'"
            class="flex-1 py-5 text-center font-bold text-sm transition-colors border-b-2"
            :class="activeTab === 'Details' ? 'text-[#129C48] border-[#129C48] bg-white' : 'text-gray-500 border-transparent hover:text-gray-800'"
          >
            Details
          </button>
          <button 
            @click="activeTab = 'About'"
            class="flex-1 py-5 text-center font-bold text-sm transition-colors border-b-2"
            :class="activeTab === 'About' ? 'text-[#129C48] border-[#129C48] bg-white' : 'text-gray-500 border-transparent hover:text-gray-800'"
          >
            About
          </button>
        </div>

        <!-- Content Area -->
        <div class="p-6 md:p-8 overflow-y-auto flex-1">
          <!-- Consent Tab -->
          <div v-if="activeTab === 'Consent'" class="space-y-6">
            <h3 class="text-2xl font-bold text-gray-900">Your privacy matters to us</h3>
            <p class="text-[15px] text-gray-600 leading-relaxed">
              We use cookies to personalise content, analyse our traffic and to provide social media or advertising features. We also share information about your use of our site with our social media and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
              <!-- Necessary (Disabled) -->
              <div class="flex flex-col items-center space-y-3">
                <span class="text-sm font-bold text-gray-800">Necessary</span>
                <label class="relative inline-flex items-center cursor-not-allowed">
                  <input type="checkbox" checked disabled class="sr-only peer">
                  <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#129C48] opacity-60"></div>
                </label>
              </div>

              <!-- Preferences -->
              <div class="flex flex-col items-center space-y-3">
                <span class="text-sm font-bold text-gray-800">Preferences</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="preferences.preferences" class="sr-only peer">
                  <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#129C48]"></div>
                </label>
              </div>

              <!-- Statistics -->
              <div class="flex flex-col items-center space-y-3">
                <span class="text-sm font-bold text-gray-800">Statistics</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="preferences.statistics" class="sr-only peer">
                  <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#129C48]"></div>
                </label>
              </div>

              <!-- Marketing -->
              <div class="flex flex-col items-center space-y-3">
                <span class="text-sm font-bold text-gray-800">Marketing</span>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="preferences.marketing" class="sr-only peer">
                  <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#129C48]"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- Details Tab -->
          <div v-if="activeTab === 'Details'" class="space-y-4">
            <div v-for="category in categories" :key="category.name" class="border border-gray-100 rounded-xl overflow-hidden bg-gray-50/50">
              <button 
                @click="category.isOpen = !category.isOpen"
                class="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-gray-100/50 transition-colors"
              >
                <div class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-gray-400 transition-transform duration-200" :class="category.isOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span class="font-bold text-gray-900 text-sm">{{ category.name }}</span>
                  <span class="px-2.5 py-1 text-xs font-bold bg-white border border-gray-200 text-gray-600 rounded-full shadow-sm">{{ category.count }}</span>
                </div>
                <!-- Toggle for Details tab matching Consent tab -->
                <label v-if="category.id !== 'necessary'" class="relative inline-flex items-center cursor-pointer" @click.stop>
                  <input type="checkbox" v-model="preferences[category.id]" class="sr-only peer">
                  <div class="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#129C48]"></div>
                </label>
                <label v-else class="relative inline-flex items-center cursor-not-allowed" @click.stop>
                  <input type="checkbox" checked disabled class="sr-only peer">
                  <div class="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#129C48] opacity-60"></div>
                </label>
              </button>
              
              <div v-show="category.isOpen" class="px-4 pb-4 pt-2 text-[15px] text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                {{ category.description }}
              </div>
            </div>
          </div>

          <!-- About Tab -->
          <div v-if="activeTab === 'About'" class="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>Cookies are small text files that can be used by websites to make a user's experience more efficient.</p>
            <p>The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For all other types of cookies we need your permission.</p>
            <p>This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.</p>
            <p>You can at any time change or withdraw your consent from the <a href="#" class="text-[#129C48] font-bold hover:underline">cookie declaration</a> on our website.</p>
            <p>Learn more about who we are, how you can contact us and how we process personal data in our <a href="#" class="text-[#129C48] font-bold hover:underline">privacy policy</a>.</p>
          </div>
        </div>

        <!-- Action Footer -->
        <div class="bg-gray-50/50 p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <button @click="acceptNecessary" class="px-4 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors w-full md:w-auto">
            Use necessary only
          </button>
          
          <div class="flex flex-col md:flex-row w-full md:w-auto gap-3">
            <button @click="acceptSelected" class="px-6 py-2.5 text-sm font-bold text-[#129C48] border-2 border-[#129C48] rounded-full hover:bg-[#129C48] hover:text-white transition-colors w-full md:w-auto">
              Allow selection
            </button>
            <button @click="acceptAll" class="px-6 py-2.5 text-sm font-bold text-white bg-[#129C48] border-2 border-[#129C48] rounded-full hover:bg-green-700 hover:border-green-700 transition-colors shadow-lg shadow-green-200 w-full md:w-auto">
              Allow all cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const showBanner = ref(false);
const activeTab = ref('Consent');

const preferences = reactive({
  preferences: false,
  statistics: false,
  marketing: false
});

const categories = ref([
  {
    id: 'necessary',
    name: 'Necessary',
    count: 3,
    isOpen: true,
    description: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.'
  },
  {
    id: 'preferences',
    name: 'Preferences',
    count: 0,
    isOpen: false,
    description: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.'
  },
  {
    id: 'statistics',
    name: 'Statistics',
    count: 4,
    isOpen: false,
    description: 'Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    count: 0,
    isOpen: false,
    description: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.'
  }
]);

onMounted(() => {
  const savedConsent = localStorage.getItem('farmgate_cookie_consent');
  if (!savedConsent) {
    showBanner.value = true;
  } else {
    initTracking(JSON.parse(savedConsent));
  }
});

const saveAndApply = (prefsToSave) => {
  localStorage.setItem('farmgate_cookie_consent', JSON.stringify(prefsToSave));
  showBanner.value = false;
  initTracking(prefsToSave);
};

const acceptNecessary = () => {
  saveAndApply({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false
  });
};

const acceptSelected = () => {
  saveAndApply({
    necessary: true,
    preferences: preferences.preferences,
    statistics: preferences.statistics,
    marketing: preferences.marketing
  });
};

const acceptAll = () => {
  saveAndApply({
    necessary: true,
    preferences: true,
    statistics: true,
    marketing: true
  });
};

// --- Functional Tracking Integration ---
const initTracking = (consent) => {
  console.log("%c[Cookie Consent] User preferences saved:", "color: #129C48; font-weight: bold", consent);
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'cookie_consent_update',
    'cookie_consent': consent
  });

  if (consent.statistics) {
    console.log("📈 Google Analytics Tracking Enabled!");
    
    if (!document.getElementById('google-analytics')) {
      const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
      
      const script = document.createElement('script');
      script.id = 'google-analytics';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.gtag = function(){ window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', gaId);
    }
  } else {
    console.log("🚫 Google Analytics Tracking Blocked.");
  }

  if (consent.marketing) {
    console.log("🎯 Meta/Facebook Pixel Tracking Enabled!");
  } else {
    console.log("🚫 Meta/Facebook Pixel Tracking Blocked.");
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
