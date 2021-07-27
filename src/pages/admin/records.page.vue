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
        :iconBtn="iconBtn"
        :officerBtn="officerBtn"
        :tooltip2="tooltip"
        @view="view"
      />
    </div>
    <addRecordsDialog />
    <mediaDialog :payload="payload" />
  </q-page>
</template>

<script lang="ts">
import IRecords from "src/interfaces/records.interface";
import { Vue, Options } from "vue-class-component";
import addRecordsDialog from "src/components/layout-component/dialog/addRecordsDialog.vue";
import mediaDialog from "src/components/layout-component/dialog/mediaDialog.vue";
import Table from "src/components/table.component.vue";
import { mapActions, mapState } from "vuex";

@Options({
  components: {
    addRecordsDialog,
    mediaDialog,
    Table,
  },
  computed: {
    ...mapState("ui", ["showRecord"]),
    ...mapState("record", ["records"]),
  },
  methods: {
    ...mapActions("ui", ["showRecordDialog"]),
    ...mapActions("record", ["getRecords"]),
  },
})
export default class records extends Vue {
  isBtnShow = true;
  officerBtn = true;
  tooltip="VIEW IMAGE"
  iconBtn = "image";
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
  url = "";
  payload = {};
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
    {
      name: "recordsFrom",
      label: "FROM",
      field: "recordsFrom",
      align: "center",
    },
    {
      name: "recordsSemester",
      label: "SEMESTER",
      field: "recordsSemester",
      align: "center",
    },
    {
      name: "recordsType",
      label: "TYPE",
      field: "recordsType",
      align: "center",
    },
  ];
  showRecords: IRecords[] = [];
  records!: IRecords[];
  getRecords!: () => Promise<void>;
  showRecordsDialog!: (isShow: boolean) => void;

  async created() {
    await this.getRecords();
    this.showRecords = this.records;
  }

  view(val: any) {
    this.payload = val;
  }
}
</script>

<style scoped></style>
