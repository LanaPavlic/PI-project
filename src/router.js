import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Homepage from './components/HelloWorld.vue';
import Home from './views/Home.vue';
import Aktivnosti from './views/Aktivnosti.vue';
import Apartman from './views/Apartman.vue';

const routes = [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage, 
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
      path: '/apartman/:id',
      name: 'Apartman',
      component: () => import('@/views/Apartman.vue')
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
