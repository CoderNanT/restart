import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// import Home from '../views/home.vue'
// import About from '../views/about.vue'

// 路由的懒加载
// const Home = () => import(/* webpackChunkName: 'home' */"../views/home.vue");
const Home = () => import("../views/home.vue");
const About = () => import("../views/about.vue");
const User = () => import("../views/user.vue");
const NotFound = () => import("../views/notFound.vue");
const Product = () => import("../views/product.vue");
const Message = () => import("../views/message.vue");
const Vip = () => import("../views/vip.vue");
const Login = () => import("../views/login.vue");

const router = createRouter({
  // 指定采用的模式: hash
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      meta: { name: "shy", age: "24", game: "lol" },
      component: Home,
      children: [
        { path: "/home", redirect: "/home/product" },
        { path: "product", component: Product },
        { path: "message", component: Message },
      ],
    },
    { path: "/about", component: About },
    { path: "/user/:userId", component: User },
    { path: "/login", component: Login },
    { path: "/vip", component: Vip },
    { path: "/:pathMatch(.*)", component: NotFound },
  ],
});

router.beforeEach((to, from) => {
  console.log("to", to);
  console.log("from", from);

  if (to.path === "/vip" || to.path === "/home/vip") {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      // return "/login"
      return {
        path: "/login",
      };
    }
  }
});

// 动态管理路由
let isAdmin = true;
if (isAdmin) {
  // 动态添加一级路由
  router.addRoute({
    path: "/admin",
    component: () => import("../views/admin.vue"),
  });

  // 动态添加二级路由
  router.addRoute("home", {
    path: "vip",
    component: Vip,
  });
}

// 获取router中所有的映射路由对象
console.log(router.hasRoute("home"));
console.log(router.getRoutes());

export default router;
