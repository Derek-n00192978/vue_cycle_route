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
    <p v-else> Welcome to the Image uploader page. For this application we are going to upload our images to Cloudinary and call them back as a URL to to the web application to save upload time and sever time. This by right should be done before adding a route to the database.</p>
    <div class="row">        
        <div class="col-md-6">
          <form action="action_page.php" style="border:2px solid #ccc" method="POST" enctype="multipart/form-data"> 
            <b-card-group columns >
                <b-card>
                    <label class="file-upload-container" for="file-upload"><b>Select an Image</b>
                    </label>
                    <input id="file-upload" type="file" style="display:none;" name="image" required class="float-right"/>
                                    

                </b-card>
            </b-card-group> 
          </form>             
        </div>    
    </div>
    </b-col>    
</template>
<script>
import axios from '@/config';
//import Cloudinary from 'cloudinary-vue';
// Vue.use(Cloudinary, { configuration: { cloudName: "del599"}
// });
export default {
  name: "/image",

  props:{
    loggedIn: Boolean
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
          }
}  
} 
</script>
<style>
.Login {
  border-color: rgb(255, 174, 82);
}
</style> 