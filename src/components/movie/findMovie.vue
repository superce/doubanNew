<template>
  <div class="find-movie">
    <ul>
      <li v-for="(n,i) in findMovie" :key="i" @click="toPage(n)">
        <img :src="n.images.small" alt="">
        <span class="title">{{ n.title }}</span>
        <div class="rank">
          <Rating v-if="n.rating" :rating="n.rating"></Rating>
        </div>
      </li>
    </ul>
    <Loading v-if="loading"/>
    <div class="loadmore" v-if="load">
      <img src="../../assets/images/loading_green.gif" alt="">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Rating from '../Rating'
import Loading from '../loading'
export default {
  components:{Loading,Rating},
  name:'findMovie',
  data(){
    return {
      findMovie:'',
      loading:true,
      load:false,
      REQ:true,
      start:11
    }
  },
  created(){
    this.findMovies()
  },
  mounted(){
    window.addEventListener('scroll',this.more)
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.more)
  },
  methods:{
    findMovies(){
      // let url = '/api/movie/top250'
      let url = 'https://api.douban.com/v2/movie/top250'
      axios.get(url,{
        params:{
          count:10
        }
      }).then(res => {
        console.log(res.data)
        this.loading = false
        this.findMovie = res.data.subjects
      })
    },
    more(){
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop //滚动高度
      let wHeight = window.innerHeight  //窗口高度
      let scrollHeight = document.body.scrollHeight  // 内容总高度
      if(scrollTop + wHeight >= scrollHeight - 100 && this.REQ){
        this.REQ = false
        this.load = true
          // let homelist = 'api/movie/top250'
          let url = 'https://api.douban.com/v2/movie/top250'
          axios.get(url,{
          params:{
            count:10,
            start:this.start
          }
        }).then(res => {
          this.REQ = true
          this.load = false
          let arr = res.data.subjects
          this.findMovie = this.findMovie.concat(arr)
          this.start += 10
          console.log(this.start)
        }).catch(e => console.log(e))
      }
    },
    toPage(h){
      this.$router.push({
        path:'/detail',
        query:{
          id:h.id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/scss.scss';
.find-movie{
  width: $width;
  margin: 0 auto;
  .loadmore{
      width: 2rem;height: 2rem;margin: 0 auto;
      img{width: 100%;}
    }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      width: calc(33.33% - .3rem);
      img{
        width: 100%;
        height: 74%;
      }
      span{
        font-size: .7rem;
        color:#333;
        text-align: center;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
    }
  }
}
</style>