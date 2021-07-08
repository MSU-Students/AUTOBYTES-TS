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

<script lang="ts">
import { Vue, Options } from "vue-class-component";
const Header = () =>
  import("../../components/layout-component/admin/header.layout.vue");
const Drawer = () =>
  import("../../components/layout-component/admin/drawer.layout.vue");

@Options({
  components: {
    Header,
    Drawer,
  },
})
export default class AdminLayout extends Vue {}
</script>
