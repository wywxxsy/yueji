<template>
  <div class="bigBj">
    <Head :isNav="isNav"></Head>
    <div class="banner">
      <!-- <img src="../assets/image/2025.png" > -->
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.imgUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="submit_container">
      <div class="register_form" style="padding: 30px">
        <h2 class="title">Registration(参会提交)</h2>
        <div class="form_box" style="padding: 15px">
          <div class="item">
            <p><i>*</i>1. First Name</p>
            <input
              class="textarea"
              placeholder="请输入名字"
              v-model.trim="subInfo.FirstName"
            />
            <p class="redTxt" v-if="!$v.subInfo.FirstName.required">
              First_name is required.
            </p>
          </div>
          <div class="item">
            <p><i>*</i>2. Last Name</p>
            <input
              class="textarea"
              placeholder="请输入姓氏"
              v-model.trim="subInfo.LastName"
            />
            <p class="redTxt" v-if="!$v.subInfo.LastName.required">
              Last_name is required.
            </p>
          </div>
          <div class="item">
            <p><i>*</i>3. Is there an accompanying person?(是否有随行人员?)</p>
            <div class="radio_group">
              <span
                ><input
                  type="radio"
                  name="r12"
                  v-model="subInfo.IsEntourage"
                  value="是"
                /><label for="r3">是(最多一个)</label></span
              >
              <span
                ><input
                  type="radio"
                  name="r12"
                  v-model="subInfo.IsEntourage"
                  value="否"
                  checked
                /><label for="r4">否</label></span
              >
            </div>
            <p class="redTxt" v-if="!$v.subInfo.IsEntourage.required">
              accompanying person is required.
            </p>
          </div>
          <div class="item">
            <p>4. accompanying person Name(随行人员姓名)</p>
            <input
              class="textarea"
              placeholder="请输入随行人员姓名"
              v-model="subInfo.EntourageName"
            />
          </div>

          <div class="item">
            <p>5. Gender(随行人员性别)</p>
            <div class="radio_group">
              <span
                ><input
                  type="radio"
                  name="r13"
                  v-model="subInfo.EntourageSex"
                  value="男"
                /><label for="qz1">男</label></span
              >
              <span
                ><input
                  type="radio"
                  name="r13"
                  v-model="subInfo.EntourageSex"
                  value="女"
                /><label for="r6">女</label></span
              >
            </div>
          </div>

          <div class="item">
            <p><i>*</i>6. Registration Type(注册类型)</p>
            <select v-model="subInfo.RegistrationType">
              <option value="">Please choose</option>
              <option value="ISHS会员">ISHS会员</option>
              <option value="非ISHS会员">非ISHS会员</option>
              <option value="学生">学生</option>
              <option value="陪同人员">陪同人员</option>
            </select>
            <p class="redTxt" v-if="!$v.subInfo.RegistrationType.required">
              RegistrationType is required.
            </p>
          </div>
          <div class="item">
            <p>7. ISHS membership number(ISHS会员编号)</p>
            <input
              class="textarea"
              placeholder="请输入ISHS会员编号"
              v-model="subInfo.ISHSNumber"
            />
          </div>
          <div class="item">
            <p><i>*</i>8. Title(称呼)</p>
            <select v-model="subInfo.Title">
              <option value="">Please choose</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
              <option value="Mr.">Mr.</option>
              <option value="Miss.">Miss.</option>
            </select>
            <p class="redTxt" v-if="!$v.subInfo.Title.required">
              Title is required.
            </p>
          </div>
          <div class="item">
            <p><i>*</i>9. Position(职位)</p>
            <input
              class="textarea"
              placeholder="请输入职位"
              v-model="subInfo.Position"
            />
            <p class="redTxt" v-if="!$v.subInfo.Position.required">
              Position is required.
            </p>
          </div>
          <div class="item">
            <p><i>*</i>10. Organization / Institution(组织/机构)</p>
            <input
              class="textarea"
              placeholder="请输入组织/机构"
              v-model="subInfo.Organization"
            />
            <p class="redTxt" v-if="!$v.subInfo.Organization.required">
              Organization is required.
            </p>
          </div>
          <div class="item">
            <p><i>*</i>11. Country/Region(国家)</p>
            <input
              class="textarea"
              placeholder="请输入国家名称"
              v-model="subInfo.Country"
            />
            <p class="redTxt" v-if="!$v.subInfo.Country.required">
              Country/Region is required.
            </p>
          </div>
          <div class="item">
            <p><i>*</i>12. City(城市)</p>
            <input
              class="textarea"
              placeholder="请输入城市名称"
              v-model="subInfo.City"
            />
            <p class="redTxt" v-if="!$v.subInfo.City.required">
              City is required.
            </p>
          </div>
          <div class="item">
            <p><i>*</i>13. Address(地址)</p>
            <input
              class="textarea"
              placeholder="请输入地址"
              v-model="subInfo.Addres"
            />
            <p class="redTxt" v-if="!$v.subInfo.Addres.required">
              Addres is required.
            </p>
          </div>

          <div class="item">
            <p>14. Postal / Zip code(邮政编码)</p>
            <input
              class="textarea"
              placeholder="请输入邮政编码"
              v-model="subInfo.ZipCode"
            />
          </div>

          <div class="item">
            <p><i>*</i>15. Mobile phone(手机)</p>
            <div class="boxInp">
              <img src="../assets/image/tel.png" />
              <span
                style="position: absolute; left: 30px; top: 10px; color: #333"
                >+86</span
              >
              <input
                class="textarea pl30"
                placeholder="请输入手机号码"
                v-model="subInfo.Mobile"
                style="padding-left: 64px"
              />
              <p class="redTxt" v-if="!$v.subInfo.Mobile.required">
                Mobile is required.
              </p>
              <p class="redTxt" v-if="!$v.subInfo.Mobile.numeric">
                Mobile is a number.
              </p>
            </div>
          </div>
          <div class="item">
            <p><i>*</i>16. Email address(邮箱地址)</p>
            <div class="boxInp">
              <img src="../assets/image/email.png" />
              <input
                class="textarea pl30"
                placeholder="请输入邮箱地址"
                v-model="subInfo.Email"
              />
              <p class="redTxt" v-if="!$v.subInfo.Email.required">
                Email is required.
              </p>
              <p class="redTxt" v-if="!$v.subInfo.Email.email">
                Must be a valid email address
              </p>
            </div>
          </div>

          <div class="item">
            <p><i>*</i>17. Password(密码)</p>
            <div class="boxInp">
              <input
                type="password"
                placeholder="请输入密码"
                v-model="subInfo.Password"
              />
              <p class="redTxt" v-if="!$v.subInfo.Password.required">
                Password is required.
              </p>
              <div v-if="subInfo.Password !== ''">
                <p class="redTxt" v-if="!isValidPsd2">
                  输入不合法！只能输入数字、字母,长度大少于8位。
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <p><i>*</i>18. Confirm Password(确认密码)</p>
            <div class="boxInp">
              <input
                type="password"
                placeholder="请确认密码"
                v-model="subInfo.confirmPassword"
              />
              <p class="redTxt" v-if="!$v.subInfo.confirmPassword.required">
                confirmPassword is required.
              </p>
              <div v-if="subInfo.Password !== ''">
                <p class="greenTxt" v-if="isValidPsd3">校验通过</p>
                <p class="redTxt" v-else>请输入与密码一致的验证密码</p>
              </div>
            </div>
          </div>
          <div class="item">
            <p>19. Halal foods?(是否需要清真食品)</p>
            <div class="radio_group">
              <span
                ><input
                  type="radio"
                  name="qz1"
                  v-model="subInfo.Halal"
                  value="是"
                /><label for="qz1">是</label></span
              >
              <span
                ><input
                  type="radio"
                  name="qz1"
                  v-model="subInfo.Halal"
                  value="否"
                /><label for="qz2">否</label></span
              >
            </div>
          </div>
          <div class="item">
            <p>20. Vegetarian foods?(是否需要素食)</p>
            <div class="radio_group">
              <span
                ><input
                  type="radio"
                  name="ss1"
                  v-model="subInfo.SuShi"
                  value="是"
                /><label for="ss1">是</label></span
              >
              <span
                ><input
                  type="radio"
                  name="ss1"
                  v-model="subInfo.SuShi"
                  value="否"
                /><label for="ss2">否</label></span
              >
            </div>
          </div>
          <div class="submitBtn_box">
            <span class="submit_btn" @click="checkFrom">Submit</span>
            <span class="redTxt">{{ errorMessage }}</span>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import axios from "axios";
