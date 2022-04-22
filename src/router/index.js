import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../components/WelcomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import ExperiencePage from '../components/ExperiencePage.vue'
import ResumePage from '../components/ResumePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path : "/", component : WelcomePage,
  },
  {
    path : "/about", component : AboutPage,
  },
  {
    path : "/experience", component : ExperiencePage,
  },
  {
    path : "/resume", component : ResumePage,
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
