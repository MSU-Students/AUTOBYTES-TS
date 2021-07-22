<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :data="clearance"
        :selectionOptions="options"
        :rowKey="rowKey"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
      />
    </div>
    <addClearanceDialog />
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Table from "src/components/table.component.vue";
import IClearance from "src/interfaces/clearance.interface";
import { mapActions, mapState } from "vuex";
import addClearanceDialog from "src/components/layout-component/dialog/addClearanceDialog.vue";

@Options({
  components: {
    Table,
    addClearanceDialog,
  },
  computed: {
    ...mapState("clearance", ["clearance"]),
  },
  methods: {
    ...mapActions("clearance", ["getClearance"]),
    ...mapActions("ui", ["showClearanceDialog"]),
  },
})
export default class clearance extends Vue {
  isBtnShow=true;
  title="LIABILITIES";
  rowKey="name";
  buttonName="CLEARANCE";
  options=["1st Semester", "2nd Semester"];
  columns = [
    {
      name: "name",
      label: "STUDENT NAME",
      required: true,
      align: "center",
      field: (row: IClearance) => row.name,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: "eventName",
      label: "EVENT NAME",
      field: "eventName",
      align: "center",
    },
    {
      name: "date",
      label: "DATE",
      field: "date",
      align: "center",
    },
    {
      name: "semester",
      label: "semester",
      field: "semester",
      align: "center",
    },
    {
      name: "amount",
      label: "AMOUNT",
      field: "amount",
      align: "center",
    },
  ];

  clearance!: IClearance[];
  getClearance!: () => Promise<void>;

  async created() {
    await this.getClearance();
  }
}
</script>

<style scoped></style>
