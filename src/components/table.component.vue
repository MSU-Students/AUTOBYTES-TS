<template>
  <q-table
    class="my-sticky-header-table"
    style="height: 750px"
    :grid="$q.screen.lt.md"
    :rows="data"
    :columns="columns"
    row-key="id"
    :filter="filter"
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
            icon-right="archive"
            label="EXPORT TO CSV"
            @click="exportTable()"
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
            @click="editItem(props.row)"
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
import { exportFile } from "quasar";

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
  data!: any[];
}

@Options({
  computed: {
    ...mapState("ui", [
      "showBulletin",
      "showArchived",
      "showAttendance",
      "showClearance",
      "showRecords",
      "showAccount",
      "showEditStudent",
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
      "showAccountDialog",
      "showMediaDialog",
      "showEditStudentDialog",
    ]),
    ...mapActions("bulletin", ["getBulletin"]),
    ...mapActions("users", ["updateID"]),
  },
})
export default class Table extends Vue.with(Props) {
  filter = "";
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
  showAccount!: boolean;
  showMedia!: boolean;
  showEditStudent!: boolean;
  showBulletinDialog!: (isShow: boolean) => void;
  showArchivedDialog!: (isShow: boolean) => void;
  showAttendanceDialog!: (isShow: boolean) => void;
  showClearanceDialog!: (isShow: boolean) => void;
  showRecordsDialog!: (isShow: boolean) => void;
  showAccountDialog!: (isShow: boolean) => void;
  getBulletin!: (id: string) => Promise<void>;
  updateID!: (payload: any) => Promise<void>;
  showMediaDialog!: (isShow: boolean) => void;
  showEditStudentDialog!: (isShow: boolean) => void;

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
      this.showAccountDialog(true);
    } else {
    }
  }

  activeOfficer(data: any) {
    const res = data.userType;

    if (this.$route.name == "admin-accounts") {
      if (res == "student") {
        const payload = { ...data, userType: "officer" };
        this.updateID(payload);
        this.$q.notify({
          type: "positive",
          message: "Successfully Added as Officer",
        });
      } else if (res == "officer") {
        const payload = { ...data, disabled: true };
        this.updateID(payload);
        this.$q.notify({
          type: "negative",
          message: "The Account has successfully DISABLED",
        });
      }
    } else if (this.$route.name == "admin-records") {
      this.showMediaDialog(true);
      this.$emit("view", { data: data });
    } else if (this.$route.name == "admin-bulletin") {
      this.showMediaDialog(true);
      this.$emit("view", { data: data });
    }
  }

  editItem(data: any) {
    if (this.$route.name == "admin-bulletin") {
      this.$emit("view", { data: data, onUpdate: true });
      this.showBulletinDialog(true);
    } else if (this.$route.name == "admin-student") {
      this.$emit("view", { data: data });
      this.showEditStudentDialog(true);
    }
  }

  wrapCsvValue(val: any, formatFn?: any) {
    let formatted = formatFn !== void 0 ? formatFn(val) : val;

    formatted =
      formatted === void 0 || formatted === null ? "" : String(formatted);

    formatted = formatted.split('"').join('""');
    /**
     * Excel accepts \n and \r in strings, but some other CSV parsers do not
     * Uncomment the next two lines to escape new lines
     */
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')

    return `"${formatted}"`;
  }

  exportTable() {
    const content = [this.columns.map((col) => this.wrapCsvValue(col.label))]
      .concat(
        this.data.map((row) =>
          this.columns
            .map((col) =>
              this.wrapCsvValue(
                typeof col.field === "function"
                  ? col.field(row)
                  : row[col.field === void 0 ? col.name : col.field],
                col.format
              )
            )
            .join(",")
        )
      )
      .join("\r\n");

    const status = exportFile(
      `table-${this.$route.name as string}.csv`,
      content,
      "text/csv"
    );

    if (status !== true) {
      this.$q.notify({
        message: "Browser denied file download...",
        color: "negative",
        icon: "warning",
      });
    }
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: white

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
