<template>
  <div class="app">
    <Header></Header>
    <SectionFirst></SectionFirst>
    <SectionSecond></SectionSecond>
    <SectionThird></SectionThird>
    <SectionFourth></SectionFourth>
  </div>
</template>

<script>
import Header from '@/components/sections/Header.vue'
import SectionFirst from '@/components/sections/SectionFirst.vue'
import SectionSecond from '@/components/sections/SectionSecond.vue'
import SectionThird from '@/components/sections/SectionThird.vue'
import SectionFourth from '@/components/sections/SectionFourth.vue'


import "@/scss/font-aventa/aventa-font.scss"
import "@/scss/mixins.scss"
import "@/scss/variables.scss"

export default {
  name: 'App',
  components: {
    Header,
    SectionFirst,
    SectionSecond,
    SectionThird,
    SectionFourth
    
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
  background-image: url("@/assets/GemBox-background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
