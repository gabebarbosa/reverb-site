<template>
  <div id="app">
    <body>
      <Banner/>
      
      <players/>
      <About/>
      
      <Contact/>
    </body>      
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
      background: #020202 !important;
      background-size:cover;
  };


</style>
