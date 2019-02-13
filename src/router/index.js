import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/movie/movie'
import findMovie from '@/components/movie/findMovie'
import movieDetail from '@/components/detail'
import Search from '@/components/search'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/movie",
      component:Movie
    },
    {
      path:'/newmovie',
      component:findMovie
    },
    {
      path:'/detail',
      name:'movieDetail',
      component:movieDetail
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
