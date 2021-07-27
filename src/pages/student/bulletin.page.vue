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
              <q-dialog
                :model-value="false !== activeImage"
                @hide="activeImage = false"
              >
                <q-img
                  :src="`http://localhost:3000/media/id?id=${activeImage}`"
                />
              </q-dialog>
              <q-list padding>
                <q-item
                  v-for="(bulletin, index) in events"
                  :key="index"
                  :name="bulletin.url"
                  clickable
                  v-ripple
                  dense
                  @click="activeImage = bulletin.url"
                >
                  <q-item-section>
                    <q-item-label class="text-h6"
                      >{{ bulletin.date }} - {{ bulletin.title }}</q-item-label
                    >
                    <q-item-label caption>{{
                      bulletin.bulletinSemester
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="newsandupdates">
            <div class="text-h6" style="height: 750px">
              <q-dialog
                :model-value="false !== activeImage"
                @hide="activeImage = false"
              >
                <q-img
                  :src="`http://localhost:3000/media/id?id=${activeImage}`"
                />
              </q-dialog>
              <q-list padding>
                <q-item
                  clickable
                  v-ripple
                  dense
                  v-for="(news, index) in news"
                  :key="index"
                  :name="news.url"
                  @click="activeImage = news.url"
                >
                  <q-item-section>
                    <q-item-label class="text-h6"
                      >{{ news.url }} - {{ news.title }}</q-item-label
                    >
                    <q-item-label caption
                      >{{news.bulletinSemester}}, From {{news.bulletinFrom}}</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="achievements">
            <div class="text-h6" style="height: 750px">
              <q-dialog
                :model-value="false !== activeImage"
                @hide="activeImage = false"
              >
                <q-img
                  :src="`http://localhost:3000/media/id?id=${activeImage}`"
                />
              </q-dialog>
              <q-list padding>
                <q-item clickable v-ripple dense
                v-for="(achivement, index) in achivements"
                :key="index"
                :name="achivement.url"
                @click="activeImage = achivement.url"
                >
                  <q-item-section>
                    <q-item-label class="text-h6"
                      >{{achivement.date}} - {{achivement.title}}</q-item-label
                    >
                    <q-item-label caption
                      >{{achivement.bulletinSemester}}, From {{achivement.bulletinFrom}}</q-item-label
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

<script lang="ts">
import IBulletin from "src/interfaces/bulletin.interface";
import { Vue, prop, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";
@Options({
  computed: {
    ...mapState("media", ["media"]),
    ...mapState("bulletin", ["bulletins"]),
  },
  methods: {
    ...mapActions("media", ["getMedia"]),
    ...mapActions("bulletin", ["getBulletins"]),
  },
})
export default class bulletin extends Vue {
  tab = "events";
  activeImage: false | string = false;
  media!: any;
  bulletins!: IBulletin[];
  events: IBulletin[] = [];
  news: IBulletin[] = [];
  achivements: IBulletin[] = [];
  getBulletins!: () => Promise<void>;
  getMedia!: (id: string) => Promise<void>;

  async created() {
    await this.getBulletins();
    (this.events = this.bulletins.filter(
      (bulletin) => bulletin.bulletinType == "Events"
    )),
      (this.news = this.bulletins.filter(
        (bulletin) => bulletin.bulletinType == "News & Updates"
      ));
    this.achivements = this.bulletins.filter(
      (bulletin) => bulletin.bulletinType == "Achievements"
    );
  }

  async getUrl(bulletin: any) {
    const res: any = await this.getMedia(bulletin);
    if (bulletin == res.id) {
      return res.id;
    }
  }
}
</script>

<style></style>
