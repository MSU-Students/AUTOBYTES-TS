<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        style="height: 750px"
        :grid="$q.screen.lt.md"
        :data="attendance"
        :columns="columns"
        row-key="index"
        :filter="filter"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
      >
        <template v-slot:top="props">
          <div class="col q-table__title q-mr-lg">ATTENDANCE</div>
          <div>
            <q-btn
              color="primary"
              icon-right="addattachment"
              label="IMPORT DATA"
            />
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";

interface IAttendance {
  name: string;
  date: string;
}

@Options({})
export default class attendace extends Vue {
  files = null;
  pagination = {
    rowsPerPage: 0,
  };
  columns = [
    {
      name: "name",
      required: true,
      label: "TITLE",
      align: "center",
      field: (row: any) => row.name,
      format: (val: any) => `${val}`,
      sortable: true,
    },
    {
      name: "date",
      label: "DATE",
      align: "center",
      field: "date",
      sortable: true,
    },
  ];
  attendance: IAttendance[] = [
    {
      name: "Frozen Yogurt",
      date: "05/12/2021",
    }
  ];
}
</script>

<style></style>
