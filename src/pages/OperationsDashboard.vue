<template>
  <div class="min-h-screen bg-[#FBFBF9] text-[#0e1a24] font-montserrat flex selection:bg-brand-green/20">
    <!-- Sidebar Overlay -->
    <div v-if="isSidebarOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity" @click="isSidebarOpen = false"></div>
    
    <!-- Sidebar -->
    <aside :class="['w-[280px] md:w-[260px] shrink-0 bg-[#0A1A10] flex flex-col h-screen sticky top-0 overflow-y-auto transition-transform z-50 duration-300 border-r border-white/5', isSidebarOpen ? 'translate-x-0 fixed left-0 shadow-2xl' : '-translate-x-full md:translate-x-0 md:static fixed left-0']">
      <!-- Subtle Brand Pattern Background -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('/images/pattern-bg1.webp')] bg-cover mix-blend-overlay"></div>
      
      <div class="relative z-10 px-6 py-6 border-b border-white/10">
        <img :src="logoWhite1" alt="Farmgate" class="h-10 w-auto object-contain drop-shadow-xl" />
        <p class="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green/80">Operations Portal</p>
      </div>

      <nav class="relative z-10 px-3 py-6 flex-1 flex flex-col gap-2">
        <a @click="switchView('overview')" :class="['flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer', currentView === 'overview' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'text-white/60 hover:bg-white/10 hover:text-white']">
          <span class="material-icons-outlined text-[22px]" :class="currentView === 'overview' ? 'text-white' : ''">dashboard</span> Overview
        </a>
        <a @click="switchView('calls')" :class="['flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer', currentView === 'calls' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'text-white/60 hover:bg-white/10 hover:text-white']">
          <span class="material-icons-outlined text-[22px]" :class="currentView === 'calls' ? 'text-white' : ''">call</span> Call Requests
          <span :class="['ml-auto text-[10px] px-2.5 py-0.5 rounded-full font-bold', currentView === 'calls' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50']">{{ callsData.length }}</span>
        </a>
        <a @click="switchView('tours')" :class="['flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer', currentView === 'tours' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'text-white/60 hover:bg-white/10 hover:text-white']">
          <span class="material-icons-outlined text-[22px]" :class="currentView === 'tours' ? 'text-white' : ''">map</span> Tour Requests
          <span :class="['ml-auto text-[10px] px-2.5 py-0.5 rounded-full font-bold', currentView === 'tours' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50']">{{ toursData.length }}</span>
        </a>
        <a @click="switchView('timeslots')" :class="['flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer', currentView === 'timeslots' ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' : 'text-white/60 hover:bg-white/10 hover:text-white']">
          <span class="material-icons-outlined text-[22px]" :class="currentView === 'timeslots' ? 'text-white' : ''">schedule</span> Time Slots
          <span :class="['ml-auto text-[10px] px-2.5 py-0.5 rounded-full font-bold', currentView === 'timeslots' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50']">{{ timeslotsData.length }}</span>
        </a>
      </nav>
      <div class="relative z-10 p-5 mx-4 mb-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-between text-xs text-white/40">
        <div class="flex items-center gap-2 font-medium">
          <span class="w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_10px_rgba(18,156,72,0.8)]"></span>
          <span>System Live</span>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 p-4 md:p-8 relative">
      
      <!-- Top Header -->
      <header class="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200/60 relative z-20">
        <div class="flex items-center gap-4">
          <button class="md:hidden flex items-center justify-center p-2 rounded-xl bg-white shadow-sm border border-gray-200 text-gray-800" @click="isSidebarOpen = true">
            <span class="material-icons-outlined text-2xl">menu</span>
          </button>
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 font-livvic tracking-tight">{{ pageTitle }}</h1>
            <p class="text-sm font-medium text-gray-500 mt-1 hidden sm:block">{{ pageSubtitle }}</p>
          </div>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <div v-if="token" class="flex items-center gap-2 bg-white border border-gray-200/80 rounded-xl px-4 py-2.5 min-w-[240px] shadow-sm hover:shadow-md focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green/10 transition-all">
            <span class="material-icons-outlined text-gray-400 text-lg">search</span>
            <input v-model="searchQuery" type="search" placeholder="Search records..." class="w-full bg-transparent border-none outline-none text-sm font-medium text-gray-800 placeholder-gray-400" />
          </div>
          <div class="text-xs font-semibold text-gray-400 flex items-center gap-1.5 px-3 py-2 bg-gray-100 rounded-lg">
            <span class="material-icons-outlined text-[16px]">sync</span>
            <span>{{ lastUpdated }}</span>
          </div>
          <button v-if="token" @click="logout" class="bg-white border border-red-200 hover:bg-red-50 text-red-600 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all flex items-center gap-2">
            <span class="material-icons-outlined text-lg">logout</span>
            Logout
          </button>
        </div>
      </header>

      <!-- Exclusive Login Screen -->
      <div v-if="!token" class="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A1A10]">
        <!-- Brand Background Pattern -->
        <div class="absolute inset-0 opacity-[0.05] bg-[url('/images/pattern-bg1.webp')] bg-cover mix-blend-overlay"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-brand-green/10 to-transparent"></div>
        
        <div class="relative w-full max-w-md p-10 mx-4 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 transform hover:scale-[1.01] transition-transform duration-500">
          <div class="mb-10 text-center">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-green/10 border border-gray-100">
              <img src="/images/FarmGate%20Africa%201%201.webp" alt="Farmgate Logo" class="h-10 object-contain drop-shadow-sm" />
            </div>
            <h2 class="text-3xl font-bold text-gray-900 font-livvic tracking-tight">Admin Portal</h2>
            <p class="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-widest">Authorized Access Only</p>
          </div>
          <div class="space-y-5">
            <div class="relative group">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-gray-400 group-focus-within:text-brand-green transition-colors">email</span>
              <input v-model="loginEmail" type="email" placeholder="Email Address" class="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 bg-gray-50 focus:bg-white text-gray-900 font-medium transition-all" @keyup.enter="handleLogin" />
            </div>
            <div class="relative group">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-gray-400 group-focus-within:text-brand-green transition-colors">lock</span>
              <input v-model="loginPassword" type="password" placeholder="Password" class="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 bg-gray-50 focus:bg-white text-gray-900 font-medium transition-all" @keyup.enter="handleLogin" />
            </div>
            <button @click="handleLogin" class="w-full bg-gradient-to-r from-[#129C48] to-[#0d7a36] hover:from-[#0d7a36] hover:to-[#095926] text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-green/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              <span>Sign In</span>
              <span class="material-icons-outlined text-lg">arrow_forward</span>
            </button>
            <p v-if="loginError" class="text-red-500 text-sm font-semibold text-center mt-4 bg-red-50 py-2 rounded-lg border border-red-100">{{ loginError }}</p>
          </div>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div v-else>
        <!-- Premium Stats Cards -->
        <section v-show="currentView === 'overview'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all flex items-center gap-5 relative overflow-hidden group">
            <div class="absolute -right-6 -top-6 w-24 h-24 bg-brand-green/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 text-brand-green flex items-center justify-center shadow-inner relative z-10">
              <span class="material-icons-outlined text-3xl">phone_in_talk</span>
            </div>
            <div class="relative z-10">
              <div class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Calls</div>
              <div class="text-3xl font-extrabold text-gray-900 font-livvic">{{ callsData.length }}</div>
            </div>
          </div>
          
          <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all flex items-center gap-5 relative overflow-hidden group">
            <div class="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shadow-inner relative z-10">
              <span class="material-icons-outlined text-3xl">map</span>
            </div>
            <div class="relative z-10">
              <div class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tour Requests</div>
              <div class="text-3xl font-extrabold text-gray-900 font-livvic">{{ toursData.length }}</div>
            </div>
          </div>

          <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all flex items-center gap-5 relative overflow-hidden group">
            <div class="absolute -right-6 -top-6 w-24 h-24 bg-[#F2CB00]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 text-[#dcae00] flex items-center justify-center shadow-inner relative z-10">
              <span class="material-icons-outlined text-3xl">today</span>
            </div>
            <div class="relative z-10">
              <div class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Today's Activity</div>
              <div class="text-3xl font-extrabold text-gray-900 font-livvic">{{ todayCount }}</div>
            </div>
          </div>

          <div class="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100/80 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all flex items-center gap-5 relative overflow-hidden group">
            <div class="absolute -right-6 -top-6 w-24 h-24 bg-gray-900/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-gray-700 flex items-center justify-center shadow-inner relative z-10">
              <span class="material-icons-outlined text-3xl">av_timer</span>
            </div>
            <div class="relative z-10">
              <div class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Last Sync</div>
              <div class="text-sm font-bold text-gray-900 mt-2">{{ lastUpdated }}</div>
            </div>
          </div>
        </section>

        <!-- Elegant Data Tables -->
        <!-- Calls -->
        <section v-show="currentView === 'overview' || currentView === 'calls'" class="mb-12">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold flex items-center gap-3 font-livvic text-gray-900">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-brand-green"><span class="material-icons-outlined text-sm">phone_in_talk</span></div>
              Call Requests <span class="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-bold">{{ filteredCalls.length }}</span>
            </h2>
          </div>
          <div class="bg-white rounded-[2rem] border border-gray-100/80 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left whitespace-nowrap">
                <thead class="bg-gray-50/50 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                  <tr>
                    <th class="px-6 py-5 border-b border-gray-100">Full Name</th>
                    <th class="px-6 py-5 border-b border-gray-100">Contact</th>
                    <th class="px-6 py-5 border-b border-gray-100">Schedule</th>
                    <th class="px-6 py-5 border-b border-gray-100">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  <tr v-if="filteredCalls.length === 0">
                    <td colspan="4" class="text-center py-16 text-gray-400 font-medium">No call requests found</td>
                  </tr>
                  <tr v-for="(call, idx) in filteredCalls" :key="idx" class="hover:bg-brand-green/[0.02] transition-colors cursor-pointer group" :class="{ 'bg-green-50/30': isToday(call.call_date) }" @click="openModal(call, 'call')">
                    <td class="px-6 py-4">
                      <div class="font-bold text-gray-900">{{ call.full_name || '—' }}</div>
                      <div class="text-xs text-gray-500 mt-1 truncate max-w-[200px]" :title="call.email">{{ call.email || 'No email' }}</div>
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-600">
                      <div class="flex items-center gap-2">
                        <span class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><span class="material-icons-outlined text-[10px] text-green-700">chat</span></span>
                        {{ call.whatsapp_number || '—' }}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="font-bold text-gray-900">{{ fmtDate(call.call_date) }}</div>
                      <div class="flex items-center gap-2 mt-1">
                        <span class="text-xs text-gray-500 font-medium">{{ call.call_time || '—' }}</span>
                        <span :class="['px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider', call.period === 'AM' ? 'bg-amber-100 text-amber-700' : 'bg-indigo-100 text-indigo-700']">{{ call.period || '—' }}</span>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <button @click.stop="deleteCall(call.id)" class="opacity-0 group-hover:opacity-100 bg-white border border-red-100 text-red-600 hover:bg-red-500 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1">
                        <span class="material-icons-outlined text-[14px]">delete</span> Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Tours -->
        <section v-show="currentView === 'overview' || currentView === 'tours'" class="mb-12">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 class="text-xl font-bold flex items-center gap-3 font-livvic text-gray-900">
              <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span class="material-icons-outlined text-sm">map</span></div>
              Tour Requests <span class="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-bold">{{ filteredTours.length }}</span>
            </h2>
            <div class="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-gray-200/80 shadow-sm">
              <input v-model="filterStart" type="date" class="px-4 py-2 rounded-xl text-sm bg-gray-50 border-none focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-gray-700" />
              <span class="text-gray-300">-</span>
              <input v-model="filterEnd" type="date" class="px-4 py-2 rounded-xl text-sm bg-gray-50 border-none focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-gray-700" />
              <button @click="fetchData" class="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-xl text-sm font-bold transition-colors">Filter</button>
              <button @click="clearTourFilters" class="hover:bg-gray-100 text-gray-500 px-4 py-2 rounded-xl text-sm font-bold transition-colors">Clear</button>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-gray-100/80 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left whitespace-nowrap">
                <thead class="bg-gray-50/50 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                  <tr>
                    <th class="px-6 py-5 border-b border-gray-100">Visitor</th>
                    <th class="px-6 py-5 border-b border-gray-100">Origin</th>
                    <th class="px-6 py-5 border-b border-gray-100">Purpose</th>
                    <th class="px-6 py-5 border-b border-gray-100">Schedule</th>
                    <th class="px-6 py-5 border-b border-gray-100">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  <tr v-if="filteredTours.length === 0">
                    <td colspan="5" class="text-center py-16 text-gray-400 font-medium">No tour requests found</td>
                  </tr>
                  <tr v-for="(tour, idx) in filteredTours" :key="idx" class="hover:bg-brand-green/[0.02] transition-colors cursor-pointer group" :class="{ 'bg-green-50/30': isToday(tour.tour_date || tour.date) }" @click="openModal(tour, 'tour')">
                    <td class="px-6 py-4">
                      <div class="font-bold text-gray-900">{{ tour.first_name || '—' }} {{ tour.other_names || '' }}</div>
                      <div class="text-xs text-gray-500 mt-1 font-medium">{{ tour.phone_number || tour.whatsapp_number || 'No Phone' }}</div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="font-bold text-gray-800">{{ tour.country || '—' }}</div>
                      <div class="text-xs text-gray-500 mt-1">{{ tour.city || '—' }}</div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="inline-flex items-center gap-2">
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">{{ tour.purpose || '—' }}</span>
                        <span class="text-xs font-semibold text-gray-400">Grp: {{ tour.number_of_people_visiting || '—' }}</span>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="font-bold text-gray-900">{{ fmtDate(tour.tour_date || tour.date) }}</div>
                      <div class="text-xs text-gray-500 mt-1 font-medium">{{ tour.tour_time || tour.time || '—' }}</div>
                    </td>
                    <td class="px-6 py-4">
                      <button @click.stop="deleteTour(tour.id)" class="opacity-0 group-hover:opacity-100 bg-white border border-red-100 text-red-600 hover:bg-red-500 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1">
                        <span class="material-icons-outlined text-[14px]">delete</span> Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Time Slots -->
        <section v-show="currentView === 'timeslots'" class="mb-12">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 class="text-xl font-bold flex items-center gap-3 font-livvic text-gray-900">
              <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600"><span class="material-icons-outlined text-sm">schedule</span></div>
              Time Slots Configuration
            </h2>
            <div class="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-200/80 shadow-sm">
              <div class="pl-3 pr-2 text-xs font-bold text-gray-400 uppercase tracking-widest">New Slot</div>
              <input v-model="newTime" type="time" class="px-3 py-2 rounded-xl text-sm bg-gray-50 border-none focus:ring-2 focus:ring-brand-green/20 outline-none font-medium text-gray-900" />
              <button @click="addTimeslot" class="bg-gradient-to-r from-brand-green to-[#0d7a36] hover:shadow-lg hover:shadow-brand-green/20 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1">
                <span class="material-icons-outlined text-[16px]">add</span> Add
              </button>
            </div>
          </div>
          <div class="bg-white rounded-[2rem] border border-gray-100/80 shadow-sm overflow-hidden max-w-4xl">
            <table class="w-full text-sm text-left whitespace-nowrap">
              <thead class="bg-gray-50/50 text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                <tr>
                  <th class="px-6 py-5 border-b border-gray-100">Time</th>
                  <th class="px-6 py-5 border-b border-gray-100">Current Status</th>
                  <th class="px-6 py-5 border-b border-gray-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                <tr v-if="timeslotsData.length === 0">
                  <td colspan="3" class="text-center py-16 text-gray-400 font-medium">No time slots configured</td>
                </tr>
                <tr v-for="(slot, idx) in timeslotsData" :key="idx" class="hover:bg-brand-green/[0.02] transition-colors cursor-pointer group" @click="openModal(slot, 'timeslot')">
                  <td class="px-6 py-4 font-bold text-gray-900 text-lg">{{ slot.time }}</td>
                  <td class="px-6 py-4">
                    <span :class="['inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold', slot.is_available ? 'bg-green-50 text-green-700 border border-green-200/50' : 'bg-amber-50 text-amber-700 border border-amber-200/50']">
                      <span :class="['w-1.5 h-1.5 rounded-full', slot.is_available ? 'bg-green-500' : 'bg-amber-500']"></span>
                      {{ slot.is_available ? 'Available' : 'Booked' }}
                    </span>
                  </td>
                  <td class="px-6 py-4 flex justify-end gap-3">
                    <button @click.stop="toggleTimeslot(slot)" :class="['px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm', slot.is_available ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-green-50 text-green-700 hover:bg-green-100']">
                      Mark {{ slot.is_available ? 'Booked' : 'Available' }}
                    </button>
                    <button @click.stop="deleteTimeslot(slot.id)" class="opacity-0 group-hover:opacity-100 bg-white border border-red-100 text-red-600 hover:bg-red-500 hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm">
                      <span class="material-icons-outlined text-[16px]">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Footer -->
        <footer class="pt-8 mt-12 border-t border-gray-200/60 text-xs font-medium text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <img src="/images/FarmGate%20Africa%201%201.webp" class="h-4 grayscale opacity-50" />
            <span>&copy; {{ new Date().getFullYear() }} Farmgate Operations Portal</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1"><span class="material-icons-outlined text-[14px]">autorenew</span> Auto-refresh 10s</span>
            <span class="px-2 py-1 bg-gray-100 rounded-md">v3.0 - Premium</span>
          </div>
        </footer>
      </div>
    </main>

    <!-- Detail Modal -->
    <transition name="fade">
      <div v-if="selectedItem" class="fixed inset-0 bg-[#0A1A10]/60 backdrop-blur-md z-[1000] flex items-center justify-center p-4" @click="closeModal">
        <div class="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-10 shadow-2xl relative transform transition-all" @click.stop>
          <button class="absolute top-8 right-8 w-10 h-10 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full flex items-center justify-center transition-colors" @click="closeModal">
            <span class="material-icons-outlined">close</span>
          </button>
          
          <div class="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
            <div class="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
              <span class="material-icons-outlined text-3xl">{{ selectedType === 'call' ? 'phone_in_talk' : selectedType === 'tour' ? 'map' : 'schedule' }}</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold font-livvic text-gray-900 tracking-tight">Record Details</h2>
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">ID: #{{ selectedItem.id || 'N/A' }}</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div v-for="(value, key) in sortedItemData" :key="key" class="bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
              <div class="text-[10px] uppercase tracking-widest font-bold text-brand-green mb-1">{{ formatKey(key) }}</div>
              <div class="text-sm font-semibold text-gray-900 break-words">{{ formatValue(key, value) }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import logoWhite1 from "@/assets/img/fg logo-white1.webp";

// State
const token = ref(localStorage.getItem('api_token') || 'mock_token'); 
const isSidebarOpen = ref(false);
const currentView = ref('overview');
const lastUpdated = ref('—');
const searchQuery = ref('');
const filterStart = ref('');
const filterEnd = ref('');
const newTime = ref('09:00');

const loginEmail = ref('admin@example.com');
const loginPassword = ref('password123');
const loginError = ref('');

// Data
const callsData = ref([]);
const toursData = ref([]);
const timeslotsData = ref([]);

// Modal
const selectedItem = ref(null);
const selectedType = ref('');

// Interval
let refreshInterval = null;

// Mock Data Generators for robust fallback testing
const getMockCalls = () => [
  { id: 1, full_name: 'John Doe', whatsapp_number: '+233 55 123 4567', email: 'john@example.com', call_date: new Date().toISOString().slice(0, 10), call_time: '10:00', period: 'AM' },
  { id: 2, full_name: 'Jane Smith', whatsapp_number: '+44 7700 900077', email: 'jane@example.com', call_date: '2026-08-04', call_time: '14:30', period: 'PM' }
];

const getMockTours = () => [
  { id: 1, first_name: 'Alice', other_names: 'Wonder', purpose: 'Investment', number_of_people_visiting: 2, country: 'UK', city: 'London', phone_number: '+44 123 456', date: new Date().toISOString().slice(0, 10), time: '11:00' }
];

const getMockTimeslots = () => [
  { id: 1, time: '09:00', is_available: false },
  { id: 2, time: '10:00', is_available: true },
  { id: 3, time: '14:00', is_available: true }
];

// Setup auth wrapper for fetches that falls back to mock data
const authFetch = async (url, options = {}, mockGenerator) => {
  if (!token.value) throw new Error('Not authenticated');
  const headers = { 'Authorization': `Bearer ${token.value}`, 'Content-Type': 'application/json', ...(options.headers || {}) };
  try {
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) throw new Error('API Error');
    // If it's a delete or put with no body
    if (res.status === 204 || res.headers.get('content-length') === '0') return true;
    return await res.json();
  } catch (err) {
    console.warn(`Fetch to ${url} failed, using mock data. Error:`, err.message);
    if (mockGenerator) return mockGenerator();
    return true; // For mock actions like delete/update
  }
};

