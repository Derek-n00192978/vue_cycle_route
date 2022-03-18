<template>
  <b-col>
    <div v-if="!loggedIn"> 
      <h4>Please Login into your account</h4>   
        Email: <input type="email" v-model="form1.email" /><br>
        Password: <input type="password" v-model="form1.password" />
      <button @click="login()">Submit</button>
    
    </div>
    <h4 v-else>
      Here are some routes for a {{$route.params.type}} bike.
    </h4> 
   
    <br>
    <p class="btn btn-outline-warning" @click="cancel()">Back to all Routes</p>
    
       
        <b-card-group columns>
            <b-card   
                v-for="route in routes"
                :key="route._id"
                :class="route.bike"
            >   
                <iframe :src="ihttpURL + route.image_http" width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <p><strong>Title:</strong> <router-link :to="{ name:'/routes', params: { id: route._id}}">{{ route.title }}</router-link></p>
                <p><strong>Bike Required:</strong> {{ route.bike }}</p>
                <p><strong>Distance:</strong> {{ route.distance }}</p>
                <p><strong>Elevation Gain:</strong> {{ route.elevation }}</p>
                <p><strong>Starting point:</strong> {{ route.latlon }}</p>
                <p><strong>Description:</strong> {{ route.description }}</p>
                <a :href='route.map_http' target="_blank">Link to Route Map</a>
                
              
            </b-card>
      </b-card-group>
  </b-col>  
 </template>


<script>
import axios from '@/config'
export default {
  name: "bike",
  components: {},
    
  props:{
    loggedIn: Boolean
  },
  data(){
      return{
           routes: [],
           ihttpURL: "https://www.google.com/maps/embed?",
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
          .post('/login', {
              email: this.form1.email,
              password: this.form1.password
          })
          .then(response => {
              console.log(response.data.token)
              this.$emit('login', response.data.token)
              })
              .catch(error => {
                  console.log(error)
                  console.log(error.response.message)
              })
      },
      getData() {
          let token = localStorage.getItem('token')
          axios
          .get(`route/bike/${this.$route.params.type}`,
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
      },cancel() {
            this.$router.go(-1)
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
}

.Gravel {
  border-color: rgb(70, 155, 155);
}

.Mountain {
  border-color: rgb(33, 112, 14); 
  color:  rgb(33, 112, 14); 
}

</style>