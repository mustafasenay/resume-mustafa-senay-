<template>
<div class="container animate__animated animate__fadeIn">
  <div class="row">
    <div class="col placeSelfCenter">
      <section class="introSide">
      <div class="container text-start">
        <div>
          <h1 class="text-center">Here are technologies I’ve been working with :</h1>
        </div>
      </div>
    </section>
    </div>
    <div class="col">
      <section class="introSide">
        <h6 class="text-start fs-1 btn-three"><i class="fab fa-html5"></i> HTML</h6>
        <h6 class="text-start fs-1 btn-three"><i class="fab fa-css3-alt"></i> CSS</h6>
        <h6 class="text-start fs-1 btn-three"><i class="fab fa-bootstrap"></i> Bootstrap</h6>
        <h6 class="text-start fs-1 btn-three"><i class="fab fa-js"></i> JavaScript</h6>
        <h6 class="text-start fs-1 btn-three"><i class="fab fa-vuejs"></i> Vue JS</h6>
        <h6 class="text-start fs-1 btn-three"><i class="fab fa-python"></i> Python</h6>
        <!-- <h6 class="text-start iconHover fs-1"><i class="fas fa-database"></i> PostgreSQL</h6> -->
        
    </section>
    </div>
  </div>
  </div>
</template>

<script>
import 'animate.css';
export default {
  
}
</script>

<style scoped>
  .introSide{
    text-align: center;
    margin-top: 25%;
  }
  .progress{
    margin-bottom: 40px;
    height: 5px;
  }
  .placeSelfCenter{
    place-self: center;
  }
  .btn-three {
  color: #FFF;
  transition: all 0.5s;
  position: relative;
  padding: 10px;
}
.btn-three::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
.btn-three:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.btn-three::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255,255,255,0.5);
  transform: scale(1.2,1.2);
}
.btn-three:hover::after {
  opacity: 1;
  transform: scale(1,1);
}
</style>