import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import axios from "axios";
import mascaraDiretiva from "./utils/diretiva";

import "./assets/scss/base.scss";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

mascaraDiretiva(app);

app.config.globalProperties.$axios = axios;

app.mount("#app");
