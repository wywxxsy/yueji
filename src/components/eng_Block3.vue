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
      title: "Organizers",
      list:[
        'Beijing Gardening and Greening Bureau',
        "Mentougou District People's Government of Beijing Municipality",
        'Rose Branch of China Flower Association',
        'College of Horticulture - China Agricultural University',
        'Beijing Flower Association'
      ]

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
.list p{display: block;line-height: 26px; width:20%;text-align: center;font-size:18px;font-weight: bold;color:#4a4a4a;}
</style>