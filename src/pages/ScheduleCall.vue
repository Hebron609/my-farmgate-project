<script setup>
import { ref, computed } from "vue";

// Date logic
const currentDate = new Date();
const selectedDate = ref(null);
const currentView = ref('days'); // 'days', 'months', 'years'
const viewingMonth = ref(currentDate.getMonth());
const viewingYear = ref(currentDate.getFullYear());
const yearDecadeStart = computed(() => Math.floor(viewingYear.value / 10) * 10);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const daysInMonth = computed(() => {
  const year = viewingYear.value;
  const month = viewingMonth.value;
  const firstDay = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push({ empty: true });
  }
  
  const today = new Date();
  for (let i = 1; i <= days; i++) {
    const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const isSelected = selectedDate.value && i === selectedDate.value.getDate() && month === selectedDate.value.getMonth() && year === selectedDate.value.getFullYear();
    const isPast = new Date(year, month, i) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    calendarDays.push({
      empty: false,
      day: i,
      isToday,
      isSelected,
      isPast
    });
  }
  return calendarDays;
});

const decadeYears = computed(() => {
  const years = [];
  const start = yearDecadeStart.value;
  for (let i = 0; i < 12; i++) {
    const y = start - 1 + i;
    years.push({
      year: y,
      isPast: y < new Date().getFullYear(),
      isCurrent: y === viewingYear.value
    });
  }
  return years;
});

const switchCalendarMode = () => {
  if (currentView.value === 'days') currentView.value = 'months';
  else if (currentView.value === 'months') currentView.value = 'years';
};

const prevCalendarView = () => {
  if (currentView.value === 'days') {
    viewingMonth.value--;
    if (viewingMonth.value < 0) { viewingMonth.value = 11; viewingYear.value--; }
  } else if (currentView.value === 'months') {
    viewingYear.value--;
  } else if (currentView.value === 'years') {
    viewingYear.value -= 10;
  }
};

const nextCalendarView = () => {
  if (currentView.value === 'days') {
    viewingMonth.value++;
    if (viewingMonth.value > 11) { viewingMonth.value = 0; viewingYear.value++; }
  } else if (currentView.value === 'months') {
    viewingYear.value++;
  } else if (currentView.value === 'years') {
    viewingYear.value += 10;
  }
};

const selectDate = (day) => {
  selectedDate.value = new Date(viewingYear.value, viewingMonth.value, day);
  isDatePickerOpen.value = false;
};

const selectMonth = (idx) => {
  viewingMonth.value = idx;
  currentView.value = 'days';
};

const selectYear = (year) => {
  viewingYear.value = year;
  currentView.value = 'months';
};

const selectToday = () => {
  const today = new Date();
  viewingYear.value = today.getFullYear();
  viewingMonth.value = today.getMonth();
  currentView.value = 'days';
  selectDate(today.getDate());
};

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  const dd = String(selectedDate.value.getDate()).padStart(2, '0');
  const mm = String(selectedDate.value.getMonth() + 1).padStart(2, '0');
  const yyyy = selectedDate.value.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
});

// Time logic
const selectedHour = ref('09');
const selectedMinute = ref('30');
const selectedAmPm = ref('AM');

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const minutes = ['00', '15', '30', '45'];
const ampm = ['AM', 'PM'];

// UI State
const isDatePickerOpen = ref(false);
const showSuccessModal = ref(false);

const toggleDatePicker = () => {
  isDatePickerOpen.value = !isDatePickerOpen.value;
  if (isDatePickerOpen.value) {
    currentView.value = 'days';
    if (selectedDate.value) {
      viewingMonth.value = selectedDate.value.getMonth();
      viewingYear.value = selectedDate.value.getFullYear();
    }
  }
};

const submitCall = (e) => {
  e.preventDefault();
  if (!selectedDate.value) return;
  showSuccessModal.value = true;
};

const closeModal = () => {
  showSuccessModal.value = false;
  selectedDate.value = null;
  selectedHour.value = '09';
  selectedMinute.value = '30';
  selectedAmPm.value = 'AM';
  window.location.href = "/";
};
</script>

