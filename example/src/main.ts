/// <reference types="cypress-plugin-pubsub" />

import { createApp } from 'vue';
import App from './App.vue';
import 'cypress-plugin-pubsub';
createApp(App).mount('#app');