import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCxB9HHpwnDA46WRLIF87smSm5AYrNxLBg",
    authDomain: "curso-vue-6e573.firebaseapp.com",
    projectId: "curso-vue-6e573",
    storageBucket: "curso-vue-6e573.appspot.com",
    messagingSenderId: "373931577167",
    appId: "1:373931577167:web:ba8243ad2afb06059a7f3a",
    measurementId: "G-SCNB9M55LR"
};

initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')


