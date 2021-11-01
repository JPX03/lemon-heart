import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/components/ArticleCom/Article.vue'
import Book from '@/components/Book.vue'
import Login from '@/components/Login.vue'
import Qa from '@/components/QaCom/Qa.vue'
import Register from '@/components/Register.vue'
import Test from '@/components/TestCom/Test.vue'
import Home from '@/components/Home.vue'
import QaDetails from '@/components/QaCom/QaDetails.vue'
import Ask from '@/components/QaCom/Ask.vue'

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
      path:'/Qa/Ask',
      component:Ask,
    },
    {
      path: '/Qa/:id',
      component: QaDetails,
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