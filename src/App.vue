<template>
  <div>
    <MyNavBar :admin="admin" :loggedIn="loggedIn" v-on:logout="setLoggedOut"/>
    <b-container class="bgExampleClass" fuild>
      <br />
      <b-row>
        <router-view :loggedIn="loggedIn" v-on:login="setLoggedIn" v-on:invalid="setLoggedOut" />
      </b-row>
      <!-- <img src="@/assets/david-marcu-VfUN94cUy4o-unsplash.jpg" width=100% height=100% image-author="David Marcu"> -->
      <MyFooter />
    </b-container>    
  </div>
</template>

<script>
import MyNavBar from "@/components/MyNavBar.vue"
import MyFooter from "@/components/MyFooter.vue"

export default {
  name: 'App',
  components: {
    MyNavBar,
    MyFooter
  },
   data(){
    return {
      loggedIn: false,
      admin: false
    }
  },
  created(){
    localStorage.getItem('token') ? this.loggedIn =true : this.loggedIn = false
  },
  methods:{
    setLoggedIn(token, admin) {     
      this.loggedIn= true
      localStorage.setItem('token', token)
      localStorage.setItem('admin', admin)
      this.admin = admin

    },
    setLoggedOut() {
      this.loggedIn= false
      localStorage.removeItem('token')
      this.$router.push('/routes/register')
      // this.$router.replace({name: 'home'})
    }  
  }
};
</script>

<style>
.bgExampleClass {
  background-image: url('~@/assets/david-marcu-VfUN94cUy4o-unsplash.jpg') ;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  fill-opacity: 10%;
}
</style>
