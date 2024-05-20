<template>
  <div class="bigBj" id="hyc">
    <!-- <img src="../assets/image/2025.png" class="centerImg" /> -->
    
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    <div class="contentBox">
      <div class="title" style="padding: 50px 0 0">
        <h2>欢迎词</h2>
        <h3>组织委员会</h3>
      </div>
      <div class="content">
        <div class="txt">
          <p>
            我们诚挚地邀请您参加将于2025年5月10-15日在中国北京举办的第9届国际月季大会。此次大会不仅将向您展示中国月季产业的快速发展，而且将为全世界从事月季科学研究和生产的科学家、学生及月季种植者等各界人士提供一个交流和分享最新科技成果和产业信息、寻求国际合作的良好机遇和平台。</p>
         
          <p>本届大会主要议题包括：</p>
          <div class="left30">
            专题1：遗传学和基因组学<br>
            专题2：育种、社会科学和人类学<br>
            专题3：生理学<br>
            专题4：次级代谢<br>
            专题5：生物与非生物胁迫<br>
            专题6：采后技术与加工<br>
          </div>
          <p>期待您的光临和参与！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      imgList:[
        {
          id: 'banner1',
          imgUrl: require("@/assets/image/banner1.jpg")
        },
        {
          id: 'banner2',
          imgUrl: require("@/assets/image/banner2.jpg")
        },
        {
          id: 'banner3',
          imgUrl: require("@/assets/image/banner3.jpg")
        },
        {
          id: 'banner4',
          imgUrl: require("@/assets/image/banner4.jpg")
        },
      ]
    }
  }
};
</script>

<style  scoped>
* {
  box-sizing: border-box;
}

.bigBj {
  width: 100%;
  height: 1322px;
  /* background: url(../assets/image/banner.jpg) no-repeat; */
  background: url(../assets/image/bj.png) no-repeat;
  background-size: 100% 100%;
}


.centerImg {
  width: 1309px;
  margin: 0 auto;
  display: block;
}
.contentBox {
  width: 1200px;
  margin: 0px auto;
  background: #fff;
  box-sizing: border-box;
  padding: 10px 35px;
  box-shadow: 0px 0px 25px #c7b5b5;
  border-radius: 20px;
}
.title {
  position: relative;
  text-align: center;
  padding: 100px 0 40px;
}
.title h2 {
  padding-bottom: 10px;
  font-size: 38px;
  color: #333;
  font-weight: bold;
  line-height: 1.5em;
}
.title h3 {
  font-size: 20px;
  color: #d0031f;
  font-weight: bold;
}

.txt {
  padding: 40px 0;
}
.txt h1 {
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.txt p {
  line-height: 30px;
  padding-top: 12px;
  font-size: 16px;
  color: #4a4a4a;
  text-indent: 2em;
}
.left30 {
  padding: 0 0 0 30px;
  line-height: 2em;
  margin: 20px 0;
}
</style>