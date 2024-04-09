<template>
  <div class="bigBj">
    <Head :isNav="isNav"></Head>
    <div class="banner">
      <img src="../assets/image/2025.png" >
    </div>
    <div class="content">
      <div class="live_head">
        <div class="live_title">
          <img src="../assets/image/icon/zhibo.png" alt="">
          <h2>2025第九届国际月季大会直播 >></h2>  
        </div>
        <div class="live_info">
          <img src="../assets/image/icon/shijian.png" alt="">
          <p>会议时间：2024-02-28  08:30</p>
        </div>
      </div>
      <div class="live_wrapper">
        <div class="player">
          <img class="poster" src="@/assets/image/poster.png" alt="封面">
          <!-- <video autoplay name="media" class="video">
            <source src="@/assets/mda-nds3v1fcbuwfk232.mp4" type="video/mp4">
          </video> -->
        </div>
      </div>
      <div class="live_head" style="margin-top:20px">
        <div class="live_title">
          <h2>历史直播记录 >></h2>  
        </div>
      </div>
      <div class="list_list">
        
        <div class="list_item" @click="changeLiverPlayer(item)" v-for="item in listData" :key="item.id">
          <div class="list_img">
            <img :src="item.poster" alt="">
          </div>
          <p>{{item.title}}</p>
        </div>
      </div>
      <div class="pager">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1">
        </el-pagination>
      </div>
    </div>
    <Foot></Foot>
  </div>


</template>

<script>
import Foot from "@/components/Foot";
import Head from "@/components/Head";

export default {
  components: {
    Foot,
    Head,
  },
  data(){
    return {
      isNav:8,
      listData:[
        {
          id:1,
          title:'Recent and future advances in sweet cherry research and production technologies',
          author:'GregoryAlang',
          poster:'http://2021.cherries.org.cn:9999/images/video_sub/Gregory-A.-Lang.jpg',
          playUrl:'https://ks3-cn-beijing.ksyun.com/bjcc-video-out/course-out-video/GregoryAlang_114050.mp4'
        },
        {
          id:2,
          title:'Development of cherry growing in Hungary',
          author:'Karoly-Hrotko',
          poster:'http://2021.cherries.org.cn:9999/images/video_sub/Gregory-A.-Lang.jpg',
          playUrl:'https://ks3-cn-beijing.ksyun.com/bjcc-video-out/course-out-video/Karoly-Hrotko_114056.mp4'
        },
        {
          id:3,
          title:'Recent and future advances in sweet cherry research and production technologies',
          author:'GregoryAlang',
          poster:'http://2021.cherries.org.cn:9999/images/video_sub/Gregory-A.-Lang.jpg',
          playUrl:'https://ks3-cn-beijing.ksyun.com/bjcc-video-out/course-out-video/GregoryAlang_114050.mp4'
        },
        {
          id:4,
          title:'Recent and future advances in sweet cherry research and production technologies',
          author:'GregoryAlang',
          poster:'http://2021.cherries.org.cn:9999/images/video_sub/Gregory-A.-Lang.jpg',
          playUrl:'https://ks3-cn-beijing.ksyun.com/bjcc-video-out/course-out-video/GregoryAlang_114050.mp4'
        },
      ]
    }
  },
  methods:{
    changeLiverPlayer(val){
      //console.log(val);
      this.$router.push({ 
        path: '/Live_player',
        query: {id :val.id,title:val.title,author:val.author,playUrl:val.playUrl}
      })
    }
  }
}
</script>

<style scoped>
*{box-sizing: border-box;}
.bigBj{width: 100%;background: url(../assets/image/submit_bj.png) repeat-y;overflow: auto;background-size:100% 100%;}
/* .bigBj{background: linear-gradient(pink,white);} */
.banner{width:100%;height:652px;background:url(../assets/image/bj2.png) no-repeat;background-size:cover;box-sizing: border-box;padding-top:67.5px;}
.banner img{display:block;margin:0 auto;}
.content{width: 1200px;margin: 30px auto;background: #fff;border-radius: 10px;box-shadow: 0 0 3px 1px #999;overflow: hidden;}
.live_head{display: flex;align-items: center;padding: 20px;overflow: hidden;justify-content: space-between;}
.live_title img,.live_info img{width: 36px;margin-right: 10px;vertical-align: middle;}
.live_title h2{display: inline-block;font-size: 22px;color:#d0031f;vertical-align: middle;}
.live_info img{width: 22px;}
.live_info p{display: inline-block;}
.live_wrapper{width: 100%;padding: 30px;background: rgb(56, 67, 90);}
.video,.poster,.list_list,.list_item img{width: 100%;}

.list_list{display: flex;justify-content: space-evenly;flex-wrap: wrap;}

.list_item{width: 22%;margin:10px 0 30px;cursor: pointer;}
.list_img{width: 100%;height: 150px;overflow: hidden;border: 1px solid rgba(0,0,0,0.1);}
.list_img img{width: 100%;height: 100%;transition: all 0.2s ease-in;}
.list_img:hover img{transform: scale(1.1);}
.list_item p{width: 100%;padding-left: 2px;padding-top: 10px;font-size: 16px;color:#333;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;transition: all 0.2s ease-in;}
.list_item:hover p{color: red;}
.pager{text-align: center;margin: 20px 0 50px;}


/* 移动端适配 */
@media (max-width: 768px){
  .banner{height: auto !important;}
  .banner img{width: 90%;margin: 0 auto;}
  .content{width: 90%;}
  .live_head{flex-wrap: wrap;}
  .live_title img,.live_info img{width: 20px;}
  .live_title h2{font-size: 16px;}
  .live_info{margin: 10px 0;}
  .list_item{width: 45%;}
  .list_item p{font-size: 14px;}

}




</style>