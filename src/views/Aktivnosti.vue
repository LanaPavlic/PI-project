<template>
  <div>

    <header class="header">
      <div class="logo-container">
        <img src="/slika3.png.jpg" alt="Logo" class="logo" @click="goHome" />
      </div>
      <div class="header_titles">
        <h1 class="header_title">PINK HEART APARTMENTS</h1>
        <span class="divider">|</span>
        <h2 class="header_title">ATRAKCIJE I AKTIVNOSTI</h2>
      </div>
    </header>

    <main>
      <div class="intro-container">
        <h3>Aktivnosti u okolici</h3>
        <p>Otkrijte raznolike aktivnosti koje će obogatiti vaš boravak i stvoriti nezaboravne uspomene</p>
      </div>

      <div class="activities-container">
        <!-- Aktivnost: Ranch Marconi -->
        <div class="activity">
          <img src="@/views/aktivnosti/ak1.jpg" alt="Ranch Marconi" class="activity-image" />
          <div class="activity-text">
            <h3>RANCH MARCONI</h3>
            <p>
              Na Ranchu Marconi nude jedinstveno iskustvo jahanja konja u predivnoj prirodi Istre, prilagođeno svim uzrastima
              i razinama iskustva. Posjetitelji mogu uživati u vožnji kroz šume i prekrasne krajolike, a jahanje je idealno za obitelji,
              parove i prijatelje.
              <a href="https://www.ranchmarconi.com/hr" target="_blank" rel="noopener noreferrer">Saznajte više.</a>
            </p>
          </div>
        </div>

        <!-- Aktivnost: Rabac Kajak -->
        <div class="activity">
          <img src="@/views/aktivnosti/ak2.jpg" alt="Rabac Kajak" class="activity-image" />
          <div class="activity-text">
            <h3>RABAC KAJAK</h3>
            <p>Rabac nudi fantastično iskustvo uz obalu s kristalno čistim morem i skrivenim uvalama. Uživajte u vodi i ljepoti istarske obale, istražujući skrivene plaže. Stručni vodiči osigurat će nezaboravno iskustvo, uključujući pauze za kupanje i uživanje u lokalnim specijalitetima.</p>
            <p>Za više informacija, posjetite <a href="https://www.fourelements.com.hr/sea-kayaking" target="_blank">Four Elements</a>.</p>
          </div>
        </div>

        <!-- Aktivnost: Zipline Pazinska Jama -->
        <div class="activity">
          <img src="@/views/aktivnosti/ak3.jpg" alt="Zipline Pazinska Jama" class="activity-image" />
          <div class="activity-text">
            <h3>ZIPLINE PAZINSKA JAMA</h3>
            <p>Doživite uzbuđenje vožnje zipline-om preko Pazinske jame, jedne od najimpresivnijih prirodnih ljepota u Istri. Letite iznad kanjona i uživajte u spektakularnim pogledima dok se spuštate brzinom koja će vam ubrzati srce. Ovaj adrenalinski izazov savršeno je iskustvo za sve ljubitelje avanture.</p>
            <p>Više informacija možete pronaći na <a href="https://central-istria.com/aktivnosti/adrenalinske-aktivnosti/zip-line-pazinska-jama" target="_blank">Central Istria</a>.</p>
          </div>
        </div>

        <!-- Aktivnost: Istralandia -->
        <div class="activity">
          <img src="@/views/aktivnosti/ak4.jpg" alt="Istralandia" class="activity-image" />
          <div class="activity-text">
            <h3>ISTRALANDIA</h3>
            <p>Istralandia je vodeni park s brojnim bazenima i toboganima, idealan za obitelji i sve uzraste. Ovdje možete uživati u zabavi i opuštanju, uz mnoštvo sadržaja koji garantiraju nezaboravno iskustvo. Uz sunčanje i vodene avanture, uživajte i u raznim kulinarskim delicijama.</p>
            <p>Više informacija možete pronaći na <a href="https://www.istralandia.hr/" target="_blank">Istralandia</a>.</p>
          </div>
        </div>

        <!-- Aktivnost: Istra Adventure -->
        <div class="activity">
          <img src="@/views/aktivnosti/ak5.jpg" alt="Istra Adventure" class="activity-image" />
          <div class="activity-text">
            <h3>ISTRA ADVENTURE</h3>
            <p>Istra Adventure nudi razne adrenalinske aktivnosti, uključujući quad vožnje, ATV izlete i vožnju biciklom kroz prekrasne krajolike Istre. Ove aktivnosti pružaju uzbudljive doživljaje i savršene su za avanturiste. Idealne su za obitelji i grupe koje žele uživati u prirodi i aktivnom odmoru.</p>
            <p>Više informacija i cjenik dostupni su na <a href="https://www.istra-adventure.com/cjenik" target="_blank">Istra Adventure</a>.</p>
          </div>
        </div>

        <!-- Aktivnost: Vinarija Kabola -->
        <div class="activity">
          <img src="@/views/aktivnosti/ak6.jpg" alt="Vinarija Kabola" class="activity-image" />
          <div class="activity-text">
            <h3>VINARIJA KABOLA</h3>
            <p>Vinarija Kabola, smještena u Istri, poznata je po svojim autohtonim vinima i tradiciji vinogradarstva. Nude degustacije koja uključuju Malvaziju i Teran, pružajući jedinstveno iskustvo uživanja u lokalnim vinima. Idealno mjesto za ljubitelje vina i gastronomije.</p>
            <p>Više informacija možete pronaći na <a href="https://kabola.hr/en" target="_blank">Vinarija Kabola</a>.</p>
          </div>
        </div>

      </div>
    </main>
  </div>

  <footer class="footer">
    <div class="footer-content">
      <p>Email: info@pinkheartapartments.com</p>
      <p>Telefon: +385 91 234 5678</p>
      <p>Adresa: Salakovci 12b, 52220, Salakovci</p>
    </div>
  </footer>

</template>

<script>
export default {
  name: "Aktivnosti",
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' }); // 'Home' je naziv rute za Home.vue
    },
  },
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

.header {
  display: flex;
  align-items: center; /* Vertikalno centriranje */
  justify-content: center; /* Lijevo poravnanje */
}

.header_titles {
  display: flex;
  align-items: center; /* Vertikalno centriranje */
}

.header_title {
  font-size: 0.9em; /* Manja veličina fonta */
  margin: 0 5px; /* Razmak između naslova */
}

.divider {
  margin: 0 5px; /* Razmak s lijeve i desne strane */
  color: black; /* Boja crte */
  font-size: 2em; /* Veličina crte */
}



.intro-container {
  text-align: center; /* Centriranje teksta */
  margin-top: 120px; /* Razmak od headera */
  color: black; /* Boja teksta */
  display: flex; /* Dodano za centriranje */
  flex-direction: column; /* Poravnanje u stupcu */
  align-items: center; /* Centriranje središnjeg sadržaja */
  width: 100%; /* Postavi širinu na 100% */
}

.intro-container h3,
.intro-container p {
  margin-left: 350px; /* Pomakni tekst prema desno */
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