<template>
  <q-page padding>
    <div>
      <q-card class="my-card1" bordered>
        <q-card-section>
          <div class="text-h5 text-center text-weight-medium">LIABILITIES</div>
          <q-separator spaced inset />
        </q-card-section>
        <q-card-section class="q-pa-none">
          <q-scroll-area style="height: 500px;">
            <q-list >
              <template>
                <q-item clickable @click="dialog = true">
                  <div>
                    <q-dialog v-model="dialog" persistent>
                      <q-card style="width: 300px">
                        <q-card-section class="row items-center q-pb-none">
                          <div class="text-h5">DROPDOWN</div>
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
                          <q-list>
                            <q-item>
                              <q-item-section
                                class="text-h6 text-weight-light text-center"
                              >
                                <li>Do-Day</li>
                              </q-item-section>
                            </q-item>
                          </q-list>
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                  </div>
                  <q-item-section top>
                    <q-item-label class="text-h5">Fines </q-item-label>
                    <q-item-label caption lines="2">2nd Semester</q-item-label>
                  </q-item-section>
                  <q-item-section top>
                    <q-item-label class="text-h5"> Php 500</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-list>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style></style>
