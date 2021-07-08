<template>
  <q-header bordered class="bg-primary text-black">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        color="white"
        @click="leftDrawer((leftDrawerState = !leftDrawerState))"
      />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";
@Options({
  computed: {
    ...mapState("ui", ["leftDrawerState"]),
  },
  methods: {
    ...mapActions("ui", ["leftDrawer"]),
  },
})
export default class StudentHeaderLayout extends Vue {
  leftDrawerState!: boolean;
  leftDrawer!: (isShow: boolean) => void;
}
</script>

<style></style>
