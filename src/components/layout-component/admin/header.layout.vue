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
import { Vue, Options, prop } from "vue-class-component";
@Options({})
export default class AdminHeader extends Vue {
  name = "HeaderLayout";

  get leftDrawerState() {
    return this.$store.state.siteNav.leftDrawerState;
  }
  set leftDrawerState(val) {
    this.$store.dispatch("siteNav/leftDrawerState", val);
  }
}
</script>

<style></style>
