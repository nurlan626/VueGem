<template>
  <section class="SectionThird">
    <div class="left-video">
      <video class="video" autoplay muted loop preload playsinline
        poster="@/assets/video/posters/03.png"
      >
        <source 
          src="https://drive.google.com/uc?export=download&id=161Fmoym3YO65eXHUDf7tlC0_8vRQvoI7"
          type="video/webm" 
        />
        <source src="@/assets/video/mp4/03.mp4" type="video/mp4" />
      </video>
       <!-- <video class="video" autoplay loop preload  muted playsinline>
          <source src="https://drive.google.com/uc?export=download&id=" type="video/mp4" />
        </video> -->
    </div>
    <div class="right">
      <div class="right__title-box">
        <div class="right__50">50</div>
        <div class="right__title">
          <div class="right__title-base">PREMIUM</div>
          <div class="right__title-membership">Membership NFT’s</div>
          <div class="right__title-eth">at 2 ETH with special utilities</div>
        </div>
      </div>
      <div class="right__text">
        <div class="right__text1">
          <span class="span">Premium NFT’s </span>will come with infinite utility options, namely: DROP,
          EVENT and POWER utilities
        </div>
        <div class="right__text2">
          <p class="right__text2-title">DROP utilities:</p>
          <p class="right__text2-text">
            - whitelist or raffle access to the most exclusive NFT drops GemBox will create in collaboration with fashion, sneakers, music, gaming and designers brands Gifts will also be an important part of the DROP utilities, 
          </p>
          <p class="right__text2-text">
            - GemBox first official drop by the world most famous virtual supermodel noonoouri who has so far already collaborated with top fashion brands such as Dior, Valentino, H&M, Versace, KKW Beauty, Marc Jacobs, MiuMiu, Alexander McQueen, Puma, etc.
          </p>
          <p class="right__text2-title right__text2-title--margin27">EVENT utilities:</p>
          <p class="right__text2-text">
            - GemBox exists for fresh and hot music events, so we combined a bunch of event-related utilities into one to get you VIP access to the coolest physical and virtual events on the planet. 
          </p>
          <p class="right__text2-text">
            - Launch drop includes a VIP ticket and accommodation for 7 days of Fresh Island Festival on the beautiful Mediterranean beach of Pag island in Croatia.
          </p>
          <p class="right__text2-title right__text2-title--margin">POWER utilities:</p>
          <p class="right__text2-text right__text2-text--margin">
            - governance rights. Exercise your voting power through a secret discord channel until we introduce a fully tokenized DAO system.
          </p>
        </div>
        <div class="verticalText">
          THE FUTURE BELONGS TO YOU
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

<style scoped lang="scss">
.SectionThird {
  margin-top: 41rem;
  display: flex;
  justify-content: center;
  color: white;
  font-display: "Avesta";
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 10rem;
  }
  @media (max-width: 600px) {
    margin-top: 15rem;
  }
}
.right {
  padding: 2rem;
    position: relative;
    left: -7rem;
  @media (max-width: 1400px) {
    position: static;
  }
}
.right__title-box {
  display: flex;
  @media (max-width: 600px) {
    justify-content: center;
    padding: 2rem;
    text-align: right;
  }
  @media (max-width: 399px) {
    justify-content: center;
    padding: 0rem;
  }
}
.right__50 {
  font-size: 25rem;
  font-family: "Bebas Neue";
  @media (max-width: 600px) {
    font-size: 15rem;
  }
   @media (max-width: 480px) {
    font-size: 15rem;
  }
}
.right__title-base {
  font-size: 13rem;
  font-family: "Bebas Neue";
  line-height: 12rem;
  margin-left: -2.3rem;
  margin-top: 0.2rem;
  color:#48f08c;
  @media (max-width: 600px) {
    font-size: 6rem;
  }
}
.right__title {
  margin-left: 3.9rem;
  margin-top: 4.5rem;
  font-family: "Aventa";
  @media (max-width: 600px) {
    margin-left: 5rem;
    margin-top: 0rem;
  }

}
.right__title-membership {
  font-size: 3.3rem;
  margin-left: 1rem;
  text-align: right;
  margin-top: -0.5rem;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
}
.right__title-eth {
  font-size: 1.75rem;
  text-align: right;
  margin-top: 0.3rem;
  padding-right: 0rem;
  color:#48f08c;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

}

.right__text {
  margin-left: 1.5rem;
   @media (max-width: 600px) {
    padding: 2rem;
  }
    @media (max-width: 480px) {
    padding: 0rem;
    margin-left: 0rem;

  }

}
.right__text1 {
  font-size: 3.179rem;
  font-family: "Aventa";
  font-weight: 500;
  width: 100%;
  max-width: 60rem;
  line-height: 3.4rem;
  margin-top: -2rem;
  margin-left: -0.5rem;
  margin-bottom: 5.2rem;
  position: relative;
  left: 1rem;
  @media (max-width: 600px) {
    margin-top: 0rem;
    font-size: 2rem;
    line-height: 2.5rem;
    padding-right: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 3rem;

  }
}
.right__text2 {
  font-size: 2rem;
  font-weight: 400;
  font-family: "Aventa";
  width: 100%;
  max-width: 60rem;
  line-height: 2.5rem;
  margin-top: 2.3rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
}
.right__text2-title {
  color: #48f08c;
  margin-top: 4.5rem;
  font-size: 2.163rem;
  @media (max-width: 600px) {
    margin-top: 2rem;
  }
}
.right__text2-title--margin27{
  margin-top: 2.7rem;
}
.right__text2-title--margin{
  margin-top: 3.1rem;
}
.right__text2-text {
  margin-top: 1.3rem;
  font-size: 1.726rem;
  line-height: 2.203rem;
  max-width: 58.4rem;
  @media (max-width: 600px) {
    padding: 0rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
}
.right__text2-text--margin{
  margin-top: 1rem;
}
.left-video {
  width: 100%;
  max-width: 50rem;
  transform: rotate(25deg);
    position: relative;
    top: -35rem;
    right: 12rem;
   @media (max-width: 1435px) {
    max-width: 40rem;
  }
  @media (max-width: 1200px) {
     top: -35rem;
    right: 10rem;
  }

  @media (max-width: 1024px) {
    position: static;
    order: 1;
  }
  @media (max-width: 600px) {
    position: static;
    order: 1;
    max-width: 270px;
    padding-top: 6rem;
  }
}
.video {
  width: 100%;
}
.verticalText{
  transform: rotate(-90deg);
  -webkit-text-stroke: 0.1rem #49f48e;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  position: absolute;
  right: 78.5rem;
  top: 64rem;
  font-family: "Bebas Neue";
  direction: rtl;
  font-size: 6.8rem;
  @media (max-width: 1400px) {
    display: none;
  }
}
.span{
  color:#48f08c;
}

</style>
