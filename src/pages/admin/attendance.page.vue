<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        style="height: 750px"
        :grid="$q.screen.lt.md"
        :rows="attendance"
        :columns="columns"
        row-key="index"
        :filter="filter"
        virtual-scroll
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
      >
        <template v-slot:top="props">
          <div class="col q-table__title q-mr-lg">ATTENDANCE</div>
          <div class="row q-gutter-sm q-mb-md">
            <div>
              <q-select
                class="q-mr-md"
                v-model="multiple"
                multiple
                :options="option"
                style="width: 200px"
                label="Semester"
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
                icon-right="person_add"
                label="ADD STUDENT"
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
                      <div>
                        <q-input filled v-model="text" label="Event Name" />
                      </div>
                      <div>
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
                      </div>
                      <div>
                        <q-select
                          filled
                          v-model="model"
                          :options="semester"
                          label="Semester"
                        />
                      </div>
                      <q-file
                        filled
                        v-model="file"
                        label="Import File"
                        :style="
                          $q.screen.lt.md ? 'width: 330px' : 'width: 470px'
                        "
                      >
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-file>
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
  multiple = null;
  model = null;
  filter = "";
  file = null;
  dialog = false;
  files = null;
  pagination = {
    rowsPerPage: 0,
  };
  semester = ["1st Semester", "2nd Semester"];
  option = ["1st Semester", "2nd Semester"]
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
    },
  ];
}
</script>

<style></style>
