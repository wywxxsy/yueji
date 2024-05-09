<template>
  <div class="content">
      <eng_Head :isNav="isNav"></eng_Head>
      <eng_Block1></eng_Block1>
      <eng_Block2></eng_Block2>
      <eng_Block3></eng_Block3>
      <eng_Block4></eng_Block4>
      <eng_Block5></eng_Block5>
      <eng_Block6></eng_Block6>
      <eng_Block7></eng_Block7>
      <eng_Block8></eng_Block8>
      <eng_Block9></eng_Block9>
      <Foot></Foot>
      <eng_SlideNav></eng_SlideNav>
  </div>
</template>

<script>
import eng_Head from "@/components/eng_Head";
import eng_Block1 from "@/components/eng_Block1";
import eng_Block2 from "@/components/eng_Block2";
import eng_Block3 from "@/components/eng_Block3";
import eng_Block4 from "@/components/eng_Block4";
import eng_Block5 from "@/components/eng_Block5";
import eng_Block6 from "@/components/eng_Block6";
import eng_Block7 from "@/components/eng_Block7";
import eng_Block8 from "@/components/eng_Block8";
import eng_Block9 from "@/components/eng_Block9";
import Foot from "@/components/Foot";
import eng_SlideNav from "@/components/eng_SlideNav";
export default {
  components: {
    eng_Head,
    eng_Block1,
    eng_Block2,
    eng_Block3,
    eng_Block4,
    eng_Block5,
    eng_Block6,
    eng_Block7,
    eng_Block8,
    eng_Block9,
    Foot,
    eng_SlideNav
  },
  data() {
    return {
      isNav:0,
     
    }
  },
 
 
};
</script>

<style>
#navbar{width:1300px;margin: 0 auto;height:60px;line-height: 60px;position:fixed;top:0;left:0;z-index:999;background:#fff;border-bottom:1px solid #ccc;}
#navbar ul{list-style: none;}
#navbar li{float: left;margin-right: 20px;cursor: pointer;}
#navbar li.active {
  background:#f00;color:#fff;
}
</style>