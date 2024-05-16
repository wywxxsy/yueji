import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import eng_Index from '../views/eng_Index.vue'
import Login from '@/views/Login.vue'
import Regist from '@/views/Regist.vue'
import Show from '@/views/Show.vue'
import Live from '@/views/Live.vue'
import Live_player from '@/views/Live_player.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'eng_index',
    component: eng_Index,
    meta:{
      title:'首页_第九届国际月季大会'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta:{
      title:'首页_第九届国际月季大会'
    }
  },
  {
    path: '/eng_index',
    name: 'eng_index',
    component: eng_Index,
    meta:{
      title:'The 9th International Rose Symposium'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title:'登录_第九届国际月季大会'
    }
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist,
    meta:{
      title:'参会注册_第九届国际月季大会'
    }
  },
  {
    path: '/Show',
    name: 'show',
    component: Show,
    meta:{
      title:'参观_第九届国际月季大会'
    }
  },
  {
    path: '/Live',
    name: 'live',
    component: Live,
    meta:{
      title:'会议直播_第九届国际月季大会',
      requireAuth:true
    }
  },
  {
    path: '/Live_player',
    name: 'live_player',
    component: Live_player,
    meta:{
      title:'直播历史记录_第九届国际月季大会',
      requireAuth:true
    }
  }
 
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }

})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '第九届国际月季大会'; // 获取目标路由对应的标题，若没有则默认为第九届国际月季大会


  if(to.meta.requireAuth){//判断该路由是否需要登录权限
    const isPay = localStorage.getItem('Payment');
    const isLogin = Boolean(localStorage.getItem('ID'));//将需要id转换为布尔值。如果转换后的布尔值为false，则为空,则未登录
    // console.log(isPay)
    if(isLogin && isPay=='是'){//通过localStorage的isPay获取当前的缴费验证信息
        next()
    }else if(isLogin && isPay=='否'){
      const result = window.confirm('缴费成功并审核通过后方可观看直播及回放，请耐心等待审核结果。');
      if (result) {
        next({
          path:"/",
          // query:{redirect:to.fullPath}//将跳转的路由path作为参数，登陆成功后跳转到该路由
      })
      } else {
        // 用户点击了"取消"
        // console.log('用户点击了取消');
      }
        
      }
      else{
        const result = window.confirm('缴费成功并审核通过后方可观看直播及回放，请先登录！');
        // console.log(to.path)
        if (result) {
          next({
            path:"/login",
           query:{redirect:to.path}//将跳转的路由path作为参数，登陆成功后跳转到该路由
        },

        )
        } else {
          // 用户点击了"取消"
          // console.log('用户点击了取消');
        }
      }
  }else{
      next();
  } 

});

// 重写 push 和 replace 方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
 
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router
