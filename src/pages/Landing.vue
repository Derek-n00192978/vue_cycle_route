<template>
  <div class="container">
      <h2 class="bold">Welcome to the Leinster Leisure Cycling Routes Webpage</h2>
    
      <!--<img :src="image" alt="Leinster_map">-->
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ftkRzZYgK2vv0kSzve3y_KhyDCre3yBK&ehbc=2E312F" width="640" height="640"></iframe>
      
    
  </div>    
</template>
<script>
///////////////New Script Sunday 20th Feb///////////////////////
//import axios from '@/config'
// const GOO_MAP_URL = "https://maps.googleapis.com/maps/api/"
// const LEINSTER = "53.2491581,-6.4148686"
// const API_KEY = "AIzaSyBYhv1UydxYzxt8JnB0P8lxHK9zY-98Gt4"
export default {
  name: "landing",
  data(){
    return{
      // image: `${GOO_MAP_URL}staticmap?center=${LEINSTER}&zoom=10&size=640x640&maptype=terrain&key=${API_KEY}`
    }
  },
  // mounted() {
  //   this.landingImage();
  // },
  methods: {
    // landingImage() {
    //   axios
    //        .get(`${GOO_MAP_URL}staticmap?center=${LEINSTER}&zoom=10&size=640x640&maptype=terrain&key=${API_KEY}`)
    //        .then((response) => {
    //          console.log(response.data)
    //          this.image = response.data
    //        })
    //        .catch((error) => console.log(error));
    // },
  },
};

</script>
<style>


</style>