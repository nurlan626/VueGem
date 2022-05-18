<template>
  <section class="SectionFourth">
    <div class="drop-ready__container">
      <div class="drop-ready__title-box">
        <div class="drop-ready__title">BE DROP READY!</div>
        <div class="drop-ready__date">02 : 13 : 35 : 50</div>
        <div class="drop-ready__days">
          <div>
            Days
          </div>
          <div  class="drop-ready__hours">
            Hours
          </div>
          <div>
            Minutes
          </div>
          <div>
            Seconds
          </div>
        </div>
      </div>      
      <input  class="drop-ready__input" type="text" placeholder="Email">
      <button class="drop-ready__button">Get your name on the list</button>
    </div>
     
  </section>
</template>

<script>
export default {
  name: "section-third",
};
</script>

<style scoped lang="scss">

.SectionFourth {
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36.45rem;
  margin-right: 1rem;
  @media (max-width: 600px) {
    margin-top: 20rem;
  }
}

.drop-ready__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.drop-ready__title {
  font-family: "Bebas Neue";
  font-size: 10.256rem;
   @media (max-width: 600px) {
    font-size: 8rem;
  }
}

.drop-ready__date {
  margin-top: 1rem;
  font-family: "Bebas Neue";
  font-size: 10.6rem;
  line-height: 9rem;
  color: #48f08c;
  @media (max-width: 600px) {
    font-size: 8rem;
  }

}

.drop-ready__days {
  margin-top: 0.2rem;
  display: flex;
  font-family: "Aventa";
  font-size: 1.6rem;
  width: 100%;
  justify-content: space-between;
  color: #48f08c;
}

.drop-ready__hours {
  margin-left: 3.5rem;
}

.drop-ready__input {
  margin-top: 3rem;
  height: 4.5rem;
  width: 50rem;
  background-color: transparent;
  border: 1px solid grey;
  font-size: 2rem;
  padding-left: 1.2rem;
  color: #ffffff;
  @media (max-width: 600px) {
    width: 35rem;
  }
}

.drop-ready__button {
  margin-top: 1.05rem;
  font-family: 'Aventa';
  font-size: 2rem;
  height: 4.3rem;
  padding: 0rem 5.1rem 0 5.3rem;
  border-radius: 1rem;
  border: none;
  background-color: #7239fa;
  color: white;
  position: relative;
  top: 1rem;
  width: 50rem;
  @media (max-width: 600px) {
    width: 35rem;
      font-size: 1.5rem;
  }
}
</style>
