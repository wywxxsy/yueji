<template>
  <div class="bj" id="eng_zbf">
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
      name: "Organizers",
      list: [
        { url: require("../assets/image/f1.png"), nameF: "International Society for Horticultural Science (ISHS)" },
        { url:require( "../assets/image/f2.png"), nameF: "Beijing Municipal People's Government" },
        { url: require("../assets/image/f4.jpg"), nameF: "China Agricultural University (CAU)" },
        { url: require("../assets/image/f5.jpg"), nameF: "China Flower Association" },
        { url: require("../assets/image/f3.png"), nameF: "Chinese Society for Horticultural Science (CSHS)" },

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
  line-height: 26px;
  font-size: 18px;
  font-weight: bold;
  color: #4a4a4a;
}
</style>