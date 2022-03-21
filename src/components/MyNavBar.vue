<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Leinster Leisure Cycle Route Application 2022</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/home">Home</router-link>
          <router-link class="nav-link" to="/info">Indepth</router-link>
          <!--<router-link class="nav-link" to="/routes">Routes</router-link>-->
          <router-link class="nav-link" to="/addRoute">addRoutes</router-link>
          <router-link class="nav-link" to="/image">addImages</router-link>
          
          
        </div>
      </div>
       <button v-if="!loggedIn" @click="$router.push('/home')" class="btn btn-outline-info my-2 my-sm-0 btn-sm"  :to="{name: 'Login'}">Login</button>
      
      <button v-if="!loggedIn" @click="$router.push('/register')" class="btn btn-outline-warning my-2 my-sm-0 btn-sm"  :to="{name: 'Register'}">Register</button>
      <button v-if="loggedIn" @click="logout" class="btn btn-outline-danger my-2 my-sm-0 btn-sm">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyNavBar",
   props: {
    loggedIn: Boolean
  },
  methods:{
    logout(){      
      this.$emit('logout')
      this.$router.push('/')
    },
    login(){
      this.$emit('login')
    },
    register(){
      this.$emit('Register')
    }
  }
};
</script>
<style>
.btn-outline-info {
  margin-right: 10px;
}
</style>
