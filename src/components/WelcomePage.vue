<template>
  <div>
    <section class="introSide">
      <div class="container">
        <div class="row text-start">
          <div class="col">
            <div>
              <h7 class="animate__animated animate__flash">Hi,</h7>
            </div>
            <div>
              <h6 class="animate__animated animate__flash">my name is</h6>
            </div>
            <h1 class="animate__animated animate__flash">Mustafa Şenay.</h1>
            <div class="mt-2">
              <h1 class="animate__animated animate__flash">I design frontend web sites</h1>
            </div>
            <div class="mt-2">
              <h6 class="animate__animated animate__flash">I’m a frontend developer. Currently, I’m focused on building accessible, human-centered products for my portfolio</h6>
            </div>
            <div class="mt-2">
              <router-link
                to="/resume"
                tag="button"
                class="btn text-white resumeButton mt-3 animate__animated animate__flash"
                >
                Check out my resume
              </router-link>
            </div>
          </div>
          </div>
          <div class="d-flex flex-row animate__animated animate__slideInUp">
            <a href="https://www.linkedin.com/in/mustafasenayy/"><i class="fab fa-linkedin-in fs-1 text-start mt-5 me-5 iconHover"></i></a>
            <a href="https://github.com/mustafasenay"><i class="fab fa-github fs-1 text-start mt-5 me-5 iconHover"></i></a>
            <a href="#"><i class="fab fa-twitter fs-1 text-start mt-5 me-5 iconHover"></i></a>
            <a href="#"><i class="fab fa-instagram fs-1 text-start mt-5 iconHover me-5"></i></a>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>

  .introSide{
    text-align: center;
    margin-top: 8%;
    margin-left: 25%;
  }

  .resumeButton{
    border: 1px solid aqua;
    font-weight: bold;
  }
  .resumeButton:hover{
    background-color: aqua;
    transition: background-color 1s ease-out;
    color: black!important;
    font-weight: bold;
  }
  .iconHover:hover{
    color: aqua;
    transition: color 1s ease-out;
  }
</style>
