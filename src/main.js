import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Privacy from "@/components/Privacy-policy.vue"
import App from './App.vue'
import Home from '@/components/Home-page.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/privacy", component: Privacy},
        { path: "/", component: Home},
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
