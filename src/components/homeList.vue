<template>
  <div class="home-list">
    <ul>
      <router-link tag='li' to='' v-for="(list,i) in lists" :key="i">
        <div class="left">
          <h5>{{ list.title }}</h5>
          <p>{{ list.content }}</p>
          <span>{{ list.tag }}</span>
        </div>
        <div class="right">
          <img :src="list.img" alt="">
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name:'homeList',
  data(){
    return {
      lists:[
        {
          title:'春节档科幻电影《流浪地球》北京首映礼免费观影+主创见面会来了！',
          content:'根据刘慈欣同名科幻小说改编的国产科幻冒险电影《流浪地球》即将',
          tag:'电影',
          img:'https://img1.doubanio.com/pview/event_poster/hlarge/public/be56e679c371e7a.jpg'
        },
        {
          title:'春节档科幻电影《流浪地球》北京首映礼免费观影+主创见面会来了！',
          content:'根据刘慈欣同名科幻小说改编的国产科幻冒险电影《流浪地球》即将',
          tag:'电影',
          img:'https://img1.doubanio.com/pview/event_poster/hlarge/public/be56e679c371e7a.jpg'
        },
        {
          title:'春节档科幻电影《流浪地球》北京首映礼免费观影+主创见面会来了！',
          content:'根据刘慈欣同名科幻小说改编的国产科幻冒险电影《流浪地球》即将',
          tag:'电影',
          img:'https://img1.doubanio.com/pview/event_poster/hlarge/public/be56e679c371e7a.jpg'
        },
      ]
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

