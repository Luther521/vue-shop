<template>
  <div class="hello">
  	 <Topheader></Topheader>
  	 <!--京东超市-->
  	 <div class="appTabscenter">
  	 	   <mt-swipe :auto="2000">
					  <mt-swipe-item>
					      <ul class="tableTabs">
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (1).png" alt="">
		                </i>
		                <p>京东超市</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (2).png" alt="">
		                </i>
		                <p>京东服饰</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (3).png" alt="">
		                </i>
		                <p>京东到家</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (4).png" alt="">
		                </i>
		                <p>京东生鲜</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (5).png" alt="">
		                </i>
		                <p>京东超市</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (6).png" alt="">
		                </i>
		                <p>充值缴费</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (7).png" alt="">
		                </i>
		                <p>全球购</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (8).png" alt="">
		                </i>
		                <p>领券</p>
		              </li>
		              <li class="table-tabs-item">
		                <i>
		                  <img src="../assets/images/applist (9).png" alt="">
		                </i>
		                <p>领京豆</p>
		              </li>
		              <li class="table-tabs-item">
                   <i>
	                  <img src="../assets/images/applist (10).png" alt="">
	                </i>
	                <p>京东超市</p>
	              </li>
		            </ul>
					  </mt-swipe-item>
				 <mt-swipe-item>
            <ul class="tableTabs">
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (1).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (2).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (3).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (4).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (5).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (6).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (7).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (8).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (9).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
              <li class="table-tabs-item">
                <i>
                  <img src="../assets/images/applist (10).png" alt="">
                </i>
                <p>京东超市</p>
              </li>
            </ul>
          </mt-swipe-item>
        </mt-swipe>
  	 </div>
  	   <!-- tabBanner -->
      <!-- 底部资讯 -->
      <div class="floor">
        <div class="container-bg">
          <img src="../assets/images/floor1.jpg" alt="">
        </div>
        <div class="activity_list">
          <div class="left_item">
            <img src="../assets/images/floor (1).jpg" alt="">
          </div>
          <div class="right_item">
            <div class="r_i_cell">
              <img src="../assets/images/floor (2).jpg" alt="">
            </div>
            <div class="r_i_cell">
              <img src="../assets/images/floor (3).jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- 京东快报 -->
      <div class="jd-express-news">
        <div class="jd-kuaibao">
        	  <router-link to="/new">
        	  	 <img class="jd-news-icon" src="../assets/images/jd-news-tit.png" />
        	  </router-link>
        	  <!--<marquee>
        	  	 <marquee-item v-for="" :key="" @click.native=""></marquee-item>
        	  </marquee>-->
         </div>
       </div>
  </div>
</template>
<script>
	import Topheader from '../page/common/topheader';
	 import {Swipe, SwipeItem} from 'mint-ui'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
  	Topheader,
  	Swipe,
  	SwipeItem
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/mixin.scss';
  .appTabscenter {
    border-radius: .2rem .2rem 0 0;
    overflow: hidden;
    position: relative;
    top: -.2rem;
    left: 0;
    background: #f8f8f8;
    z-index: 200;
    width: 100%;
    padding-bottom: .25rem;
    .mint-swipe {
      padding: .266667rem 0;
      overflow: initial !important;
      height: 8.39rem;
    }
    .tableTabs {
      @include flexbox(center, center, row, wrap);
      width: 100%;
      height: 100%;
      .table-tabs-item {
        width: 20%;
        margin: .133333rem 0;
       @include flexbox(center, center, column, wrap);
        flex: initial;
        cursor: pointer;
        p {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: box;
          color: #666666;
          box-orient: vertical;
        }
        img {
          width: 29px;
          height: 29px;
        }
      }
    }
  }
   .floor {
    position: relative;
    background: #fff;
    top: -.1rem;
    overflow: hidden;
    clear: both;
    .container-bg {
      width: 100%;
      overflow: hidden;
      clear: both;
      img {
        width: 100%;
        height: auto;
      }
    }
    .activity_list {
      position: absolute;
      bottom: .2rem;
      padding: 0 8px;
      @include flexbox(space-between, center, row, wrap);
      >div {
        width: 50%;
      }
      img {
        width: 100%;
        height: auto;
      }
      .right_item {
        @include flexbox(space-between, center, column, wrap);
        flex: initial;
        .r_i_cell {
          height: 50%;
          width: 100%;
        }
      }
    }
  }
.mint-swipe-indicators{
  	bottom: -5px !important ;
  }
  .jd-express-news {
    position: relative;
    overflow: hidden;
    top: -.1rem;
    background: #fff;
    clear: both;
    .jd-kuaibao {
      .jd-news-icon {
        width: 1.95rem;
        height: .45rem;
      }
      >div {
        padding-left: .1rem;
        li {
          @include textoverflow(1);
        }
      }
      >span {
        font-size: 12PX;
        width: 1.5rem;
        text-align: right;
        color: #181818;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          background: #ececec;
          height: 100%;
          width: 1px;
        }
      }
      @include flexbox(space-between, center, row, nowrap);
      padding: 0.2rem .5rem;
    }
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .mint-swipe {
  height: 190px;
 }
</style>
