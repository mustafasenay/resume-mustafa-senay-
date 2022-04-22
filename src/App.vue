<template>
  <div id="app">
    <app-header-page></app-header-page>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-view></router-view>
    <app-footer-page></app-footer-page>
  </div>
</template>

<script>
import HeaderPage from "./shared/HeaderPage.vue"
import FooterPage from "./shared/FooterPage.vue"
export default {
  components : {
    appHeaderPage : HeaderPage,
    appFooterPage : FooterPage,
  }
}
</script>
<style>
  *{
    background-color: #0A192F;
    color: white;
  }
  body {
    font-family: "IBM Plex Mono",monospace;
    font-weight: 400;
    color: #1a1a24;
    font-size: 1rem;
  }
</style>
