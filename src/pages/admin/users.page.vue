<template>
  <div class="q-pa-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="officers" label="OFFICERS" />
        <q-tab name="students" label="STUDENTS" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="officers">
          <Table
            :title="title1"
            :columns="columns1"
            :data="officers"
            :selectionOptions="options"
            :officerBtn="officerBtn"
            :buttonName="officerBtnName"
            :isBtnShow="isBtnShow1"
            :iconBtn="iconBtn"
          />
        </q-tab-panel>

        <q-tab-panel name="students">
          <Table
            :title="title2"
            :columns="columns2"
            :data="students"
            :selectionOptions="options"
            :isBtnShow="isBtnShow2"
            :buttonName="buttonName2"
            :officerBtn="officerBtn2"
            :iconBtn="iconBtn"
          />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Table from "src/components/table.component.vue";
import { mapActions, mapState } from "vuex";
import IUser from "src/interfaces/users.interface";

@Options({
  components: {
    Table,
  },
  computed: {
    ...mapState("users", ["users"]),
    ...mapState("student", ["students"]),
  },
  methods: {
    ...mapActions("users", ["getUsers", "addUsers"]),
    ...mapActions("student", ["getStudents"]),
  },
})
export default class userPage extends Vue {
  tab = "officers";
  title1 = "Officers";
  iconBtn = "person"
  officerBtn = true;
  isBtnShow1 = true;
  columns1 = [
    {
      name: "lastName",
      required: true,
      label: "LAST NAME",
      field: "lastName",
      align: "center",
    },
    {
      name: "firstName",
      required: true,
      label: "FIRST NAME",
      field: "firstName",
      align: "center",
    },
    { name: "username", label: "USERNAME", field: "userName", align: "center" },
  ];

  title2 = "Students";
  isBtnShow2 = true;
  buttonName2 = "RECORD";
  officerBtn2 = true;
  officerBtnName2 = "RECORD";
  columns2 = [
    {
      name: "lastName",
      required: true,
      label: "LAST NAME",
      field: "lastName",
      align: "center",
    },
    {
      name: "firstName",
      required: true,
      label: "FIRST NAME",
      field: "firstName",
      align: "center",
    },
    { name: "username", label: "USERNAME", field: "userName", align: "center" },
  ];

  users!: IUser[];
  officers: IUser[] = [];
  students: IUser[] = [];
  getStudents!: () => Promise<void>;
  addUsers!: (payload: IUser) => Promise<IUser>;
  getUsers!: () => Promise<void>;

  async created() {
    await this.getUsers();
    this.officers = this.users.filter((user) => user.userType == "admin" || "officer");
    this.students = this.users.filter((user) => user.userType == "student");
  }
}
</script>

<style></style>
