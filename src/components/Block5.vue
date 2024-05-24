<template>
    <div class="bj" id="dhrc">
      <Title :name="title"></Title>
      <div class="contentCenter">
      <RedTitle :titleCont="title2"></RedTitle>
      <img src="../assets/image/use/dhrc.jpg" alt="大会日程" class="richeng_img" style="margin-bottom:70px">
      <RedTitle :titleCont="title3" style="display:none;"></RedTitle>
      <div class="cont2 m_cont2" style="display:none;">
        <div class="contBox">
            <div>
                <p class="contTitle">设计师月季花园</p>
                <p class="contDesc">花园展位置设置在主入口处，招募 8个国内外具有超前国际视野和设计理念的设计师，对标切尔西花展，充分融合中国人民的花园生活需求为方向打造具有独特设计理念、创新点或创新工艺的实景设计师花园,共同探索中国花园市场。</p>
            </div>
            <div><img src="../assets/image/use/dhrc.jpg" class="wid100"></div>
        </div>
        <div class="contBox">
            <div><img src="../assets/image/use/dhrc.jpg" class="wid100"></div>
            <div>
                <p class="contTitle">设计师月季花园</p>
                <p class="contDesc">花园展位置设置在主入口处，招募 8个国内外具有超前国际视野和设计理念的设计师，对标切尔西花展，充分融合中国人民的花园生活需求为方向打造具有独特设计理念、创新点或创新工艺的实景设计师花园,共同探索中国花园市场。</p>
            </div>          
        </div>
        <div class="contBox">
            <div>
                <p class="contTitle">设计师月季花园</p>
                <p class="contDesc">花园展位置设置在主入口处，招募 8个国内外具有超前国际视野和设计理念的设计师，对标切尔西花展，充分融合中国人民的花园生活需求为方向打造具有独特设计理念、创新点或创新工艺的实景设计师花园,共同探索中国花园市场。</p>
            </div>
            <div><img src="../assets/image/use/dhrc.jpg" class="wid100"></div>
        </div>
        <div class="contBox">
            <div><img src="../assets/image/use/dhrc.jpg" class="wid100"></div>
            <div>
                <p class="contTitle">设计师月季花园</p>
                <p class="contDesc">花园展位置设置在主入口处，招募 8个国内外具有超前国际视野和设计理念的设计师，对标切尔西花展，充分融合中国人民的花园生活需求为方向打造具有独特设计理念、创新点或创新工艺的实景设计师花园,共同探索中国花园市场。</p>
            </div>
        </div>
       
      </div>
      <RedTitle :titleCont="title4" style="display:none;"></RedTitle>
      <table class="jjrqTable" style="display:none;">
        <tr>
          <td>2023年12月15日</td>
          <td>活动名称1</td>
        </tr>
        <tr>
          <td>2024年01月15日</td>
          <td>活动名称2</td>
        </tr>
        <tr>
          <td>2024年02月15日</td>
          <td>活动名称3</td>
        </tr>
        <tr>
          <td>2024年05月25日</td>
          <td>活动名称4</td>
        </tr>
      </table>
    </div>
    </div>
  </template>
  
  <script>
  import Title from "@/components/Title.vue";
  import RedTitle from "@/components/RedTitle.vue";
  export default {
    data() {
      return {
        title: "大会日程",
        title2:'大会报告日程',
        title3:'技术参观日程',
        title4:'社交活动日程',
      };
    },
    components: {
      Title,RedTitle
    },
  };
  </script>
  
  <style scoped>
  .bj {
    background: #fff;
    padding: 50px 0 65px 0;
  }
  .mt10{margin-top:10px;}
  .mb35{margin-bottom:35px;}
  .contentCenter{width:1200px;margin:0 auto;}
  .cont2{margin-bottom: 80px;}
.contBox{display: flex;justify-content: space-between;padding:58px 0 ;border-bottom: 2px dotted #dadada;}
.contBox div{width:45%;}
.contTitle{width:100%;font-size:28px;color:#000;font-weight: bold;height: 50px;line-height: 50px;padding-bottom:20px;border-bottom: 2px solid #dadada;}
.contDesc{font-size:16px;color:#4a4a4a;line-height: 2.5em;text-indent: 2em;margin-top:50px;}
.wid100{width:100%;}
table.jjrqTable  {width:100%;border-collapse:collapse; border:none; text-align:center;font-size:18px; }
table.jjrqTable  tr td:first-child{ font-weight: bold;color:#4a4a4a;}
table.jjrqTable  tr td{font-weight: normal; color:#4a4a4a;padding:0 40px 0 40px;border:1px solid #a3a3a3;height:50px;line-height: 50px;text-align: left; }
  </style>