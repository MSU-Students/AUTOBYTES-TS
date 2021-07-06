<template>
  <q-page class="bulletin" padding>
    <div>
      <q-card>
        <q-tabs
          v-model="tab"
          class="bg-white text-primary"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="events" label="EVENTS" />
          <q-tab name="newsandupdates" label="NEWS & UPDATES" />
          <q-tab name="achievements" label="ACHIVEMENTS" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated swipeable infinite>
          <q-tab-panel name="events">
            <div class="text-h6" style="height: 750px">
              <q-list padding>
                <q-item clickable v-ripple dense>
                  <q-item-section>
                    <q-item-label class="text-h6"
                      >05/12/2021 - Memorandum</q-item-label
                    >
                    <q-item-label caption>2nd Semester, From OIPP</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple dense>
                  <q-item-section>
                    <q-item-label class="text-h6"
                      >05/20/2021 - Holiday</q-item-label
                    >
                    <q-item-label caption>2nd Semester, From OIPP</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="newsandupdates">
            <div class="text-h6" style="height: 750px">
              <q-list padding>
                <q-item clickable v-ripple dense>
                  <q-item-section>
                    <q-item-label class="text-h6"
                      >05/12/2021 - CSC 121</q-item-label
                    >
                    <q-item-label caption
                      >2nd Semester, From Sir Jojo</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="achievements">
            <div class="text-h6" style="height: 750px">
              <q-list padding>
                <q-item clickable v-ripple dense>
                  <q-item-section>
                    <q-item-label class="text-h6"
                      >05/12/2021 - Dance Champion</q-item-label
                    >
                    <q-item-label caption
                      >2nd Semester, From University Foundation</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "events"
    };
  }
};
</script>

<style></style>
