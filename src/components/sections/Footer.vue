<template>
  <footer class="footer">
    <div class="left">
      <div class="powered">Powered by:</div>
      <img
        class="artifact-logo"
        src="@/assets/Artifact-logo.png"
        alt="artifact-logo"
      />
      <div class="copyright-box">
        <div>© Copyright Artifact Entertainment LTD</div>
        <div>All Rights Reserved. 2022</div>
      </div>
    </div>
    <div class="right">
      
      <div class="privacy"> <router-link to="/privacy" class="privacy-link"> Privacy policy </router-link> </div>
      <div>
        <div class="join">Join our community</div>
        <div class="icons">
          <img class="icon discord" src="@/assets/discord-logo-grey.png" alt="" />
          <img class="icon twiter" src="@/assets/twiter-logo-grey.png" alt="" />
          <img class="icon instagram" src="@/assets/instagram-logo-grey.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "section-footer",
};
</script>

<style scoped lang="scss">
.footer {
  margin-top: 19.15rem;
  color: #919B96;
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 4.1rem 6.6rem 2.5rem 7.6rem;
  padding-bottom: 2.78rem;
  font-family: "Aventa";
   @media (max-width: 1024px) {
    flex-direction: column;
    gap: 5rem;
  }
  @media (max-width: 600px) {
    padding-left: 4rem;
  }

}
.powered {
  font-size: 1.118rem;
}
.artifact-logo {
  margin-top: 1.8rem;
  width: 100%;
  max-width: 28.3rem;
  
}

.copyright-box {
  display: flex;
  gap: 3rem;
  font-size: 1.6rem;
  margin-top: 6.3rem;
  margin-left: 0.2rem;
   @media (max-width: 600px) {
    font-size: 1.2rem;
  }
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.privacy{
  font-size: 1.6rem;
  margin-top: 1rem;
  margin-right: 5.7rem;
  margin-bottom: 2rem;
   @media (max-width: 1024px) {
    margin-right: 4rem;
  }
   @media (max-width: 600px) {
    font-size: 1.2rem;
  }
}
.icons{
  width: 100%;
  max-width: 46.2rem;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
   @media (max-width: 1024px) {
    justify-content: flex-start;
  }
}
.icon{
  width: 3.3rem;
  height: 3.3rem;
  position: relative;
  top: -0.5rem;
}
.join{
  margin-bottom: 2rem;
  font-size: 1.118rem;
}
.privacy-link{
  text-decoration: none;
  color: white;
}
</style>
