<script setup>
import { ref, computed } from "vue";

// Date logic
const currentDate = new Date();
const selectedDate = ref(null);
const currentView = ref("days"); // 'days', 'months', 'years'
const viewingMonth = ref(currentDate.getMonth());
const viewingYear = ref(currentDate.getFullYear());
const yearDecadeStart = computed(() => Math.floor(viewingYear.value / 10) * 10);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

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
    const isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();
    const isSelected =
      selectedDate.value &&
      i === selectedDate.value.getDate() &&
      month === selectedDate.value.getMonth() &&
      year === selectedDate.value.getFullYear();
    const isPast =
      new Date(year, month, i) <
      new Date(today.getFullYear(), today.getMonth(), today.getDate());

    calendarDays.push({
      empty: false,
      day: i,
      isToday,
      isSelected,
      isPast,
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
      isCurrent: y === viewingYear.value,
    });
  }
  return years;
});

const switchCalendarMode = () => {
  if (currentView.value === "days") currentView.value = "months";
  else if (currentView.value === "months") currentView.value = "years";
};

const prevCalendarView = () => {
  if (currentView.value === "days") {
    viewingMonth.value--;
    if (viewingMonth.value < 0) {
      viewingMonth.value = 11;
      viewingYear.value--;
    }
  } else if (currentView.value === "months") {
    viewingYear.value--;
  } else if (currentView.value === "years") {
    viewingYear.value -= 10;
  }
};

const nextCalendarView = () => {
  if (currentView.value === "days") {
    viewingMonth.value++;
    if (viewingMonth.value > 11) {
      viewingMonth.value = 0;
      viewingYear.value++;
    }
  } else if (currentView.value === "months") {
    viewingYear.value++;
  } else if (currentView.value === "years") {
    viewingYear.value += 10;
  }
};

const selectDate = (day) => {
  selectedDate.value = new Date(viewingYear.value, viewingMonth.value, day);
  isDatePickerOpen.value = false;
};

const selectMonth = (idx) => {
  viewingMonth.value = idx;
  currentView.value = "days";
};

const selectYear = (year) => {
  viewingYear.value = year;
  currentView.value = "months";
};

const selectToday = () => {
  const today = new Date();
  viewingYear.value = today.getFullYear();
  viewingMonth.value = today.getMonth();
  currentView.value = "days";
  selectDate(today.getDate());
};

const formattedDate = computed(() => {
  if (!selectedDate.value) return "";
  const date = selectedDate.value;
  const getOrdinalNum = (n) =>
    n +
    (n > 0
      ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : "");
  const daysStr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsStr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = daysStr[date.getDay()];
  const monthName = monthsStr[date.getMonth()];
  const dayWithOrdinal = getOrdinalNum(date.getDate());
  const year = date.getFullYear();

  return `${dayName}, ${dayWithOrdinal} ${monthName} ${year}`;
});

// Time logic
const selectedHour = ref("09");
const selectedMinute = ref("30");
const selectedAmPm = ref("AM");

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const minutes = ["00", "15", "30", "45"];
const ampm = ["AM", "PM"];

// Guest info
const guestFullname = ref("");
const guestEmail = ref("");
const guestWhatsapp = ref("");

// UI State
const isDatePickerOpen = ref(false);
const showSuccessModal = ref(false);
const isSubmitting = ref(false);

const isHourDropdownOpen = ref(false);
const isMinuteDropdownOpen = ref(false);

const toggleDatePicker = () => {
  isDatePickerOpen.value = !isDatePickerOpen.value;
  if (isDatePickerOpen.value) {
    isHourDropdownOpen.value = false;
    isMinuteDropdownOpen.value = false;
    currentView.value = "days";
    if (selectedDate.value) {
      viewingMonth.value = selectedDate.value.getMonth();
      viewingYear.value = selectedDate.value.getFullYear();
    }
  }
};

const toggleHourDropdown = () => {
  isHourDropdownOpen.value = !isHourDropdownOpen.value;
  if (isHourDropdownOpen.value) {
    isDatePickerOpen.value = false;
    isMinuteDropdownOpen.value = false;
  }
};

const toggleMinuteDropdown = () => {
  isMinuteDropdownOpen.value = !isMinuteDropdownOpen.value;
  if (isMinuteDropdownOpen.value) {
    isDatePickerOpen.value = false;
    isHourDropdownOpen.value = false;
  }
};

const selectHour = (h) => {
  selectedHour.value = h;
  isHourDropdownOpen.value = false;
};

