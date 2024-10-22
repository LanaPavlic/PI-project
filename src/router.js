// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Home from './components/HelloWorld.vue';

const routes = [
    { path: '/', name: 'Signup', component: Signup },
    { path: '/Login.vue', name: 'Login', component: Login },
    { path: '/Home.vue', name: 'Home', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
