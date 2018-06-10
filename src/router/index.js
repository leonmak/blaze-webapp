import Vue from 'vue'
import Router from 'vue-router'
import BlazeMap from '@/components/BlazeMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlazeMap',
      component: BlazeMap
    }
  ]
})