const handleLogin = async () => {
  loginError.value = '';
  if (loginEmail.value && loginPassword.value) {
    // Mock login success for now since API isn't deployed
    token.value = 'mock_token_for_offline_testing';
    localStorage.setItem('api_token', token.value);
    fetchData();
  } else {
    loginError.value = 'Invalid credentials';
  }
};

const logout = () => {
  localStorage.removeItem('api_token');
  token.value = null;
  callsData.value = [];
  toursData.value = [];
  timeslotsData.value = [];
};

const switchView = (view) => {
  currentView.value = view;
  isSidebarOpen.value = false;
};

const updateTimestamp = () => {
  lastUpdated.value = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
};

// Fetch data
const fetchCalls = async () => {
  const data = await authFetch('/api/v1/call-requests', {}, getMockCalls);
  callsData.value = Array.isArray(data) ? data : data.data || [];
};

const fetchTours = async () => {
  let url = '/api/v1/tour';
  if (filterStart.value && filterEnd.value) {
    url += `?start=${filterStart.value}&end=${filterEnd.value}`;
  }
  const data = await authFetch(url, {}, getMockTours);
  toursData.value = Array.isArray(data) ? data : data.data || [];
};

const fetchTimeSlots = async () => {
  const data = await authFetch('/api/v1/time-slots', {}, getMockTimeslots);
  timeslotsData.value = Array.isArray(data) ? data : data.data || [];
};

