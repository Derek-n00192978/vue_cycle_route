<template>
  <b-col>
    <div v-if="!loggedIn"> 
      <h4>Please Login into your account</h4>   
        Email: <input type="email" v-model="form1.email" /><br>
        Password: <input type="password" v-model="form1.password" />
      <button @click="login()">Submit</button>
    
    </div>
    <h4 v-else>
      Here are some routes for you to select from, color-coded to a bike type.
    </h4>
    <br>

    <div class="route_type_navbar">
      <span class="Gravel"><router-link :to="{ name:'bike', params: { type: 'Gravel' }}">Gravel Routes</router-link></span>
      <span class="Mountain"><router-link :to="{ name:'bike', params: { type: 'Mountain' }}">Mountain Routes</router-link></span>
      <span class="Road"><router-link :to="{ name:'bike', params: { type: 'Road' }}">Road Routes</router-link></span>
    </div>  
    <br>


        <b-card-group columns >
            <b-card   
                v-for="route in routes"
                :key="route._id" 
                :class="route.bike"              
            >   
               
                <b-card-body >
                  <router-link :to="{ name:'/routes', params: { id: route._id}}">

                 <p> {{ route.title }} </p>

                  </router-link>
                <p><strong>Bike Required:</strong> {{ route.bike }}</p>
                <p><strong>Distance:</strong> {{ route.distance }}</p>               
                <p><strong>Description:</strong> {{ route.description }}</p>
                </b-card-body>

            </b-card>
      </b-card-group>
      
  </b-col>  
 </template>


<script>
import axios from '@/config'


export default {
  name: "home",
  
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
          },
      }
  },
  mounted() {
      this.getData()
  },
  methods: {
    login() {
          axios
          .post('/login', {
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
.card {
    border-width: .5rem;
    border-radius: .5rem;
}
.Road {
  border-color: rgb(53, 49, 49);
  color:   rgb(53, 49, 49);
}

.Gravel {
  border-color: rgb(70, 155, 155); 
  color: rgb(70, 155, 155);
}

.Mountain {
  border-color: rgb(33, 112, 14); 
  color:  rgb(33, 112, 14); 
}

span {
  border: solid 1px red;
  margin: 0px 10px 50px 0px; 
  padding: 10px 20px;
  border-radius: 5px;
}

a {
   color: inherit;
}
a:hover{
  color: inherit;
}   



</style>