import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue'
import router from './router'


//import "bootstrap/dist/css/bootstrap.min.css";
import "startbootstrap-sb-admin/dist/css/styles.css";
import "./assets/main.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
