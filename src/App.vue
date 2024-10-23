<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- Navigation Links -->
      <RouterLink to="/login">Login</RouterLink> |
      <RouterLink to="/signup">Signup</RouterLink>
    </div>
  </header>

  <main>
    <!-- RouterView will dynamically display components based on the route -->
    <RouterView />
  </main>
</template>