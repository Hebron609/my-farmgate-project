<template>
  <div
    class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white"
  >
    <Header :videoVariant="2" />

    <div class="relative w-full h-screen overflow-hidden bg-black">
      <div
        class="bg-[url('/src/assets/img/contact-banner.webp')] absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[20s] ease-linear hover:scale-105"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"
      ></div>

      <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/30 animate-pulse max-[360px]:w-20 max-[360px]:h-20"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/50 animate-ping max-[360px]:w-10 max-[360px]:h-10"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/40 animate-pulse max-[360px]:w-16 max-[360px]:h-16"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center"
      >
        <div class="reveal-slide-up">
          <LeafIcon
            class="mx-auto mb-6 max-[360px]:mb-4 h-16 w-16 max-[360px]:h-12 max-[360px]:w-12 text-[#F2CB00] animate-pulse"
          />
          <h1
            class="font-['Livvic'] text-6xl font-bold leading-tight text-white md:text-8xl lg:text-9xl tracking-tight"
          >
            CONNECT WITH <br />
            <span class="text-[#129C48]">US.</span>
          </h1>
        </div>
        <p
          class="mt-4 text-gray-400 max-w-[600px] text-sm md:text-base reveal-slide-up delay-300"
        >
          Get in touch with FarmGate Africa. We're here to help advance
          agriculture and connect with you.
        </p>

        <div class="absolute bottom-10 max-[360px]:bottom-6">
          <ScrollDownPage />
        </div>
      </div>
    </div>

    <section
      class="relative z-20 w-full px-6 max-[360px]:px-3 pb-24 max-[360px]:pb-12 bg-white mt-15 max-[360px]:mt-8 md:px-12"
    >
      <div
        class="max-w-[1440px] mx-auto shadow-2xl rounded-[3rem] max-[360px]:rounded-[1.5rem] overflow-hidden bg-white"
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-3 min-h-[700px] max-[360px]:min-h-auto"
        >
          <div
            class="relative bg-[#129C48] p-10 max-[360px]:p-6 md:p-14 text-white flex flex-col justify-between overflow-hidden"
          >
            <div class="absolute top-0 right-0 pointer-events-none opacity-10">
              <LeafIcon
                class="w-[300px] h-[300px] max-[360px]:w-[150px] max-[360px]:h-[150px] text-white"
              />
            </div>

            <div class="relative z-10">
              <div class="mb-12 max-[360px]:mb-6">
                <h2
                  class="font-['Livvic'] text-4xl max-[360px]:text-3xl md:text-5xl font-bold leading-tight mb-2"
                >
                  Get in <span class="text-[#F2CB00]">Touch</span>
                </h2>
                <p
                  class="text-lg max-[360px]:text-base font-light text-green-100"
                >
                  We're here to help you grow
                </p>
              </div>

              <div class="space-y-8 max-[360px]:space-y-5">
                <div class="flex items-start gap-6 max-[360px]:gap-4 group">
                  <a
                    href="mailto:connect@farmgate.africa"
                    class="h-12 w-12 max-[360px]:h-10 max-[360px]:w-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2CB00] group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300 shrink-0"
                  >
                    <svg
                      class="w-6 h-6 max-[360px]:w-5 max-[360px]:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </a>
                  <div class="break-all sm:break-normal">
                    <h3
                      class="font-['Livvic'] text-xl max-[360px]:text-lg font-bold mb-1 max-[360px]:mb-0"
                    >
                      Email Us
                    </h3>
                    <a
                      href="mailto:connect@farmgate.africa"
                      class="text-green-100 max-[360px]:text-sm transition-colors border-b border-transparent hover:text-white hover:border-white"
                    >
                      connect@farmgate.africa
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-6 max-[360px]:gap-4 group">
                  <div ref="phonePickerRef" class="relative shrink-0">
                    <button
                      type="button"
                      @click.stop="showPhonePicker = !showPhonePicker"
                      :aria-expanded="showPhonePicker"
                      aria-label="Choose a number to call"
                      class="h-12 w-12 max-[360px]:h-10 max-[360px]:w-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2CB00] group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300"
                    >
                      <svg
                        class="w-6 h-6 max-[360px]:w-5 max-[360px]:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </button>

                    <div
                      v-if="showPhonePicker"
                      class="absolute left-0 z-20 flex flex-col gap-2 p-3 mt-2 rounded-xl bg-white/95 min-w-[190px] shadow-lg"
                    >
                      <a
                        href="tel:+233303980443"
                        @click="showPhonePicker = false"
                        class="text-sm text-[#055732] transition-colors border-b border-transparent hover:text-black hover:border-[#055732] w-max"
                        >+233 30 398 0443</a
                      >
                      <a
                        href="tel:+233596726914"
                        @click="showPhonePicker = false"
                        class="text-sm text-[#055732] transition-colors border-b border-transparent hover:text-black hover:border-[#055732] w-max"
                        >+233 59 672 6914</a
                      >
                    </div>
                  </div>
                  <div>
                    <h3
                      class="font-['Livvic'] text-xl max-[360px]:text-lg font-bold mb-1 max-[360px]:mb-0"
                    >
                      Call Us
                    </h3>
                    <div class="flex flex-col space-y-1">
                      <a
                        href="tel:+233303980443"
                        class="text-green-100 max-[360px]:text-sm transition-colors border-b border-transparent hover:text-white hover:border-white w-max"
                        >+233 30 398 0443</a
                      >
                      <a
                        href="tel:+233596726914"
                        class="text-green-100 max-[360px]:text-sm transition-colors border-b border-transparent hover:text-white hover:border-white w-max"
                        >+233 59 672 6914</a
                      >
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-6 max-[360px]:gap-4 group">
                  <a
                    href="https://wa.me/233503301132"
                    target="_blank"
                    class="h-12 w-12 max-[360px]:h-10 max-[360px]:w-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2CB00] group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300 shrink-0"
                  >
                    <svg
                      class="w-6 h-6 max-[360px]:w-5 max-[360px]:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                      />
                    </svg>
                  </a>
                  <div>
                    <h3
                      class="font-['Livvic'] text-xl max-[360px]:text-lg font-bold mb-1 max-[360px]:mb-0"
                    >
                      WhatsApp Us
                    </h3>
                    <a
                      href="https://wa.me/233503301132"
                      target="_blank"
                      class="text-green-100 max-[360px]:text-sm transition-colors border-b border-transparent hover:text-white hover:border-white w-max"
                      >+233 50 330 1132</a
                    >
                  </div>
                </div>

                <div class="flex items-start gap-6 max-[360px]:gap-4 group">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Innohub+Growth+Centre+Accra"
                    target="_blank"
                    class="h-12 w-12 max-[360px]:h-10 max-[360px]:w-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2CB00] group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300 shrink-0"
                  >
                    <svg
                      class="w-6 h-6 max-[360px]:w-5 max-[360px]:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </a>
                  <div>
                    <h3
                      class="font-['Livvic'] text-xl max-[360px]:text-lg font-bold mb-1 max-[360px]:mb-0"
                    >
                      Visit Us
                    </h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Innohub+Growth+Centre+Accra"
                      target="_blank"
                      class="block leading-relaxed max-[360px]:leading-snug text-green-100 max-[360px]:text-xs transition-colors border-b border-transparent hover:text-white hover:border-white"
                    >
                      Innohub Growth Centre, <br />
                      East Legon, Accra, <br />
                      Greater Accra Region (GA-414-1928)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="pt-8 mt-12 max-[360px]:mt-6 max-[360px]:pt-5 border-t border-white/20"
            >
              <p
                class="mb-4 text-sm max-[360px]:text-xs max-[360px]:mb-3 font-medium tracking-widest text-green-100"
              >
                Ready to transform your agricultural journey?
              </p>
              <button
                @click="navigateToVideo2"
                class="w-full py-3 max-[360px]:py-2.5 max-[360px]:text-sm bg-[#F2CB00] text-black font-bold tracking-widest rounded-full hover:bg-white hover:text-[#129C48] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 max-[360px]:gap-2 group cursor-pointer"
              >
                <LeafIcon class="w-4 h-4 max-[360px]:w-3 max-[360px]:h-3" />
                <span>Start growing with us</span>
              </button>
            </div>
          </div>

          <div
            class="relative bg-gray-100 lg:col-span-2 h-[400px] max-[360px]:h-[250px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.4780781420377!2d-0.160769!3d5.643748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9be02ef482a7%3A0xe01c96c836aff70f!2sInnohub%20Growth%20Centre!5e0!3m2!1sen!2sgh!4v1769367233372!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              aria-label="Innohub Growth Centre location map"
              class="absolute inset-0 transition-all duration-700 grayscale hover:grayscale-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section
      class="px-6 max-[360px]:px-4 py-24 max-[360px]:py-12 bg-white md:px-12"
    >
      <div class="max-w-[1000px] mx-auto relative overflow-visible">
        <LeafIcon
          class="hidden md:block absolute right-[-150px] top-30 z-10 w-[380px] h-[380px] text-[#129C48] opacity-4"
        />
        <div
          class="relative mb-16 max-[360px]:mb-8 text-center reveal-slide-up"
        >
          <h2
            class="font-['Livvic'] text-4xl max-[360px]:text-[1.75rem] max-[360px]:leading-tight md:text-5xl font-bold text-black mb-4 max-[360px]:mb-2"
          >
            Send us a <span class="text-[#129C48]">message</span>
          </h2>
          <div
            class="h-1 w-24 bg-[#F2CB00] mx-auto mb-6 max-[360px]:mb-4"
          ></div>
          <p
            class="text-xl max-[360px]:text-base font-light text-gray-600 px-2"
          >
            Have questions or need assistance? We'd love to hear from you.
          </p>
        </div>

        <div class="p-2 bg-white reveal-slide-up">
          <form
            @submit.prevent="submitForm"
            class="space-y-8 max-[360px]:space-y-5"
          >
            <div
              class="grid grid-cols-1 gap-8 max-[360px]:gap-5 md:grid-cols-2"
            >
              <div class="relative group">
                <label
                  for="lastName"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >Last Name *</label
                >
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="Osei"
                  :class="{ 'border-red-500': errors.lastName }"
                />
                <p v-if="errors.lastName" class="mt-1 text-xs text-red-500">
                  {{ errors.lastName }}
                </p>
              </div>

              <div class="relative group">
                <label
                  for="firstName"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >First Name *</label
                >
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="Kwame"
                  :class="{ 'border-red-500': errors.firstName }"
                />
                <p v-if="errors.firstName" class="mt-1 text-xs text-red-500">
                  {{ errors.firstName }}
                </p>
              </div>
            </div>

            <div
              class="grid grid-cols-1 gap-8 max-[360px]:gap-5 md:grid-cols-2"
            >
              <div class="relative group">
                <label
                  for="email"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >Email *</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="kwame.osei@gmail.com"
                  :class="{ 'border-red-500': errors.email }"
                />
                <p v-if="errors.email" class="mt-1 text-xs text-red-500">
                  {{ errors.email }}
                </p>
              </div>

              <div class="relative group">
                <label
                  for="phone"
                  class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                  >Phone</label
                >
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300"
                  placeholder="+233 54 123 4567"
                />
              </div>
            </div>

            <div>
              <label
                class="block mb-4 max-[360px]:mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
                >Subject *</label
              >
              <div class="flex flex-wrap gap-4 max-[360px]:gap-2">
                <label
                  v-for="option in subjectOptions"
                  :key="option.value"
                  class="relative cursor-pointer group"
                >
                  <input
                    v-model="form.subject"
                    :value="option.value"
                    type="radio"
                    name="subject"
                    class="sr-only peer"
                    required
                  />
                  <div
                    class="px-6 py-3 max-[360px]:px-4 max-[360px]:py-2 rounded-full border border-gray-200 text-gray-600 peer-checked:bg-[#129C48] peer-checked:text-white peer-checked:border-[#129C48] hover:border-[#129C48] transition-all duration-300 text-sm max-[360px]:text-xs font-medium"
                  >
                    {{ option.label }}
                  </div>
                </label>
              </div>
              <p
                v-if="errors.subject"
                class="mt-2 max-[360px]:mt-1 text-xs text-red-500"
              >
                {{ errors.subject }}
              </p>
            </div>

            <div class="relative group">
              <label
                for="message"
                class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 max-[360px]:mb-1 group-focus-within:text-[#129C48]"
                >Message *</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-0 py-3 max-[360px]:py-2 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg max-[360px]:text-base text-black placeholder-gray-300 resize-none max-[360px]:min-h-[80px]"
                placeholder="How can we help you?"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-xs text-red-500">
                {{ errors.message }}
              </p>
            </div>

            <div class="pt-8 max-[360px]:pt-4 text-center">
              <button
                type="submit"
                class="relative inline-flex items-center px-4 py-4 max-[360px]:py-3 max-[360px]:px-5 mt-0 overflow-hidden bg-green-700 cursor-pointer md:px-4 group rounded-[12px] w-fit md:mt-0 reveal-slide-right disabled:opacity-50 disabled:cursor-not-allowed text-sm max-[360px]:text-xs"
                :disabled="isSubmitting"
              >
                <span
                  class="flex items-center gap-3 max-[360px]:gap-2 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full"
                >
                  <span
                    class="text-sm max-[360px]:text-xs font-bold tracking-widest text-white"
                  >
                    {{ isSubmitting ? "Submitting..." : "Submit Message" }}
                  </span>
                  <svg
                    v-if="!isSubmitting"
                    class="w-4 h-4 max-[360px]:w-3 max-[360px]:h-3 text-white"
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

                <span
                  class="absolute inset-0 flex items-center justify-center w-full h-full gap-3 max-[360px]:gap-2 text-black transition-transform duration-300 transform translate-y-full bg-yellow-400 group-hover:translate-y-0"
                >
                  <span
                    class="text-sm max-[360px]:text-xs font-bold tracking-widest"
                  >
                    {{ isSubmitting ? "Submitting..." : "Submit Message" }}
                  </span>
                  <svg
                    v-if="!isSubmitting"
                    class="w-4 h-4 max-[360px]:w-3 max-[360px]:h-3 text-black"
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
            </div>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import Footer from "../components/Footer.vue";
import ScrollDownPage from "../components/ScrollDownPage.vue";

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
});

