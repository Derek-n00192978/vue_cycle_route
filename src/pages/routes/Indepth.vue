<template>    
  <div class="container">
    <div v-if="!loggedIn"> 
      <h4>Please Login into your account</h4>   
        Email: <input type="email" v-model="form1.email" /><br>
        Password: <input type="password" v-model="form1.password" />
      <button @click="login()">Submit</button>
    </div>
    <h4 v-else></h4>
      <h3 class="bold">Three of the most popular types of recreational cycling in Ireland are,</h3>
      <h3>Road Cycling, Mountain Biking and Gravel Grinding.</h3>
      <p>We recommend before you set off on any adventure on a bike you make sure of a few basic necessarys. Firstly that the bike is in good working condition.</p>
      <p>You have informed someone of you route plan and your expected time of return. All equipment is in full working order and properly fitted ie. Helmet, waterbottle, tool bag etc. You have a working lights, front and back, a pump and spare tubes and the right equipment to change a flat tyre.</p>
      <p>Ensure that you have the proper clothing and that you are prepared if the weather changes once out on a spin. A fully charged mobile phone with a contact known as ICE (in Case of Emergency) in you contacts in case something goes astray.</p>
      <p>Finally enjoy your time out and about on a bike in our wonderful provience. Whatever type of cycling you get up too, respect the people you come across, say "Hi" and leave no trace behind you in the great outdoors.</p>
        <div class="row">
            
            <div class="col-md-4">
              <div class="thumbnail">
                <h5 class="card-title">Road Cycling</h5>
                <p class="card-text">Road cycling as the name suggest takes place on the road. Using a bike with turned down handle bars for safety in a group.</p>
                <p>A road bike will be more compact and stiffer that other types of bikes this is mainly for speed and preformance. It will run on smaller tyers usually 25-28mm wide and run at higher pressures such at 80-90psi depending on weight and size of the rider.</p>
                <p>To enjoy your day in the saddle we recommend staying away from large town's where traffic and traffic-lights will upset the flow of the spin.  </p>

                <img src="@/assets/roadbike.png"  alt="road bike"/>
                <br>
                <p class="btn Road"><router-link :to="{ name:'bike', params: { type: 'Road' }}">Road Routes</router-link></p>
                
              </div>
            </div>    
            <div class="col-md-4">
              <div class="thumbnail">
                <h5 class="card-title">Mountain Biking</h5>
                <p class="card-text">Mountain bikes (MTB) are bike's built with a sturdy frame, wide handle bars, broad deep-treaded tyers and suspension on the front fork as a minimum requirement.</p>
                <p class="card-text">These frames are built for riding all-terrian cycling and decending routes at speed. For addded comfort and better handling capabilities rear suspension can be obtained.</p>
                <p>Mountain biking can be dangrous, we recommed that you travel with a buddy or at least have someone who knows where you have headed out too and has an idea of what time you are aspected to return.</p>
                <p class="card-text"></p>
                <img src="@/assets/mountainbike.jpg"  alt="mountain bike">
                <br>
                <!--Edited to find all mountain bike routes 28/02/2022   -->
                <p class="btn Mountain"><router-link :to="{ name:'bike', params: { type: 'Mountain' }}">Mountain Routes</router-link></p>
              </div>
            </div>   
            <div class="col-md-4">
              <div class="thumbnail">
                <h5 class="card-title">Gravel Grinding</h5>
                <p class="card-text">Gravel bikes is very simular to a road bike with a few sutle changes. For one a gravel bike is usually longer than a compact road bike for better stability for cycling along rough terrian.</p>
                <p class="card-text">The bottom bracket is higher off the ground for better ground clearance over obsticals such as roots and bolders. The handlebars are wider for comfort.</p>
                <p class="card-text">For safety reasons a gravel bike would have disk brakes as the conventional rim brakes would be unuseable once the rim went through a muddy puddle.</p>
                <img src="@/assets/gravelbike.png"  alt="gravel bike">
                <br>
                <!--Edited to find all mountain bike routes 28/02/2022   -->
                <p class="btn Gravel"><router-link :to="{ name:'bike', params: { type: 'Gravel' }}">Gravel Routes</router-link></p>
              </div>
            </div>          
        </div>
      </div>  
      
</template>
<script>
import axios from '@/config'
export default {
  name: "indepth",

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
  methods:{
          login() {
            axios
              .post('http://localhost:3000/login', {
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
            //change for Mohammed
          .get(`/route/bike/${this.$route.params.type}`,
            {
              headers: {
                  "Authorization": `Bearer ${token}`
              }
            })
          .then(response => {
              console.log(response.data)
              this.route = response.data
          })
          .catch(error => console.log(error))
      }        
  }
}
</script>
<style>

.Road {
  border-color: rgb(53, 49, 49);  
}

.Gravel {
  border-color: rgb(179, 43, 160);
}

.Mountain {
  border-color: rgb(33, 112, 14); 
  color:  rgb(33, 112, 14); 
}




</style>