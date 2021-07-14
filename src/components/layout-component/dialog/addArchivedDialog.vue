<template>
  <q-dialog v-model="showArchived" persistent>
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5">ADD</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="showArchivedDialog(false)" />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <q-file
            filled
            v-model="file"
            label="Import File"
            :style="$q.screen.lt.md ? 'width: 295px' : 'width: 470px'"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn class="full-width" size="lg" color="primary" label="SAVE" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {Vue, Options} from "vue-class-component";
import { mapState,mapActions } from "vuex";

@Options({
  computed: {
    ...mapState('ui',['showArchived'])
  },
  methods: {
    ...mapActions('ui',['showArchivedDialog'])
  },
})

export default class addArchivedDialog extends Vue {}


</script>

<style></style>
