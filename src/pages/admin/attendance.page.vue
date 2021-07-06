<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        style="height: 750px"
        :grid="$q.screen.lt.md"
        :data="data"
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
            <q-btn color="primary" icon-right="addattachment" label="IMPORT DATA"/>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      files: null,
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "TITLE",
          align: "center",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "date",
          label: "DATE",
          align: "center",
          field: "date",
          sortable: true
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          date: "05/12/2021"
        }
      ]
    };
  }
};
</script>

<style></style>
