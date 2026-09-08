<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      @click.self="closeModal"
    >
      <transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in transform"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-4"
      >
        <div
          v-if="isOpen"
          class="relative w-full max-w-lg my-8 overflow-hidden bg-[#09150e] border border-white/15 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] text-white font-montserrat"
        >
          <!-- Background Glow Accents -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#129C48]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#F2CB00]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white border border-white/10 cursor-pointer group"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Content Container -->
          <div class="relative z-10 p-6 sm:p-8">
            <!-- Header Logo & Title -->
            <div class="text-center mb-6">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-2xl bg-gradient-to-br from-[#129C48] to-[#0e7d39] shadow-lg shadow-[#129C48]/30 border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {{ currentTitle }}
              </h2>
              <p class="mt-1 text-xs sm:text-sm text-white/60">
                {{ currentSubtitle }}
              </p>
            </div>

            <!-- Tab Switcher (Only shown on Login and Signup views) -->
            <div v-if="currentView === 'login' || currentView === 'signup'" class="flex p-1 mb-6 bg-black/50 border border-white/10 rounded-2xl backdrop-blur-md">
              <button
                @click="switchView('login')"
                :class="[
                  'flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer text-center',
                  currentView === 'login'
                    ? 'bg-gradient-to-r from-[#F2CB00] to-[#e0bc00] text-black shadow-md font-bold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                ]"
              >
                Sign In
              </button>
              <button
                @click="switchView('signup')"
                :class="[
                  'flex-1 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer text-center',
                  currentView === 'signup'
                    ? 'bg-gradient-to-r from-[#129C48] to-[#0e7d39] text-white shadow-md font-bold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                ]"
              >
                Create Account
              </button>
            </div>

            <!-- Alert Banner (Error / Notice) -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="errorMessage" class="flex items-start gap-3 p-3.5 mb-5 text-xs sm:text-sm text-red-200 bg-red-900/40 border border-red-500/50 rounded-xl backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="flex-1">
                  <p class="font-semibold text-white">Authentication Error</p>
                  <p class="mt-0.5 text-red-200/90">{{ errorMessage }}</p>
                </div>
                <button @click="errorMessage = ''" class="text-white/60 hover:text-white cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </transition>

            <!-- ================= VIEW 1: LOGIN FORM ================= -->
            <form v-if="currentView === 'login'" @submit.prevent="handleLogin" class="space-y-4">
              <div>
                <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Email Address
                </label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                  <input
                    v-model="loginForm.email"
                    type="email"
                    required
                    placeholder="e.g. connect@farmgate.africa"
                    class="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#F2CB00] focus:ring-1 focus:ring-[#F2CB00] transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <label class="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Password
                  </label>
                  <a
                    href="#forgot"
                    @click.prevent="switchView('forgot')"
                    class="text-xs font-semibold text-[#F2CB00] hover:underline cursor-pointer transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    v-model="loginForm.password"
                    :type="showLoginPassword ? 'text' : 'password'"
                    required
                    placeholder="Enter your password"
                    class="w-full pl-10 pr-11 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#F2CB00] focus:ring-1 focus:ring-[#F2CB00] transition-all outline-none"
                  />
                  <button
                    type="button"
                    @click="showLoginPassword = !showLoginPassword"
                    class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-white/40 hover:text-white cursor-pointer transition-colors"
                  >
                    <svg v-if="!showLoginPassword" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between pt-1">
                <label class="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    v-model="loginForm.rememberMe"
                    type="checkbox"
                    class="w-4 h-4 rounded border-white/30 bg-black/40 text-[#F2CB00] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#F2CB00]"
                  />
                  <span class="text-xs text-white/70">Remember this device</span>
                </label>
              </div>

              <div class="pt-3">
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#F2CB00] to-[#e0bc00] text-black font-bold text-sm tracking-wide shadow-lg shadow-[#F2CB00]/20 hover:shadow-[#F2CB00]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
                >
                  <svg v-if="isLoading" class="w-5 h-5 text-black animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isLoading ? 'Authenticating...' : 'Sign In to Dashboard' }}</span>
                  <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>

            <!-- ================= VIEW 2: SIGNUP FORM ================= -->
            <form v-else-if="currentView === 'signup'" @submit.prevent="handleSignup" class="space-y-4">
              <!-- Name Grid -->
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                    First Name *
                  </label>
                  <input
                    v-model="signupForm.first_name"
                    type="text"
                    required
                    placeholder="e.g. Kow"
                    class="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#129C48] focus:ring-1 focus:ring-[#129C48] transition-all outline-none"
                  />
                </div>
                <div>
                  <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                    Last Name *
                  </label>
                  <input
                    v-model="signupForm.last_name"
                    type="text"
                    required
                    placeholder="e.g. Aboagye"
                    class="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#129C48] focus:ring-1 focus:ring-[#129C48] transition-all outline-none"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Email Address *
                </label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    v-model="signupForm.email"
                    type="email"
                    required
                    placeholder="investor@domain.com"
                    class="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#129C48] focus:ring-1 focus:ring-[#129C48] transition-all outline-none"
                  />
                </div>
              </div>

              <!-- Phone & Country Selector -->
              <div>
                <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Phone Number (E.164 Standard) *
                </label>
                <div class="flex gap-2">
                  <div class="relative w-36 shrink-0">
                    <!-- Visual Trigger Display with Prominent text-2xl Flag -->
                    <div class="w-full pl-3.5 pr-10 py-2.5 bg-black/60 border border-white/20 rounded-xl flex items-center gap-2.5">
                      <span class="text-2xl leading-none select-none">{{ getFlagEmoji(signupForm.countryCode) }}</span>
                      <span class="text-sm font-medium text-white leading-none">{{ signupForm.countryCode }}</span>
                    </div>
                    <!-- Transparent Native Select overlaying visual trigger -->
                    <select
                      v-model="signupForm.countryCode"
                      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 text-lg"
                    >
                      <option value="+233">🇬🇭 +233</option>
                      <option value="+234">🇳🇬 +234</option>
                      <option value="+254">🇰🇪 +254</option>
                      <option value="+27">🇿🇦 +27</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                    </select>
                    <span class="absolute inset-y-0 right-3.5 flex items-center text-white/60 pointer-events-none z-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                  <div class="relative flex-1">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-white/40 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <input
                      v-model="signupForm.phone"
                      type="tel"
                      required
                      placeholder="24 123 4567"
                      class="w-full pl-9 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#129C48] focus:ring-1 focus:ring-[#129C48] transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <!-- Password -->
              <div>
                <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Password (Min 8 characters) *
                </label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    v-model="signupForm.password"
                    :type="showSignupPassword ? 'text' : 'password'"
                    required
                    minlength="8"
                    placeholder="Create a secure password"
                    class="w-full pl-10 pr-11 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#129C48] focus:ring-1 focus:ring-[#129C48] transition-all outline-none"
                  />
                  <button
                    type="button"
                    @click="showSignupPassword = !showSignupPassword"
                    class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-white/40 hover:text-white cursor-pointer transition-colors"
                  >
                    <svg v-if="!showSignupPassword" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>

                <!-- Password Strength Meter -->
                <div v-if="signupForm.password" class="mt-2">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-[11px] text-white/60">Security Strength:</span>
                    <span :class="['text-[11px] font-bold uppercase', passwordStrength.colorClass]">
                      {{ passwordStrength.label }}
                    </span>
                  </div>
                  <div class="grid grid-cols-4 gap-1.5 h-1.5">
                    <div
                      v-for="step in 4"
                      :key="step"
                      :class="[
                        'rounded-full transition-all duration-300',
                        step <= passwordStrength.score ? passwordStrength.bgClass : 'bg-white/10'
                      ]"
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Terms & Conditions Checkbox -->
              <div class="pt-1">
                <label class="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    v-model="signupForm.agreeTerms"
                    type="checkbox"
                    required
                    class="w-4 h-4 mt-0.5 rounded border-white/30 bg-black/40 text-[#129C48] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#129C48]"
                  />
                  <span class="text-xs text-white/70 leading-relaxed">
                    I agree to FarmGate Africa's
                    <a href="/terms" @click.stop class="text-[#F2CB00] hover:underline font-medium">Terms of Service</a>
                    and
                    <a href="/privacy" @click.stop class="text-[#F2CB00] hover:underline font-medium">Privacy Policy</a>, including RBAC investor rules.
                  </span>
                </label>
              </div>

              <!-- Submit Button -->
              <div class="pt-3">
                <button
                  type="submit"
                  :disabled="isLoading || !signupForm.agreeTerms"
                  class="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#129C48] to-[#0e7d39] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#129C48]/30 hover:shadow-[#129C48]/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg v-if="isLoading" class="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isLoading ? 'Creating Account...' : 'Create Investor Account' }}</span>
                  <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>

            <!-- ================= VIEW 3: FORGOT PASSWORD FORM ================= -->
            <form v-else-if="currentView === 'forgot'" @submit.prevent="handleForgotPassword" class="space-y-4">
              <div class="p-4 mb-4 text-xs text-white/80 bg-white/5 border border-white/10 rounded-2xl leading-relaxed">
                💡 Enter your registered email address below. If an account matches, we will send a secure recovery link to reset your credentials.
              </div>

              <div>
                <label class="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  Registered Email Address
                </label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-white/40 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    v-model="forgotForm.email"
                    type="email"
                    required
                    placeholder="e.g. investor@domain.com"
                    class="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:border-[#F2CB00] focus:ring-1 focus:ring-[#F2CB00] transition-all outline-none"
                  />
                </div>
              </div>

              <div class="pt-3 space-y-3">
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#F2CB00] to-[#e0bc00] text-black font-bold text-sm tracking-wide shadow-lg shadow-[#F2CB00]/20 hover:shadow-[#F2CB00]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
                >
                  <svg v-if="isLoading" class="w-5 h-5 text-black animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ isLoading ? 'Sending Link...' : 'Send Recovery Link' }}</span>
                </button>

                <button
                  type="button"
                  @click="switchView('login')"
                  class="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Back to Sign In</span>
                </button>
              </div>
            </form>

            <!-- ================= VIEW 4: SUCCESS / VERIFICATION SCREEN ================= -->
            <div v-else-if="currentView === 'success'" class="py-4 text-center space-y-5">
              <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#129C48] to-[#25d366] shadow-xl shadow-[#129C48]/40 border-2 border-white/30 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h3 class="text-xl font-bold text-white sm:text-2xl">{{ successData.title }}</h3>
                <p class="mt-2 text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                  {{ successData.message }}
                </p>
              </div>

              <div class="pt-4">
                <button
                  type="button"
                  @click="handleSuccessAction"
                  class="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#F2CB00] to-[#e0bc00] text-black font-bold text-sm tracking-wide shadow-lg shadow-[#F2CB00]/20 hover:shadow-[#F2CB00]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{{ successData.buttonText }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Footer Note -->
            <div class="pt-6 mt-6 border-t border-white/10 text-center">
              <p class="text-[11px] text-white/50 flex items-center justify-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-[#129C48]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>256-bit SSL Encrypted • RBAC Protected • FarmGate Africa Security</span>
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, reactive } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  initialView: {
    type: String,
    default: "login", // 'login', 'signup', 'forgot', 'success'
  },
});

