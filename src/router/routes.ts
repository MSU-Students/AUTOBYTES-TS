import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("src/layouts/main.layout.vue"),
    children: [
      { path: "", component: () => import("src/pages/landing.page.vue") },
      { path: "login", component: () => import("src/pages/login.page.vue") },
    ],
  },
  {
    path: "/s/",
    component: () => import("src/layouts/student/student.layout.vue"),
    children: [
      {
        path: "bulletin",
        component: () => import("src/pages/student/bulletin.page.vue"),
      },
      {
        path: "clearance",
        component: () => import("src/pages/student/clearance.page.vue"),
      },
      {
        path: "profile",
        component: () => import("src/pages/student/profile.page.vue"),
      },
    ],
  },
  {
    path: "/a/",
    name: "admin",
    component: () => import("src/layouts/admin/admin.layout.vue"),
    meta: { isAdmin: true },
    children: [
      {
        path: "attendance",
        name: "admin-attendance",
        component: () => import("src/pages/admin/attendance.page.vue"),
      },
      {
        path: "bulletin",
        name: "admin-bulletin",
        component: () => import("src/pages/admin/bulletin.page.vue"),
      },
      {
        path: "clearance",
        name: "admin-clearance",
        component: () => import("src/pages/admin/clearance.page.vue"),
      },
      {
        path: "records",
        name: "admin-records",
        component: () => import("src/pages/admin/records.page.vue"),
      },
      {
        path: "student",
        name: "admin-student",
        component: () => import("src/pages/admin/student.page.vue"),
      },
      {
        path: "archived",
        name: "admin-archived",
        component: () => import("src/pages/admin/archived.page.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
