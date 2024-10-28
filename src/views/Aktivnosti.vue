<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="/slika3.png.jpg" alt="Logo" class="logo" />
      </div>
      <h1 class="header_title">PINK HEART APARTMENTS</h1>
      <h2 class="header_title">ATRAKCIJE I AKTIVNOSTI</h2>
    </header>

    <main>
      <div class="intro-container">
        <h3>Aktivnosti u okolici</h3>
        <p>U našoj ponudi imate razne aktivnosti koje možete uživati tijekom boravka:</p>
      </div>

      <div class="activities-container">
        <!-- Aktivnost: Ranch Marconi -->
        <div class="activity">
          <img src="@/views/Aktivnosti/ak1.jpg" alt="Ranch Marconi" class="activity-image" />
          <div class="activity-text">
            <h3>RANCH MARCONI</h3>
            <p>Ranch Marconi nudi jedinstvenu avanturu jahanja kroz predivne pejzaže Istre, uz vodiče koji će vas uputiti u tajne ovoga sporta. Idealno za obitelji i ljubitelje prirode!</p>
          </div>
        </div>

        <!-- Aktivnost: Rabac Kajak -->
        <div class="activity">
          <img src="@/views/Aktivnosti/ak2.jpg" alt="Rabac Kajak" class="activity-image" />
          <div class="activity-text">
            <h3>RABAC KAJAK</h3>
            <p>Rabac nudi fantastično iskustvo kajakarenja uz obalu s kristalno čistim morem, skrivenim uvalama i mogućnost istraživanja morskog života u vlastitom ritmu.</p>
          </div>
        </div>

        <!-- Aktivnost: Zipline Pazinska Jama -->
        <div class="activity">
          <img src="@/views/Aktivnosti/ak3.jpg" alt="Zipline Pazinska Jama" class="activity-image" />
          <div class="activity-text">
            <h3>ZIPLINE PAZINSKA JAMA</h3>
            <p>Doživite uzbuđenje zipline-a preko Pazinske jame. Letite iznad spektakularnih prirodnih ljepota, uz osjećaj adrenalina dok prelazite preko ovog kanjona.</p>
          </div>
        </div>

        <!-- Aktivnost: Istralandia -->
        <div class="activity">
          <img src="@/views/Aktivnosti/ak4.jpg" alt="Istralandia" class="activity-image" />
          <div class="activity-text">
            <h3>ISTRALANDIA</h3>
            <p>Istralandia je veliki vodeni park u kojem možete uživati s obitelji, s mnoštvom tobogana, bazena i zabavnih atrakcija za sve generacije!</p>
          </div>
        </div>

        <!-- Aktivnost: Quad Barban -->
        <div class="activity">
          <img src="@/views/Aktivnosti/ak5.jpg" alt="Quad Barban" class="activity-image" />
          <div class="activity-text">
            <h3>QUAD BARBAN</h3>
            <p>U Barbanu možete iznajmiti quad i istraživati skrivene staze, uz doživljaj off-road avanture kroz prirodu i šume Istre.</p>
          </div>
        </div>

        <!-- Aktivnost: Vinarije -->
        <div class="activity">
          <img src="@/views/Aktivnosti/ak6.jpg" alt="Vinarije" class="activity-image" />
          <div class="activity-text">
            <h3>VINARIJE</h3>
            <p>Istra je poznata po brojnim vinarijama koje nude degustaciju lokalnih vina, od Malvazije do Terana. Posjetite renomirane vinarije i uživajte u pravom okusu Istre.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Aktivnosti",
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
  margin-top: 120px; /* Da se izbjegne preklapanje s headerom */
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

.activities-container {
  width: 80%;
  color: black;
  text-align: left;
  padding: 0 30px; /* Dodaj padding sa lijeve i desne strane */
}

.activity {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
}

.activity-image {
  width: 350px;
  height: auto;
  border: 2px solid #ff69b4;
  border-radius: 10px;
  margin-right: 20px;
}

.activity-text h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.activity-text p {
  font-size: 1em;
  line-height: 1.5;
}
</style>
