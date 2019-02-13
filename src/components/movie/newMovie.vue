<template>
  <div class="hot-movie">
    <div class="title">
      <h2>高分电影</h2>
      <router-link to=''>更多</router-link>
    </div>
    <ul>
      <li v-for="(hot,i) in hotMovies" :key="i" @click="toPage(hot)">
        <img :src="hot.images.small" alt="">
        <span class="title">{{ hot.title }}</span>
        <div class="rank">
          <Rating v-if="hot.rating" :rating="hot.rating"></Rating>
        </div>
      </li>
    </ul>
    <Loading v-if="showLoading"/>
  </div>
</template>
<script>
import axios from 'axios'
import Rating from '../Rating'
import Loading from '../loading'
export default {
  components: { Rating,Loading },
  name:'hotMovie',
  data(){
    return {
      hotMovies:'',
      showLoading:true
    }
  },
  created(){
    this.getHotMovies()
  },
  methods:{
    getHotMovies(){
      // let url = '/api/movie/top250'
      let url = 'https://api.douban.com/v2/movie/top250'
      axios.get(url,{
        params:{
        count:10
      }
      }).then(res =>{
        this.showLoading = false
        this.hotMovies = res.data.subjects
      }).catch(e => console.log(e))
    },
  toPage(hot){
      this.$router.push({
        path:"/detail",
        query:{
          id:hot.id
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/movie.scss';
</style>