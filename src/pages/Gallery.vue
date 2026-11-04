<template>
  <div
    class="min-h-screen bg-white text-gray-900 font-['Montserrat'] flex flex-col selection:bg-[#129C48] selection:text-white overflow-x-hidden relative"
  >
    <!-- Header Navigation -->
    <Header :videoVariant="2" />

    <!-- Full-Screen Cinematic Hero Section Matching Brand Identity -->
    <section class="relative w-full h-screen overflow-hidden bg-black">
      <!-- Background Hero Image with Cinematic Clarity & Depth -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 sm:opacity-80 transition-transform duration-[20s] ease-linear hover:scale-105"
        :style="{ backgroundImage: `url(${heroBackgroundImage})` }"
      ></div>

      <!-- FarmGate Pattern Overlay Accent in Hero -->
      <div class="absolute -right-24 -top-12 pointer-events-none opacity-[0.09] z-0 select-none">
        <img class="h-[600px] w-auto max-w-none transform rotate-12" :src="farmGateLogo" alt="" />
      </div>

      <!-- Glowing Ambient Circles for Brand Visual Consistency -->
      <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/50 animate-pulse"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/60 animate-ping"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/50 animate-pulse"
      ></div>

      <!-- Cinematic Gradient: Preserves Image Radiance While Providing Text Contrast -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/80"
      ></div>

      <!-- Center Hero Content -->
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon
            class="mx-auto mb-6 h-16 w-16 text-[#F2CB00] animate-pulse"
          />

          <h1
            class="font-['Livvic'] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight text-white tracking-tight"
          >
            OUR <br />
            <span class="text-[#129C48]">GALLERY.</span>
          </h1>
        </div>

        <p
          class="max-w-2xl mt-6 text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-300 delay-200 reveal-slide-up"
        >
          A visual showcase of FarmGate's sustainable agricultural operations, farmer partnerships, and scalable food systems across Africa.
        </p>

        <!-- Bottom Hero Scroll Indicator -->
        <div class="absolute bottom-6 sm:bottom-10 flex flex-col items-center justify-center">
          <button
            @click="scrollToGallery"
            class="flex flex-col items-center gap-3 text-gray-300 hover:text-[#F2CB00] transition-colors cursor-pointer group"
            aria-label="Scroll to Photo Albums"
          >
            <span class="tracking-widest uppercase text-[11px] font-semibold text-gray-300 group-hover:text-[#F2CB00]">
              Browse Media Library
            </span>
            <ScrollDownPage />
          </button>
        </div>
      </div>
    </section>

    <!-- MAIN VISUAL GALLERY SECTION (WHITE BACKGROUND THEME) -->
    <main id="gallery-grid-section" class="relative z-10 flex-1 w-full py-12 md:py-20 scroll-mt-16 bg-white overflow-hidden">
      <!-- Subtle Decorative Farmgate Pattern Watermark at Top Right of Gallery Section -->
      <div class="absolute -right-16 sm:-right-8 pointer-events-none -top-10 opacity-[0.035] z-0 select-none">
        <img class="h-[520px] sm:h-[620px] w-auto max-w-none transform rotate-12" :src="farmGateLogo" alt="" />
      </div>

      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Top Header & Media Counter -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-gray-200">
          <div>
            <!-- Our Projects Button (Positioned at Top) -->
            <div class="mb-4">
              <a
                href="/projects"
                class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-semibold bg-[#F2CB00] border border-gray-200 cursor-pointer group rounded-4xl shadow-xs hover:shadow-md transition-shadow"
              >
                <span
                  class="flex items-center justify-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <LeafIcon class="w-4 h-4 text-black" />
                  <span class="text-sm font-semibold tracking-wider text-black">Our Projects</span>
                </span>

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-white transition-transform duration-300 transform translate-y-full bg-[#129C48] group-hover:translate-y-0"
                >
                  <LeafIcon class="w-4 h-4 text-white" />
                  <span class="text-sm font-semibold leading-none text-white">Our Projects</span>
                </span>
              </a>
            </div>

            <h2 class="font-['Livvic'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              FarmGate <span class="text-[#129C48]">Field Gallery.</span>
            </h2>
          </div>

          <!-- Total Count Badge (iOS Photos Style Counter) -->
          <div class="flex items-center gap-2.5 shrink-0">
            <div class="px-3.5 sm:px-4 py-2 rounded-2xl bg-gray-50 border border-gray-200 text-xs font-['Montserrat'] font-semibold text-gray-700 flex items-center gap-2 sm:gap-2.5 shadow-sm whitespace-nowrap">
              <span class="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <font-awesome-icon :icon="['fas', 'folder']" class="text-[#129C48] text-xs shrink-0" />
                <span><strong class="font-bold">{{ fieldAlbums.length }}</strong>&nbsp;Albums</span>
              </span>
              <span class="text-gray-300 select-none shrink-0">•</span>
              <span class="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <font-awesome-icon :icon="['fas', 'camera']" class="text-[#F2CB00] text-xs shrink-0" />
                <span><strong class="font-bold">{{ allPhotosList.length }}</strong>&nbsp;Photos</span>
              </span>
              <span class="text-gray-300 select-none shrink-0">•</span>
              <span class="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <font-awesome-icon :icon="['fas', 'film']" class="text-teal-600 text-xs shrink-0" />
                <span><strong class="font-bold">{{ videoReels.length }}</strong>&nbsp;Videos</span>
              </span>
            </div>
          </div>
        </div>

        <!-- CONTROL BAR (Responsive on Mobile, Tablet & Desktop) -->
        <div class="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3.5 sm:gap-4 mb-10 p-2 sm:p-2.5 rounded-3xl bg-gray-50 border border-gray-200/90 shadow-sm">
          
          <!-- Top Row on Tablet (or Left on Desktop): View Selector + Search Bar on Tablet -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
            <!-- Primary Segmented Pill Selector (Like iOS / Android Photos App) -->
            <div class="grid grid-cols-3 sm:flex items-center p-1 rounded-2xl bg-white border border-gray-200/80 shadow-xs w-full sm:w-auto">
              <button
                @click="activeView = 'albums'; selectedAlbum = null"
                :class="[
                  'flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 lg:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap',
                  activeView === 'albums'
                    ? 'bg-[#129C48] text-white shadow-md shadow-green-700/20'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                ]"
              >
                <font-awesome-icon :icon="['fas', 'folder']" class="text-xs" />
                <span>Albums</span>
                <span
                  :class="[
                    'px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] font-extrabold',
                    activeView === 'albums' ? 'bg-black/25 text-[#F2CB00]' : 'bg-gray-100 text-gray-600'
                  ]"
                >
                  {{ fieldAlbums.length }}
                </span>
              </button>

              <button
                @click="activeView = 'photos'"
                :class="[
                  'flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 lg:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap',
                  activeView === 'photos'
                    ? 'bg-[#129C48] text-white shadow-md shadow-green-700/20'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                ]"
              >
                <font-awesome-icon :icon="['fas', 'images']" class="text-xs" />
                <span><span class="hidden sm:inline">All </span>Photos</span>
                <span
                  :class="[
                    'px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] font-extrabold',
                    activeView === 'photos' ? 'bg-black/25 text-[#F2CB00]' : 'bg-gray-100 text-gray-600'
                  ]"
                >
                  {{ allPhotosList.length }}
                </span>
              </button>

              <button
                @click="activeView = 'videos'"
                :class="[
                  'flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 lg:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap',
                  activeView === 'videos'
                    ? 'bg-[#129C48] text-white shadow-md shadow-green-700/20'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                ]"
              >
                <font-awesome-icon :icon="['fas', 'film']" class="text-xs" />
                <span>Videos</span>
                <span
                  :class="[
                    'px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] font-extrabold',
                    activeView === 'videos' ? 'bg-black/25 text-[#F2CB00]' : 'bg-gray-100 text-gray-600'
                  ]"
                >
                  {{ videoReels.length }}
                </span>
              </button>
            </div>

            <!-- Instant Search Input (Displayed here on Tablet sm:flex xl:hidden) -->
            <div class="relative hidden sm:block xl:hidden sm:w-56 md:w-64">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <font-awesome-icon :icon="['fas', 'search']" class="text-gray-400 text-xs" />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search media..."
                class="gallery-search-input w-full pl-8 pr-7 py-2 rounded-full text-base sm:text-xs text-gray-900 placeholder-gray-400 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#129C48] transition-all"
              />
              <button
                v-if="searchQuery"
                @click="searchQuery = ''"
                class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-gray-600 text-xs cursor-pointer"
                aria-label="Clear search"
              >
                <font-awesome-icon :icon="['fas', 'times']" />
              </button>
            </div>
          </div>

          <!-- Bottom Row on Tablet (or Right on Desktop): Sector Filter Chips + Desktop Search Bar -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between xl:justify-end gap-3 flex-1 min-w-0">
            <!-- Sector Filter Pills with horizontal scroll support -->
            <div class="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 max-w-full">
              <button
                v-for="sector in sectorTabs"
                :key="sector.id"
                @click="setSector(sector.id)"
                :class="[
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0',
                  activeSector === sector.id
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                ]"
              >
                <font-awesome-icon :icon="sector.icon" class="text-[10px]" />
                <span>{{ sector.label }}</span>
              </button>
            </div>

            <!-- Instant Search Input (Displayed here on Mobile sm:hidden and Desktop xl:block) -->
            <div class="relative w-full sm:hidden xl:block xl:w-56 shrink-0">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <font-awesome-icon :icon="['fas', 'search']" class="text-gray-400 text-xs" />
              </div>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search media..."
                class="gallery-search-input w-full pl-8 pr-7 py-2.5 xl:py-1.5 rounded-full text-base xl:text-xs text-gray-900 placeholder-gray-400 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#129C48] transition-all"
              />
              <button
                v-if="searchQuery"
                @click="searchQuery = ''"
                class="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-gray-600 text-xs cursor-pointer"
                aria-label="Clear search"
              >
                <font-awesome-icon :icon="['fas', 'times']" />
              </button>
            </div>
          </div>
        </div>

        <!-- ======================================================== -->
        <!-- VIEW 1: ALBUMS (FOLDER CONTAINERS WITH STICKING-OUT PHOTOS) -->
        <!-- ======================================================== -->
        <section v-if="activeView === 'albums' && !selectedAlbum">
          <!-- Helpful subtle instruction banner -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8 px-1 text-xs text-gray-500">
            <span class="flex items-center gap-2 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-[#129C48] shrink-0"></span>
              <span class="sm:hidden">Tap any album to explore collection</span>
              <span class="hidden sm:inline">Hover over any album to preview photos • Click to view complete collection</span>
            </span>
            <span class="font-['Montserrat'] text-xs font-medium text-gray-400 self-start sm:self-auto shrink-0">
              Showing {{ filteredAlbums.length }} Albums
            </span>
          </div>

          <!-- Empty State -->
          <div
            v-if="filteredAlbums.length === 0"
            class="rounded-3xl border border-gray-200 p-12 text-center my-12 shadow-sm bg-gray-50"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm">
              <font-awesome-icon :icon="['fas', 'search']" class="text-2xl" />
            </div>
            <h3 class="font-['Livvic'] text-xl font-bold text-gray-900 mb-2">No albums match your filter</h3>
            <p class="text-gray-500 text-sm max-w-md mx-auto mb-6">
              We couldn't find any photo albums matching "{{ searchQuery }}". Try clearing your search or switching sectors.
            </p>
            <button
              @click="resetFilters"
              class="px-6 py-2.5 rounded-full bg-[#129C48] text-white font-semibold text-sm hover:bg-[#0e7c39] transition-colors cursor-pointer shadow-md shadow-green-700/20"
            >
              Reset Filters
            </button>
          </div>

          <!-- Folder Containers Grid -->
          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pb-12"
          >
            <div
              v-for="album in filteredAlbums"
              :key="album.id"
              class="folder-card group relative cursor-pointer select-none flex flex-col h-full"
              @click="openFolder(album)"
            >
              <!-- Interactive Sticking-Out Photos Stack with Ample Top Headroom -->
              <div class="relative w-full h-64 sm:h-72 pt-10 sm:pt-12 px-4 flex items-center justify-center shrink-0">
                
                <!-- Photo 1: Left Tilted Photo (peeking out) -->
                <div
                  class="folder-photo folder-photo--left absolute w-[68%] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white bg-gray-100 transition-all duration-500 ease-out origin-bottom-left"
                >
                  <img
                    :src="album.photos[1]?.url || album.coverImage"
                    :alt="album.photos[1]?.title || album.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
                </div>

                <!-- Photo 2: Right Tilted Photo (peeking out) -->
                <div
                  class="folder-photo folder-photo--right absolute w-[68%] aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white bg-gray-100 transition-all duration-500 ease-out origin-bottom-right"
                >
                  <img
                    :src="album.photos[2]?.url || album.coverImage"
                    :alt="album.photos[2]?.title || album.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors"></div>
                </div>

                <!-- Photo 3: Center Elevated Photo (peeking out top) -->
                <div
                  class="folder-photo folder-photo--center absolute w-[72%] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-gray-100 transition-all duration-500 ease-out origin-bottom"
                >
                  <img
                    :src="album.photos[3]?.url || album.coverImage"
                    :alt="album.photos[3]?.title || album.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>

                <!-- Photo 4: Foreground Cover Photo (in front) -->
                <div
                  class="folder-photo folder-photo--front relative z-10 w-[80%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 transition-all duration-500 ease-out"
                >
                  <img
                    :src="album.coverImage"
                    :alt="album.title"
                    class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                  <!-- Badges on Cover -->
                  <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-20 pointer-events-none">
                    <span
                      :class="[
                        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold capitalize tracking-wider backdrop-blur-md shadow-sm border whitespace-nowrap shrink-0 leading-none',
                        album.sectorBadgeClass
                      ]"
                    >
                      <font-awesome-icon :icon="album.sectorIcon" class="text-[9px] shrink-0" />
                      <span class="whitespace-nowrap">{{ album.sector }}</span>
                    </span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-['Montserrat'] font-bold bg-black/65 text-white border border-white/20 backdrop-blur-md shadow-sm whitespace-nowrap shrink-0 leading-none">
                      <font-awesome-icon :icon="['fas', 'camera']" class="text-[#F2CB00] text-[9px] shrink-0" />
                      <span class="whitespace-nowrap">{{ album.photos.length }}&nbsp;Photos</span>
                    </span>
                  </div>

                  <!-- Interactive View Album Badge on Hover -->
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span class="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-[#F2CB00] text-xs font-bold border border-[#F2CB00]/50 shadow-2xl flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                      <font-awesome-icon :icon="['fas', 'images']" />
                      <span>View Album</span>
                      <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-[10px]" />
                    </span>
                  </div>
                </div>
              </div>

              <!-- Structured Album Information Card (Guaranteed Equal Heights) -->
              <div class="mt-3 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 shadow-xs group-hover:shadow-md group-hover:border-[#129C48]/40 transition-all duration-300 flex-1 flex flex-col justify-between">
                <h3 class="font-['Livvic'] font-bold text-gray-900 group-hover:text-[#129C48] transition-colors text-base sm:text-lg leading-snug line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
                  {{ album.title }}
                </h3>
                <p class="mt-3 pt-2.5 border-t border-gray-100 text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 font-medium">
                  <font-awesome-icon :icon="['fas', 'location-dot']" class="text-[#129C48] text-xs shrink-0" />
                  <span class="truncate">{{ album.location }}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- SPREAD ALBUM DRILL-DOWN VIEW (When an Album is Opened)  -->
        <!-- ======================================================== -->
        <section v-if="selectedAlbum" class="pb-16 animate-fade-in">
          <!-- Breadcrumb & Back Navigation -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6 sm:mb-8 p-3.5 sm:p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <!-- Left: Back Button & Meta Pill -->
            <div class="flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3 flex-wrap">
              <button
                @click="selectedAlbum = null"
                class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200/90 text-xs font-bold text-gray-800 hover:text-[#129C48] hover:border-[#129C48] shadow-xs transition-colors cursor-pointer shrink-0"
              >
                <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-xs" />
                <span>Back to All Albums</span>
              </button>

              <div class="flex items-center gap-2 shrink-0">
                <span
                  :class="[
                    'px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-extrabold capitalize tracking-wider border shrink-0',
                    selectedAlbum.sectorBadgeClass
                  ]"
                >
                  {{ selectedAlbum.sector }}
                </span>
                <span class="text-xs font-['Montserrat'] font-medium text-gray-500 whitespace-nowrap">
                  Album {{ selectedAlbum.exhibitNo }} • {{ selectedAlbum.date }}
                </span>
              </div>
            </div>

            <!-- Right: Play Slideshow CTA -->
            <div class="flex items-center justify-end pt-2 md:pt-0 border-t md:border-t-0 border-gray-200/70 shrink-0">
              <button
                @click="startAlbumSlideshow(selectedAlbum)"
                class="w-full sm:w-auto px-4 py-2 rounded-full bg-[#129C48] text-white text-xs font-bold hover:bg-[#0e7c39] transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <font-awesome-icon :icon="['fas', 'play']" class="text-[10px]" />
                <span>Play Slideshow</span>
              </button>
            </div>
          </div>

          <!-- Album Title & Location Banner -->
          <div class="mb-10">
            <h3 class="font-['Livvic'] text-2xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              {{ selectedAlbum.title }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 flex items-center gap-2">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="text-[#129C48]" />
              <span>{{ selectedAlbum.location }}</span>
              <span class="text-gray-300">•</span>
              <span>{{ selectedAlbum.photos.length }} Verified Field Photographs</span>
            </p>
          </div>

          <!-- Spread Photos Grid for Opened Album -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div
              v-for="(photo, pIdx) in selectedAlbum.photos"
              :key="pIdx"
              @click="openAlbumLightbox(selectedAlbum, pIdx)"
              class="group relative rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#129C48] transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div class="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  :src="photo.url"
                  :alt="photo.title"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-gray-900 flex items-center justify-center shadow-lg">
                    <font-awesome-icon :icon="['fas', 'expand']" class="text-sm" />
                  </span>
                </div>
                <div class="absolute top-3 left-3">
                  <span class="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-['Montserrat'] font-bold">
                    Photo {{ pIdx + 1 }}
                  </span>
                </div>
              </div>

              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 class="font-['Livvic'] text-lg font-bold text-gray-900 group-hover:text-[#129C48] transition-colors mb-1.5">
                    {{ photo.title }}
                  </h4>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {{ photo.caption }}
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-['Montserrat'] font-medium">
                  <span>{{ selectedAlbum.location }}</span>
                  <span class="text-[#129C48] font-bold group-hover:underline">View Full Photo →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- VIEW 2: ALL PHOTOS STREAM (Like iOS All Photos View)    -->
        <!-- ======================================================== -->
        <section v-if="activeView === 'photos'" class="pb-16 animate-fade-in">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 px-1 text-xs text-gray-500">
            <span class="font-medium">
              Showing continuous photo stream across all operations
            </span>
            <span class="font-['Montserrat'] text-xs font-medium text-gray-400 self-start sm:self-auto shrink-0">
              {{ filteredAllPhotos.length }} Photos
            </span>
          </div>

          <!-- Empty State -->
          <div
            v-if="filteredAllPhotos.length === 0"
            class="rounded-3xl border border-gray-200 p-12 text-center my-12 shadow-sm bg-gray-50"
          >
            <h3 class="font-['Livvic'] text-xl font-bold text-gray-900 mb-2">No photos match your filter</h3>
            <p class="text-gray-500 text-sm max-w-md mx-auto mb-6">
              Try resetting your search query or selecting another sector.
            </p>
            <button
              @click="resetFilters"
              class="px-6 py-2.5 rounded-full bg-[#129C48] text-white font-semibold text-sm hover:bg-[#0e7c39] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>

          <!-- Continuous Responsive Masonry Photo Grid -->
          <div
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <div
              v-for="(item, idx) in filteredAllPhotos"
              :key="idx"
              @click="openDirectPhotoLightbox(idx)"
              class="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-[#129C48] transition-all duration-300 cursor-pointer aspect-[4/3]"
            >
              <img
                :src="item.photo.url"
                :alt="item.photo.title"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              <!-- Dark overlay on hover for legibility -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div class="flex items-center justify-between">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold capitalize bg-black/60 backdrop-blur-md border border-white/20 whitespace-nowrap shrink-0">
                    {{ item.album.sector }}
                  </span>
                  <span class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xs">
                    <font-awesome-icon :icon="['fas', 'expand']" />
                  </span>
                </div>

                <div>
                  <h4 class="font-['Livvic'] text-sm font-bold text-white line-clamp-1 mb-0.5">
                    {{ item.photo.title }}
                  </h4>
                  <p class="text-[11px] text-gray-300 font-['Montserrat'] font-medium truncate">
                    {{ item.album.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- VIEW 3: VIDEOS & REELS (Field Footage & Walkthroughs)    -->
        <!-- ======================================================== -->
        <section v-if="activeView === 'videos'" class="pb-16 animate-fade-in">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 px-1 text-xs text-gray-500">
            <span class="font-medium">
              High-definition field footage, commercial greenhouse audits, and clean energy operations
            </span>
            <span class="font-['Montserrat'] text-xs font-medium text-gray-400 self-start sm:self-auto shrink-0">
              {{ videoReels.length }} Video Reels
            </span>
          </div>

          <!-- Video Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="video in videoReels"
              :key="video.id"
              @click="openVideoPlayer(video)"
              class="group relative rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#129C48] transition-all duration-300 cursor-pointer flex flex-col"
            >
              <!-- Video Poster / Thumbnail Area -->
              <div class="relative aspect-video overflow-hidden bg-gray-900">
                <img
                  :src="video.poster"
                  :alt="video.title"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors"></div>

                <!-- Center Pulsing Play Button -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 rounded-full bg-[#129C48] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <font-awesome-icon :icon="['fas', 'play']" class="text-xl ml-1 text-white" />
                  </div>
                </div>

                <!-- Duration Pill -->
                <div class="absolute bottom-3 right-3">
                  <span class="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-xs font-['Montserrat'] font-bold flex items-center gap-1 shadow-md">
                    <font-awesome-icon :icon="['fas', 'film']" class="text-[10px] text-[#F2CB00]" />
                    <span>{{ video.duration }}</span>
                  </span>
                </div>

                <!-- Sector Tag -->
                <div class="absolute top-3 left-3">
                  <span
                    :class="[
                      'inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border shadow-sm whitespace-nowrap shrink-0',
                      video.sectorBadgeClass
                    ]"
                  >
                    {{ video.sector }}
                  </span>
                </div>
              </div>

              <!-- Video Info -->
              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 text-xs text-gray-400 font-['Montserrat'] font-medium mb-2">
                    <font-awesome-icon :icon="['fas', 'location-dot']" class="text-[#129C48]" />
                    <span>{{ video.location }}</span>
                    <span>•</span>
                    <span>{{ video.date }}</span>
                  </div>

                  <h3 class="font-['Livvic'] text-xl font-bold text-gray-900 group-hover:text-[#129C48] transition-colors mb-2 leading-snug">
                    {{ video.title }}
                  </h3>

                  <p class="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {{ video.description }}
                  </p>
                </div>

                <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#129C48]">
                  <span>Watch Field Reel</span>
                  <span class="group-hover:translate-x-1 transition-transform">▶ Play Video</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <!-- Subtle Decorative Farmgate Pattern Watermark at Bottom Right of Gallery Section -->
      <div class="absolute -right-12 pointer-events-none -bottom-10 opacity-[0.035] z-0 select-none">
        <img class="h-[460px] w-auto max-w-none transform -rotate-6" :src="farmGateLogo" alt="" />
      </div>
    </main>

    <!-- ======================================================== -->
    <!-- CINEMA VIDEO PLAYER MODAL                                -->
    <!-- ======================================================== -->
    <div
      v-if="activeVideo"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-fade-in"
      style="background-color: rgba(4, 8, 5, 0.94); backdrop-filter: blur(16px);"
      role="dialog"
      aria-modal="true"
      :aria-label="activeVideo.title"
    >
      <div class="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <!-- Video Header -->
        <div class="p-4 sm:p-5 flex items-center justify-between bg-black/80 border-b border-white/10 text-white">
          <div class="truncate pr-4">
            <h3 class="font-['Livvic'] text-base sm:text-lg font-bold text-white truncate">
              {{ activeVideo.title }}
            </h3>
            <p class="text-xs text-gray-400 font-['Montserrat'] font-medium">
              {{ activeVideo.location }} • {{ activeVideo.duration }}
            </p>
          </div>
          <button
            @click="activeVideo = null"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 shrink-0"
            aria-label="Close video player"
          >
            <font-awesome-icon :icon="['fas', 'times']" class="text-lg" />
          </button>
        </div>

        <!-- Video Stage -->
        <div class="relative w-full aspect-video bg-black flex items-center justify-center">
          <video
            :src="activeVideo.videoUrl"
            controls
            autoplay
            playsinline
            class="w-full h-full object-contain"
          ></video>
        </div>
      </div>
    </div>

    <!-- ======================================================== -->
    <!-- CINEMA PHOTO LIGHTBOX MODAL                              -->
    <!-- ======================================================== -->
    <div
      v-if="isLightboxOpen && currentPhoto.url"
      class="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden text-white select-none animate-fade-in"
      style="background-color: rgba(4, 8, 5, 0.96); backdrop-filter: blur(16px);"
      role="dialog"
      aria-modal="true"
      :aria-label="currentPhoto.albumTitle || currentPhoto.title"
    >
      <!-- Top Cinema Header Bar -->
      <header
        class="relative z-30 w-full px-3 sm:px-8 py-2.5 sm:py-4 flex items-center justify-between border-b border-white/10"
        style="background-color: rgba(10, 16, 11, 0.85);"
      >
        <!-- Left: Album Info & Location -->
        <div class="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2 sm:mr-4">
          <span
            :class="[
              'px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-extrabold capitalize tracking-wider shrink-0 border',
              currentPhoto.sectorBadgeClass
            ]"
          >
            {{ currentPhoto.sector }}
          </span>
          <div class="min-w-0 flex-1">
            <h2 class="font-['Livvic'] text-xs sm:text-base md:text-xl font-extrabold text-white leading-tight truncate">
              {{ currentPhoto.albumTitle }}
            </h2>
            <div class="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-300 truncate mt-0.5">
              <span class="flex items-center gap-1 shrink-0">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="text-[#129C48] text-[10px]" />
                <span class="truncate max-w-[130px] sm:max-w-none">{{ currentPhoto.location }}</span>
              </span>
              <span class="text-gray-400 shrink-0">•</span>
              <span class="text-gray-400 shrink-0">{{ currentPhoto.date }}</span>
              <span class="text-gray-400 md:hidden shrink-0">•</span>
              <span class="text-[#F2CB00] font-semibold md:hidden shrink-0">
                {{ activePhotoIndex + 1 }}/{{ lightboxPhotos.length }}
              </span>
            </div>
          </div>
        </div>

        <!-- Center: Photo Count Pill (Desktop) -->
        <div class="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-['Montserrat'] font-medium text-gray-200 shrink-0">
          <font-awesome-icon :icon="['fas', 'camera']" class="text-[#F2CB00]" />
          <span>Photo {{ activePhotoIndex + 1 }} of {{ lightboxPhotos.length }}</span>
        </div>

        <!-- Right Controls: Auto-Slideshow, Close -->
        <div class="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <!-- Auto Slideshow Toggle -->
          <button
            @click="toggleSlideshow"
            :class="[
              'w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border flex items-center justify-center gap-1.5',
              isSlideshowActive
                ? 'bg-[#129C48] text-white border-green-400 shadow-lg shadow-green-900/50'
                : 'bg-white/10 text-gray-300 border-white/15 hover:text-white hover:bg-white/20'
            ]"
            :title="isSlideshowActive ? 'Pause Slideshow' : 'Play Slideshow'"
            :aria-label="isSlideshowActive ? 'Pause Slideshow' : 'Play Slideshow'"
          >
            <font-awesome-icon :icon="isSlideshowActive ? ['fas', 'pause'] : ['fas', 'play']" class="text-[10px]" />
            <span class="hidden sm:inline">{{ isSlideshowActive ? 'Pause' : 'Slideshow' }}</span>
          </button>

          <!-- Close Lightbox Button -->
          <button
            @click="closeLightbox"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/15 shrink-0"
            aria-label="Close gallery lightbox"
          >
            <font-awesome-icon :icon="['fas', 'times']" class="text-sm sm:text-base" />
          </button>
        </div>
      </header>

      <!-- Main Full-Screen Photo Stage -->
      <div
        class="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Previous Photo Button -->
        <button
          @click="prevPhoto"
          class="absolute left-2 sm:left-6 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#F2CB00] text-white hover:text-black flex items-center justify-center transition-all duration-200 border border-white/20 shadow-2xl cursor-pointer"
          aria-label="Previous photo"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-sm sm:text-lg" />
        </button>

        <!-- Current Active High-Resolution Photo (Smooth Cross-Fade Stage Matching OurOfferings) -->
        <div class="relative w-full h-full flex items-center justify-center">
          <transition name="fade-bg">
            <div
              :key="currentPhoto.url"
              class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <div class="pointer-events-auto flex flex-col items-center">
                <img
                  :src="currentPhoto.url"
                  :alt="currentPhoto.title"
                  class="max-h-[52vh] sm:max-h-[66vh] md:max-h-[72vh] w-auto max-w-[96vw] sm:max-w-[94vw] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10"
                />

                <!-- Floating Photo Caption Bar -->
                <div
                  class="mt-2.5 sm:mt-3 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-white/15 max-w-xl mx-2 text-center shadow-xl"
                  style="background-color: rgba(14, 22, 16, 0.85); backdrop-filter: blur(12px);"
                >
                  <div class="text-xs sm:text-base font-bold font-['Livvic'] text-white line-clamp-1 sm:line-clamp-none">
                    {{ currentPhoto.title }}
                  </div>
                  <div class="text-[11px] sm:text-xs text-gray-300 font-light mt-0.5 line-clamp-2 sm:line-clamp-none">
                    {{ currentPhoto.caption }}
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Next Photo Button -->
        <button
          @click="nextPhoto"
          class="absolute right-2 sm:right-6 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#F2CB00] text-white hover:text-black flex items-center justify-center transition-all duration-200 border border-white/20 shadow-2xl cursor-pointer"
          aria-label="Next photo"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-sm sm:text-lg" />
        </button>
      </div>

      <!-- Bottom Filmstrip Thumbnails Navigation -->
      <footer
        class="relative z-30 w-full px-2.5 sm:px-8 py-2 sm:py-3 flex items-center justify-between border-t border-white/10"
        style="background-color: rgba(10, 16, 11, 0.9);"
      >
        <!-- Album Navigation Selector (only shown when browsing a specific album) -->
        <div v-if="lightboxContext === 'album'" class="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            @click="prevAlbum"
            class="w-8 h-8 sm:w-auto px-0 sm:px-2.5 py-0 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer border border-white/15 flex items-center justify-center sm:gap-1.5"
            title="Previous Album"
            aria-label="Previous Album"
          >
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-[10px]" />
            <span class="hidden sm:inline">Prev Album</span>
          </button>
          <button
            @click="nextAlbum"
            class="w-8 h-8 sm:w-auto px-0 sm:px-2.5 py-0 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer border border-white/15 flex items-center justify-center sm:gap-1.5"
            title="Next Album"
            aria-label="Next Album"
          >
            <span class="hidden sm:inline">Next Album</span>
            <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-[10px]" />
          </button>
        </div>

        <!-- Filmstrip Strip (Flexible width, bounded so it never collides or overlaps) -->
        <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto flex-1 min-w-0 mx-1.5 sm:mx-4 py-1.5 px-1.5 sm:px-2 scrollbar-none">
          <button
            v-for="(photo, idx) in lightboxPhotos"
            :key="idx"
            @click="activePhotoIndex = idx"
            :class="[
              'relative h-10 w-14 sm:h-14 sm:w-20 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-200 cursor-pointer shrink-0 border-2',
              activePhotoIndex === idx
                ? 'filmstrip-thumb--active border-[#F2CB00] ring-2 sm:ring-4 ring-[#F2CB00]/40 scale-105'
                : 'border-white/20 opacity-50 hover:opacity-100'
            ]"
            :title="photo.title"
          >
            <img
              :src="photo.url"
              :alt="photo.title"
              class="w-full h-full object-cover"
            />
            <span
              v-if="activePhotoIndex === idx"
              class="absolute bottom-0 inset-x-0 h-1 bg-[#F2CB00]"
            ></span>
          </button>
        </div>

        <!-- Quick Tour CTA (Rolling Hover Effect Matching Our Projects Button) -->
        <div class="shrink-0 pl-1 sm:pl-2">
          <a
            href="/book-farm-visit"
            class="relative inline-flex items-center justify-center px-2.5 sm:px-4 py-1.5 sm:py-2 overflow-hidden rounded-lg sm:rounded-xl bg-[#F2CB00] border border-[#F2CB00] text-black font-extrabold text-xs cursor-pointer group shadow-md shrink-0 transition-shadow hover:shadow-lg"
            title="Book to tour our farms"
          >
            <!-- Normal State: Yellow BG, Black Flag & Black Text -->
            <span
              class="flex items-center justify-center gap-1.5 sm:gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <img
                src="/images/flag.webp"
                alt="Book farm visit"
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0 brightness-0"
              />
              <span class="hidden xl:inline">Book to tour our farms</span>
              <span class="hidden sm:inline xl:hidden text-xs font-bold">Tour Farms</span>
              <span class="sm:hidden text-[11px] font-bold">Tour</span>
            </span>

            <!-- Hover State: Green BG, White Flag & White Text sliding up from bottom -->
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-1.5 sm:gap-2 text-white bg-[#129C48] transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"
            >
              <img
                src="/images/flag.webp"
                alt=""
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0 brightness-0 invert"
              />
              <span class="hidden xl:inline">Book to tour our farms</span>
              <span class="hidden sm:inline xl:hidden text-xs font-bold">Tour Farms</span>
              <span class="sm:hidden text-[11px] font-bold">Tour</span>
            </span>
          </a>
        </div>
      </footer>
    </div>

    <!-- Bottom High-Conversion Trust & Visit Section -->
    <section
      class="relative bg-gray-50 text-gray-900 py-20 px-6 overflow-hidden border-t border-gray-200"
    >
      <!-- Subtle Brand Watermark -->
      <div class="absolute right-0 pointer-events-none top-0 opacity-[0.035]">
        <img class="h-[400px] w-auto" :src="farmGateLogo" alt="" />
      </div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <h2 class="font-['Livvic'] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
          Witness FarmGate Operations <span class="text-[#129C48]">In Person.</span>
        </h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-normal mb-10 leading-relaxed">
          Whether you are an institutional agritech investor, bulk off-taker, or development partner, we welcome you to inspect our verified farming clusters, tilapia cages, and livestock ranches across Ghana.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/book-farm-visit"
            class="relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-[#129C48] border border-[#129C48] cursor-pointer group shadow-xl shadow-green-700/20 hover:shadow-2xl transition-all duration-300"
          >
            <!-- Normal State: Green BG, White Text & White Flag -->
            <span
              class="flex items-center justify-center gap-3 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <img
                src="/images/flag.webp"
                alt="Book to tour our farms"
                class="w-5 h-5 object-contain brightness-0 invert"
              />
              <span class="text-sm sm:text-base font-extrabold text-white">Book to tour our farms</span>
            </span>

            <!-- Hover State: Yellow BG, Black Text & Black Flag (Sliding up from bottom) -->
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-3 text-black transition-transform duration-300 transform translate-y-full bg-[#F2CB00] group-hover:translate-y-0"
            >
              <img
                src="/images/flag.webp"
                alt=""
                class="w-5 h-5 object-contain brightness-0"
              />
              <span class="text-sm sm:text-base font-extrabold text-black">Book to tour our farms</span>
            </span>
          </a>

          <a
            href="/schedule-call"
            class="relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-white border border-gray-300 cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300"
          >
            <!-- Normal State: White BG, Dark Text & Black Call Icon -->
            <span
              class="flex items-center justify-center gap-3 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <img
                src="/images/call.webp"
                alt="Schedule a quick call"
                class="w-5 h-5 object-contain brightness-0"
              />
              <span class="text-sm sm:text-base font-semibold text-gray-800">Schedule a quick call</span>
            </span>

            <!-- Hover State: Green BG, White Text & White Call Icon (Sliding up from bottom) -->
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-3 text-white transition-transform duration-300 transform translate-y-full bg-[#129C48] group-hover:translate-y-0"
            >
              <img
                src="/images/call.webp"
                alt=""
                class="w-5 h-5 object-contain brightness-0 invert"
              />
              <span class="text-sm sm:text-base font-semibold text-white">Schedule a quick call</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ScrollDownPage from "@/components/ScrollDownPage.vue";
import LeafIcon from "@/components/icons/LeafIcon.vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import farmGateLogo from "@/assets/img/FARMGATE PATTERN _GREEN.webp";

// FontAwesome Icons Registration
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFolder,
  faFolderOpen,
  faFilm,
  faPlay,
  faPause,
  faCirclePlay,
  faArrowLeft,
  faArrowRight,
  faTimes,
  faSearch,
  faLocationDot,
  faCalendarDays,
  faCamera,
  faExpand,
  faSeedling,
  faFish,
  faCow,
  faImages,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFolder,
  faFolderOpen,
  faFilm,
  faPlay,
  faPause,
  faCirclePlay,
  faArrowLeft,
  faArrowRight,
  faTimes,
  faSearch,
  faLocationDot,
  faCalendarDays,
  faCamera,
  faExpand,
  faSeedling,
  faFish,
  faCow,
  faImages,
  faChevronLeft,
  faChevronRight
);

// Import existing optimized image assets
import farmPic1 from "@/assets/img/farm-pic1.webp";
import farmPic3 from "@/assets/img/farm-pic3.webp";
import farmPic5 from "@/assets/img/farm-pic5.webp";
import farmPic6 from "@/assets/img/farm-pic6.webp";
import farmPic7 from "@/assets/img/farm-pic7.webp";
import farmPic9 from "@/assets/img/farm-pic9.webp";
import farmPic10 from "@/assets/img/farm-pic10.webp";
import farmCrops from "@/assets/img/farm-crops.webp";
import redOnionFarm from "@/assets/img/red_onion_farm_new.webp";
import pepperFarm from "@/assets/img/pepper-farm.webp";
import womenFarm from "@/assets/img/Women-farm.webp";
import farmIrrigation from "@/assets/img/farm-irrigation.webp";
import cropPlanting from "@/assets/img/crop-planting.webp";
import cassavaHarvest from "@/assets/img/cassava1.webp";
import tractorFleet from "@/assets/img/farm-tractor1.webp";
import riceCrop from "@/assets/img/rice1.webp";
import rice2 from "@/assets/img/rice2.webp";

// Fishery existing assets
import tilapiaFish from "@/assets/img/tilapia_fish_new.webp";
import catfishFish from "@/assets/img/catfish1.webp";

// High-Resolution Cinematic African Farm Aerial Hero Image
const heroBackgroundImage = "/images/gallery/gallery_hero_africa.webp";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.1,
});

