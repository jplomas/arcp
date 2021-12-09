import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
  faCaretRight,
  faCaretDown,
  faX,
  faTriangleExclamation,
  faArrowRight,
  faDownload,
  faShare,
  faAsterisk,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faUserSecret);
library.add(
  faEnvelope,
  faCaretRight,
  faCaretDown,
  faX,
  faTriangleExclamation,
  faArrowRight,
  faDownload,
  faShare,
  faAsterisk
);
library.add(faTwitter, faGithub);

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const store = createStore({
  state() {
    return {
      items: -1,
    };
  },
});

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(store);
app.mount('#app');
