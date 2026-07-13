<template>
  <!-- 1. Full-Screen App Shell Flex Wrapper -->
  <div class="flex h-screen bg-gray-50 overflow-hidden font-['Montserrat'] select-none">
    <!-- Interstitial Loading Transition Overlay -->
    <DashboardTransition :show="showTransition" :duration="2200" />

    <!-- 2. Persistent Left Sidebar (Desktop) -->
    <aside class="w-64 bg-[#EEF8F1] border-r border-[#129C48]/15 flex flex-col justify-between hidden md:flex shrink-0 z-40">
      <!-- Top Section: Logo & Nav -->
      <div>
        <div class="h-20 px-6 border-b border-[#129C48]/10 flex items-center justify-between">
          <a href="/" class="flex items-center">
            <img :src="logoDark" alt="FarmGate Africa" class="h-14 w-auto object-contain scale-150 origin-left" />
          </a>
          <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#129C48]/15 text-[#129C48] ml-2">PORTAL</span>
        </div>

        <!-- Vertical Menu Flow -->
        <nav class="p-4 space-y-1.5">
          <!-- Farms -->
          <button
            @click="currentSidebarView = 'farms'; activeTab = 'active'"
            class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            :class="
              currentSidebarView === 'farms' && activeTab !== 'explore'
                ? 'text-[#129C48] bg-white font-bold shadow-sm border-r-4 border-[#129C48]'
                : 'text-gray-700 hover:bg-white/70 hover:text-[#129C48]'
            "
          >
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              <span>Farms</span>
            </div>
          </button>

          <!-- Marketplace / Open Investments -->
          <button
            @click="currentSidebarView = 'farms'; activeTab = 'explore'"
            class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            :class="
              currentSidebarView === 'farms' && activeTab === 'explore'
                ? 'text-[#129C48] bg-white font-bold shadow-sm border-r-4 border-[#129C48]'
                : 'text-gray-700 hover:bg-white/70 hover:text-[#129C48]'
            "
          >
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Investments</span>
            </div>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">OPEN</span>
          </button>

          <!-- Finances / Wallet -->
          <button
            @click="currentSidebarView = 'finances'"
            class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            :class="
              currentSidebarView === 'finances'
                ? 'text-[#129C48] bg-white font-bold shadow-sm border-r-4 border-[#129C48]'
                : 'text-gray-700 hover:bg-white/70 hover:text-[#129C48]'
            "
          >
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 00-2 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Finances</span>
            </div>
          </button>

          <!-- Notifications -->
          <button
            @click="currentSidebarView = 'notifications'"
            class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            :class="
              currentSidebarView === 'notifications'
                ? 'text-[#129C48] bg-white font-bold shadow-sm border-r-4 border-[#129C48]'
                : 'text-gray-700 hover:bg-white/70 hover:text-[#129C48]'
            "
          >
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span>Notifications</span>
            </div>
            <!-- Small Red Notification Badge -->
            <span class="bg-red-500 text-white rounded-full px-2 py-0.5 text-[10px] font-extrabold">3</span>
          </button>

          <!-- Profile / KYC -->
          <button
            @click="currentSidebarView = 'profile'"
            class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
            :class="
              currentSidebarView === 'profile'
                ? 'text-[#129C48] bg-white font-bold shadow-sm border-r-4 border-[#129C48]'
                : 'text-gray-700 hover:bg-white/70 hover:text-[#129C48]'
            "
          >
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile / KYC</span>
            </div>
          </button>
        </nav>
      </div>

      <!-- Bottom Section: Sign Out -->
      <div class="p-4 border-t border-[#129C48]/10">
        <div class="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/80 border border-[#129C48]/10 mb-3 shadow-xs">
          <div class="w-9 h-9 rounded-full bg-[#129C48] text-white flex items-center justify-center font-bold text-sm">
            {{ userName.charAt(0) }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-bold text-gray-900 truncate">{{ userName }}</p>
            <p class="text-[11px] text-green-700 font-semibold truncate">Verified Investor</p>
          </div>
        </div>

        <button
          @click="handleSignOut"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50/80 transition-all cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>

    <!-- Mobile Slide-over Drawer (< md) -->
    <div v-if="isMobileSidebarOpen" class="fixed inset-0 z-50 flex md:hidden">
      <div @click="isMobileSidebarOpen = false" class="fixed inset-0 bg-black/50 backdrop-blur-xs"></div>
      <aside class="relative w-72 bg-[#EEF8F1] border-r border-[#129C48]/15 h-full flex flex-col justify-between shadow-2xl z-10">
        <div>
          <div class="h-16 px-5 border-b border-[#129C48]/10 flex items-center justify-between">
            <a href="/" class="flex items-center">
              <img :src="logoDark" alt="FarmGate Africa" class="h-9 w-auto object-contain scale-135 origin-left" />
            </a>
            <button @click="isMobileSidebarOpen = false" class="text-gray-500 hover:text-gray-900 text-2xl p-1">&times;</button>
          </div>
          <nav class="p-4 space-y-1.5">
            <button
              @click="currentSidebarView = 'farms'; activeTab = 'active'; isMobileSidebarOpen = false"
              class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold"
              :class="currentSidebarView === 'farms' && activeTab !== 'explore' ? 'text-[#129C48] bg-white font-bold shadow-sm' : 'text-gray-700 hover:bg-white/70'"
            >
              <span>Farms</span>
            </button>
            <button
              @click="currentSidebarView = 'farms'; activeTab = 'explore'; isMobileSidebarOpen = false"
              class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold"
              :class="currentSidebarView === 'farms' && activeTab === 'explore' ? 'text-[#129C48] bg-white font-bold shadow-sm' : 'text-gray-700 hover:bg-white/70'"
            >
              <span>Marketplace</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">OPEN</span>
            </button>
            <button
              @click="currentSidebarView = 'finances'; isMobileSidebarOpen = false"
              class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold"
              :class="currentSidebarView === 'finances' ? 'text-[#129C48] bg-white font-bold shadow-sm' : 'text-gray-700 hover:bg-white/70'"
            >
              <span>Finances</span>
            </button>
            <button
              @click="currentSidebarView = 'notifications'; isMobileSidebarOpen = false"
              class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold"
              :class="currentSidebarView === 'notifications' ? 'text-[#129C48] bg-white font-bold shadow-sm' : 'text-gray-700 hover:bg-white/70'"
            >
              <span>Notifications</span>
              <span class="bg-red-500 text-white rounded-full px-2 py-0.5 text-[10px] font-extrabold">3</span>
            </button>
            <button
              @click="currentSidebarView = 'profile'; isMobileSidebarOpen = false"
              class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold"
              :class="currentSidebarView === 'profile' ? 'text-[#129C48] bg-white font-bold shadow-sm' : 'text-gray-700 hover:bg-white/70'"
            >
              <span>Profile / KYC</span>
            </button>
          </nav>
        </div>
        <div class="p-4 border-t border-[#129C48]/10">
          <button @click="handleSignOut" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50/80">
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </div>

    <!-- 3. The Main Content Area (Right Side) -->
    <div class="flex-1 flex flex-col h-screen overflow-hidden">
      <!-- App Shell Top Bar -->
      <header class="h-16 bg-[#EEF8F1] border-b border-[#129C48]/15 px-4 sm:px-6 flex items-center justify-between shrink-0 z-30">
        <div class="flex items-center gap-4">
          <button
            @click="isMobileSidebarOpen = true"
            class="md:hidden text-gray-600 hover:text-gray-900 p-2 rounded-lg cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h2 class="text-base sm:text-lg font-bold text-gray-800">
            {{
              currentSidebarView === 'finances' ? 'Finances / Wallet' :
              currentSidebarView === 'notifications' ? 'Notifications' :
              currentSidebarView === 'profile' ? 'Profile & KYC Settings' :
              activeTab === 'explore' ? 'Open Farm Opportunities' : 'Investor Dashboard'
            }}
          </h2>
        </div>
        <div class="flex items-center gap-3">
          <a
            href="/"
            class="text-xs font-semibold text-gray-600 hover:text-gray-900 hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-white/80 border border-[#129C48]/20 hover:bg-white transition-all shadow-2xs"
          >
            Back to Site
          </a>
          <div class="w-8 h-8 rounded-full bg-[#129C48] text-white flex items-center justify-center font-bold text-xs shadow-sm">
            {{ userName.charAt(0) }}
          </div>
        </div>
      </header>

      <!-- Scrollable Main Container -->
      <main class="flex-1 overflow-y-auto bg-gray-50">
        <!-- Top Notification Banner: KYC Alert -->
        <div
          v-if="showKycBanner"
          class="bg-amber-50 border-b border-amber-200 px-6 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900 transition-all"
        >
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping shrink-0"></span>
            <p class="text-xs sm:text-sm font-semibold">
              You need to update your KYC before investing in a Farm.
            </p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <button
              @click="currentSidebarView = 'profile'"
              class="px-3.5 py-1.5 bg-[#F2CB00] hover:bg-amber-400 text-black font-bold text-xs rounded-full shadow-sm transition-all cursor-pointer"
            >
              Update KYC
            </button>
            <button
              @click="showKycBanner = false"
              class="text-amber-700 hover:text-amber-900 text-lg leading-none cursor-pointer p-1"
              title="Dismiss"
            >
              &times;
            </button>
          </div>
        </div>

        <!-- VIEW 1: FARMS & MARKETPLACE -->
        <div v-if="currentSidebarView === 'farms'" class="pb-20">
          <!-- Top Hero Banner / Investor Welcome -->
          <section class="relative bg-[#051108] text-white overflow-hidden pt-10 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#129C48]/30 w-full">
        <!-- Ambient decorative background graphic -->
        <div class="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/images/FARMGATE%20PATTERN%20_GREEN.png')] bg-cover bg-center"></div>
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#129C48]/30 rounded-full blur-[130px] pointer-events-none"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-[#F2CB00]/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div class="relative z-10 max-w-[1440px] mx-auto">
          <!-- Top Breadcrumb & User Identity Row -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#129C48]/20 border border-[#129C48]/40 text-[#F2CB00] text-xs font-bold uppercase tracking-widest mb-3">
                <span class="w-2 h-2 rounded-full bg-[#F2CB00] animate-pulse"></span>
                Investor Funding Portal
              </div>
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Livvic'] tracking-tight">
                Welcome back, <span class="text-[#F2CB00]">{{ userName }}</span>
              </h1>
              <p class="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl font-light">
                Manage your active farm investments, track live crop cultivation progress, and discover open high-yield agricultural opportunities.
              </p>
            </div>
          </div>

          <!-- A. Portfolio KPI Summary Bar -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            <!-- Card 1: Total Invested Capital -->
            <div class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs uppercase font-bold tracking-wider text-gray-300">Total Invested Capital</span>
                <span class="w-8 h-8 rounded-lg bg-[#129C48]/30 flex items-center justify-center text-[#F2CB00]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white font-['Livvic']">GHS 38,000.00</div>
              <div class="mt-2 flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                <span>+40 Units Invested</span>
                <span class="text-white/40 font-normal">across 3 cycles</span>
              </div>
            </div>

            <!-- Card 2: Active Farm Investments -->
            <div class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs uppercase font-bold tracking-wider text-gray-300">Active Farm Investments</span>
                <span class="w-8 h-8 rounded-lg bg-[#129C48]/30 flex items-center justify-center text-[#F2CB00]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </span>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-[#F2CB00] font-['Livvic']">3 Active Farms</div>
              <div class="mt-2 flex items-center gap-1.5 text-xs text-gray-300">
                <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>In Vegetative & Harvest Stage</span>
              </div>
            </div>

            <!-- Card 3: Expected Return (ROI) -->
            <div class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs uppercase font-bold tracking-wider text-gray-300">Estimated Return (ROI)</span>
                <span class="w-8 h-8 rounded-lg bg-[#129C48]/30 flex items-center justify-center text-[#F2CB00]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-white font-['Livvic']">14.5% – 18.2%</div>
              <div class="mt-2 text-xs text-green-400 font-semibold">
                Estimated Payout: GHS 44,270.00
              </div>
            </div>

            <!-- Card 4: Next Maturity & Payout Window -->
            <div class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs uppercase font-bold tracking-wider text-gray-300">Next Cycle Payout</span>
                <span class="w-8 h-8 rounded-lg bg-[#129C48]/30 flex items-center justify-center text-[#F2CB00]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              <div class="text-2xl sm:text-3xl font-extrabold text-[#F2CB00] font-['Livvic']">Dec 15, 2026</div>
              <div class="mt-2 text-xs text-gray-300">
                Ahafo Commercial Maize Outgrower
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- B. Main Navigation Tabs & Category Filters -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div class="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <!-- Primary Navigation Tabs -->
          <div class="flex flex-wrap items-center gap-2 bg-gray-100/80 p-1.5 rounded-2xl">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id; selectedCategory = 'all'"
              class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2"
              :class="
                activeTab === tab.id
                  ? 'bg-[#129C48] text-white shadow-md shadow-green-600/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
              "
            >
              <span>{{ tab.label }}</span>
              <span
                class="px-2 py-0.5 rounded-full text-xs font-extrabold"
                :class="
                  activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-700'
                "
              >
                {{ tab.count }}
              </span>
            </button>
          </div>

          <!-- Category Pills Filter (only shown in Explore / Available Opportunities) -->
          <div v-if="activeTab === 'explore'" class="flex flex-wrap items-center gap-2">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectedCategory = cat.id"
              class="px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border shadow-sm cursor-pointer"
              :style="
                selectedCategory === cat.id
                  ? { backgroundColor: cat.color, borderColor: cat.color, color: '#ffffff' }
                  : {}
              "
              :class="
                selectedCategory === cat.id
                  ? 'transform scale-105 shadow-md'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              "
            >
              {{ cat.label }}
            </button>
          </div>
        </div>
      </section>

      <!-- C. Farm Cycle Cards Grid (Grow For Me Blueprint Structure) -->
      <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <!-- Section Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold font-['Livvic'] text-gray-900">
              {{ currentTabTitle }}
            </h2>
            <p class="text-sm sm:text-base text-gray-500 mt-1">
              {{ currentTabDescription }}
            </p>
          </div>
          <div class="text-xs font-bold text-gray-400  tracking-wider">
            Showing {{ filteredCards.length }} Farm Cycles
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredCards.length === 0"
          class="bg-white rounded-3xl border border-gray-200 p-12 text-center max-w-xl mx-auto my-12 shadow-sm"
        >
          <div class="w-16 h-16 rounded-full bg-green-50 text-[#129C48] flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">No Farm Cycles Found</h3>
          <p class="text-sm text-gray-500 mb-6">
            There are currently no cycles matching your selected filter. Try switching tabs or selecting "All Categories".
          </p>
          <button
            @click="resetFilters"
            class="px-6 py-2.5 rounded-full bg-[#129C48] text-white font-bold text-sm hover:bg-[#0e7d39] transition-colors"
          >
            Reset Filters
          </button>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="farm in filteredCards"
            :key="farm.id"
            class="group bg-white rounded-[2rem] border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-1.5"
          >
            <!-- Card Image Header -->
            <div class="relative h-56 w-full overflow-hidden bg-gray-100">
              <img
                :src="farm.image"
                :alt="farm.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <!-- Category Badge -->
              <div class="absolute top-4 left-4 z-10">
                <span class="px-3.5 py-1.5 rounded-full bg-[#051108]/85 backdrop-blur-md text-[#F2CB00] text-xs font-bold  tracking-wider border border-white/10 shadow-lg">
                  {{ farm.categoryLabel }}
                </span>
              </div>

              <!-- Status Pill -->
              <div class="absolute top-4 right-4 z-10">
                <span
                  class="rounded-full px-3 py-1 text-xs font-bold tracking-wide shadow-sm"
                  :class="
                    farm.status === 'Open' || farm.status === 'Active'
                      ? 'bg-[#F2CB00] text-black'
                      : 'bg-[#E53E3E] text-white border border-red-500/20'
                  "
                >
                  {{ farm.status === 'Open' || farm.status === 'Active' ? 'Open' : 'Closed' }}
                </span>
              </div>

              <!-- Location Overlay Banner at bottom of image -->
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-8 text-white flex items-center justify-between">
                <span class="text-xs font-semibold flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#F2CB00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ farm.location }}
                </span>
                <span class="text-xs text-[#F2CB00] font-bold">{{ farm.cycleDuration }}</span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <!-- Title & Variety / Botanical Subtitle -->
                <div class="flex items-baseline justify-between gap-4 mb-3">
                  <h3 class="font-['Livvic'] text-xl font-bold text-gray-900 group-hover:text-[#129C48] transition-colors duration-300 flex flex-wrap items-baseline gap-1.5">
                    <span>{{ farm.title }}</span>
                    <span
                      v-if="farm.variety"
                      class="font-['Montserrat'] text-xs font-semibold text-gray-400 group-hover:text-gray-500 transition-colors"
                    >
                      ({{ farm.variety }})
                    </span>
                  </h3>
                </div>

                <hr class="my-4 border-gray-100" />

                <!-- Row 1: COST PER UNIT & EXPECTED ROS -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-left">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                      Cost Per Unit
                    </span>
                    <span class="text-base sm:text-lg font-extrabold text-gray-900 font-['Livvic'] mt-0.5 block">
                      {{ farm.costPerUnit }}
                    </span>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-[11px] font-bold tracking-wider block"
                      :style="{ color: getCategoryColor(farm.category) }"
                    >
                      Est. ROS
                    </span>
                    <span
                      class="text-base sm:text-lg font-extrabold font-['Livvic'] mt-0.5 block"
                      :style="{ color: getCategoryColor(farm.category) }"
                    >
                      {{ farm.expectedRos }}
                    </span>
                  </div>
                </div>

                <!-- Row 2: TRADING START & TRADING END DATES -->
                <div class="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div class="text-left">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                      Trading Start Date
                    </span>
                    <span class="text-xs sm:text-sm font-bold text-gray-700 mt-0.5 block">
                      {{ farm.startDate }}
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                      Trading End Date
                    </span>
                    <span class="text-xs sm:text-sm font-bold text-gray-700 mt-0.5 block">
                      {{ farm.endDate }}
                    </span>
                  </div>
                </div>

                <!-- Clean Status / Funding Progress Bar -->
                <div class="mt-4 pt-2">
                  <div class="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span class="text-gray-500">
                      {{ farm.status === 'Active' ? 'Cultivation Stage: ' + (farm.currentStage || 'Active') : 'Funding Progress' }}
                    </span>
                    <span :style="{ color: getCategoryColor(farm.category) }">{{ farm.progressPercentage || 65 }}%</span>
                  </div>
                  <div class="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      class="h-full rounded-full transition-all duration-1000"
                      :style="{
                        width: `${farm.progressPercentage || 65}%`,
                        backgroundColor: farm.status === 'Active' ? getCategoryColor(farm.category) : undefined
                      }"
                      :class="
                        farm.status !== 'Active'
                          ? 'bg-gradient-to-r from-amber-500 to-[#F2CB00]'
                          : ''
                      "
                    ></div>
                  </div>
                </div>
              </div>

              <!-- Action Buttons Row Matching Service Model -->
              <div class="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                <div v-if="farm.status !== 'Closed'" class="relative flex-1 group/pulse">
                  <!-- Pulsating Ripple Effect -->
                  <div
                    class="absolute inset-0 z-0 w-full h-full rounded-full pointer-events-none animate-solid-pulse"
                    :style="{ backgroundColor: getCategoryColor(farm.category) }"
                  ></div>
                  <button
                    @click="handleAction(farm)"
                    class="relative z-10 w-full py-3 px-5 rounded-full font-bold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer text-white hover:opacity-90 active:scale-95"
                    :style="{ backgroundColor: getCategoryColor(farm.category) }"
                  >
                    <span>{{ farm.status === 'Active' ? 'Fund More Units' : 'Invest now' }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-hover/pulse:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <button
                  v-else
                  disabled
                  class="flex-1 py-3 px-5 rounded-full font-bold text-sm bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>Closed</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </button>

                <button
                  @click="handleDetails(farm)"
                  class="py-3 px-4 rounded-full border border-gray-200 text-gray-700 font-bold text-xs hover:border-[#129C48] hover:text-[#129C48] transition-colors shrink-0"
                >
                  Learn...
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
        </div>

        <!-- VIEW 2: FINANCES / WALLET -->
        <div v-else-if="currentSidebarView === 'finances'" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div class="mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold font-['Livvic'] text-gray-900">Wallet & Investment Finances</h2>
            <p class="text-sm text-gray-500 mt-1">Review your capital balance, escrow yields, and historical payout schedules.</p>
          </div>

        </div>

        <!-- VIEW 3: NOTIFICATIONS -->
        <div v-else-if="currentSidebarView === 'notifications'" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div class="mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold font-['Livvic'] text-gray-900">Portal Notifications</h2>
            <p class="text-sm text-gray-500 mt-1">Stay updated on your farm cycles, harvest schedules, and KYC compliance.</p>
          </div>

          <div class="space-y-4 max-w-3xl">
            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">!</div>
              <div class="flex-1">
                <p class="text-sm font-bold text-amber-900">Action Required: Complete KYC Verification</p>
                <p class="text-xs text-amber-800 mt-1">Please verify your identity and tax identification document before sponsoring new cycles.</p>
                <button @click="currentSidebarView = 'profile'" class="mt-3 text-xs font-bold bg-[#F2CB00] text-black px-4 py-1.5 rounded-full">
                  Update KYC Profile
                </button>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-green-100 text-[#129C48] flex items-center justify-center font-bold shrink-0">🌱</div>
              <div>
                <p class="text-sm font-bold text-gray-900">Maize Cycle Entered Vegetative Stage</p>
                <p class="text-xs text-gray-500 mt-1">Ahafo Commercial Maize Farm 2026 has reached 45% cultivation progress.</p>
                <span class="text-[10px] text-gray-400 mt-2 block">2 days ago</span>
              </div>
            </div>
          </div>
        </div>

        <!-- VIEW 4: PROFILE / KYC -->
        <div v-else-if="currentSidebarView === 'profile'" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div class="mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold font-['Livvic'] text-gray-900">Investor Profile & KYC Verification</h2>
            <p class="text-sm text-gray-500 mt-1">Manage your account credentials, compliance verification, and banking details.</p>
          </div>

        </div>
      </main>
    </div>

    <!-- Modal for Sponsoring / Funding -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="activeModalFarm"
        class="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      >
        <div class="bg-white rounded-[2rem] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#129C48] via-[#F2CB00] to-[#129C48]"></div>
          <button
            @click="activeModalFarm = null"
            class="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex items-center gap-3 mb-4">
            <span class="px-3 py-1 rounded-full bg-green-50 text-[#129C48] text-xs font-bold uppercase tracking-wider">
              Sponsor Farm Cycle
            </span>
          </div>

          <h3 class="text-2xl font-extrabold font-['Livvic'] text-gray-900">
            {{ activeModalFarm.title }}
          </h3>
          <p class="text-sm text-gray-500 mb-6">
            {{ activeModalFarm.botanicalName }} • {{ activeModalFarm.location }}
          </p>

          <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 space-y-3 mb-6">
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 font-medium">Cost per Unit:</span>
              <span class="font-bold text-gray-900">{{ activeModalFarm.costPerUnit }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 font-medium">Expected Return (ROS):</span>
              <span
                class="font-bold"
                :style="{ color: getCategoryColor(activeModalFarm?.category) }"
              >
                {{ activeModalFarm.expectedRos }}
              </span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 font-medium">Trading Window:</span>
              <span class="font-bold text-gray-700">{{ activeModalFarm.startDate }} — {{ activeModalFarm.endDate }}</span>
            </div>
          </div>

          <!-- Unit Selector -->
          <div class="mb-6">
            <label class="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
              Select Number of Investment Units
            </label>
            <div class="flex items-center gap-4">
              <button
                @click="sponsorUnits = Math.max(1, sponsorUnits - 1)"
                class="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center text-lg font-bold hover:bg-gray-100"
              >
                -
              </button>
              <input
                v-model.number="sponsorUnits"
                type="number"
                min="1"
                class="flex-1 text-center font-bold text-xl py-2 rounded-xl border border-gray-300 focus:ring-2 outline-none"
                :style="{ borderColor: getCategoryColor(activeModalFarm?.category) }"
              />
              <button
                @click="sponsorUnits++"
                class="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center text-lg font-bold hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <!-- Proceed Button -->
          <div class="relative w-full group/pulse">
            <!-- Pulsating Ripple Effect -->
            <div
              class="absolute inset-0 z-0 w-full h-full rounded-full pointer-events-none animate-solid-pulse"
              :style="{ backgroundColor: getCategoryColor(activeModalFarm?.category) }"
            ></div>
            <button
              @click="confirmSponsorship(activeModalFarm)"
              class="relative z-10 w-full py-4 rounded-full text-white font-bold text-base hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              :style="{ backgroundColor: getCategoryColor(activeModalFarm?.category) }"
            >
              <span>Proceed to Investment Schedule</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300 group-hover/pulse:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import DashboardTransition from "@/components/DashboardTransition.vue";
import logoDark from "@/assets/img/FARMGATE BLACK LOGO-49.png";

// Images
import maizeImg from "@/assets/img/maize.jpg";
import cassavaImg from "@/assets/img/cassava1.jpg";
import pepperImg from "@/assets/img/pepper-farm.jpg";
import onionImg from "@/assets/img/onion.jpg";
import riceImg from "@/assets/img/rice.jpg";
import yamImg from "@/assets/img/yam1.webp";
import okraImg from "@/assets/img/okra1.jpg";
import tomatoImg from "@/assets/img/tomato.jpg";
import soybeanImg from "@/assets/img/farm-crops.jpg";
import poultryImg from "@/assets/img/farm-pic4.webp";
import cattleImg from "@/assets/img/farm-tractor2.webp";
import catfishImg from "@/assets/img/catfish1.png";
import tilapiaImg from "@/assets/img/tilapia1.avif";

// 1. App Shell Sidebar & UI state
const currentSidebarView = ref("farms"); // 'farms' | 'marketplace' | 'finances' | 'notifications' | 'profile'
const showKycBanner = ref(true);
const isMobileSidebarOpen = ref(false);

// Interstitial Loading Transition state
const showTransition = ref(true);
const userName = ref("Valued Sponsor");

const handleSignOut = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  window.location.href = "/login";
};

onMounted(() => {
  // Read user identity if available
  const storedEmail = localStorage.getItem("userEmail");
  if (storedEmail) {
    const handle = storedEmail.split("@")[0];
    userName.value = handle.charAt(0).toUpperCase() + handle.slice(1);
  }

  // Dismiss loader after 2200ms
  setTimeout(() => {
    showTransition.value = false;
  }, 2200);
});

// 2. Navigation Tabs
const activeTab = ref("active");
const selectedCategory = ref("all");

const tabs = ref([
  { id: "active", label: "My Investments", count: 3 },
  { id: "explore", label: "Open Farm Cycles", count: 13 },
  { id: "completed", label: "Completed Cycles", count: 2 },
]);

const categories = ref([
  { id: "all", label: "All Opportunities", color: "#129C48" },
  { id: "crop", label: "Crop", color: "#129C48" },
  { id: "livestock", label: "Livestock", color: "#a15c1b" },
  { id: "fishery", label: "Fishery", color: "#058fc8" },
]);

const getCategoryColor = (category) => {
  switch (category) {
    case "livestock":
      return "#a15c1b";
    case "fishery":
    case "fishFarming":
      return "#058fc8";
    case "crop":
    default:
      return "#129C48";
  }
};

// 3. Farm Cycles Blueprint Data
const farmCycles = ref([
  // Active Sponsorships
  {
    id: 1,
    tab: "active",
    category: "crop",
    categoryLabel: "Crop",
    status: "Active",
    title: "Maize",
    variety: "Obaatanpa",
    botanicalName: "Zea mays",
    costPerUnit: "GHS 950.00 / Unit",
    expectedRos: "14.5% – 18.2%",
    startDate: "01st Jun 2026",
    endDate: "15th Dec 2026",
    investmentWindow: "May 1 – May 31, 2026",
    location: "Ahafo Region, Ghana",
    cycleDuration: "6 Month Cycle",
    currentStage: "Vegetative Growth",
    progressPercentage: 75,
    image: maizeImg,
  },
  {
    id: 2,
    tab: "active",
    category: "crop",
    categoryLabel: "Crop",
    status: "Active",
    title: "Cassava",
    variety: "Bankye Hemaa",
    botanicalName: "Manihot esculenta",
    costPerUnit: "GHS 850.00 / Unit",
    expectedRos: "15.0% – 19.5%",
    startDate: "15th May 2026",
    endDate: "15th Feb 2027",
    investmentWindow: "Apr 1 – Apr 30, 2026",
    location: "Bono Region, Ghana",
    cycleDuration: "9 Month Cycle",
    currentStage: "Tuber Formation",
    progressPercentage: 60,
    image: cassavaImg,
  },
  {
    id: 3,
    tab: "active",
    category: "crop",
    categoryLabel: "Crop",
    status: "Active",
    title: "Pepper",
    variety: "Scotch Bonnet",
    botanicalName: "Capsicum frutescens",
    costPerUnit: "GHS 1,200.00 / Unit",
    expectedRos: "16.0% – 21.0%",
    startDate: "01st Jun 2026",
    endDate: "30th Nov 2026",
    investmentWindow: "May 1 – May 25, 2026",
    location: "Eastern Region, Ghana",
    cycleDuration: "5 Month Cycle",
    currentStage: "Flowering & Fruiting",
    progressPercentage: 85,
    image: pepperImg,
  },

  // Open Farm Opportunities (Explore - Matching ServiceModel Available Investment Opportunities)
  {
    id: 4,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Open",
    title: "Okra",
    variety: "Lady Finger",
    botanicalName: "Abelmoschus esculentus",
    costPerUnit: "GHS 950.00 / Unit",
    expectedRos: "13% - 17%",
    startDate: "June 1, 2026",
    endDate: "June 30, 2026",
    investmentWindow: "June 1 – June 30, 2026",
    location: "Ahafo Region, Ghana",
    cycleDuration: "4 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 64,
    image: okraImg,
  },
  {
    id: 5,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Closed",
    title: "Onion",
    variety: "Bawku Red",
    botanicalName: "Allium cepa",
    costPerUnit: "GHS 720.00 / Unit",
    expectedRos: "12% - 16%",
    startDate: "Jan 10, 2026",
    endDate: "Feb 10, 2026",
    investmentWindow: "Jan 10 – Feb 10, 2026",
    location: "Eastern Region, Ghana",
    cycleDuration: "6 Month Cycle",
    currentStage: "Cycle Closed",
    progressPercentage: 100,
    image: onionImg,
  },
  {
    id: 6,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Open",
    title: "Yam",
    variety: "Pona",
    botanicalName: "Dioscorea rotundata",
    costPerUnit: "GHS 1,100.00 / Unit",
    expectedRos: "15% - 19%",
    startDate: "June 5, 2026",
    endDate: "July 5, 2026",
    investmentWindow: "June 5 – July 5, 2026",
    location: "Volta Region, Ghana",
    cycleDuration: "6 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 58,
    image: yamImg,
  },
  {
    id: 7,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Open",
    title: "Maize",
    variety: "Obaatanpa",
    botanicalName: "Zea mays",
    costPerUnit: "GHS 680.00 / Unit",
    expectedRos: "12% - 16%",
    startDate: "June 1, 2026",
    endDate: "June 30, 2026",
    investmentWindow: "June 1 – June 30, 2026",
    location: "Brong-Ahafo Region, Ghana",
    cycleDuration: "4 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 72,
    image: maizeImg,
  },
  {
    id: 10,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Open",
    title: "Cassava",
    variety: "Bankye Hemaa",
    botanicalName: "Manihot esculenta",
    costPerUnit: "GHS 540.00 / Unit",
    expectedRos: "14% - 18%",
    startDate: "July 1, 2026",
    endDate: "July 31, 2026",
    investmentWindow: "July 1 – July 31, 2026",
    location: "Central Region, Ghana",
    cycleDuration: "9 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 45,
    image: cassavaImg,
  },
  {
    id: 11,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Closed",
    title: "Pepper",
    variety: "Scotch Bonnet",
    botanicalName: "Capsicum frutescens",
    costPerUnit: "GHS 810.00 / Unit",
    expectedRos: "11% - 15%",
    startDate: "Feb 1, 2026",
    endDate: "Feb 28, 2026",
    investmentWindow: "Feb 1 – Feb 28, 2026",
    location: "Upper East Region, Ghana",
    cycleDuration: "3 Month Cycle",
    currentStage: "Cycle Closed",
    progressPercentage: 100,
    image: pepperImg,
  },
  {
    id: 12,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Open",
    title: "Rice",
    variety: "AGRA Aromatic",
    botanicalName: "Oryza sativa",
    costPerUnit: "GHS 870.00 / Unit",
    expectedRos: "13% - 17%",
    startDate: "July 1, 2026",
    endDate: "July 31, 2026",
    investmentWindow: "July 1 – July 31, 2026",
    location: "Northern Region, Ghana",
    cycleDuration: "5 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 68,
    image: riceImg,
  },
  {
    id: 13,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Open",
    title: "Tomato",
    variety: "Pectomech",
    botanicalName: "Solanum lycopersicum",
    costPerUnit: "GHS 640.00 / Unit",
    expectedRos: "12% - 15%",
    startDate: "Aug 1, 2026",
    endDate: "Aug 31, 2026",
    investmentWindow: "Aug 1 – Aug 31, 2026",
    location: "Greater Accra Region, Ghana",
    cycleDuration: "3 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 35,
    image: tomatoImg,
  },
  {
    id: 14,
    tab: "explore",
    category: "crop",
    categoryLabel: "Crop",
    status: "Open",
    title: "Soybean",
    variety: "Jenguma",
    botanicalName: "Glycine max",
    costPerUnit: "GHS 565.00 / Unit",
    expectedRos: "10% - 14%",
    startDate: "June 20, 2026",
    endDate: "July 20, 2026",
    investmentWindow: "June 20 – July 20, 2026",
    location: "Upper West Region, Ghana",
    cycleDuration: "4 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 51,
    image: soybeanImg,
  },
  {
    id: 15,
    tab: "explore",
    category: "livestock",
    categoryLabel: "Livestock",
    status: "Closed",
    title: "Poultry",
    variety: "Broiler",
    botanicalName: "Gallus gallus domesticus",
    costPerUnit: "GHS 550.00 / Unit",
    expectedRos: "11% - 15%",
    startDate: "Feb 1, 2026",
    endDate: "March 28, 2026",
    investmentWindow: "Feb 1 – Feb 28, 2026",
    location: "Kasoa, Central Region",
    cycleDuration: "8 Week Cycle",
    currentStage: "Cycle Closed",
    progressPercentage: 100,
    image: poultryImg,
  },
  {
    id: 16,
    tab: "explore",
    category: "livestock",
    categoryLabel: "Livestock",
    status: "Open",
    title: "Cattle",
    variety: "Sokoto Gudali",
    botanicalName: "Bos taurus indicus",
    costPerUnit: "GHS 2,400.00 / Unit",
    expectedRos: "16% - 21%",
    startDate: "June 10, 2026",
    endDate: "Dec 10, 2026",
    investmentWindow: "June 10 – July 15, 2026",
    location: "Afram Plains, Eastern Region",
    cycleDuration: "6 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 42,
    image: cattleImg,
  },
  {
    id: 17,
    tab: "explore",
    category: "fishery",
    categoryLabel: "Fishery",
    status: "Closed",
    title: "Catfish",
    variety: "Clarias Gariepinus",
    botanicalName: "Clarias gariepinus",
    costPerUnit: "GHS 680.00 / Unit",
    expectedRos: "14% - 18%",
    startDate: "Mar 1, 2026",
    endDate: "Aug 1, 2026",
    investmentWindow: "Mar 1 – Mar 31, 2026",
    location: "Aveyime, Volta Region",
    cycleDuration: "5 Month Cycle",
    currentStage: "Cycle Closed",
    progressPercentage: 100,
    image: catfishImg,
  },
  {
    id: 18,
    tab: "explore",
    category: "fishery",
    categoryLabel: "Fishery",
    status: "Open",
    title: "Tilapia",
    variety: "Nile Tilapia",
    botanicalName: "Oreochromis niloticus",
    costPerUnit: "GHS 1,850.00 / Unit",
    expectedRos: "15% - 20%",
    startDate: "June 1, 2026",
    endDate: "Dec 1, 2026",
    investmentWindow: "June 1 – June 30, 2026",
    location: "Akuse, Volta Region",
    cycleDuration: "6 Month Cycle",
    currentStage: "Open for Funding",
    progressPercentage: 55,
    image: tilapiaImg,
  },

  // Completed Cycles
  {
    id: 8,
    tab: "completed",
    category: "crop",
    categoryLabel: "Crop",
    status: "Completed",
    title: "Maize",
    variety: "Obaatanpa (2025 Season)",
    botanicalName: "Zea mays",
    costPerUnit: "GHS 850.00 / Unit",
    expectedRos: "17.4% Earned ROI",
    startDate: "01st Apr 2025",
    endDate: "30th Sep 2025",
    location: "Ahafo Region, Ghana",
    cycleDuration: "6 Month Cycle",
    currentStage: "Fully Paid Out",
    progressPercentage: 100,
    image: maizeImg,
  },
  {
    id: 9,
    tab: "completed",
    category: "crop",
    categoryLabel: "Crop",
    status: "Completed",
    title: "Cassava",
    variety: "Bankye Hemaa (2025 Season)",
    botanicalName: "Manihot esculenta",
    costPerUnit: "GHS 750.00 / Unit",
    expectedRos: "18.1% Earned ROI",
    startDate: "01st Feb 2025",
    endDate: "01st Nov 2025",
    location: "Bono Region, Ghana",
    cycleDuration: "9 Month Cycle",
    currentStage: "Fully Paid Out",
    progressPercentage: 100,
    image: cassavaImg,
  },
]);

// Computed
const currentTabTitle = computed(() => {
  if (activeTab.value === "active") return "My Active Investments";
  if (activeTab.value === "explore") return "Explore Open Farm Opportunities";
  return "Completed Cycles & Historical Payouts";
});

const currentTabDescription = computed(() => {
  if (activeTab.value === "active") {
    return "Track live agricultural progress, crop growth stages, and expected payout schedules for your active farm investments.";
  }
  if (activeTab.value === "explore") {
    return "Browse insured farm cycles currently open for funding. Select an opportunity to review unit costs and projected ROI.";
  }
  return "Review successfully harvested farm cycles and verified returns paid out to your investor account.";
});

const filteredCards = computed(() => {
  return farmCycles.value.filter((farm) => {
    const matchesTab = farm.tab === activeTab.value;
    const matchesCat =
      activeTab.value !== "explore" ||
      selectedCategory.value === "all" ||
      farm.category === selectedCategory.value;
    return matchesTab && matchesCat;
  });
});

const resetFilters = () => {
  selectedCategory.value = "all";
};

// Modal Actions
const activeModalFarm = ref(null);
const sponsorUnits = ref(5);

const handleAction = (farm) => {
  const opportunityName = farm.variety
    ? `${farm.title} (${farm.variety})`
    : farm.title;
  const params = new URLSearchParams({
    opportunity: opportunityName,
    category: farm.categoryLabel || farm.category || '',
  });
  window.location.href = `/schedule-call?${params.toString()}`;
};

const handleDetails = (farm) => {
  window.location.href = `/opportunity-detail?opportunity=${encodeURIComponent(
    farm.title
  )}&ref=dashboard`;
};

const confirmSponsorship = (farm) => {
  const params = new URLSearchParams({
    opportunity: farm.title,
    units: sponsorUnits.value,
  });
  window.location.href = `/schedule-call?${params.toString()}`;
};
</script>

<style scoped>
@keyframes pulseAnimateSolid {
  0% {
    transform: scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.05, 1.35);
    opacity: 0;
  }
}

.animate-solid-pulse {
  animation: pulseAnimateSolid 1.4s ease-out infinite;
}
</style>
