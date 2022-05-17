<template>
  <section class="SectionFifth">
      <div class="title-box">
          <div class="title">COMING UP:</div>
          <img class="title-img" src="@/assets/Vector.png" alt="vector">

      </div>
      

  </section>
</template>

<script>
export default {
  name: "section-fifth",
};
</script>

<style scoped lang="scss">
.SectionFifth{
    margin-top: 25.4rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title-box{
    margin-bottom: 10rem;
}
.title{
    font-size: 9rem;
    font-family: "Bebas Neue";
    margin-bottom: -1.5rem;
    margin-left: 0.5rem;
    @media (max-width: 600px) {
    font-size: 5rem;
    margin-bottom: -1rem;
  }
}
.title-img{
   margin-left: 0.5rem;
}
</style>
