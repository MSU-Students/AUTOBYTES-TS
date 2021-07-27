<template>
  <q-dialog v-model="showClearance" persistent @hide="hideDialog()">
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5">ADD</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          @click="showClearanceDialog(false)"
        />
      </q-card-section>
      <q-card-section>
        <div class="q-gutter-md" style="max-width: 500px">
          <q-input
            ref="eventName"
            filled
            v-model="clearanceItem.eventName"
            label="Event Name"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="date"
            filled
            v-model="clearanceItem.date"
            mask="date"
            label="Date"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="clearanceItem.date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-select
            ref="semester"
            filled
            v-model="clearanceItem.semester"
            :options="sem"
            label="Semester"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            ref="amount"
            v-model="clearanceItem.amount"
            filled
            mask="#####"
            label="Amount"
            lazy-rules
            :rules="[(val) => !!val || 'Field is required']"
          />
          <!-- <q-input filled v-model="by" label="Added By" /> -->
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn
          class="full-width"
          size="lg"
          color="primary"
          label="SAVE"
          @click="saveEvent()"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import IClearance from "src/interfaces/clearance.interface";
import IStudents from "src/interfaces/students.interface";
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";

interface RefsVue extends Vue {
  validate(): void;
  next(): void;
  hasError: boolean;
}

@Options({
  computed: {
    ...mapState("clearance", ["clearance"]),
    ...mapState("ui", ["showClearance"]),
    ...mapState("student", ["students"]),
  },
  methods: {
    ...mapActions("clearance", ["addClearance"]),
    ...mapActions("ui", ["showClearanceDialog"]),
    ...mapActions("student", ["getStudents"]),
  },
})
export default class addClearanceDialog extends Vue {
  sem = ["1st Semester", "2nd Semester"];
  isSubmit = false;

  clearanceItem: IClearance = {
    name: "",
    date: "",
    eventName: "",
    amount: "",
    semester: "",
    idNumber: "",
    clear: "",
  };

  declare $refs: {
    eventName: RefsVue;
    date: RefsVue;
    semester: RefsVue;
    amount: RefsVue;
  };

  studentsItem: IStudents[] = [];
  clearance!: IClearance[];
  students!: IStudents[];
  showClearance!: boolean;
  getStudents!: () => Promise<void>;
  showClearanceDialog!: (show: boolean) => void;
  addClearance!: (payload: IClearance) => Promise<IClearance>;
  formHasError!: boolean;

  hideDialog() {
    this.clearanceItem = {
      name: "",
      date: "",
      eventName: "",
      amount: "",
      semester: "",
      idNumber: "",
      clear: "",
    };
    this.showClearanceDialog(false);
  }

  async created() {
    await this.getStudents();
    this.studentsItem = this.students;
  }

  async saveEvent() {
    this.isSubmit = true;
    this.$refs.eventName.validate();
    this.$refs.date.validate();
    this.$refs.semester.validate();
    this.$refs.amount.validate();
    if (
      this.$refs.date.hasError ||
      this.$refs.eventName.hasError ||
      this.$refs.amount.hasError ||
      this.$refs.semester.hasError 
    ) {
      this.formHasError = true;
    } else {
      this.studentsItem.map((s) => {
        this.addClearance({
          eventName: this.clearanceItem.eventName,
          date: this.clearanceItem.date,
          name: s.studentName,
          amount: this.clearanceItem.amount,
          semester: this.clearanceItem.semester,
          idNumber: s.idNumber,
          clear: "pending",
        });
      });
    }
    this.isSubmit = false;
    this.showClearanceDialog(false);
  }
}
</script>

<style></style>
