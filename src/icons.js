import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMobile, faPencilAlt, faThumbsUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faMobile, faPencilAlt, faThumbsUp, faQuestionCircle)

Vue.component('fa-icon', FontAwesomeIcon)