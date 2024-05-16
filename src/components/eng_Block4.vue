<template>
  <div class="bj" id="eng_zjbg" >
    <Title :name="title"></Title>
    <div class="centerBox">
      <div class="mb20">
        <div class="zhuanTi">S1: Genetics and Genomics</div>
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
        <div class="zhuanTi">S2: Breeding, Social Sciences and Humanities</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">S3: Physiology</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">S4: Secondary Metabolites</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">S5: Biotic and Abiotic stress</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>
      <div class="mb20">
        <div class="zhuanTi">S6: Postharvest Technologies and Processing</div>
        <div class="ztList">
          <span class="blackTxt"></span>
          <span class="greyTxt"></span>
        </div>
        
      </div>

      <RedTitle :titleCont="redTitle"></RedTitle>
      <div class="ztList">
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
      //title: "Symposium",
      title: "The main topics",
      redTitle: "Invited Speakers",
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