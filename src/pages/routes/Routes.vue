<template>
  <b-col>
    <div v-if="!loggedIn"> 
      <h4>Please Login into your account</h4>   
        Email: <input type="email" v-model="form1.email" /><br>
        Password: <input type="password" v-model="form1.password" />
      <button @click="login()">Submit</button>
    </div>
    <h4 v-else>
      Here is route to the {{ route.title }} that you selected.
    </h4>
        <b-card-group columns>
            <b-card>
                <p><strong>Title:</strong>       
                    {{ route.title }}
                </p>
                <p><strong>Distance:</strong>       
                    {{ route.distance }} 
                    <strong>Bike required:</strong>
                    {{ route.bike }}
                </p>
                <p><strong>Difficulty:</strong>
                    {{ route.difficulty }}
                  <strong>Elevation gain:</strong>
                    {{ route.elevation }}
                </p>
                <p><strong>Starting location:</strong>
                    {{ route.latlon }}
                </p> 
                 <p><strong>Points of Interest:</strong>
                    {{ route.poi }}
                </p>         
                <a :href='route.map_http' target="_blank">Link to Route Map</a>
                
                <p><strong>Description:</strong>
                    {{ route.description }}
                </p>            
            </b-card>
        </b-card-group>
        <!-- {{ route.map_iframe }}  //can we import the whole iframe directly -->
        <!--<iframe src='iFrame' width='600' height='600' frameborder='0' alt="garmin Sugarloaf route"></iframe>-->
    </b-col>   
 </template>


<script>
import axios from '@/config'
const IFRAME_URL = "https://connect.garmin.com/modern/course/embed/"
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
      },
      iFrame() {
          axios
          .get(`${IFRAME_URL}`)
          .then((response) => {
              console.log(response.data.map_iframe);
              this.route = response.data.map_iframe;
          })
          .catch((error) => console.log(error))
      }      
  }        
};
</script>

<style>

</style>