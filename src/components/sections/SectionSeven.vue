<template>
  <section class="SectionSeven">
    <div class="title-box">
      <div class="title">OUR PARTNERS</div>
      <img class="title-img" src="@/assets/Vector.png" alt="vector" />
    </div>
    <div class="partners partners-container">
      <div class="partners-item partners__evolucio">
        <a href="http://evolucio.tv" target="_blank">
          <img class="partners__img" src="@/assets/img/evolucio.png" alt="evolucio" />
        </a>
      </div>
      <div class="partners-item partners__music-battles">
        <a href="https://musicbattles.com" target="_blank">
          <img
            class="partners__img"
            src="@/assets/img/music-battles.png"
            alt="music-battles."
          />
        </a>
      </div>
      <div class="partners-item partners__jota">
        <a href="https://www.jota2group.com" target="_blank">
          <img class="partners__img" src="@/assets/img/jota.png" alt="jota" />
        </a>
      </div>
      <div class="partners-item partners__barnett">
        <a href="http://www.barnett-office.com" target="_blank">
          <img class="partners__img" src="@/assets/img/barnett.png" alt="barnett" />
        </a>
      </div>
      <div class="partners-item partners__fresh-island">
        <a href="https://fresh-island.org" target="_blank">
          <img
            class="partners__img"
            src="@/assets/img/fresh-island.png"
            alt="fresh-island"
          />
        </a>
      </div>
      <div class="partners-item partners__cryptomeria">
        <a href="https://cryptomeriacapital.com" target="_blank">
          <img
            class="partners__img"
            src="@/assets/img/cryptomeria.png"
            alt="cryptomeria"
          />
        </a>
      </div>
      <div class="partners-item partners__noonoori">
        <a href="https://www.instagram.com/noonoouri/?hl=en" target="_blank">
          <img
            class="partners__img"
            src="@/assets/img/Noonoori.png"
            alt="noonoori"
          />
        </a>
      </div>
      <div class="partners-item partners__nagami">
        <a href="https://nagami.design/es/" target="_blank">
          <img
            class="partners__img"
            src="@/assets/img/nagami.png"
            alt="nagami"
          />
        </a>
      </div>
      <div class="partners-item partners__cointelegraph">
        <a href="https://cointelegraph.com" target="_blank">
          <img
            class="partners__img"
            src="@/assets/img/cointelegraph.png"
            alt="cointelegraph"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "section-seven",
};
</script>

<style scoped lang="scss">
.SectionSeven {
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
.title-box{
  height: auto;
}
.title {
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

.title-img {
  margin-top: 1rem;
  margin-left: 0.5rem;
  height: 0.6rem;
  width: 12rem;
  @media (max-width: 600px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    position: relative;
    margin: 0;
    top: -4rem;
  }
}

.partners {
  width: 100%;
  max-width: 101.3rem;
  margin-top: 11rem;
  @media (max-width: 1024px) {
    padding: 5rem;
    padding-top:0;
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    margin-top: 0rem;

  }
}

.partners-container {
  display: grid;
  grid-template-columns: auto auto auto;

  justify-content: space-between;
  align-content: space-between;
  grid-row-gap: 6rem;
  grid-column-gap: 4rem;

  @media (max-width: 960px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 720px) {
    grid-template-columns: auto;
    justify-content: center;
    grid-row-gap: 2rem;

  }
}

.partners-item {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 20rem;

  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
}
.partners__img{
  width: 100%;

}

.partners__evolucio {
  @media (min-width: 600px) {
  }
}

.partners__music-battles {
  @media (min-width: 600px) {
  }
}

.partners__jota {
  @media (min-width: 600px) {
  }
}

.partners__barnett {
  max-width: 15rem;
  margin: 0 auto;
  @media (min-width: 600px) {
  }
  @media (max-width: 480px) {
  }
}

.partners__fresh-island {
  @media (min-width: 600px) {
  }
}

.partners__cryptomeria {
  @media (min-width: 600px) {
  }
}

.partners__noonoori {
}

.partners__nagami {
}

.partners__cointelegraph {
}
</style>
