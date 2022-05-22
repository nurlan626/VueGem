<template>
  <header class="header">
    <div class="header__inner">
      <router-link to="/" class="header__logo-a" >
        <div class="header__logo">
          <img
            class="header__logo-image"
            src="@/assets/header/logo.png"
            alt="header__logo-image"
          />
          <div class="header__logo-text">GemBox</div>
        </div>
      </router-link>
      <div class="header__links">
        <div class="header__links-text">Join Community 19:56</div>
        <div class="header__links-icons">
          <a class="header__logo-a" href="#">
            <img
              class="header__links-icon header__links-icon-discord"
              src="@/assets/header/discord-logo.png"
              alt="header__links-icon-discord"
            />
          </a>
          <a class="header__logo-a" href="#">
            <img
              class="header__links-icon"
              src="@/assets/header/twiter-logo.png"
              alt="header__links-icon-twitter"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-section",
};
</script>

<style lang="scss">
.header {
  background-color: black;
  color: white;
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 4.1rem 1rem 4.4rem;
  @media (max-width: 600px) {
    padding: 1.4rem 2.5rem 1rem 2.5rem;
  }
  @media (max-width: 400px) {
    padding: 1.4rem 2rem 1rem 2rem;
  }
}
.header__logo-a{
  text-decoration: none;
  color: white;
}
.header__logo {
  display: flex;
  gap: 1.3rem;
}
.header__logo-image {
  width: 3.7rem;
  height: 3.7rem;
  @media (max-width: 400px) {
    width: 2.5rem;
    height: 2.5rem;
  }
}
.header__logo-text {
  font-size: 2.9rem;
  font-family: "Aventa";
  font-weight: 700;
  margin-top: 0.4rem;
  @media (max-width: 400px) {
    font-size: 2rem;
  }
}
.header__links {
  display: flex;
  align-items: center;
  // gap: 3rem;
  font-family: "Aventa";
  font-size: 1.3rem;

  @media (max-width: 600px) {
    //  gap: 1rem;
    margin-left: 1rem;
    font-size: 1rem;
  }
}
.header__links-icons {
  display: flex;
  // gap: 2.3rem;
  @media (max-width: 600px) {
    //  gap: 1rem;
  }
}
.header__links-icon {
  margin-left: 2.3rem;
  width: 2.4rem;
  height: 2.4rem;
  @media (max-width: 600px) {
    height: 2rem;
    width: 2rem;
  }
  @media (max-width: 400px) {
    margin-left: 1.5rem;
  }
}
.header__links-icon-discord {
  //  width: 2.8rem;
  margin-left: 3.5rem;
  @media (max-width: 400px) {
    margin-left: 1.5rem;
  }
}
</style>
