import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/components/Article.vue'
import Book from '@/components/Book.vue'
import Login from '@/components/Login.vue'
import Qa from '@/components/Qa.vue'
import Register from '@/components/Register.vue'
import Test from '@/components/Test.vue'
import Home from '@/components/Home.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path:'/Home',
      component:Home,
    },
    {
      path:'/Article',
      component:Article,
    },
    {
      path:'/Book',
      component:Book,
    },
    {
      path:'/Qa',
      component:Qa,
    },
    {
      path:'/Test',
      component:Test,
    },
    {
      path:'/Login',
      component:Login,
    },
    {
      path:'/Register',
      component:Register,
    }
  ]
})

export default router