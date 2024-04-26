<template>
  <div>
    建设中，敬请期待
  </div>
</template>
  <script>
export default {
  props: {},
  data() {
    return {
      contenterer2: ["#aaa", "#bbb", "#ccc"],
    contenterer: [{title:'标题1',route:'aaa'},
    {title:'标题2',route:'bbb'},
    {title:'标题3',route:'ccc'}
    ],
      active: 0,
      //   content:
      //     '<h1 id="标题1">一、标题1</h1>\n<p>内容1</p>\n<p>内容1</p>\n<p>内容1</h1>\n<p>内容1</p>\n<p>内容1</p>\n<p>内容1</p>\n<h1 id="标题2"><br />二、标题2</h1>\n<p>内容2</p>\n<p>内容2</p>\n<p>内容2</p>\n<p>内容2</p>\n<p>内容2</p>\n<p>内容2</p>\n<p>内容2</p>\n<p>内容2</p>\n<h1 id="标题3"><br />三、标题3</h1>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>&nbsp;</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>内容3</p>\n<p>&nbsp;</p>',
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
      console.log(navContents);
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
      let scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
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
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
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
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          requestAnimationFrame(smoothUp);
        }
      }
    },
  },
};
</script>
   
  <style scoped>
#标题1,
#标题2,
#标题3 {
  height: 1000px;
}
.content {
  background-color: white;
  width: 500px;
}
.content div {
  width: 100%;
  height: 600px;
  font-size: 36px;
  padding: 20px;
  background-color: #7ec384;
}
.content div:nth-child(2n) {
  background-color: #847ec3;
}
.navs {
  position: fixed;
  top: 80px;
  left: 700px;
  background-color: #efefef;
}
.navs li {
  padding: 0 20px;
  line-height: 1.6;
  font-size: 24px;
}
.navs .active {
  color: #847ec3;
  background-color: #e2e2e2;
}
</style>