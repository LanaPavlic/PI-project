<template>
  <div class="login-form">
    <h2>LOG IN</h2>
    <form action="/login" method="post">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>

    <p>Log in with <a href="" class="link">Google</a></p>
  </div>

</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

*{
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100vw;
  background: #ff69b4;
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.form_area{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  height: auto;
  width: auto;
  border-radius: 20px;
  box-shadow: 30px 35px 2px #ff00bf;
}

.title{
  color: #ff00bf;
  font-weight: 900;
  font-size: 1.5em;
  margin-top: 20px;
}

.sub_title{
  font-weight: 600;
  margin: 5px 0;
}

.form_group{
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 20px;
}

.form_style{
  outline: none;
  border: 2px solid #ff00bf;
  box-shadow: 3px 4px 0px 1px #ff00bf;
  width: 290px;
  padding: 12px 10px;
  border-radius: 4px;
  font-size: 15px;
}

.form_style:focus, .btn:focus{
  transform: translateY(4px);
  box-shadow: 1px 2px 0px 0px #ff00bf;
}

.btn{
  padding: 15px;
  margin: 30px 0px;
  width: 310px;
  font-size: 15px;
  background: #ff69b4;
  border-radius: 30px;
  font-weight: 800;
  box-shadow: 5px 5px 0px 0px #ff00bf;
}

p{
  margin: 20px 0px;
}

.link{
  font-weight: 800;
}

</style>