<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :data="showRecords"
        :selectionOptions="options"
        :rowKey="rowKey"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
      />
    </div>
    <addRecordsDialog />
  </q-page>
</template>

<script lang="ts">
import IRecords from "src/interfaces/records.interface";
import { Vue, Options } from "vue-class-component";
import addRecordsDialog from "src/components/layout-component/dialog/addRecordsDialog.vue";
import Table from "src/components/table.component.vue";
import { mapActions, mapState } from "vuex";

@Options({
  components: {
    addRecordsDialog,
    Table,
  },
  computed: {
    ...mapState("ui", ["showRecord"]),
    ...mapState("record", ["records"]),
  },
  methods: {
    ...mapActions("ui", ["showBulletinDialog"]),
    ...mapActions("record", ["getRecords"]),
  },
})
export default class records extends Vue {
  isBtnShow = true;
  title = "RECORDS";
  rowKey = "title";
  buttonName = "RECORD";
  options = [
    "1st Semester",
    "2nd Semester",
    "EVENTS",
    "NEWS AND UPDATES",
    "ACHIEVEMENTS",
  ];
  filter = "";
  selectOption = "";
  recordOpt: any = [];
  pagination = {
    rowsPerPage: 0,
  };
  columns = [
    {
      name: "title",
      required: true,
      label: "TITLE",
      align: "center",
      field: (row: IRecords) => row.title,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    { name: "date", label: "DATE", field: "date", align: "center" },
    { name: "recordsFrom", label: "FROM", field: "recordsFrom", align: "center" },
    { name: "recordsSemester", label: "SEMESTER", field: "recordsSemester", align: "center" },
    { name: "recordsType", label: "TYPE", field: "recordsType", align: "center" },
  ];
  showRecords: IRecords[] = [];
  records!: IRecords[];
  getRecords!: () => Promise<void>;
  showRecordsDialog!: (isShow: boolean) => void;

  async created() {
    await this.getRecords();
    this.showRecords = this.records;
  }
}
</script>

<style scoped></style>
