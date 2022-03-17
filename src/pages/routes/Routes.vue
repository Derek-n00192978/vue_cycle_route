<template>
  <b-col>
    <div v-if="!loggedIn"> 
      <h4>Please Login into your account</h4>   
        Email: <input type="email" v-model="form1.email" /><br>
        Password: <input type="password" v-model="form1.password" />
      <button @click="login()">Submit</button>
    </div>
    <h4 v-else>
      Here is the route to {{ route.title }}.</h4>
       <div class="row">        
        <div class="col-md-6">        
            <b-card :class="route.bike">
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
                 <p><strong>Points of Interest:</strong> {{ route.poi }} </p>         
                <a :href='route.map_http' target="_blank">Link to Route Map</a>
                <p><strong>Description:</strong> {{ route.description }} </p>              
            </b-card>        
        </div>
        <div class="col-md-6 float-right">
            <iframe :src="iframeURL + route.map_iframe"  width='465' height='478' frameborder='0'></iframe>
        </div>
        <div class="col">
          <b-card :class="route.bike">
            <p><strong>Description Extended:</strong> {{ route.descriptionLong }} </p>
          </b-card> 
          <br>
          <div class="row">
          
            <div class="col-md-6">
              <iframe :src="ihttpURL + route.image_http" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
       </div>
       
    </b-col>   
 </template>

<!-- 
 PORT=3000
DB_ATLAS_URL=mongodb+srv://Derek:Nissan2021@cluster0.fnk6k.mongodb.net/vue-leinster-app?retryWrites=true&w=majority
CLOUDINARY_URL=cloudinary://189593569962748:3ma7xJG-9PvAerVTJ4oFjWks_-I@del599 -->


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
}
.Road {
  border-color: rgb(53, 49, 49);  
}
.Gravel {
  border-color: rgb(70, 155, 155);
}
.Mountain {
  border-color: rgb(37, 248, 37);
}

</style>