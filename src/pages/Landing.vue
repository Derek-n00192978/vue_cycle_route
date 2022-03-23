<template>
  <div class="container">
    <h2 class="bold">Welcome to the Leinster Leisure Cycling Routes Webpage</h2>
    <b-row>
      <div class="col-md-6">       
         <iframe :src="googleURL + googleAPI" width="540" height="590"></iframe>
         
      </div> 
      <div class="col-md-6">
        <b-card-group>
          <b-card>
            <b-card-header>
              <h4>Aside here, is a map with route starting points.</h4>
              <p>When you click on a route pointer and proceed to the next page. You can then enter your location and be given directions to the starting location of the selected route.</p>
              <p>The header of the map has some options for you to either share the map, view the map in a larger screen and see a list of all route availabe to select</p>
              <p>The routes we have selected for you are tried and tested. Some will be testing and others easy to ride but the idea behind this project is for you to get out and cycle. </p>
              <p>We have routes for Road, Mountain and Gravel bike's. Before you start off, please make sure your bike is in fully working order.</p>
              <p>We hope you enjoy using our application and find new ways to get out into nature out on your bike. </p>
            
            </b-card-header>
            <b-card-body>

            </b-card-body>
          </b-card>
        </b-card-group>
      </div>
    </b-row>    
  </div>    
</template>
<script>
export default {
  name: "landing",
  data(){
    return{
     googleURL: "https://www.google.com/maps/d/u/0/embed?mid=",
     googleAPI:"1ftkRzZYgK2vv0kSzve3y_KhyDCre3yBK&ehbc=2E312F"
    }
  },
  methods: {
   
  },
};
</script>
<style>


</style>