import Foot from "@/components/Foot";
import Head from "@/components/eng_Head";
import CryptoJS from "crypto-js";
import { required, email, minLength, numeric } from "vuelidate/lib/validators";

export default {
  components: {
    Foot,
    Head,
  },
  data() {
    return {
      imgList: [
        {
          id: "banner1",
          imgUrl: require("@/assets/image/banner1.jpg"),
        },
        {
          id: "banner2",
          imgUrl: require("@/assets/image/banner2.jpg"),
        },
        {
          id: "banner3",
          imgUrl: require("@/assets/image/banner3.jpg"),
        },
      ],
      isNav: 3,
      // dialogShow:false,
      textTip: "正在提交",
      errorMessage: "",
      subInfo: {
        id: "",
        FirstName: "",
        LastName: "",
        IsEntourage: "否",
        EntourageName: "",
        EntourageSex: "",
        RegistrationType: "",
        ISHSNumber: "",
        Title: "",
        Position: "",
        Organization: "",
        Addres: "",
        City: "",
        ZipCode: "",
        Country: "",
        Mobile: "",
        Email: "",
        //UserName:'',
        Password: "",
        confirmPassword: "",
        Halal: "",
        SuShi: "",
      },
    };
  },
  computed: {
    //验证用户名  是否为数字+字母+下划线
    // isValid1(){
    //   const regex = /^[0-9a-zA-Z_]+$/;
    //   return regex.test(this.subInfo.UserName);
    // },
    //验证密码  是否为数字和字母且大于8位的组合
    isValidPsd2() {
      // 正则表达式：数字和字母的组合
      const regex = /^[A-Za-z0-9]+$/;
      const abc = regex.test(this.subInfo.Password);
      return abc && this.subInfo.Password.length >= 8;
    },
    //验证确认密码  是否与密码一致
    isValidPsd3() {
      return this.subInfo.Password === this.subInfo.confirmPassword;
    },
  },
  validations: {
    subInfo: {
      FirstName: { required },
      LastName: { required },
      IsEntourage: { required },
      RegistrationType: { required },
      Title: { required },
      Position: { required },
      Organization: { required },
      Addres: { required },
      City: { required },
      Country: { required },
      Mobile: { required, numeric },
      Email: { required, email },
      //UserName:{required},
      Password: { required, minLength: minLength(8) },
      confirmPassword: { required },
    },
  },
  methods: {
    checkFrom() {
      this.subInfo.Password = CryptoJS.MD5(this.subInfo.Password).toString(); // 加密密码
      this.subInfo.confirmPassword = CryptoJS.MD5(
        this.subInfo.confirmPassword
      ).toString();
      // console.log(this.subInfo.Password,'注册页面的加密后')
      this.$v.$touch(); // 触发校验
      // console.log(this.$v.$invalid)
      if (!this.$v.$invalid) {
        // 校验通过
        // 执行表单提交操作
        this.submitForm();
      } else {
        // 校验不通过
        this.errorMessage = "请填写完整信息！";
      }
    },

    async submitForm() {
      // 发送POST请求
      try {
        console.log(this.subInfo);
        const response = await axios.post(
          this.$hostUrl + "/SubmitForm",
          this.subInfo
        );
        console.log(response);
        // 处理响应数据
        if (response.data.Code == "1") {
          // this.dialogShow = false;
          alert(`${response.data.Message}`);
          //重置数据
          this.subInfo = {
            id: "",
            FirstName: "",
            LastName: "",
            IsEntourage: "否",
            EntourageName: "",
            EntourageSex: "",
            RegistrationType: "",
            ISHSNumber: "",
            Title: "",
            Position: "",
            Organization: "",
            Addres: "",
            City: "",
            ZipCode: "",
            Country: "",
            Mobile: "",
            Email: "",
            ConfirmEmail: "",
            //UserName:'',
            Password: "",
            confirmPassword: "",
            Halal: "",
            SuShi: "",
          };

          this.$router.push("/"); //跳转至首页
        } else {
          // this.dialogShow = false;
          this.errorMessage = response.data.Message;
        }
      } catch (error) {
        console.error(error); // 处理错误情况
      }
    },
  },
};
</script>

