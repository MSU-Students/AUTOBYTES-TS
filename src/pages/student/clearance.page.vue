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
            <q-dialog
                :model-value="false !== activeImage"
                @hide="activeImage = false"
              >
                <q-img
                  :src="`http://localhost:3000/media/id?id=${activeImage}`"
                />
              </q-dialog>
            <q-list>
              <template>
                <q-item
                  v-for="(clear, index) in viewClearance"
                  :key="index"
                  :name="clear.url"
                  clickable
                  v-ripple
                  dense
                >
                  <div></div>
                  <q-item-section top>
                    <q-item-label class="text-h5">{{clear.eventName}} </q-item-label>
                    <q-item-label caption lines="2">{{clear.semester}}</q-item-label>
                  </q-item-section>
                  <q-item-section top>
                    <q-item-label class="text-h5"> {{clear.amount}}</q-item-label>
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

<script lang="ts">
import IClearance from "src/interfaces/clearance.interface";
import IStudents from "src/interfaces/students.interface";
import IUser from "src/interfaces/users.interface";
import { Vue, prop, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";
@Options({
  computed: {
    ...mapState("users", ["users"]),
    ...mapState("student", ["students"]),
    ...mapState("clearance", ["clearances"]),
  },
  methods: {
    ...mapActions("users", ["getUsers", "getProfile"]),
    ...mapActions("student", ["getStudents"]),
    ...mapActions("clearance", ["getClearance"]),
  },
})
export default class clearance extends Vue {
  activeImage: false | string = false;

  viewClearance: IClearance[] = [];
  fines: IClearance[] = [];
  fees: IClearance[] = [];
  result: any = [];
  users!: IUser[];
  students!: IStudents[];
  clearances!: IClearance[];
  getUsers!: () => Promise<void>;
  getStudents!: () => Promise<void>;
  getProfile!: () => Promise<void>;
  getClearance!: () => Promise<void>;

  async created() {
    await this.getUsers();
    await this.getStudents();
    await this.getClearance();
    this.result = await this.getProfile();

    this.viewClearance = this.clearances.filter((student) => {
      return this.result.find((s: any) => {
        return student.name
          .toLowerCase()
          .startsWith(
            s.lastName.toLowerCase() + ", " + s.firstName.toLowerCase()
          );
      });
    });
  }
}
</script>

<style></style>
