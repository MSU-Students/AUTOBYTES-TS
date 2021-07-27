<template>
  <q-drawer
    show-if-above
    v-model="leftDrawerState"
    side="left"
    content-class="bg-white text-primary"
    bordered
    dense
    flat
    round
    @update:model-value="hideDrawer(...[$event])"
  >
    <!-- BYTES LOGO -->
    <div class="text-center q-pt-xl">
      <div>
        <q-avatar size="80px" style="border-radius: 10px 10px 10px 10px">
          <img src="~assets/MSUBYTES.jpg" />
        </q-avatar>
      </div>
      <q-chip
        size="35px"
        text-color="primary"
        class="bg-transparent text-weight-bolder"
      >
        AUTOBYTES
      </q-chip>
    </div>
    <!-- DRAWER LIST -->
    <q-list
      padding
      class="
        text-primary
        q-pt-md
        text-h5 text-weight-bolder
        q-gutter-lg q-pb-lg
      "
    >
      <q-item
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.to"
        :icon="menu.icon"
        exact-active-class="text-white bg-primary"
        clickable
        v-ripple
        style="border-radius: 0px 45px 0px 40px"
      >
        <q-item-section avatar>
          <q-icon :name="menu.icon" />
        </q-item-section>

        <q-item-section class="text-weight-regular">
          {{ menu.label }}
        </q-item-section>
      </q-item>
    </q-list>
    <!-- PROFILE PIC -->
    <div class="text-center q-pt-md">
      <div
        class="q-pt-lg text-subtitle2 text-grey-8 text-weight-bolder q-mx-sm"
        v-for="(profile,index) in showProfile"
        :key="index"
      >
        {{profile.lastName}}, {{profile.firstName}}
      </div>
    </div>
    <!-- LOGOUT BUTTON -->
    <div class="text-center q-pt-md">
      <q-btn
        class="text-blue"
        color="white"
        icon="power_settings_new"
        label="Logout"
        @click="logout()"
      />
    </div>
  </q-drawer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";
import loginService from "src/services/login.services";
import IUser from "src/interfaces/users.interface";

const itemList = [
  {
    icon: "event",
    label: "Bulletin",
    to: "/a/bulletin",
  },
  {
    icon: "assignment_turned_in",
    label: "Clearance",
    to: "/a/clearance",
  },
  {
    icon: "assignment_ind",
    label: "Attendance",
    to: "/a/attendance",
  },
  {
    icon: "person",
    label: "Records",
    to: "/a/records",
  },
  {
    icon: "person",
    label: "Masterlist",
    to: "/a/student",
  },
  {
    icon: "person",
    label: "Accounts",
    to: "/a/accounts",
  },
];

@Options({
  computed: {
    ...mapState("ui", ["leftDrawerState"]),
    ...mapState("users",["users"])
  },
  methods: {
    ...mapActions("ui", ["leftDrawer"]),
    ...mapActions("users",["getProfile"])
  },
})
export default class StudentDrawerLayout extends Vue {
  leftDrawerState!: boolean;
  leftDrawer!: (isShow: boolean) => void;
  menus = itemList;
  showProfile: any = []
  users!: IUser[];
  getProfile!: () => Promise<void>

  hideDrawer(val: boolean) {
    this.leftDrawer(val);
  }

  async created (){
    await this.getProfile();
    this.showProfile = this.users.map((s) => {
      return {
        firstName: s.firstName.toUpperCase(),
        lastName: s.lastName.toUpperCase()
      }
    })
  }

  async logout() {
    const res = await loginService.logoutUser();
    if (res.status == 201) {
      await this.$router.replace('/login')
    }
  }
}
</script>

<style></style>
