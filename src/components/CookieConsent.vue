<template>
  <Transition name="fade">
    <div v-if="showBanner" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 bg-[#0A1A10]/60 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col max-h-[90vh] border border-gray-100">
        
        <!-- Header -->
        <div class="px-6 py-5 sm:px-8 sm:py-6 border-b border-gray-100 bg-gradient-to-br from-green-50 to-white">
          <div class="flex items-center gap-4 mb-2">
            <div class="w-10 h-10 rounded-full bg-[#129C48]/10 flex items-center justify-center text-[#129C48]">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 018 4h-2.71a8 8 0 10-2.81 14.86c.15.54.49 1.14.93 1.14H12z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 10.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold font-livvic text-gray-900">Cookie Preferences</h2>
          </div>
          <p class="text-[13px] text-gray-600 leading-relaxed max-w-3xl">
            We use cookies to improve your experience on our farms and website. Choose your preferences below to control what we track. You can learn more in our <a href="#" class="text-[#129C48] font-bold hover:underline">Privacy Policy</a>.
          </p>
        </div>

        <!-- Content Area: Horizontal Categories -->
        <div class="p-6 sm:px-8 overflow-y-auto flex-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div v-for="category in categories" :key="category.id" class="p-4 sm:p-5 rounded-2xl border transition-colors flex flex-col h-full" :class="preferences[category.id] || category.id === 'necessary' ? 'border-[#129C48]/30 bg-[#129C48]/5' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'">
              <div class="flex items-center justify-between gap-3 mb-3">
                <h3 class="text-[13px] font-bold text-gray-900">{{ category.name }}</h3>
                <div class="shrink-0">
                  <label v-if="category.id !== 'necessary'" class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="preferences[category.id]" class="sr-only peer">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#129C48]"></div>
                  </label>
                  <label v-else class="relative inline-flex items-center cursor-not-allowed">
                    <input type="checkbox" checked disabled class="sr-only peer">
                    <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#129C48] opacity-60"></div>
                  </label>
                </div>
              </div>
              <p class="text-xs text-gray-500 leading-relaxed flex-1">{{ category.description }}</p>
            </div>
          </div>
        </div>

        <!-- Action Footer -->
        <div class="bg-gray-50/80 p-6 sm:px-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button @click="acceptNecessary" class="px-5 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors w-full sm:w-auto text-center">
            Strictly Necessary Only
          </button>
          
          <div class="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
            <button @click="acceptSelected" class="px-6 py-2.5 text-sm font-bold text-[#129C48] bg-white border border-[#129C48] rounded-xl hover:bg-[#129C48]/5 transition-colors w-full sm:w-auto">
              Save Preferences
            </button>
            <button @click="acceptAll" class="px-6 py-2.5 text-sm font-bold text-white bg-[#129C48] rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-200 w-full sm:w-auto">
              Accept All
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
    description: 'Required for core site functionality and security. Cannot be disabled.'
  },
  {
    id: 'preferences',
    name: 'Preferences',
    count: 0,
    isOpen: false,
    description: 'Remembers your settings (e.g. region, language) to customize your experience.'
  },
  {
    id: 'statistics',
    name: 'Statistics',
    count: 4,
    isOpen: false,
    description: 'Helps us anonymously understand how visitors interact with our platform.'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    count: 0,
    isOpen: false,
    description: 'Used to deliver relevant advertisements and track engagement across sites.'
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
