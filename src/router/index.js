import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/components/ArticleCom/Article.vue'
import ArticleDetai from '@/components/ArticleCom/ArticleDetais.vue'
import Book from '@/components/BookCom/Book.vue'
import Login from '@/components/Login.vue'
import Qa from '@/components/QaCom/Qa.vue'
import Register from '@/components/Register.vue'
import Test from '@/components/TestCom/Test.vue'
import Home from '@/components/Home.vue'
import QAndA from '@/components/QaCom/QAndA.vue'
import PublishQ from '@/components/QaCom/PublishQ.vue'
import UserPage from '@/components/UserCom/UserPage.vue'
import Test1 from '@/components/TestCom/Test1.vue'
import Test2 from '@/components/TestCom/Test2.vue'
import Test3 from '@/components/TestCom/Test3.vue'
import Test4 from '@/components/TestCom/Test4.vue'
import Test5 from '@/components/TestCom/Test5.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [{
      path: '/',
      component: Home,
    },
    {
      path: '/Home',
      component: Home,
    },
    {
      path: '/Article',
      component: Article,
    },
    {
      path: '/Article/:id',
      component: ArticleDetai,
    },
    {
      path: '/Book',
      component: Book,
    },
    {
      path: '/Qa',
      component: Qa,
    },
    {
      path: '/PublishQ',
      component: PublishQ,
    },
    {
      path: '/Qa/:id',
      component: QAndA,
    },
    {
      path: '/Test',
      component: Test,
    },
    {
      path: '/Test1',
      component: Test1,
    },
    {
      path: '/Test2',
      component: Test2,
    },
    {
      path: '/Test3',
      component: Test3,
    },
    {
      path: '/Test4',
      component: Test4,
    },
    {
      path: '/Test5',
      component: Test5,
    },
    {
      path: '/Login',
      component: Login,
    },
    {
      path: '/Register',
      component: Register,
    },
    {
      path: '/UserPage',
      component: UserPage,
    }
  ]
})

export default router