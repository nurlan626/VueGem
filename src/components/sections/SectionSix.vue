<template>
  <section class="SectionSix">
      <div class="title-box">
          <div class="title">JOIN THE FOUNDERS</div>
          <img class="title-img" src="@/assets/Vector.png" alt="vector">
      </div>
      <div class="text">
        GemBox si a product of Artifact Labs, an NFT company led by veteran technologists, creators and community builders who want to close gaps between the value created and the amount digital creators actually make. Artifact Labs is co-founded by <u class="u">Jotta 2 Group</u> operating in over 22 countries worldwide.
      </div>
      <div class="founders">
        <div class="item">
          <img class="founder-img" src="@/assets/founder.png" alt="founder">
          <div>
            <div class="founder-title">Alexandr Chevtaev</div>
            <img class="founder-vector" src="@/assets/Vector.png" alt="vector">
          </div>
          <div class="founder-position">Co-Founder</div>
          <div class="founder-description">Alex, one of our founding fathers, is a blockchain technology expert with 10 years of entrepreneurial experience in launching innovative products and a lecturer on all things blockchain at one of the world's prestigious tech universities.
          </div>
        </div>
        <div class="item">
          <img class="founder-img" src="@/assets/founder.png" alt="founder">
          <div>
            <div class="founder-title">Bobo Delić</div>
            <img class="founder-vector" src="@/assets/Vector.png" alt="vector">
          </div>
          <div class="founder-position">CMO</div>
          <div class="founder-description">With vast experience in creating and deploying marketing strategies of many renowned worldwide brands, Bobo’s mission is to turn GemBox into a globally recognized brand by bringing in an innovative perspective to this crossover of technology and lifestyle project.
          </div>
        </div>
        <div class="item">
          <img class="founder-img" src="@/assets/kenan.png" alt="founder">
          <div>
            <div class="founder-title">Kenan Kerimov</div>
            <img class="founder-vector" src="@/assets/Vector.png" alt="vector">
          </div>
          <div class="founder-position">CTO</div>
          <div class="founder-description founder-description--width">With a quarter of a century of experience in IT, Kanan is our tech leader taking care of software development/implementation, infrastructure and adding features to our advanced NFT ecosystem to deliver the best experience for content creators and collectors.
          </div>
        </div>
        <div class="item">
          <img class="founder-img" src="@/assets/founder.png" alt="founder">
          <div>
            <div class="founder-title">Gavin Hockley</div>
            <img class="founder-vector" src="@/assets/Vector.png" alt="vector">
          </div>
          <div class="founder-position">CFO</div>
          <div class="founder-description">Gavin is our chief of finance, well versed in the software and internet business practices, as well as a bunch of ICO experience. He is excited at the opportunity to build decentralised communities and offer exciting new experiences to GemBox members.
          </div>
        </div>
        <div class="item">
          <img class="founder-img" src="@/assets/founder.png" alt="founder">
          <div>
            <div class="founder-title">Noan Cantabrana</div>
            <img class="founder-vector" src="@/assets/Vector.png" alt="vector">
          </div>
          <div class="founder-position">Head of Community</div>
          <div class="founder-description">Noan has been a crucial part of the NFT scene from the early days. His passion is bringing communities to life and working around communities for communities. Noan is known for managing the Beeple community back when it was all but hype.
          </div>
        </div>
        <div class="item">
          <img class="founder-img" src="@/assets/founder.png" alt="founder">
          <div>
            <div class="founder-title">Jerome Sans</div>
            <img class="founder-vector" src="@/assets/Vector.png" alt="vector">
          </div>
          <div class="founder-position">Advisor</div>
          <div class="founder-description">Jerome is the greatest living art curator who in his rich career, co-founded the Palais de Tokyo in Paris and directed Ullens Center for Contemporary Art in Bejing among the others. Jerome joined Gembox team to build exciting new world for all of us. 
          </div>
        </div>
      </div>
      <div class="bottom-text">
        +9 team members from design, marketing and tech development
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
    margin-top: 11.59rem;
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
      margin-left: 0;
    }
}
.title-img{
   margin-left: -3.5rem;
   margin-top: 1.1rem;
   width: 16rem;
   height: 0.7rem;
  @media (max-width: 600px) {
      margin-left: 0;
   }
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
  @media (max-width: 1024px) {
      padding: 3rem;
      margin-top: 3rem;
    }
}
.founders{
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 98.2rem;
  margin-right: 3.6rem;


  @media (max-width: 1024px) {
      padding: 0rem 5rem 0 5rem;
      flex-wrap: wrap;

  }

  

}
.item{
  font-family: "Aventa";
  width: 13.2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 6.6rem;


}
.founder-title{
  width: 15.2rem;
  font-weight:  400;
  font-size: 1.567rem;
  margin-top: 1.55rem;
  margin-bottom: -0.35rem;
  
}
.founder-img{
  width: 13.2rem;;
}
.founder-vector{
  width: 4rem;  
}
.founder-position{
  width: 15.2rem;
  margin-top: 0.95rem;
  font-size: 1.395rem;
}
.founder-description{
  margin-top: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.2rem;
}
.founder-description--width{
  width: 13rem;
}
.bottom-text{
  font-family: "Aventa";
  margin-top: 5.3rem;
  font-size: 1.567rem;
  margin-right: 3.2rem;
  @media (max-width: 1024px) {
    margin: 5.3rem auto 0 auto;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    
  }
}
.u{
  line-height: 2rem;
  font-weight: 300;
}
</style>
