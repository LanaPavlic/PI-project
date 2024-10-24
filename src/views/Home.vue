<template>
  <div class="home">
    <header class="header">
      <!-- Logo positioned on the left -->
      <img src="/slika3.png.jpg" alt="Logo" class="logo">
      <!-- Container for title and navigation links -->
      <div class="title-nav-container">
        <!-- Title -->
        <h1 class="title">PINK HEART APARTMENTS</h1>
        <!-- Navigation Links -->
        <nav class="nav-links">
          <a href="#apartman1">APARTMAN 1</a>
          <a href="#apartman2">APARTMAN 2</a>
          <a href="#apartman3">APARTMAN 3</a>
          <a href="#atrakcije">ATRAKCIJE I AKTIVNOSTI</a>
        </nav>
      </div>
    </header>

    <!-- Content below the header -->
    <div class="content">
      <!-- Your page content here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Header styling */
.header {
  width: 100%;
  background-color: #fff;
  padding: 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid #ff69b4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and title/nav */
}

/* Logo styling */
.logo {
  width: 100px; /* Adjust size as needed */
  height: auto;
  margin-left: 20px; /* Add some padding from the left edge */
}

/* Container for title and navigation */
.title-nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1; /* This makes the container take up available space */
}

/* Title styling */
.title {
  color: #ff69b4;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}

/* Navigation link styling */
.nav-links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.nav-links a {
  color: #ff69b4;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 18px;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Additional styling */
.content {
  margin-top: 150px; /* to prevent content from hiding behind the fixed header */
}
</style>
