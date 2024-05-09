<template>
  <div class="bj" id="eng_regist">
    <Title :name="title"></Title>
    <div class="contentCenter">
      <div class="redTxt">
        <!-- 国内参会人员请点击此处进行注册
        <span class="redBtn" @click="toRegist">立即注册</span> -->
        <p>Registration will be opened from May 1st, 2024</p>
      </div>
      <RedTitle :titleCont="title2"></RedTitle>
      <table class="jjrqTable">
        <tr>
          <td>Category</td>
          <td>Early Bird Before Dec 31th, 2024</td>
          <td>Regular After Dec 31th, 2024</td>
        </tr>
        <tr>
          <td>ISHS member</td>
          <td>400 USD</td>
          <td>500 USD</td>
        </tr>
        <tr>
          <td>Non-ISHS member</td>
          <td>500 USD</td>
          <td>600 USD</td>
        </tr>
        <tr>
          <td>Student</td>
          <td>300 USD</td>
          <td>350 USD</td>
        </tr>
        <tr>
          <td>Accompanying person</td>
          <td>300 USD</td>
          <td>350 USD</td>
        </tr>
      </table>
      <div class="descBox">
        <h3 class="mb20">Payment Methods Bank Transfer Details:</h3>
        <p>Notes Registration closed: Apr 30th, 2025</p>
        <p>BENEFICIARY: CHINESE SOCIETY FOR HORTICULTURAL SCIENCE ACCOUNT NUMBER: 110060435018010045010</p>
        <p>OBENEFICIARY BANKERS NAME: BANK OF COMMUNICATIONS BEIJING BRANCH NONGKEYUAN SUBBRANCH</p>
        <p>SWIFT CODE: COMMCNSHBJG</p>
        <p>BIC CODE: COMMCNSH</p>
        <p>ADDRESS: NO 55 XUEYUAN SOUTH ROAD, HAIDIAN DISTRICT, BEIJING CHINA</p>
        <p class="mb20">REMARK/REFERENCE/NOTE: rose2025+YOUR SURNAME</p>


        <h3> Cancellation Policy</h3>
        <p>Cancellations before Nov. 1ST, 2024: 50% penalty fare over the total fee.</p>
        <p>Cancellations after Nov. 1ST, 2024: 100% penalty fares over the total fee.</p>
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
      title: "Registration",
      title2: "Deadline",
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