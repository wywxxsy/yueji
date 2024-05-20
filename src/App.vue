<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

 // 是否为手机端
//  const flag = navigator.userAgent.match(
//   /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
// );
// if (flag) {
//     console.log('移动端');
//   require('@/assets/css/mobileCommon.css');
// }

export default {
    metaInfo: {
    // 定义CSP规则
    meta: [
      {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self'; script-src 'self' http://192.168.8.64:8049; img-src 'self' http://192.168.8.64:8049;"
      }
    ]
  }
}
</script>

<style >
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
a{text-decoration: none;}

.el-carousel__container{height: 600px !important;z-index: 9;}
.el-carousel__item {width: 100% !important;height: 600px !important;}
.el-carousel__item img{width:100% !important;height:100% !important;display:block !important;margin:0 auto !important;object-fit:fill !important;}
.el-carousel__arrow {background: rgba(203, 90, 99, 0.66);}
.el-carousel__indicators--outside button{background: red;opacity: 0.4;height: 3px;}

/* 移动端适配 */
@media (max-width: 768px) {
    *{box-sizing: border-box;}
    html,body,#app,.wid30,.wid68{width: 100% !important;}
    /* #app{overflow-x: hidden;} */
    .nav{width: 100%;height: auto !important;}
    .centerBox{width: 100% !important;}
    .flexBox{display: block !important;}
    .flexBox li a{height:auto !important;line-height:50px !important;font-size: 14px !important; }
    .flexBox li:first-child a{height:100px !important;line-height:100px !important;font-size: 20px !important;}
    /* .rightBar{right: 100px !important;} */
    .centerImg,.contentBox{width: 90% !important;}
    .centerImg{padding-top: 30px !important;}
    .contentBox{margin:50px auto !important;}
    .title{padding: 20px 0px 0px !important;}
    .titleBox{font-size: 20px !important;}
    .titleBox img{width: 40px;margin: 0 20px !important;}
    .bigBj{height: auto !important;}
    .toggleNav{display: block !important;position: absolute;right: 10px;top: 10px;}
    .toggleNav img{width: 36px;transition: all 0.3s ease-in;}
    .toggleHeight{height: 100px;overflow: hidden;}
    .toggleArrow img{transform: rotate(90deg);}
    .jtBox .wid50{width: 100% !important;}

    .itemList,.mb20,.redTitle,.contentCenter,.Map,.jtBox,.weiYuanHui,.list{width: 90% !important;margin: 0 auto;}
    .itemList .item{width: 30% !important;height: auto !important;padding-bottom: 30px !important;position: relative;}

    .redTitle{margin:20px auto !important; font-size: 20px !important;}
    .richeng_img{width: 100%;}
    .contTitle{padding-bottom:10px !important;font-size: 16px !important;}
    .contDesc{margin-top:10px !important;line-height: 30px !important;}
    .wid100{margin-top: 20px !important;}
    .contBox{padding: 20px 0 !important;}
    .Map{display: block;}
    .jtBox{margin: 75px auto !important;}
    .pd35{padding: 10px 20px !important;}
    .weiYuanHui{}
    .list p{width: auto !important;margin:0 20px;}
    .item img{height: auto !important;}
    .itemList .item p{font-size: 14px !important;line-height: 24px;position: absolute;left: 0;right: 0;bottom: 10px;text-align: center;}
    .zhuanTi{font-size: 16px !important;}
    .ztList span{font-size: 14px !important;word-break: break-word;}
    .m_cont2 .contBox{display: block !important;}
    .m_cont2 .contBox div{width: 90% !important;margin: 0 auto !important;}
    table.jjrqTable tr td,table.moneyTable tr td{padding: 0 20px !important; font-size: 16px !important;}
    .pinkBj{padding: 30px 10px !important;}
    .pinkBj div{font-size: 18px !important;}
    .redBtn{margin: 10px auto !important;}
    .foot{height: auto !important; padding: 20px 10px !important;word-break: break-word;}
    .blueTitle{margin-bottom:0 !important;}
    .blueTitle img{width: 20px !important;height: 20px !important;}
    .blueTitle span{font-size: 18px !important;}
    .ml20{margin-left: 15px !important;}
    .rightBar{justify-content:start !important;right: 0 !important; left: 80px !important;}
}



</style>
