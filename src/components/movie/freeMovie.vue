<template>
  <div class="hot-movie">
    <!-- <Header /> -->
    <div class="title">
      <h2>新片速递</h2>
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
  </div>
</template>
<script>
import axios from 'axios'
import Rating from '../Rating'
import Header from '../header'
export default {
  components:{Rating,Header},
  name:'freeMovie',
  data(){
    return {
      hotMovies:''
    }
  },
  created(){
    this.getHotMovies()
  },
  methods:{
    getHotMovies(){
      // let url = '/api/movie/coming_soon'
      let url = 'https://api.douban.com/v2/movie/coming_soon'
      axios.get(url,{
        params:{
        count:10
      }
      }).then(res =>{
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
.nomovie{
  font-size: .6rem;
  color:$color;
}
</style>