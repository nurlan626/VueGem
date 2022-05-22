<template>
  <section class="SectionSeven">
      <div class="title-box">
          <div class="title">OUR PARTNERS</div>
          <img class="title-img" src="@/assets/Vector.png" alt="vector">
      </div>
         <img class="partners" src="@/assets/partners.png" alt="partners">
  </section>
</template>

<script>
export default {
  name: "section-seven",
};
</script>

<style scoped lang="scss">
.SectionSeven{
    margin-top: 22.4rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1024px) {
        font-size: 5rem;
        margin-top: 10rem;
    }
}

.title{
    font-size: 5.575rem;
    font-family: "Bebas Neue";
    margin-bottom: -1.5rem;
    margin-right: 4.5rem;
    @media (max-width: 600px) {
        font-size: 4rem;
        margin-bottom: -1rem;
    }
      @media (max-width: 480px) {
        font-size: 3rem;
        margin: 0;
      }
}
.title-img{
    margin-top: 1rem;
   margin-left: 0.5rem;
   height: 0.6rem;
   width: 12rem;
   @media (max-width: 600px) {
        margin-top: 0rem;
    }
    @media (max-width: 480px) {
        position: relative;
        margin:0;
        top: -4rem;
    }
}
.partners{
    margin-top: 10rem;
    margin-right: 2rem;
    width: 100%;
    max-width: 100rem;
    @media (max-width: 1024px) {
        padding: 5rem;
        margin-top: 2rem;
    }
    @media (max-width: 600px) {
        padding: 2rem;
        margin: 0;
    }
}
</style>
