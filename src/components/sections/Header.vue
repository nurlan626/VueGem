<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
          <img
            class="header__logo-image"
            src="@/assets/header/logo.png"
            alt="header__logo-image"
          />
        <div class="header__logo-text">GemBox</div>
      </div>
      <div class="header__links">
        <div class="header__links-text">Join Community</div>
        <div class="header__links-icons">
            <img class="header__links-icon header__links-icon-discord" src="@/assets/header/discord-logo.png" alt="header__links-icon-discord" />
            <img class="header__links-icon" src="@/assets/header/twiter-logo.png" alt="header__links-icon-twitter" />
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

<style>
.header {
    background-color: black;
    color: white;
}
.header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 2.1rem 1rem 4.4rem;
}
.header__logo {
    display: flex;
    gap: 1.3rem;
}
.header__logo-image {
    width: 3.7rem;
    height: 3.7rem;
}
.header__logo-text{
    font-size: 2.9rem;
    font-family: "Aventa";
    font-weight: 700;
    margin-top: 0.4rem; 
}
.header__links {
    display: flex;
    gap: 3rem;
    font-family: "Aventa";
    font-size: 1.3rem;

}
.header__links-icons{
    display: flex;
    gap: 2.3rem;
}
.header__links-icon{
    width: 2.4rem;
}
.header__links-icon-discord{
    width: 2.8rem;
}
</style>
