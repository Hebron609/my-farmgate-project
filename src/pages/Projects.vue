<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white overflow-x-hidden"
  >
    <Header :videoVariant="2" />

    <div class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${farmPic})` }"
      ></div>

      <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/60 animate-pulse"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/70 animate-ping"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/60 animate-pulse"
      ></div>

      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon
            class="mx-auto mb-6 h-16 w-16 text-[#F2CB00] animate-pulse"
          />

          <h1
            class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight"
          >
            OUR <br />
            <span class="text-[#129C48]">PROJECTS.</span>
          </h1>
        </div>

        <p
          class="mt-4 text-gray-300 max-w-[750px] text-sm md:text-base reveal-slide-up delay-300"
        >
          At FGAI, we believe every interventions have the power to make a
          difference, and we trust there is a solution to poverty, food
          insecurity and sustainable impact.
        </p>

        <p
          class="max-w-[750px] mt-4 text-sm text-gray-400 delay-300 md:text-base reveal-slide-up"
        >
          Our impactful projects and investments are aimed at enhancing food
          systems and improving livelihoods. Explore our current projects that
          are making a difference in agriculture.
        </p>

        <div class="absolute bottom-10">
          <ScrollDownPage />
        </div>
      </div>
    </div>

    <section
      id="fg-projects-list"
      class="pb-24 overflow-hidden bg-white pt-15 md:pt-24 font-montserrat"
    >
      <div class="px-6 mx-auto mb-20 text-center max-w-7xl">
        <div
          class="flex items-center justify-center gap-2 mb-6 reveal-slide-left"
        >
          <div class="inline-flex">
            <button
              @click="navigateToVideo2"
              class="relative flex items-center justify-center px-4 py-2 mb-5 overflow-hidden font-semibold bg-[#F2CB00] border border-gray-200 cursor-pointer group rounded-4xl md:mb-10"
            >
              <span
                class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <LeafIcon class="w-4 h-4 text-black" />
                <span class="text-sm font-semibold tracking-wider text-black"
                  >Start growing with us</span
                >
              </span>

              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-[#129C48] group-hover:translate-y-0"
              >
                <LeafIcon class="w-4 h-4 text-white" />
                <span class="text-sm font-semibold leading-none text-white"
                  >Start growing with us</span
                >
              </span>
            </button>
          </div>
        </div>
        <h2
          class="font-['Livvic'] text-4xl md:text-6xl font-bold text-black leading-tight reveal-slide-up"
        >
          Explore our <span class="text-[#129C48]">ongoing projects.</span>
        </h2>
        <div class="h-1 w-24 bg-[#F2CB00] mx-auto mt-8 mb-12"></div>

        <!-- Filter System (Floating Command Bar) -->
        <div
          class="hidden md:block relative z-[220] w-full px-4 mx-auto mt-4 mb-16 max-w-none reveal-slide-up"
        >
          <div
            class="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row md:flex-nowrap items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <!-- Search -->
            <div
              class="relative w-full md:flex-[1.35] md:min-w-[260px] min-w-0 group"
            >
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-[#F2CB00] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                v-model="searchQueryDraft"
                @keyup.enter="applyFilters"
                placeholder="Search all projects..."
                class="w-full bg-transparent text-gray-800 py-4 pl-14 pr-6 rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none font-semibold font-montserrat text-sm outline-none placeholder-gray-400 focus:bg-gray-50 transition-colors"
              />
            </div>

            <!-- Location Select -->
            <div
              class="relative w-full md:w-[210px] md:flex-none md:shrink-0 group cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-[#F2CB00]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <select
                v-model="selectedLocationDraft"
                class="w-full py-4 pl-12 pr-10 text-sm font-semibold text-gray-700 bg-transparent outline-none appearance-none cursor-pointer font-montserrat"
              >
                <option>All locations</option>
                <option>Eastern Region</option>
                <option>Ahafo Region</option>
                <option>Volta Region</option>
                <option>Northern Region</option>
              </select>
              <svg
                class="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-[#129C48] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            <!-- Focus Area Select -->
            <div
              class="relative w-full md:w-[230px] md:flex-none md:shrink-0 group cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-[#F2CB00]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </div>
              <select
                v-model="selectedFocusAreaDraft"
                class="w-full py-4 pl-12 pr-10 text-sm font-semibold text-gray-700 bg-transparent outline-none appearance-none cursor-pointer font-montserrat"
              >
                <option>All key focus areas</option>
                <option>TAP</option>
                <option>Flagship Farming</option>
              </select>
              <svg
                class="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-[#129C48] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            <!-- Single Status Toggle: Active [toggle] Completed -->
            <div
              class="flex items-center justify-center w-full px-3 py-3 transition-colors flex-nowrap md:w-auto md:flex-none md:shrink-0 gap-x-2 gap-y-0 md:px-6 md:py-0 hover:bg-gray-50"
            >
              <LeafIcon class="w-4 h-4 text-[#F2CB00] shrink-0" />
              <span
                class="text-sm font-semibold text-gray-700 font-montserrat whitespace-nowrap shrink-0 mr-1 md:mr-2"
                >Project status:</span
              >

              <span
                class="text-[11px] sm:text-sm font-semibold text-[#129C48] font-montserrat whitespace-nowrap shrink-0 "
                >Active</span
              >

              <label
                class="relative inline-flex items-center mx-1 cursor-pointer sm:mx-3 shrink-0"
              >
                <input
                  type="checkbox"
                  class="sr-only"
                  v-model="isCompletedDraft"
                  @change="applyFilters"
                />
                <div
                  :class="[
                    'w-10 h-5 sm:w-12 sm:h-6 rounded-full transition-colors duration-300 shadow-inner',
                    isCompletedDraft ? 'bg-[#F2CB00]' : 'bg-[#129C48]',
                  ]"
                ></div>
                <span
                  :class="[
                    'absolute top-[3px] left-[3px] w-3.5 h-3.5 sm:top-1 sm:left-1 sm:w-4 sm:h-4 bg-white rounded-full shadow-sm transition-transform duration-300',
                    isCompletedDraft
                      ? 'translate-x-5 sm:translate-x-6'
                      : 'translate-x-0',
                  ]"
                ></span>
              </label>

              <span
                class="text-[11px] sm:text-sm font-semibold text-[#F2CB00] font-montserrat whitespace-nowrap shrink-0"
                >Completed</span
              >
            </div>

            <!-- Go Action Section -->
            <div
              class="md:flex-none md:shrink-0 flex items-stretch bg-black md:rounded-r-[2rem] hover:bg-gray-900 cursor-pointer transition-colors"
              @click="applyFilters"
            >
              <button class="w-full h-full min-h-[50px] px-4 md:px-8 flex items-center justify-center text-sm font-semibold text-white bg-transparent outline-none border-none m-0">
                Go
              </button>
            </div>
          </div>
        </div>

        <div
          class="md:hidden projects-filter-bar relative z-[20] w-full px-4 mx-auto mt-4 mb-16 max-w-none reveal-slide-up"
        >
          <div
            class="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row md:flex-nowrap items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <!-- Search -->
            <div
              class="projects-filter-search relative w-full md:flex-[1.35] md:min-w-[260px] min-w-0 group"
            >
              <div class="flex items-center gap-2 mb-2 md:hidden">
                <span
                  class="inline-flex h-2 w-2 rounded-full bg-[#129C48]"
                ></span>
                <span
                  class="text-[11px] font-bold uppercase tracking-[0.24em] text-gray-500"
                  >Search Projects</span
                >
              </div>
              <div class="relative projects-filter-field-row">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-[#F2CB00] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  v-model="searchQueryDraft"
                  @keyup.enter="applyFilters"
                  placeholder="Search all projects..."
                  class="projects-filter-input w-full bg-transparent text-gray-800 py-4 pl-14 pr-6 rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none font-semibold font-montserrat text-sm outline-none placeholder-gray-400 focus:bg-gray-50 transition-colors"
                />
              </div>
            </div>

            <!-- Location Select -->
            <div
              class="projects-filter-select relative w-full md:w-[210px] md:flex-none md:shrink-0 group cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-2 mb-2 md:hidden">
                <span
                  class="inline-flex h-2 w-2 rounded-full bg-[#129C48]"
                ></span>
                <span
                  class="text-[11px] font-bold uppercase tracking-[0.24em] text-gray-500"
                  >Location</span
                >
              </div>
              <div class="relative projects-filter-field-row">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-[#F2CB00]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <select
                  v-model="selectedLocationDraft"
                  :class="[
                    'projects-filter-dropdown w-full py-4 pl-12 pr-10 text-sm font-semibold bg-transparent outline-none appearance-none cursor-pointer font-montserrat',
                    selectedLocationDraft === 'All locations'
                      ? 'text-gray-400'
                      : 'text-gray-700',
                  ]"
                >
                  <option>All locations</option>
                  <option>Eastern Region</option>
                  <option>Ahafo Region</option>
                  <option>Volta Region</option>
                  <option>Northern Region</option>
                </select>
                <svg
                  class="projects-filter-arrow w-4 h-4 text-gray-400 pointer-events-none group-hover:text-[#129C48] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <!-- Focus Area Select -->
            <div
              class="projects-filter-select relative w-full md:w-[230px] md:flex-none md:shrink-0 group cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-2 mb-2 md:hidden">
                <span
                  class="inline-flex h-2 w-2 rounded-full bg-[#129C48]"
                ></span>
                <span
                  class="text-[11px] font-bold uppercase tracking-[0.24em] text-gray-500"
                  >Focus Area</span
                >
              </div>
              <div class="relative projects-filter-field-row">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-[#F2CB00]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </div>
                <select
                  v-model="selectedFocusAreaDraft"
                  :class="[
                    'projects-filter-dropdown w-full py-4 pl-12 pr-10 text-sm font-semibold bg-transparent outline-none appearance-none cursor-pointer font-montserrat',
                    selectedFocusAreaDraft === 'All key focus areas'
                      ? 'text-gray-400'
                      : 'text-gray-700',
                  ]"
                >
                  <option>All key focus areas</option>
                  <option>TAP</option>
                  <option>Flagship Farming</option>
                </select>
                <svg
                  class="projects-filter-arrow w-4 h-4 text-gray-400 pointer-events-none group-hover:text-[#129C48] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <!-- Single Status Toggle: Active [toggle] Completed -->
            <div
              class="flex items-center justify-center w-full px-3 py-3 transition-colors projects-filter-status flex-nowrap md:w-auto md:flex-none md:shrink-0 gap-x-2 gap-y-0 md:px-6 md:py-0 hover:bg-gray-50"
            >
              <LeafIcon class="hidden md:inline w-4 h-4 text-[#F2CB00] shrink-0" />
              <span
                class="hidden md:inline text-xs font-semibold text-gray-700 md:text-sm font-montserrat whitespace-nowrap shrink-0 mr-1 md:mr-2"
                >Project status:</span
              >

              <div
                class="projects-filter-status-row flex items-center justify-between w-full max-w-[260px] mx-auto md:w-auto md:max-w-none md:justify-start gap-3 md:gap-2"
              >
                <span
                  class="text-xs font-semibold text-[#129C48] md:text-sm font-montserrat whitespace-nowrap shrink-0"
                  >Active</span
                >
                <label
                  class="relative inline-flex items-center self-center mx-0 cursor-pointer sm:mx-3 shrink-0 md:self-auto"
                >
                  <input
                    type="checkbox"
                    class="sr-only"
                    v-model="isCompletedDraft"
                    @change="applyFilters"
                  />
                  <div
                    :class="[
                      'w-11 h-6 sm:w-12 sm:h-6 rounded-full transition-colors duration-300 shadow-inner',
                      isCompletedDraft ? 'bg-[#F2CB00]' : 'bg-[#129C48]',
                    ]"
                  ></div>
                  <span
                    :class="[
                      'absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300',
                      isCompletedDraft
                        ? 'translate-x-5 sm:translate-x-6'
                        : 'translate-x-0',
                    ]"
                  ></span>
                </label>

                <span
                  class="text-[11px] sm:text-sm font-semibold text-[#F2CB00] font-montserrat whitespace-nowrap shrink-0"
                  >Completed</span
                >
              </div>
            </div>

            <!-- Go Action Section -->
            <div
              class="projects-filter-cta w-full md:w-[140px] md:flex-none md:shrink-0 flex items-center justify-center py-3 md:py-0 px-2 md:px-4 md:rounded-r-[2rem] hover:bg-gray-50 transition-colors"
            >
              <button
                @click="applyFilters"
                class="w-full py-3 text-sm font-semibold text-white transition-colors bg-black rounded-full shadow-sm cursor-pointer hover:bg-gray-900 active:scale-95"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="carousel-scene relative w-full md:h-[550px] flex items-center justify-center overflow-x-clip h-[430px]"
      >
        <!-- Empty State -->
        <div
          v-if="displayOrder.length === 0"
          class="absolute inset-0 z-50 flex items-center justify-center"
        >
          <div
            class="p-8 mx-4 text-center border shadow-lg bg-black/5 backdrop-blur-md rounded-2xl border-black/10"
          >
            <LeafIcon
              class="mx-auto mb-4 h-12 w-12 text-[#129C48] opacity-80"
            />
            <h3 class="text-2xl font-['Livvic'] text-black font-bold mb-2">
              No projects found
            </h3>
            <p class="text-gray-600 font-['Montserrat'] text-sm md:text-base">
              Try adjusting your filters to discover more projects.
            </p>
            <button
              @click="resetFilters"
              class="mt-6 px-6 py-2.5 bg-[#129C48] text-white rounded-full font-semibold hover:bg-[#0a4d3c] shadow-md transition-colors active:scale-95"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div
          v-for="(card, trackIndex) in displayOrder"
          :key="card.id"
          :class="getTrackStatus(trackIndex)"
          class="absolute card-item transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        >
          <div
            :class="[
              'relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 preserve-3d',
              trackIndex === 2 ? 'border-none' : 'border-[1px] border-white/20',
            ]"
          >
            <!-- Removed top-right badge; indicator moved next to title -->

            <img
              :src="card.image"
              class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
            ></div>

            <div
              class="absolute bottom-0 left-0 w-full p-5 md:py-4 md:px-6 backdrop-blur-xl rounded-b-[2.5rem] text-white"
            >
              <h3
                class="mb-1 text-lg font-bold md:text-xl font-['Livvic'] relative pl-6"
              >
                <span
                  :class="[
                    'ongoing-dot ongoing-dot-abs',
                    card.status === 'Complete' ? 'completed-dot' : '',
                  ]"
                  aria-hidden="true"
                ></span>
                <span class="inline-block">{{ card.title }}</span>
              </h3>
              <p
                class="text-xs leading-relaxed md:text-sm text-stone-200 opacity-90 font-['Montserrat'] whitespace-pre-line pl-5"
              >
                {{ card.description }}
              </p>
            </div>
          </div>

          <div
            v-if="
              getTrackStatus(trackIndex) === 'active' && displayOrder.length > 1
            "
            class="absolute inset-0 z-[100] flex items-center justify-between px-6 pointer-events-none transform translate-z-10"
          >
            <button
              @click.stop="handlePrev"
              class="pointer-events-auto p-2 bg-[#0a4d3c] rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer absolute left-[-2px]"
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
                  stroke-width="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              @click.stop="handleNext"
              class="pointer-events-auto p-2 bg-[#0a4d3c] rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer absolute right-[-2px] z-[100]"
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
                  stroke-width="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      id="fg-projects-impact"
      class="w-full bg-[#129C48] py-24 text-white reveal-fade relative overflow-hidden"
    >
      <div class="relative z-10 px-6 mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h2
            class="font-['Livvic'] text-3xl font-bold tracking-widest uppercase mb-4"
          >
            Our impact in Numbers
          </h2>
          <div class="h-1 w-24 bg-[#F2CB00] mx-auto"></div>
        </div>

        <div
          class="grid grid-cols-2 gap-4 text-center sm:gap-6 md:gap-4 lg:gap-8 md:grid-cols-4"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col items-center h-full group reveal-stagger"
          >
            <div
              class="flex flex-col items-center justify-center w-full p-3 mb-2 transition-transform duration-300 border shadow-lg h-[170px] lg:h-[190px] rounded-2xl md:rounded-3xl bg-white/20 backdrop-blur-md border-white/30 sm:p-4 lg:p-6 group-hover:scale-105"
            >
              <div
                class="w-full px-2 mb-1 font-['Livvic'] text-white md:mb-2 drop-shadow-lg"
              >
                <span
                  class="block w-full text-3xl font-bold tracking-tight text-center whitespace-nowrap sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl"
                >
                  {{ stat.number }}
                </span>
              </div>

              <div
                class="w-full px-2 font-['Montserrat'] text-[#F2CB00] font-bold uppercase tracking-widest drop-shadow flex items-start justify-center h-16 md:h-12 lg:h-14"
              >
                <span
                  class="block w-full text-sm text-center whitespace-pre-line"
                >
                  {{ stat.label.replace(" ", "\n") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import { useHighlightOnLoad } from "@/composables/useHighlightOnLoad";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";

import farmPic from "@/assets/img/farm-pic4.jpg";
import farmCrops from "@/assets/img/okra1.jpg";
import farmIrrigation from "@/assets/img/onion.jpg";
import farmPic9 from "@/assets/img/farm-pic2.jpg";
import farmPic1 from "@/assets/img/pepper-farm.jpg";
import farmPic6 from "@/assets/img/catfish1.png";
import farmPic10 from "@/assets/img/hot-pepper.webp";
import farmPic7 from "@/assets/img/tilapia1.avif";
import farmPic3 from "@/assets/img/yam1.webp";
import ScrollDownPage from "../components/ScrollDownPage.vue";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

const navigateToVideo2 = () => {
  sessionStorage.setItem("activateVideo2", "true");
  window.location.href = "/";
};

onMounted(() => {
  const { init: initHighlight } = useHighlightOnLoad();
  initHighlight();
  const api = initScrollReveal();
  if (!api) return;
  api.reveal(".reveal-fade", {
    ...revealEffects.fade,
    duration: 900,
    delay: 200,
  });
  api.reveal(".reveal-slide-up", {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 200,
  });
  api.reveal(".reveal-slide-left", {
    ...revealEffects.slideLeft,
    duration: 700,
    delay: 150,
  });
  api.reveal(".reveal-stagger", {
    ...revealEffects.stagger,
    duration: 600,
    interval: 100,
  });
});

const solutions = [
  {
    id: 1,
    title: "Danso Community 20-acre Lady's Finger Okra Farming Project",
    image: farmCrops,
    description: `• Tullow Agriventure Programme (TAP)\n• Eastern Region, Ghana`,
    region: "Eastern Region",
    focusArea: "TAP",
    status: "Active",
  },
  {
    id: 2,
    title: "15-acre Onion Farming Project at Danso Village",
    image: farmIrrigation,
    description: `• Tullow Agriventure Programme (TAP)\n• Eastern Region, Ghana`,
    region: "Eastern Region",
    focusArea: "TAP",
    status: "Complete",
  },
  {
    id: 3,
    title: "⁠Asutsuare Rice Farm Project",
    image: farmPic9,
    description: `• Tullow Agriventure Programme (TAP)\n• Eastern Region, Ghana`,
    region: "Eastern Region",
    focusArea: "TAP",
    status: "Complete",
  },
  {
    id: 4,
    title: "201-acre Chilli Pepper Farming Project at Ahafo",
    image: farmPic1,
    description: `• Tullow Agriventure Programme (TAP)\n• Ahafo Region, Ghana`,
    region: "Ahafo Region",
    focusArea: "TAP",
    status: "Complete",
  },
  {
    id: 5,
    title: "Topease No. 2 Community 100-acre Block Cassava Farming",
    image: farmPic3,
    description: `• Tullow Agriventure Programme (TAP)\n• Eastern Region, Ghana`,
    region: "Eastern Region",
    focusArea: "TAP",
    status: "Active",
  },
  {
    id: 6,
    title: "150k-cc Catfish Dug-out Pond Farming Project at Aveyime",
    image: farmPic6,
    description: `• Tullow Agriventure Programme (TAP)\n• Volta Region, Ghana`,
    region: "Volta Region",
    focusArea: "TAP",
    status: "Active",
  },
  {
    id: 7,
    title: "500k-cc Talipia Cage Farm on the Volta Lake at Akuse",
    image: farmPic7,
    description: "• Volta Region, Ghana",
    region: "Volta Region",
    focusArea: "Flagship Farming",
    status: "Active",
  },
  {
    id: 8,
    title: "100-acre Habanero &  Scotch Bonnet Pepper Farming at Tamale",
    image: farmPic10,
    description: `• Tullow Agriventure Programme (TAP)\n• Eastern Region, Ghana`,
    region: "Eastern Region",
    focusArea: "TAP",
    status: "Active",
  },
];

// Reactive Filters
const selectedLocation = ref("All locations");
const selectedFocusArea = ref("All key focus areas");
// Single toggle: false => Active, true => Completed
const isCompleted = ref(false);
const searchQuery = ref("");

const selectedLocationDraft = ref("All locations");
const selectedFocusAreaDraft = ref("All key focus areas");
const isCompletedDraft = ref(false);
const searchQueryDraft = ref("");

watch(searchQueryDraft, (newQuery) => {
  searchQuery.value = newQuery;
  carouselOffset.value = 0;
});

// Computed Filtered Array
const filteredSolutions = computed(() => {
  return solutions.filter((card) => {
    // Location Filter
    if (
      selectedLocation.value !== "All locations" &&
      card.region !== selectedLocation.value
    )
      return false;

    // Focus Area Filter
    if (
      selectedFocusArea.value !== "All key focus areas" &&
      card.focusArea !== selectedFocusArea.value
    )
      return false;

    // Status Filter (single toggle)
    if (card.status !== (isCompleted.value ? "Complete" : "Active"))
      return false;

    // Search Query
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase();
      if (
        !card.title.toLowerCase().includes(q) &&
        !card.description.toLowerCase().includes(q)
      ) {
        return false;
      }
    }

    return true;
  });
});

const carouselOffset = ref(0);

const displayOrder = computed(() => {
  const cards = filteredSolutions.value;
  const len = cards.length;

  if (len === 0) return [];

  const offset = ((carouselOffset.value % len) + len) % len;
  if (offset === 0) return cards;

  return [...cards.slice(offset), ...cards.slice(0, offset)];
});

// Reset the rotation whenever filters change so the track starts from a stable order.
watch(filteredSolutions, () => {
  carouselOffset.value = 0;
});

const applyFilters = () => {
  selectedLocation.value = selectedLocationDraft.value;
  selectedFocusArea.value = selectedFocusAreaDraft.value;
  isCompleted.value = isCompletedDraft.value;
  searchQuery.value = searchQueryDraft.value;
};

const resetFilters = () => {
  selectedLocationDraft.value = "All locations";
  selectedFocusAreaDraft.value = "All key focus areas";
  isCompletedDraft.value = false;
  searchQueryDraft.value = "";
  applyFilters();
};

const getTrackStatus = (index) => {
  const len = displayOrder.value.length;
  if (len === 0) return "hidden-far-right";

  if (len === 1) {
    if (index === 0) return "active";
    return "hidden-far-right";
  }

  if (len === 2) {
    if (index === 0) return "active";
    if (index === 1) return "next";
    return "hidden-far-right";
  }

  if (len === 3) {
    if (index === 0) return "prev";
    if (index === 1) return "active";
    if (index === 2) return "next";
    return "hidden-far-right";
  }

  // SYMMETRICAL 5-SLOT TRACK FOR 4+ CARDS:
  if (index === 0) return "hidden-far-left"; // Exit/Entry point Left (-250%)
  if (index === 1) return "prev"; // Visible Left (-105%)
  if (index === 2) return "active"; // CENTER FOCUS (0%)
  if (index === 3) return "next"; // Visible Right (105%)

  return "hidden-far-right"; // Index 4 & 5 wait here (+250%)
};

const handleNext = () => {
  const len = filteredSolutions.value.length;
  if (len <= 1) return;

  carouselOffset.value = (carouselOffset.value + 1) % len;
};

const handlePrev = () => {
  const len = filteredSolutions.value.length;
  if (len <= 1) return;

  carouselOffset.value = (carouselOffset.value - 1 + len) % len;
};

const stats = ref([
  { number: "550+", label: "Farmers Supported" },
  { number: "27+", label: "Communities Transformed" },
  { number: "2", label: "Sponsored Partners" },
  { number: "₵2.72m", label: "Working Capital Provided" },
]);
</script>

<style scoped>
.carousel-scene {
  perspective: 2500px;
}
.preserve-3d {
  transform-style: preserve-3d;
}
.ongoing-dot {
  width: 10px;
  height: 10px;
  background: #16a34a; /* vivid green */
  border-radius: 9999px;
  box-shadow: 0 0 0 6px rgba(22, 163, 74, 0.12);
  display: inline-block;
  position: relative;
}

.ongoing-dot::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  background: rgba(22, 163, 74, 0.55);
  border-radius: 9999px;
  transform: translate(-50%, -50%) scale(1);
  opacity: 0.95;
  animation: ripple 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.95;
  }
  70% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0.35;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
.ongoing-dot-abs {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
}

.completed-dot {
  width: 10px;
  height: 10px;
  background: #ffffff;
  box-shadow: none;
}

.completed-dot::after {
  content: none;
  animation: none;
}

@media (max-width: 767px) {
  .projects-filter-bar > div {
    border-radius: 1.5rem;
  }

  .projects-filter-search,
  .projects-filter-select,
  .projects-filter-status,
  .projects-filter-cta {
    padding: 0.65rem 1rem;
  }

  .projects-filter-search {
    padding-top: 0.7rem;
    padding-bottom: 0.75rem;
  }

  .projects-filter-search > div:first-child,
  .projects-filter-select > div:first-child {
    margin-bottom: 0.35rem;
  }

  .projects-filter-search .projects-filter-input,
  .projects-filter-select .projects-filter-dropdown {
    height: 3.1rem;
    width: 100%;
    border-radius: 1rem;
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
    padding-top: 0;
    padding-bottom: 0;
  }

  .projects-filter-search .projects-filter-input {
    padding-left: 3.25rem;
    padding-right: 1rem;
  }

  .projects-filter-select .projects-filter-dropdown {
    padding-left: 3rem;
    padding-right: 2.2rem;
    line-height: 1;
  }

  .projects-filter-select .projects-filter-dropdown option {
    color: #111827;
  }

  .projects-filter-field-row {
    margin-top: 0;
    display: grid;
    align-items: center;
    min-height: 3.1rem;
    line-height: 0;
  }

  .projects-filter-search .projects-filter-field-row {
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 0.5rem;
    padding: 0.05rem 0.85rem;
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  }

  .projects-filter-select .projects-filter-field-row {
    grid-template-columns: auto minmax(0, 1fr) auto;
    column-gap: 0.45rem;
    padding: 0.05rem 0.85rem;
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  }

  .projects-filter-search .projects-filter-field-row > div,
  .projects-filter-select .projects-filter-field-row > div {
    position: static;
    inset: auto;
    padding: 0;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .projects-filter-search .projects-filter-field-row > input,
  .projects-filter-select .projects-filter-field-row > select {
    min-width: 0;
    flex: 1 1 auto;
    background: transparent;
    border: 0;
    box-shadow: none;
    border-radius: 0;
    height: 2.95rem;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0.1rem !important;
    padding-right: 0.1rem !important;
  }

  .projects-filter-search svg,
  .projects-filter-select svg {
    position: static;
    transform: none;
    display: block;
    flex-shrink: 0;
    align-self: center;
  }

  .projects-filter-select .projects-filter-arrow {
    justify-self: center;
    align-self: center;
    margin-left: 0;
    width: 0.8rem;
    height: 0.8rem;
  }

  .projects-filter-select .projects-filter-field-row > svg:last-child {
    color: #9ca3af;
    flex: 0 0 auto;
    align-self: center;
  }

  .projects-filter-status {
    flex-direction: column;
    align-items: stretch;
    padding-top: 0.8rem;
    padding-bottom: 0.75rem;
    gap: 0.5rem;
  }

  .projects-filter-status > span {
    display: none;
  }

  .projects-filter-status-row {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.6rem;
  }

  .projects-filter-status-row > span {
    font-size: 0.8rem;
  }

  .projects-filter-status-row > span:first-child {
    color: #129c48;
  }

  .projects-filter-status-row > span:last-child {
    color: #f2cb00;
  }

  .projects-filter-status-row label {
    margin-left: 0;
    margin-right: 0;
    transform: translateY(1px);
  }

  .projects-filter-cta {
    padding-top: 0.35rem;
    padding-bottom: 0.9rem;
    background: transparent;
  }

  .projects-filter-go {
    width: 100%;
    padding: 0.92rem 1.25rem;
    border-radius: 9999px;
    background: #000;
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
  }
}

.translate-z-10 {
  transform: translateZ(60px);
}

.card-item {
  width: 600px;
  height: 500.09px;
  transform-style: preserve-3d;
  left: 50%;
  margin-left: -300px;
  position: absolute;
  /* 0.8s transition ensures the slide through the viewport is visible and smooth */
  transition:
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s ease;
}

.active {
  z-index: 100;
  transform: translateX(0) translateZ(150px);
  opacity: 1;
}

.prev {
  z-index: 50;
  transform: translateX(-103%) translateZ(-350px) rotateY(-28deg) scale(0.85);
  opacity: 0.45;
  filter: blur(0.8px);
}

.next {
  z-index: 50;
  transform: translateX(103%) translateZ(-350px) rotateY(28deg) scale(0.85);
  opacity: 0.45;
  filter: blur(0.8px);
}

/* OFF-SCREEN WAITING ROOMS */
.hidden-far-left {
  opacity: 0;
  z-index: 10;
  transform: translateX(-250%) translateZ(-500px);
}

.hidden-far-right {
  opacity: 0;
  z-index: 10;
  transform: translateX(250%) translateZ(-500px);
}

@media (max-width: 768px) {
  .card-item {
    width: 320px;
    height: 400px;
    margin-left: -160px;
  }
  .prev,
  .next {
    opacity: 0;
    transform: translateX(0) scale(0.5);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 2.5s linear infinite;
}
</style>