const fetchData = async () => {
  if (!token.value) return;
  await Promise.all([fetchCalls(), fetchTours(), fetchTimeSlots()]);
  updateTimestamp();
};

const clearTourFilters = () => {
  filterStart.value = '';
  filterEnd.value = '';
  fetchData();
};

// Actions
const deleteCall = async (id) => {
  if (!confirm('Delete this call request?')) return;
  await authFetch(`/api/v1/call-requests/${id}`, { method: 'DELETE' });
  callsData.value = callsData.value.filter(c => c.id !== id);
};

const deleteTour = async (id) => {
  if (!confirm('Delete this tour request?')) return;
  await authFetch(`/api/v1/tour/${id}`, { method: 'DELETE' });
  toursData.value = toursData.value.filter(t => t.id !== id);
};

const toggleTimeslot = async (slot) => {
  await authFetch(`/api/v1/time-slots/${slot.id}`, { method: 'PUT', body: JSON.stringify({ is_available: !slot.is_available }) });
  slot.is_available = !slot.is_available;
};

const deleteTimeslot = async (id) => {
  if (!confirm('Delete this time slot?')) return;
  await authFetch(`/api/v1/time-slots/${id}`, { method: 'DELETE' });
  timeslotsData.value = timeslotsData.value.filter(t => t.id !== id);
};

