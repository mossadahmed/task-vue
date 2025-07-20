import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import * as pinia from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import "aos/dist/aos.css";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faEnvelope,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./apollo";

library.add(faFacebook, faInstagram, faTwitter, faEnvelope, faSliders, faCheck);

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app
  .component("font-awesome-icon", FontAwesomeIcon)

AOS.init();

app.use(pinia.createPinia()).use(MotionPlugin).use(router).mount("#app");
