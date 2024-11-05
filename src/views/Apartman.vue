<template>
  <div v-if="loading">Učitavanje...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
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
        <h3>Dobrodošli u {{ apartmentData.name }}</h3>
        <img :src="apartmentData.mainImage" alt="Slika apartmana" class="intro-image">
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
            <tr><td>Materijal izgradnje:</td><td>{{ apartmentData.info.buildingMaterial }}</td></tr>
            <tr><td>Kućni ljubimci:</td><td>{{ apartmentData.info.petsAllowed }}</td></tr>
            <tr><td>Godina izgradnje:</td><td>{{ apartmentData.info.yearBuilt }}</td></tr>
            <tr><td>Godina renovacije:</td><td>{{ apartmentData.info.yearRenovated }}</td></tr>
            <tr><td>Naša oznaka kvalitete:</td><td>{{ apartmentData.info.qualityRating }}</td></tr>
            <tr><td>Osobe:</td><td>{{ apartmentData.info.maxGuests }}</td></tr>
          </table>

          <h4>Sadržaji</h4>
          <ul>
            <li v-for="(feature, index) in apartmentData.features" :key="index">{{ feature }}</li>
          </ul>
          <h4>Prostorije</h4>
          <ul>
            <li v-for="(room, index) in apartmentData.rooms" :key="index">{{ room }}</li>
          </ul>

          <h4>Oprema</h4>
          <ul>
            <li v-for="(item, index) in apartmentData.equipment" :key="index">{{ item }}</li>
          </ul>

          <h4>Energija/grijanje</h4>
          <ul>
            <li v-for="(energyItem, index) in apartmentData.energy" :key="index">{{ energyItem }}</li>
          </ul>

          <h4>Okućnica</h4>
          <ul>
            <li v-for="(gardenItem, index) in apartmentData.garden" :key="index">{{ gardenItem }}</li>
          </ul>

          <h4>Okolica</h4>
          <ul>
            <li v-for="(surrounding, index) in apartmentData.surroundings" :key="index">{{ surrounding }}</li>
          </ul>

          <h4>Dostupnost</h4>
          <Kalendar :apartmentId="parseInt(id)" :reservedDays="reservedDays" />

          <BookingForm :apartmentId="parseInt(id)" />
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
import { db } from '@/firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import Kalendar from './Kalendar.vue';
import BookingForm from './BookingForm.vue';

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
      apartmentData: null,
      reservedDays: [],
      loading: true,
      error: null
    };
  },
  computed: {
    apartmentImages() {
      // Vraća slike direktno kako bi se putanje ispravno rješavale
      return Array.isArray(this.apartmentData?.images)
          ? this.apartmentData.images
          : [];
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
    async fetchApartmentData() {
      try {
        const docRef = doc(db, 'apartments', this.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.apartmentData = docSnap.data();
        } else {
          console.log('No such document!');
          this.error = 'Podaci nisu pronađeni.';
        }
      } catch (error) {
        console.error('Error fetching apartment data: ', error);
        this.error = 'Greška pri dohvaćanju podataka.';
      } finally {
        this.loading = false;
      }
    },
    async fetchReservedDays() {
      try {
        const bookingsRef = collection(db, 'bookings');
        const q = query(bookingsRef, where('apartmentId', '==', parseInt(this.id)));
        const querySnapshot = await getDocs(q);

        this.reservedDays = [];

        querySnapshot.forEach((doc) => {
          const booking = doc.data();
          const arrivalDate = new Date(booking.arrivalDate);
          const departureDate = new Date(booking.departureDate);

          for (let d = new Date(arrivalDate); d <= departureDate; d.setDate(d.getDate() + 1)) {
            this.reservedDays.push(new Date(d));
          }
        });
        console.log('Učitani rezervirani dani:', this.reservedDays);
      } catch (error) {
        console.error('Error fetching reserved days: ', error);
      }
    }
  },
  created() {
    this.fetchApartmentData();
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
.intro-image {
  width: 50%;
  height: auto;
  margin-top: 10px;
  margin-left: 60px;
  border: 2px solid #ff69b4;
  border-radius: 5px;
}
</style>