const emit = defineEmits(["close", "login-success", "register-success"]);

const currentView = ref(props.initialView);
const isLoading = ref(false);
const errorMessage = ref("");
const showLoginPassword = ref(false);
const showSignupPassword = ref(false);

watch(
  () => props.initialView,
  (newVal) => {
    currentView.value = newVal;
    errorMessage.value = "";
  }
);

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      currentView.value = props.initialView;
      errorMessage.value = "";
    }
  }
);

/* Form Reactive Models */
const loginForm = reactive({
  email: "",
  password: "",
  rememberMe: true,
});

const signupForm = reactive({
  first_name: "",
  last_name: "",
  email: "",
  countryCode: "+233",
  phone: "",
  password: "",
  agreeTerms: false,
});

const flagMap = {
  "+233": "🇬🇭",
  "+234": "🇳🇬",
  "+254": "🇰🇪",
  "+27": "🇿🇦",
  "+1": "🇺🇸",
  "+44": "🇬🇧",
  "+971": "🇦🇪",
};
const getFlagEmoji = (code) => flagMap[code] || "🌐";

const forgotForm = reactive({
  email: "",
});

const successData = reactive({
  title: "Account Created!",
  message: "Welcome to FarmGate Africa. Your investor account has been provisioned successfully.",
  buttonText: "Proceed to Dashboard",
  type: "signup",
});