<template>
  <div class="relative bg-[#f8fafc] min-h-screen pattern-bg overflow-x-hidden flex items-center justify-center py-12 px-4 sm:px-6">
    
    <!-- Main Card -->
    <div class="max-w-4xl w-full sm:ml-12 md:ml-20 lg:ml-32 form-card bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(18,156,72,0.05)] border border-stone-100 relative z-10">
      <div class="text-left mb-6 sm:mb-8">
        <h2 class="font-['Livvic'] text-3xl sm:text-4xl md:text-4xl font-bold text-black mb-4">
          Schedule a <span class="text-[#129C48]">Quick Call</span>
        </h2>
        <div class="h-1 w-20 bg-[#F2CB00] mb-6"></div>
        <p class="text-gray-500 text-sm sm:text-[16px] leading-relaxed opacity-80">
          We'll be happy to discuss your needs when it's convenient for you. If our team isn't available at your exact scheduled time, we will automatically find a good alternative slot and email you to confirm.
        </p>
      </div>
      
      <form @submit="submitCall" class="space-y-5 sm:space-y-6">
        
        <!-- Date Selection -->
        <div class="relative">
          <label class="block text-gray-700 font-semibold mb-2">Pick a day <span class="text-red-600">*</span></label>
          <div class="relative cursor-pointer" @click.stop="toggleDatePicker">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#129C48]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input type="text" :value="formattedDate" placeholder="Select a date" class="w-full pl-14 py-4 border-2 border-gray-100 focus:border-[#129C48] rounded-2xl outline-none transition-all duration-300 font-medium placeholder:text-gray-500 placeholder:font-normal text-gray-800 cursor-pointer" required readonly />
            <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-300" :class="{'rotate-180': isDatePickerOpen}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <!-- Custom Date Picker Dropdown -->
          <div v-if="isDatePickerOpen" class="absolute z-50 mt-2 left-0 right-0 mx-auto max-w-sm bg-white border-2 border-[#129C48] rounded-2xl shadow-2xl overflow-hidden" @click.stop>
            <div class="flex items-center justify-between px-4 py-3 bg-[#129C48] text-white">
              <button type="button" @click="prevCalendarView" class="p-1 hover:bg-white/20 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
              <span class="font-bold text-sm">{{ months[viewingMonth] }} {{ viewingYear }}</span>
              <button type="button" @click="nextCalendarView" class="p-1 hover:bg-white/20 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-7 mb-2">
                <div v-for="d in daysOfWeek" :key="d" class="text-center text-[10px] font-black text-[#129C48] opacity-50 uppercase">{{ d }}</div>
              </div>
              <div class="grid grid-cols-7 gap-1">
                <template v-for="(day, idx) in daysInMonth" :key="idx">
                  <div v-if="day.empty"></div>
                  <button v-else type="button" @click="!day.isPast && selectDate(day.day)" :disabled="day.isPast"
                    class="w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all mx-auto"
                    :class="[
                      day.isPast ? 'text-gray-200 cursor-not-allowed' : 
                      day.isSelected ? 'bg-[#129C48] text-white' :
                      day.isToday ? 'border-2 border-[#F2CB00] text-[#129C48] bg-yellow-50/50' : 'text-gray-600 hover:bg-gray-100'
                    ]">{{ day.day }}</button>
                </template>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Time Selection -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Pick a time <span class="text-red-600">*</span></label>
          <div class="time-select-container flex flex-col sm:flex-row sm:items-center gap-4">
            <div class="flex items-center gap-3 flex-1">
              <div class="relative flex-1 group">
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#129C48] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <select v-model="selectedHour" class="w-full py-4 pl-12 pr-10 border-2 border-gray-100 focus:border-[#129C48] rounded-2xl outline-none bg-gray-50/50 font-bold text-center text-sm sm:text-base cursor-pointer appearance-none transition-all">
                  <option v-for="h in hours" :key="h" :value="h">{{ h }}</option>
                </select>
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs font-bold text-gray-400 pointer-events-none tracking-tight">hrs</span>
              </div>
              <span class="text-xl font-bold text-gray-200">:</span>
              <div class="relative flex-1 group">
                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#129C48] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <select v-model="selectedMinute" class="w-full py-4 pl-12 pr-10 border-2 border-gray-100 focus:border-[#129C48] rounded-2xl outline-none bg-gray-50/50 font-bold text-center text-sm sm:text-base cursor-pointer appearance-none transition-all">
                  <option v-for="m in minutes" :key="m" :value="m">{{ m }}</option>
                </select>
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs font-bold text-gray-400 pointer-events-none tracking-tight">min</span>
              </div>
            </div>
            <div class="flex border-2 border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50 shadow-sm h-[56px] sm:w-[140px] am-pm-toggle">
              <button type="button" v-for="a in ampm" :key="a" @click="selectedAmPm = a"
                class="flex-1 font-black text-xs sm:text-sm transition-all"
                :class="selectedAmPm === a ? 'bg-[#129C48] text-white shadow-inner' : 'text-gray-400 hover:bg-gray-50'">{{ a }}</button>
            </div>
          </div>
        </div>
        
        <div class="pt-10 border-t border-gray-100 mt-10">
          <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <button type="submit" class="farmgate-btn w-full sm:flex-1">
              <span class="btn-content">
                <span>Book Appointment</span>
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
              <span class="hover-content">
                <span>Book Appointment</span>
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </button>
            <a href="/" class="farmgate-btn-outline w-full sm:w-auto text-center px-8 py-4">Cancel</a>
          </div>
        </div>
      </form>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
      <div class="bg-white rounded-[3rem] p-8 sm:p-12 max-w-md w-full text-center shadow-2xl relative overflow-hidden">
        <div class="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 bg-[#129C48] rounded-full shadow-lg shadow-[#129C48]/30">
          <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 class="font-['Livvic'] text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Call Scheduled!</h3>
        <p class="text-gray-500 mb-10 text-base sm:text-lg leading-relaxed">
          Your call is set for <strong class="text-black">{{ formattedDate }}</strong> at <strong class="text-black">{{ selectedHour }}:{{ selectedMinute }} {{ selectedAmPm }}</strong>.
        </p>
        <button @click="closeModal" class="farmgate-btn w-full">
          <span class="btn-content"><span>Back to Homepage</span></span>
          <span class="hover-content"><span>Back to Homepage</span></span>
        </button>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.pattern-bg {
  position: relative;
}

