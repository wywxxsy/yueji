<template>
    <div class="bj" id="eng_dhrc">
      <Title :name="title"></Title>
      <div class="contentCenter">
      <RedTitle :titleCont="title2"></RedTitle>
      <img src="../assets/image/use/eng_dhrc.png" alt="大会日程" class="richeng_img" style="margin-bottom:70px">
      <RedTitle :titleCont="title3"></RedTitle>
      <div class="cont2 m_cont2">
        <div class="contBox">
            <div>
                <p class="contTitle">Rose Flower Park</p>
                <p class="contDesc">The garden exhibition is located at the main entrance, recruiting 8 domestic and foreign designers with advanced international vision and design concepts, to mark the Chelsea Flower Show, fully integrating the garden life needs of the Chinese people to create a unique design concept, innovation point or innovative technology of the real designer garden, and jointly explore the Chinese garden market.</p>
            </div>
            <div><img src="../assets/image/use/test.png" class="wid100"></div>
        </div>
        <div class="contBox">
            <div><img src="../assets/image/use/test.png" class="wid100"></div>
            <div>
                <p class="contTitle">Rose Flower Park</p>
                <p class="contDesc">The garden exhibition is located at the main entrance, recruiting 8 domestic and foreign designers with advanced international vision and design concepts, to mark the Chelsea Flower Show, fully integrating the garden life needs of the Chinese people to create a unique design concept, innovation point or innovative technology of the real designer garden, and jointly explore the Chinese garden market.</p>
            </div>          
        </div>
        <div class="contBox">
            <div>
                <p class="contTitle">Rose Flower Park</p>
                <p class="contDesc">The garden exhibition is located at the main entrance, recruiting 8 domestic and foreign designers with advanced international vision and design concepts, to mark the Chelsea Flower Show, fully integrating the garden life needs of the Chinese people to create a unique design concept, innovation point or innovative technology of the real designer garden, and jointly explore the Chinese garden market.</p>
            </div>
            <div><img src="../assets/image/use/test.png" class="wid100"></div>
        </div>
        <div class="contBox">
            <div><img src="../assets/image/use/test.png" class="wid100"></div>
            <div>
                <p class="contTitle">Rose Flower Park</p>
                <p class="contDesc">The garden exhibition is located at the main entrance, recruiting 8 domestic and foreign designers with advanced international vision and design concepts, to mark the Chelsea Flower Show, fully integrating the garden life needs of the Chinese people to create a unique design concept, innovation point or innovative technology of the real designer garden, and jointly explore the Chinese garden market.</p>
            </div>
        </div>
       
      </div>
      <RedTitle :titleCont="title4"></RedTitle>
      <table class="jjrqTable">
        <tr>
          <td>2023 May 25</td>
          <td>visit 1.</td>
        </tr>
        <tr>
          <td>2023 Feb 15</td>
          <td>visit 2.</td>
        </tr>
        <tr>
          <td>2023 Feb 20</td>
          <td>visit 3.</td>
        </tr>
        <tr>
          <td>2023 Feb 25</td>
          <td>visit 4.</td>
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
        title: "Schedule",
        title2:'Conference Report Schedule',
        title3:'Technical visit schedule',
        title4:'Social activity schedule',
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