<style scoped>
input,
select {
  outline: none;
}
.banner {
  width: 100%;
  background: url(../assets/image/bj2.png) no-repeat;
  background-size: cover;
  box-sizing: border-box;
}
.banner img {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: cover;
}
.container {
  position: relative;
  background: url(../assets/image/bg.jpg) no-repeat;
  background-size: cover;
}
.submit_container {
  background: url(../assets/image/submit_bj.png) repeat-y;
  overflow: auto;
  background-size: 100% 100%;
}
input {
  background-color: transparent;
}
.loginBox {
  position: absolute;
  top: 25vh;
  right: 12vw;
  width: 26vw;
  height: 50vh;
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
  width: 460px;
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
  width: 1200px;
  padding: 20px;
  background-color: #f3f5f9;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px #b1b1b1;
  box-sizing: border-box;
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
  border: 1px solid #a3a3a3;
  padding: 10px 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
}
.form_box .item {
  width: 49%;
  box-sizing: border-box;
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
.m_submit .item10 input {
  resize: none;
  width: 460px;
  box-sizing: border-box;
  height: 36px;
  line-height: 36px;
  background: #f3f5f9;
  padding: 0px 6px;
  font-size: 16px;
  font-family: "microsoft yahei";
  border: 1px solid #ccc;
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
  width: 460px;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  font-size: 14px;
  background: #f3f5f9;
  font-family: "microsoft yahei";
  border: 1px solid #ccc;
}
.boxInp {
  position: relative;
}
.boxInp img {
  position: absolute;
  left: 6px;
  top: 6px;
}
/* .boxInp input{width: 460px !important;} */
.item10 input {
  font-size: 14px;
}
.boxInp input[type="password"] {
  border: none;
  width: 460px;
  height: 36px;
  padding: 0px 6px;
  line-height: 36px;
  font-size: 16px;
  border: 1px solid #ccc;
  background: #f3f5f9;
  font-family: "microsoft yahei";
  box-sizing: border-box;
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
  cursor: pointer;
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
.redTxt {
  color: #f00 !important;
  font-size: 12px !important;
  font-weight: normal !important;
}
.greenTxt {
  color: rgb(3, 187, 25) !important;
  font-size: 12px !important;
  font-weight: normal !important;
}
.wid100 {
  width: 1025px !important;
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  font-size: 16px;
  background: #f3f5f9;
  font-family: "microsoft yahei";
  border: 1px solid #ccc;
  overflow: hidden;
}

/***移动端适配***/
.m_container {
  background: url(../assets/image/submit_bj.png) no-repeat;
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
.eyes_btn .eyes2 {
  display: none;
}
.toggle .eyes1 {
  display: none;
}
.toggle .eyes2 {
  display: block;
}
.pl30 {
  padding-left: 30px;
  box-sizing: border-box;
}

.radio_group {
  width: 460px;
  border: 1px solid #ccc;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .banner {
    height: auto !important;
    background: linear-gradient(180deg, pink, transparent) !important;
  }
  .banner img {
    margin: 0 auto;
    width: 90% !important;
  }
  .submit_container {
    background: linear-gradient(0deg, pink, transparent) !important;
  }
  .register_form {
    width: 90%;
  }
  .form_box .item {
    width: 100%;
    padding: 0;
    margin: 15px 0 10px;
  }
  .textarea,
  .radio_group,
  select,
  .wid100,
  .item input[type="password"] {
    width: 100% !important;
  }
  .item p {
    line-height: 20px;
  }
  .item p,
  .item input {
    font-size: 14px;
  }
  .submit_btn {
    display: block;
    margin: 30px auto 10px;
  }
}
</style>