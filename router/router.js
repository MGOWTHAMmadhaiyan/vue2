import Vue from 'vue'
import VueRouter from  'vue-router'
import  background from '../src/components/BackgroundVideo.vue'
import morePage from '../src/components/more.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "background",
    component: background
  },
  {
    path: '/more',
    name: 'more',
    component: morePage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router