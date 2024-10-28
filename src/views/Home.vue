<template>
  <div class="home">
    <header class="header">
      <img src="/slika3.png.jpg" alt="Logo" class="logo">
      <div class="title-nav-container">
        <h1 class="title">PINK HEART APARTMENTS</h1>
        <nav>
      <RouterLink to="/apartman1">Apartman 1</RouterLink>
      <RouterLink to="/apartman2">Apartman 2</RouterLink>
      <RouterLink to="/apartman3">Apartman 3</RouterLink>
      <RouterLink to="/aktivnosti">Atrakcije i aktivnosti</RouterLink>
    </nav>
      </div>
    </header>

 <!-- Atrakcije tekst iznad fiksnih slika grada -->
    <div class="atrakcije-text" style="margin-top: 130px;">
      Uživajte u nezaboravnom odmoru u našem apartmanu, smještenom u mirnom selu Salakovci, blizu Labina. Ovdje možete istraživati prekrasne plaže, slikovite šetnice i bogatu kulturnu baštinu. Opustite se uz more, uživajte u domaćim specijalitetima i doživite sve ljepote Istre. Rezervirajte svoj boravak i pronađite svoj kutak raja u Salakovcima!
    </div>


    <div class="content">
      <!-- Fixed Image Set for Grad Images -->
      <div class="fixed-image-gallery">
        <img v-for="(image, index) in imagesGrad" :key="'grad-' + index" :src="image" alt="Grad Image" class="fixed-image">
      </div>


      <div class="apartman-title" id="apartman1">Apartman 1</div>
      <!-- Carousel for Apartman 1 Images -->
      <div class="image-carousel">
        <button @click="prevImage('app1')" class="nav-button left">&#8249;</button>
        <div class="carousel-images">
          <img v-for="(image, index) in visibleImages('app1')" :key="'app1-' + index" :src="image" alt="App1 Image" class="carousel-image">
        </div>
        <button @click="nextImage('app1')" class="nav-button right">&#8250;</button>
      </div>

      <div class="apartman-title" id="apartman2">Apartman 2</div>
      <!-- Carousel for Apartman 2 Images -->
      <div class="image-carousel">
        <button @click="prevImage('app2')" class="nav-button left">&#8249;</button>
        <div class="carousel-images">
          <img v-for="(image, index) in visibleImages('app2')" :key="'app2-' + index" :src="image" alt="App2 Image" class="carousel-image">
        </div>
        <button @click="nextImage('app2')" class="nav-button right">&#8250;</button>
      </div>

      <div class="apartman-title" id="apartman3">Apartman 3</div>
      <!-- Carousel for Apartman 3 Images -->
      <div class="image-carousel">
        <button @click="prevImage('app3')" class="nav-button left">&#8249;</button>
        <div class="carousel-images">
          <img v-for="(image, index) in visibleImages('app3')" :key="'app3-' + index" :src="image" alt="App3 Image" class="carousel-image">
        </div>
        <button @click="nextImage('app3')" class="nav-button right">&#8250;</button>
      </div>

  

<!-- Logo s lijeve strane i tekst s desne -->
<div class="logo-container">
  <img src="/logslika.png" alt="Logo" class="logo">
  <div class="logo-text">Salakovci 12b, 52220, Salakovci</div>
</div>

<img src="/karta.jpg" alt="Karta" class="karta-image">
<div class="spacer"></div>

<footer class="footer">
  <div class="footer-content">
    <p>Email: info@pinkheartapartments.com</p>
    <p>Telefon: +385 91 234 5678</p>
    <p>Adresa: Salakovci 12b, 52220, Salakovci</p>
  </div>
</footer>

    </div>
  </div>
</template>

<script>
import slika1 from './Grad/slika1.jpg';
import slika2 from './Grad/slika2.jpg';
import slika3 from './Grad/slika3.jpg';
import slika4 from './Grad/slika4.jpg';
import slika5 from './Grad/slika5.jpg';
import slika6 from './Grad/slika6.jpg';
import slika7 from './Grad/slika7.jpg';

import app1Img0 from './App1/slika1.jpg';
import app1Img1 from './App1/slika0.jpg';
import app1Img2 from './App1/slika2.jpg';
import app1Img3 from './App1/slika3.jpg';
import app1Img4 from './App1/slika4.jpg';
import app1Img5 from './App1/slika5.jpg';
import app1Img6 from './App1/slika6.jpg';
import app1Img7 from './App1/slika7.jpg';
import app1Img8 from './App1/slika8.jpg';
import app1Img9 from './App1/slika9.jpg';
import app1Img10 from './App1/slika10.jpg';
import app1Img11 from './App1/slika11.jpg';

import app2Img0 from './App2/ap21.jpg';
import app2Img1 from './App2/ap22.jpg';
import app2Img2 from './App2/ap23.jpg';
import app2Img3 from './App2/ap24.jpg';