/* Dynamic Titles & Subtitles based on View */
const currentTitle = computed(() => {
  if (currentView.value === "login") return "Welcome Back";
  if (currentView.value === "signup") return "Join FarmGate Africa";
  if (currentView.value === "forgot") return "Password Recovery";
  return "Success!";
});

const currentSubtitle = computed(() => {
  if (currentView.value === "login") return "Access your agricultural portfolio and investment dashboard.";
  if (currentView.value === "signup") return "Start investing in verified African crop, livestock & fishery opportunities.";
  if (currentView.value === "forgot") return "Follow the instructions to regain access to your investor account.";
  return "You are all set to explore FarmGate Africa.";
});

/* Password Strength Calculation */
const passwordStrength = computed(() => {
  const pwd = signupForm.password || "";
  let score = 0;
  if (pwd.length >= 8) score += 1;
  if (/[A-Z]/.test(pwd)) score += 1;
  if (/[0-9]/.test(pwd)) score += 1;
  if (/[^A-Za-z0-9]/.test(pwd) || pwd.length >= 12) score += 1;

  if (score === 0 || pwd.length === 0) {
    return { score: 0, label: "Too Short", colorClass: "text-red-400", bgClass: "bg-red-500" };
  } else if (score === 1) {
    return { score: 1, label: "Weak", colorClass: "text-red-400", bgClass: "bg-red-500" };
  } else if (score === 2) {
    return { score: 2, label: "Fair", colorClass: "text-amber-400", bgClass: "bg-amber-500" };
  } else if (score === 3) {
    return { score: 3, label: "Good", colorClass: "text-yellow-300", bgClass: "bg-yellow-400" };
  } else {
    return { score: 4, label: "Strong", colorClass: "text-[#129C48]", bgClass: "bg-[#129C48]" };
  }
});

