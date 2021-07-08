<template>
  <router-view />
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import userService from "src/services/user.service";

export default class App extends Vue {
  async created() {
    await userService.getUsers();
  }
}
</script>
