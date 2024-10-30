<template>
  <div class="booking-form">
    <h3>Rezervirajte Vaš boravak</h3>
    <form @submit.prevent="submitBooking">
      <div class="form-group">
        <label for="name">Ime i prezime</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="arrival">Datum dolaska</label>
        <input type="date" id="arrival" v-model="arrivalDate" required />
      </div>

      <div class="form-group">
        <label for="departure">Datum odlaska</label>
        <input type="date" id="departure" v-model="departureDate" required />
      </div>

      <div class="form-group">
        <label for="numGuests">Broj osoba</label>
        <input type="number" id="numGuests" v-model="numGuests" required min="1" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="phone">Broj mobitela</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>

      <button type="submit">Pošalji rezervaciju</button>
    </form>
  </div>
</template>

<script>
// Uvezi Firestore bazu iz firebase.js datoteke
import { db } from '@/firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default {
  props: {
    apartmentId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: '',
      arrivalDate: '',
      departureDate: '',
      numGuests: 1,
      email: '',
      phone: ''
    };
  },
  methods: {
    async submitBooking() {
      try {
        // Priprema podataka za slanje
        const bookingData = {
          apartmentId: this.apartmentId,
          name: this.name,
          arrivalDate: this.arrivalDate,
          departureDate: this.departureDate,
          numGuests: this.numGuests,
          email: this.email,
          phone: this.phone,
          createdAt: Timestamp.now() // Postavi trenutni datum i vrijeme
        };

        // Dodavanje rezervacije u kolekciju "bookings" u Firestore
        const docRef = await addDoc(collection(db, "bookings"), bookingData);
        console.log("Rezervacija uspješno spremljena s ID:", docRef.id);

        // Resetiranje forme nakon uspješnog slanja
        this.name = '';
        this.arrivalDate = '';
        this.departureDate = '';
        this.numGuests = 1;
        this.email = '';
        this.phone = '';

        // Prikaz poruke korisniku
        alert("Rezervacija uspješno poslana!");
      } catch (e) {
        console.error("Greška pri spremanju rezervacije: ", e);
        alert("Došlo je do greške pri slanju rezervacije. Pokušajte ponovo.");
      }
    }
  }
};
</script>

<style scoped>
.booking-form {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #FF69B4;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #FF4081;
}
</style>
