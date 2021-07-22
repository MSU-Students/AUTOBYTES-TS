<template>
  <q-dialog v-model="showAttendance" persistent @hide="hideDialog()">
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5">ADD</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="showAttendanceDialog(false)"
        />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <q-input
            filled
            v-model="attendanceItem.eventName"
            label="Event Name"
          />
          <q-input v-model="attendanceItem.date" filled label="Event Date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="attendanceItem.date" mask="MM/DD/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            filled
            v-model="attendanceItem.amount"
            mask="#####"
            label="Event Amount"
          />
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
import IAttendance from "src/interfaces/attendance.interface";
import IUpload from "src/interfaces/upload.interface";
import IClearance from "src/interfaces/clearance.interface";
import IBulletin from "src/interfaces/bulletin.interface";
import IStudents from "src/interfaces/students.interface";
import { date } from "app/node_modules/quasar/dist/types";

interface RefsVue extends Vue {
  validate(): void;
  next(): void;
  hasError: boolean;
}

@Options({
  computed: {
    ...mapState("ui", ["showAttendance"]),
    ...mapState("attendance", ["createAttendance", "attendances"]),
    ...mapState("bulletin", ["bulletin"]),
    ...mapState("clearance", ["clearance"]),
    ...mapState("student", ["students"]),
  },
  methods: {
    ...mapActions("ui", ["showAttendanceDialog"]),
    ...mapActions("attendance", ["addAttendance", "getAttendance"]),
    ...mapActions("bulletin", ["getBulletins"]),
    ...mapActions("clearance", ["addClearance"]),
    ...mapActions("student", ["getStudents"]),
  },
})
export default class addAttendanceDialog extends Vue {
  file: File[] = [];
  isUpload = false;
  isSubmit = false;

  attendanceItem: IUpload = {
    file: [],
    date: "",
    eventName: "",
    amount: "",
  };

  declare $refs: {
    eventName: RefsVue;
    eventAmount: RefsVue;
    eventDate: RefsVue;
  };

  hideDialog() {
    this.attendanceItem = {
      file: [],
      date: "",
      eventName: "",
      amount: "",
    };
    this.showAttendanceDialog(false);
  }

  fileChoose(val: any) {
    this.attendanceItem.file = val;
  }

  formHasError!: boolean;
  createAttendace!: boolean;
  showAttendance!: boolean;
  showAttendanceDialog!: (show: boolean) => void;
  addAttendance!: (payload: IUpload) => Promise<IUpload>;

  clearance!: IClearance[];
  bulletin!: IBulletin[];
  attendances!: IAttendance[];
  students!: IStudents[];

  getBulletins!: () => Promise<void>;
  getAttendance!: () => Promise<void>;
  getStudents!: () => Promise<void>;
  addClearance!: (payload: any) => Promise<void>;

  async created() {
    await this.getAttendance();
    await this.getStudents();
  }
  async upload() {
    await this.addAttendance(this.attendanceItem);
    const absents: IStudents[] = this.students.filter((student) => {
      return !this.attendances.find((s) => {
        return student.studentName
          .toLowerCase()
          .startsWith(
            s.lastName.toLowerCase() + ", " + s.firstName.toLowerCase()
          );
      });
    });
    absents.map((s) => {
      this.addClearance({
        name: s.studentName,
        date: this.attendanceItem.date,
        eventName: this.attendanceItem.eventName,
        amount: this.attendanceItem.amount,
      });
    });
    this.showAttendanceDialog(false);
  }
}
</script>

<style></style>
