<template>
  <q-header bordered class="bg-primary text-black">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        color="white"
        @click="leftDrawerState = !leftDrawerState"
      />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
export default class AdminHeaderLayout extends Vue {
  name = "AdminHeaderLayout";

  get leftDrawerState() {
    return this.$store.state.uiInterface.leftDrawerState;
  }
  set leftDrawerState(val) {
    this.$store.dispatch("siteNav/leftDrawerState", val);
  }
}
</script>

<style></style>
