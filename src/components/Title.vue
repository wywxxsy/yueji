<template>
  <div class="titleBox">
    <img src="../assets/image/titleLeft.png" />
    <div>{{ name }}</div>
    <img src="../assets/image/titleRight.png" />
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.titleBox {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #292828;
  font-size: 38px;
  font-weight: bold;
  margin: 0 auto 70px auto;
}
.titleBox img{margin:0 35px;}
</style>