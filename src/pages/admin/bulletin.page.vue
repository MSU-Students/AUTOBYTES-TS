<template>
  <q-page padding>
    <div class="q-pa-xs">
      <Table
        :title="title"
        :columns="columns"
        :student="bulletin"
        :selectionOptions="options"
        :rowKey="rowKey"
        :isBtnShow="isBtnShow"
        :buttonName="buttonName"
      />
    </div>
    <addBulletinDialog />
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";
import IBulletin from "src/interfaces/bulletin.interface";
import addBulletinDialog from "src/components/layout-component/dialog/addBulletinDialog.vue";
import { mapActions, mapState } from "vuex";
import Table from "src/components/table.component.vue";

@Options({
  components: {
    addBulletinDialog,
    Table,
  },
  computed: {
    ...mapState("ui", ["bulletin"]),
    ...mapState("bulletin", ["bulletin"])
  },
  methods: {
    ...mapActions("ui", ["showBulletinDialog"]),
    ...mapActions("bulletin", ["getBulletins"]),
  },
})
export default class Bulletin extends Vue {
  isBtnShow = true;
  title = "BULLETIN";
  rowKey = "name";
  buttonName = "EVENT";
  options = [
    "1st Semester",
    "2nd Semester",
    "EVENTS",
    "NEWS AND UPDATES",
    "ACHIEVEMENTS",
  ];
  filter = "";
  selectOption = "";
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
    { name: "bulletinFrom", label: "FROM", field: "bulletinFrom", align: "center" },
    { name: "bulletinSemester", label: "SEMESTER", field: "bulletinSemester", align: "center" },
    { name: "bulletinType", label: "TYPE", field: "bulletinType", align: "center" },
  ];
  bulletins: IBulletin[] = [];
  bulletin!: IBulletin[];
  getBulletins!: () => Promise<void>;
  // async create() {
  //   try {
  //     const bulletinTypes = this.bulletins.map((i) => {
  //       return i.bulletinType;
  //     });
  //     bulletinTypes.unshift("ALL");
  //     const newInst = [...new Set(bulletinTypes)];
  //     this.bulletinOpt = newInst;
  //     await this.getBulletins();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async created() {
    await this.getBulletins();
    this.bulletins = this.bulletin;
  }
}
</script>

<style scoped></style>
