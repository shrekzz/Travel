import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home";
import City from "@/views/City/City";
import Detail from "@/views/Detail/Detail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/city",
    name: "City",
    component: City,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
