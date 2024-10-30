<template>
  <div class="calendar">
    <header class="calendar-header">
      <button @click="prevMonth">Prethodni</button>
      <h2>{{ monthYear }}</h2>
      <button @click="nextMonth">Sljedeći</button>
    </header>

    <div class="calendar-grid">
      <div v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</div>
      <div
          v-for="(day, index) in daysInMonth"
          :key="index"
          :class="['calendar-day', { 'unavailable': isDayUnavailable(day) }]"
      >
        <span>{{ day }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apartmentId: Number,
    reservedDays: Array
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth()
    };
  },
  computed: {
    monthYear() {
      return new Date(this.currentYear, this.currentMonth).toLocaleDateString('hr-HR', { month: 'long', year: 'numeric' });
    },
    daysOfWeek() {
      return ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned'];
    },
    daysInMonth() {
      const days = [];
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }
      return days;
    }
  },
  methods: {
    isDayUnavailable(day) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      return this.reservedDays.some(reserved => {
        const reservedDate = new Date(reserved.seconds * 1000); // Pretvaramo Firestore timestamp u Date objekt
        console.log("Provjera datuma:", reservedDate.toDateString(), "i trenutni dan:", date.toDateString());
        return reservedDate.getTime() === date.getTime(); // Uspoređujemo vrijeme u milisekundama
      });
    },
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentYear -= 1;
        this.currentMonth = 11;
      } else {
        this.currentMonth -= 1;
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentYear += 1;
        this.currentMonth = 0;
      } else {
        this.currentMonth += 1;
      }
    }
  }
};
</script>

<style scoped>
.calendar {
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.day-header {
  font-weight: bold;
}
.calendar-day {
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.unavailable {
  color: #ccc;
  text-decoration: line-through;
}
</style>
