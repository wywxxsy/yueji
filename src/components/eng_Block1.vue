<template>
  <div class="bigBj" id="eng_hyc">
    <!-- <img src="../assets/image/2025.png" class="centerImg" /> -->
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    <div class="contentBox">
      <div class="title" style="padding: 50px 0 0">
        <!-- <h2>欢迎词</h2> -->
        <h3>Invitation</h3>
      </div>
      <div class="content">
        <div class="txt">
          <p>
            The International Society for Horticultural Science (ISHS), along with the Organizing Committee of the IX International Symposium on Rose Research and Cultivation, extends a heartfelt invitation to you to be a part of the most prestigious international symposium dedicated to roses. The symposium, slated to commence on May 10th and conclude on May 15th, 2025, will take place in the vibrant city of Beijing, China.
This momentous event aims to highlight the remarkable progress of China's rose industry while also serving as aforum for scientists, students, rose farmers, and other professionals engaged in rose scientific research and production. It offers an excellent opportunity for them to converge, engage in meaningful discussions, and share the latest scientific and technological advancements, industrial trends, and seek avenues for international collaboration.
          </p>
          <p>
            We eagerly anticipate your participation and the valuable contributions you will bring to this esteemed symposium.
          </p>
          <!-- <h3>Symposium</h3> -->
          <p>The main topics:</p>
          <div class="left30">
            S1: International Production, Markets, and Economics<br />
            S2: Breeding, Genetics, and Genomics<br />
            S3: Resource collection, utilization and variety evaluation<br />
            S4: Orchard Production Systems, Management, and Technologies<br />
            S5: Soil, Nutrient, and Water Research, Management and Technologies<br />
            S6: Physiology and postharvest biology<br />
            S7: Pest and Disease Management<br />
            S8: Postharvest Technologies and Processing<br />
          </div>
          <p>Keynote speakers：</p>
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
  height: 1431px;
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
  margin: 110px auto;
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