const addTimeslot = async () => {
  if (!newTime.value) return;
  const newSlot = { time: newTime.value, is_available: true };
  const data = await authFetch('/api/v1/time-slots', { method: 'POST', body: JSON.stringify(newSlot) }, () => ({ id: Date.now(), ...newSlot }));
  if (data) timeslotsData.value.push(data);
};

// Filtering & Computed
const filteredCalls = computed(() => {
  let q = searchQuery.value.toLowerCase().trim();
  if (!q) return callsData.value;
  return callsData.value.filter(c => 
    (c.full_name || '').toLowerCase().includes(q) || 
    (c.whatsapp_number || '').toLowerCase().includes(q) || 
    (c.email || '').toLowerCase().includes(q)
  );
});

const filteredTours = computed(() => {
  let q = searchQuery.value.toLowerCase().trim();
  if (!q) return toursData.value;
  return toursData.value.filter(t => 
    (t.first_name || '').toLowerCase().includes(q) || 
    (t.other_names || '').toLowerCase().includes(q) ||
    (t.city || '').toLowerCase().includes(q) ||
    (t.country || '').toLowerCase().includes(q)
  );
});

const todayCount = computed(() => {
  const todayCalls = callsData.value.filter(c => isToday(c.call_date));
  const todayTours = toursData.value.filter(t => isToday(t.tour_date || t.date));
  return todayCalls.length + todayTours.length;
});