// Primary View Mode (Albums / All Photos / Videos)
const activeView = ref("albums"); // 'albums' | 'photos' | 'videos'
const selectedAlbum = ref(null); // When an album folder is opened for deep-dive
const activeVideo = ref(null); // When a video card is clicked for playback

// Sector Navigation Tabs
const sectorTabs = [
  { id: "all", label: "All Sectors", icon: ["fas", "images"] },
  { id: "crop", label: "Crop", icon: ["fas", "seedling"] },
  { id: "fishery", label: "Fishery", icon: ["fas", "fish"] },
  { id: "livestock", label: "Livestock", icon: ["fas", "cow"] }
];

const activeSector = ref("all");
const searchQuery = ref("");

// 10 Curated Visual Field Albums (Merged from Active Projects & Product Offerings)
const fieldAlbums = ref([
  // CROP SECTOR (6 ACTIVE PROJECTS)
  {
    id: "danso-okra-project",
    title: "Danso Community 20-acre Lady's Finger Okra Farming Project",
    sector: "Crop",
    sectorId: "crop",
    location: "Danso, Eastern Region",
    date: "Oct 2026",
    exhibitNo: "01",
    featured: true,
    coverImage: "/images/gallery/danso_okra_harvest.webp",
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    sectorIcon: ["fas", "seedling"],
    photos: [
      {
        url: "/images/gallery/danso_okra_harvest.webp",
        title: "Danso Outgrower Okra Harvest",
        caption: "Outgrower farmers harvesting fresh Lady's Finger okra pods across the 20-acre community block farm.",
        priority: 2
      },
      {
        url: farmCrops,
        title: "Danso 20-Acre Okra Field Overview",
        caption: "Expansive commercial Lady's Finger okra plantation cultivated under the Tullow Agriventure Programme (TAP).",
        priority: 22
      },
      {
        url: "/images/gallery/danso_okra_basket.webp",
        title: "Fresh Okra Field Harvest in Cane Basket",
        caption: "Hand-sorted export-grade tender okra pods harvested early morning for maximum freshness and crispness.",
        priority: 18
      },
      {
        url: cropPlanting,
        title: "Seedbed Propagation & Soil Conditioning",
        caption: "Certified seed germination and furrow soil conditioning prior to scheduled transplanting cycles.",
        priority: 28
      }
    ]
  },
  {
    id: "danso-onion-project",
    title: "15-acre Onion Farming Project at Danso Village",
    sector: "Crop",
    sectorId: "crop",
    location: "Danso Village, Eastern Region",
    date: "Sep 2026",
    exhibitNo: "02",
    featured: true,
    coverImage: "/images/gallery/danso_onion_harvest.webp",
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    sectorIcon: ["fas", "seedling"],
    photos: [
      {
        url: "/images/gallery/danso_onion_harvest.webp",
        title: "Danso Village Red Onion Harvest",
        caption: "Farmers pulling mature purple-red bulb onions with crisp tops from raised drip-irrigated beds.",
        priority: 12
      },
      {
        url: redOnionFarm,
        title: "15-Acre Commercial Onion Plantation",
        caption: "Overview of the 15-acre onion fields at Danso Village equipped with precision drip irrigation lines.",
        priority: 24
      },
      {
        url: farmIrrigation,
        title: "Solar-Powered Drip Irrigation System",
        caption: "Automated water distribution ensuring uniform bulb sizing and high yield density.",
        priority: 29
      },
      {
        url: "/images/gallery/danso_onion_crates.webp",
        title: "Field-Crated Red Onion Harvest",
        caption: "Outgrower farmers loading wooden crates and burlap sacks brimming with freshly harvested purple-red bulb onions.",
        priority: 4
      }
    ]
  },
  {
    id: "asutsuare-rice-project",
    title: "Asutsuare Rice Farm Project",
    sector: "Crop",
    sectorId: "crop",
    location: "Asutsuare, Eastern Region",
    date: "Aug 2026",
    exhibitNo: "03",
    featured: false,
    coverImage: farmPic9,
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    sectorIcon: ["fas", "seedling"],
    photos: [
      {
        url: farmPic9,
        title: "Asutsuare Lowland Paddy Fields",
        caption: "Expansive irrigated rice paddies in Asutsuare utilizing gravity canals for water management.",
        priority: 15
      },
      {
        url: riceCrop,
        title: "Tillering Stage Crop Monitoring",
        caption: "Agronomists surveying uniform tiller development and soil water saturation levels.",
        priority: 31
      },
      {
        url: rice2,
        title: "Canal Irrigation & Water Flow",
        caption: "Perennial irrigation infrastructure sustaining year-round dual-season rice cycles.",
        priority: 32
      },
      {
        url: womenFarm,
        title: "Outgrower Farmer Cooperative",
        caption: "Local outgrower farmers collaborating on certified seed broadcasting and harvest aggregation.",
        priority: 20
      }
    ]
  },
  {
    id: "ahafo-chilli-pepper-project",
    title: "201-acre Chilli Pepper Farming Project at Ahafo",
    sector: "Crop",
    sectorId: "crop",
    location: "Ahafo Region",
    date: "Jul 2026",
    exhibitNo: "04",
    featured: false,
    coverImage: "/images/gallery/ahafo_chilli_harvest.webp",
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    sectorIcon: ["fas", "seedling"],
    photos: [
      {
        url: "/images/gallery/ahafo_chilli_harvest.webp",
        title: "Ahafo 201-Acre Chilli Harvest",
        caption: "Outgrower workforce picking high-pungency red bird's eye chillies across 201 contiguous acres.",
        priority: 13
      },
      {
        url: farmPic1,
        title: "Ahafo Field Agronomy Management",
        caption: "Field officers and lead growers auditing pepper stands under the Tullow Agriventure Programme.",
        priority: 23
      },
      {
        url: pepperFarm,
        title: "Bushy Flowering Pepper Canopy",
        caption: "Dense, high-yielding pepper bushes in Ahafo cultivated under precision integrated pest management.",
        priority: 25
      },
      {
        url: "/images/gallery/ahafo_chilli_crates.webp",
        title: "Field-Aggregated Bird's Eye Chillies",
        caption: "Smiling Ghanaian outgrower farmers with plastic crates and bowls overflowing with freshly picked red chillies.",
        priority: 6
      }
    ]
  },
  {
    id: "topease-cassava-project",
    title: "Topease No. 2 Community 100-acre Block Cassava Farming",
    sector: "Crop",
    sectorId: "crop",
    location: "Topease, Eastern Region",
    date: "Jun 2026",
    exhibitNo: "05",
    featured: false,
    coverImage: "/images/gallery/topease_cassava_harvest.webp",
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    sectorIcon: ["fas", "seedling"],
    photos: [
      {
        url: "/images/gallery/topease_cassava_harvest.webp",
        title: "Topease High-Starch Root Excavation",
        caption: "Community farmers excavating massive high-yield cassava tubers from rich red tropical earth.",
        priority: 8
      },
      {
        url: farmPic3,
        title: "100-Acre Block Cassava Canopy",
        caption: "Expansive contiguous cassava block farm established with certified clean stem cuttings.",
        priority: 26
      },
      {
        url: cassavaHarvest,
        title: "Commercial Tuber Sorting",
        caption: "Sorting high-density tubers bred specifically for industrial starch manufacturing and flour off-take.",
        priority: 27
      },
      {
        url: tractorFleet,
        title: "Farmgate Haulage Transit",
        caption: "Freshly dug tubers loaded onto trucks for transit to industrial processing plants within 24 hours.",
        priority: 30
      }
    ]
  },
  {
    id: "tamale-habanero-project",
    title: "100-acre Habanero & Scotch Bonnet Pepper Farming at Tamale",
    sector: "Crop",
    sectorId: "crop",
    location: "Tamale, Northern Region",
    date: "May 2026",
    exhibitNo: "06",
    featured: false,
    coverImage: "/images/gallery/tamale_habanero_field.webp",
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    sectorIcon: ["fas", "seedling"],
    photos: [
      {
        url: "/images/gallery/tamale_habanero_field.webp",
        title: "Tamale 100-Acre Hot Pepper Plantation",
        caption: "Lush scotch bonnet and habanero pepper bushes bearing abundant ripening fruit under the northern sun.",
        priority: 17
      },
      {
        url: farmPic10,
        title: "Northern Savannah Crop Scouting",
        caption: "Technical monitoring of drip-irrigated commercial pepper acreage in Tamale.",
        priority: 27
      },
      {
        url: "/images/gallery/tamale_scotch_bonnet.webp",
        title: "Heavy-Bearing Scotch Bonnet Shrubs",
        caption: "Ripening bell-shaped yellow and orange scotch bonnet peppers thriving under precision drip lines in Tamale.",
        priority: 19
      },
      {
        url: "/images/gallery/tamale_pepper_sorting.webp",
        title: "Tamale Pepper Harvest Crate Loading",
        caption: "Outgrowers carrying crates filled with prime scotch bonnet and habanero peppers for cold packhouse aggregation.",
        priority: 10
      }
    ]
  },

  // FISHERY SECTOR (3 ACTIVE PROJECTS)
  {
    id: "aveyime-catfish-project",
    title: "150k-cc Catfish Dug-out Pond Farming Project at Aveyime",
    sector: "Fishery",
    sectorId: "fishery",
    location: "Aveyime, Volta Region",
    date: "Oct 2026",
    exhibitNo: "07",
    featured: true,
    coverImage: farmPic6,
    sectorBadgeClass: "bg-teal-700 text-white border-teal-400",
    sectorIcon: ["fas", "fish"],
    photos: [
      {
        url: farmPic6,
        title: "Aveyime 150k-cc Dugout Ponds",
        caption: "Extensive earth dugout ponds engineered for high-density African catfish rearing at Aveyime.",
        priority: 16
      },
      {
        url: catfishFish,
        title: "Juvenile Grow-Out Management",
        caption: "Graded African catfish fed high-protein floating pellets under strict water quality standards.",
        priority: 14
      },
      {
        url: "/images/gallery/catfish_hatchery.webp",
        title: "Fingerling Nursery & Bio-Filtration",
        caption: "Continuous aeration and water management ensuring rapid juvenile growth and high survival rates.",
        priority: 33
      },
      {
        url: "/images/gallery/smoked_catfish_kiln.webp",
        title: "Kiln-Smoked Catfish Value Addition",
        caption: "Hygienic stainless-steel smoking kilns and drying racks producing shelf-stable golden-smoked catfish for national distribution.",
        priority: 9
      }
    ]
  },
  {
    id: "akuse-tilapia-cage-project",
    title: "500k-cc Talipia Cage Farm on the Volta Lake at Akuse",
    sector: "Fishery",
    sectorId: "fishery",
    location: "Akuse, Volta Region",
    date: "Sep 2026",
    exhibitNo: "08",
    featured: false,
    coverImage: farmPic7,
    sectorBadgeClass: "bg-teal-700 text-white border-teal-400",
    sectorIcon: ["fas", "fish"],
    photos: [
      {
        url: farmPic7,
        title: "500k-cc Deep-Water Net Cages at Akuse",
        caption: "Commercial circular tilapia cages anchored in the deep, flowing waters of Volta Lake.",
        priority: 11
      },
      {
        url: "/images/gallery/tilapia_feeding.webp",
        title: "Morning Feeding Protocol",
        caption: "Aquaculture crew feeding active Nile tilapia from sturdy floating cage walkways.",
        priority: 7
      },
      {
        url: "/images/gallery/aquaculture_harvest.webp",
        title: "Live Harvest Lift to Ice Slurry",
        caption: "Lifting fresh, lively tilapia nets directly into chilled transport holds.",
        priority: 21
      },
      {
        url: tilapiaFish,
        title: "Recirculating Concrete Grow-Out Tanks",
        caption: "High-density clean water tank systems ensuring superior water clarity and biosecurity.",
        priority: 34
      }
    ]
  },
  {
    id: "commercial-concrete-aquaculture",
    title: "Commercial Concrete Raceway Aquaculture Hub",
    sector: "Fishery",
    sectorId: "fishery",
    location: "Nsawam & Eastern Region",
    date: "Oct 2026",
    exhibitNo: "09",
    featured: true,
    coverImage: "/images/gallery/Fishery4.webp",
    sectorBadgeClass: "bg-teal-700 text-white border-teal-400",
    sectorIcon: ["fas", "fish"],
    photos: [
      {
        url: "/images/gallery/Fishery4.webp",
        title: "Active Fish Feeding & Aerated Grow-Out Tanks",
        caption: "Aquaculture technicians demonstrating precision feeding schedules and water aeration across concrete grow-out ponds.",
        priority: 1
      },
      {
        url: "/images/gallery/Fishery3.webp",
        title: "Aquaculture Technical Crew & Trainees",
        caption: "Youth and female aquaculture workforce undergoing hands-on biosecurity, tank maintenance, and stock monitoring training.",
        priority: 3
      },
      {
        url: "/images/gallery/Fishery1.webp",
        title: "Multi-Stage Concrete Raceway System",
        caption: "Overhead view of heavy-duty concrete raceways engineered with continuous flow channels and partitioned grow-out sections.",
        priority: 5
      },
      {
        url: "/images/gallery/Fishery2.webp",
        title: "Integrated Fish Farm Ponds & Facility Layout",
        caption: "Eco-balanced aquaculture layout surrounded by lush agricultural land with gravity-assisted water distribution.",
        priority: 7
      }
    ]
  },

  // LIVESTOCK SECTOR (COMMERCIAL SWINE HUSBANDRY)
  {
    id: "commercial-swine-husbandry",
    title: "Commercial Swine Husbandry & Piggery Facility",
    sector: "Livestock",
    sectorId: "livestock",
    location: "Central Region",
    date: "Aug 2026",
    exhibitNo: "10",
    featured: false,
    coverImage: "/images/gallery/swine_piggery_facility.webp",
    sectorBadgeClass: "bg-amber-700 text-white border-amber-400",
    sectorIcon: ["fas", "cow"],
    photos: [
      {
        url: "/images/gallery/swine_piggery_facility.webp",
        title: "Bio-Secure Swine Housing & Piggery Pens",
        caption: "Modern raised concrete piggery facility with superior genetics, bio-secure housing, and regular veterinary monitoring.",
        priority: 23
      },
      {
        url: "/images/gallery/livestock_ranch.webp",
        title: "Piggery Farm Grounds & Perimeter",
        caption: "Surrounding farm perimeter with dedicated water borehole and silage storage.",
        priority: 35
      },
      {
        url: farmPic5,
        title: "Biosecure Feed & Veterinary Inspection",
        caption: "Veterinary officers conducting bi-weekly animal health checks and dietary adjustments.",
        priority: 36
      },
      {
        url: "/images/gallery/swine_piggery_facility.webp",
        title: "Weaner Nutrition & Daily Audit",
        caption: "High-protein feeding program supporting maternal health and vigorous weaner development.",
        priority: 37
      }
    ]
  }
]);

