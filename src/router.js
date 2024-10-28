import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Homepage from './components/HelloWorld.vue'; 
import Home from './views/Home.vue';
import Aktivnosti from './views/Aktivnosti.vue';
import Apartman1 from './views/Apartman1.vue';
import Apartman2 from './views/Apartman2.vue';
import Apartman3 from './views/Apartman3.vue';

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
    {
        path: '/aktivnosti',
        name: 'Aktivnosti',
        component: Aktivnosti,
    },
    {
        path: '/apartman1',
        name: 'Apartman1',
        component: Apartman1,
    },
    {
        path: '/apartman2',
        name: 'Apartman2',
        component: Apartman2,
    },
    {
        path: '/apartman3',
        name: 'Apartman3',
        component: Apartman3,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;
