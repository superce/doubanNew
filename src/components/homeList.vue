<template>
  <div class="home-list">
    <ul>
      <router-link tag='li' to='' v-for="(list,i) in lists" :key="i">
        <div class="left">
          <h5>{{ list.title }}</h5>
          <p>{{ list.address }}</p>
          <span>{{ list.subcategory_name }}</span>
        </div>
        <div class="right">
          <img :src="list.image" alt="">
        </div>
      </router-link>
    </ul>
    <div class="load" v-if="loading">
      <img src="../assets/images/loading_green.gif" alt="">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'homeList',
  data(){
    return {
      lists:'',
      loading:true,
      count:10,
      start:0,
      req:true
    }
  },
  created(){
    this.getlist()
  },
  mounted(){
    window.addEventListener('scroll',this.more)
  },
  beforeDestroy(){
    window.removeEventListener("scroll",this.more)
  },
  methods:{
    getlist(){
      let homelist = 'api/event/list'
      axios.get(homelist,{
      params:{
        loc:108288,
        count:10,
        start:11
      }
      }).then(res => {
        this.loading = false
        this.lists = res.data.events
        // console.log(res.data.events)
      }).catch(e => console.log(e))
    },
    more(){
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop //滚动高度
      let wHeight = window.innerHeight  //窗口高度
      let scrollHeight = document.body.scrollHeight  // 内容总高度
      if(scrollTop + wHeight >= scrollHeight - 100 && this.req){
        console.log(scrollTop)
        this.req = false
        this.loading = true
          let homelist = 'api/event/list'
          axios.get(homelist,{
          params:{
            loc:108288,
            count:10,
            start:this.start
          }
        }).then(res => {
          this.req = true
          this.loading = false
          let arr = res.data.events
          this.lists = this.lists.concat(arr)
          this.start += this.count 
          console.log(this.start)
        }).catch(e => console.log(e))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/scss.scss';
  .home-list{
    width: $width;margin: $rem auto 0;
    .load{
      width: 2rem;height: 2rem;margin: 0 auto;
      img{width: 100%;}
    }
    ul{
      li{
        display: $flex;
        justify-content: space-between;
        margin:.5rem 0;
        border-bottom: 1px solid #f4f4f4;
        padding-bottom: .5rem;
        .left{
          width: 12rem;
          h5{
            color:$color;
            font-size: .8rem;font-weight: normal;
          }
          p{
            font-size: .6rem;
            color:#aaa;
            line-height: 1rem;
          }
          span{
            font-size: .6rem;
            color:#ccc;
          }
        }
        .right{
          width: 4.2rem;
          img{
            width: 100%;
          }
        }
      }
      li:last-child{border: none;}
    }
  }
</style>

