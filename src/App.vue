<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/sections/Header.vue'
import Footer from '@/components/sections/Footer.vue'
import "@/scss/font-aventa/aventa-font.scss"
import "@/scss/mixins.scss"
import "@/scss/variables.scss"

export default {
  name: 'App',
  components: {
    Header,
    Footer ,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 10px;
}
.app{
  background-color: #1d1b25;
  background-image: url("@/assets/GemBox-background.png");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
