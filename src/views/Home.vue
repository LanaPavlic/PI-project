<template>
  <div class="home">
    <header class="header">
      <img src="/slika3.png.jpg" alt="Logo" class="logo">
      <div class="title-nav-container">
        <h1 class="title">PINK HEART APARTMENTS</h1>
          <ul>
      <li><router-link :to="{ name: 'Apartman', params: { id: 1 } }">Apartman 1</router-link></li>
      <li><router-link :to="{ name: 'Apartman', params: { id: 2 } }">Apartman 2</router-link></li>
      <li><router-link :to="{ name: 'Apartman', params: { id: 3 } }">Apartman 3</router-link></li>
    </ul>
        <nav>
      <RouterLink to="/aktivnosti">Atrakcije i aktivnosti</RouterLink>
    </nav>
      </div>
    </header>

 <!-- Atrakcije tekst iznad fiksnih slika grada -->
    <div class="atrakcije-text" style="margin-top: 130px;">
      Uživajte u nezaboravnom odmoru u našem apartmanu, smještenom u mirnom selu Salakovci,
      blizu Labina. Ovdje možete istraživati prekrasne plaže, slikovite šetnice i bogatu kulturnu
      baštinu. Opustite se uz more, uživajte u domaćim specijalitetima i doživite sve ljepote Istre.
      Rezervirajte svoj boravak i pronađite svoj kutak raja u Salakovcima!
    </div>


    <div class="content">
      <!-- Fixed Image Set for Grad Images -->
      <div class="fixed-image-gallery">
        <img v-for="(image, index) in imagesGrad" :key="'grad-' + index" :src="image"
             alt="Grad Image" class="fixed-image">
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

      <div class="thin-line"></div>

<!-- Logo s lijeve strane i tekst s desne -->
<div class="logo-container-bottom">
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
      imagesGrad: [slika1, slika2, slika3, slika4, slika5, slika6],
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
  border: 3px solid #ff69b4;
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
  align-items: center;
  justify-content: space-around;
  gap: 20px;
}

.title {
  color: #ff69b4;
  font-size: 30px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title-nav-container ul,
.title-nav-container nav {
  display: flex;
  gap: 15px;
}

.title-nav-container ul li {
  list-style: none;
}

.title-nav-container ul li a, 
.title-nav-container nav a {
  white-space: nowrap;
  color: #ff69b4;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}

.title-nav-container ul li a:hover,
.title-nav-container nav a:hover {
  text-decoration: underline;
}

.content {
  margin-top: 50px;
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
  border-radius: 10px;
  width: calc(100% - 40px);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.atrakcije-text {
  margin: 30px auto;
  line-height: 1.5;
  font-size: 1.2rem;
  text-align: center;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #ff69b4;
  border-radius: 10px;
  width: calc(100% - 40px);
  max-width: 100%;
  padding: 10px;
}

.fixed-image-gallery {
  margin-top: 0;
  padding-top: 10px;
}

.spacer {
  height: 40px;
}

.thin-line {
  width: 80%;
  height: 1px;
  background-color: white;
  border: 1px solid #ff69b4;
  margin: 75px auto 25px;
}

.logo-container-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 20px;
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-shadow: -1px -1px 0 #ff69b4, 1px -1px 0 #ff69b4, -1px 1px 0 #ff69b4, 1px 1px 0 #ff69b4;
}

.karta-image {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
  border: 1px solid #ff69b4;
}

.footer {
  background-color: white;
  color: #FF69B4;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  border: 3px solid #ff69b4;
}

.footer-content p {
  margin: 5px 0;
  font-size: 16px;
}

/* TABLET */
@media (min-width: 768px) and (max-width: 1024px) {
  .atrakcije-text {
    width: calc(100% - 20px);
    margin: 0 10px;
  }

  .fixed-image-gallery .fixed-image {
    width: 300px;
  }

  .apartman-title {
    font-size: 24px;
    text-align: center;
    padding: 8px;
  }

  .image-carousel {
    width: 90%;
    margin: 20px auto;
    position: relative;
  }

  .carousel-images {
    display: flex;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
    width: 100%;
  }

  .carousel-image {
    width: 250px;
    flex-shrink: 0;
    border-radius: 10px;
  }

  .carousel-images {
    transform: translateX(0);
    transition: transform 0.5s ease;
    width: 510px;
  }

  .nav-button {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }

  .nav-button.left {
    left: -20px;
  }

  .nav-button.right {
    right: -20px;
  }

  .thin-line {
    margin: 50px auto 20px;
  }

  .logo-container-bottom {
    flex-direction: column;
    text-align: center;
  }

  .karta-image {
    width: calc(100% - 30px);
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid #ff69b4;
  }
}

/* MOBITEL */
@media (max-width: 767px) {
  .header {
    padding: 10px 15px;
    gap: 8px;
  }

  .logo {
    width: 20px;
    margin-right: 5px;
  }

  .title {
    font-size: 20px;
    color: #ff69b4;
    flex: 1;
    overflow: hidden;
  }

  .nav-links {
    gap: 10px;
    margin-left: 5px;
  }

  .nav-links a {
    font-size: 9px;
    margin: 0 5px;
  }

  .atrakcije-text {
    width: calc(100% - 20px);
    margin: 10px;
    font-size: 13px;
  }

  .fixed-image {
    width: 45%;
  }

  .apartman-title {
    font-size: 20px;
    padding: 8px 15px;
    margin: 20px auto;
  }

  .image-carousel {
    width: 100%;
    margin: 15px auto;
  }

  .carousel-images {
    gap: 5px;
    width: 100%;
  }

  .carousel-image {
    width: calc(100% - 20px);
    max-width: 200px;
  }

  .nav-button {
    width: 25px;
    height: 25px;
    font-size: 18px;
  }

  .nav-button.left {
    left: 5px;
  }

  .nav-button.right {
    right: 5px;
  }

  .thin-line {
    margin: 40px auto 15px;
  }

  .logo-container-bottom {
    flex-direction: column;
    margin-top: 15px;
  }

  .karta-image {
    width: calc(100% - 20px);
    margin: 0 auto;
  }

  .footer {
    font-size: 14px;
    padding: 15px;
  }
}

</style>