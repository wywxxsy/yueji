<template>
  <div class="sidebar-nav">
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        <router-link :to="item.route">{{ item.title }}</router-link>
      </li>
    </ul>
    <div @click="scrollToTop">
      <img src="@/assets/image/backTop.png" class="mt20" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
      { title: "欢迎词", route: "/#hyc" },
      { title: "主办方与承办方", route: "/#zbf" },
        { title: "征集报告", route: "/#zjbg" },
        { title: "大会日程", route: "/#dhrc" },
        { title: "注册", route: "/#regist" },
        { title: "摘要/全文提交", route: "/#zytj" },
        { title: "交通和住宿", route: "/#jtzs" },
        { title: "委员会", route: "/#wyh" },
        { title: "参观", route: "/#section7" },
        { title: "会议LIVE", route: "/Live" },
      ],
    };
  },
  methods: {
    scrollToTop() {
      this.$scrollToTop();
    },
  },
};
</script>

<style scoped>
.mt20 {
  margin-left: 20px;
  margin-top: 10px;
}
.sidebar-nav {
  position: fixed;
  right: 0;
  top: 40%;
  background: rgb(248, 216, 222, 0.5);
  padding: 25px 25px;
  font-size: 18px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-left: 2px solid #fff;
}
.sidebar-nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-nav li {
  margin-bottom: 10px;
}

.sidebar-nav a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 5px 10px;
}

.sidebar-nav a:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .sidebar-nav {
    display: none;
  }
}
</style>