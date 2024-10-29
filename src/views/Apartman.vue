<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="/slika3.png.jpg" alt="Logo" class="logo" @click="goHome" />
      </div>
      <div class="header_titles">
        <h1 class="header_title">PINK HEART APARTMENTS</h1>
        <span class="divider">|</span>
        <h2 class="header_title">APARTMAN 1</h2>
      </div>
    </header>

    <main>
      <div class="intro-container">
        <h3>Dobrodošli u Apartman 1</h3>
        <img src="/kucc.jpg" alt="Slika kuće" class="intro-image" />
      </div>

      <div class="apartman-container">
        <div class="slike-container">
       
        </div>

        <div class="info-table">
  <h3>Više o smještaju</h3>
  <table>
    <tr>
      <td>Materijal izgradnje:</td>
      <td>Kamen</td>
    </tr>
    <tr>
      <td>Kucni ljubimci:</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Godina izgradnje:</td>
      <td>2020</td>
    </tr>
    <tr>
      <td>Godina renovacije:</td>
      <td>2023</td>
    </tr>
    <tr>
      <td>Naša oznaka kvalitete:</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Osobe:</td>
      <td>4</td>
    </tr>
  </table>

  <h4>Sadržaji</h4>
  <ul>
    <li>1 TV</li>
    <li>Smart TV</li>
    <li>Sušilo za kosu</li>
    <li>Pegla</li>
    <li>Internet (besplatan, bežičan)</li>
  </ul>

  <h4>Prostorije</h4>
  <ul>
    <li>Topla i hladna voda u kuhinji</li>
    <li>Dnevna soba</li>
    <li>Kauč na razvlačenje (2 mjesto/a)</li>
    <li>Kuhinja-blagovaonica</li>
    <li>Kupaonica</li>
    <li>Toalet: topla i hladna voda, Tuš</li>
    <li>Spavaća soba: Bračni krevet (2 mjesto/a)</li>
  </ul>

  <h4>Oprema</h4>
  <ul>
    <li>Električne ploče</li>
    <li>Hladnjak</li>
    <li>Napa</li>
    <li>Pretinac za zamrzavanje</li>
    <li>Aparat za kavu</li>
    <li>Mikrovalna pećnica</li>
    <li>Perilica rublja</li>
    <li>Perilica posuđa</li>
    <li>Usisavač</li>
    <li>Pekara</li>
  </ul>

  <h4>Energija/grijanje</h4>
  <ul>
    <li>Potpuna toplinska izolacija</li>
    <li>Klima uređaj h/c</li>
  </ul>

  <h4>Okućnica</h4>
  <ul>
    <li>Vrtni namještaj</li>
    <li>Gratis parking na parceli: 4 mjesto/a</li>
    <li>Roštilj</li>
    <li>Broj ležaljki: 4</li>
    <li>Terasa ili slično br. 1: Otvorena terasa</li>
    <li>Terasa ili slično br. 2: Natkrivena terasa</li>
    <li>Terasa ili slično br. 3: Otvorena terasa</li>
  </ul>

  <h4>Okolica</h4>
  <ul>
    <li>Novoo bjavljen smještaj</li>
    <li>Udaljenost do zračne luke: PUY : 40 km</li>
    <li>Udaljenost od trgovine: 3 km</li>
    <li>Udaljenost restorana: 3,5 km</li>
    <li>Udaljenost grada: 6 km (Labin)</li>
    <li>Udaljenost obale/kupalista: 4,5 km (Šljunčana plaža)</li>
  </ul>
</div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>Email: info@pinkheartapartments.com</p>
        <p>Telefon: +385 91 234 5678</p>
        <p>Adresa: Salakovci 12b, 52220, Salakovci</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Apartman1",
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

<style>
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

.header_titles {
  display: flex;
  align-items: center;
}

.header_title {
  font-size: 2em;
  margin: 0 5px;
}

.divider {
  margin: 0 5px;
  color: black;
  font-size: 2em;
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

.intro-image {
  width: 50%;
  height: auto;
  margin-top: 10px;
  margin-left: 60px;
  border: 2px solid #ff69b4;
  border-radius: 5px;
}

.apartman-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  color: black;
  text-align: left;
  padding: 0 20px;
}

.slike-container {
  flex: 5;
  text-align: left;
  margin-left: 20px;
}

.slike-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 0px;
}

.slika {
  width: 700px;
  height: auto;
  margin: 10px;
  border: 2px solid #ff69b4;
  border-radius: 5px;
}

.info-table {
  flex: 5;
  padding: 130px;
  background-color: white;
  border: 2px solid #ff69b4;
  border-radius: 10px;
  max-width: 800px;
  width: calc(100% + 40px);
  margin-left: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.info-table h3 {
  font-size: 1.8em;
  margin: -110px 0 10px;
  color: #ff69b4;
}

.info-table h4 {
  font-size: 1.4em;
  margin: 10px 0 10px;
  color: #ff69b4;
}

.info-table ul {
  margin: -10px 0 20px;
}

.date-person-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #ff69b4;
  border-bottom: 1px solid #ff69b4;
}

.date-range,
.person-selection {
  text-align: center;
  margin-bottom: 10px;
}

.date-range h4,
.person-selection h4 {
  color: #ff69b4;
  margin-bottom: 5px;
}

.date-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.date {
  color: gray;
  font-weight: bold;
}

.arrow {
  font-size: 1.5em;
  color: black;
}

.date-warning {
  color: gray;
  font-size: 0.9em;
}

.person-box {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 200px;
  text-align: center;
  color: gray;
}

.select-period {
  background: linear-gradient(to right, #ff7e5f, #ff6b6b);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  margin-top: 20px;
}

.footer-content {
  text-align: center;
  color: black;
}
</style>