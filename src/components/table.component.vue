<template>
  <q-table
    style="height: 750px"
    :grid="$q.screen.lt.md"
    :rows="data"
    :columns="columns"
    row-key="id"
    :filter="filter"
    :pagination.sync="pagination"
    :loading="loading"
    @request="onRequest"
    virtual-scroll
    binary-state-sort
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
        <q-th auto-width />
      </q-tr>
    </template>

    <template v-slot:top="props">
      <div class="col q-table__title q-mr-lg">{{ title }}</div>
      <div class="row q-gutter-sm q-mb-md">
        <div>
          <q-select
            class="q-mr-md"
            v-model="multiple"
            multiple
            :options="options"
            style="width: 200px"
          />
        </div>

        <div class="q-search">
          <q-input
            outlined
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
            style="width: 200px"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div>
          <q-btn
            v-if="isBtnShow"
            color="primary"
            icon-right="person_add"
            :label="`ADD ${buttonName}`"
            @click="showDialog()"
          />
        </div>
        <div>
          <q-btn
            v-if="isBtnShow"
            color="primary"
            icon-right="person_add"
            :label="`ADD ${buttonName2}`"
            @click=""
          />
        </div>
      </div>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
        <q-td class="q-gutter-x-sm" auto-width>
          <q-btn
            v-if="editBtn"
            icon="edit"
            color="orange"
            round
            @click="onClick"
          />
          <q-btn
            v-if="officerBtn"
            color="green"
            round
            :icon="`${iconBtn}`"
            @click="activeOfficer(props.row)"
          />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
import { mapState, mapActions } from "vuex";

class Props {
  readonly isBtnShow!: boolean;
  readonly officerBtn!: boolean;
  readonly editBtn!: boolean;
  readonly iconBtn!: string;
  readonly title!: string;
  rowKey!: string;
  readonly buttonName!: string;
  readonly buttonName2!: string;
  readonly options!: string[];
  readonly columns!: any[];
  readonly data!: any[];
  filter = "";
}

@Options({
  computed: {
    ...mapState("ui", [
      "showBulletin",
      "showArchived",
      "showAttendance",
      "showClearance",
      "showRecords",
      "showUser",
    ]),
    ...mapState("users", ["users"]),
  },
  methods: {
    ...mapActions("ui", [
      "showBulletinDialog",
      "showArchivedDialog",
      "showAttendanceDialog",
      "showClearanceDialog",
      "showRecordsDialog",
      "showUserDialog",
      "showMediaDialog",
    ]),
    ...mapActions("bulletin", ["getBulletin"]),
    ...mapActions("users", ["updateID"]),
  },
})
export default class Table extends Vue.with(Props) {
  dialog = false;
  loading = false;
  newData: any[] = [];
  pagination = {
    sortBy: "desc",
    descending: false,
    page: 1,
    rowsPerPage: 0,
    rowsNumber: 10,
  };

  showBulletin!: boolean;
  showArchived!: boolean;
  showAttendance!: boolean;
  showClearance!: boolean;
  showRecords!: boolean;
  showUser!: boolean;
  showMedia!: boolean;
  showBulletinDialog!: (isShow: boolean) => void;
  showArchivedDialog!: (isShow: boolean) => void;
  showAttendanceDialog!: (isShow: boolean) => void;
  showClearanceDialog!: (isShow: boolean) => void;
  showRecordsDialog!: (isShow: boolean) => void;
  showUserDialog!: (isShow: boolean) => void;
  getBulletin!: (id: string) => Promise<void>;
  updateID!: (payload: any) => Promise<void>;
  showMediaDialog!: (isShow: boolean) => void;

  showDialog() {
    if (this.$route.name == "admin-bulletin") {
      this.showBulletinDialog(true);
    } else if (this.$route.name == "admin-archived") {
      this.showArchivedDialog(true);
    } else if (this.$route.name == "admin-attendance") {
      this.showAttendanceDialog(true);
    } else if (this.$route.name == "admin-clearance") {
      this.showClearanceDialog(true);
    } else if (this.$route.name == "admin-records") {
      this.showRecordsDialog(true);
    } else if (this.$route.name == "admin-student") {
      this.showUserDialog(true);
    }
  }

  activeOfficer(data: any) {
    const res = data.userType;

    if (this.$route.name == "admin-accounts") {
      if (res == "student") {
        const payload = { ...data, userType: "officer" };
        this.updateID(payload);
      } else if (res == "officer") {
        const payload = { ...data, disabled: true };
        this.updateID(payload);
        console.log("res: ", payload);
      }
    } else if (this.$route.name == "admin-records") {
      this.showMediaDialog(true);
      this.$emit("viewRecord", data);
    }
  }
}
</script>

<style></style>
