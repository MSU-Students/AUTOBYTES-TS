<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :data="students"
        :rowKey="rowKey"
        :selectionOptions="options"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
        :editBtn="editBtn"
        :iconBtn="iconBtn"
        @view="view"
      />
    </div>
    <addAccountDialog/>
    <showEditStudent :payload="payload"/>
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import IStudents from "src/interfaces/students.interface";
import Table from "src/components/table.component.vue";
import addAccountDialog from "src/components/layout-component/dialog/addStudentDialog.vue";
import showEditStudent from "src/components/layout-component/dialog/editStudentDialog.vue"

@Options({
  components: {
    Table,
    addAccountDialog,
    showEditStudent
  },
  computed: {
    ...mapState("student", ["students"]),
    ...mapState("ui", ["showAccount","showEditStudent"]),
  },
  methods: {
    ...mapActions("student", ["addStudents", "getStudents"]),
    ...mapActions("ui", ["showAccountDialog","showEditStudentDialog"]),
  },
})
export default class Bulletin extends Vue {
  isBtnShow = true;
  editBtn = true;
  title = "MASTERLIST";
  rowKey = "title";
  buttonName = "STUDENT";

  file = [];
  semester = ["1st Semester", "2nd Semester"];
  type = ["EVENT", "NEWS AND UPDATES", "ACHIEVEMENTS"];
  filter = "";
  pagination = {
    rowsPerPage: 0,
  };
  multiple = null;
  options = [
    "1st Semester",
    "2nd Semester",
    "EVENTS",
    "NEWS AND UPDATES",
    "ACHIEVEMENTS",
  ];
  columns = [
    {
      name: "studentName",
      required: true,
      label: "Student Name",
      align: "center",
      field: (row: any) => row.studentName,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: "idNumber",
      required: true,
      field: "idNumber",
      label: "ID Number",
      sortable: true,
    },
    {
      name: "gender",
      required: true,
      field: "gender",
      label: "Gender",
      sortable: true,
    },
    {
      name: "address",
      required: true,
      field: "address",
      label: "Address",
      sortable: true,
    },
    {
      name: "level",
      required: true,
      field: "level",
      label: "Level",
      sortable: true,
    },
    {
      name: "acadAdvisesr",
      required: true,
      field: "acadAdviser",
      label: "Academic Adviser",
      sortable: true,
    },
    {
      name: "course",
      required: true,
      field: "course",
      label: "Course",
      sortable: true,
    },
  ];
  getStudents!: () => Promise<void>;
  students!: IStudents[];

  async mounted() {
    await this.getStudents();
  }

  // fileChoose(val: any) {
  //   this.file = val;
  // }
  // addStudents!: (file: any[]) => Promise<void>;

  payload = {};
  view(val: any) {
    console.log(val);
    this.payload = val;
  }
}
</script>

<style scoped></style>