const selectMinute = (m) => {
  selectedMinute.value = m;
  isMinuteDropdownOpen.value = false;
};

// Close pickers on outside click is handled by @click.stop and a window listener
import { onMounted, onUnmounted } from "vue";
const closeAllPickers = () => {
  isDatePickerOpen.value = false;
  isHourDropdownOpen.value = false;
  isMinuteDropdownOpen.value = false;
};
onMounted(() => {
  window.addEventListener("click", closeAllPickers);
});
onUnmounted(() => {
  window.removeEventListener("click", closeAllPickers);
});

const submitCall = async (e) => {
  e.preventDefault();
  if (!selectedDate.value) return;
  if (
    !guestFullname.value.trim() ||
    !guestEmail.value.trim() ||
    !guestWhatsapp.value.trim()
  )
    return;

  isSubmitting.value = true;
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "schedule-call",
        formData: {
          guestFullname: guestFullname.value,
          guestEmail: guestEmail.value,
          guestWhatsapp: guestWhatsapp.value,
          date: formattedDate.value,
          time: `${selectedHour.value}:${selectedMinute.value} ${selectedAmPm.value}`,
        },
      }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error);
    showSuccessModal.value = true;
  } catch (error) {
    console.error("Error scheduling call:", error);
    alert("An error occurred while scheduling your call. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

const closeModal = () => {
  showSuccessModal.value = false;
  selectedDate.value = null;
  selectedHour.value = "09";
  selectedMinute.value = "30";
  selectedAmPm.value = "AM";
  guestFullname.value = "";
  guestEmail.value = "";
  guestWhatsapp.value = "";
  window.location.href = "/";
};
</script>

<template>
  <div
    class="relative bg-[#f8fafc] min-h-screen pattern-bg overflow-x-hidden flex items-center justify-center pt-24 pb-12 px-4 sm:py-12 sm:px-6"
  >
    <div class="absolute z-50 top-6 left-4 sm:fixed sm:top-6 sm:left-6 group">
      <div
        class="absolute inset-0 z-0 w-full h-full rounded-full pointer-events-none bg-gradient-to-r from-green-800 to-[#F2CB00] animate-solid-pulse"
      ></div>
      <a
        href="/"
        aria-label="Homepage"
        class="relative z-10 flex items-center gap-3 px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-green-800 to-yellow-600 hover:shadow-2xl active:scale-100 focus:scale-100 whitespace-nowrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-4 0h4"
          />
        </svg>
        <span class="text-sm font-semibold leading-none tracking-wide"
          >Homepage</span
        >
      </a>
    </div>

    <!-- Main Card -->
    <div
      class="max-w-4xl w-full sm:ml-12 md:ml-20 lg:ml-32 form-card bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(18,156,72,0.05)] border border-stone-100 relative z-10"
    >
      <div class="mb-6 text-left sm:mb-8">
        <h2
          class="font-['Livvic'] text-3xl sm:text-4xl md:text-4xl font-bold text-black mb-4"
        >
          Schedule a <span class="text-[#129C48]">Quick Call</span>
        </h2>
        <div class="h-1 w-20 bg-[#F2CB00] mb-6"></div>
        <p
          class="text-gray-500 text-sm sm:text-[16px] leading-relaxed opacity-80"
        >
          We'll be happy to discuss your needs when it's convenient for you. If
          our team isn't available at your exact scheduled time, we will
          automatically find a good alternative slot and email you to confirm.
        </p>
      </div>

      <form @submit="submitCall" class="space-y-5 sm:space-y-6">
        <!-- Date Selection -->
        <div class="relative">
          <label class="block mb-2 font-semibold text-gray-700"
            >Pick a day <span class="text-red-600">*</span></label
          >
          <div class="relative cursor-pointer" @click.stop="toggleDatePicker">
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#129C48]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <input
              type="text"
              :value="formattedDate"
              placeholder="Select a date"
              class="w-full pl-14 py-4 border-2 border-gray-100 focus:border-[#129C48] rounded-2xl outline-none transition-all duration-300 font-medium placeholder:text-gray-500 placeholder:font-normal text-gray-800 cursor-pointer"
              required
              readonly
            />
            <svg
              class="absolute w-5 h-5 text-gray-400 transition-transform duration-300 -translate-y-1/2 right-4 top-1/2"
              :class="{ 'rotate-180': isDatePickerOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <!-- Custom Date Picker Dropdown -->
          <div
            v-if="isDatePickerOpen"
            class="absolute z-50 top-full left-0 mt-2 w-[320px] bg-white border-2 border-[#129C48] rounded-[1.25rem] shadow-[0_8px_32px_0_rgba(18,156,72,0.18)] overflow-hidden"
            @click.stop
          >
            <!-- Header -->
            <div
              class="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#129C48] to-[#F2CB00] text-white"
            >
              <button
                type="button"
                @click="prevCalendarView"
                class="p-1 transition-colors rounded-full hover:bg-white/20"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                @click="switchCalendarMode"
                class="px-3 py-1 text-lg font-bold transition-colors rounded-lg hover:bg-white/20"
              >
                <template v-if="currentView === 'days'"
                  >{{ months[viewingMonth] }} {{ viewingYear }}</template
                >
                <template v-else-if="currentView === 'months'">{{
                  viewingYear
                }}</template>
                <template v-else-if="currentView === 'years'"
                  >{{ yearDecadeStart }} - {{ yearDecadeStart + 9 }}</template
                >
              </button>
              <button
                type="button"
                @click="nextCalendarView"
                class="p-1 transition-colors rounded-full hover:bg-white/20"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>

            <!-- Views Container -->
            <div class="p-4">
              <!-- Days View -->
              <template v-if="currentView === 'days'">
                <div class="grid grid-cols-7 mb-2">
                  <div
                    v-for="d in daysOfWeek"
                    :key="d"
                    class="text-center text-xs font-bold text-[#129C48]"
                  >
                    {{ d }}
                  </div>
                </div>
                <div class="grid grid-cols-7 gap-1">
                  <template v-for="(day, idx) in daysInMonth" :key="idx">
                    <div v-if="day.empty"></div>
                    <button
                      v-else
                      type="button"
                      @click="!day.isPast && selectDate(day.day)"
                      :disabled="day.isPast"
                      class="flex items-center justify-center w-8 h-8 mx-auto text-sm font-medium transition-colors rounded-lg"
                      :class="[
                        day.isPast
                          ? 'text-gray-300 cursor-not-allowed'
                          : day.isSelected
                            ? 'bg-gradient-to-r from-[#129C48] to-[#F2CB00] text-white shadow-md'
                            : day.isToday
                              ? 'border-2 border-[#F2CB00] text-[#129C48] bg-[#fffbe6]'
                              : 'text-gray-700 hover:bg-[#129C48] hover:text-white',
                      ]"
                    >
                      {{ day.day }}
                    </button>
                  </template>
                </div>
              </template>

              <!-- Months View -->
              <template v-else-if="currentView === 'months'">
                <div class="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    v-for="(m, idx) in months"
                    :key="m"
                    @click="selectMonth(idx)"
                    class="py-3 text-sm font-bold transition-all rounded-xl"
                    :class="
                      idx === viewingMonth
                        ? 'bg-[#129C48] text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-[#129C48] hover:text-white'
                    "
                  >
                    {{ m }}
                  </button>
                </div>
              </template>

              <!-- Years View -->
              <template v-else-if="currentView === 'years'">
                <div class="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    v-for="y in decadeYears"
                    :key="y.year"
                    @click="!y.isPast && selectYear(y.year)"
                    :disabled="y.isPast"
                    class="py-3 text-sm font-bold transition-all rounded-xl"
                    :class="[
                      y.isPast
                        ? 'text-gray-300 cursor-not-allowed bg-transparent'
                        : y.isCurrent
                          ? 'bg-[#129C48] text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-[#129C48] hover:text-white',
                    ]"
                  >
                    {{ y.year }}
                  </button>
                </div>
              </template>
            </div>

            <!-- Footer -->
            <div class="p-3 text-center border-t border-gray-100 bg-gray-50">
              <button
                type="button"
                @click="selectToday"
                class="text-[#129C48] font-bold text-sm hover:underline"
              >
                Today
              </button>
            </div>
          </div>
        </div>

        <!-- Time Selection -->
        <div>
          <label class="block mb-2 font-semibold text-gray-700"
            >Pick a time <span class="text-red-600">*</span></label
          >
          <div
            class="flex flex-col gap-4 time-select-container sm:flex-row sm:items-center"
          >
            <div class="flex items-center flex-1 gap-3">
              <!-- Custom Hour Dropdown -->
              <div
                class="relative flex-1 group"
                @click.stop="toggleHourDropdown"
              >
                <svg
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#129C48] group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div
                  class="w-full py-4 pl-12 pr-10 border-2 border-gray-100 group-hover:border-[#129C48] rounded-2xl outline-none bg-gray-50/50 font-bold text-center text-sm sm:text-base cursor-pointer transition-all flex items-center justify-center"
                  :class="{
                    'border-[#129C48] shadow-md bg-white': isHourDropdownOpen,
                  }"
                >
                  {{ selectedHour }}
                </div>
                <span
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs font-bold text-gray-400 pointer-events-none tracking-tight"
                  >hrs</span
                >

                <!-- Dropdown Menu -->
                <div
                  v-if="isHourDropdownOpen"
                  class="absolute z-50 top-full left-0 mt-2 w-full bg-white border-2 border-[#129C48] rounded-xl shadow-xl max-h-56 overflow-y-auto custom-scrollbar"
                >
                  <div
                    v-for="h in hours"
                    :key="h"
                    @click.stop="selectHour(h)"
                    class="px-4 py-3 font-bold text-center transition-colors border-b cursor-pointer border-gray-50 last:border-none"
                    :class="
                      selectedHour === h
                        ? 'bg-[#129C48] text-white'
                        : 'text-gray-700 hover:bg-[#f2faf5] hover:text-[#129C48]'
                    "
                  >
                    {{ h }}
                  </div>
                </div>
              </div>

              <span class="text-xl font-bold text-gray-200">:</span>

              <!-- Custom Minute Dropdown -->
              <div
                class="relative flex-1 group"
                @click.stop="toggleMinuteDropdown"
              >
                <svg
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#129C48] group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div
                  class="w-full py-4 pl-12 pr-10 border-2 border-gray-100 group-hover:border-[#129C48] rounded-2xl outline-none bg-gray-50/50 font-bold text-center text-sm sm:text-base cursor-pointer transition-all flex items-center justify-center"
                  :class="{
                    'border-[#129C48] shadow-md bg-white': isMinuteDropdownOpen,
                  }"
                >
                  {{ selectedMinute }}
                </div>
                <span
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs font-bold text-gray-400 pointer-events-none tracking-tight"
                  >min</span
                >

                <!-- Dropdown Menu -->
                <div
                  v-if="isMinuteDropdownOpen"
                  class="absolute z-50 top-full left-0 mt-2 w-full bg-white border-2 border-[#129C48] rounded-xl shadow-xl overflow-hidden"
                >
                  <div
                    v-for="m in minutes"
                    :key="m"
                    @click.stop="selectMinute(m)"
                    class="px-4 py-3 font-bold text-center transition-colors border-b cursor-pointer border-gray-50 last:border-none"
                    :class="
                      selectedMinute === m
                        ? 'bg-[#129C48] text-white'
                        : 'text-gray-700 hover:bg-[#f2faf5] hover:text-[#129C48]'
                    "
                  >
                    {{ m }}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="flex border-2 border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50 shadow-sm h-[56px] sm:w-[140px] am-pm-toggle"
            >
              <button
                type="button"
                v-for="a in ampm"
                :key="a"
                @click="selectedAmPm = a"
                class="flex-1 text-xs font-black transition-all sm:text-sm"
                :class="
                  selectedAmPm === a
                    ? 'bg-black text-white shadow-inner'
                    : 'text-gray-400 hover:bg-white hover:text-gray-600'
                "
              >
                {{ a }}
              </button>
            </div>
          </div>
        </div>

        <!-- Guest Information -->
        <div class="pt-6 mt-2 border-t border-gray-100">
          <p class="mb-5 font-semibold tracking-wide text-gray-400 text-md">
            Your Details
          </p>
          <div class="space-y-4">
            <!-- Full Name -->
            <div class="relative">
              <label class="block mb-2 font-semibold text-gray-700"
                >Full name <span class="text-red-600">*</span></label
              >
              <div class="relative">
                <svg
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#129C48]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <input
                  id="guest-fullname"
                  v-model="guestFullname"
                  type="text"
                  placeholder="e.g. Kwame Mensah"
                  required
                  class="w-full pl-12 pr-4 py-4 border-2 border-gray-100 focus:border-[#129C48] rounded-2xl outline-none transition-all duration-300 font-medium placeholder:text-gray-400 placeholder:font-normal text-gray-800"
                />
              </div>
            </div>

            <!-- Email -->
            <div class="relative">
              <label class="block mb-2 font-semibold text-gray-700"
                >Email address <span class="text-red-600">*</span></label
              >
              <div class="relative">
                <svg
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#129C48]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <input
                  id="guest-email"
                  v-model="guestEmail"
                  type="email"
                  placeholder="e.g. kwame@example.com"
                  required
                  class="w-full pl-12 pr-4 py-4 border-2 border-gray-100 focus:border-[#129C48] rounded-2xl outline-none transition-all duration-300 font-medium placeholder:text-gray-400 placeholder:font-normal text-gray-800"
                />
              </div>
            </div>

            <!-- WhatsApp Number -->
            <div class="relative">
              <label class="block mb-2 font-semibold text-gray-700"
                >WhatsApp number <span class="text-red-600">*</span></label
              >
              <div class="relative">
                <svg
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#129C48]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <input
                  id="guest-whatsapp"
                  v-model="guestWhatsapp"
                  type="tel"
                  placeholder="e.g. +233 24 000 0000"
                  required
                  class="w-full pl-12 pr-4 py-4 border-2 border-gray-100 focus:border-[#129C48] rounded-2xl outline-none transition-all duration-300 font-medium placeholder:text-gray-400 placeholder:font-normal text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="pt-10 mt-6 border-t border-gray-100">
          <div
            class="flex flex-col items-center gap-4 booking-actions sm:flex-row sm:gap-5"
          >
            <button
              type="submit"
              class="booking-action farmgate-btn"
              :disabled="isSubmitting"
            >
              <span class="btn-content">
                <span>{{
                  isSubmitting ? "Booking..." : "Book Appointment"
                }}</span>
                <svg
                  class="flex-shrink-0 w-4 h-4"
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
              <span class="hover-content">
                <span>{{
                  isSubmitting ? "Booking..." : "Book Appointment"
                }}</span>
                <svg
                  class="flex-shrink-0 w-4 h-4"
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
            <a href="/" class="booking-action farmgate-btn-outline">Cancel</a>
          </div>
        </div>
      </form>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity"
    >
      <div
        class="bg-white rounded-[3rem] p-8 sm:p-12 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
      >
        <div
          class="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 bg-[#129C48] rounded-full shadow-lg shadow-[#129C48]/30"
        >
          <svg
            class="w-10 h-10 text-white sm:w-12 sm:h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          class="font-['Livvic'] text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
        >
          Call Scheduled!
        </h3>
        <p class="mb-2 text-base leading-relaxed text-gray-500 sm:text-lg">
          Hi <strong class="text-black">{{ guestFullname }}</strong
          >, your call is set for
          <strong class="text-black">{{ formattedDate }}</strong> at
          <strong class="text-black"
            >{{ selectedHour }}:{{ selectedMinute }} {{ selectedAmPm }}</strong
          >.
        </p>
        <button @click="closeModal" class="w-full farmgate-btn">
          <span class="btn-content"><span>Back to Homepage</span></span>
          <span class="hover-content"><span>Back to Homepage</span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ripple effect styles for this page */
