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