import './assets/main.css'
import 'animate.css'
import '@fontsource-variable/inter'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library
library.add(fas, far, fab)

import App from './App.vue'
import router from './router'
import i18n from './i18n'
// Le dark mode s'initialise automatiquement dans le composable
import './composables/useSimpleDarkMode'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZgG5dBIDXPhDBP8XfXAURCBivhfi5uJ4",
  authDomain: "ithiel-b71c4.firebaseapp.com",
  projectId: "ithiel-b71c4",
  storageBucket: "ithiel-b71c4.firebasestorage.app",
  messagingSenderId: "69436735120",
  appId: "1:69436735120:web:11717ed32dede30fc0a215",
  measurementId: "G-HYQJFXVT0R"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);


const app = createApp(App)

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
