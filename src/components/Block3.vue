<template>
  <div class="bj">
    <Title :name="title"></Title>
    <div class="list" >
        <p v-for="(item,index) in list" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
export default {
  data() {
    return {
      title: "赞助单位",
      list:['北京市园林绿化局','顺义区政府']

    };
  },
  components: {
    Title,
  },
};
</script>

<style scoped>
.bj {
  background: #fff;
  padding: 50px 0 65px 0;
}
.list{width:1200px; margin:0 auto 50px auto;display: flex; justify-content: left;}
.list p{display: block; width:20%;text-align: center;font-size:18px;font-weight: bold;color:#4a4a4a;}
</style>