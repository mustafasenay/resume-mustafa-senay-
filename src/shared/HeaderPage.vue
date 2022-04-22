<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light mt-3">
        <div class="container-fluid">
          <a class="navbar-brand ms-5 fs-1 border p-5 border-color-aqua" href="#">MS</a>
            <ul class="navbar-nav mb-2 mb-lg-0 margin-left-50">
              <li class="nav-item">
                <router-link
                to="/"
                tag="a"
                class="nav-link fs-3 me-5"
                >
                <i class="fas fa-angle-left"></i> Welcome <i class="fas fa-angle-right"></i>
                </router-link>
              </li>
              <li class="nav-item fs-3 me-5">
                <router-link
                to="/about"
                tag="a"
                class="nav-link"
                >
                <i class="fas fa-angle-left"></i> Portfolio <i class="fas fa-angle-right"></i>
                </router-link>
              </li>
              <li class="nav-item fs-3 me-5">
                <router-link
                to="/Experience"
                tag="a"
                class="nav-link"
                >
                <i class="fas fa-angle-left"></i> Skills <i class="fas fa-angle-right"></i>
                </router-link>
              </li>
              <li class="nav-item fs-3 me-5">
                <router-link
                to="/resume"
                tag="a"
                class="nav-link"
                >
                <i class="fas fa-angle-left"></i> Resume <i class="fas fa-angle-right"></i>
                </router-link>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
  *{
    color: white!important;
  }
  .m-inline-auto{
    margin-inline: auto;

  }
  .nav-link:hover{
    color: aqua!important;
    transition: color 1s ease-in;
  }
  .border-color-aqua:hover{
    color: aqua!important;
    border-color: aqua!important;
    transition: color 1s ease-in;
  }
  .margin-left-50{
    margin-right: 24%;
  }
</style>