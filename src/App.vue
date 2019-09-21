<template>
  <div id="app">
    <Banner/>

    <div>
      <players/>
    </div>

    <div class="pb-5 mb-5">
      <About/>
    </div>
    
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
@import '../src/assets/font-awesome-4.7.0/css/font-awesome.min.css';

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
