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
            :iconBtn="iconBtn1"
            :tooltip2="tooltip1"
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
            :tooltip2="tooltip2"
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
  tooltip1 = "DISABLED ACCOUNT";
  iconBtn1 = "lock";
  iconBtn = "person_add";
  officerBtn = true;
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
    {
      name: "disabled",
      label: "USER TYPE",
      field: "userType",
      align: "center",
    },
    { name: "status", label: "STATUS", field: "status", align: "center" },
  ];

  tooltip2 = "ADD as OFFICER";
  officerBtn2 = true;
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
    {
      name: "disabled",
      label: "USER TYPE",
      field: "userType",
      align: "center",
    },
  ];

  users!: IUser[];
  officers: IUser[] = [];
  students: IUser[] = [];
  getStudents!: () => Promise<void>;
  addUsers!: (payload: IUser) => Promise<IUser>;
  getUsers!: () => Promise<IUser>;

  async created() {
    await this.getUsers();

    this.students = this.users.filter((user) => user.userType == "student");
    this.officers = this.users.filter((user) => user.userType == "officer");
  }
}
</script>

<style></style>
