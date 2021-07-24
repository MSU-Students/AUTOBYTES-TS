<template>
  <q-dialog v-model="showMedia" @update:model-value="showMediaDialog(false)">
    <q-img :src="`http://localhost:3000/media/id?id=${payload.data.url}`" />
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";

class Props {
  readonly payload!: string;
}

@Options({
  computed: {
    ...mapState("ui", ["showMedia"]),
  },
  methods: {
    ...mapActions("ui", ["showMediaDialog"]),
  },
})
export default class MediaDialog extends Vue.with(Props) {
  showMedia!: boolean;
  showMediaDialog!: (show: boolean) => void;
}
</script>

<style></style>
