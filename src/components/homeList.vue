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
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'homeList',
  data(){
    return {
      lists:''
    }
  },
  created(){
    this.getlist()
  },
  methods:{
    getlist(){
      let homelist = 'api/event/list'
      axios.get(homelist,{
      params:{
        loc:108288,
        count:10,
        start:0
      }
    }).then(res => {
      this.lists = res.data.events
      console.log(res.data.events)
    }).catch(e => console.log(e))
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/scss.scss';
  .home-list{
    width: $width;margin: $rem auto 0;
    ul{
      li{
        display: $flex;
        justify-content: space-between;
        margin:.5rem 0;
        border-bottom: 1px solid #ccc;
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
    }
  }
</style>

