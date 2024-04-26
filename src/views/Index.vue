<template>
  <div class="content">
      <Head :isNav="isNav"></Head>
      <Block1></Block1>
      <Block2></Block2>
      <Block3></Block3>
      <Block4></Block4>
      <Block5></Block5>
      <Block6></Block6>
      <Block7></Block7>
      <Block8></Block8>
      <Block9></Block9>
      <Foot></Foot>
      <SlideNav></SlideNav>
  </div>
</template>

<script>
import Head from "@/components/Head";
import Block1 from "@/components/Block1";
import Block2 from "@/components/Block2";
import Block3 from "@/components/Block3";
import Block4 from "@/components/Block4";
import Block5 from "@/components/Block5";
import Block6 from "@/components/Block6";
import Block7 from "@/components/Block7";
import Block8 from "@/components/Block8";
import Block9 from "@/components/Block9";
import Foot from "@/components/Foot";
import SlideNav from "@/components/SlideNav";
export default {
  components: {
    Head,
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block6,
    Block7,
    Block8,
    Block9,
    Foot,
    SlideNav
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