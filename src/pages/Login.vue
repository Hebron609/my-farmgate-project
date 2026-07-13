<template>
  <div class="min-h-screen bg-[#07110a] text-white font-montserrat flex flex-col lg:flex-row selection:bg-[#F2CB00] selection:text-black">
    <!-- Left Column: Branding & Institutional Trust (Hidden on small mobile, takes 50% on large screens) -->
    <div class="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r border-white/10 overflow-hidden bg-[#040e08]">
      <!-- Background Farm Image with Deep Forest Gradient Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="/images/signup-image.png" alt="FarmGate Africa Farmland" class="w-full h-full object-cover object-[15%_center] scale-105 transition-transform duration-1000 ease-out hover:scale-100" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#040e08] via-[#09150e]/85 to-[#040e08]/75"></div>
        <div class="absolute inset-0 bg-[#129C48]/15 mix-blend-overlay"></div>
      </div>

      <!-- Background Glow & Accents -->
      <div class="absolute z-[1] -top-24 -left-24 w-96 h-96 bg-[#129C48]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute z-[1] -bottom-24 -right-24 w-96 h-96 bg-[#F2CB00]/20 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Top Branding -->
      <div class="relative z-10">
        <a href="/" class="inline-block transition-transform duration-300 hover:scale-105">
          <img :src="logoWhite1" alt="FarmGate Africa Logo" class="w-36 h-auto object-contain" />
        </a>
      </div>

      <!-- Center Value Proposition -->
      <div class="relative z-10 max-w-lg my-auto py-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-[#F2CB00] bg-[#F2CB00]/10 border border-[#F2CB00]/30 rounded-full">
          <span class="w-2 h-2 rounded-full bg-[#F2CB00] animate-pulse"></span>
          <span>Investor Portal</span>
        </div>
        <h1 class="text-4xl font-extrabold tracking-tight text-white xl:text-5xl leading-tight">
          Access Your Verified Agricultural Portfolio.
        </h1>
        <p class="mt-4 text-base text-white/70 leading-relaxed">
          Monitor your asset-backed syndications, track live farm cycles, download financial prospectuses, and manage your payouts in real-time.
        </p>

        <!-- Trust Badges -->
        <div class="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#129C48]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold text-white">100% Asset-Backed</p>
              <p class="text-[11px] text-white/50">Insured African Farmland</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#F2CB00]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold text-white">RBAC Protected</p>
              <p class="text-[11px] text-white/50">256-bit Encryption</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Legal & Support -->
      <div class="relative z-10 flex items-center justify-between text-xs text-white/50 pt-6 border-t border-white/10">
        <p>© 2026 FarmGate Africa. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
    <!-- Right Column: Interactive Login & Forgot Password Forms -->
    <div class="flex-1 flex flex-col justify-center px-6 pt-24 pb-12 sm:px-12 sm:pt-28 lg:py-12 lg:px-16 xl:px-24 bg-[#0a140d] lg:bg-white relative overflow-hidden">
      <!-- Mobile-only Background Image with Dark Forest Overlay -->
      <div class="absolute inset-0 z-0 lg:hidden">
        <img src="/images/signup-image.png" alt="FarmGate Africa Farmland" class="w-full h-full object-cover object-[15%_center]" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#040e08]/90 via-[#0a140d]/85 to-[#040e08]/95"></div>
        <div class="absolute inset-0 bg-[#129C48]/10 mix-blend-overlay"></div>
      </div>

      <!-- FarmGate Pattern Overlay for Right Column -->
      <div class="absolute inset-0 z-0 pointer-events-none opacity-[0.06] bg-[url('/images/FARMGATE%20PATTERN%20_GREEN.png')] bg-cover bg-center"></div>

      <!-- Desktop Homepage Button (top-right of this panel) -->
      <div class="absolute z-30 hidden top-8 right-8 xl:right-12 lg:inline-flex group">
        <div class="absolute inset-0 z-0 w-full h-full rounded-full pointer-events-none bg-gradient-to-r from-green-800 to-[#F2CB00] animate-solid-pulse"></div>
        <a href="/" aria-label="Homepage" class="relative z-10 flex items-center gap-3 px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-xl ripple bg-gradient-to-r from-green-800 to-yellow-600 hover:shadow-2xl hover:scale-105 active:scale-100 focus:scale-100 whitespace-nowrap">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-4 0h4" />
          </svg>
          <span class="text-sm font-semibold leading-none tracking-wide">Homepage</span>
        </a>
      </div>

      <!-- Mobile Top Navigation Header (Positioned at absolute top of viewport) -->
      <div class="absolute top-6 left-6 right-6 sm:left-12 sm:right-12 z-30 flex items-center justify-between lg:hidden">
        <a href="/">
          <img :src="logoWhite1" alt="FarmGate Africa" class="w-28 h-auto object-contain" />
        </a>
        <!-- Mobile Homepage Button -->
        <div class="inline-flex group relative">
          <div class="absolute inset-0 z-0 w-full h-full rounded-full pointer-events-none bg-gradient-to-r from-green-800 to-[#F2CB00] animate-solid-pulse"></div>
          <a href="/" aria-label="Homepage" class="relative z-10 flex items-center gap-2 px-5 py-2 font-bold text-white transition-all duration-300 rounded-full shadow-xl ripple bg-gradient-to-r from-green-800 to-yellow-600 hover:shadow-2xl hover:scale-105 active:scale-100 focus:scale-100 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-4 0h4" />
            </svg>
            <span class="text-xs font-semibold leading-none tracking-wide">Homepage</span>
          </a>
        </div>
      </div>

      <div class="w-full max-w-md mx-auto relative z-10">
        <!-- Form Header -->
        <div class="mb-8">
          <div class="inline-flex lg:hidden items-center gap-2 px-3 py-1 mb-3 text-[11px] font-bold uppercase tracking-wider text-[#F2CB00] bg-[#F2CB00]/10 border border-[#F2CB00]/30 rounded-full">
            <span>Investor Portal</span>
          </div>
          <h2 class="text-3xl font-extrabold tracking-tight text-white lg:text-[#040e08] sm:text-4xl">
            {{ isForgotMode ? 'Reset Password' : 'Sign In to Dashboard' }}
          </h2>
          <p class="mt-2 text-sm text-white/60 lg:text-gray-600">
            <span v-if="!isForgotMode">
              Don't have an investor account yet?
              <a href="/signup" class="font-semibold text-[#F2CB00] lg:text-[#129C48] hover:underline ml-1">Create Account</a>
            </span>
            <span v-else>
              Remembered your credentials?
              <a href="#login" @click.prevent="isForgotMode = false" class="font-semibold text-[#F2CB00] lg:text-[#129C48] hover:underline ml-1">Back to Sign In</a>
            </span>
          </p>
        </div>

        <!-- Error Alert -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="errorMessage" class="flex items-start gap-3 p-4 mb-6 text-sm text-red-200 lg:text-red-800 bg-red-900/40 lg:bg-red-50 border border-red-500/50 lg:border-red-200 rounded-2xl backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400 lg:text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="flex-1">
              <p class="font-bold text-white lg:text-red-900">Authentication Failed</p>
              <p class="mt-0.5 text-red-200/90 lg:text-red-700">{{ errorMessage }}</p>
            </div>
            <button @click="errorMessage = ''" class="text-white/60 lg:text-red-400 hover:text-white lg:hover:text-red-700 cursor-pointer">✕</button>
          </div>
        </transition>

        <!-- Success Alert -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
        >
          <div v-if="successMessage" class="flex items-start gap-3 p-4 mb-6 text-sm text-emerald-200 lg:text-emerald-800 bg-[#129C48]/30 lg:bg-emerald-50 border border-[#129C48] lg:border-emerald-200 rounded-2xl backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-400 lg:text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <div class="flex-1">
              <p class="font-bold text-white lg:text-emerald-900">Success!</p>
              <p class="mt-0.5 text-emerald-100/90 lg:text-emerald-700">{{ successMessage }}</p>
            </div>
          </div>
        </transition>

        <!-- ================= VIEW 1: SIGN IN FORM ================= -->
        <form v-if="!isForgotMode" @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block mb-2 text-xs font-bold uppercase tracking-wider text-white/80 lg:text-gray-700">
              Email Address
            </label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-white/40 lg:text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
              <input
                v-model="loginForm.email"
                type="email"
                required
                placeholder="kwameaboagye@gmail.com"
                class="w-full pl-12 pr-4 py-3.5 bg-black/40 lg:bg-gray-50 border border-white/20 lg:border-gray-200 rounded-2xl text-sm text-white lg:text-gray-900 placeholder-white/30 lg:placeholder-gray-400 focus:border-[#F2CB00] lg:focus:border-[#129C48] focus:ring-1 focus:ring-[#F2CB00] lg:focus:ring-[#129C48] lg:focus:bg-white transition-all outline-none shadow-sm"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-2">
              <label class="text-xs font-bold uppercase tracking-wider text-white/80 lg:text-gray-700">
                Password
              </label>
              <a
                href="#forgot"
                @click.prevent="isForgotMode = true"
                class="text-xs font-semibold text-[#F2CB00] lg:text-[#129C48] hover:underline cursor-pointer transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-white/40 lg:text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="Enter your secure password"
                class="w-full pl-12 pr-12 py-3.5 bg-black/40 lg:bg-gray-50 border border-white/20 lg:border-gray-200 rounded-2xl text-sm text-white lg:text-gray-900 placeholder-white/30 lg:placeholder-gray-400 focus:border-[#F2CB00] lg:focus:border-[#129C48] focus:ring-1 focus:ring-[#F2CB00] lg:focus:ring-[#129C48] lg:focus:bg-white transition-all outline-none shadow-sm"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 flex items-center pr-4 text-white/40 lg:text-gray-400 hover:text-white lg:hover:text-gray-600 cursor-pointer transition-colors"
              >
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                v-model="loginForm.rememberMe"
                type="checkbox"
                class="w-4 h-4 rounded border-white/30 lg:border-gray-300 bg-black/40 lg:bg-white text-[#F2CB00] lg:text-[#129C48] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#F2CB00] lg:accent-[#129C48]"
              />
              <span class="text-xs text-white/70 lg:text-gray-600">Remember this device for 30 days</span>
            </label>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#F2CB00] to-[#e0bc00] lg:from-[#129C48] lg:to-[#0d7535] text-black lg:text-white font-extrabold text-sm tracking-wide shadow-xl shadow-[#F2CB00]/20 lg:shadow-[#129C48]/20 hover:shadow-[#F2CB00]/40 lg:hover:shadow-[#129C48]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
            >
              <svg v-if="isLoading" class="w-5 h-5 text-black lg:text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isLoading ? 'Authenticating Credentials...' : 'Sign In to Portal' }}</span>
              <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>

        <!-- ================= VIEW 2: FORGOT PASSWORD FORM ================= -->
        <form v-else @submit.prevent="handleForgotPassword" class="space-y-5">
          <div class="p-4 text-xs text-white/80 lg:text-gray-700 bg-white/5 lg:bg-blue-50/60 border border-white/10 lg:border-blue-200/80 rounded-2xl leading-relaxed">
            💡 Enter your registered email address below. If an account matches, we will send a secure recovery link to reset your password.
          </div>

          <div>
            <label class="block mb-2 text-xs font-bold uppercase tracking-wider text-white/80 lg:text-gray-700">
              Registered Email Address
            </label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-white/40 lg:text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                v-model="forgotEmail"
                type="email"
                required
                placeholder="investor@domain.com"
                class="w-full pl-12 pr-4 py-3.5 bg-black/40 lg:bg-gray-50 border border-white/20 lg:border-gray-200 rounded-2xl text-sm text-white lg:text-gray-900 placeholder-white/30 lg:placeholder-gray-400 focus:border-[#F2CB00] lg:focus:border-[#129C48] focus:ring-1 focus:ring-[#F2CB00] lg:focus:ring-[#129C48] lg:focus:bg-white transition-all outline-none shadow-sm"
              />
            </div>
          </div>

          <div class="pt-2 space-y-3">
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#F2CB00] to-[#e0bc00] lg:from-[#129C48] lg:to-[#0d7535] text-black lg:text-white font-extrabold text-sm tracking-wide shadow-xl shadow-[#F2CB00]/20 lg:shadow-[#129C48]/20 hover:shadow-[#F2CB00]/40 lg:hover:shadow-[#129C48]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
            >
              <svg v-if="isLoading" class="w-5 h-5 text-black lg:text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isLoading ? 'Dispatching Recovery Link...' : 'Send Recovery Link' }}</span>
            </button>

            <button
              type="button"
              @click="isForgotMode = false"
              class="w-full py-3.5 px-6 rounded-full bg-white/5 lg:bg-gray-100 hover:bg-white/10 lg:hover:bg-gray-200 text-white lg:text-gray-700 font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Return to Sign In</span>
            </button>
          </div>
        </form>

        <!-- Back to Marketplace Navigation -->
        <div class="mt-10 pt-6 border-t border-white/10 lg:border-gray-200 text-center">
          <a href="/marketplace" class="text-xs font-semibold text-white/60 lg:text-gray-600 hover:text-white lg:hover:text-[#129C48] inline-flex items-center gap-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#129C48]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Explore FarmGate Africa Marketplace</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import logoWhite1 from "@/assets/img/fg logo-white1.png";

