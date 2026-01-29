<template>
  <div class="w-full bg-white font-['Montserrat'] selection:bg-[#129C48] selection:text-white">
    <Header :videoVariant="2" />

    <div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <div
        class="absolute inset-0 bg-[url('/src/assets/img/farm-pic1.jpg')] bg-cover bg-center opacity-20"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
      ></div>

      <div
        class="absolute w-32 h-32 border rounded-full top-20 left-10 border-green-400/30 animate-pulse"
      ></div>
      <div
        class="absolute w-16 h-16 border rounded-full top-40 right-20 border-green-400/50 animate-ping"
      ></div>
      <div
        class="absolute w-24 h-24 border rounded-full bottom-32 left-1/4 border-green-400/40 animate-pulse"
      ></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center"
      >
        <div class="mb-6 reveal-fade">
          <LeafIcon
            class="w-12 h-12 mx-auto mb-4 text-green-400 animate-bounce"
          />
          <h1
            class="mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl"
          >
            CONTACT US
          </h1>
          <div
            class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-green-400 to-white"
          ></div>
        </div>
        <p
          class="md:max-w-[40%] text-md md:text-xl text-gray-300 mb-4 font-light reveal-slide-up"
        >
          Get in touch with FarmGate Africa. We're here to help advance
          agriculture and connect with you.
        </p>
      </div>
    </div>

    <section class="relative w-full bg-white mt-15 z-20 pb-24 px-6 md:px-12">
      <div class="max-w-[1440px] mx-auto shadow-2xl rounded-[3rem] overflow-hidden bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-3 min-h-[700px]">
            
            <div class="relative bg-[#129C48] p-10 md:p-14 text-white flex flex-col justify-between overflow-hidden">
                <div class="absolute top-0 right-0 opacity-10 pointer-events-none">
                     <LeafIcon class="w-[300px] h-[300px] text-white" />
                </div>

                <div class="relative z-10">
                    <div class="mb-12">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 mb-6">
                            <LeafIcon class="text-[#F2CB00] w-4 h-4" />
                            <span class="text-xs font-bold uppercase tracking-wider text-white">Contact Info</span>
                        </div>
                        <h2 class="font-['Livvic'] text-4xl md:text-5xl font-bold leading-tight mb-2">
                           Get in <span class="text-[#F2CB00]">Touch</span>
                        </h2>
                        <p class="text-green-100 text-lg font-light">
                           We're here to help you grow
                        </p>
                    </div>

                    <div class="space-y-8">
                        <div class="group flex items-start gap-6">
                            <div class="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2CB00] group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-['Livvic'] text-xl font-bold mb-1">Email Us</h3>
                                <a href="mailto:connect@farmgate.africa" class="text-green-100 hover:text-white transition-colors border-b border-transparent hover:border-white">
                                    connect@farmgate.africa
                                </a>
                            </div>
                        </div>

                         <div class="group flex items-start gap-6">
                            <div class="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2CB00] group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-['Livvic'] text-xl font-bold mb-1">Call Us</h3>
                                <div class="flex flex-col space-y-1">
                                    <a href="tel:+233303980443" class="text-green-100 hover:text-white transition-colors border-b border-transparent hover:border-white w-max">+233 30 398 0443</a>
                                    <a href="tel:+233503301132" class="text-green-100 hover:text-white transition-colors border-b border-transparent hover:border-white w-max">+233 50 330 1132</a>
                                </div>
                            </div>
                        </div>

                         <div class="group flex items-start gap-6">
                            <div class="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F2CB00] group-hover:bg-[#F2CB00] group-hover:text-black transition-all duration-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-['Livvic'] text-xl font-bold mb-1">Visit Us</h3>
                                <a href="https://www.google.com/maps/search/?api=1&query=P.+O.+Box+2186,+Adenta+-+Accra,+Ghana,+West+Africa" target="_blank" class="text-green-100 hover:text-white transition-colors border-b border-transparent hover:border-white leading-relaxed block">
                                    P. O. Box 2186, Adenta - Accra,<br/>
                                    Ghana, West Africa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-white/20">
                    <p class="text-sm font-medium text-green-100 mb-4 uppercase tracking-widest">Ready to transform your agricultural journey?</p>
                    <button class="w-full py-4 bg-[#F2CB00] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-[#129C48] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                        <LeafIcon class="w-4 h-4" />
                        <span>Start growing with us</span>
                        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>

            <div class="relative bg-gray-100 lg:col-span-2 h-[400px] lg:h-auto">
                 <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.4780781420377!2d-0.160769!3d5.643748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9be02ef482a7%3A0xe01c96c836aff70f!2sInnohub%20Growth%20Centre!5e0!3m2!1sen!2sgh!4v1769367233372!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                aria-label="Innohub Growth Centre location map"
                class="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-white px-6 md:px-12">
        <div class="max-w-[1000px] mx-auto">
            <div class="text-center mb-16 reveal-slide-up">
                <h2 class="font-['Livvic'] text-4xl md:text-5xl font-bold text-black mb-4">
                    <span class="text-[#129C48]">Send</span> us a Message
                </h2>
                <div class="h-1 w-24 bg-[#F2CB00] mx-auto mb-6"></div>
                <p class="text-xl text-gray-600 font-light">
                    Have questions or need assistance? We'd love to hear from you.
                </p>
            </div>

            <div class="bg-white p-2 reveal-slide-up">
                <form @submit.prevent="submitForm" class="space-y-8">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="relative group">
                            <label for="lastName" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#129C48]">Last Name *</label>
                            <input id="lastName" v-model="form.lastName" type="text" required 
                                class="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg text-black placeholder-gray-300"
                                placeholder="Osei"
                                :class="{ 'border-red-500': errors.lastName }"
                            />
                            <p v-if="errors.lastName" class="text-red-500 text-xs mt-1">{{ errors.lastName }}</p>
                        </div>
                        
                         <div class="relative group">
                            <label for="firstName" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#129C48]">First Name *</label>
                            <input id="firstName" v-model="form.firstName" type="text" required 
                                class="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg text-black placeholder-gray-300"
                                placeholder="Kwame"
                                :class="{ 'border-red-500': errors.firstName }"
                            />
                            <p v-if="errors.firstName" class="text-red-500 text-xs mt-1">{{ errors.firstName }}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="relative group">
                            <label for="email" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#129C48]">Email *</label>
                            <input id="email" v-model="form.email" type="email" required 
                                class="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg text-black placeholder-gray-300"
                                placeholder="kwame.osei@gmail.com"
                                :class="{ 'border-red-500': errors.email }"
                            />
                            <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                        </div>
                        
                         <div class="relative group">
                            <label for="phone" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#129C48]">Phone</label>
                            <input id="phone" v-model="form.phone" type="tel" 
                                class="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg text-black placeholder-gray-300"
                                placeholder="+233 54 123 4567"
                            />
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Subject *</label>
                         <div class="flex flex-wrap gap-4">
                            <label v-for="option in subjectOptions" :key="option.value" 
                                class="cursor-pointer group relative"
                            >
                                <input v-model="form.subject" :value="option.value" type="radio" name="subject" class="peer sr-only" required />
                                <div class="px-6 py-3 rounded-full border border-gray-200 text-gray-600 peer-checked:bg-[#129C48] peer-checked:text-white peer-checked:border-[#129C48] hover:border-[#129C48] transition-all duration-300 text-sm font-medium">
                                    {{ option.label }}
                                </div>
                            </label>
                         </div>
                         <p v-if="errors.subject" class="text-red-500 text-xs mt-2">{{ errors.subject }}</p>
                    </div>

                    <div class="relative group">
                         <label for="message" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-[#129C48]">Message *</label>
                         <textarea id="message" v-model="form.message" rows="4" required 
                            class="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#129C48] outline-none transition-colors bg-transparent text-lg text-black placeholder-gray-300 resize-none"
                            placeholder="How can we help you?"
                            :class="{ 'border-red-500': errors.message }"
                         ></textarea>
                         <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
                    </div>

                    <div class="pt-8 text-center">
                         <button
                            type="submit"
                            class="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-[#129C48] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="isSubmitting"
                            >
                            <span>{{ isSubmitting ? "Submitting..." : "Submit Message" }}</span>
                            <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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
import { ref, reactive, onMounted } from "vue";
import { useScrollReveal, revealEffects } from "@/composables/useScrollReveal";
import Header from "../components/Header.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import Footer from "../components/Footer.vue";

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

onMounted(() => {
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
</script>