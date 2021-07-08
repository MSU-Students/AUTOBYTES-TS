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
      class="text-primary q-pt-md text-h5 text-weight-bolder q-gutter-lg q-pb-lg"
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
      <q-btn round style="border-radius: 10px 10px 10px 10px">
        <q-avatar size="80px" style="border-radius: 10px 10px 10px 10px">
          <img src="~assets/Yass.jpg" />
        </q-avatar>
      </q-btn>
      <div
        class="q-pt-lg text-subtitle2 text-grey-8 text-weight-bolder q-mx-sm"
      >
        Mohammad Yassier Bashier
      </div>
    </div>
    <!-- LOGOUT BUTTON -->
    <div class="text-center q-pt-md">
      <q-btn
        class="text-blue"
        color="white"
        icon="power_settings_new"
        label="Logout"
        to="/login"
      />
    </div>
  </q-drawer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { mapActions, mapState } from "vuex";

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
    label: "Archived",
    to: "/a/archived",
  },
];

@Options({
  computed: {
    ...mapState("ui", ["leftDrawerState"]),
  },
  methods: {
    ...mapActions("ui", ["leftDrawer"]),
  },
})
export default class StudentDrawerLayout extends Vue {
  leftDrawerState!: boolean;
  leftDrawer!: (isShow: boolean) => void;
  menus = itemList;

  hideDrawer(val: boolean) {
    this.leftDrawer(val);
  }
}
</script>

<style></style>
