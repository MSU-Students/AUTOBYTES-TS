<template>
  <q-page padding>
    <div class="q-pa-xs">
      <q-table
        style="height: 750px"
        :data="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
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
          <div class="col q-table__title q-mr-lg">CLEARANCE</div>
          <div class="row q-gutter-sm q-mb-md">
            <div>
              <q-select
                class="q-mr-md"
                v-model="multiple"
                multiple
                :options="options"
                label="Semester"
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
                color="primary"
                icon-right="addevent"
                label="ADD LIABILITIES"
                @click="dialog = true"
              />
              <q-dialog v-model="dialog" persistent>
                <q-card style="width: 500px">
                  <q-card-section class="row items-center q-pb-none">
                    <div class="text-h5">ADD</div>
                    <q-space />
                    <q-btn
                      icon="close"
                      flat
                      round
                      dense
                      @click="dialog = false"
                    />
                  </q-card-section>
                  <q-card-section>
                    <div class="q-gutter-md" style="max-width: 500px">
                      <q-input filled v-model="name" label="Name" />
                      <q-input
                        filled
                        v-model="date"
                        mask="date"
                        :rules="['date']"
                        label="Date"
                      >
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                              ref="qDateProxy"
                              transition-show="scale"
                              transition-hide="scale"
                            >
                              <q-date v-model="date">
                                <div class="row items-center justify-end">
                                  <q-btn
                                    v-close-popup
                                    label="Close"
                                    color="primary"
                                    flat
                                  />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                      <q-select
                        filled
                        v-model="model"
                        :options="semester"
                        label="Semester"
                      />
                      <q-input filled label="Fines" />
                      <div class="q-gutter-sm">
                        <q-checkbox
                          size="sm"
                          v-model="shape"
                          val="doday"
                          label="Do-Day"
                        /><q-checkbox
                          size="sm"
                          v-model="shape"
                          val="citparade"
                          label="CIT Parade"
                        />
                        <q-checkbox
                          size="sm"
                          v-model="shape"
                          val="others"
                          label="Others"
                        />
                      </div>
                      <q-input filled label="Fees" />
                      <div>
                        <q-checkbox
                          size="sm"
                          v-model="shape"
                          val="bytesfee"
                          label="Bytes Fees"
                        />
                        <q-checkbox
                          size="sm"
                          v-model="shape"
                          val="violations"
                          label="College Violations"
                        />
                      </div>
                      <q-input filled v-model="by" label="Added By" />
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <q-btn
                      class="full-width"
                      size="lg"
                      color="primary"
                      label="SAVE"
                    />
                  </q-card-section>
                </q-card>
              </q-dialog>
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
                <div>
                  Fees: Php 500
                  <li>Bytes Fee</li>
                </div>
                <div>
                  Fines: Php 100
                  <li>Do-Day</li>
                  <li>CIT Parade</li>
                </div>
                <div>Signed By: Secretary</div>
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
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      by: "",
      model: null,
      models: null,
      semester: ["1st Semester", "2nd Semester"],
      date: "",
      dialog: false,
      filter: "",
      shape: ["line"],
      pagination: {
        rowsPerPage: 0
      },
      multiple: null,
      options: ["1st Semester", "2nd Semester"],
      columns: [
        {
          name: "title",
          required: true,
          label: "TITLE",
          align: "center",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: "date", label: "DATE", field: "date", align: "center" },
        {
          name: "semester",
          label: "SEMESTER",
          field: "semester",
          align: "center"
        }
      ],
      data: [
        {
          name: "Sample 1",
          date: "05/12/2021",
          semester: "1st Semester"
        },
        {
          name: "2",
          date: "05/12/2021",
          semester: "2nd Semester"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