/* View Switcher */
const switchView = (view) => {
  currentView.value = view;
  errorMessage.value = "";
};

const closeModal = () => {
  emit("close");
};

/* Form Submission Handlers (Ready for Backend API wiring!) */
const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    // Simulate API delay for realistic UX review
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Demo check for invalid email to show inline error UX
    if (loginForm.email.includes("error")) {
      throw new Error("Invalid credentials or account deactivated. Please verify your password.");
    }

    // Success simulation
    const mockUser = {
      id: "usr-001",
      first_name: "Investor",
      email: loginForm.email,
      role: loginForm.email.includes("admin") ? "ADMIN" : "USER",
    };

    emit("login-success", { user: mockUser, token: "mock-jwt-token" });
    closeModal();
  } catch (err) {
    errorMessage.value = err.message || "Unable to authenticate. Please try again.";
  } finally {
    isLoading.value = false;
  }
};

const handleSignup = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    if (signupForm.password.length < 8) {
      throw new Error("Password must be at least 8 characters long to meet security standards.");
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Format E.164 phone number
    const formattedPhone = `${signupForm.countryCode}${signupForm.phone.replace(/\D/g, "")}`;

    const mockUser = {
      id: "usr-002",
      first_name: signupForm.first_name,
      last_name: signupForm.last_name,
      email: signupForm.email,
      phone: formattedPhone,
      role: "USER",
    };

    successData.title = "Account Provisioned!";
    successData.message = `Welcome ${signupForm.first_name}! Your investor account (${signupForm.email}) is active and secured.`;
    successData.buttonText = "Proceed to Dashboard";
    successData.type = "signup";
    
    currentView.value = "success";
    emit("register-success", { user: mockUser });
  } catch (err) {
    errorMessage.value = err.message || "An error occurred during account creation.";
  } finally {
    isLoading.value = false;
  }
};

const handleForgotPassword = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    successData.title = "Recovery Link Sent!";
    successData.message = `We have dispatched password reset instructions to ${forgotForm.email}. Please check your email inbox and spam folder.`;
    successData.buttonText = "Return to Sign In";
    successData.type = "forgot";

    currentView.value = "success";
  } catch (err) {
    errorMessage.value = "We could not find an active account associated with that email.";
  } finally {
    isLoading.value = false;
  }
};

const handleSuccessAction = () => {
  if (successData.type === "forgot") {
    switchView("login");
  } else {
    closeModal();
  }
};
</script>
