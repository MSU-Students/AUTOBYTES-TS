<template>
  <q-dialog
    v-model="showEditStudent"
    persistent
    @hide="hideDialog()"
    @show="showDialog()"
  >
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5">UPDATE</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="showEditStudentDialog(false)"
        />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <q-input
            ref="studentName"
            filled
            v-model="student.studentName"
            label="Student Name"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="idNumber"
            filled
            v-model="student.idNumber"
            label="ID Number"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="gender"
            filled
            v-model="student.gender"
            label="Gender"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="address"
            filled
            v-model="student.address"
            label="Address"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="level"
            filled
            v-model="student.level"
            label="Year Level"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="acadAdviser"
            filled
            v-model="student.acadAdviser"
            label="Academic Adviser"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="course"
            filled
            v-model="student.course"
            label="Course"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn
          class="full-width"
          size="lg"
          color="primary"
          label="SAVE"
          :loading="isUpload"
          :disable="isUpload"
          @click="saveDocument()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapState, mapActions } from "vuex";

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
    ...mapState("ui", ["showEditStudent"]),
    ...mapState("student", ["students"]),
  },
  methods: {
    ...mapActions("ui", ["showEditStudentDialog"]),
    ...mapActions("student", ["addStudents", "updateStudent"]),
  },
})
export default class StudentDialog extends Vue.with(Props) {
  isSubmit = false;
  formHasError = false;
  showEditStudent!: boolean;
  showEditStudentDialog!: (show: boolean) => void;
  addStudents!: (payload: any) => Promise<void>;
  updateStudent!: (payload: any) => Promise<void>;
  student: any = {
    studentName: "",
    idNumber: "",
    gender: "",
    address: "",
    level: "",
    acadAdviser: "",
    course: "",
  };
  declare $refs: {
    studentName: RefsVue;
    idNumber: RefsVue;
    gender: RefsVue;
    address: RefsVue;
    level: RefsVue;
    acadAdviser: RefsVue;
    course: RefsVue;
  };
  showDialog() {
    this.student = { ...this.payload.data };
  }
  hideDialog() {
    this.student = {
      studentName: "",
      idNumber: "",
      gender: "",
      address: "",
      level: "",
      acadAdviser: "",
      course: "",
    };
    this.showEditStudentDialog(false);
  }
  async saveDocument() {
    this.isSubmit = true;
    this.$refs.studentName.validate();
    this.$refs.idNumber.validate();
    this.$refs.gender.validate();
    this.$refs.address.validate();
    this.$refs.level.validate();
    this.$refs.acadAdviser.validate();
    this.$refs.course.validate();

    if (
      this.$refs.studentName.hasError ||
      this.$refs.idNumber.hasError ||
      this.$refs.gender.hasError ||
      this.$refs.address.hasError ||
      this.$refs.level.hasError ||
      this.$refs.acadAdviser.hasError ||
      this.$refs.course.hasError
    ) {
      this.formHasError = true;
    } else {
      const res: any = await this.updateStudent(this.student);
      this.showEditStudentDialog(false);
    }
  }
}
</script>

<style></style>