// Form data
const form = reactive({
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

// Subject options
const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "consulting", label: "Consulting" },
  { value: "programmes", label: "Programmes" },
  { value: "project-management", label: "Project Management" },
];

// Validation errors
const errors = reactive({
  lastName: "",
  firstName: "",
  email: "",
  subject: "",
  message: "",
});

// Submission state
const isSubmitting = ref(false);
const showPhonePicker = ref(false);
const phonePickerRef = ref(null);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form validation
const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  // Validate last name
  if (!form.lastName.trim()) {
    errors.lastName = "Last name is required.";
    isValid = false;
  }

  // Validate first name
  if (!form.firstName.trim()) {
    errors.firstName = "First name is required.";
    isValid = false;
  }

  // Validate email
  if (!form.email.trim()) {
    errors.email = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate subject
  if (!form.subject) {
    errors.subject = "Please select a subject.";
    isValid = false;
  }

  // Validate message
  if (!form.message.trim()) {
    errors.message = "Message is required.";
    isValid = false;
  }

  return isValid;
};

// Submit form
const submitForm = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    Object.keys(form).forEach((key) => {
      form[key] = "";
    });

    alert("Thank you for your message! We'll get back to you soon.");
  } catch (error) {
    alert("An error occurred. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

const navigateToVideo2 = () => {
  sessionStorage.setItem("activateVideo2", "true");
  window.location.href = "/";
};

const handleDocumentClick = (event) => {
  if (!phonePickerRef.value?.contains(event.target)) {
    showPhonePicker.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);

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
  api.reveal(".reveal-slide-right", {
    ...revealEffects.slideRight,
    duration: 700,
    delay: 200,
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>
