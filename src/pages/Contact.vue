<template>
  <div>
    <!-- Header -->
    <Header :videoVariant="2" />

    <!-- Hero Section -->
    <div
      class="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-br from-slate-900 via-green-900 to-slate-800"
    >
      <div
        class="absolute inset-0 bg-[url('/src/assets/img/farm-pic1.jpg')] bg-cover bg-center opacity-20"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
      ></div>

      <!-- Futuristic elements -->
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
        <div class="mb-6">
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
          class="md:max-w-[40%] text-md md:text-xl text-gray-300 mb-4 font-light"
        >
          Get in touch with FarmGate Africa. We're here to help advance
          agriculture and connect with you.
        </p>
      </div>
    </div>

    <!-- Contact Form and Map Section -->
    <div class="py-16 bg-white">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <!-- Left Column: Form -->
            <div class="p-8 lg:p-12 lg:col-span-2">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                <span class="text-[#129C48]">Connect</span> with Us Today
              </h2>
              <p class="text-lg text-gray-600 mb-8">
                Reach out to us and let us offer our support.
              </p>

              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name Fields: Two columns on wide screens -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700 mb-2"
                      >Last Name *</label
                    >
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129C48] focus:border-transparent transition-colors"
                      :class="{ 'border-red-500': errors.lastName }"
                    />
                    <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">
                      {{ errors.lastName }}
                    </p>
                  </div>
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-gray-700 mb-2"
                      >First Name *</label
                    >
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129C48] focus:border-transparent transition-colors"
                      :class="{ 'border-red-500': errors.firstName }"
                    />
                    <p
                      v-if="errors.firstName"
                      class="text-red-500 text-sm mt-1"
                    >
                      {{ errors.firstName }}
                    </p>
                  </div>
                </div>

                <!-- Email and Phone -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 mb-2"
                      >Email *</label
                    >
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129C48] focus:border-transparent transition-colors"
                      :class="{ 'border-red-500': errors.email }"
                    />
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                      {{ errors.email }}
                    </p>
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700 mb-2"
                      >Phone</label
                    >
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129C48] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <!-- Subject Radio Options -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-3"
                    >Subject *</label
                  >
                  <fieldset class="space-y-2">
                    <legend class="sr-only">Subject</legend>
                    <div class="flex flex-wrap gap-2">
                      <label
                        v-for="option in subjectOptions"
                        :key="option.value"
                        class="inline-flex items-center px-4 py-2 rounded-full border cursor-pointer transition-colors"
                        :class="
                          form.subject === option.value
                            ? 'bg-[#129C48] text-white border-[#129C48]'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#129C48]'
                        "
                      >
                        <input
                          v-model="form.subject"
                          :value="option.value"
                          type="radio"
                          name="subject"
                          required
                          class="sr-only"
                        />
                        <span class="text-sm font-medium">{{
                          option.label
                        }}</span>
                      </label>
                    </div>
                  </fieldset>
                  <p v-if="errors.subject" class="text-red-500 text-sm mt-1">
                    {{ errors.subject }}
                  </p>
                </div>

                <!-- Message -->
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 mb-2"
                    >Message *</label
                  >
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    placeholder="Write your message..."
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#129C48] focus:border-transparent transition-colors resize-vertical"
                    :class="{ 'border-red-500': errors.message }"
                  ></textarea>
                  <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                    {{ errors.message }}
                  </p>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full bg-[#129C48] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0f7a3a] transition-colors focus:ring-2 focus:ring-[#129C48] focus:ring-offset-2"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? "Submitting..." : "Submit Message" }}
                </button>
              </form>
            </div>

            <!-- Right Column: Map -->
            <div class="relative bg-gray-100 lg:min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3970.4780781420377!2d-0.160769!3d5.643748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9be02ef482a7%3A0xe01c96c836aff70f!2sInnohub%20Growth%20Centre!5e0!3m2!1sen!2sgh!4v1769367233372!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                aria-label="Innohub Growth Centre location map"
                class="absolute inset-0"
              ></iframe>

              <!-- Callout Bubble -->
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, reactive } from "vue";
import Header from "../components/Header.vue";
import LeafIcon from "../components/icons/LeafIcon.vue";
import Footer from "../components/Footer.vue";

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
  { value: "training", label: "Training" },
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

  // Required fields
  if (!form.lastName.trim()) {
    errors.lastName = "Last name is required";
    isValid = false;
  }

  if (!form.firstName.trim()) {
    errors.firstName = "First name is required";
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  if (!form.subject) {
    errors.subject = "Please select a subject";
    isValid = false;
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
    isValid = false;
  }

  return isValid;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    console.log("Form submitted:", form);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    Object.keys(form).forEach((key) => {
      form[key] = "";
    });

    // Show success message (you could add a toast notification here)
    alert("Thank you for your message! We'll get back to you soon.");
  } catch (error) {
    console.error("Submission error:", error);
    alert("There was an error submitting your message. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
