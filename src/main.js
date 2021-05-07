import { createApp } from 'vue';

import Button from 'primevue/button';
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button);

app.mount("#app")