const isForgotMode = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const showPassword = ref(false);

const loginForm = reactive({
  email: "",
  password: "",
  rememberMe: true,
});

const forgotEmail = ref("");

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (loginForm.email.includes("error")) {
      throw new Error("Invalid credentials or account deactivated. Please verify your password.");
    }

    const isAdmin = loginForm.email.includes("admin");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", loginForm.email);

    const redirectUrl = new URLSearchParams(window.location.search).get("redirect");
    successMessage.value = redirectUrl
      ? "Investor authenticated. Redirecting to your investment opportunity..."
      : isAdmin
      ? "Admin authenticated. Redirecting to Admin Dashboard..."
      : "Investor authenticated. Redirecting to your portfolio...";

    setTimeout(() => {
      if (redirectUrl) {
        window.location.href = decodeURIComponent(redirectUrl);
      } else {
        window.location.href = isAdmin ? "/admin" : "/dashboard";
      }
    }, 1500);
  } catch (err) {
    errorMessage.value = err.message || "Authentication failed. Please verify your email and password.";
  } finally {
    isLoading.value = false;
  }
};

const handleForgotPassword = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    successMessage.value = `Recovery instructions dispatched to ${forgotEmail.value}. Check your inbox.`;
    forgotEmail.value = "";
  } catch (err) {
    errorMessage.value = "We could not find an active account associated with that email.";
  } finally {
    isLoading.value = false;
  }
};
</script>
