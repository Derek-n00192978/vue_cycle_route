<template>
  <b-col>
    <div v-if="!loggedIn" class="col-md-12"> 
      <b-card-group columns>
        <b-card class="Login">           
          <h4>Please Login into your account</h4>   
              Email: <input type="email" v-model="form1.email" /><br>
              Password: <input type="password" v-model="form1.password" />
          <button @click="login()">Submit</button>
        </b-card>
      </b-card-group>
    </div>
    <h4 v-else>
      Here are some routes for you to select from, color-coded to a bike type.
    </h4>
    <br>

    <div class="route_type_navbar">
      <span class="Gravel"><router-link :to="{ name:'bike', params: { type: 'Gravel' }}"><strong>Gravel Routes</strong></router-link></span>
      <span class="Mountain"><router-link :to="{ name:'bike', params: { type: 'Mountain' }}"><strong>Mountain Routes</strong></router-link></span>
      <span class="Road"><router-link :to="{ name:'bike', params: { type: 'Road' }}"><strong>Road Routes</strong></router-link></span>
    </div>  
    <br>
        <b-card-group columns >
            <b-card   
                v-for="route in routes"
                :key="route._id" 
                :class="route.bike"              
            >   
               <iframe :src="ihttpURL + route.image_http " width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <b-card-body >
                  <router-link :to="{ name:'/routes', params: { id: route._id}}">
                    <p><strong> {{ route.title }} </strong></p>
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
           ihttpURL: "https://www.google.com/maps/embed?SameSite=None?",
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
              console.log(response.data.token, response.data.admin)
              this.$emit('login', response.data.token, response.data.admin)
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
    opacity: 0.7;
}
.Road {
  border-color: rgb(53, 49, 49);
  color:   rgb(53, 49, 49);

}

.Gravel {
  border-color: rgb(146, 33, 107);
  color: rgb(146, 33, 107);
}

.Mountain {
   border-color: rgb(87, 214, 55); 
  color:  rgb(87, 214, 55);
}
.Login {
  border-color: rgb(255, 174, 82);
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