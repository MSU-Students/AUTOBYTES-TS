<template>
  <q-dialog v-model="showRecords" persistent @hide="hideDialog()">
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5">ADD</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="showRecordsDialog(false)"
        />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <q-input ref="title" filled v-model="records.title" label="Title" />
          <q-input
            ref="date"
            filled
            v-model="records.date"
            mask="date"
            :rules="['date']"
            label="Date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="records.date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            ref="recordsFrom"
            filled
            v-model="records.recordsFrom"
            label="Recorded By"
          />
          <q-select
            ref="recordsSemester"
            filled
            v-model="records.recordsSemester"
            :options="sem"
            label="Semester"
          />
          <q-select
            ref="recordsType"
            filled
            v-model="records.recordsType"
            :options="types"
            label="Record Type"
          />
          <q-file
            filled
            v-model="file"
            multiple
            label="Attach Image"
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
          @click="saveDocument()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import IRecords from "src/interfaces/records.interface";
import mediaService from "src/services/media.service";

interface RefsVue extends Vue {
  validate(): void;
  next(): void;
  hasError: boolean;
}

@Options({
  computed: {
    ...mapState("ui", ["showRecords"]),
    ...mapState("record", ["createRecords", "types"]),
  },
  methods: {
    ...mapActions("ui", ["showRecordsDialog"]),
    ...mapActions("record", ["addRecords", "getRecordType"]),
  },
})
export default class addRecordsDialog extends Vue {
  isSubmit = false;
  isUpload = false;
  file: File[] = [];
  sem = ["1st Semester", "2nd Semester"];
  types = ["Minutes of Meetings", "Bills", "Receipt"];

  records: IRecords = {
    title: "",
    date: "",
    recordsFrom: "",
    recordsSemester: "",
    recordsType: "",
    url: "",
  };

  declare $refs: {
    title: RefsVue;
    date: RefsVue;
    recordsFrom: RefsVue;
    recordsSemester: RefsVue;
    recordsType: RefsVue;
  };

  formHasError!: boolean;
  createRecords!: boolean;
  showRecords!: boolean;
  // types!: string[];
  showRecordsDialog!: (show: boolean) => void;
  addRecords!: (payload: any) => Promise<void>;
  getRecordType!: () => void;

  // showDialog() {
  //   //
  //   this.getRecordType();
  //   console.log("ui", this.types);
  // }

  fileChoose(val: any) {
    this.file = val;
  }

  hideDialog() {
    this.records = {
      title: "",
      date: "",
      recordsFrom: "",
      recordsSemester: "",
      recordsType: "",
      url: "",
    };
    this.showRecordsDialog(false);
  }

  async saveDocument() {
    this.isSubmit = true;
    this.$refs.title.validate();
    this.$refs.date.validate();
    this.$refs.recordsFrom.validate();
    this.$refs.recordsSemester.validate();
    this.$refs.recordsType.validate();

    if (
      this.$refs.title.hasError ||
      this.$refs.date.hasError ||
      this.$refs.date.hasError ||
      this.$refs.recordsFrom.hasError ||
      this.$refs.recordsSemester.hasError ||
      this.$refs.recordsType.hasError
    ) {
      this.formHasError = true;
    } else {
      console.log(this.records, this.file);
      const media = await mediaService.uploadMedia(this.file);
      console.log("media: ", media);
      const res: any = await this.addRecords({
        ...this.records,
        url: media.id,
      });
      this.isSubmit = false;
      this.showRecordsDialog(false);
    }
  }

  // createValue(val: any, done: any) {
  //   // specific logic to eventually call done(...) -- or not
  //   this.records.recordsType = val;
  //   done(val);
  //   // done callback has two optional parameters:
  //   //  - the value to be added
  //   //  - the behavior (same values of new-value-mode prop,
  //   //    and when it is specified it overrides that prop –
  //   //    if it is used); default behavior (if not using
  //   //    new-value-mode) is to add the value even if it would
  //   //    be a duplicate
  // }
}
</script>

<style></style>
