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
        <input type="date" id="arrival" v-model="arrivalDate" @change="calculatePrice" required />
      </div>

      <div class="form-group">
        <label for="departure">Datum odlaska</label>
        <input type="date" id="departure" v-model="departureDate" @change="calculatePrice" required />
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

      <div class="form-group">
        <label for="price">Ukupna cijena</label>
        <input type="text" id="price" :value="price + ' €'" readonly />
      </div>

      <button type="submit">Pošalji rezervaciju</button>
    </form>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, addDoc, getDocs, query, where, Timestamp } from "firebase/firestore";

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
      phone: '',
      price: 0
    };
  },
  methods: {
    // Funkcija za izračun cijene
    calculatePrice() {
      if (this.arrivalDate && this.departureDate) {
        const arrival = new Date(this.arrivalDate);
        const departure = new Date(this.departureDate);

        const days = Math.floor((departure - arrival) / (1000 * 60 * 60 * 24));
        this.price = days > 0 ? days * 85 : 0;
      }
    },
    async checkDateOverlap() {
      const arrival = new Date(this.arrivalDate);
      const departure = new Date(this.departureDate);

      // Postavi upit za dohvaćanje rezervacija koje se preklapaju
      const bookingsRef = collection(db, "bookings");
      const q = query(
          bookingsRef,
          where("apartmentId", "==", this.apartmentId),
          where("arrivalDate", "<=", this.departureDate),
          where("departureDate", ">=", this.arrivalDate)
      );

      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty; // Vraća true ako postoji preklapanje
    },
    async submitBooking() {
      try {
        // Provjera preklapanja datuma
        const isOverlap = await this.checkDateOverlap();
        if (isOverlap) {
          alert("Odabrani datumi preklapaju se s postojećom rezervacijom. Odaberite druge datume.");
          return;
        }

        const bookingData = {
          apartmentId: this.apartmentId,
          name: this.name,
          arrivalDate: this.arrivalDate,
          departureDate: this.departureDate,
          numGuests: this.numGuests,
          email: this.email,
          phone: this.phone,
          price: this.price,
          createdAt: Timestamp.now()
        };

        const docRef = await addDoc(collection(db, "bookings"), bookingData);
        console.log("Rezervacija uspješno spremljena s ID:", docRef.id);

        // Resetiranje forme
        this.name = '';
        this.arrivalDate = '';
        this.departureDate = '';
        this.numGuests = 1;
        this.email = '';
        this.phone = '';
        this.price = 0;

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
