<template>
  <q-table
    style="height: 750px"
    :grid="$q.screen.lt.md"
    :rows="data"
    :columns="columns"
    :row-key="rowKey"
    :filter="filter"
    :pagination.sync="pagination"
    :loading="loading"
    @request="onRequest"
    virtual-scroll
    binary-state-sort
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th auto-width />
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
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
      </div>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td auto-width>
          <q-btn
            size="sm"
            color="primary"
            round
            @click="props.expand = !props.expand"
            :icon="props.expand ? 'remove' : 'add'"
          />
        </q-td>
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>
      <q-tr v-show="props.expand" :props="props">
        <q-td colspan="100%">
          <div class="text-left text-subtitle1">
            <q-btn
              :class="$q.screen.lt.md ? 'q-mr-md' : 'q-mr-xl'"
              color="primary"
              label="Edit"
            />
            <q-btn color="primary" label="Archive" />
          </div>
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
  readonly title!: string;
  readonly rowKey!: string;
  readonly buttonName!: string;
  readonly options!: string[];
  readonly columns!: any[];
  readonly data!: any[];
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
  },
  methods: {
    ...mapActions("ui", [
      "showBulletinDialog",
      "showArchivedDialog",
      "showAttendanceDialog",
      "showClearanceDialog",
      "showRecordsDialog",
      "showUserDialog",
    ]),
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
    rowsPerPage: 15,
    rowsNumber: 10,
  };

  showBulletin!: boolean;
  showArchived!: boolean;
  showAttendance!: boolean;
  showClearance!: boolean;
  showRecords!: boolean;
  showUser!: boolean;
  showBulletinDialog!: (isShow: boolean) => void;
  showArchivedDialog!: (isShow: boolean) => void;
  showAttendanceDialog!: (isShow: boolean) => void;
  showClearanceDialog!: (isShow: boolean) => void;
  showRecordsDialog!: (isShow: boolean) => void;
  showUserDialog!: (isShow: boolean) => void;

  mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined,
    });
  }

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
    } else if (this.$route.name == "admin-user") {
      this.showUserDialog(true);
    }
  }

  onRequest(props: any) {
    const { page, rowsPerPage, sortBy, descending } = props.pagination;
    const filter = props.filter;
  }
}
</script>

<style></style>
