<template>

 

  <header v-if="!hideHeader" class="header">
    <div class="logo-container">
      <img src="/slika3.png.jpg" alt="Logo" class="logo" />
    </div>
    <h1 class="header_title">PINK HEART APARTMENTS</h1>
    <div class="wrapper">
      <RouterLink to="/login">Login</RouterLink> |
      <RouterLink to="/signup">Signup</RouterLink>
    </div>
  </header>

  <main>
    <RouterView @hide-header="hideHeader = true" @show-header="hideHeader = false" />
    <div class="image-container" v-if="route.path === '/'">
      <img src="/slika5.jpg" alt="Slika 5" class="center-image" />
    </div>
  </main>

</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const hideHeader = ref(false); // Prikazuje ili skriva header
const route = useRoute(); // Uzimanje trenutne rute
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100vw;
  background-image: url('/slika4.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.header {
  width: 100%;
  background-color: #fff;
  padding: 5px 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid #FF00BF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.logo-container {
  margin-left: 20px;
}

.logo {
  width: 100px; /* prilagodi veličinu po potrebi */
  height: auto;
}

.header_title {
  color: #ff00bf;
  font-weight: 900;
  font-size: 2em;
  flex-grow: 1;
  text-align: center;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header a {
  color: #FF00BF;
  margin: 0 15px;
  text-decoration: none;
  font-weight: 600;
}

.header a:hover {
  text-decoration: underline;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 130px;
}

.image-container {
  display: flex;
  justify-content: center; /* Centriranje slike horizontalno */
  align-items: center;    /* Centriranje slike vertikalno */
  margin-top: 140px;     /* Razmak iznad slike, prilagodi po potrebi */
}

.center-image {
  max-width: 120%;        /* Povećana maksimalna širina na 70% */
  max-height: 400px;     /* Povećana maksimalna visina na 400px */
  height: auto;          /* Održava proporcije slike */
  box-shadow: 0 0 15px 5px #ff00bf; /* Sjena oko slike */
}

.form_area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 15px 15px 10px 0px #ff00bf;
}

.title {
  color: #ff00bf;
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 20px;
}

.sub_title {
  font-weight: 600;
  margin-bottom: 5px;
}

.form_group {
  margin-bottom: 20px;
  width: 100%;
}

.form_style {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ff00bf;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.form_style:focus {
  border-color: #ff69b4;
  box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
}

.btn {
  width: 100%;
  padding: 15px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 5px 5px 0px 0px #ff00bf;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #ff00bf;
  box-shadow: 7px 7px 17px rgba(255, 0, 191, 0.8);
}

p {
  margin-top: 20px;
  font-weight: 600;
}

.link {
  color: #ff00bf;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>