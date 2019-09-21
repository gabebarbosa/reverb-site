<template>
  <div id="app">
    <Banner/>
    
    <!-- <players/>
    <About/> -->
    
    <Contact class="footer"/>
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
      background-color: #030303 !important;
      background-size:cover;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #030303 !important;
  }

</style>
