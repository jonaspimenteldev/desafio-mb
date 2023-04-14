import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import "./assets/scss/base.scss";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.mount("#app");
