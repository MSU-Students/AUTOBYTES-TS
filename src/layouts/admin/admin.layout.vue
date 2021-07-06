<template>
  <q-layout view="lHh LpR fFf">
    <!-- Header -->
    <Header />
    <!-- Drawer -->
    <Drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const Header = () => import("../../components/layout-component/admin/header.layout.vue");
const Drawer = () => import("../../components/layout-component/admin/drawer.layout.vue");

export default {
  name: "AdminLayout",
  components: {
    Header,
    Drawer
  }
};
</script>
