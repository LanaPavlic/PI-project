<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="/slika3.png.jpg" alt="Logo" class="logo" />
      </div>
      <h1 class="header_title">PINK HEART APARTMENTS</h1>
      <h2 class="header_title">APARTMAN 3</h2>
    </header>

    <main>
      <div class="intro-container">
        <h3>Apartman 3 - Vaš opuštajući kutak</h3>
        <p>Ovaj apartman nudi savršen spoj udobnosti i elegancije, idealan za obitelji ili parove. Uživajte u modernom uređenju, udobnim krevetima i predivnom pogledu na prirodu.</p>
      </div>

      <div class="details-container">
        <h3>Detalji apartmana:</h3>
        <ul>
          <li>2 spavaće sobe s bračnim krevetima</li>
          <li>Prostrani dnevni boravak s kaučem</li>
          <li>Potpuno opremljena kuhinja</li>
          <li>Balkon s pogledom na vrt</li>
          <li>Besplatan Wi-Fi i klima uređaj</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Apartman3",
};
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
  border: 2px solid #ff69b4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.logo-container {
  margin-left: 20px;
}

.logo {
  width: 100px;
  height: auto;
}

.header_title {
  color: #ff69b4;
  font-weight: 900;
  font-size: 2em;
  flex-grow: 1;
}

.intro-container, .details-container {
  width: 80%;
  margin-top: 120px;
  text-align: left;
  color: black;
}

.intro-container h3, .details-container h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.intro-container p {
  font-size: 1em;
  margin-bottom: 20px;
}

.details-container ul {
  list-style-type: none;
  padding: 0;
}

.details-container li {
  margin: 5px 0;
  font-size: 1em;
  line-height: 1.5;
}
</style>
