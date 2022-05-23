<template>
  <section class="SectionSeven">
    <div class="title-box">
      <div class="title">OUR PARTNERS</div>
      <img class="title-img" src="@/assets/Vector.png" alt="vector">
    </div>
    <div class="partners partners-container">
      <a href="http://evolucio.tv" target="_blank">
        <img class="partners-item partners__evolucio" src="@/assets/img/evolucio.png" alt="evolucio">
      </a>
      <a href="https://musicbattles.com" target="_blank">
        <img class="partners-item partners__music-battles" src="@/assets/img/music-battles.png" alt="music-battles.">
      </a>
      <a href="https://www.jota2group.com" target="_blank">
        <img class="partners-item partners__jota" src="@/assets/img/jota.png" alt="jota">
      </a>
      <a href="http://www.barnett-office.com" target="_blank">
        <img class="partners-item partners__barnett" src="@/assets/img/barnett.png" alt="barnett">
      </a>
      <a href="https://fresh-island.org" target="_blank">
        <img class="partners-item partners__fresh-island" src="@/assets/img/fresh-island.png" alt="fresh-island">
      </a>
      <a href="https://cryptomeriacapital.com" target="_blank">
        <img class="partners-item partners__cryptomeria" src="@/assets/img/cryptomeria.png" alt="cryptomeria">
      </a>
      <a href="https://www.instagram.com/noonoouri/?hl=en" target="_blank">
        <img class="partners-item partners__noonoori" src="@/assets/img/Noonoori.png" alt="noonoori">
      </a>
      <a href="https://nagami.design/es/" target="_blank">
        <img class="partners-item partners__nagami" src="@/assets/img/nagami.png" alt="nagami">
      </a>
      <a href="https://cointelegraph.com" target="_blank">
        <img class="partners-item partners__cointelegraph" src="@/assets/img/cointelegraph.png" alt="cointelegraph">
      </a>
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
        margin:0;
        top: -4rem;
    }
}

.partners {
  margin-top: 10rem;
  width: 100%;
  max-width: 100rem;
  @media (max-width: 1024px) {
    padding: 5rem;
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    padding: 2rem;
    margin: 0;
  }
}

.partners-container {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-left: 20rem;

  @media (max-width: 960px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
}

.partners-item {
  margin-top: 3.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-left: 6.25rem;
  }

  @media (max-width: 480px) {
    margin-left: 2.2rem;
  }
}

.partners__evolucio {
  height: 2.6rem;
  width: 17rem;
  left: 58rem;
  top: 511rem;
  @media (min-width: 600px) {
    margin-bottom: 3.5rem;
  }
}

.partners__music-battles {
  height: 2.6rem;
  width: 13.3rem;
  left: 58rem;
  top: 511rem;
  @media (min-width: 600px) {
    margin-bottom: 6.3px;
  }
}

.partners__jota {
  height: 0.9rem;
  width: 17.3rem;
  left: 58rem;
  top: 512rem;
  @media (min-width: 600px) {
    margin-bottom: 7.8rem;
  }
}

.partners__barnett {
  height: 9.5rem;
  width: 9.5rem;
  left: 58.4rem;
  top: 511rem;
  @media (min-width: 600px) {
    margin-bottom: 4.44rem;
  }
  @media (max-width: 480px) {
    margin-left: 5rem;
  }
}

.partners__fresh-island {
  height: 5rem;
  width: 15rem;
  left: 58.4rem;
  top: 511rem;
  @media (min-width: 600px) {
    margin-bottom: 6rem;
  }
}

.partners__cryptomeria {
  height: 55px;
  width: 279px;
  left: 58.4rem;
  top: 511rem;
  @media (min-width: 600px) {
    margin-bottom: 5.3rem;
  }
}

.partners__noonoori {
  height: 1.7rem;
  width: 16.4rem;
  left: 13.3rem;
  top: 532rem;

}

.partners__nagami {
  height: 3rem;
  width: 12.5rem;
  left: 37.4rem;
  top: 531rem;

}

.partners__cointelegraph {
  height: 5.6rem;
  width: 18rem;
  left: 57.5rem;
  top: 529rem;
}
</style>
