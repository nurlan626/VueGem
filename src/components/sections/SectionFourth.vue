<template>
  <section class="SectionFourth">
    <div class="container">
      <div class="title-box">
        <div class="title">BE DROP READY!</div>
        <div class="date">
          {{ displayDays }} : {{ displayHours }} : {{ displayMinutes }} :
          {{ displaySeconds }}
        </div>
        <div class="days">
          <div>Days</div>
          <div class="days__hours">Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
        </div>
      </div>
      <input class="input" type="text" placeholder="Email" />
      <button class="button">Get your name on the list</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "section-fourth",
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2022, 5, 14, 22, 0, 0, 0);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.SectionFourth {
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32rem;
  margin-right: 1rem;
  @media (max-width: 600px) {
    margin-top: 20rem;
  }
  @media (max-width: 480px) {
    margin-top: 10rem;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.title {
  font-family: "Bebas Neue";
  font-size: 10.256rem;
  @media (max-width: 600px) {
    font-size: 6.5rem;
    text-align: center;
  }
}
.date {
  margin-top: 1rem;
  font-family: "Bebas Neue";
  font-size: 10.6rem;
  line-height: 9rem;
  color: #48f08c;
  @media (max-width: 600px) {
    font-size: 6rem;
    text-align: center;
  }
}
.days {
  margin-top: 0.2rem;
  display: flex;
  font-family: "Aventa";
  font-size: 1.6rem;
  width: 100%;
  justify-content: space-between;
  color: #48f08c;
  @media (max-width: 600px) {
    justify-content: space-around;
    font-size: 1.6rem;
    text-align: center;
  }
}
.days__hours {
  margin-left: 3.5rem;
  @media (max-width: 600px) {
    margin-left: 1.6rem;
  }
}
.input {
  margin-top: 3rem;
  height: 4.5rem;
  width: 50rem;
  background-color: transparent;
  border: 1px solid grey;
  font-size: 2rem;
  padding-left: 1.2rem;
  @media (max-width: 600px) {
    width: 30rem;
  }
}
.button {
  margin-top: 1.4rem;
  font-family: "Aventa";
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
    width: 30rem;
  }
}
</style>
