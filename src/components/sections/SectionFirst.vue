<template>
  <section class="SectionFirst">
      <div class="title">
        <div class="title__title1"> 
          THE FUTURE  
        </div>
        <div class="title__title2">
          BELONGS TO YOU
        </div>
      </div>
      <div class="content">
        <div class="content__text-container">
          <div class="context__text-title">
            JOIN THE COOLEST FASHION, SNEAKERS DESIGN, MUSIC, CELEBRITY & EVENT BRANDS ENTERING THE METAVERSE
          </div>
          <div class="content__text">
            Built on a foundation of equality, creativity and prosperity, <span class="content__text-span">GemBox</span> is a bond between the brands and a community. You'll have to follow us for the collaboration announcements, since it is all NDA just yet - but we can promise it will turn your hands diamond. Take a part in a freshly minted community.
          </div>
          <div class="content__links">
            <button class="content__links-button">Join the movement</button>
            <div class="content__links-social">
              <div class="content__links-social-title">Follow Us</div>
              <div class="content__links-social-icon-box">
                <img class="content_link-icon" src="@/assets/sectionFirst/twitter-logo.png" alt="content_link-icon">
                <img class="content_link-icon" src="@/assets/sectionFirst/instagram-logo.png" alt="content_link-icon">
              </div>
            </div>
          </div>
        </div>
        <div class="content__video-box">
          <video class="content__video" autoplay loop>
              <source src="@/assets/video/kawai.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <div class="membershtip-nft">
        <div class="ready-for">Be ready for</div>
        <div class="membership-nft__title">MEMBERSHIP <span class="membership-nft__span">NFT’S DROP </span>
        </div>
        <div class="membership-nft__text">
          If you are hoping to be more than a member, get ready for our initial, founder edition drop comprising <span class="membership-nft__span">50 Premium</span> NFTs and <span class="membership-nft__span">5,000 Base</span> NFTs. Steady your FOMO! Yes, premium NFT’s come with an infinite utility option, but Base NFT’s can be upgraded with DROPS, EVENTS or POWER utilities.
        </div>
      </div> 
  </section>
</template>

<script>

export default {
  name: "section-first",
};
</script>

<style>
.SectionFirst{
  padding: 6.5rem 5.2rem 10rem 15rem;
  color: white;
}
.title{
  padding-top: 6rem;
  text-align: center;
  font-size: 6.3rem;
  font-family: "Aventa";
  font-weight: 700;
  line-height: 6.7rem;
}
.title__title1{
   padding-right: 30rem; 
}
.content{
  display: flex;
  width: 100%;
  padding-left: 3.8rem;
}
.content__text-container{
  width: 100%;
  max-width: 56rem;
}
.context__text-title{
  font-size: 4.8rem;
  font-family: 'Bebas Neue', cursive;
  font-family: 400;
  line-height: 5.2rem;
  padding-top: 13.2rem;
}
.content__text{
  padding-top: 5rem;
  font-size: 2rem;
  font-family: 'Aventa';
  font-family: 400;
  line-height: 2.5rem;
  width: 100%;
  max-width: 50rem;
}
.content__text-span{
  font-weight: 600;
}
.content__links{
  margin-top: 4.8rem;
  display: flex;
  gap: 7.7rem;
  padding: 1.5rem 0 2rem 0;
}
.content__links-button{
  font-family: 'Aventa';
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
.content__links-social{
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
  max-width: 15rem;;
}
.content__links-social-title{
  font-family: "Aventa";
  font-size: 1.465rem;
}
.content__links-social-icon-box{
  display: flex;
  gap: 3.8rem;
}
.content_link-icon{
  width: 4rem;
}
.content__video-box{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6.5rem;
}
.content__video{
  width: 100%;
}
.membershtip-nft{
  font-family: "Aventa";
  width: 100%;
  max-width: 58.3rem;
  margin: 25rem auto 0 auto;
  position: relative;
  right: 2.6rem
}
.ready-for{
  color: #7239FA;
  font-size: 2.7rem;
}
.membership-nft__title{
  font-size: 7.4rem;
  font-family: "Bebas Neue";
}
.membership-nft__span{
  color: #48f08c;
}
.membership-nft__text{
  font-size: 2rem;
  margin-top: 2rem;
}
</style>
