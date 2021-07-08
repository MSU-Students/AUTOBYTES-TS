<template>
  <q-layout view="lHh LpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Vue, Options, prop } from "vue-class-component";

@Options({
  name: "MainLayout",
})
export default class MainLayout extends Vue {}
</script>
