<template>
  <section class="SectionEight">
      <div class="invitation__title-box">
        <div class="invitation__title">Get invited to the launch</div>
        <div class="invitation__subtitle">So you don't miss out on all the best stuff.</div>
      </div>
      <button class="invitation__button">Put your Email here</button>
  </section>
</template>

<script>
export default {
  name: "section-eight",
};
</script>

<style scoped lang="scss">

.SectionEight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 23rem;
  margin-right: 1rem;
  text-align: center;
  color: white;
  @media (max-width: 600px) {
    margin-top: 7rem;
    padding: 3rem;
  }
}

.invitation__title {
  font-family: "Bebas Neue";
  font-size: 7rem;
  margin-left: 2rem;
   @media (max-width: 600px) {
     font-size: 5rem;
  }
}

.invitation__subtitle {
  margin-top: -0.5rem;
  margin-left: 2.2rem;
  font-family: "Aventa";
  font-size: 2.38rem;
  color: #48f08c;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
}

.invitation__button {
  margin-top: 3.7rem;
  font-family: 'Aventa';
  font-size: 1.793rem;
  height: 4.3rem;
  padding: 0rem 5.1rem 0 5.3rem;
  border-radius: 1rem;
  border: none;
  background-color: #7239fa;
  color: white;
  position: relative;
  top: 1rem;
  width: 100%;
  max-width: 58.6rem;
  margin-left: 2.2rem;
}
</style>
