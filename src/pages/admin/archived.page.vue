<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :student="student"
        :selectionOptions="options"
        :rowKey="rowKey"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
      />
    </div>
    <aaddArchivedDialog/>
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";
import Table from "components/table.component.vue";
import IArchived from "src/interfaces/archive.interface";
import { mapActions, mapState } from "vuex";
import addArchivedDialog from "src/components/layout-component/dialog/addArchivedDialog.vue";

@Options({
  components: {
    Table,
    addArchivedDialog,
  },
  computed: {},
  methods: {
    ...mapActions("ui", ["showArchivedDialog"]),
    ...mapActions("archived", ["getArchived"]),
  },
})
export default class Archived extends Vue {
  isBtnShow = false;
  title = "ARCHIVED List";
  rowKey = "name";
  buttonName = "Archive";
  options = [
    "1st Semester",
    "2nd Semester",
    "EVENTS",
    "NEWS AND UPDATES",
    "ACHIEVEMENTS",
  ];
  columns = [
    {
      name: "title",
      required: true,
      label: "DATE",
      align: "center",
      field: (row: any) => row.name,
      format: (val: any) => `${val}`,
      sortable: true,
    },
  ];
  student: IArchived[] = [
    {
      name: "Sample 1",
    },
    {
      name: "2",
    },
  ];
}
</script>

<style scoped></style>
