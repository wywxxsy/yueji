<template>
  <div class="bj" id="eng_wyh">
    <Title :name="title"></Title>
    <div class="centerBox">
      <!-- <RedTitle :titleCont="redTitle"></RedTitle> -->
      <div class="weiYuanHui">
        <p class="descTxt">
          The symposium will be organized by International Society for Horticultural Science (ISHS), Chinese Society for Horticultural Science (CSHS), China Agricultural University (CAU) and Beijing Municipal People's Government, China Flower Association.
        </p>
        <div class="blackTitle">Conveners：</div>
        <div class="ztList">
          <div class="greyTxt">Junping Gao (China Agricultural University, China)</div>
          <div class="greyTxt">Nan Ma (China Agricultural University, China)</div>
        </div>
        <div class="blackTitle">Scientific committee:</div>
        <div class="ztList">
          <div class="greyTxt">Brent Pemberton (Texas & AM, TX, USA)</div>
          <div class="greyTxt">Cai-Zhong Jiang (UC-Davis/USDA, USA)</div>
          <div class="greyTxt">David Byrne (Texas & AM, TX, USA)</div>
          <div class="greyTxt">Fabrice Foucher (INRA, France)</div>
          <div class="greyTxt">Fisun Çelikel (Turkey Ondokuz Mayis, Turkey)</div>
          <div class="greyTxt">Johan van Huylenbroeck (ILVO, Belgium)</div>
          <div class="greyTxt">José Antonio Saraiva Grossi (Universidade Federal de Viçosa, Brazil)</div>
          <div class="greyTxt">Hao Zhang (Yunnan Province Academy of Agricultural Sciences, China)</div>
          <div class="greyTxt">Manzhu Bao (Huazhong Agricultural University, China)</div>
          <div class="greyTxt">Margherita Beruto (Italy)</div>
          <div class="greyTxt">Mohammed Bendahmane (INRA, France)</div>
          <div class="greyTxt">Peter Batt (Australia)</div>
          <div class="greyTxt">Sylvie Baudino (Univ Lyon, UJM-Saint-Etienne, CNRS, France)</div>


        </div>
        <div class="blackTitle">Organizing committee:</div>
        <div class="ztList">
          <div class="greyTxt">Tianhong Li (China Agricultural University)</div>
          <div class="greyTxt">Beijing Gardening and Greening Bureau</div>
          <div class="greyTxt">Mentougou Gardening and Greening Bureau</div>
          <div class="greyTxt">Junping Gao (China Agricultural University)</div>
          <div class="greyTxt">Nan Ma (China Agricultural University)</div>
          <div class="greyTxt">Zuoshuang Zhang (Chinese Rose Society of China Flower Association)</div>
          <div class="greyTxt">Shiwei Zhao (Chinese Rose Society of China Flower Association)</div>
          <div class="greyTxt">Shuhua Yang (The Institute of Vegetables and Flowers, CAAS)</div>
          <div class="greyTxt">Le Luo (Beijing Forestry University)</div>
          <div class="greyTxt">Yunhe Jiang (China Agricultural University)</div>
          <div class="greyTxt">Changxi Chen (China Agricultural University)</div>
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
  /* height: 40px; */
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