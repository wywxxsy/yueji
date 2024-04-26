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
      title: "承办方",
      list:['北京市园林绿化局','北京市门头沟区人民政府','中国花卉协会月季分会','中国农业大学园艺学院','北京花卉协会']

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