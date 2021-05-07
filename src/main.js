import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button);

app.mount("#app")
