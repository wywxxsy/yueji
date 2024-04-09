<template>
  <div class="bj" id="jtzs">
    <Title :name="title"></Title>
    <div class="centerBox">
      <img src="../assets/image/use/testMap.png" class="Map" />
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
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
              >
            </div>
            <div class="redTitle">公交：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
              >
            </div>
          </div>
        </div>
        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon3.png" />
            <span>自驾/出租车</span>
          </div>
          <div class="pd35">
            <div class="redTitle">机场：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
              >
            </div>
            <div class="redTitle">公交：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
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
            <div class="redTitle">机场：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
              >
            </div>
            <div class="redTitle">公交：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
              >
            </div>
          </div>
        </div>

        <div class="wid50">
          <div class="blueTitle">
            <img src="../assets/image/icon4.png" />
            <span>关于签证</span>
          </div>
          <div class="pd35">
            <div class="redTitle">机场：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
              >
            </div>
            <div class="redTitle">公交：</div>
            <div class="greyContent">
              <p>北京首都机场（距离会展102公里）</p>
              <span
                >地铁十号线车道沟站D口出像左转然后进入紫竹院路200米再左转进入曙光花园中路。</span
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

export default {
  data() {
    return {
      title: "交通和住宿",
    };
  },
  components: {
    Title,
  },
};
</script>
  
<style scoped>
.bj {
  background: #f6f6f6;
  padding: 50px 0 0px 0;
}
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
</style>