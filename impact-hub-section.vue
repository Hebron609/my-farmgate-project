<!-- Interactive Impact Hub Section -->
<section
  class="w-full bg-gradient-to-b from-white via-[#f8faf7] to-[#f0f5ee] py-20 md:py-32 relative overflow-hidden"
>
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-3 mix-blend-multiply pointer-events-none"></div>

  <div class="mx-auto max-w-[1440px] px-6 md:px-12 relative z-10">
    <!-- Section Header -->
    <div class="text-center mb-16 md:mb-20">
      <p class="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#129C48]">
        Explore Impact
      </p>
      <h2 class="font-['Livvic'] text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Interactive <span class="text-[#129C48]">Impact Hub</span>
      </h2>
      <p class="max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
        Click on any Sustainable Development Goal to explore FarmGate's contributions, impact metrics, and related initiatives.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 md:gap-10">
      <!-- SDG Grid (Left) -->
      <div class="lg:col-span-1">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
          <button
            v-for="sdg in sdgItems"
            :key="sdg.number"
            @click="selectSdgHub(sdg.number)"
            type="button"
            class="group relative overflow-hidden rounded-xl p-4 md:p-6 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            :class="[
              selectedSdgHub && selectedSdgHub.number === sdg.number
                ? 'bg-white shadow-[0_20px_40px_rgba(18,156,72,0.15)] ring-2 ring-[#129C48]'
                : 'bg-white/70 hover:bg-white shadow-md hover:shadow-lg border border-white/50'
            ]"
          >
            <!-- Animated Background Gradient -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="{ backgroundColor: sdg.color, opacity: '0.05' }">
            </div>

            <div class="relative z-10 flex flex-col items-center text-center gap-2">
              <div
                class="flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-xl md:text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                :style="{ backgroundColor: sdg.color }">
                {{ sdg.number }}
              </div>
              <h3 class="font-['Livvic'] font-bold text-sm md:text-base text-gray-900 leading-tight line-clamp-2">
                {{ sdg.title }}
              </h3>
            </div>
          </button>
        </div>
      </div>

      <!-- Detail Panel (Right) -->
      <div class="lg:col-span-2" v-if="selectedSdgHub">
        <div
          class="relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
        >
          <!-- Colored Top Bar -->
          <div
            class="h-2 md:h-1.5 w-full transition-colors duration-500"
            :style="{ backgroundColor: selectedSdgHub.color }">
          </div>

          <div class="p-8 md:p-10">
            <!-- Header -->
            <div class="mb-8">
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-3xl shadow-lg flex-shrink-0"
                  :style="{ backgroundColor: selectedSdgHub.color }">
                  {{ selectedSdgHub.number }}
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                    SDG {{ selectedSdgHub.number }}
                  </p>
                  <h3 class="font-['Livvic'] text-2xl md:text-3xl font-bold text-gray-900">
                    {{ selectedSdgHub.title }}
                  </h3>
                </div>
              </div>
            </div>

            <!-- Detailed Description -->
            <div class="mb-8 pb-8 border-b border-gray-200/50">
              <p class="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                {{ selectedSdgHub.description }}
              </p>
              <p class="text-sm md:text-base text-gray-600 leading-relaxed italic">
                {{ selectedSdgHub.longDescription }}
              </p>
            </div>

            <!-- Impact Stats Grid -->
            <div class="mb-8">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                FarmGate's Contribution Stats
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(stat, idx) in selectedSdgHub.stats"
                  :key="idx"
                  class="rounded-lg bg-gradient-to-br from-white to-gray-50 p-4 border border-gray-200/50 hover:border-gray-300 transition-colors"
                >
                  <div
                    class="text-2xl md:text-3xl font-bold"
                    :style="{ color: selectedSdgHub.color }">
                    {{ stat.value }}
                  </div>
                  <p class="text-xs md:text-sm text-gray-600 font-medium mt-2">
                    {{ stat.label }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Related Initiatives -->
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Related Initiatives
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(initiative, idx) in selectedSdgHub.initiatives"
                  :key="idx"
                  class="inline-flex items-center rounded-full px-3 py-2 text-xs md:text-sm font-semibold border transition-all duration-300"
                  :class="[
                    idx % 2 === 0
                      ? 'bg-green-50 border-[#129C48]/30 text-[#035925]'
                      : 'bg-yellow-50 border-[#F2CB00]/30 text-yellow-800'
                  ]"
                >
                  {{ initiative }}
                </span>
              </div>
            </div>
          </div>

          <!-- Visual Impact Bar -->
          <div class="px-8 md:px-10 pb-8">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
              Impact Progress
            </p>
            <div class="relative h-3 rounded-full bg-gray-200 overflow-hidden">
              <div
                class="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
                :style="{
                  width: selectedSdgHub.impact + '%',
                  backgroundColor: selectedSdgHub.color
                }">
              </div>
            </div>
            <p class="text-xs text-gray-500 mt-2">
              {{ selectedSdgHub.impact }}% of our {{ selectedSdgHub.year }} goals achieved
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