// Field Video Reels
const videoReels = ref([
  {
    id: "vid-okra-irrigation",
    title: "Danso Lady's Finger Okra & Drip Irrigation Operations",
    description: "Walkthrough of our commercial outgrower farming cluster in Danso, Eastern Region, harvesting export-grade Lady's Finger okra under modern drip irrigation.",
    videoUrl: "/videos/danso-okra-irrigation.mp4",
    poster: "/images/gallery/danso_okra_harvest.webp",
    duration: "0:18",
    location: "Danso, Eastern Region",
    sector: "Crop",
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    date: "Oct 2026"
  },
  {
    id: "vid-rice-canals",
    title: "Asutsuare Rice Farm & Canal Water Flow",
    description: "Perennial irrigation and canal flow management sustaining year-round commercial paddy rice operations in Asutsuare under the Tullow Agriventure Programme.",
    videoUrl: "/videos/asutsuare-rice-canals.mp4",
    poster: farmPic9,
    duration: "0:18",
    location: "Asutsuare, Eastern Region",
    sector: "Crop",
    sectorBadgeClass: "bg-[#129C48] text-white border-green-400",
    date: "Sep 2026"
  },
  {
    id: "vid-tilapia-cages",
    title: "Volta Lake Deep-Water Tilapia Cage Infrastructure",
    description: "Sustainable feeding routines and water circulation supporting commercial deep-water cage aquaculture on the Volta Lake at Akuse.",
    videoUrl: "/videos/volta-tilapia-cages.mp4",
    poster: "/images/gallery/Fishery4.webp",
    duration: "0:18",
    location: "Akuse, Volta Region",
    sector: "Fishery",
    sectorBadgeClass: "bg-teal-700 text-white border-teal-400",
    date: "Aug 2026"
  }
]);

