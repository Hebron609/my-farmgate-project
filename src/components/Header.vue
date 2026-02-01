<template>
  <div class="relative w-full">
    <!-- Header -->
    <div
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-0 sm:py-2' : 'py-2',
        isScrolled ? 'bg-[rgb(3,89,37)] shadow-md' : 'bg-transparent',
      ]"
    >
      <nav
        :class="[
          'text-white flex flex-col sm:flex-row sm:justify-between items-center sm:items-start max-w-[1900px] mx-auto font-montserrat px-6 sm:px-8',
          isScrolled ? 'pt-4 pb-0 sm:pb-0' : 'pt-4 pb-6 sm:pb-0',
        ]"
      >
        <!-- Mobile: Navigation row (conditional for video variants) -->
        <div class="flex items-start justify-between w-full mb-4 sm:hidden">
          <div v-if="videoVariant === 2" class="flex items-center h-[50px]">
            <a href="/">
              <img
                :src="isScrolled ? logoWhite1 : logoWhite2"
                alt="FarmGate Africa Logo"
                :class="[
                  'object-contain',
                  isScrolled ? 'w-[130px] h-[130px]' : 'w-[65px] h-[65px]',
                ]"
              />
            </a>
          </div>
          <div v-else class="flex items-start h-[50px]">
            <a
              href="/marketplace.html"
              class="flex group relative overflow-hidden px-3 py-1.5 backdrop-blur-md bg-[rgb(253,250,250)] rounded-4xl items-center cursor-pointer"
            >
              <span
                class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <LeafIcon class="w-4 h-4 text-white" />
                <span class="text-xs font-semibold leading-none text-white"
                  >Marketplace</span
                >
              </span>

              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
              >
                <LeafIcon class="w-4 h-4 text-black" />
                <span class="text-xs font-semibold leading-none"
                  >Marketplace</span
                >
              </span>
            </a>
          </div>

          <div class="flex items-center gap-3">
            <div v-if="videoVariant !== 2" class="relative flex items-center">
              <!-- Search icon -->
              <button
                @click="toggleSearch"
                class="flex items-center justify-center p-2 transition-all rounded-full cursor-pointer bg-white/25 backdrop-blur-md hover:bg-yellow-400 hover:text-black"
              >
                <font-awesome-icon
                  :icon="['fas', 'search']"
                  class="text-base text-white"
                />
              </button>

              <!-- Expanding search box (Mobile) -->
              <transition name="slide">
                <div
                  v-if="isSearchOpen"
                  class="fixed flex items-center px-4 py-3 border shadow-2xl left-4 right-4 top-32 bg-white/20 backdrop-blur-xl rounded-2xl border-white/30 focus-within:ring-2 focus-within:ring-yellow-400 sm:hidden"
                >
                  <font-awesome-icon
                    :icon="['fas', 'search']"
                    class="mr-2 text-sm text-white/90"
                  />
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Type to search..."
                    class="w-full text-sm text-white bg-transparent placeholder-white/70 focus:outline-none"
                  />
                  <button
                    @click="toggleSearch"
                    class="ml-2 text-white/70 hover:text-white"
                  >
                    &times;
                  </button>
                </div>
              </transition>

              <!-- Suggestions Dropdown (Mobile) -->
              <transition name="fade">
                <ul
                  v-if="isSearchOpen && searchQuery"
                  class="fixed overflow-hidden border shadow-2xl left-4 right-4 top-48 bg-white/25 backdrop-blur-2xl rounded-2xl border-white/30 sm:hidden"
                >
                  <li
                    v-for="item in filteredSuggestions"
                    :key="item"
                    @click="selectSuggestion(item)"
                    class="px-6 py-4 text-sm text-white transition-all cursor-pointer hover:bg-yellow-400 hover:text-black"
                  >
                    {{ item }}
                  </li>

                  <li
                    v-if="filteredSuggestions.length === 0"
                    class="px-6 py-4 text-sm text-white/80"
                  >
                    No results…
                  </li>
                </ul>
              </transition>
            </div>

            <a
              v-if="videoVariant === 2"
              href="/marketplace.html"
              class="flex group relative overflow-hidden px-3 py-1.5 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl items-center cursor-pointer"
            >
              <span
                class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
              >
                <LeafIcon class="w-4 h-4 text-white" />
                <span class="text-xs font-semibold leading-none text-white"
                  >Marketplace</span
                >
              </span>

              <span
                class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
              >
                <LeafIcon class="w-4 h-4 text-black" />
                <span class="text-xs font-semibold leading-none"
                  >Marketplace</span
                >
              </span>
            </a>

            <!-- Hamburger -->
            <button
              @click="toggleMenu"
              class="relative w-8 h-8 flex items-center justify-center z-[100] cursor-pointer"
            >
              <div :class="['hamburger', { open: isMenuOpen }]">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Mobile: Dynamic Logo -->
        <a
          v-if="showMobileLogo && videoVariant !== 2"
          href="/"
          class="flex items-center justify-center px-8 py-6 sm:hidden bg-gradient-to-b from-transparent via-white/5 to-transparent"
        >
          <img
            class="object-contain w-[70px] h-[70px]"
            :src="isScrolled ? logoWhite1 : logoWhite2"
            alt="FarmGate Africa Logo"
          />
        </a>

        <!-- Desktop: Logo on left -->
        <a href="/" class="items-start hidden sm:flex">
          <img
            :class="[
              'object-contain transition-all duration-300',
              isScrolled ? 'w-[100px] md:w-[160px]' : 'w-[140px] md:w-[160px]',
            ]"
            :src="isScrolled ? logoWhite1 : logoWhite2"
            alt="Logo"
          />
        </a>

        <!-- Desktop: Right section -->
        <div class="items-start hidden gap-6 sm:flex">
          <!-- SEARCH FEATURE -->
          <div class="relative flex items-center">
            <!-- Search icon -->
            <button
              @click="toggleSearch"
              class="flex items-center justify-center p-2 transition-all rounded-full cursor-pointer bg-white/25 backdrop-blur-md hover:bg-yellow-400 hover:text-black"
            >
              <font-awesome-icon
                :icon="['fas', 'search']"
                class="text-lg text-white"
              />
            </button>

            <!-- Expanding search box -->
            <transition name="slide">
              <div
                v-if="isSearchOpen"
                class="absolute flex items-center px-4 py-2 mt-1 border shadow-2xl right-12 w-38 sm:w-160 bg-white/20 backdrop-blur-xl rounded-2xl border-white/30 focus-within:ring-2 focus-within:ring-yellow-400 hidden:animate-none sm:animate-pulse"
              >
                <font-awesome-icon
                  :icon="['fas', 'search']"
                  class="mr-2 text-sm text-white/90"
                />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Type to search..."
                  class="w-full text-sm text-white bg-transparent placeholder-white/70 focus:outline-none"
                />
              </div>
            </transition>

            <!-- Suggestions Dropdown -->
            <transition name="fade">
              <ul
                v-if="isSearchOpen && searchQuery"
                class="absolute mt-40 overflow-hidden border shadow-2xl right-12 w-38 sm:w-160 bg-white/25 backdrop-blur-2xl rounded-2xl border-white/30"
              >
                <li
                  v-for="item in filteredSuggestions"
                  :key="item"
                  @click="selectSuggestion(item)"
                  class="px-6 py-4 text-sm text-white transition-all cursor-pointer hover:bg-yellow-400 hover:text-black"
                >
                  {{ item }}
                </li>

                <li
                  v-if="filteredSuggestions.length === 0"
                  class="px-6 py-4 text-sm text-white/80"
                >
                  No results…
                </li>
              </ul>
            </transition>
          </div>

          <!-- Marketplace Button -->
          <a
            href="/marketplace.html"
            class="flex group relative overflow-hidden px-4 py-2 backdrop-blur-md bg-[rgba(253,250,250,0.26)] rounded-4xl items-center cursor-pointer"
          >
            <span
              class="flex items-center gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
            >
              <LeafIcon class="text-white" />
              <span class="text-sm font-semibold leading-none text-white"
                >Marketplace</span
              >
            </span>

            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
            >
              <LeafIcon class="text-black" />
              <span class="text-sm font-semibold leading-none"
                >Marketplace</span
              >
            </span>
          </a>

          <!-- Hamburger -->
          <button
            @click="toggleMenu"
            class="relative w-8 h-8 flex items-center justify-center z-[100] cursor-pointer"
          >
            <div :class="['hamburger', { open: isMenuOpen }]">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>
    </div>

    <!-- Overlay Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-50 text-white bg-[#020f28] bg-cover bg-center bg-fixed"
        :style="{ backgroundImage: `url(${patternBg})` }"
      >
        <div
          class="absolute inset-0 bg-[rgba(0,0,0,0.65)] backdrop-blur-sm"
        ></div>

        <!-- Scrollable container -->
        <div
          class="relative flex flex-col lg:flex-row lg:justify-between p-12 max-w-[1820px] mx-auto overflow-y-auto h-full space-y-12 lg:space-y-0 pb-24"
        >
          <!-- Logo -->
          <div class="absolute top-6 left-6">
            <a href="/"
              ><img
                class="w-[75px] sm:w-[100px] h-auto"
                :src="logoWhite2"
                alt="Logo"
            /></a>
          </div>

          <!-- About -->
          <div class="flex-1 mt-20">
            <h3
              class="flex items-center mb-6 text-2xl font-semibold text-[#F2CB00] cursor-pointer"
              @click="toggleSection('about')"
            >
              About Us
              <svg
                width="25"
                height="25"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 transition-transform duration-300"
                :class="{ 'rotate-90': activeSections.about }"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h3>
            <transition name="slide">
              <ul class="space-y-5" v-show="activeSections.about">
                <li>
                  <a
                    href="/about.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Our Story
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>

                <li>
                  <a
                    href="/our-relevance.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Our Relevance
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>
                
                <li>
                  <a
                    href="footprint.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Our Footprint
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>

                <li>
                  <a
                    href="/manifesto.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Our Manifesto
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>

                <li>
                  <a
                    href="/people.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Our People
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>
              </ul>
            </transition>
          </div>

          <!-- Programs -->
          <div class="flex-1 mt-20">
            <h3
              class="flex items-center mb-6 text-2xl font-semibold text-[#F2CB00] cursor-pointer"
              @click="toggleSection('programs')"
            >
              Our Initiatives
              <svg
                width="25"
                height="25"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 transition-transform duration-300"
                :class="{ 'rotate-90': activeSections.programs }"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h3>
            <transition name="slide">
              <ul class="space-y-5" v-show="activeSections.programs">
                <li>
                  <a
                    href="/solutions.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Solutions
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/projects.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Projects
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/our-impact.html"
                    class="relative pb-2 text-xl font-medium group"
                  >
                    Impact
                    <span
                      class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                    ></span>
                  </a>
                </li>
               
              </ul>
            </transition>
          </div>

          <!-- Contact-Us -->
          <div class="flex-1 mt-20">
            <h3 class="mb-6 text-2xl font-semibold text-[#F2CB00]">
              Get in Touch
            </h3>
            <ul class="space-y-5">
              <li>
                <a
                  href="/contact.html"
                  class="relative pb-2 text-xl font-medium group"
                >
                  Contact Us
                  <span
                    class="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="flex-1 mt-20">
            <h3 class="mb-6 text-2xl font-semibold text-[#F2CB00]">
              Connect with us
            </h3>
            <p class="mb-4 font-medium">FarmGate Africa & Industries Ltd</p>

            <!-- Office Location -->
            <div class="flex items-start gap-2 mb-4">
              <!-- Map Icon SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 682.66669 682.66669"
                class="flex-shrink-0 w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                  <g clip-path="url(#clipPath2426)">
                    <g transform="translate(378.6821,256.8721)">
                      <path
                        d="M 0,0 118.318,-75.157 V -237.29 L 0,-162.133 l -123.64,-77.321 -121.724,77.321 -118.318,-75.157 V -75.157 L -245.364,0"
                        stroke="currentColor"
                        stroke-width="30"
                        fill="none"
                      />
                    </g>
                    <g transform="translate(256,494.582)">
                      <path
                        d="m 0,0 c 82.873,0 150.055,-67.183 150.055,-150.056 0,-69.816 -47.681,-128.492 -112.256,-145.25 L 0,-370.906 l -37.801,75.6 c -64.573,16.759 -112.255,75.435 -112.255,145.25 C -150.056,-67.183 -82.874,0 0,0 Z"
                        stroke="currentColor"
                        stroke-width="30"
                        fill="none"
                      />
                    </g>
                    <g transform="translate(256,309.8984)">
                      <path
                        d="M 0,0 C 19.073,0 34.628,15.556 34.628,34.628 34.628,53.701 19.073,69.257 0,69.257 -19.073,69.257 -34.628,53.701 -34.628,34.628 -34.628,15.556 -19.073,0 0,0 Z"
                        stroke="currentColor"
                        stroke-width="30"
                        fill="none"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              <!-- Text block -->
              <div>
                <p class="font-semibold text-white">Office Location:</p>
                <p class="text-gray-300">
                  No. 6 Nii Notes Baale Ave, <br />
                  East Legon, Accra,<br />
                  Greater Accra Region (GA-414-1928)
                </p>
              </div>
            </div>

            <!-- Registered Address -->
            <div class="flex items-start gap-2 mb-4">
              <!-- Registered Address Icon SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="flex-shrink-0 w-5 h-5 text-white"
                fill="currentColor"
              >
                <path
                  d="M496.516,169.574c-0.458-0.458-0.944-0.885-1.457-1.279c-2.223-1.711-21.537-16.577-48.082-36.865V49.055
      c0-8.283-6.715-14.998-14.998-14.998h-63.992c-8.283,0-14.998,6.715-14.998,14.998v11.081
      c-28.25-21.209-54.119-40.348-70.17-51.582c-16.292-11.405-37.347-11.405-53.639,0C177.404,44.794,23.468,163.269,16.94,168.294
      c-0.513,0.395-0.999,0.822-1.457,1.279c-18.322,18.325-18.321,48.138,0.001,66.461c9.162,9.16,21.195,13.74,33.23,13.74
      c5.53,0,11.057-0.98,16.308-2.915V497c0,8.284,6.715,14.999,14.998,14.999h351.958c8.283,0,14.998-6.715,14.998-14.998V246.863
      c16.679,6.143,36.167,2.542,49.538-10.829C514.837,217.713,514.838,187.898,496.516,169.574z M382.985,64.053h33.996v44.498
      c-10.992-8.366-22.475-17.085-33.996-25.802V64.053z M416.981,482.003H280.48l46.885-91.974
      c25.225-21.168,39.621-51.958,39.621-85.005c0-61.199-49.788-110.987-110.987-110.987s-110.987,49.788-110.987,110.987
      c0,33.047,14.397,63.836,39.621,85.005l46.885,91.974H95.019V226.215L256,103.234l160.981,122.98V482.003z M256,463.977
      l-46.077-90.388c-0.982-1.927-2.37-3.619-4.068-4.959c-19.604-15.479-30.846-38.662-30.846-63.605
      c0-44.659,36.332-80.99,80.99-80.99s80.99,36.332,80.99,80.99c0,24.943-11.243,48.126-30.846,63.605
      c-1.698,1.341-3.085,3.033-4.068,4.959L256,463.977z M475.307,214.823c-6.628,6.627-17.413,6.627-24.041,0
      c-1.228-1.227-138.534-105.998-186.16-142.381c-5.375-4.106-12.834-4.106-18.21,0c-47.618,36.377-184.933,141.155-186.16,142.381
      c-6.627,6.627-17.412,6.627-24.04,0.001c-6.432-6.432-6.621-16.781-0.567-23.445c12.91-9.932,161.033-123.799,210.254-158.252
      c5.843-4.09,13.393-4.09,19.236,0c49.219,34.451,197.344,148.319,210.254,158.252
      C481.927,198.043,481.738,208.392,475.307,214.823z"
                />
                <path
                  d="M256,258.03c-25.913,0-46.994,21.081-46.994,46.994s21.081,46.994,46.994,46.994s46.994-21.082,46.994-46.994
      S281.914,258.03,256,258.03z M256,322.022c-9.373,0-16.998-7.625-16.998-16.998s7.625-16.998,16.998-16.998
      s16.998,7.625,16.998,16.998S265.374,322.022,256,322.022z"
                />
              </svg>

              <!-- Text block -->
              <div>
                <p class="font-semibold text-white">Registered Address:</p>
                <p class="text-gray-300">
                  Aveyime Mangoase, Battor, <br />
                  Volta Region (VT-0320-8690)
                </p>
              </div>
            </div>

            <!-- Postal Address -->
            <div class="flex items-start gap-2 mb-4">
              <!-- Postal Address Icon SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1707 1707"
                class="flex-shrink-0 w-5 h-5 text-white"
                fill="currentColor"
              >
                <path
                  d="m1554 1053h-889c-11 0-20-9-20-20v-433c0-132-108-240-241-240-26 0-26-40 0-40h803c202 0 367 164 367 366v347c0 11-9 20-20 20zm-869-40h849v-327c0-180-147-326-327-326h-658c82 49 136 138 136 240z"
                />
                <path
                  d="m665 631h-521c-21 0-20-20-20-31 0-155 126-280 280-280 155 0 281 125 281 280 0 11 1 31-20 31zm-501-40h481c-5-128-111-231-241-231-129 0-235 103-240 231z"
                />
                <path
                  d="m1687 1184h-1543c-11 0-20-9-20-20v-131c0-11 9-20 20-20h1543c11 0 20 9 20 20v131c0 11-9 20-20 20zm-1523-40h1503v-91h-1503z"
                />
                <path
                  d="m665 1184c-11 0-20-9-20-20v-131c0-27 40-26 40 0v131c0 11-9 20-20 20z"
                />
                <path
                  d="m1277 1652h-174c-11 0-20-9-20-20v-468c0-11 9-20 20-20h174c11 0 20 9 20 20v468c0 11-9 20-20 20zm-154-40h134v-428h-134z"
                />
                <path
                  d="m665 1053h-645c-11 0-20-9-20-20v-422c0-11 9-20 20-20h645c11 0 20 9 20 20v422c0 11-9 20-20 20zm-625-40h605v-382h-605z"
                />
                <path
                  d="m378 898c-4 0-8-1-12-4l-358-267c-15-11-7-36 12-36h645c28 0 20 39 20 73 0 6-3 12-8 16l-287 214c-4 3-8 4-12 4zm-298-267 298 222 267-199v-23z"
                />
                <path
                  d="m1399 1652h-417c-27 0-27-40 0-40h417c26 0 26 40 0 40z"
                />
                <path
                  d="m1554 941h-889c-26 0-26-40 0-40h889c26 0 26 40 0 40z"
                />
                <path
                  d="m1122 461c-11 0-20-9-20-20v-366c0-27 40-27 40 0v366c0 12-9 20-20 20z"
                />
                <path
                  d="m1342 270h-220c-11 0-20-9-20-20v-175c0-11 9-20 20-20h220c11 0 20 9 20 20v175c0 11-9 20-20 20zm-200-40h180v-135h-180z"
                />
                <path
                  d="m1122 605c-50 0-92-41-92-92 0-50 42-92 92-92 121 0 121 184 0 184zm0-144c-68 0-68 104 0 104 69 0 69-104 0-104z"
                />
              </svg>

              <!-- Text block -->
              <div>
                <p class="font-semibold text-white">Postal Address:</p>
                <p class="text-gray-300">
                  P. O. Box 2186, Adenta - Accra,<br />
                  Ghana, West Africa
                </p>
              </div>
            </div>
            <!-- Telephone Info (Landline) -->
            <div class="flex items-center gap-2 mb-4">
              <!-- Custom Telephone SVG -->
              <svg
                id="Layer_1"
                enable-background="new 0 0 48 48"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="flex-shrink-0 text-white"
                fill="currentColor"
              >
                <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)">
                  <g fill="currentColor">
                    <path
                      d="m4.7 18h8.8c1.1 0 2.2-.4 3-1.2s1.2-1.8 1.2-3v-1.5c.7-.5 2.8-1.4 6.2-1.4 3.5 0 5.6.9 6.2 1.3v1.6c0 1.1.4 2.2 1.2 3s1.9 1.2 3 1.2h8.8c1.1 0 2.2-.4 3-1.2s1.2-1.8 1.2-3v-2c0-3.4-2.7-6.5-7.7-8.6-4.1-1.7-9.7-2.7-15.6-2.7-9.2 0-17.3 2.3-21.1 6.1-1.6 1.6-2.4 3.4-2.4 5.3v2c0 2.2 1.9 4.1 4.2 4.1zm-1.2-6.2c0-1 .5-2.1 1.5-3.1 3.2-3.1 10.8-5.2 19-5.2 5.5 0 10.7.9 14.6 2.5 3.7 1.6 5.9 3.7 5.9 5.8v2c0 .3-.1.6-.4.8-.2.2-.5.4-.9.4h-8.8c-.3 0-.6-.1-.9-.4-.2-.2-.4-.5-.4-.8v-1.9c0-2.3-4-4-9.2-4-3.7 0-7 .9-8.4 2.3-.6.6-.8 1.2-.8 1.6v1.9c0 .3-.1.6-.4.8-.2.2-.5.4-.9.4h-8.7c-.7 0-1.2-.5-1.2-1.2z"
                    />
                    <path
                      d="m17.9 18.3c-.8 0-1.5.7-1.5 1.5v1.3h-7.2c-.7 0-1.2.4-1.4 1.1l-5.4 17.6c-.6 1.8-.4 3.7.7 5.3s2.9 2.5 4.8 2.5h32c1.9 0 3.7-.9 4.8-2.5 1.1-1.5 1.4-3.5.8-5.2l-5.3-17.6c-.2-.6-.8-1.1-1.4-1.1h-7.2v-1.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v1.3h-9.2v-1.3c0-.9-.7-1.6-1.5-1.6zm24.8 22.4c.3.9.2 1.8-.4 2.5-.6.8-1.4 1.2-2.4 1.2h-31.9c-1 0-1.8-.4-2.4-1.2-.5-.7-.7-1.7-.3-2.6l5-16.5h27.4z"
                    />
                    <path
                      d="m19.6 28.5c0-.1-.1-.2-.1-.3-.1-.1-.1-.2-.2-.2-.3-.4-.9-.5-1.3-.4-.1 0-.2 0-.3.1-.1 0-.2.1-.3.1s-.2.1-.2.2c-.1.1-.1.1-.2.2 0 .1-.1 .2-.1 .3s-.1 .2-.1 .3v.3c0 .2 0 .4.1 .6s.2 .3.3 .5c.3 .3.7 .4 1.1 .4s.8-.2 1.1-.4c.1-.1.2-.3.3-.5s.1-.4.1-.6c0-.1 0-.2 0-.3-.1-.1-.2-.2-.2-.3z"
                    />
                    <path
                      d="m25.4 28.5c0-.1-.1-.2-.1-.3s-.1-.2-.2-.2c-.4-.4-.9-.5-1.4-.4-.1 0-.2 0-.3 .1-.1 0-.2 .1-.3 .1s-.2 .1-.2 .2c-.1 .1-.1 .1-.2 .2 0 .1-.1 .2-.1 .3s-.1 .2-.1 .3v.3c0 .2 0 .4.1 .6s.2 .3.3 .5c.3 .3.7 .4 1.1 .4s.8-.2 1.1-.4c.1-.1.2-.3.3-.5s.1-.4.1-.6c0-.1 0-.2 0-.3-.1-.1-.1-.2-.1-.3z"
                    />
                    <path
                      d="m29.5 27.6c-.1 0-.2 0-.3 .1-.1 0-.2 .1-.3 .1s-.2 .1-.2 .2c-.3 .3-.4 .7-.4 1.1 0 .2 0 .4.1 .6s.2 .3.3 .5c.3 .3.7 .4 1.1 .4.2 0 .4 0 .6-.1s.3-.2.5-.3c.1-.1.3-.3.3-.5.1-.2.1-.4.1-.6 0-.4-.2-.8-.4-1.1-.1-.1-.1-.1-.2-.2s-.2-.1-.3-.1-.2-.1-.3-.1c-.2-.1-.4-.1-.6 0z"
                    />
                    <path
                      d="m19.6 33.8c0-.1-.1-.2-.1-.3-.1-.1-.1-.2-.2-.2-.3-.3-.9-.5-1.3-.4-.1 0-.2 .1-.3 .1s-.2 .1-.3 .1-.2 .1-.2 .2c-.1 .1-.1 .2-.2 .2 0 .1-.1 .2-.1 .3s-.1 .2-.1 .3v.3c0 .4.2 .8.4 1.1.3 .3.7 .4 1.1 .4s.8-.2 1.1-.4c.3-.3.4-.7.4-1.1 0-.1 0-.2 0-.3-.1-.2-.2-.2-.2-.3z"
                    />
                    <path
                      d="m25.4 33.8c0-.1-.1-.2-.1-.3s-.1-.2-.2-.2c-.4-.3-.9-.5-1.4-.4-.1 0-.2 .1-.3 .1s-.2 .1-.3 .1-.2 .1-.2 .2c-.3 .3-.4 .7-.4 1.1s.2 .8.4 1.1c.3 .3.7 .4 1.1 .4s.8-.2 1.1-.4c.3-.3.4-.7.4-1.1 0-.1 0-.2 0-.3-.1-.2-.1-.2-.1-.3z"
                    />
                    <path
                      d="m31.2 33.8c0-.1-.1-.2-.1-.3s-.1-.2-.2-.2c-.1-.1-.1-.1-.2-.2-.1 0-.2-.1-.3-.1s-.2-.1-.3-.1c-.2 0-.4 0-.6 0-.1 0-.2 .1-.3 .1s-.2 .1-.3 .1c-.1 .1-.2 .1-.2 .2-.3 .3-.4 .7-.4 1.1s.2 .8.4 1.1c.3 .3.7 .4 1.1 .4.2 0 .4 0 .6-.1s.3-.2.5-.3c.3-.3.4-.7.4-1.1 0-.1 0-.2 0-.3-.1-.2-.1-.2-.1-.3z"
                    />
                    <path
                      d="m19.6 39c0-.1-.1-.2-.1-.3-.1-.1-.1-.2-.2-.2-.3-.3-.9-.5-1.3-.4-.1 0-.2 0-.3 .1-.1 0-.2 .1-.3 .1-.1 .1-.2 .1-.2 .2s-.2 .2-.2 .3-.1 .2-.1 .3-.1 .2-.1 .3v.3c0 .4.2 .8.4 1.1.1 .1.3 .3.5 .3.2 .1.4 .1.6 .1.4 0 .8-.1 1.1-.4s.4-.7.4-1.1c0-.1 0-.2 0-.3-.1-.2-.2-.3-.2-.4z"
                    />
                    <path
                      d="m25.4 39c0-.1-.1-.2-.1-.3s-.1-.2-.2-.2-.2-.1-.2-.2c-.1 0-.2-.1-.3-.1s-.2-.1-.3-.1c-.2 0-.4 0-.6 0-.1 0-.2 0-.3 .1-.1 0-.2 .1-.3 .1-.1 .1-.2 .1-.2 .2-.3 .3-.4 .7-.4 1.1s.2 .8.4 1.1c.3 .3.7 .4 1.1 .4s.8-.1 1.1-.4c.1-.1.2-.3.3-.5s.1-.4.1-.6c0-.1 0-.2 0-.3-.1-.1-.1-.2-.1-.3z"
                    />
                    <path
                      d="m31.2 39c0-.1-.1-.2-.1-.3s-.1-.2-.2-.2c-.1-.1-.1-.1-.2-.2-.1 0-.2-.1-.3-.1s-.2-.1-.3-.1c-.2 0-.4 0-.6 0-.1 0-.2 0-.3 .1-.1 0-.2 .1-.3 .1-.1 .1-.2 .1-.2 .2-.3 .3-.4 .7-.4 1.1 0 .2 0 .4.1 .6s.2 .3.3 .5c.3 .3.7 .4 1.1 .4.2 0 .4 0 .6-.1s.3-.2.5-.3c.1-.1.3-.3.3-.5.1-.2.1-.4.1-.6 0-.1 0-.2 0-.3-.1-.1-.1-.2-.1-.3z"
                    />
                  </g>
                </g>
              </svg>

              <p class="text-gray-300">+233 30 398 0443</p>
            </div>

            <!-- Telephone Info (Mobile) -->
            <div class="flex items-center gap-2 mb-4">
              <!-- Custom Phone SVG -->
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512.076 512.076"
                xml:space="preserve"
                width="20"
                height="20"
                class="flex-shrink-0 text-white"
                fill="currentColor"
              >
                <g transform="translate(-1 -1)">
                  <g>
                    <g>
                      <path
                        d="M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818
            c-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453
            l-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646
            C109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539
            c-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92
            c13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315
            C517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173
            c-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061
            l43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579
            l-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379
            c49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801
            c4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z"
                        fill="currentColor"
                      />
                      <path
                        d="M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533
            c-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z"
                        fill="currentColor"
                      />
                      <path
                        d="M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533
            c4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533
            S286.448,137.59,291.161,137.59z"
                        fill="currentColor"
                      />
                      <path
                        d="M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533
            c-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              <p class="text-gray-300">+233 50 330 1132</p>
            </div>

            <!-- Email Info -->
            <div class="flex items-center gap-2 mb-4">
              <!-- Custom Envelope SVG -->
              <svg
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="flex-shrink-0 text-white"
                fill="currentColor"
              >
                <g transform="matrix(1,0,0,1,0,0)">
                  <path
                    d="m499.509 83.651-.006-.007-.012-.01a40.863 40.863 0 0 0 -28.6-11.583h-429.781a40.87 40.87 0 0 0 -28.367 11.36l-.014.013-.008.007-.005.005-.009.01a40.719 40.719 0 0 0 -12.707 29.712v285.685a41.136 41.136 0 0 0 41.11 41.11h429.779a41.135 41.135 0 0 0 41.111-41.11v-285.685a40.768 40.768 0 0 0 -12.491-29.507zm-170.6 172.073 162.318-150.58a21.813 21.813 0 0 1 1.508 8.014v285.685a21.8 21.8 0 0 1 -1.5 7.969zm141.98-164.417a21.924 21.924 0 0 1 6.025.849l-220.746 204.782-116.55-108.117-104.258-96.734a21.942 21.942 0 0 1 5.75-.78zm-450.133 315.506a21.837 21.837 0 0 1 -1.5-7.97v-285.685a21.808 21.808 0 0 1 1.6-8.251l105.662 98.033 56.732 52.627zm20.354 13.88a21.871 21.871 0 0 1 -6.07-.862l162.369-151.131 52.21 48.433a9.632 9.632 0 0 0 13.1 0l52.038-48.275 162.2 150.974a21.91 21.91 0 0 1 -6.071.861z"
                    fill="currentColor"
                  />
                </g>
              </svg>

              <p class="text-gray-300">connect@farmgate.africa</p>
            </div>
          </div>

          <!-- Close -->
          <button
            @click="toggleMenu"
            class="absolute text-3xl cursor-pointer top-6 right-6 lg:text-5xl hover:text-yellow-400"
          >
            &times;
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import LeafIcon from "./icons/LeafIcon.vue";
import patternBg from "@/assets/img/pattern-bg1.webp";
import logoWhite1 from "@/assets/img/fg logo-white1.png";
import logoWhite2 from "@/assets/img/fg logo-white2.png";

const props = defineProps({
  showMobileLogo: {
    type: Boolean,
    default: true,
  },
  videoVariant: {
    type: Number,
    default: 1,
  },
});

/* Scroll */
const isScrolled = ref(false);
const handleScroll = () => (isScrolled.value = window.scrollY > 20);
onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

/* Menu */
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
  if (open) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
});

