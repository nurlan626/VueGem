<template>
  <div class="homePage" @click.once="play">
    <div class="homePage__inner">
      <SectionFirst></SectionFirst>
      <SectionSecond></SectionSecond>
      <SectionThird></SectionThird>
      <SectionFourth></SectionFourth>
      <SectionFifthBase></SectionFifthBase>
      <SectionSix></SectionSix>
      <SectionSeven></SectionSeven>
      <SectionEight></SectionEight>
    </div>
  </div>
</template>

<script>
import SectionFirst from "@/components/sections/SectionFirst.vue";
import SectionSecond from "@/components/sections/SectionSecond.vue";
import SectionThird from "@/components/sections/SectionThird.vue";
import SectionFourth from "@/components/sections/SectionFourth.vue";
import SectionFifthBase from "@/components/sections/SectionFifthBase.vue";
import SectionSix from "@/components/sections/SectionSix.vue";
import SectionSeven from "@/components/sections/SectionSeven.vue";
import SectionEight from "@/components/sections/SectionEight.vue";
import "@/scss/font-aventa/aventa-font.scss";
import "@/scss/mixins.scss";
import "@/scss/variables.scss";

export default {
  name: "App",
  components: {
    SectionFirst,
    SectionSecond,
    SectionThird,
    SectionFourth,
    SectionFifthBase,
    SectionSix,
    SectionSeven,
    SectionEight,
  },
  mounted() {
    this.play();
  },

  data() {
    return {
      mute: false,
    };
  },

  methods: {
    play() {
      this.mute = true;
      let audio = document.getElementById("audio");
      audio.volume = 0.01;
      audio.play();
      this.mute = !this.mute;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.homePage {
  /* background-color: red; */
  display: flex;
  justify-content: center;
}
.homePage__inner {
  /* background-color: blue; */
  width: fit-content;
  margin: 0 3rem 0 3rem;
}
</style>