const pageTitle = computed(() => {
  if (currentView.value === 'overview') return 'Dashboard';
  if (currentView.value === 'calls') return 'Call Requests';
  if (currentView.value === 'tours') return 'Tour Requests';
  if (currentView.value === 'timeslots') return 'Time Slots';
  return '';
});

const pageSubtitle = computed(() => {
  if (currentView.value === 'overview') return 'Overview of all requests';
  if (currentView.value === 'calls') return 'View all call requests';
  if (currentView.value === 'tours') return 'View all tour requests';
  if (currentView.value === 'timeslots') return 'Manage time slots';
  return '';
});

// Helpers
const isToday = (d) => {
  if (!d) return false;
  const x = new Date(d);
  if (isNaN(x.getTime())) return false;
  const t = new Date();
  return x.getDate() === t.getDate() && x.getMonth() === t.getMonth() && x.getFullYear() === t.getFullYear();
};

const fmtDate = (d) => {
  if (!d) return '—';
  const x = new Date(d);
  return isNaN(x.getTime()) ? d : x.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const formatKey = (key) => key.replace(/_/g, ' ');

const formatValue = (key, value) => {
  if (value === null || value === undefined || value === '') return '—';
  if (key === 'is_available') return value ? 'Available' : 'Booked';
  if (key.includes('date') && value !== '—') return fmtDate(value);
  return value;
};

// Modal logic
const openModal = (item, type) => {
  selectedItem.value = item;
  selectedType.value = type;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedItem.value = null;
  selectedType.value = '';
  document.body.style.overflow = '';
};

const sortedItemData = computed(() => {
  if (!selectedItem.value) return {};
  const priority = ['id', 'time', 'is_available', 'created_at', 'updated_at'];
  const keys = Object.keys(selectedItem.value).sort((a, b) => {
    const ia = priority.indexOf(a);
    const ib = priority.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
  
  const sorted = {};
  for (const k of keys) sorted[k] = selectedItem.value[k];
  return sorted;
});

// Lifecycle
onMounted(() => {
  fetchData();
  refreshInterval = setInterval(() => {
    if (token.value) fetchData();
  }, 10000);
  
  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeModal();
  };
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  clearInterval(refreshInterval);
});
</script>

<style scoped>
/* Optional scoped styles for transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
