<template>
  <div>
    <section class="introSide animate__animated animate__fadeIn">
       <div class="container-fluid mb-5">
               <div class="row d-flex flex-column text-center">
                 <h1>some of my works</h1>
               </div>
               <div class="portfolioBox row d-flex justify-content-center align-items-center">
                 <div class="col-3 porfolioCards">
                   <img src="../assets/Portfolio1.png" alt="" class="portfolioImageSize">
                   <div class="d-flex flex-column text-center mt-3">
                     <a href="https://github.com/mustafasenay/to-do-vue.git" class="btn portfolioButton">View in GitHub</a>
                   </div>
                 </div>
                 <div class="col-3 porfolioCards">
                   <img src="../assets/Portfolio2.png" alt="" class="portfolioImageSize">
                   <div class="d-flex flex-column text-center mt-3">
                     <a href="https://github.com/mustafasenay/ecommerce.git" class="btn portfolioButton">View in GitHub</a>
                   </div>
                 </div>
                 <div class="col-3 porfolioCards">
                   <img src="../assets/Portfolio3.png" alt="" class="portfolioImageSize">
                   <div class="d-flex flex-column text-center mt-3">
                     <a href="https://github.com/mustafasenay/login.git" class="btn portfolioButton">View in GitHub</a>
                   </div>
                 </div>
                 <div class="col-3 porfolioCards">
                   <img src="../assets/Portfolio4.png" alt="" class="portfolioImageSize">
                   <div class="d-flex flex-column text-center mt-3">
                     <a href="https://github.com/mustafasenay/fashion-website.git" class="btn portfolioButton">View in GitHub</a>
                   </div>
                 </div>
                 <div class="col-3 porfolioCards">
                   <img src="../assets/Portfolio5.png" alt="" class="portfolioImageSize">
                   <div class="d-flex flex-column text-center mt-3">
                     <a href="https://github.com/mustafasenay/basic-e-commerce-localstorage.git" class="btn portfolioButton">View in GitHub</a>
                   </div>
                 </div>
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
    text-align: left;
    margin-top: 5%;
  }
  .btnSize{
    width: 150px;
  }
  .portfolioBox{
    width: 100%;
    height: 100%;

  }
  .porfolioCards{
    width: 50%;
    height: 10%;
    margin: 10px;
    border-radius: 25px;
    padding: 20px;
    margin-bottom: 50px;
  }
  .porfolioCards:hover{
    border: 1px solid aqua;
  }
  .portfolioImageSize{
    width: 100%;
    height: 100%;
    padding: 5px;
    border-radius: 25px;
  }

  .portfolioButton{
    background-color: #0A192F;
    color: white;
    border: 1px solid aqua;
    font-weight: bold;
    
  }
  .portfolioButton:hover{
    background-color: aqua;
    transition: background-color 1s ease-out;
    color: black;
    font-weight: bold;
  }
  
</style>
