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
import { Vue, Options } from "vue-class-component";
import Header from "src/components/layout-component/admin/header.layout.vue";
import Drawer from "src/components/layout-component/admin/drawer.layout.vue";

@Options({
  components: {
    Header,
    Drawer,
  },
})
export default class StudentLayout extends Vue {}
</script>
