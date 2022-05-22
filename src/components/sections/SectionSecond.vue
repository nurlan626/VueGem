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
            Community is all about it’s members. That’s why we made <span class="span">BASE NFT’s </span>as first step in creating a legendary community.
          </div>
          <div class="left__text2">
            <!-- BASE NFT’s are affordable and each is coming with list of utilities like whitelisting for future drops, raffles for exclusive drops or invitations for special physical and metaverse events. No need for a FOMO since you can always upgrade your BASE NFT’s with premium utilities of your choice. -->
            <p class="left-text2-title">Utilities:</p>
            <p class="left-text2-text">
              - whitelisting for future drops, 
            </p>   
            <p class="left-text2-text">
              - raffles for exclusive drops 
            </p> 
            <p class="left-text2-text">
              - invitations for special physical and metaverse events. 
            </p> 
            <p class="left-text2-text left-text2-text--marginTop">
              No need for a FOMO since you can always upgrade your <span class="span">BASE NFT’s</span> with premium utilities of your choice.
            </p>      
          </div>
        </div>
      </div>
      <div class="right-video">
        <video class="video" autoplay muted loop preload   playsinline
           poster="@/assets/video/posters/02.png"
  
        >
          <source 
            src="https://drive.google.com/uc?export=download&id=1-SKkq6GLCPXc3MeSvsWED12GK6NkR_Tp"
            type="video/mp4"
          >
        </video>
        <!-- <video class="video" autoplay loop preload  muted playsinline>
          <source src="https://drive.google.com/uc?export=download&id=" type="video/mp4" />
        </video> -->
      </div>
  </section>
</template>

<script>

export default {
  name: "section-second",
};
</script>

<style scoped lang="scss">
.SectionSecond{
  margin-top: 35rem;
  display: flex;
  gap: 8rem;
  color: white;
  justify-content: center;
  font-display: "Avesta";
  @media (max-width:1435px) {
    gap: 0rem;
  }
  @media (max-width:1024px) {
    flex-direction: column;
    align-items: center;
  }
   @media (max-width:600px) {
    margin-top: 7rem;
    padding: 0 0rem 0 5rem;
  }
   @media (max-width:480px) {
    margin-top: 0rem;

  }
  
}
.left{
  margin-left: -4.2rem;
    @media (max-width:1440px) {
      position: relative;
      left: 139px;
    }
    @media (max-width:1400px) {
      position: static;
    }

}
.left__title-box{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 1rem;

  
  @media (max-width:600px) {
    gap: 0;
  }
 
}
.left__5000{
  font-size: 22rem;
  font-family: "Bebas Neue";
 
  @media (max-width:600px) {
    font-size: 13rem;
  }
  @media (max-width:480px) {
    font-size: 10rem;
  }

  
}
.left__title{
  margin-left: 3.9rem;
  margin-top: 4.5rem;
  font-family: "Aventa";
   @media (max-width:1440px) {
      position: relative;
      top: -20px;
    }
  @media (max-width:1024px) {
      position: static;
    }
    @media (max-width:600px) {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
}
.left__title-base{
  font-size: 14rem;
  font-family: "Bebas Neue";
  line-height: 12rem;
  -webkit-text-stroke: 0.1rem #49f48e;
  -webkit-text-fill-color: transparent;

  @media (max-width:600px) {
    font-size: 6rem;
    line-height: 7rem;;
  }
}

.left__title-membership{
  font-size: 2.4rem;
  margin-left: 0.5rem;
  @media (max-width:600px) {
    font-size: 2rem;
  }
  @media (max-width:480px) {
    margin-left: 0;
    font-size: 1.3rem;
  }
}
.left__title-eth{
  font-size: 1.8rem;
  text-align: right;
  margin-top: 0.4rem;
  color: #49f48e;
  @media (max-width:600px) {
    font-size: 1.3rem;
    text-align: center;
  }
}
.right-video{
  width: 100%;
  max-width: 45rem;
  max-height: 45rem;
  transform: rotate(-25deg);
   @media (max-width:1920px) {
    position: relative;
    top: -30rem;
    left: 4rem;
  }
  @media (max-width:1435px) {
    max-width: 35rem;
    max-height: 35rem;
    top: -30rem;
    left: -6rem; 
  }
   @media (max-width:1024px) {
    position: relative;
    top: 10rem;
    left: 0rem; 
    
  }
   @media (max-width:820px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (max-width:600px) {
    max-width: 250px;
    max-height: 250px;
    position: relative;
    left: -5rem;
  }
   @media (max-width:480px) {
    position: relative;
    left: -2.5rem;
  }
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
  @media (max-width:600px) {
    font-size: 2rem;
    line-height: 2.5rem;
    width: 100%;
    padding-right: 2rem;
  }
  @media (max-width:600px) {
    font-size: 1.5rem;
  }
   @media (max-width:480px) {
    font-size: 1.3rem;
  }
}
.left__text2{
  font-size: 2rem;
  font-weight: 400;
  font-family: "Aventa";
  width: 100%;
  max-width: 60rem;
  line-height: 2.5rem;
  margin-top: 2.3rem;
  @media (max-width:1024px) {
    margin-right: 1rem;
    padding-right: 3rem; 
  }
  @media (max-width:600px) {
    font-size: 1.3rem;
    line-height: 2rem;
    margin-right: 1rem;
    padding-right: 3rem; 
  }
}
.span{
  color: #49f48e;
}

.left-text2-title {
  color: #48f08c;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.163rem;
}
.left-text2-text--marginTop{
  margin-top: 2.7rem;
}

</style>
