import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser, faBars, faLeaf, faTimes, faArrowRight, faArrowDown,faChevronLeft, faChevronRight,  faChartLine, faBriefcase, faChartBar
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub, faInstagram, faYoutube, faFacebookF,faWhatsapp, faLinkedinIn, faTiktok, faXTwitter
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser, faBars, faLeaf, faTimes,faChevronLeft, faChevronRight,
  faArrowRight, faArrowDown,
  faGithub, faInstagram, faYoutube, faFacebookF, faChartLine, faBriefcase, faChartBar,faWhatsapp, faLinkedinIn, faYoutube, faTiktok, faInstagram, faXTwitter
)

export function setupApp(RootComponent, selector) {
  const app = createApp(RootComponent)
  app.component('font-awesome-icon', FontAwesomeIcon)
  app.mount(selector)
}
