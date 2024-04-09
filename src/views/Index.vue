<template>
  <div>
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
    Foot
  },
  data() {
    return {
      isNav:0,
    }
  }
};
</script>

<style>
</style>