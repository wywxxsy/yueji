<template>
  <div class="sidebar-nav">
    <ul class="navs">
      <li
        :class="{ active: active === index }"
        v-for="(item, index) in contenterer"
        @click="scrollTo(item.route)"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contenterer2: ['#hyc','#zbf',"#zjbg", "#dhrc", "#regist",'#zytj','#jtzs','#wyh'],
      contenterer: [
      {title:'欢迎词',route:'hyc'},
      {title:'主办方与承办方',route:'zbf'},
      {title:'征集报告',route:'zjbg'},
      {title:'大会日程',route:'dhrc'},
      {title:'注册',route:'regist'},
      {title:'摘要/全文提交',route:'zytj'},
      {title:'交通和住宿',route:'jtzs'},
      {title:'委员会',route:'wyh'},
      ],
      active: 0,
    };
  },
 
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.onScroll, false);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const navContents = document.querySelectorAll(
        `.content  ${this.contenterer2}`
      );
      // console.log(navContents);
      const offsetTopArr = [];
      navContents.forEach((item) => {
        offsetTopArr.push(item.offsetTop);
      });
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n;
        }
      }
      this.active = navIndex;
    },
    scrollTo(id) {
      const targetOffsetTop = document.getElementById(id).offsetTop;
      console.log(targetOffsetTop);
      let scrollTop =document.documentElement.scrollTop || document.body.scrollTop ;
      const STEP = 50;
      if (scrollTop > targetOffsetTop) {
        smoothUp();
      } else {
        smoothDown();
      }
      function smoothDown() {
        if (scrollTop < targetOffsetTop) {
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop - 100;
          document.documentElement.scrollTop = scrollTop - 100;
          requestAnimationFrame(smoothDown);
        }
      }
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop - 100;
          document.documentElement.scrollTop = scrollTop - 100;
          requestAnimationFrame(smoothUp);
        }
      }
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
  z-index:999;
  position: fixed;
  right: 0;
  bottom: 100px;
  background: rgb(248, 216, 222, 0.5);
  padding: 20px;
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
  color: #333;
  display: block;
  padding: 5px 10px;
}

.sidebar-nav li.active {
 color:#9e0203
}

@media (max-width: 768px) {
  .sidebar-nav {
    display: none;
  }
}
</style>