export default {
  name: "Home",
  data() {
    return {
      imagesGrad: [slika1, slika2, slika3, slika4, slika5, slika6, slika7],
      imagesApp1: [app1Img0, app1Img1, app1Img2, app1Img3, app1Img4, app1Img5, app1Img6, app1Img7, app1Img8, app1Img9, app1Img10, app1Img11],
      currentIndexApp1: 0,
      currentIndexApp2: 0,
      currentIndexApp3: 0,
    };
  },
  methods: {
    nextImage(type) {
      if (type === 'app1') {
        this.currentIndexApp1 = (this.currentIndexApp1 + 1) % this.imagesApp1.length;
      } else if (type === 'app2') {
        this.currentIndexApp2 = (this.currentIndexApp2 + 1) % this.imagesApp1.length;
      } else if (type === 'app3') {
        this.currentIndexApp3 = (this.currentIndexApp3 + 1) % this.imagesApp1.length;
      }
    },
    prevImage(type) {
      if (type === 'app1') {
        this.currentIndexApp1 = (this.currentIndexApp1 - 1 + this.imagesApp1.length) % this.imagesApp1.length;
      } else if (type === 'app2') {
        this.currentIndexApp2 = (this.currentIndexApp2 - 1 + this.imagesApp1.length) % this.imagesApp1.length;
      } else if (type === 'app3') {
        this.currentIndexApp3 = (this.currentIndexApp3 - 1 + this.imagesApp1.length) % this.imagesApp1.length;
      }
    },
    visibleImages(type) {
      let images, currentIndex;
      if (type === 'app1') {
        images = this.imagesApp1;
        currentIndex = this.currentIndexApp1;
      } else if (type === 'app2') {
        images = this.imagesApp1;
        currentIndex = this.currentIndexApp2;
      } else if (type === 'app3') {
        images = this.imagesApp1;
        currentIndex = this.currentIndexApp3;
      }
      return [
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length],
      ];
    },
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}

#app {
  overflow-x: hidden;
}

.header {
  width: 100%;
  max-width: 100vw;
  background-color: #fff;
  padding: 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border: 2px solid #ff69b4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
}

.logo {
  width: 100px;
  height: auto;
  margin-left: 20px;
}

.title-nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 0 20px;
}

.title {
  color: #ff69b4;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.nav-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
}

.nav-links a {
  white-space: nowrap;
  color: #ff69b4;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 18px;
}

.nav-links a:hover {
  text-decoration: underline;
}

.content {
  margin-top: 150px;
}

.fixed-image-gallery {
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.fixed-image {
  width: 350px;
  height: auto;
  border-radius: 10px;
}

.image-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 1150px;
  margin: 20px auto;
}

.carousel-images {
  display: flex;
  justify-content: center;
  gap: 35px;
}

.carousel-image {
  width: 350px;
  height: auto;
  border-radius: 10px;
}

.nav-button {
  background-color: #ff69b4;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.nav-button.left {
  left: -50px;
}

.nav-button.right {
  right: -50px;
}

.apartman-title {
  background-color: #fff;
  color: #ff69b4;
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  padding: 10px 20px;
  margin-top: 30px;
  border: 2px solid #ff69b4;
  width: calc(100% - 40px);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.atrakcije-text {
  margin: px 0; /* Smanji razmak iznad i ispod teksta */
  line-height: 1.5; /* Povećava razmak između redova */
  font-size: 1.2rem; /* Povećana veličina fonta */
  text-align: center; /* Centriranje teksta */
  color: black; /* Ružičasta boja teksta */
  background-color: rgba(255, 255, 255, 0.8); /* Lagana bijela pozadina */
  padding: 10px; /* Unutarnje margine za bolji izgled */
  border-radius: 10px; /* Okrugli rubovi pozadine */
}

.fixed-image-gallery {
  margin-top: 0; /* Ukloni razmak iznad slika */
  padding-top: 10px; /* Ako je potrebno, možeš dodati malo paddinga da razmakneš slike */
}


.spacer {
  height: 40px;
}

.logo-container {
  display: flex; /* Koristi flexbox za poravnavanje */
  align-items: center; /* Vertikalno poravnanje loga i teksta */
  justify-content: center; /* Centriranje cijelog kontejnera */
  margin-bottom: 20px; /* Razmak ispod loga i teksta */
}

.logo {
  width: 50px; /* Širina loga (prilagodi prema potrebi) */
  height: auto; /* Očuvanje omjera */
  margin-right: 10px; /* Razmak između loga i teksta */
}

.logo-text {
  font-size: 20px; /* Veličina fonta za tekst */
  color: white; /* Boja teksta */
}
.karta-image {
  display: block; /* Ovaj stil omogućava centriranje */
  margin: 20px auto; /* Postavlja marginu automatski s lijeve i desne strane, a i razmak iznad i ispod */
  max-width: 100%; /* Osiguraj da slika ne izlazi izvan granica */
  height: auto; /* Očuvanje omjera */
}
.footer {
  background-color: white; /* Bijela pozadina */
  color: #FF69B4; /* Ružičasta boja teksta (možeš prilagoditi nijansu) */
  text-align: center; /* Centriranje teksta */
  padding: 20px; /* Unutarnji razmak */
  position: relative; /* Pozicioniranje */
  bottom: 0; /* Drži ga na dnu */
  width: 100%; /* Širina podnožja */
}

.footer-content p {
  margin: 5px 0; /* Razmak između paragrafa */
  font-size: 16px; /* Veličina fonta */
}

</style>
