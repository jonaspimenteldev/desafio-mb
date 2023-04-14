import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import mascaraDiretiva from "./utils/diretiva";

import "./assets/scss/base.scss";

const app = createApp(App);

mascaraDiretiva(app);

app.config.globalProperties.$axios = axios;

app.mount("#app");
