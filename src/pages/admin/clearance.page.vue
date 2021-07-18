<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :data="showClearance"
        :selectionOptions="options"
        :rowKey="rowKey"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Table from "src/components/table.component.vue";
import IClearance from "src/interfaces/clearance.interface";
import { mapActions, mapState } from "vuex";

@Options({
  components: {
    Table,
  },
  computed: {
    ...mapState("clearance", ["clearance"]),
  },
  methods: {
    ...mapActions("clearance", ["getClearance"]),
  },
})
export default class clearance extends Vue {
  isBtnShow = true;
  title = "RECORDS";
  rowKey = "eventName";
  buttonName = "RECORD";
  options = ["1st Semester", "2nd Semester"];
  columns = [
    {
      name: "eventName",
      required: true,
      label: "EVENT NAME",
      align: "center",
      field: (row: any) => row.eventName,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: "name",
      label: "STUDENT NAME",
      field: "name",
      align: "center",
    },
    {
      name: "date",
      label: "DATE",
      field: "date",
      align: "center",
    },
    {
      name: "amount",
      label: "AMOUNT",
      field: "amount",
      align: "center",
    },
  ];

  showClearance: IClearance[] = [];
  clearance!: IClearance[];
  getClearance!: () => Promise<void>;

  async created() {
    await this.getClearance();
    this.showClearance = this.clearance;
  }
}
</script>

<style scoped></style>
