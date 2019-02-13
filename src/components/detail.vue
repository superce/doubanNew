<template>
  <div class="detail">
    <h2>{{ title }}</h2>
    <div class="content">
      <div class="left">
        <div class="rating">
          <Rating v-if="rating" :rating="rating"></Rating>
          <span class="pl">{{ ratings_count }} 人评价</span>
        </div>
        <p>
          {{year}}/<span v-for="(g,i) in genres" :key="i">{{ g }}</span>/{{ countries }}
        </p>
      </div>
      <div class="right">
        <img :src="image" alt="">
      </div>
    </div>
    <div class="yingren">
      <h5>影人</h5>
      <ul>
        <li v-for="(cast,i) in casts" :key="i">
          <img :src="cast.avatars.small" alt="">
          <span>{{ cast.name }}</span>
        </li>
      </ul>
    </div>
    <div class="intr">
      <h5>简介</h5>
      <p>{{ summary }}</p>
    </div>
    <Loading v-if="showLoading"/>
  </div>
</template>
<script>
import Loading from '../components/loading'
import axios from 'axios'
import Rating from '../components/Rating'
export default {
  components:{Rating,Loading},
  name:'movieDetail',
  data(){
    return {
      showLoading:true,
      msg:this.$route.query.id,
      title:'',
      rating:'',
      ratings_count:'',
      year:'',
      genres:'',
      countries:'',
      image:'',
      casts:'',
      summary:''
    }
  },
  created(){
    this.getDetail()
  },
  methods:{
    getDetail(){
      let getApi = `api/movie/subject/${this.msg}`
      axios.get(getApi).then(res => {
        this.showLoading = false
        this.title = res.data.title
        this.rating = res.data.rating
        this.ratings_count = res.data.ratings_count
        this.year = res.data.year
        this.genres = res.data.genres
        this.countries = res.data.countries
        this.image = res.data.images.small
        this.casts = res.data.casts
        this.summary = res.data.summary
        console.log(res.data)
      }).catch(e => console.log(e))
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/scss.scss';
$intrFont:.7rem;
  .detail{
    width: $width;margin:0 auto;
    h2{
      font-size: 1.2rem;
    }
    .content{
      display: flex;
      justify-content: space-between;
      .left{
        .rating{
          display: flex;align-items: center;margin: .2rem 0;
          .pl{
            font-size: .6rem;
            color:#aaa;
          }
        }
        p{
          font-size: .6rem;
          color:#494949;margin-top: .5rem;
        }
      }
      .right{
        width: 5rem;
        img{
          width: 100%;
        }
      }
    }
    .yingren{
      h5{
        font-size: $intrFont;
        color:#494949;
        margin: .5rem 0;
      }
      ul{
        display: flex;
        overflow-x: scroll;
        li{
          flex-shrink: 0;
          width: 3.75rem;
          margin-right: .3rem;
          span{
            font-size: .6rem;
            color:#494949;
          }
          img{
            width:100%;
            height: 5.35rem;
          }
        }
      }
    }
    .intr{
      h5{
        margin: .5rem 0;
        font-size: $intrFont;
        color:#494949;
      }
      p{
        font-size: $intrFont;
        color:#494949;
        line-height: 1.2rem;
      }
    }
  }
</style>

