<template>
  <q-dialog
    v-model="showBulletin"
    persistent
    @hide="hideDialog()"
    @show="showDialog()"
  >
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div v-if="payload.onUpdate" class="text-h5">UPDATE</div>
        <div v-else class="text-h5">ADD</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="showBulletinDialog(false)"
        />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <q-input
            ref="title"
            filled
            v-model="bulletin.title"
            label="Title"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            filled
            ref="date"
            v-model="bulletin.date"
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
                  <q-date v-model="bulletin.date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            ref="bulletinFrom"
            filled
            v-model="bulletin.bulletinFrom"
            label="From"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-select
            filled
            ref="bulletinSemester"
            v-model="bulletin.bulletinSemester"
            :options="sem"
            label="Semester"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-select
            ref="bulletinType"
            filled
            v-model="bulletin.bulletinType"
            :options="option"
            label="Bulletin Type"
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-file
            filled
            ref="bulletinImage"
            v-model="file"
            label="Attach Image"
            :style="$q.screen.lt.md ? 'width: 295px' : 'width: 470px'"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
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
          :label="payload.onUpdate ? 'UPDATE' : 'SAVE'"
          :loading="isUpload"
          :disable="isUpload"
          @click="payload.onUpdate ? updateDocument() : saveDocument()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import IBulletin from "src/interfaces/bulletin.interface";
import mediaService from "src/services/media.service";

class Props {
  readonly payload!: any;
}

interface RefsVue extends Vue {
  validate(): void;
  next(): void;
  hasError: boolean;
}

@Options({
  computed: {
    ...mapState("ui", ["showBulletin"]),
    ...mapState("bulletin", ["createBulletin"]),
  },
  methods: {
    ...mapActions("ui", ["showBulletinDialog"]),
    ...mapActions("bulletin", ["addBulletin", "updateBulletin"]),
  },
})
export default class addBulletinDialog extends Vue.with(Props) {
  isSubmit = false;
  isUpload = false;
  option = ["Events", "News & Updates", "Achievements"];
  sem = ["1st Semester", "2nd Semester"];

  bulletin: any = {
    title: "",
    date: "",
    bulletinFrom: "",
    bulletinSemester: "",
    bulletinType: "",
    url: "",
  };
  file: File[] = [];

  declare $refs: {
    title: RefsVue;
    date: RefsVue;
    bulletinFrom: RefsVue;
    bulletinSemester: RefsVue;
    bulletinType: RefsVue;
  };
  formHasError!: boolean;
  createBulletin!: boolean;
  showBulletin!: boolean;
  showBulletinDialog!: (show: boolean) => void;
  addBulletin!: (payload: any) => Promise<void>;
  updateBulletin!: (payload: any) => Promise<void>;

  showDialog() {
    console.log(this.payload);
    this.bulletin = { ...this.payload.data };
  }

  hideDialog() {
    this.bulletin = {
      title: "",
      date: "",
      bulletinFrom: "",
      bulletinSemester: "",
      bulletinType: "",
      url: "",
    };
    this.showBulletinDialog(false);
  }

  fileChoose(val: any) {
    this.file = val;
  }

  async saveDocument() {
    this.isSubmit = true;
    this.$refs.title.validate();
    this.$refs.date.validate();
    this.$refs.bulletinFrom.validate();
    this.$refs.bulletinSemester.validate();
    this.$refs.bulletinType.validate();

    if (
      this.$refs.title.hasError ||
      this.$refs.date.hasError ||
      this.$refs.date.hasError ||
      this.$refs.bulletinFrom.hasError ||
      this.$refs.bulletinSemester.hasError ||
      this.$refs.bulletinType.hasError
    ) {
      this.formHasError = true;
    } else {
      const media = await mediaService.uploadMedia(this.file);
      const res: any = await this.addBulletin({
        ...this.bulletin,
        url: media.id,
      });
      this.isSubmit = false;
      this.showBulletinDialog(false);
    }
  }

  async updateDocument() {
    if (this.file.length != 0) {
      const media = await mediaService.uploadMedia(this.file);
      const res: any = await this.updateBulletin({
        ...this.bulletin,
        url: media.id,
      });
    } else {
      const res: any = await this.updateBulletin(this.bulletin);
    }
    this.isSubmit = false;
    this.showBulletinDialog(false);
  }
}
</script>

<style></style>
