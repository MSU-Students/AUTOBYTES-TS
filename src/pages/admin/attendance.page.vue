<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :student="attendance"
        :selectionOptions="option"
        :rowKey="rowKey"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";
import Table from "components/table.component.vue";
import IAttendance from "src/interfaces/attendance.interface";

@Options({
  components: {
    Table,
  },
})
export default class attendace extends Vue {
  isBtnShow = true;
  title = "Attendace List";
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
      name: "name",
      required: true,
      label: "TITLE",
      align: "center",
      field: (row: any) => row.name,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: "date",
      label: "DATE",
      align: "center",
      field: "date",
      sortable: true,
    },
  ];

  attendance: IAttendance[] = [
    {
      name: "Frozen Yogurt",
      date: "05/12/2021",
    },
  ];
}
</script>

<style></style>
