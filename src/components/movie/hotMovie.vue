<template>
  <div class="hot-movie">
    <div class="title">
      <h2>影院热映</h2>
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
export default {
  components: { Rating },
  name:'hotMovie',
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
      // let url = '/api/movie/in_theaters'
      let url = 'https://api.douban.com/v2/movie/in_theaters'
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
</style>