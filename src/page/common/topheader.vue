<template>
 <div>
 <mt-swipe :auto="2000">
  <mt-swipe-item v-for="item in items" :key="item.id">
  <a :href="item.href" rel="external nofollow" >
   <img :src="item.url" class="img"/>
  </a>
  </mt-swipe-item>
 </mt-swipe>
 </div>
</template>
<script>
 import {Swipe, SwipeItem} from 'mint-ui'
/* import '../../assets/js/rem'*/
 import 'mint-ui/lib/style.css'
 
 export default {
 components: {
   Swipe,
   SwipeItem
 },
 data () {
  return {
  items: [{
   title: '你的名字',
   href: 'http://google.com',   url: 'https://awei.fun/shop/api/resouces/201812134738944b6756e09609ef3b09c430920576f2.jpg'
  }, {
   title: '我的名字',
   href: 'http://baidu.com',   url: 'https://awei.fun/shop/api/resouces/2018121347388c8e53718ed3ab42f806368d1113c4d6.jpg'
  },
   {
   title: '我的名字',
   href: 'http://baidu.com',   url: 'https://awei.fun/shop/api/resouces/201812134738d5dac1429592dc0834441a351654617d.jpg'
  }, {
   title: '我的名字',
   href: 'http://baidu.com',   url: 'https://awei.fun/shop/api/resouces/2018121347386f3c53847998eb159e95654471040a54.jpg'
  }, {
   title: '我的名字',
   href: 'http://baidu.com',   url: 'https://awei.fun/shop/api/resouces/20181213473827ffe1f6106d6ac59c5665879141fa58.jpg'
  }]
  }
 }
 }
</script>
<style scoped>
 img {
 width: 100%;
 }
 .mint-swipe {
 height: 190px;
 }
 .desc {
 font-weight: 600;
 opacity: .9;
 padding: 5px;
 height: 20px;
 line-height: 20px;
 width: 100%;
 color: #fff;
 background-color: gray;
 position: absolute;
 bottom: 0;
 }
</style>
