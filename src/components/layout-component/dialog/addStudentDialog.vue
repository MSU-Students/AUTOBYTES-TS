<template>
  <q-dialog
    v-model="showAccount"
    persistent
    @hide="hideDialog()"
  >
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5">ADD</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="showAccountDialog(false)"
        />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <q-file
            filled
            v-model="file"
            label="Import File"
            :style="$q.screen.lt.md ? 'width: 295px' : 'width: 470px'"
            @update:model-value="fileChoose($event)"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn
          class="full-width"
          size="lg"
          color="primary"
          label="SAVE"
          @click="upload()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapState, mapActions } from "vuex";

@Options({
  computed: {
    ...mapState("ui", ["showAccount"]),
    ...mapState("student", ["students"]),
  },
  methods: {
    ...mapActions("ui", ["showAccountDialog"]),
    ...mapActions("student", ["addStudents", "updateStudent"]),
  },
})
export default class StudentDialog extends Vue{
  file = [];
  isUpload = false;
  showAccount!: boolean;
  showAccountDialog!: (show: boolean) => void;
  addStudents!: (payload: any) => Promise<void>;


  hideDialog() {
    this.file = []
  }

  fileChoose(val: any) {
    this.file = val;
  }

  async upload() {
    this.isUpload = true;
    await this.addStudents(this.file);
    this.isUpload = false;
    this.showAccountDialog(false);
  }
}
</script>

<style></style>
