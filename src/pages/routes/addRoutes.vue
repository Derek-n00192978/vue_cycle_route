<template>
    <div class="container">
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
        <p class="text-center" v-else>Add a Route to the Leinster Leisure Cycle Route Application by filling out the form below</p>
        <p class="text-center">Please Note: To add an image to your route please visit the addImage page before adding a route.</p>
        <br>
        <div class="row">
            <div class="col-md-8 m-auto">
                <form style="border:2px solid #ccc" method="POST" >
                    <div class="custom-file mb3">
                            <p class="text-center">Please fill in this form to create a Route.</p>
                            <hr>
                            <label for="title"><b>Title :</b></label>
                            <input type="text" v-model="form3.title" placeholder="Enter Title" name="title" required class="float-right"/>
                            <br>
                            <label for="description"><b>Route Description :</b></label>
                            <input type="text" v-model="form3.description" placeholder="Enter Short Description" name="description" required  class="float-right"/>
                            <br>
                            <label for="difficulty"><b>Difficulity :</b>
                            <select class="form-control floatright" id="difficulty" v-model="form3.difficulty" name="difficulty" required>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>   </label>
                            <br>
                            <label for="poi"><b>Points of Interest :</b></label>
                            <input type="text" v-model="form3.poi" placeholder="Enter Points of Interest" name="poi" class="float-right">
                            <br>
                            <label for="bike"><b>Type of bike required :</b>
                            <select class="form-control float-right" id="bike" v-model="form3.bike" name="bike" required>
                                <option>Mountain</option>
                                <option>Gravel</option>
                                <option>Road</option>
                            </select> </label>      
                            <br>
                            <label for="distance"><b>Distance of Route :</b></label>
                            <input type="text" v-model="form3.distance" placeholder="Distance" name="distance" required class="float-right">
                            <br>
                            <label for="duration"><b>Possible Duration of spin :</b></label>
                            <input type="text" v-model="form3.duration" placeholder="Duration" name="duration" required class="float-right">
                            <br>
                            <label for="elevation"><b>Elevation gain over route :</b></label>
                            <input type="text" v-model="form3.elevation" placeholder="Elevation gain in meters" name="elevation" required class="float-right">
                            <br>
                            <label for="image_title"><b>Image title :</b></label>
                            <input type="text" v-model="form3.image_http" placeholder="Name of Image" name="image_http" required class="float-right">
                            <br>
                            
                            <label for="map_title"><b>Title of Map :</b></label>
                            <input type="text" v-model="form3.map_title" placeholder="Title of map" name="map_title" required class="float-right">
                            <br>
                            <label for="map_iframe"><b>iFrame no.ref of map :</b></label>
                            <input type="text" v-model="form3.map_iframe" placeholder="Map iframe no." name="map_iframe" required class="float-right">
                            <br>
                            <label for="map_http"><b>HTTP ref of map :</b></label>
                            <input type="text" v-model="form3.map_http" placeholder="Map HTTP" name="map_http" required class="float-right">
                            <br>
                            <label for="pit_stop"><b>Things to see on the route :</b></label>
                            <input type="text" v-model="form3.pit_stop" placeholder="Pit Stop details" name="pit_stop" required class="float-right">
                            <br>
                            <label for="latlon"><b>Latlon of route :</b></label>
                            <input type="text" v-model="form3.latlon" placeholder="Latatuide/longdtuide" name="latlon" required class="float-right">
                            <br>
                            <label for="descriptionLong"><b>Description Extended :</b></label>
                            <input type="text" v-model="form3.descriptionLong" placeholder="Extended detailed description of route" name="descriptionLong" required class="float-right">         
                            <div class="clearfix">
                                <button type="submit" class="signupbtn btn-block m-auto float-right" @click="addRoute()"><router-link :to="{name:'home'} ">AddRoute</router-link></button>
                            <button type="button" class="cancelbtn btn-warning btn-block m-auto"><router-link :to="{name:'landing'} ">Cancel</router-link></button>                        
                        </div>
                    </div>
                </form>
            </div>
        </div>  
    </div>          
</template>
<script>
import axios from '@/config'
export default {
  name: "addRouteForm",
  components:{},     
  props:{
    loggedIn: Boolean
  },
  data(){
      return{
          form1: {
              email: "",
              password: ""              
          },
          form3:{
              title: "",
              description: "",
              difficulty: "",
              poi: "",
              bike: "",
              distance: "",
              duration: "",
              elevation: "",
              image_http: "",           
              map_title: "",
              map_iframe: "",
              map_http: "",
              pit_stop: "",
              latlon: "",
              descriptionLong: "",
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
               this.$router.push({name: "landing"})
              })
              .catch(error => {
                  console.log(error)
                  console.log(error.response.message)
              })
      },
      getData() {
          let token = localStorage.getItem('token')
          axios
          .get(`addRoute`,
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
      },  
      addRoute(){
          axios
          .post('/route/', {
              title: this.form3.title,
              description: this.form3.description,
              difficulty: this.form3.difficulty,
              poi: this.form3.poi,
              bike: this.form3.bike,
              distance: this.form3.distance,
              duration: this.form3.duration,
              elevation: this.form3.elevation,
              image_http: this.form3.image_http,             
              map_title: this.form3.map_title,
              map_iframe: this.form3.map_iframe,
              map_http: this.form3.map_http,
              pit_stop: this.form3.pit_stop,
              latlon: this.form3.latlon,
              descriptionLong: this.form3.descriptionLong
          })
          .then(response => {
              console.log(response.data)})
              this.$router.push({name: "home"})
              .catch(error => {
                  console.log(error)
                  console.log(error.response)
          })
      }
  }
};
</script>
<style>
.Login {
  border-color: rgb(255, 174, 82);
}    
</style>