// Computed Flat List of All Photos - Sorted by Priority (Showcasing Real Field Work & Fishery at the Top)
const allPhotosList = computed(() => {
  const list = [];
  fieldAlbums.value.forEach((album) => {
    album.photos.forEach((photo, pIdx) => {
      list.push({
        photo,
        album,
        indexInAlbum: pIdx,
        priority: photo.priority ?? 50
      });
    });
  });
  return list.sort((a, b) => a.priority - b.priority);
});

// Filtered Albums computed property
const filteredAlbums = computed(() => {
  return fieldAlbums.value.filter((album) => {
    // Sector filter
    if (activeSector.value !== "all" && album.sectorId !== activeSector.value) {
      return false;
    }
    // Search query filter
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      const matchesTitle = album.title.toLowerCase().includes(q);
      const matchesLocation = album.location.toLowerCase().includes(q);
      const matchesSector = album.sector.toLowerCase().includes(q);
      const matchesPhotos = album.photos.some(
        (p) => p.title.toLowerCase().includes(q) || p.caption.toLowerCase().includes(q)
      );
      if (!matchesTitle && !matchesLocation && !matchesSector && !matchesPhotos) {
        return false;
      }
    }
    return true;
  });
});

// Filtered All Photos computed property
const filteredAllPhotos = computed(() => {
  return allPhotosList.value.filter((item) => {
    if (activeSector.value !== "all" && item.album.sectorId !== activeSector.value) {
      return false;
    }
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      const matchesTitle = item.photo.title.toLowerCase().includes(q);
      const matchesCaption = item.photo.caption.toLowerCase().includes(q);
      const matchesLocation = item.album.location.toLowerCase().includes(q);
      const matchesAlbum = item.album.title.toLowerCase().includes(q);
      if (!matchesTitle && !matchesCaption && !matchesLocation && !matchesAlbum) {
        return false;
      }
    }
    return true;
  });
});

