<template>
  <div class="bj" id="zjbg" >
    <Title :name="title"></Title>
    <div class="centerBox">
      <div class="mb20">
        <div class="zhuanTi">专题1：遗传学和基因组学</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
  
      </div>
      <div class="mb20">
        <div class="zhuanTi">专题2：育种、社会科学和人类学</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">专题3：生理学</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">专题4：次级代谢</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">专题5：生物与非生物胁迫</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">专题6：采后技术与加工</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
      </div>
      <!-- <div class="mb20">
        <div class="zhuanTi">专题6：采后技术与加工</div>
        <div class="ztList">
          <span class="blackTxt">> 甜樱桃科学研究与生产技术的未来展望：</span>
          <span class="greyTxt">Gregory A.Lang教授，美国密西根州立大学</span>
        </div>
      </div> -->

      <RedTitle :titleCont="redTitle"></RedTitle>
      <div class="ztList">
          <div class="greyTxt"></div>
          <!-- <div class="greyTxt">Amylezzoni教授，美国密西根州立大学</div> -->
         
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
      title: "主要征集报告名单(部分)",
      redTitle: "特邀报告人",
    };
  },
  components: { Title, RedTitle },
};
</script>

<style scoped>
.bj {
  background: #f6f6f6;
  padding: 50px 0 65px 0;
}
.mb20 {
  margin-bottom: 20px;
}
.centerBox {
  width: 1200px;
  margin: 0 auto;
}
.zhuanTi {
  font-size: 28px;
  font-weight: bold;
  color: #292828;
  margin-bottom: 20px;
  position: relative;
  padding-left: 30px;
}
.zhuanTi::before {
  content: "";
  width: 10px;
  height: 10px;
  background: #292828;
  display: inline-block;
  margin-right: 20px;
  transform: rotate(45deg);
  position: absolute;
  top: 11px;
  left: 4px;
}
.ztList {
  padding: 0 0 0 40px;
}
.ztList span {
  font-size: 16px;
  line-height: 40px;
}
.ztList div{height:40px;line-height: 40px;}
.greyTxt {
  color: #4a4a4a;
}
.blackTxt {
  color: #292828;
  font-weight: bold;
}
</style>