<template>
  <section class="SectionFifthBase">
        <SectionFifth v-if="windowWidth > 1024" ></SectionFifth>
        <SectionFifthMobile v-else></SectionFifthMobile>
        
  </section>
</template>

<script>
import SectionFifth from '@/components/sections/SectionFifth.vue'
import SectionFifthMobile from '@/components/sections/SectionFifthMobile.vue'


export default {
  name: "section-fifth",
  components: {
    SectionFifth,
    SectionFifthMobile,

  },
  data() {
            return {
                windowWidth: window.innerWidth
            }
        },
        mounted() {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            }
        }
};
</script>

<style scoped lang="scss">
.SectionFifthBase{
  color: white;
}

</style>
