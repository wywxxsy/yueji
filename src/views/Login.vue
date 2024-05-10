<template>
  <div class="container">
    <div class="banner_bg">
      
    </div>
    <div class="loginBox">
      <p class="inp">
        <img src="../assets/image/icon5.png" />
        <input type="text" placeholder="请输入登录账号" v-model="UserName" />
      </p>
      <p class="inp">
        <img src="../assets/image/icon6.png" />
        <input
          id="txtpassword"
          :type="isTxt ? 'text' : 'password'"
          placeholder="请输入密码"
          v-model="Password"
        />
        <a href="javascript:void(0);" class="eyes_btn" @click="eyeChange">
          <img v-show="!isTxt"  src="../assets/image/yanjing.png" class="eyes1" />
          <img v-show="isTxt" src="../assets/image/yanjing2.png" class="eyes2" />
        
        </a>
      </p>
      <div class="line mb30">
        <p class="inp">
          <input type="text" placeholder="输入验证码" v-model="code" @keyup.enter="toLogin"/>
        </p>
        <div class="YZM" @click="refreshCode">
          <Yzm :identifyCode="identifyCode"></Yzm>
        </div>
      </div>
      <div class="loginBtn login_btn mb20" @click="toLogin">登录</div>
      <!-- <div class="or">------ 或者 ------</div> -->
      <div class="loginBtn reg_btn" @click="toRegist">参会注册</div>
      <span class="subInfo">{{ tipTxt }}</span>
    </div>
  </div>
</template>

<script>
import Yzm from "@/components/Yzm";
import axios from "axios";
import $ from 'jquery';
import md5 from 'md5';