.ripple {
  position: relative;
  overflow: hidden;
}
.ripple-circle {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  background: rgba(255, 255, 255, 0.32);
  animation: ripple-anim 600ms linear;
  pointer-events: none;
  will-change: transform, opacity;
}
@keyframes ripple-anim {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
@keyframes pulseAnimateSolid {
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1.15, 1.45);
    opacity: 0;
  }
}

.animate-solid-pulse {
  animation: pulseAnimateSolid 1.2s ease-out infinite;
}
</style>

<style scoped>
.pattern-bg {
  position: relative;
}

.pattern-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/images/FARMGATE PATTERN _GREEN.png");
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
  background: #129c48;
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
  white-space: nowrap;
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
  white-space: nowrap;
  transform: translateY(100%);
  transition: transform 300ms ease;
}

.farmgate-btn:hover .btn-content {
  transform: translateY(-100%);
}
.farmgate-btn:hover .hover-content {
  transform: translateY(0);
}

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

.booking-actions > .booking-action {
  width: 234.625px !important;
  min-height: 53px;
  height: 53px;
  padding: 0 2rem;
  box-sizing: border-box;
  flex: 0 0 auto;
}

/* Custom Responsiveness for 320x568px */
@media (max-width: 360px) {
  .form-card {
    padding: 1.5rem 0.75rem !important;
    border-radius: 1.5rem !important;
  }
  h2 {
    font-size: 1.5rem !important;
  }
  .farmgate-btn,
  .farmgate-btn-outline {
    padding: 0.75rem 1rem !important;
    font-size: 0.75rem !important;
  }
  .time-select-container {
    gap: 0.75rem !important;
  }
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
  .am-pm-toggle button {
    font-size: 10px !important;
  }
}

/* Custom Scrollbar for Dropdown */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #129c48;
  border-radius: 10px;
}
</style>
