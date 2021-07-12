<template>
  <q-table
    style="height: 750px"
    :grid="$q.screen.lt.md"
    :rows="student"
    :columns="columns"
    :row-key="rowKey"
    :filter="filter"
    virtual-scroll
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
            @click="dialog = true"
          />
          <q-dialog v-model="dialog" persistent>
            <q-card style="width: 500px">
              <q-card-section class="row items-center q-pb-none">
                <div class="text-h5">ADD</div>
                <q-space />
                <q-btn icon="close" flat round dense @click="dialog = false" />
              </q-card-section>
              <q-card-section>
                <div class="q-gutter-md" style="max-width: 500px">
                  <q-file
                    filled
                    v-model="file"
                    label="Import File"
                    :style="$q.screen.lt.md ? 'width: 295px' : 'width: 470px'"
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

class Props {
  readonly isBtnShow!: boolean;
  readonly title!: string;
  readonly rowKey!: string;
  readonly buttonName!: string;
  readonly options!: string[];
  readonly columns!: any[];
  readonly student!: any[];
}

@Options({})
export default class Table extends Vue.with(Props) {
  filter = "";
  dialog = false;
}
</script>

<style></style>
