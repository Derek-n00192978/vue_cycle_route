<template>
  <b-col>
    <div v-if="!loggedIn"> 
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
      Here is the route to {{ route.title }}.</h4>
      <p class="btn btn-outline-warning" @click="cancel()">Back to previous page.{{$route.params.type}}</p>
       <div class="row">                 
        <div class="col-md-6">        
            <b-card :class="route.bike">                
                <p><strong>Title:</strong>       
                    {{ route.title }}
                </p>
                <p><strong>Distance:</strong>       
                    {{ route.distance }} 
                    <strong>Bike Required:</strong>
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
                 <p><strong>Points of Interest:</strong> {{ route.poi }} </p>         
                <a :href='route.map_http' target="_blank"><strong>Link to Route Map</strong></a>
            </b-card>        
        </div>
        <div class="col-md-6 float-right">
            <a :href='route.map_http' target="_blank"><strong>Link to Route Map</strong></a>
            <iframe :src="iframeURL + route.map_iframe"  width='465' height='478' frameborder='0'></iframe>            
        </div>
        <div class="col-md-12">
          <b-card :class="route.bike">
            <p><strong>Description Extended:</strong> {{ route.descriptionLong }} </p>
          </b-card> 
          <br>
          <div class="row">          
            <div class="col-md-6">
              <iframe :src="ihttpURL + route.image_http" width="560" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              <p class="white"><strong>Please Note: If world map appears please refresh page to see starting location of route.</strong></p>
            </div>
            <div class="col-md-6">       
              <iframe :src="googleURL + googleAPI" width="540" height="590"></iframe>
              <p class="white"><strong>Please Note: When clicking on a starting location please make sure to select the correct one for the route selected.</strong></p>
            </div>
          </div>
        </div>
       </div>       
    </b-col>   
 </template>
<script>
import axios from '@/config'
export default {
  name: "routes",
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
          iframeURL: "https://connect.garmin.com/modern/course/embed/",
          ihttpURL: "https://www.google.com/maps/embed?",
          googleURL: "https://www.google.com/maps/d/u/0/embed?SameSite=None&mid=",
          googleAPI:"1ftkRzZYgK2vv0kSzve3y_KhyDCre3yBK&ehbc=2E312F",
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
        },cancel() {
            this.$router.go(-1)
        },
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
.white{
  color: rgb(255,255,255);
}
</style>