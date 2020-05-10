import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import Adjectivesaurus from '@/views/Adjectivesaurus'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },
  
  {
    path: '/adjectivesaurus',
    name: 'Adjectivesaurus',
    component: Adjectivesaurus
  }
]

const router = new VueRouter({
  routes
})

export default router
