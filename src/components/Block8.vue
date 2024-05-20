<template>
  <div class="bj" id="jtzs">
    <Title :name="title"></Title>
    <div class="centerBox">
      <img src="../assets/image/use/map_mtg.jpg" class="Map" />
      <RedTitle :titleCont="title4"></RedTitle>
      <div class="descBox">
        <p class="mb20">由中粮集团创建的忠良书院，坐落于北京市生态涵养区——门头沟区。忠良书院建筑面积5万平方米，配套客房、会议、餐厅、美特运动中心等设施。其先进的设施设备、细致周到的服务、优美的自然环境和浓厚的文化氛围，成为京西地区首屈一指的会议活动场所。</p>
      </div>
      <div class="jtBox">
        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon1.png" />
            <span>机场/公交</span>
          </div>
          <div class="pd35">
            <div class="redTitle">机场：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >经京密路——北五环路——西五环路——阜石路——到达会场<br/>
                <p>北京大兴机场（距会场约77公里）</p>
经大兴机场高速——南五环路——西五环路——阜石路——到达会场</span
              >
            </div>
            <div class="redTitle">公交：</div>
            <div class="greyContent">
              <p>龙泉务北口站</p>
              <span
                >乘坐地铁出行可换乘至S1线的小园站出站，再换乘890路公交至龙泉务北口站下车，步行1.7公里即可。</span
              >
            </div>
          </div>
        </div>
        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon2.png" />
            <span>自驾/出租车</span>
          </div>
          <div class="pd35">
            <div class="redTitle">目的地：</div>
            <div class="greyContent">
              <p>门头沟忠良书院</p>
              <span
                >自驾与出租车出行人员可前往西五环路方向——阜石路——到达会场</span
              >
            </div>
          </div>
        </div>

        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon3.png" />
            <span>酒店住宿</span>
          </div>
          <div class="pd35">
            <div class="redTitle">门头沟区忠良书院：</div>
            <div class="greyContent">
              <span>2025第九届国际月季大会由组委会安排在门头沟区忠良书院举办，同时，参会人员的住宿也安排于此。</span>
            </div>
          </div>
        </div>

        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon4.png" />
            <span>关于签证</span>
          </div>
          <div class="pd35">
            <div class="redTitle">签证信息：</div>
            <div class="greyContent">
              <!-- <p>北京首都机场（距离会展102公里）</p> -->
              <span
                >暂无</span
              >
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Title from "@/components/Title.vue";
import RedTitle from "@/components/RedTitle.vue";
export default {
  data() {
    return {
      title: "交通和住宿",
      title4: "忠良书院简介",
    };
  },
  components: {
    Title,RedTitle
  },
};
</script>
  
<style scoped>
.bj {
  background: #f6f6f6;
  padding: 50px 0 0px 0;
}
.Map{width:100%;border:1px solid #ddd;}
.centerBox {
  width: 1200px;
  margin: 0 auto;
}
.jtBox {
  margin: 75px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.wid50 {
  width: 49%;
}
.blueTitle {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 30px;
}
.blueTitle img {
  display: inline-block;
  width: 46px;
  height: 46px;
  margin-right: 10px;
}
.blueTitle span {
  color: #13227a;
  font-size: 28px;
  font-weight: bold;
}
.redTitle {
  color: #d0031f;
  font-size: 16px;
  font-weight: bold;
  line-height: 2em;
}
.greyContent p {
  font-size: 16px;
  color: #000;
  line-height: 2em;
  font-weight: bold;
}
.greyContent span {
  font-size: 16px;
  color: #4a4a4a;
  line-height: 2em;
  line-height: 1.8em;
  margin-bottom: 45px;
  display: block;
}
.pd35 {
  padding: 35px;
  box-sizing: border-box;
}

.descBox {
  font-size: 16px;
  line-height: 2em;
}
.descBox h3 {
  font-weight: bold;
  color: #000;
}
.descBox p {
  color: #4a4a4a;
  text-indent: 2em;
}
.descBox p a {
  text-indent: 0em;
}
</style>