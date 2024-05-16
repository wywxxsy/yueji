<template>
  <div>
    <div class="nav">
      <div class="centerBox">
        <ul class="flexBox" :class="isToggle?'toggleHeight':''">
          <li :class="isNav == 0 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="#hyc">主页</router-link>
          </li>
          <li :class="isNav == 1 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="#zjbg">征集报告</router-link>
          </li>
          <li :class="isNav == 2 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="#dhrc">大会日程</router-link>
          </li>
          <li :class="isNav == 3 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="#regist">注册</router-link>
          </li>
          <li :class="isNav == 4 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="#zytj">摘要/全文提交</router-link>
          </li>
          <li :class="isNav == 5 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="#jtzs">交通和住宿</router-link>
          </li>
          <li :class="isNav == 6 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="#wyh">委员会</router-link>
          </li>
          <li :class="isNav == 7 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link to="Show">参观</router-link>
          </li>
          <!-- <li :class="isNav == 8 ? 'curNav' : ''" @click="changeNavToggle()">
            <router-link  :to="'/Live'">会议LIVE</router-link>
          </li> -->
        </ul>
      </div>

      <div class="rightBar">
        <div @click="toLogin" v-show="logState==''" style="cursor:pointer">
          <img src="../assets/image/icon_user.png" />
          <span>登录 </span>
        </div>
        <div v-show="logState!==''">
          <img src="../assets/image/icon_user.png"  />
          <span>{{userName}}</span>
          <span @click="toLogout"> [退出]</span>
        </div>
        <div class="ml20"  @click="to_engIndex">
          <img src="../assets/image/icon_world.png"  />
          <span>中/英</span>
        </div>
      </div>
      <a href="javascript:void(0);" @click="toggleNav" class="toggleNav" :class="isToggle?'':'toggleArrow'"><img src="../assets/image/list.png"></a>
      
    </div>
    <div
      style="width: 100%; height: 100px; background-color: transparent"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logState:localStorage.getItem('ID')?localStorage.getItem('ID'):'',
      userName:localStorage.getItem('Name')?localStorage.getItem('Name'):'',
      isToggle: true
    };
  },
  mounted() {
    // console.log(this.$route.path)
  },

  props: ["isNav"],
  methods: {
    toLogin() {
      this.$router.push({ name: "login" });
    },
    toLive() {
      this.$router.push({ name: "live" });
    },
    toLogout(){

      if (confirm('你确定要退出吗？')) {
        // 如果用户点击了确定，执行这里的代码
        localStorage.removeItem("ID");
        localStorage.removeItem("Payment");
        localStorage.removeItem("Name");
          // 跳转到登录页面
        this.$router.push('/login');
      } else {
        // 如果用户点击了取消，执行这里的代码
        // console.log('用户点击了取消');
      }
      
    },
    toggleNav() {
      this.isToggle = !this.isToggle
    },
    changeNavToggle() {
      this.isToggle = !this.isToggle
    },
    to_engIndex(){
      this.$router.push({ name: "eng_index" });
    }
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 100px;
  line-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 22px;
  display: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: -webkit-linear-gradient(
    left,
    #bf629b,
    #cd595c
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #bf629b,
    #cd595c
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #bf629b,
    #cd595c
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    #bf629b,
    #cd595c
  ); /* 标准的语法（必须放在最后） */
}
.centerBox {
  width: 1200px;
  margin: 0 auto;
}
.flexBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.centerBox span,
.centerBox a {
  color: #fff;
  display: block;
  height: 100px;
  line-height: 100px;
  padding: 0 26px;
}
.centerBox ul li:hover,
.centerBox ul li.curNav {
  background: #9e0203;
}
.rightBar {
  /* width: 170px; */
  height: 100px;
  line-height: 100px;
  position: absolute;
  right: 30px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightBar div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rightBar span,
.rightBar {
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightBar img {
  margin-right: 5px;
}
.ml20{margin-left:2em;cursor: pointer;}
.toggleNav{display: none;}



</style>