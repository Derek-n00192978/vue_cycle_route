<template>
    <form action="action_page.php" style="border:1px solid #ccc">
    <div class="container">
        <h2>Add a Route to the Leinster Leisure Cycle Route Application</h2>
        <p>Please fill in this form to create a Route.</p>
        <hr>
        <label for="title"><b>Title</b></label>
        <input type="text" v-model="form3.title" placeholder="Enter Title" name="title" required />
        <br>
        <label for="description"><b>Route Description</b></label>
        <input type="text" v-model="form3.description" placeholder="Enter Description" name="description" required />
        <br>
        <label for="difficulity"><b>Difficulity</b></label>
        <select class="form-control" id="difficulity" v-model="form3.difficulity" name="difficulity" required>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>   
        <br>
        <label for="poi"><b>Points of Interest</b></label>
        <input type="text" v-model="form3.poi" placeholder="Enter Points of Interest" name="poi">
        <br>
        <label for="bike"><b>Type of bike required</b></label>
        <select class="form-control" id="bike" v-model="form3.bike" name="bike" required>
            <option>Mountain</option>
            <option>Gravel</option>
            <option>Road</option>
        </select>       
        <br>
        <label for="distance"><b>Distance of Route</b></label>
        <input type="text" v-model="form3.distance" placeholder="Distance" name="distance" required>
        <br>
        <label for="duration"><b>Possible Duration of spin</b></label>
        <input type="text" v-model="form3.duration" placeholder="Duration" name="duration" required>
        <br>
        <label for="elevation"><b>Elevation gain over route</b></label>
        <input type="text" v-model="form3.elevation" placeholder="Elevation gain in meters" name="elevation" required>
        <br>
        <label for="image_title"><b>Image title</b></label>
        <input type="text" v-model="form3.image_title" placeholder="Name of Image" name="image_title" required>
        <br>
        <label for="map_title"><b>Title of Map</b></label>
        <input type="text" v-model="form3.map_title" placeholder="Title of map" name="map_title" required>
        <br>
        <label for="map_iframe"><b>iFrame ref of map</b></label>
        <input type="text" v-model="form3.map_iframe" placeholder="Map iframe" name="map_iframe" required>
        <br>
        <label for="pit_stop"><b>Things to see on the route</b></label>
        <input type="text" v-model="form3.pit_stop" placeholder="Pit Stop details" name="pit_stop" required>
        <br>
        

        

        <div class="clearfix">
        <button type="button" class="cancelbtn"><router-link :to="{name:'landing'} ">Cancel</router-link></button>
        <button type="submit" class="signupbtn" @click="addRoute()"><router-link :to="{name:'/home'} ">AddRoute</router-link></button>
        </div>
    </div>
    </form>    
</template>

<script>
import axios from '@/config'
export default {
  name: "addRoute",
  components:{

  },
  data(){
      return{
          form3:{
              title: "",
              description: "",
              difficulity: "",
              poi: "",
              bike: "",
              distance: "",
              duration: "",
              elevation: "",
              image_title: "",
              map_title: "",
              map_iframe: "",
              pit_stop: ""
          }
      }
  },
  methods: {
      addRoute(){
          axios
          .post('/addRoute', {
              title: this.form3.title,
              description: this.form3.description,
              difficulity: this.form3.difficulity,
              poi: this.form3.poi,
              bike: this.form3.bike,
              distance: this.form3.distance,
              duration: this.form3.duration,
              elevation: this.form3.elevation,
              image_title: this.form3.image_title,
              map_title: this.form3.map_title,
              map_iframe: this.form3.map_iframe,
              pit_stop: this.form3.pit_stop

          })
          .then(response => {
              console.log(response.data)})
              .catch(error => {
                  console.log(error)
                  console.log(error.response)
          })
      }
  }
};
</script>

<style>

</style>