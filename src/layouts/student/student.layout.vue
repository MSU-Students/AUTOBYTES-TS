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
import { Vue, Options, prop } from "vue-class-component";
const Header = () => import("../../components/layout-component/student/header.layout.vue");
const Drawer = () => import("../../components/layout-component/student/drawer.layout.vue");

@Options({})
export default class StudentLayout extends Vue{
  name= "StudentLayout"
  components= {
    Header,
    Drawer
  }
};
</script>
