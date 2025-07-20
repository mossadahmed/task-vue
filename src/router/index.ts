import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue" ;

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "ProductPage",
    component: () => import("@/components/ProductPag/ProductPage.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: () => import("@/components/productDetals/ProductDetels.vue"),
    props: true,
  },
  {
    path: "/productcard",
    name: "productCard",
    component: () => import("@/components/productCard.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/MyApout.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/components/MyConuct.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
