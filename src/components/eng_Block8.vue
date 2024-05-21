<template>
  <div class="bj" id="eng_jtzs">
    <Title :name="title"></Title>
    <div class="centerBox">
      <img src="../assets/image/use/map_mtg.jpg" class="Map" />
      <RedTitle :titleCont="title4"></RedTitle>
      <div class="descBox">
        <p class="mb20">Zhongliang College, founded by COFCO Group, is located in Mentougou District, an ecological conservation area in Beijing. Zhongliang College has a building area of 50000 square meters and is equipped with facilities such as guest rooms, conferences, restaurants, and Meite Sports Center. Its advanced facilities and equipment, meticulous and thoughtful services, beautiful natural environment, and strong cultural atmosphere have become the leading venue for conference activities in the western region of Beijing.</p>
      </div>
      <div class="jtBox">
        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon1.png" />
            <span>Transportation</span>
          </div>
          <div class="pd35">
            <div class="redTitle">airport：</div>
            <div class="greyContent">
              <p>Beijing Capital Airport (65 kilometers away from the venue)</p>
              <span>
                Capital Airport Bus Beijing West Station Line → Route 890.<br />It will take approximately 3 hours and 50 minutes to arrive, costing 37 RMB.</span>
              <p>Beijing Daxing Airport (approximately 80 kilometers from the venue)</p>
              <span
                >Daxing Airport Line → Inner Ring of Metro Line 10 → Route 890.<br />It will take approximately 2 hours and 50 minutes to arrive, costing 46 RMB.</span>
            </div>
            <div class="greyContent">
              <div class="redTitle">transit：</div>
              <p>Longquanwu North Exit Station</p>
              <span
                >You can transfer to Xiaoyuan Station on Line S1 for subway travel, then transfer to Bus 890 and get off at Longquanwu North Exit Station. Walk 1.7 kilometers.</span
              >
            </div>
          </div>
        </div>
        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon2.png" />
            <span>Drive</span>
          </div>
          <div class="pd35">
            <div class="redTitle">Destination: Zhongliang College in Mentougou</div>
            <div class="greyContent">
              <p>Starting point: Beijing Capital Airport</p>
              <span>Taking a taxi costs about 260 RMB.<br />It will take approximately 1h10mins to arrive.</span>
              <p>Starting point: Beijing Daxing Airport</p>
              <span>Taking a taxi costs about 300 RMB.<br />It will take approximately 1h20mins to arrive.</span>
            </div>
          </div>
        </div>

        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon3.png" />
            <span>Accommodation</span>
          </div>
          <div class="pd35">
            <div class="redTitle">Zhongliang College in Mentougou District：</div>
            <div class="greyContent">
              <span>All attendees' accommodation and meetings are here.</span>
            </div>
          </div>
        </div>

        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon4.png" />
            <span>Visa information</span>
          </div>
          <div class="pd35">
            <div class="redTitle">Visa information</div>
            <!-- <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
              >
            </div> -->
            
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
      title: "Transportation and Accommodation",
      title4: "Introduction to Zhongliang College",
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