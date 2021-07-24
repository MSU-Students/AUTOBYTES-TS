<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :data="bulletin"
        :rowKey="rowKey"
        :selectionOptions="options"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
        :officerBtn="officerBtn"
        :editBtn="editBtn"
        :iconBtn="iconBtn"
        @view="view"
      />
    </div>
    <addBulletinDialog :payload="payload" />
    <mediaDialog :payload="payload" />
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";
import IBulletin from "src/interfaces/bulletin.interface";
import addBulletinDialog from "src/components/layout-component/dialog/addBulletinDialog.vue";
import mediaDialog from "src/components/layout-component/dialog/mediaDialog.vue";
import { mapActions, mapState } from "vuex";
import Table from "src/components/table.component.vue";

@Options({
  components: {
    addBulletinDialog,
    mediaDialog,
    Table,
  },
  computed: {
    ...mapState("ui", ["showBulletin"]),
    ...mapState("bulletin", ["bulletins"]),
  },
  methods: {
    ...mapActions("ui", ["showBulletinDialog"]),
    ...mapActions("bulletin", ["getBulletins", "updateBulletin"]),
  },
})
export default class Bulletin extends Vue {
  isBtnShow = true;
  officerBtn = true;
  editBtn = true;
  iconBtn = "image";
  title = "BULLETIN";
  rowKey = "title";
  buttonName = "EVENT";
  options = [
    "1st Semester",
    "2nd Semester",
    "EVENTS",
    "NEWS AND UPDATES",
    "ACHIEVEMENTS",
  ];
  selectOption = "";
  payload = {};
  bulletinOpt: any = [];
  pagination = {
    rowsPerPage: 0,
  };

  columns = [
    {
      name: "title",
      required: true,
      label: "TITLE",
      align: "center",
      field: (row: IBulletin) => row.title,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    { name: "date", label: "DATE", field: "date", align: "center" },
    {
      name: "bulletinFrom",
      label: "FROM",
      field: "bulletinFrom",
      align: "center",
    },
    {
      name: "bulletinSemester",
      label: "SEMESTER",
      field: "bulletinSemester",
      align: "center",
    },
    {
      name: "bulletinType",
      label: "TYPE",
      field: "bulletinType",
      align: "center",
    },
  ];
  bulletin: IBulletin[] = [];
  bulletins!: IBulletin[];
  updateBulletin!: (payload: any) => Promise<void>;
  getBulletins!: () => Promise<IBulletin[]>;

  async created() {
    const result: IBulletin[] = await this.getBulletins();
    this.bulletin = result;
  }

  view(val: any) {
    console.log(val);
    this.payload = val;
  }
}
</script>

<style scoped></style>
