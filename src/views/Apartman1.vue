<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="/slika3.png.jpg" alt="Logo" class="logo" />
      </div>
      <h1 class="header_title">PINK HEART APARTMENTS</h1>
      <h2 class="header_title">APARTMAN 1</h2>
    </header>

    <main>
      <div class="intro-container">
        <h3>Dobrodošli u Apartman 1</h3>
        <p>Uživajte u luksuznom smještaju i udobnosti našeg Apartmana 1, savršeno opremljenog za vaš odmor.</p>
      </div>

      <div class="apartman-container">
        <div class="apartman">
          <img src="@/views/App1/slika0.jpg" alt="Apartman 1" class="apartman-image" />
          <div class="apartman-text">
            <h3>O Apartmanu 1</h3>
            <p>Apartman 1 nudi predivan pogled na okolne krajolike i udobnost koja će učiniti vaš boravak nezaboravnim. Moderno uređen, s prostranom terasom, potpuno opremljenom kuhinjom i velikim dnevnim boravkom za opuštanje.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Apartman1",
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

.intro-container {
  margin-top: 120px;
  text-align: center;
  color: black;
}

.intro-container h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.intro-container p {
  font-size: 1em;
  margin-bottom: 20px;
}

.apartman-container {
  width: 80%;
  color: black;
  text-align: left;
  padding: 0 20px;
}

.apartman {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
}

.apartman-image {
  width: 350px;
  height: auto;
  border: 2px solid #ff69b4;
  border-radius: 10px;
  margin-right: 20px;
}

.apartman-text h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.apartman-text p {
  font-size: 1em;
  line-height: 1.5;
}
</style>
