<template>
  <div class="bj" id="zytj">
    <Title :name="title"></Title>
    <div class="contentCenter">
      <div class="pinkBj">
        <div>所有摘要和全文必须通过以下链接提交</div>
        <div><a href="https://www.actahort.org/members/symposiar?nr=810" target="_blank" class="redBtn">摘要提交</a></div>
      </div>
      <div class="mb40">
        <a
          href="https://www.ishs.org/sites/default/files/page-documents/onlinesubmissionauthorsguide.pdf"
          target="_blank"
          class="redBtn"
          >国际园艺学会在线提交程序</a
        >
        <a href="https://www.ishs.org/authors" target="_blank" class="redBtn"
          >Acta Horticulturae指南</a
        >
      </div>
      <RedTitle :titleCont="title3"></RedTitle>
      <div class="flexBox">
        <div class="wid30">
          <div class="descBox">
            <p class="mb20">
              提交报告的作者需首先注册，并完成缴费。我们仅接受完成注册并缴费的作者，已完成注册但不打算作报告的人员，也需要尽快完成支付。
            </p>
          </div>
        </div>
        <div class="wid68">
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
        </div>
      </div>
     
      <RedTitle :titleCont="title2"></RedTitle>
      <div class="descBox">
        <p class="mb20">● 仅审查以英文提交的摘要。</p>
        <p class="mb20">● 摘要不得超过300字。</p>
        <p class="mb20">● 摘要不得包含表格、图片或图表。</p>
        <p class="mb20">● 所有缩略词必须在首次使用时拼写全称。</p>
        <p class="mb20">● 应彻底检查摘要的拼写和语法。</p>
        <p class="mb20">
          ●
          摘要提交费用应在提交摘要时支付，仅适用于提交作者。对于ISHS个人会员，完全免除提交摘要的费用。
        </p>
        <p class="mb20">
          ●
          尚未注册ISHS帐户的人：首先 <a href=""
            class="redBtn" target="_blank">创建ISHS用户帐户</a>，付款并激活您的帐户后，可以开始<a href="https://www.actahort.org/members/symposiar?nr=744" target="_blank" class="redTxt">提交摘要</a>。
        </p>
        <p class="mb20">
          ●
          摘要必须始终由提交作者使用自己的个人ISHS帐户提交。严禁代表其他作者提交摘要或使用其他作者的ISHS帐户。
        </p>
        <p class="mb20">
          ● 所有口头报告人，必须根据《Acta Horticulturae》指南于2025年3月1日前提交手稿至《Acta Horticulturae》。未能提交手稿的口头报告人可能会被拒绝进行汇报。强烈鼓励海报作者为《Acta Horticulturae》准备并提交手稿。
        </p>
        <p class="mb20">
          ●
          接收摘要（包括口头报告及海报）的作者必须在2024年12月31日前注册参加第9届国际月季大会。如果未能注册参加会议，您的摘要将被从研讨会计划中撤回，您的手稿将被从《ActaHorticulturae》中撤回。
        </p>

        <h3>语言：</h3>
        <p class="mb60">
          第9届国际月季大会官方语言为英语，开幕式和闭幕式将提供中英文同声传译服务，所有其他环节均为英语。
        </p>
      </div>
      <RedTitle :titleCont="title4"></RedTitle>
      <div class="descBox">
        <p class="mb20">本次大会为青年学者设立两项<a href="https://www.ishs.org/young-minds-award" target="_blank" class="redTxt">青年科学家奖：</a></p>
        <p class="mb20">1. 最佳口头报告奖将授予以第一作者投稿论文并做口头报告的青年学者。</p>
        <p class="mb20">2. 最佳海报奖将授予以第一作者进行海报展示的青年学者。
召集人和国际园艺学会代表将成立一个特别委员会，负责评选获奖者。有资格获得该奖项的青年学者必须是提交材料的主要作者，并且应该在大学、学院或研究机构注册。他/她可以是本科生、研究生（在完成学习计划后6个月内），年龄限制为35岁。</p>
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
      title: "立即提交",
      title2: "摘要/全文提交指南",
      title3: "重要时间节点",
      title4: "国际园艺学会青年科学家奖",
    };
  },
  components: {
    Title,
    RedTitle,
  },
};
</script>
  
  <style scoped>
.mb20 {
  margin-bottom: 20px;
}
.mb40 {
  margin-bottom: 40px;
}
.mb60 {
  margin-bottom: 80px;
}
.bj {
  background: #fff;
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
  margin-bottom: 20px;
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

.flexBox {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.wid30 {
  width: 35%;
}
.wid68 {
  width: 63%;
}
.pinkBj{width:100%;padding:30px;background-color: #fcf2f3;text-align: center;color:#d0031f;line-height:2.5em;font-size:24px;margin-bottom:20px;}
.pinkBj a{  display:block;margin:0 auto;width:8em;text-align: center;
  height: 40px;
  line-height: 40px;
  padding: 0px 20px;
  color: #fff;
  background: #d0031f;
  font-size:20px;
  border-radius: 20px;}
</style>