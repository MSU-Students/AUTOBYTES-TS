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

<script>
export default {
  name: "HeaderLayout",

  data() {
    return {};
  },

  created() {
    console.log(this.$store);
  },

  computed: {
    leftDrawerState: {
      get() {
        return this.$store.state.siteNav.leftDrawerState;
      },
      set(val) {
        this.$store.dispatch("siteNav/leftDrawerState", val);
      }
    }
  }
};
</script>

<style></style>