// Sector switching
function setSector(sectorId) {
  activeSector.value = sectorId;
}

function resetFilters() {
  activeSector.value = "all";
  searchQuery.value = "";
}

function openFolder(album) {
  selectedAlbum.value = album;
  preloadAlbumImages(album);
  scrollToGallery();
}

function openVideoPlayer(video) {
  activeVideo.value = video;
}

function scrollToGallery() {
  nextTick(() => {
    const el = document.getElementById("gallery-grid-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// Preload album photos into browser cache to ensure cross-fade transitions are seamless
function preloadAlbumImages(album) {
  if (!album || !album.photos) return;
  album.photos.forEach((p) => {
    if (p && p.url) {
      const img = new Image();
      img.src = p.url;
    }
  });
}

// LIGHTBOX STATE & CONTROLS
const isLightboxOpen = ref(false);
const lightboxContext = ref("album"); // "album" | "allPhotos"
const activeAlbum = ref(null);
const activePhotoIndex = ref(0);
const isSlideshowActive = ref(false);
let slideshowTimer = null;

const lightboxPhotos = computed(() => {
  if (lightboxContext.value === "allPhotos") {
    return filteredAllPhotos.value.map((item) => ({
      url: item.photo.url,
      title: item.photo.title,
      caption: item.photo.caption,
      album: item.album,
      sector: item.album.sector,
      sectorBadgeClass: item.album.sectorBadgeClass,
      location: item.album.location,
      date: item.album.date,
      albumTitle: item.album.title,
    }));
  }
  if (!activeAlbum.value || !activeAlbum.value.photos) return [];
  return activeAlbum.value.photos.map((p) => ({
    url: p.url,
    title: p.title,
    caption: p.caption,
    album: activeAlbum.value,
    sector: activeAlbum.value.sector,
    sectorBadgeClass: activeAlbum.value.sectorBadgeClass,
    location: activeAlbum.value.location,
    date: activeAlbum.value.date,
    albumTitle: activeAlbum.value.title,
  }));
});

const currentPhoto = computed(() => {
  const list = lightboxPhotos.value;
  if (!list || !list.length) {
    return {
      url: "",
      title: "",
      caption: "",
      albumTitle: "",
      sector: "",
      sectorBadgeClass: "",
      location: "",
      date: "",
    };
  }
  return list[activePhotoIndex.value] || list[0];
});

function preloadStreamImages(centerIdx) {
  const list = filteredAllPhotos.value;
  if (!list.length) return;
  for (let offset = -2; offset <= 4; offset++) {
    const i = (centerIdx + offset + list.length) % list.length;
    if (list[i]?.photo?.url) {
      const img = new Image();
      img.src = list[i].photo.url;
    }
  }
}

function startAlbumSlideshow(album) {
  lightboxContext.value = "album";
  activeAlbum.value = album;
  activePhotoIndex.value = 0;
  preloadAlbumImages(album);
  isLightboxOpen.value = true;
  document.body.style.overflow = "hidden";
  startSlideshow();
}

function openAlbumLightbox(album, photoIdx = 0) {
  lightboxContext.value = "album";
  activeAlbum.value = album;
  activePhotoIndex.value = photoIdx;
  preloadAlbumImages(album);
  isLightboxOpen.value = true;
  stopSlideshow();
  document.body.style.overflow = "hidden";
}

function openDirectPhotoLightbox(photoIdx = 0) {
  lightboxContext.value = "allPhotos";
  activeAlbum.value = null;
  activePhotoIndex.value = typeof photoIdx === "number" ? photoIdx : 0;
  isLightboxOpen.value = true;
  stopSlideshow();
  document.body.style.overflow = "hidden";
  preloadStreamImages(activePhotoIndex.value);
}

function closeLightbox() {
  isLightboxOpen.value = false;
  lightboxContext.value = "album";
  activeAlbum.value = null;
  activePhotoIndex.value = 0;
  stopSlideshow();
  document.body.style.overflow = "";
}

// Keep active filmstrip thumbnail centered into view on mobile & desktop
watch(activePhotoIndex, () => {
  nextTick(() => {
    const activeThumb = document.querySelector(".filmstrip-thumb--active");
    if (activeThumb && typeof activeThumb.scrollIntoView === "function") {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  });
});

function nextPhoto() {
  const total = lightboxPhotos.value.length;
  if (!total) return;
  activePhotoIndex.value = (activePhotoIndex.value + 1) % total;
  if (lightboxContext.value === "allPhotos") {
    preloadStreamImages(activePhotoIndex.value);
  }
}

function prevPhoto() {
  const total = lightboxPhotos.value.length;
  if (!total) return;
  activePhotoIndex.value = (activePhotoIndex.value - 1 + total) % total;
  if (lightboxContext.value === "allPhotos") {
    preloadStreamImages(activePhotoIndex.value);
  }
}

function nextAlbum() {
  if (lightboxContext.value !== "album" || !activeAlbum.value) return;
  const currentAlbumIdx = filteredAlbums.value.findIndex((a) => a.id === activeAlbum.value.id);
  if (currentAlbumIdx === -1) return;
  const nextIdx = (currentAlbumIdx + 1) % filteredAlbums.value.length;
  activeAlbum.value = filteredAlbums.value[nextIdx];
  activePhotoIndex.value = 0;
  preloadAlbumImages(activeAlbum.value);
}

function prevAlbum() {
  if (lightboxContext.value !== "album" || !activeAlbum.value) return;
  const currentAlbumIdx = filteredAlbums.value.findIndex((a) => a.id === activeAlbum.value.id);
  if (currentAlbumIdx === -1) return;
  const prevIdx = (currentAlbumIdx - 1 + filteredAlbums.value.length) % filteredAlbums.value.length;
  activeAlbum.value = filteredAlbums.value[prevIdx];
  activePhotoIndex.value = 0;
  preloadAlbumImages(activeAlbum.value);
}

// Slideshow
function toggleSlideshow() {
  if (isSlideshowActive.value) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function startSlideshow() {
  isSlideshowActive.value = true;
  slideshowTimer = setInterval(() => {
    nextPhoto();
  }, 3200);
}

function stopSlideshow() {
  isSlideshowActive.value = false;
  if (slideshowTimer) {
    clearInterval(slideshowTimer);
    slideshowTimer = null;
  }
}

// Keyboard navigation
function handleKeydown(event) {
  if (event.key === "Escape") {
    if (activeVideo.value) {
      activeVideo.value = null;
      return;
    }
    if (isLightboxOpen.value) {
      closeLightbox();
      return;
    }
    if (selectedAlbum.value) {
      selectedAlbum.value = null;
      return;
    }
  }

  if (!isLightboxOpen.value) return;
  if (event.key === "ArrowRight") {
    nextPhoto();
  } else if (event.key === "ArrowLeft") {
    prevPhoto();
  } else if (event.key === " ") {
    event.preventDefault();
    toggleSlideshow();
  }
}

// Touch swipe gestures
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) {
    nextPhoto(); // swiped left
  } else if (touchEndX - touchStartX > 50) {
    prevPhoto(); // swiped right
  }
}

// Hide floating WhatsApp button & prevent scrolling when modal/lightbox is open
watch([isLightboxOpen, activeVideo], ([lightbox, video]) => {
  if (lightbox || video) {
    document.body.classList.add("lightbox-open");
    document.body.style.overflow = "hidden";
  } else {
    document.body.classList.remove("lightbox-open");
    document.body.style.overflow = "";
  }
});

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  // Preload initial gallery images into browser cache so transitions never flash or wait for decoding
  if (fieldAlbums && fieldAlbums.length) {
    preloadAlbumImages(fieldAlbums[0]);
    if (fieldAlbums[1]) preloadAlbumImages(fieldAlbums[1]);
  }
  const api = initScrollReveal();
  if (api) {
    api.reveal(".reveal-fade", { ...revealEffects.fade, duration: 900 });
    api.reveal(".reveal-slide-up", { ...revealEffects.slideUp, duration: 800 });
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  stopSlideshow();
  document.body.classList.remove("lightbox-open");
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* ======================================================== */
/* FOLDER CONTAINER & SPREADING / FAN-OUT ANIMATIONS        */
/* ======================================================== */

/* Resting / peeking-out positions of photos inside folder */
.folder-photo--left {
  transform: translate(-14px, -18px) rotate(-7deg);
  z-index: 1;
}

.folder-photo--right {
  transform: translate(14px, -16px) rotate(8deg);
  z-index: 2;
}

.folder-photo--center {
  transform: translate(0, -26px) rotate(-1deg);
  z-index: 3;
}

.folder-photo--front {
  transform: translate(0, 4px) rotate(0deg);
  z-index: 10;
}

/* Hover State: Photos Fan Out / Spread with Smooth Physics */
.folder-card:hover .folder-photo--left {
  transform: translate(-34px, -30px) rotate(-15deg) scale(0.96);
  box-shadow: 0 16px 30px -8px rgba(0, 0, 0, 0.22);
}

.folder-card:hover .folder-photo--right {
  transform: translate(34px, -28px) rotate(15deg) scale(0.96);
  box-shadow: 0 16px 30px -8px rgba(0, 0, 0, 0.22);
}

.folder-card:hover .folder-photo--center {
  transform: translate(0, -42px) rotate(0deg) scale(1.04);
  box-shadow: 0 20px 35px -8px rgba(0, 0, 0, 0.25);
}

.folder-card:hover .folder-photo--front {
  transform: translate(0, 0) scale(1.02);
  box-shadow: 0 25px 45px -12px rgba(18, 156, 72, 0.22);
}

/* Smooth Cross-Fade Transition (matching OurOfferings.vue) */
.fade-bg-enter-active {
  transition: opacity 0.6s ease-out;
  z-index: 10;
}

.fade-bg-leave-active {
  transition: opacity 0.6s ease-in;
  z-index: 1;
}

.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

/* Lightbox entrance animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}

/* Scrollbar hide */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Prevent iOS Safari auto-zooming on focus by enforcing 16px font-size on mobile viewports */
@media screen and (max-width: 768px) {
  .gallery-search-input,
  input.gallery-search-input {
    font-size: 16px !important;
  }
}
</style>
