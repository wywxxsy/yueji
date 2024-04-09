<template>
  <div class="bj" id="regist">
    <Title :name="title"></Title>
    <div class="contentCenter">
      <div class="redTxt">
        国内参会人员请点击此处进行注册
        <span class="redBtn" @click="toRegist">立即注册</span>
      </div>
      <RedTitle :titleCont="title2"></RedTitle>
      <table class="jjrqTable">
        <tr>
          <td>2024年12月15日</td>
          <td>摘要提交截止</td>
        </tr>
        <tr>
          <td>2025年1月15日</td>
          <td>摘要修改截止</td>
        </tr>
        <tr>
          <td>2025年4月10日</td>
          <td>全文提交截止</td>
        </tr>
        <tr>
          <td>2025年6月30日</td>
          <td>全文修改截止</td>
        </tr>
      </table>
      <RedTitle :titleCont="title3"></RedTitle>
      <table class="moneyTable">
        <tr>
          <td>类别</td>
          <td>提前注册<br/>2024年12月31日之前</td>
          <td>普通注册<br/>2024年12月31日之后</td>
        </tr>
        <tr>
          <td>ISHS会员</td>
          <td>2600 元</td>
          <td>3200 元</td>
        </tr>
        <tr>
          <td>非ISHS会员</td>
          <td>3200 元</td>
          <td>3800 元</td>
        </tr>
        <tr>
          <td>学生</td>
          <td>1800 元</td>
          <td>2300 元</td>
        </tr>
        <tr>
          <td>陪同人员</td>
          <td>1800 元</td>
          <td>2300 元</td>
        </tr>
      </table>
      <div class="descBox">
        <h3>注意事项：</h3>
        <p class="mb20">注册截止日期：2025年4月10日。</p>


        <h3> 缴费须知</h3>
        <p>1、注册时若需要开具发票，请务必将发票开具信息（单位名称、统一社会信用代码、地址、电话）填写登记，不登记则不开具发票。</p>
        <p class="mb20">2、请国内代表注册成功后30日内完成缴费到账，银行汇款需在2025年4月31日前到账。</p>

        <h3>退费政策</h3>
        <p>2024年11月1日前申请退费，退费50%；2024年11月1日后取消注册不予退费。</p>
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
      title: "立即注册",
      title2: "截止日期",
      title3: "注册费&陪同人员费用",
    };
  },
  components: {
    Title,
    RedTitle,
  },
  methods: {
    toRegist(){
      // console.log("toRegist")
      this.$router.push({ path: "/regist" });
    }
  },
};
</script>
  
  <style scoped>
  .mb20{margin-bottom:20px;}
.bj {
  background: #f6f6f6;
  padding: 50px 0 65px 0;
}
.contentCenter {
  width: 1200px;
  margin: 0 auto;
}
.redTxt {
  font-size: 16px;
  color: #d0031f;
  margin-bottom: 70px;
}
.redBtn {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0px 15px;
  color: #fff;
  background: #d0031f;
  margin-left: 10px;
  border-radius: 15px;
}
table.jjrqTable {
  width: 100%;
  border-collapse: collapse;
  border: none;
  text-align: center;
  font-size: 18px;
  margin-bottom:80px;
}
table.jjrqTable tr td:first-child {
  font-weight: bold;
  color: #4a4a4a;
}
table.jjrqTable tr td {
  font-weight: normal;
  color: #4a4a4a;
  padding: 0 40px 0 40px;
  border: 1px solid #a3a3a3;
  height: 50px;
  line-height: 50px;
  text-align: left;
}

table.moneyTable {
  width: 100%;
  border-collapse: collapse;
  border: none;
  text-align: center;
  font-size: 18px;
  margin-bottom:20px;
}
table.moneyTable tr:first-child td {
  font-weight: bold;
  color: #4a4a4a;
}
table.moneyTable tr td:first-child {
  font-weight: bold;
  color: #4a4a4a;
}
table.moneyTable tr td {
  font-weight: normal;
  color: #4a4a4a;
  padding: 0 40px 0 40px;
  border: 1px solid #a3a3a3;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.descBox{font-size:16px;line-height:2em;}
.descBox h3{font-weight: bold;color:#000;}
.descBox p{color:#4a4a4a;text-indent: 2em;}
</style>