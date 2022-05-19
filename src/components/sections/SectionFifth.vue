<template>
  <section class="SectionFifth">
    <div class="container">
      <div class="title-box">
        <div class="title">COMING UP:</div>
        <div>
          <img class="title-img" src="@/assets/Vector.png" alt="vector" />
        </div>
        
      </div>
      
      <div class="coming-up__events-container">
        <!-- events left side -->
        <div class="coming-up__events-left-side">
          <div class="coming-up__events coming-up__launch-edition">
            <div class="coming-up__video-box coming-up__video-box-1">
              <video class="video coming-up__video-1" loop autoplay preload  muted playsinline>
                <source src="@/assets/video/kawai.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="coming-up__text-container coming-up__text-container--june7th">
              <div class="event-tile-box">
                <h1 class="coming-up-text-title">JUNE 7th 2022</h1>
                 <!-- <img
                  class="circle"
                  src="@/assets/circle.png"
                  alt="vector"
                  /> -->
              </div>
              <img
                class="coming-up__vector-img"
                src="@/assets/Vector.png"
                alt="vector"
              />
              <p class="coming-up-text-description">Launch Edition NFT drop</p>
              <p class="coming-up-text-paragraph">
                The GemBox Membership edition NFT collection will light up the
                days to come. Only 50 Premium and 5,000 Base NFTs will be
                available. Steady your FOMO. Yes, premium NFTs come with an
                infinite utility option, but Base NFTs can be upgraded with
                DROPS, EVENTS or POWER utilities.
              </p>
            </div>
          </div>
          <div class="coming-up__events coming-up__first-event">
            <div class="coming-up__video-box coming-up__video-box-3">
              <video class="video coming-up__video-3" loop autoplay preload>
                <source
                  src="@/assets/video/fresh-island-01.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="coming-up__text-container coming-up__text-container-latejune">
                <h1 class="coming-up-text-title">LATE JUNE 2022</h1>
                          
              <img
                class="coming-up__vector-img"
                src="@/assets/Vector.png"
                alt="vector"
              />
              <p class="coming-up-text-description">
                First EVENT utility delivered
              </p>
              <p class="coming-up-text-paragraph">
                Premium NFT holders get 7 days of VIP treatment and
                accommodation at the Fresh Island Festival on Pag island in
                Croatia.
              </p>
            </div>
          </div>
          <div class="coming-up__events coming-up__join-us">
            <div class="coming-up__video-box coming-up__video-box-5">
              <video class="video coming-up-video-2023" loop autoplay preload  muted playsinline>
                <source
                  src="@/assets/video/fresh-island-03.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="coming-up__text-container coming-up__text-container--beyond">
              <h1 class="coming-up-text-title">2023 AND BEYOND</h1>
              <img
                class="coming-up__vector-img"
                src="@/assets/Vector.png"
                alt="vector"
              />
              <p class="coming-up-text-description">
                Join us on a road to Metaverse
              </p>
              <p class="coming-up-text-paragraph coming-up-text-paragraph--beyond">
                More series of NFT drops designed by luxury and street style
                fashion brands, musicians and artists will follow + GemBox
                platform will get full market capabilities and DAO feature as we
                roll out AR features and metaverse compabilities to expand
                creative capabilities for our members and guest stars.
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="vertical-line">.
        </div> -->
        <div class="vertical">
           <img
                class="vertical-img"
                src="@/assets/vertical.svg"
                alt="vertical"
              />
        </div>
        <!-- events right side -->
        <div class="coming-up__events-right-side">
          <div class="coming-up__events coming-up__noonoouri-nft-drop">
            <div class="coming-up__text-container coming-up__text-container--midjune">
              <h1 class="coming-up-text-title ">MID JUNE 2022</h1>
              <img
                class="coming-up__vector-img"
                src="@/assets/Vector.png"
                alt="vector"
              />
              <p class="coming-up-text-description coming-up-text-description--midjune">Noonoouri NFT drop</p>
              <p class="coming-up-text-paragraph coming-up-text-paragraph--midjune">
                Merely the first in our series of fashion NFT projects,
                noonoouri is the first virtual supermodel whose Insta feed was
                graced by Dior, Valentino, H&M, Versace, KKW Beauty, Marc
                Jacobs, MiuMiu, Alexander McQueen, Puma. Represented by IMG, the
                agency working with Bella Hadid, noonoouri NFTs are sure to pack
                value and our Premium holders get it as a gift.
              </p>
            </div>
            <div class="coming-up__video-box coming-up__video-box-2">
              <video class="video coming-up__video-midjune" loop autoplay preload  muted playsinline>
                <source
                  src="@/assets/video/noonoouri_02.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div class="coming-up__events coming-up__series-nft-drops">
            <div class="coming-up__text-container coming-up__text-container--q3">
              <h1 class="coming-up-text-title ">Q3 & Q4 2022</h1>
              <img
                class="coming-up__vector-img"
                src="@/assets/Vector.png"
                alt="vector"
              />
              <p class="coming-up-text-description">A series of NFT drops</p>
              <p class="coming-up-text-paragraph">
                Designed by luxury and streetstyle fashion brands, musicians and
                artists - you'll have to follow us for the announcement, since
                it is all NDA just yet but we can promise it will turn your
                hands diamond.
              </p>
            </div>
            <div class="coming-up__video-box coming-up__video-box-4">
              <video class="video coming-up__video-4-q3" loop autoplay preload  muted playsinline>
                <source src="@/assets/video/dbsb.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
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
.SectionFifth {
  margin-top: 25.4rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;


}
.container {
  margin-bottom: 10rem;
}
.title-box{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.title {
  font-size: 9rem;
  font-family: "Bebas Neue";
  margin-bottom: -1.5rem;
  margin-left: 0.5rem;
  // @media (max-width: 600px) {
  //   font-size: 5rem;
  //   margin-bottom: -1rem;
  // }
}
.title-img {
  margin-left: -14.5rem;
 

  
}

.coming-up__vector-img {
  width: 4rem;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    // margin-bottom: 5rem;
    width: 5rem;
  }
}

