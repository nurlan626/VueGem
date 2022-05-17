<template>
  <section class="SectionSix">
      <div class="title-box">
          <div class="title">JOIN THE FOUNDERS</div>
          <img class="title-img" src="@/assets/Vector.png" alt="vector">
      </div>
      <div class="text">
        GemBox si a product of Artifact Labs, an NFT company led by veteran technologists, creators and community builders who want to close gaps between the value created and the amount digital creators actually make. Artifact Labs is co-founded by Jotta 2 Group operating in over 22 countries worldwide.
      </div>
      <div class="founders">
        <div class="item">
          <img src="" alt="">
          <div>
            <div class="title">Alexander Chevtayev</div>
            <img class="title-img" src="@/assets/Vector.png" alt="vector">
          </div>
          <div></div>
          <div></div>

        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "section-fifth",
};
</script>

<style scoped lang="scss">
.SectionSix{
    margin-top: 188.4rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title-box{
}
.title{
    font-size: 6.1rem;
    font-family: "Bebas Neue";
    margin-bottom: -1.5rem;
    margin-left: -3.5rem;
    @media (max-width: 600px) {
      font-size: 5rem;
      margin-bottom: -1rem;
    }
}
.title-img{
   margin-left: -3.5rem;
   margin-top: 1.1rem;
   width: 16rem;
   height: 0.7rem;;
}
.text{
  margin-right: 2rem;;
  margin-top: 7.2rem;
  width: 100%;
  max-width: 100rem;
  font-family: "Aventa";
  font-weight: 400;
  font-size: 2.206rem;
  line-height: 2.431rem;
  margin-bottom: 100rem;
  @media (max-width: 1024px) {
      padding: 5rem;
      margin-top: 3rem;
    }
}
</style>
