import { createRouter, createWebHistory } from "vue-router";

import Add from "@/components/Add.vue";
import Edit from "@/components/Edit.vue";
import List from "@/components/List.vue";
import View from "@/components/View.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/view/:id",
    name: "View",
    component: View,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
