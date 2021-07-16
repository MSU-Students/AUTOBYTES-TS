<template>
  <q-dialog v-model="dialog" persistent>
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5">ADD</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="dialog = false" />
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
                      <q-btn v-close-popup label="Close" color="primary" flat />
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
          <div class="row items-center">
            <div class="col-6">
              <q-input v-model="event.eventName" label="Event Name" />
            </div>
            <div class="col-3 q-mx-md">
              <q-input
                v-model="event.eventAmount"
                filled
                mask="#####"
                label="Amount"
              />
            </div>
            <div class="col text-center">
              <q-btn color="primary" label="save" @click="saveEvent()" />
            </div>
          </div>

          <div v-if="eventList.length != 0">
            <q-chip
              v-for="(list, index) in eventList"
              :key="index"
              icon="event"
              :label="list.eventName + ' = ' + list.eventAmount + ' Pesos'"
            />
          </div>
          <q-input filled v-model="by" label="Added By" />
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn class="full-width" size="lg" color="primary" label="SAVE" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {};
</script>

<style></style>
