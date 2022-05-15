<template>
  <section class="SectionSecond">
      <div class="left">
        <div class="left__title-box">
          <div class="left__5000">5000</div>
          <div class="left__title">
            <div class="left__title-base">BASE</div>
            <div class="left__title-membership">Membership NFT’s </div>
            <div class="left__title-eth">at 0.05 ETH</div>
          </div>
        </div>
        <div class="left__text">
          <div class="left__text1">
            Community is all about it’s members. That’s why we made BASE NFT’s as first step in creating a legendary community.
          </div>
          <div class="left__text2">
            BASE NFT’s are affordable and each is coming with list of utilities like whitelisting for future drops, raffles for exclusive drops or invitations for special physical and metaverse events. No need for a FOMO since you can always upgrade your BASE NFT’s with premium utilities of your choice.
          </div>
        </div>
      </div>
      <div class="right-video">
        <video class="video" autoplay loop>
              <source src="@/assets/video/metalna_final.mp4" type="video/mp4">
        </video>
      </div>
  </section>
</template>

<script>

export default {
  name: "section-second",
};
</script>

<style>
.SectionSecond{
  margin-top: 25rem;
  display: flex;
  color: white;
  justify-content: center;
  font-display: "Avesta";
}
.left{
  position: relative;
  left: 100px;
}
.left__title-box{
  display: flex;
}
.left__5000{
  font-size: 22rem;
  font-family: "Bebas Neue";
}
.left__title-base{
  font-size: 14rem;
  font-family: "Bebas Neue";
  line-height: 12rem;
}
.left__title{
  margin-left: 3.9rem;
  margin-top: 4.5rem;
  font-family: "Aventa";
}
.left__title-membership{
  font-size: 2.4rem;
  margin-left: 1rem;
}
.left__title-eth{
  font-size: 1.8rem;
  text-align: right;
  margin-top: 0.4rem;
}
.right-video{
  width: 100%;
  max-width: 500px;
  position: relative;
  top: -30rem;
  left: 8rem;
  transform: rotate(-25deg);
}
.video{
  width: 100%; 

}
.left__text {
  margin-left: 1.5rem;

}
.left__text1{
  font-size: 3.179rem;
  font-family: "Aventa";
  width: 100%;
  max-width: 60rem;
  line-height: 3.71rem;
}
.left__text2{
  font-size: 2rem;
  font-weight: 400;
  font-family: "Aventa";
  width: 100%;
  max-width: 60rem;
  line-height: 2.5rem;
  margin-top: 2.3rem;
}
</style>
