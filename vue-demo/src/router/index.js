// 路由器配置
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index'
import Menu1 from '../pages/Menu1'
import SubMenu1 from '../pages/SubMenu1'
import SubMenu2 from '../pages/SubMenu2'

Vue.use(VueRouter);

export default new VueRouter({
  // 配置多个路由 route （注意区分 route 和 router）
  routes: [
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/menu1',
      component: Menu1,
      children: [
        {
          // 可以用绝对路由
          path: '/menu1/submenu1',
          component: SubMenu1
        },
        {
          // 也可以用相对路由
          path: 'submenu2',
          component: SubMenu2
        },
        {
          path: '/',
          redirect: 'submenu1'
        }
      ]
    },
    // 配置默认路由重定向
    {
      path: '/',
      redirect: '/index'
    },
  ]
});

