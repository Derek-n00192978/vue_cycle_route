<template>
  <b-col>
    <div v-if="!loggedIn"> 
      <h4>Please Login into your account</h4>   
        Email: <input type="email" v-model="form1.email" /><br>
        Password: <input type="password" v-model="form1.password" />
      <button @click="login()">Submit</button>
    
    </div>
    <h4 v-else>
      Here are some routes for you to select.
    </h4>
    <br>
  
       
        <b-card-group columns>
            <b-card   
                v-for="route in routes"
                :key="route._id"
            >   
         
                <p><strong>Title:</strong>  <router-link :to="{ name:'/routes', params: { id: route._id}}">{{ route.title }}</router-link></p>
                <p><strong>Bike Required:</strong> {{ route.bike }}</p>
                <p><strong>Distance:</strong> {{ route.distance }}</p>
                
                
                <p><strong>Description:</strong> {{ route.description }}</p>
                
              
            </b-card>
      </b-card-group>
  </b-col>  
 </template>


<script>
import axios from '@/config'

export default {
  name: "/home",
  components: {},
    
  props:{
    loggedIn: Boolean
  },
  data(){
      return{
           routes: [],
           form1: {
              email: "",
              password: ""              
          }
    }
  },
  mounted() {
      this.getData()
  },
  methods: {
    login() {
          axios
          .post('http://localhost:3000/login', {
              email: this.form1.email,
              password: this.form1.password
          })
          .then(response => {
              console.log(response.data.token)
              this.$emit('login', response.data.token)
              // this.$router.push({name: "landing"})
              })
              .catch(error => {
                  console.log(error)
                  console.log(error.response.message)
              })
      },
      getData() {
          let token = localStorage.getItem('token')
          axios
          .get(`/route`,
          {
              headers: {
                  "Authorization": `Bearer ${token}`
              }
          })
          .then(response => {
              console.log(response.data)
              this.routes = response.data
          })
          .catch(error => console.log(error))
      }   
      
  }
};
</script>

<style>

</style>