.coming-up__events-container {
  margin-top: 17.8rem;
  display: grid;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-family: "Aventa";
  margin-right: 4.4rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0rem;
    margin-top: 5rem;

  }
    @media (max-width: 1024px) {
    margin: 0 auto;
  }

}

.coming-up__events {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6.5rem;
  max-width: 50rem;
  background: transparent;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  
}
.coming-up__series-nft-drops{
  margin-top: 22rem;
  margin-left: -3.9rem;
    @media (max-width: 1024px) {
    margin-top: 5rem;
  }

}
video {
  width: 14rem;
  height: 14rem;
  margin: 2rem;
}


.coming-up__video-1 {
   transform: rotate(-25deg);
   @media (max-width:1920px) {
    position: relative;
    top: -25rem;
    left: 3rem;
  }
   @media (max-width:1024px) {
    position: static;
  }


}

.coming-up__video-3 {
   width: 14rem;
    height: 14rem;
    transform: rotate(-25deg);

   @media (max-width:1920px) {
    position: relative;
    top: -5rem;
    left: 0rem;
  }
   @media (max-width:1024px) {
    position: static;
  }
}
.coming-up-video-2023{
    transform: rotate(-25deg);
   @media (max-width:1920px) {
    position: relative;
    top: -5rem;
    left: -5rem;
  }
   @media (max-width:1024px) {
    position: static;
  }
}
.coming-up__video-4-q3{
   transform: rotate(-25deg);
   @media (max-width:1920px) {
    position: relative;
    top: -20rem;
    left: 0rem;
  }
   @media (max-width:1024px) {
    position: static;
  }
  
}
.coming-up__video-box-2{
  @media (max-width:1024px) {
    order: -1;
  }
}
.coming-up__video-box-4{
   @media (max-width:1024px) {
    order: -1;
  }

}
.coming-up__video-midjune{
    transform: rotate(-25deg);
   @media (max-width:1920px) {
    position: relative;
    top: -30rem;
    left: 0rem;
  }
   @media (max-width:1024zpx) {
    position: static;
  }
}


.coming-up-text-title {
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 5.34rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
  margin-right: 2.5rem;
  width: 100%;
    @media (max-width: 1024px) {
    margin: 0 auto;
    line-height: 5rem;;

  }
}

.coming-up-text-description {
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
  font-family: "Aventa";
  font-size: 1.941rem;
    @media (max-width: 1024px) {
    margin: 0 auto 2rem auto;
  }
}
.coming-up-text-description--midjune{
  position: relative;
  top: 1rem;
}

.coming-up-text-paragraph {
  padding-top: 0.5rem;
  width: 24.5rem;
  font-size: 1.747rem;
  white-space: pre-line;
  line-height: 2.038rem;
  

  
}
.coming-up-text-paragraph--midjune{
  position: relative;
  top: 0.5rem;
   @media (max-width: 1024px) {
    position: static;
  }
}
.coming-up-text-paragraph--beyond{
  width: 100%;
  margin-top: 2.5rem;
  max-width: 30rem;
 
}
.vertical-line{
  background-color: #5e3de7;
  color: #5e3de7;
  margin: 0 1rem 0 1rem;
  margin-top: 5rem;
   @media (max-width: 1024px) {
    display: none;
  }
}
.circle{
  width: 2.5rem;
  height: 2.5rem;

  position: relative;
  left: 3.5rem;
  top: -2rem;
  @media (max-width: 1024px) {
    display: none;
  }
}
.event-tile-box {
  display: flex;
}

.coming-up__events-right-side{
  position: relative;
  left: 5.2rem;
  margin-top: 23rem;
   @media (max-width: 1024px) {
     position: static;
    margin-top: 5rem;
    margin: 0 auto;
  }
}
.coming-up__text-container--june7th{
  @media (max-width: 1024px) {
    margin-top: 5rem;
  }
}
.coming-up__text-container-latejune{
  // position: relative;
  // top: 10rem;
  margin-top: 26.5rem;
  margin-right: 4.2rem;
  margin-left: 1rem;
  @media (max-width: 1024px) {
    margin: 5rem auto;
  }
}
.coming-up__text-container--beyond{
   margin-top: 32rem;
   margin-left: -5rem;
    @media (max-width: 1024px) {
    margin: 5rem auto;
  }
}
.coming-up__text-container--midjune{
   @media (max-width: 1024px) {
    margin: 5rem auto;
  }
}
.coming-up__text-container--q3{
  @media (max-width: 1024px) {
    margin: 6rem auto;
  }
}
.vertical{
    padding-top: 5rem;
    @media (max-width: 1024px) {
      display: none;
  }
}

</style>
