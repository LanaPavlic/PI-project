<template>
  <div>
    <!-- Header Section -->
    <header class="header">
      <div class="logo-container">
        <img src="/slika3.png.jpg" alt="Logo" class="logo" />
      </div>
      <h1 class="header_title">PINK HEART APARTMENTS</h1>
    </header>

    <!-- Form Section -->
    <div class="container">
      <div class="form_area">
        <h4 class="title">SIGN UP</h4>
        <form>
          <div class="form_group">
            <label for="name" class="sub_title">Name</label>
            <input type="text" class="form_style" id="name" placeholder="Enter your full name">
          </div>
          <div class="form_group">
            <label for="email" class="sub_title">Email</label>
            <input type="email" class="form_style" id="email" placeholder="Enter your email" />
          </div>
          <div class="form_group">
            <label for="password" class="sub_title">Password</label>
            <input type="password" class="form_style" id="password" placeholder="Enter your password" />
          </div>
          <div class="form_group">
            <label for="repeat-password" class="sub_title">Repeat Password</label>
            <input type="password" class="form_style" id="repeat-password" placeholder="Repeat your password" />
          </div>
          <div>
            <button type="submit" class="btn">SIGN UP!</button>
            <p>Have an Account? <a href="" class="link">Login Here!</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// No changes to your script logic needed
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
  background-color: #FF69B4; 
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
  border: 2px solid #FF00BF; 
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

.header_title {
  color: #ff00bf; 
  font-weight: 900;
  font-size: 2em;
  flex-grow: 1; 
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 130px; 
}

.form_area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 15px 15px 10px 0px #ff00bf;
}

.title {
  color: #ff00bf;
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 20px;
}

.sub_title {
  font-weight: 600;
  margin-bottom: 5px;
}

.form_group {
  margin-bottom: 20px;
  width: 100%;
}

.form_style {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ff00bf;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.form_style:focus {
  border-color: #ff69b4;
  box-shadow: 0 0 10px rgba(255, 105, 180, 0.5); 
}

.btn {
  width: 100%;
  padding: 15px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 5px 5px 0px 0px #ff00bf; 
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #ff00bf;
  box-shadow: 7px 7px 17px rgba(255, 0, 191, 0.8); 
}

p {
  margin-top: 20px;
  font-weight: 600;
}

.link {
  color: #ff00bf;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>