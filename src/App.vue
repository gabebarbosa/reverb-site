<template>
  <div id="app" class="">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <Banner/>
      <players/>
      <About/>
      
      <Contact/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Players from './components/Players.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Banner,
    About,
    Contact,
    Players
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

  body {
    background-color: #020202;
  };


</style>