.pattern-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('/images/FARMGATE PATTERN _GREEN.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0.04; /* Very subtle */
  z-index: 0;
  pointer-events: none;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* FarmGate Morphing Button Styling */
.farmgate-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  overflow: hidden;
  isolation: isolate;
  border-radius: 0.75rem;
  background: #129C48;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: none;
  transition: all 300ms ease;
  cursor: pointer;
  border: none;
}

.farmgate-btn .btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.75rem;
  transition: transform 300ms ease;
}

.farmgate-btn .hover-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.75rem;
  background: #f2cb00;
  color: #000;
  transform: translateY(100%);
  transition: transform 300ms ease;
}

.farmgate-btn:hover .btn-content { transform: translateY(-100%); }
.farmgate-btn:hover .hover-content { transform: translateY(0); }

.farmgate-btn svg {
  width: 1rem;
  height: 1rem;
  transition: transform 300ms ease;
}

.farmgate-btn:hover svg {
  transform: translateX(4px);
}

.farmgate-btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background: transparent;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  border: 2px solid #e5e7eb;
  transition: all 300ms ease;
  cursor: pointer;
}

.farmgate-btn-outline:hover {
  background: #000;
  color: #fff;
  border-color: #000;
}

/* Custom Responsiveness for 320x568px */
@media (max-width: 360px) {
  .form-card { padding: 1.5rem 0.75rem !important; border-radius: 1.5rem !important; }
  h2 { font-size: 1.5rem !important; }
  .farmgate-btn, .farmgate-btn-outline {
    padding: 0.75rem 1rem !important;
    font-size: 0.75rem !important;
  }
  .time-select-container { gap: 0.75rem !important; }
  .time-select-container select { 
    padding-left: 2rem !important; 
    padding-right: 1.5rem !important;
    font-size: 0.875rem !important; 
    height: 52px !important;
  }
  .time-select-container svg { 
    left: 0.5rem !important; 
    width: 1.125rem !important; 
    height: 1.125rem !important; 
  }
  .time-select-container span.absolute { 
    right: 0.5rem !important; 
    font-size: 9px !important; 
  }
  .am-pm-toggle { 
    width: 100% !important;
    height: 48px !important; 
  }
  .am-pm-toggle button { font-size: 10px !important; }
}
</style>
