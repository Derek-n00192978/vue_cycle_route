<template>
    <form action="action_page.php" style="border:1px solid #ccc">
    <div class="container">
        <h1>Register Form for Leinster Leisure Cycle Route Application</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>
        <label for="fname"><b>First Name</b></label>
        <input type="text" v-model="form2.fname" placeholder="Enter Name" name="fname" required />
        <br>
        <label for="lname"><b>Last Name</b></label>
        <input type="text" v-model="form2.lname" placeholder="Enter Name" name="lname" required />
        <br>
        <label for="email"><b>Email</b></label>
        <input type="text" v-model="form2.email" placeholder="Enter Email" name="email" required>
        <br>
        <label for="validateEmail"><b>RepeatEmail</b></label>
        <input type="text" v-model="form2.validateEmail" placeholder="Repeat Email" name="validateEmail" required>
        
        <!--Hidden value in form for Role is user-->
        <input type="hidden" v-model="form2.role"  name="role" value="user">
        <br>
        <label for="psw"><b>Password</b></label>
        <input type="password" v-model="form2.password" placeholder="Enter Password" name="psw" required>
        <br>
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
        <br>
        
        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

        <div class="clearfix">
        <button type="button" class="cancelbtn"><router-link :to="{name:'landing'} ">Cancel</router-link></button>
        <button type="submit" value="Submit" class="signupbtn" @click="register()"><router-link :to="{name:'home'} ">Sign Up</router-link></button>
        </div>
    </div>
    </form>    
</template>

<script>
import axios from '@/config'
export default {
  name: "registerUser",
  components:{

  },
  data(){
      return{
          form2:{
              fname: "",
              lname: "",
              email: "",
              role: "user",
              password: ""
          }
      }
  },
  methods: {
      register(){
          axios
          .post('/register', {
              fname: this.form2.fname,
              lname: this.form2.lname,
              email: this.form2.email,
              role: this.form2.role,
              password: this.form2.password
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