<template>
  <div class="hot-movie">
    <div class="title">
      <h2>影院热映</h2>
      <router-link to=''>更多</router-link>
    </div>
    <ul>
      <li v-for="hot in hotMovies">
        <router-link to=''>
          <img :src="hot.images.small" alt="">
          <span class="title">{{ hot.title }}</span>
          <div class="rank">
            <!-- <span class="full" v-for="h in fullStar(hot)"></span> -->
            <span class="full star" v-for="h in parseInt(hot.rating.stars/10)"></span>
            <span class="gray star" v-for="gray in (5 - parseInt(hot.rating.stars/10))"></span>
            <span class="star">{{ hot.rating.average }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
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
      let url = '/api/movie/in_theaters'
      axios.get(url,{
        params:{
        count:10
      }
      }).then(res =>{
        console.log(res.data.subjects)
        this.hotMovies = res.data.subjects
      }).catch(e => console.log(e))
    },
  },
  computed:{
    fullStar(num){
      let nums = parseInt(num.rating.stars)
      nums = Math.floor(nums/10)
      return nums
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/movie.scss';
</style>