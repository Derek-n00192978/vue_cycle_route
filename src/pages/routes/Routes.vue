<template>
  <b-col>
    <div v-if="!loggedIn"> 
      <h4>Please Login into your account</h4>   
        Email: <input type="email" v-model="form1.email" /><br>
        Password: <input type="password" v-model="form1.password" />
      <button @click="login()">Submit</button>
    </div>
    <h4 v-else>
      Here is the route you selected.
    </h4>
        <b-card-group columns>
            <b-card>
            <p><strong>Title:</strong>       
                {{ route.title }}
            </p>
            <p><strong>Distance:</strong>       
                {{ route.distance }}
            </p>
            <p><strong>Bike required:</strong>
                {{ route.bike }}
            </p>
            <p><strong>Description:</strong>
                {{ route.description }}
            </p>            
            <p><strong>Elevation gain:</strong>
                {{ route.elevation }}
            </p>
            <p><strong>Starting Point:</strong>
                {{ route.latlon }}
            </p>
            <p><strong>Map iframe:</strong>
                {{ route.map_iframe }}
            </p>
            <p><strong>Map http:</strong>
                {{ route.map_http }}
            </p>
            </b-card>
        </b-card-group>
    </b-col>   
 </template>


<script>
import axios from '@/config'
export default {
  name: "/routes",
  components:{

  },
  props:{
    loggedIn: Boolean
  },
  data(){
      return{
          form1: {
              email: "",
              password: ""
          },
            route: {}
    }
  },
  mounted() {
      this.getData()
  },
  methods: {
      getData() {
            let token = localStorage.getItem('token')
            axios
            .get(`/route/${this.$route.params.id}`,
            {
                headers: {
                    "Accepted": `application/json`,
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data)
                this.route = response.data
            })
            .catch(error => console.log(error))                
        },
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
      }      
  }        
};
</script>

<style>

</style>