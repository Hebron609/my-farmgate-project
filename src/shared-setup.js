import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Solid icons
import {
  faUser,
  faBars,
  faLeaf,
  faTimes,
  faArrowRight,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faChartLine,
  faBriefcase,
  faChartBar,
  faPhone,
  faEnvelope,
  faSearch,
  faMicrochip,
  faSeedling,
  faCow,
  faFish,
  faIndustry,
  faClipboard,
  faGraduationCap, // 👈 Added new icons
  faMoneyBillWave,
  faHandshake,
  faUniversity,
  faShieldAlt,
  faCloudSun,
  faUsers,
  faTruck,
  faChalkboardTeacher,
  faLightbulb,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

// Brand icons
import {
  faGithub,
  faInstagram,
  faYoutube,
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(
  faUser,
  faBars,
  faLeaf,
  faTimes,
  faArrowRight,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faChartLine,
  faBriefcase,
  faChartBar,
  faPhone,
  faEnvelope,
  faSearch,
  faMicrochip,
  faSeedling,
  faCow,
  faFish,
  faIndustry,
  faClipboard,
  faGraduationCap, // 👈 Added new icons
  faMoneyBillWave,
  faHandshake,
  faUniversity,
  faShieldAlt,
  faCloudSun,
  faUsers,
  faTruck,
  faChalkboardTeacher,
  faLightbulb,
  faMapMarkedAlt,
  faGithub,
  faInstagram,
  faYoutube,
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
);

// Setup app function
export function setupApp(RootComponentOrApp, selector, configure) {
  let app;
  // Handle both component and already-created app instances
  if (RootComponentOrApp.mount || RootComponentOrApp._component) {
    app = RootComponentOrApp;
  } else {
    app = createApp(RootComponentOrApp);
  }

  app.component("font-awesome-icon", FontAwesomeIcon);
  if (configure && typeof configure === "function") {
    configure(app);
  }

  if (selector) {
    app.mount(selector);
  }

  // Global WhatsApp Injection
  injectWhatsAppButton();
}

function injectWhatsAppButton() {
  // Prevent duplicate injection
  if (document.querySelector(".whatsapp-support-global")) return;

  // Hide on Home/Hero page (supports both root and index.html paths)
  const path = window.location.pathname;
  if (path === "/" || path === "/index.html" || path === "") return;

  const btn = document.createElement("a");
  btn.href = "https://wa.me/+233503301132";
  btn.target = "_blank";
  btn.className = "whatsapp-support-global";
  btn.setAttribute("aria-label", "WhatsApp support");
  btn.innerHTML = `
    <div class="whatsapp-tooltip">Let's Chat</div>
    <svg viewBox="0 0 32 32" style="width: 1.75rem; height: 1.75rem;">
      <path fill="#ffffff" d="M17,4C10.383,4,5,9.383,5,16c0,2.003,0.503,3.974,1.473,5.754l-2.33,5.827c-0.148,0.371-0.062,0.795,0.222,1.078   c0.191,0.191,0.447,0.293,0.707,0.293c0.125,0,0.251-0.023,0.371-0.072l5.837-2.335C13.029,27.499,14.997,28,17,28   c6.617,0,12-5.383,12-12S23.617,4,17,4z M17,26c-1.812,0-3.587-0.492-5.135-1.423c-0.276-0.166-0.613-0.188-0.906-0.063   l-4.094,1.644l1.522-3.808l0.109-0.241c0.121-0.269,0.118-0.578-0.009-0.844c-0.027-0.058-0.063-0.124-0.103-0.19   C7.479,19.541,7,17.786,7,16c0-5.514,4.486-10,10-10s10,4.486,10,10S22.514,26,17,26z M21.664,13.189   C21.509,11.401,19.898,10,18,10h-4c-0.553,0-1,0.448-1,1v10c0,0.552,0.447,1,1,1h4c1.898,0,3.509-1.401,3.664-3.189   c0.085-0.979-0.245-1.954-0.906-2.675c-0.042-0.046-0.086-0.091-0.131-0.135c0.045-0.044,0.089-0.089,0.131-0.135   C21.419,15.144,21.749,14.168,21.664,13.189z M18,20h-3v-3h3.178c0.426,0,0.818,0.173,1.106,0.487   c0.287,0.313,0.425,0.722,0.388,1.15C19.606,19.389,18.856,20,18,20z M19.284,14.513C18.996,14.827,18.604,15,18.178,15H15v-3h3   c0.856,0,1.606,0.611,1.672,1.363C19.709,13.791,19.571,14.2,19.284,14.513z" />
    </svg>
  `;
  document.body.appendChild(btn);
}

// Setup FontAwesome on existing app instance
export function setupFontAwesome(app) {
  app.component("font-awesome-icon", FontAwesomeIcon);
}
