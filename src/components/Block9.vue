<template>
  <div class="bj" id="wyh">
    <Title :name="title"></Title>
    <div class="centerBox">
      <RedTitle :titleCont="redTitle"></RedTitle>
      <div class="weiYuanHui">
        <p class="descTxt">
          本次大会由国际园艺学会、中国园艺学会、北京市人民政府、中国农业大学、中国花卉协会主办，北京市园林绿化局、北京市门头沟区人民政府、中国花卉协会月季分会、中国农业大学园艺学院、北京花卉协会承办。
        </p>
        <div class="blackTitle">召集人/大会主席</div>
        <div class="ztList">
          <div class="greyTxt">高俊平（中国农业大学）</div>
          <div class="greyTxt">马男（中国农业大学）</div>
        </div>
        <div class="blackTitle">科学委员会</div>
        <div class="ztList">
          <div class="greyTxt">Brent Pemberton（美国得克萨斯农工大学）</div>
          <div class="greyTxt">Cai-Zhong Jiang（美国加利福尼亚大学戴维斯分校）</div>
          <div class="greyTxt">David Byrne（美国得克萨斯农工大学）</div>
          <div class="greyTxt">Fabrice Foucher（法国农业科学研究院）</div>
          <div class="greyTxt">Fisun Çelikel（土耳其昂多库兹梅伊斯大学）</div>
          <div class="greyTxt">Johan van Huylenbroeck（比利时ILVO研究所）</div>
          <div class="greyTxt">José Antonio Saraiva Grossi（巴西维索萨联邦大学）</div>
          <div class="greyTxt">张颢（云南省农业科学院）</div>
          <div class="greyTxt">包满珠（华中农业大学）</div>
          <div class="greyTxt">Margherita Beruto（国际园艺学会观赏植物分会主席）</div>
          <div class="greyTxt">Mohammed Bendahmane（法国农业科学研究院）</div>
          <div class="greyTxt">Peter Batt（澳大利亚）</div>
          <div class="greyTxt">Sylvie Baudino（法国里昂大学）</div>
          
        </div>
        <div class="blackTitle">组织委员会</div>
        <div class="ztList">
          <div class="greyTxt">李天红（中国农业大学）</div>
          <div class="greyTxt">北京市园林绿化局</div>
          <div class="greyTxt">门头沟区园林绿化局</div>
          <div class="greyTxt">高俊平（中国农业大学）</div>
          <div class="greyTxt">马男（中国农业大学）</div>
          <div class="greyTxt">张佐双（中国花卉协会月季分会）</div>
          <div class="greyTxt">赵世伟（中国花卉协会月季分会）</div>
          <div class="greyTxt">杨树华（中国科学院蔬菜花卉研究所）</div>
          <div class="greyTxt">罗乐（北京林业大学）</div>
          <div class="greyTxt">江云鹤（中国农业大学）</div>
          <div class="greyTxt">陈昶曦（中国农业大学）</div>
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
      title: "委员会",
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