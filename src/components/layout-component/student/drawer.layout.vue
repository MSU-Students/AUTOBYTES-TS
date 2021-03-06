<template>
  <q-drawer
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
        menu-list
        q-pt-xl
        text-h5 text-primary text-weight-bold
        q-gutter-lg q-pb-xl
      "
    >
      <q-item
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.to"
        :color="menu.to == $route.fullPath ? 'primary' : 'primary'"
        :text-color="menu.to == $route.fullPath ? 'primary' : 'primary'"
        :icon="menu.icon"
        exact-active-class="text-white bg-primary"
        clickable
        v-ripple
        style="border-radius: 35px 0px 50px 0px"
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
    <div class="text-center q-pt-xl">
      <div
        class="q-pt-md text-subtitle2 text-grey-8 text-weight-bolder q-mx-md"
        v-for="(profile, index) in showProfile"
        :key="index"
      >
        {{ profile.lastName }}, {{ profile.firstName }}
      </div>
    </div>
    <!-- LOGOUT BUTTON -->
    <div class="text-center q-pt-xl">
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
import IUser from "src/interfaces/users.interface";
import loginService from "src/services/login.services";
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";
const itemList = [
  {
    icon: "event",
    label: "Bulletin",
    to: "/s/bulletin",
  },
  {
    icon: "assignment_turned_in",
    label: "Clearance",
    to: "/s/clearance",
  },
  {
    icon: "person",
    label: "Profile",
    to: "/s/profile",
  },
];
@Options({
  computed: {
    ...mapState("ui", ["leftDrawerState"]),
    ...mapState("users", ["users"]),
  },
  methods: {
    ...mapActions("ui", ["leftDrawer"]),
    ...mapActions("users", ["getProfile"]),
  },
})
export default class StudentDrawerLayout extends Vue {
  leftDrawerState!: boolean;
  leftDrawer!: (isShow: boolean) => void;
  menus = itemList;
  users!: IUser[];
  getProfile!: () => Promise<void>;
  showProfile: any = [];

  hideDrawer(val: boolean) {
    this.leftDrawer(val);
  }

  async created() {
    await this.getProfile();
    this.showProfile = this.users.map((s) => {
      return {
        firstName: s.firstName.toUpperCase(),
        lastName: s.lastName.toUpperCase(),
      };
    });
  }

  async logout() {
    const res = await loginService.logoutUser();
    if (res.status == 201) {
      await this.$router.replace("/login");
    }
  }
}
</script>

<style></style>
