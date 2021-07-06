<template>
  <q-page padding>
    <div class="q-pa-xs">
      <q-table
        style="height: 750px"
        :grid="$q.screen.lt.md"
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
          <div class="col q-table__title q-mr-lg">BULLETIN</div>
          <div class="row q-gutter-sm q-mb-md">
            <div>
              <q-select
                class="q-mr-md"
                v-model="multiple"
                multiple
                :options="options"
                label="Bulletin Type"
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
                label="ADD EVENT"
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
                      <q-input filled v-model="title" label="Title" />
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
                      <q-input filled v-model="from" label="From" />
                      <q-select
                        filled
                        v-model="model"
                        :options="semester"
                        label="Semester"
                      />
                      <q-select
                        filled
                        v-model="models"
                        :options="type"
                        label="Bulletin Type"
                      />
                      <q-file filled v-model="file" label="Attach Image" :style="$q.screen.lt.md ? 'width: 295px' : 'width: 470px'">
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
                <p>Date: 05/12/2021 , 2nd Semester</p>
                <p>FROM: OIPP</p>
                <q-btn
                  :class="$q.screen.lt.md ? 'q-mr-md' : 'q-mr-xl'"
                  color="primary"
                  label="View Image"
                />
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
      title: '',
      from: '',
      file: null,
      model: null,
      models: null,
      semester: ["1st Semester", "2nd Semester"],
      type: ["EVENT", "NEWS AND UPDATES", "ACHIEVEMENTS"],
      text: "",
      date: "",
      dialog: false,
      filter: "",
      pagination: {
        rowsPerPage: 0
      },
      multiple: null,
      options: [
        "1st Semester",
        "2nd Semester",
        "EVENTS",
        "NEWS AND UPDATES",
        "ACHIEVEMENTS"
      ],
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
        { name: "type", label: "TYPE", field: "type", align: "center" }
      ],
      data: [
        {
          name: "Sample 1",
          type: "ACHIEVEMENTS"
        },
        {
          name: "2",
          type: "NEWS AND UPDATES"
        },
        {
          name: "3",
          type: "EVENTS"
        },
        {
          name: "4",
          type: "ACHIEVEMENTS"
        },
        {
          name: "5",
          type: "NEWS AND UPDATES"
        },
        {
          name: "6",
          type: "EVENTS"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
