<template>
  <div class="bj">
    <Title :name="name"></Title>
    <div class="itemList">
      <div class="item" v-for="(item,index) in list" :key="index">
        <img :src="item.url" :alt="item.nameF" />
        <p>{{ item.nameF}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
export default {
  data() {
    return {
      name: "主办方与承办方",
      list: [
        { url: require("../assets/image/f1.png"), nameF: "国际园艺学会" },
        { url:require( "../assets/image/f2.png"), nameF: "北京市人民政府" },
        { url: require("../assets/image/f3.png"), nameF: "中国园艺学会" },
        { url: require("../assets/image/f4.jpg"), nameF: "中国农业大学" },
        { url: require("../assets/image/f5.jpg"), nameF: "中国花卉协会" },
        { url: require("../assets/image/f1.png"), nameF: "北京市园林绿化局" },
        { url: require( "../assets/image/f2.png"), nameF: "北京市门头沟区人民政府" },
        { url: require("../assets/image/f3.png"), nameF: "中国花卉协会月季分会" },
        { url: require("../assets/image/f4.jpg"), nameF: "中国农业大学园艺学院" },
        { url: require("../assets/image/f5.jpg"), nameF: "北京花卉协会" },
      ],
    };
  },
  components: {
    Title,
  },
};
</script>

<style scoped>
.bj {
  background: #f6f6f6;
  padding: 50px 0 65px 0;
}
.itemList {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  width: 200px;
  height: 315px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 2px;
  margin-bottom:30px;
}
.item img {
  margin: 35px auto 45px auto;
  max-width: 100%;
  height:120px;
}
.item p {
  font-size: 18px;
  font-weight: bold;
  color: #4a4a4a;
}
</style>