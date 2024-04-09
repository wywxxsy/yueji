<template>
  <div class="bigBj">
    <Head :isNav="isNav"></Head>
    
    <div class="content">
      <div class="live_head">
        <h1>{{id}}-{{title}}</h1>
        <h3>{{author}}</h3>
      </div>
      <div class="live_wrapper">
        <div class="player">
          <video controls name="media" class="video">
            <source :src="playUrl" type="video/mp4">
          </video>
        </div>
        <el-row>
          <el-button type="danger" class="back_btn" @click="backBtn">返回</el-button>
        </el-row>
      </div>

    </div>
    <Foot/>
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
    return{
      isNav:8,
      id: '',
      title: '',
      author: '',
      playUrl: ''
    }
  },
  methods: {
    backBtn(){
      this.$router.push('Live')
    }
  },
  //详情页获取参数
  mounted() {
      this.id = this.$route.query.id,
      this.title = this.$route.query.title,
      this.author = this.$route.query.author,
      this.playUrl = this.$route.query.playUrl
      //console.log(this.id,this.title,this.author,this.playUrl)
  }
}
</script>

<style scoped>
*{box-sizing: border-box;}
.bigBj{width: 100%;background: url(../assets/image/submit_bj.png) repeat-y;overflow: auto;background-size:100% 100%;}
/* .bigBj{background: linear-gradient(pink,white);} */

.content{width: 1200px;margin: 30px auto;background: rgb(241, 242, 244);border-radius: 10px;box-shadow: 0 0 3px 1px #999;overflow: hidden;}
.live_head{align-items: center;padding: 20px;overflow: hidden;}
.live_head h1{width: 100%;margin: 0 auto;text-align: center;font-size: 26px;line-height: 60px;border-bottom: 1px solid red;color: #333;}
.live_head h3{padding-top: 10px;display: block;line-height: 60px;text-align: center;font-size: 22px;color: #333;}
.live_wrapper{width: 100%;padding: 30px;}
.video,.poster,.list_list,.list_item img{width: 100%;}
.player{border: 1px solid rgba(0,0,0,0.1);}
.el-row{text-align: center;margin: 20px 0;}
.back_btn{width: 100px;background: rgb(231, 56, 56);color: white;font-size: 16px;}

/* 移动端适配 */
@media (max-width: 768px){
  .content{width: 90%;}
  .live_head h1{font-size: 16px;line-height: 30px;padding-bottom: 10px;}
  .live_head h3{font-size: 16px;line-height: 30px;}
  .live_head{flex-wrap: wrap;}
  .live_title img,.live_info img{width: 20px;}
  .live_title h2{font-size: 16px;}
  .live_info{margin: 10px 0;}
  .list_item{width: 45%;}
  .list_item p{font-size: 14px;}

}


</style>