<template>
  <section class="SectionThird">
      <div class="left-video">
        <video class="video" autoplay loop>
              <source src="@/assets/video/premium_final.mp4" type="video/mp4">
        </video>
      </div>
      <div class="right">
        <div class="right__title-box">
          <div class="right__50">50</div>
          <div class="right__title">
            <div class="right__title-base">PREMIUM</div>
            <div class="right__title-membership">Membership NFT’s </div>
            <div class="right__title-eth">at 2 ETH with special utilities
            </div>
          </div>
        </div>
        <div class="right__text">
          <div class="right__text1">
              Premium NFT’s will come with infinite utility options, namely: DROP, EVENT and POWER utilities
          </div>
          <div class="right__text2">
            <p class="right__text2-title">
              DROP utilities:
            </p>
            <p class="right__text2-text">
              As an owner, you will get a whitelist or raffle access to the most exclusive NFT drops GemBox will create in collaboration with fashion, sneakers, music, gaming and designers brands Gifts will also be an important part of the DROP utilities, so PREMIUM NFT holders will receive GemBox first official drop by the world most famous virtual supermodel noonoouri who has so far already collaborated with top fashion brands such as Dior, Valentino, H&M, Versace, KKW Beauty, Marc Jacobs, MiuMiu, Alexander McQueen, Puma, etc.
            </p>
          </div>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: "section-third",
};
</script>

<style scoped>
.SectionThird{
  margin-top: 43rem;
  margin-right: 22rem;
  display: flex;
  justify-content: center;
  color: white;
  font-display: "Avesta";
}
.right{
  position: relative;
  left: 100px;
}
.right__title-box{
  display: flex;
}
.right__50{
  font-size: 25rem;
  font-family: "Bebas Neue";
}
.right__title-base{
  font-size: 13rem;
  font-family: "Bebas Neue";
  line-height: 12rem;
  margin-left: -2.3rem;
  margin-top: 0.2rem;
}
.right__title{
  margin-left: 3.9rem;
  margin-top: 4.5rem;
  font-family: "Aventa";
}
.right__title-membership{
  font-size: 3.3rem;
  margin-left: 1rem;
  text-align: right;
  margin-top: -0.5rem;
}
.right__title-eth{
  font-size: 1.75rem;
  text-align: right;
  margin-top: 0.3rem;
  padding-right: 0rem;
}

.right__text {
  margin-left: 1.5rem;
}
.right__text1{
  font-size: 3.179rem;
  font-family: "Aventa";
  width: 100%;
  max-width: 60rem;
  line-height: 3.71rem;
  margin-top: -2rem;
  margin-left: -0.2rem;
}
.right__text2{
  font-size: 2rem;
  font-weight: 400;
  font-family: "Aventa";
  width: 100%;
  max-width: 60rem;
  line-height: 2.5rem;
  margin-top: 2.3rem;
}
.right__text2-title{
  color: #48f08c;
  margin-top: 4.5rem;
  font-size: 2.163rem;
}
.right__text2-text{
  margin-top: 1.3rem;
  font-size: 1.726rem;
  line-height: 2.203rem;
  max-width: 58.4rem;
}
.left-video{
  width: 100%;
  max-width: 400px;
  position: relative;
  top: -30rem;
  left: 8rem;
  transform: rotate(25deg);
}
.video{
  width: 100%; 
}
</style>