/* Menu Sections */
const activeSections = ref({
  home: false,
  about: false,
  programs: false,
  contact: false,
});

const toggleSection = (section) => {
  activeSections.value[section] = !activeSections.value[section];
};

/* Search */
const isSearchOpen = ref(false);
const searchQuery = ref("");
const suggestions = ref([
  "Our Story",
  "Our Services",
  "Marketplace",
  "Our Relevance",
  "Our Impact",
  "Projects",
  "Our People",
  "Manifesto",
]);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) searchQuery.value = "";
};

const filteredSuggestions = computed(() =>
  suggestions.value.filter((s) =>
    s.toLowerCase().includes(searchQuery.value.toLowerCase()),
  ),
);

const selectSuggestion = (item) => {
  searchQuery.value = item;
  isSearchOpen.value = false;
  const i = item.toLowerCase();
  if (i.includes("story")) window.location.href = "/about.html";
  else if (i.includes("service")) window.location.href = "/solutions.html";
  else if (i.includes("market")) window.location.href = "/marketplace.html";
  else if (i.includes("relevance"))
    window.location.href = "/our-relevance.html";
  else if (i.includes("impact")) window.location.href = "/our-impact.html";
  else if (i.includes("projects")) window.location.href = "/projects.html";
  else if (i.includes("people")) window.location.href = "/people.html";
  else if (i.includes("manifesto")) window.location.href = "/manifesto.html";
};
</script>

<style scoped>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Hamburger styles */
.hamburger {
  width: 26px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hamburger span {
  height: 3px;
  background: white;
  border-radius: 3px;
  transition:
    transform 0.35s ease,
    opacity 0.35s ease;
}
.hamburger span:nth-child(1) {
  width: 26px;
}
.hamburger span:nth-child(2) {
  width: 20px;
}
.hamburger span:nth-child(3) {
  width: 14px;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  width: 26px;
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  width: 26px;
}

/* Arrow rotation */
.rotate-90 {
  transform: rotate(90deg);
}
</style>
