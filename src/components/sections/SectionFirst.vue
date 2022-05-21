<template>
  <section class="SectionFirst">
    <audio  v-if="!mute" preload autoplay loop id="audio"> 
      <source 
      src="@/assets/music/music.wav" 
      type="audio/wav" 
      />   
    </audio>
    <div class="sound">
      <img 
        class="sound-img" 
        src="@/assets/sound1.svg" 
        alt="artifact-logo"  
        @click="play"
      />
      <!-- <img 
          class="sound-img" 
          src="@/assets/sound2.svg" 
          alt="artifact-logo" 
          @click="stop"
      /> -->
    </div>
    <div class="title2">
      <img 
        class="title2-img" 
        src="@/assets/frame2.svg" 
        alt="title2-img" />
    </div>
    <div class="content">
      <div class="content__text-container">
        <div class="context__text-title">
          JOIN THE COOLEST FASHION, SNEAKERS DESIGN, MUSIC, CELEBRITY & EVENT
          BRANDS ENTERING THE METAVERSE
        </div>
        <div class="content__text">
          Built on a foundation of equality, creativity and prosperity,
          <span class="content__text-span">GemBox</span> is a bond between the
          brands and a community. You'll have to follow us for the collaboration
          announcements, since it is all NDA just yet - but we can promise it
          will turn your hands diamond. Take a part in a freshly minted
          community.
        </div>
        <div class="content__links">
          <button class="content__links-button">Join the movement</button>
          <!-- <div class="content__links-social">
            <div class="content__links-social-title">Follow Us</div>
            <div class="content__links-social-icon-box">
              <img
                class="content_link-icon"
                src="@/assets/sectionFirst/twitter-logo.png"
                alt="content_link-icon"
              />
              <img
                class="content_link-icon"
                src="@/assets/sectionFirst/instagram-logo.png"
                alt="content_link-icon"
              />
            </div>
          </div> -->
        </div>
      </div>
      <div class="video-box">
        <!-- <video class="video" autoplay loop preload muted playsinline>
          <source src="@/assets/video/kawai.mp4" type="video/mp4" />
        </video> -->
        <video class="video" autoplay loop preload muted playsinline>
          <source src="https://drive.google.com/uc?export=download&id=1cUXdAcedQ9RWn1t25cYsDILjc9U1X78L" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="membershtip-nft">
      <div class="ready-for">Be ready for</div>
      <div class="membership-nft__title">
        MEMBERSHIP <span class="membership-nft__span">NFT’S DROP </span>
      </div>
      <div class="membership-nft__text">
        If you are hoping to be more than a member, get ready for our initial,
        founder edition drop comprisingz
        <span class="membership-nft__span">50 Premium</span> NFTs and
        <span class="membership-nft__span">5,000 Base</span> NFTs. Steady your
        FOMO! Yes, premium NFT’s come with an infinite utility option, but Base
        NFT’s can be upgraded with DROPS, EVENTS or POWER utilities.
      </div>
    </div>
  </section>
</template>

<script>
import "@/scss/mixins.scss";

export default {
  name: "section-first",
  mounted() {
    this.play();
  },
  methods: { 
    data() {
      return {
        mute: false 
      }
    },
    play() {
      let audio = document.getElementById("audio");
      audio.volume = 0.2;
      if(this.mute){
        audio.play();
      } else {
        audio.pause(); 
      } 
      this.mute = !this.mute;

    },
  }
};
</script>

<style scoped lang="scss">
.SectionFirst {
  padding: 6.5rem auto 10rem auto;
  color: white;
  @media (max-width: 600px) {
    padding: 0rem 2rem 10rem 2rem;
  }
}
.sound {
  display: flex;
  gap: 2rem;

  position: absolute;
  right: 5rem;
  top: 12.5rem;
  @media (max-width: 600px) {
    right: 2rem;
    top: 7.5rem;
  }
}
.sound-img {
  border: 2px solid transparent;
  @media (max-width: 600px) {
    width: 2rem;
  }
  &:hover{
      border: 2px solid grey;
  }
}
.title2 {
  display: flex;
  justify-content: center;
  margin-top: 4.8rem;
  margin-left: 2.6rem;
}
.title2-img {
  width: 100%;
  max-width: 62rem;
}
.title__title1 {
  padding-right: 30rem;
  @media (max-width: 1024px) {
    padding-right: 10rem;
  }
}
.content {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: left;
  margin-top: -4.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
}
.content__text-container {
  width: 100%;
  max-width: 56rem;
}
.context__text-title {
  font-size: 4.8rem;
  font-family: "Bebas Neue", cursive;
  font-family: 400;
  line-height: 5.2rem;
  padding-top: 13.2rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    text-align: center;
    padding-top: 7rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
    padding-top: 6rem;
  }
}
.content__text {
  padding-top: 5rem;
  font-size: 2rem;
  font-family: "Aventa";
  font-family: 400;
  line-height: 2.5rem;
  width: 100%;
  max-width: 50rem;
  @media (max-width: 1440px) {
  }
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    padding-top: 3rem;
    font-size: 1.3rem;
  }
}
.content__text-span {
  font-weight: 600;
}
.content__links {
  margin-top: 4.8rem;
  display: flex;
  gap: 7.7rem;
  padding: 1.5rem 0 2rem 0;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    gap: 7rem;
  }
}
.content__links-button {
  font-family: "Aventa";
  font-size: 2rem;
  height: 6rem;
  padding: 0rem 5.1rem 0 5.3rem;
  border-radius: 1rem;
  border: none;
  background-color: #7239fa;
  color: white;
  position: relative;
  top: 1rem;
}
.content__links-social {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
  max-width: 15rem;
 

}
.content__links-social-title {
  font-family: "Aventa";
  font-size: 1.465rem;
}
.content__links-social-icon-box {
  display: flex;
  gap: 3.8rem;
}
.content_link-icon {
  width: 4rem;
}
.video-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6.5rem;
  max-width: 50rem;
}
.video {
  width: 100%;
}
.membershtip-nft {
  font-family: "Aventa";
  width: 100%;
  max-width: 58.3rem;
  margin: 31.5rem auto 0 auto;
  position: relative;
  right: 2.6rem;
  @media (max-width: 1440px) {
    position: relative;
    left: 2rem;
  }
  @media (max-width: 600px) {
    margin-top: 20rem;
    position: static;
  }
}
.ready-for {
  color: #7239fa;
  font-size: 2.7rem;
}
.membership-nft__title {
  font-size: 7.4rem;
  font-family: "Bebas Neue";
  @media (max-width: 600px) {
    font-size: 6rem;
  }
}
.membership-nft__span {
  color: #48f08c;
}
.membership-nft__text {
  font-size: 2rem;
  margin-top: 2rem;
  @media (max-width: 600px) {
    font-size: 1.5;
  }
}
</style>
