<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :data="attendances"
        :selectionOptions="option"
        :rowKey="rowKey"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
      />
    </div>
    <addAttendanceDialog />
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";
import Table from "components/table.component.vue";
import addAttendanceDialog from "src/components/layout-component/dialog/addAttendanceDialog.vue"
import { mapState, mapActions } from "vuex";
import IAttendance from "src/interfaces/attendance.interface";

@Options({
  components: {
    Table,
    addAttendanceDialog,
  },
  computed: {
    ...mapState("ui", ["showAttendance"]),
    ...mapState("attendance", ["attendances"]),
  },
  methods: {
    ...mapActions("ui", ["showAttendanceDialog"]),
    ...mapActions("attendance", ["getAttendance"]),
  },
})
export default class attendace extends Vue {
  isBtnShow = true;
  title = "Attendace";
  rowKey = "name";
  buttonName = "Attendance";

  multiple = null;
  model = null;
  filter = "";
  file = null;
  dialog = false;
  files = null;
  pagination = {
    rowsPerPage: 0,
  };
  semester = ["1st Semester", "2nd Semester"];
  option = ["1st Semester", "2nd Semester"];
  columns = [
    {
      name: "eventName",
      required: true,
      label: "EVENT",
      align: "center",
      field: (row: IAttendance) => row.eventName,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: "lastName",
      label: "LAST NAME",
      align: "center",
      field: "lastName",
      sortable: true,
    },
    {
      name: "firstName",
      label: "FIRST NAME",
      align: "center",
      field: "firstName",
      sortable: true,
    },
    {
      name: "date",
      label: "DATE",
      align: "center",
      field: "date",
      sortable: true,
    },
    {
      name: "amount",
      label: "LAST NAME",
      align: "center",
      field: "amount",
      sortable: true,
    },
  ];
  attendances!: IAttendance[];
  getAttendance!: () => Promise<void>;

  async mounted() {
    await this.getAttendance();
  }
}
</script>

<style></style>
