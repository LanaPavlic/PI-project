<template>
  <div>
    <header class="header">
      <div class="logo-container">
        <img src="/slika3.png.jpg" alt="Logo" class="logo" @click="goHome" />
      </div>
      <div class="header_titles">
        <h1 class="header_title">PINK HEART APARTMENTS</h1>
        <span class="divider">|</span>
        <h2 class="header_title">APARTMAN {{ id }}</h2>
      </div>
    </header>

    <main>
      <div class="intro-container">
        <h3>Dobrodošli u Apartman {{ id }}</h3>
        <img src="/kucc.jpg" alt="Slika kuće" class="intro-image">
      </div>

      <div class="apartman-container">
        <div class="slike-container">
          <div class="slike-grid">
            <img v-for="(image, index) in apartmentImages" :key="index" :src="image" alt="Slika apartmana" class="slika" />
          </div>
        </div>

        <div class="info-table">
          <h3>Više o smještaju</h3>
          <table>
            <tr><td>Materijal izgradnje:</td><td>Kamen</td></tr>
            <tr><td>Kućni ljubimci:</td><td>1</td></tr>
            <tr><td>Godina izgradnje:</td><td>2020</td></tr>
            <tr><td>Godina renovacije:</td><td>2023</td></tr>
            <tr><td>Naša oznaka kvalitete:</td><td>4</td></tr>
            <tr><td>Osobe:</td><td>4</td></tr>
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

          <h4>Dostupnost</h4>
          <Kalendar :apartmentId="id" :reservedDays="reservedDays" />

          <BookingForm :apartmentId="id" />
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import slika1 from './App1/slika1.jpg';
import slika2 from './App1/slika2.jpg';
import slika3 from './App1/slika3.jpg';
import slika4 from './App1/slika4.jpg';
import slika5 from './App1/slika5.jpg';
import slika6 from './App1/slika6.jpg';

import ap21 from './App2/ap21.jpg';
import ap22 from './App2/ap22.jpg';
import ap23 from './App2/ap23.jpg';
import ap24 from './App2/ap24.jpg';

import ap31 from './App3/ap31.jpg';
import ap32 from './App3/ap32.jpg';
import ap33 from './App3/ap33.jpg';
import ap34 from './App3/ap34.jpg';
import ap35 from './App3/ap35.jpg';

import Kalendar from './Kalendar.vue';
import BookingForm from './BookingForm.vue';
import { db } from '@/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  components: {
    Kalendar,
    BookingForm
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      reservedDays: [],
      imagesForApartments: {
        1: [slika1, slika2, slika3, slika4, slika5, slika6],
        2: [ap21, ap22, ap23, ap24],
        3: [ap31, ap32, ap33, ap34, ap35]
      }
    };
  },
  computed: {
    apartmentImages() {
      return this.imagesForApartments[this.id] || [];
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
    async fetchReservedDays() {
      try {
        const bookingsRef = collection(db, "bookings");
        const q = query(bookingsRef, where("apartmentId", "==", this.id));
        const querySnapshot = await getDocs(q);

        this.reservedDays = [];

        querySnapshot.forEach((doc) => {
          const booking = doc.data();
          const arrivalDate = new Date(booking.arrivalDate);
          const departureDate = new Date(booking.departureDate);

          // Dodaj sve dane unutar rezervacije u reservedDays
          for (let d = new Date(arrivalDate); d <= departureDate; d.setDate(d.getDate() + 1)) {
            this.reservedDays.push(new Date(d));
          }
        });
        console.log("Učitani rezervirani dani:", this.reservedDays);
      } catch (error) {
        console.error("Error fetching reserved days: ", error);
      }
    }
  },
  created() {
    this.fetchReservedDays();
  }
};
</script>


<style scoped>
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
font-size: 0.9em; 
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
.apartman-container { 
display: flex; 
justify-content: space-between; 
width: 80%; 
color: black; 
text-align: left; 
padding: 0 20px; 
} 
.slike-container { 
flex: 1; 
text-align: left; 
margin-left: 20px; 
} 
.slika { 
width: 700px; 
height: auto; 
margin: 10px; 
border: 2px solid #ff69b4; 
border-radius: 5px; 
} 
.slike-grid { 
display: flex; 
flex-wrap: wrap; 
justify-content: flex-start; 
padding-left: 0px; 
} 
.slike-container { 
flex: 5; 
text-align: left; 
margin-right: 20px;
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
.date-range, .person-selection { 
text-align: center; 
margin-bottom: 10px; 
} 
.date-range h4, .person-selection h4 { 
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
.intro-container { 
margin-top: 120px; 
text-align: left; 
color: black; 
display: flex; 
flex-direction: column; 
align-items: flex-start; 
} 
.intro-image { 
width: 50%; 
height: auto; 
margin-top: 10px;
margin-left: 60px; 
border: 2px solid #ff69b4; 
border-radius: 5px; 
} 
</style> 