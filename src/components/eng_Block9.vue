<template>
  <div class="bj" id="eng_wyh">
    <Title :name="title"></Title>
    <div class="centerBox">
      <RedTitle :titleCont="redTitle"></RedTitle>
      <div class="weiYuanHui">
        <p class="descTxt">
          本次大会由国际园艺学会、中国园艺学会、北京市人民政府、中国农业大学、中国花卉协会主办，北京市园林绿化局、北京市门头沟区人民政府、中国花卉协会月季分会、中国农业大学园艺学院、北京花卉协会承办。
        </p>
        <div class="blackTitle">Conveners：</div>
        <div class="ztList">
          <div class="greyTxt">Junping Gao (China Agricultural University)</div>
        </div>
        <div class="blackTitle">Scientific committee:</div>
        <div class="ztList">
          <div class="greyTxt"></div>
        </div>
        <div class="blackTitle">Organizing committee:</div>
        <div class="ztList">
          <div class="greyTxt"></div>
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
      title: "Committees",
      redTitle: "2025年月季大会委员会",
    };
  },
  components: { Title, RedTitle },
};
</script>

<style scoped>
.bj {
  background: #fff;
  padding: 50px 0 65px 0;
}
.mb20 {
  margin-bottom: 20px;
}
.centerBox {
  width: 1200px;
  margin: 0 auto;
}

.ztList {
  padding: 0 0 0 40px;
  margin-bottom:35px;
}
.ztList span {
  font-size: 16px;
  line-height: 40px;
}
.ztList div {
  height: 40px;
  line-height: 40px;
}
.greyTxt {
  color: #4a4a4a;
}
.blackTitle {
  color: #000;
  font-weight: bold;
  font-size: 16px;
  margin: 20px 0;
}
.descTxt {
  color: #4a4a4a;
  line-height: 40px;
  text-indent: 2em;
}
</style>