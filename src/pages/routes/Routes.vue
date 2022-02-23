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
    <div class="container-fluid card-deck">
        <div class="card" style="width:300px">
                <iframe src='https://connect.garmin.com/modern/course/embed/68503756' width='500' height='200' frameborder='0' alt="garmin Arklow route"></iframe>
            <div class="card-body"> 
                <h4 class="card-title">Arklow Loop</h4>
                <p class="card-text">The route above is of hard difficulty.</p>
                <a target="_blank" href="https://connect.garmin.com/modern/course/68503756" class="btn btn-info">Route information</a>
                <br>
                <p class="btn btn-warning">Road Bike Route</p> 
            </div>  
        </div>
        <div class="card" style="width:300px">
            <iframe src='https://connect.garmin.com/modern/course/embed/92185021' width='500' height='200' alt="garmin Brayhead"></iframe>
            <div class="card-body">
                <h4 class="card-title">BrayHead Loop</h4>
                <p class="card-text">The route above is of medium difficulty.</p>
                <a href="https://connect.garmin.com/modern/course/92185021" target="_blank" class="btn btn-info">Route information</a>
                <br>
                <p class="btn btn-warning">Mountain Bike Route</p> 
            </div>  
        </div>        
    </div>
    <br>
    <div class="container-fluid card-deck">
        <div class="card" style="width:300px">
            <iframe src='https://connect.garmin.com/modern/course/embed/92189400' width='500' height='200' frameborder='0' alt="garmin Sugarloaf route"></iframe>
            <div class="card-body">
                <h4 class="card-title">SugarLoaf Loop</h4>
                <p class="card-text">The route above is of medium difficulty.</p>
                <a href="https://connect.garmin.com/modern/course/92189400" target="_blank" class="btn btn-info">Route information</a>
                <br>
                <p class="btn btn-warning">Gravel Bike Route</p>
            </div>  
        </div>
        <div class="card" style="width:300px">
            <iframe src='https://connect.garmin.com/modern/course/embed/92189400' width='500' height='200' frameborder='0' alt="garmin Sugarloaf route"></iframe>
            <div class="card-body">
                <h4 class="card-title">SugarLoaf Loop2</h4>
                <p class="card-text">The route above is of medium difficulty.</p>
                <a href="#" target="_blank" class="btn btn-info">Route information</a>
                <br>
                <p class="btn btn-warning">Gravel Bike Route</p>
            </div>  
        </div>
    </div>
    <br>
    <div class="container-fluid card-deck">
        <div class="card" style="width:300px">
            <iframe src='https://connect.garmin.com/modern/course/embed/75306074' width='500' height='200' frameborder='0' alt="garmin Cullenmore loop"></iframe>
            <div class="card-body">
                <h4 class="card-title">Cullenmore loop</h4>
                <p class="card-text">The route above is of medium difficulty.</p>
                <a href="https://connect.garmin.com/modern/course/75306074" target="_blank" class="btn btn-info">Route info</a>
                <br>
                <p class="btn btn-warning">Road Bike Route</p>
            </div>  
        </div>
            <div class="card" style="width:300px">
                <iframe src='https://connect.garmin.com/modern/course/embed/90186612' width='500' height='200' frameborder='0' alt="garmin Balinastoe route"></iframe>
                <div class="card-body">
                    <h4 class="card-title">Balinastoe Route</h4>
                    <p class="card-text">The route above is of medium difficulty.</p>
                    <a href="https://connect.garmin.com/modern/course/90186612" target="_blank" class="btn btn-info">Route info</a>
                    <br>
                    <p class="btn btn-warning">Mountain Bike Route</p>
                </div>  
            </div>
        </div>
    </b-col>   
 </template>


<script>
import axios from 'axios'
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
          }
    }
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
      }
      
  }
};
</script>

<style>

</style>