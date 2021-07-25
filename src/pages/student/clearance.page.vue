<template>
  <q-page padding>
    <div>
      <q-card class="my-card1" bordered>
        <q-card-section>
          <div class="text-h5 text-center text-weight-medium">LIABILITIES</div>
          <q-separator spaced inset />
        </q-card-section>
        <q-card-section class="q-pa-none">
          <q-scroll-area style="height: 500px">
            <q-list v-for="(clear, index) in data" :key="index">
              <q-item>
                <q-item-section top>
                  <q-item-label class="text-h5"
                    >{{ clear.eventName }}
                  </q-item-label>
                  <q-item-label caption lines="2">{{
                    clear.semester
                  }}</q-item-label>
                </q-item-section>
                <q-item-section top>
                  <q-item-label class="text-h5">
                    {{ clear.amount }}</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import IClearance from "src/interfaces/clearance.interface";
import IUser from "src/interfaces/users.interface";
import { Vue, prop, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";
@Options({
  computed: {
    ...mapState("users", ["users"]),
    ...mapState("clearance", ["clearance"]),
  },
  methods: {
    ...mapActions("users", ["getProfile"]),
    ...mapActions("clearance", ["getClearance"]),
  },
})
export default class clearance extends Vue {
  users!: any;
  showUser: IUser[] = [];
  clearance!: IClearance[];
  data: any = [];
  getProfile!: () => Promise<void>;
  getClearance!: () => Promise<void>;

  async created() {
    await this.getProfile();
    await this.getClearance();
    if (this.users instanceof Array) {
      this.data = this.clearance.filter(
        (i) => i.idNumber == this.users[0].idNumber
      );
    } else {
      this.data = this.clearance.filter(
        (i) => i.idNumber == this.users.idNumber
      );
    }
    console.log("this.data: ", this.data);
  }
}
</script>

<style></style>
