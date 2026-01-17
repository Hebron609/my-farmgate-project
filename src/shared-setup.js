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
  faGithub,
  faInstagram,
  faYoutube,
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faTiktok,
  faXTwitter
);

// Setup app function
export function setupApp(RootComponent, selector) {
  const app = createApp(RootComponent);
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.mount(selector);
}