export default {
  name: "login",
  components: { Yzm },

  data: function () {
    return {
      code: "", // 验证码
      identifyCodes: "1234567890abcdefjhijklinopqrsduvwxyz", //随机串内容
      identifyCode: "", //这是生成的验证码的值
      tipTxt: "",
      UserName: "",
      Password: "",
      isTxt:false,
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    // console.log(this.identifyCode, "这是生成的验证码的值");
   
  },
  methods: {
    // 重置验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      // console.log(this.identifyCode, "这是生成的验证码的值");
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    //登录按钮
     async toLogin() {
      if (this.code !== this.identifyCode) {
        this.tipTxt = "验证码错误";
        return;
      }
      else {
        try {
          const newPsd =md5(this.Password);
          //  console.log(newPsd, "这是加密后的密码");
          console.log(this.$hostUrl+'/LoginSystem');
          const response = await axios.post(
            this.$hostUrl+'/LoginSystem',
            {
              UserName: this.UserName,
              Password: newPsd,// 加密密码
            }
          );
          // 处理响应数据
          if (response.data.Code == "1") {
            this.tipTxt = response.data.Message;
            const userInfo =JSON.parse(response.data.moreMessage) 
            // console.log(userInfo, "这是用户信息");
            localStorage.setItem("ID",userInfo.ID);
            localStorage.setItem("Payment",userInfo.Payment);
            localStorage.setItem("Name",userInfo.Name);
            this.$router.push(this.$route.query.redirect || "/Index"); //跳转至首页
          } else {
            this.tipTxt = response.data.Message;
          }

        } catch (error) {
          console.error(error); // 处理错误情况
        }
      }
      // 发送POST请求
    },

    //密码明文加密切换
    eyeChange(){
      this.isTxt = !this.isTxt;
    },
    //跳转至注册  
    toRegist(){
      this.$router.push("/regist");
    }
  },
};
</script>

<style scoped>
html,
body,
.container,
.submit_container {
  width: 100%;
  height: 100%;
}
.container {
  position: relative;
  background: url(../assets/image/login_bj.jpg) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
/* .submit_container{background: url(../assets/image/submit_bg.jpg) no-repeat;background-size: cover;overflow: auto;} */
input {
  background-color: transparent;
}
.loginBox {
  position: absolute;
  top: 25vh;
  right: 12vw;
  width: 26vw;
  padding-bottom: 30px;
  padding-top: 10px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  box-shadow: 0px 8px 12px 2px rgba(255, 106, 139, 0.75);
}
.inp {
  position: relative;
  margin: 15px auto 0;
  width: 86%;
  height: 46px;
  line-height: 46px;
  border: 1px solid #cc0000;
  border-radius: 4px;
}
.inp img {
  margin: 8px 10px 8px 12px;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.inp input {
  width: 70%;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  border: none;
  font-size: 14px;
  color: #333333;
  outline: none;
}
.line {
  margin: 15px auto 0;
  width: 86%;
}
.line .inp {
  float: left;
  width: 65%;
  display: inline-block;
  margin-top: 0;
  vertical-align: text-top;
}
.line .inp input {
  width: 90%;
  padding-left: 18px;
}
.YZM {
  width: 23%;
  margin-left: 15px;
  display: inline-block;
}
.YZM img {
  width: 100%;
}
.setPw {
  margin: 10px auto 0;
  width: 86%;
  display: block;
  text-align: right;
  line-height: 20px;
  color: #999;
  font-size: 14px;
}
.setPw:hover {
  color: #cc0000;
}
.loginBtn {
  margin: 0 auto;
  width: 86%;
  display: block;
  height: 42px;
  line-height: 42px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.login_btn {
  margin-top: 10px;
  background-color: #85010f;
}
.login_btn:hover {
  background-color: #c30619;
}
.reg_btn {
  background-color: #cc0000;
}
.reg_btn:hover {
  background-color: #b80303;
}
.or {
  width: 86%;
  margin: 0 auto;
  text-align: center;
  height: 30px;
  line-height: 30px;
  color: #ccc;
}
.subInfo {
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #85010f;
}

.register_form {
  margin: 60px auto;
  width: 920px;
  padding: 20px;
  background-color: #fff;
  overflow: hidden;
}

h1 {
  margin: 20px 0 10px;
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
h1:first-child {
  margin-top: 0;
}
.form_box {
  border: 1px solid #e1e1e1;
  padding: 10px 0;
  overflow: hidden;
}
.form_box .item {
  width: 50%;
  display: inline-block;
  float: left;
}
.item {
  padding: 10px 20px;
}
.form_box .item10 {
  width: 100%;
}
.item p {
  margin-bottom: 2px;
  line-height: 30px;
  font-size: 16px;
  color: #333;
  font-weight: bold;
}
.item p i {
  font-style: normal;
  padding-right: 4px;
  color: red;
}
.item input[type="text"] {
  width: 240px;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  font-size: 16px;
  color: #333;
}
.item input[type="radio"] {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
  margin-right: 4px;
}
.item .radio_group span {
  margin: 0 15px;
  line-height: 36px;
}

.textarea,
.m_submit .item10 input[type="password"] {
  resize: none;
  width: 90%;
  height: 34px;
  padding: 4px 6px;
  line-height: 24px;
  font-size: 16px;
}
.radio_group_block span {
  display: block;
}

.title {
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 24px;
  text-align: center;
  color: #c00;
  font-weight: bold;
}
select {
  width: 90%;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  font-size: 14px;
}
.boxInp {
  position: relative;
}
.boxInp img {
  position: absolute;
  left: 6px;
  top: 6px;
}
.boxInp input {
  width: 90% !important;
}
.item10 input {
  font-size: 14px;
}
.boxInp input[type="password"] {
  border: none;
  width: 90%;
  height: 34px;
  padding: 4px 6px;
  line-height: 24px;
  font-size: 16px;
  border: 1px solid #999;
}
.submitBtn_box {
  width: 100%;
  text-align: center;
  overflow: hidden;
}
.submit_btn {
  margin: 30px;
  display: inline-block;
  padding: 10px 30px;
  background: #c00;
  color: #fff;
  border-radius: 4px;
}
.submit_btn:hover {
  background-color: rgba(246, 29, 0, 0.993);
}
.fileBtn {
  border: none;
  display: inline-block;
  padding: 4px 10px;
  background: #c00;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.fileBtn:hover {
  background-color: rgb(230, 5, 5);
}
.mb20 {
  margin-bottom: 10px;
}
.mb30 {
  margin-bottom: 30px;
}


/***移动端适配***/
.m_container {
  background: url(../assets/image/bg.jpg) no-repeat;
  background-size: cover;
  overflow: auto;
}
.m_loginBox {
  position: absolute;
  top: 15vh;
  left: 0;
  right: 0;
  width: 90%;
  margin: 0 auto;
  height: 26em;
}
.m_submit .fileBtn {
  margin: 15px;
}
.m_submit .submit_btn {
  margin: 10px;
}
.m_submit .item .radio_group span {
  margin-top: 10px;
  line-height: 26px;
}

.m_submit {
  width: 92%;
}
.m_submit .item {
  width: 100%;
  padding: 10px;
}
.item input[type="text"] {
  border: 1px solid #999;
}
.m_submit .item10 textarea,
.m_submit .item10 select {
  width: 100%;
}
.m_submit .boxInp input {
  width: 100% !important;
}
.m_submit .item10 p {
  line-height: 24px;
  font-size: 14px;
}
.m_submit .radio_group {
  width: 100%;
  border: 1px solid #999;
}

.m_submit .item10 input[type="password"] {
  border: 1px solid #999;
}

.dialog {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.dialogInfo {
  position: absolute;
  left: 0;
  right: 0;
  top: 42%;
  margin: 0 auto;
  display: inline-block;
  max-width: 25vw;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
}
.dialogInfo p {
  text-align: center;
  font-size: 16px;
  color: #333;
}
.m_submit .dialogInfo {
  max-width: 45vw;
  padding: 15px;
}

.inp {
  position: relative;
}
.eyes_btn {
  position: absolute;
  right: 10px;
  top: 13px;
  width: 20px;
  height: 20px;
}
.eyes_btn img {
  margin: 0;
  width: 100%;
  height: 100%;
  vertical-align: top;
}
/* .eyes_btn .eyes2 {
  display: none;
} */
.toggle .eyes1 {
  display: none;
}
.toggle .eyes2 {
  display: block;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .container{
    background: linear-gradient(180deg, pink, transparent) !important;
    
  }
  .banner_bg{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    background:  url(../assets/image/2025.png) center 5% no-repeat !important;
    background-size: contain !important;
  }
  .loginBox{
    width: 90%;
    left: 0;
    right: 0;
    top: 28vh;
    margin: 0 auto;
  }
  .loginBtn{
    width: 90% !important;
  }
  


}



</style>