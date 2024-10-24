import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Homepage from './components/HelloWorld.vue'; 
import Home from './views/Home.vue';

const routes = [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage, // Ili promijeni u Home ako koristiš HelloWorld.vue
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
