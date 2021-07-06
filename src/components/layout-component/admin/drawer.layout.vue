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
      class="menu-list q-pt-xl text-h5 text-weight-bold q-gutter-lg q-pb-xl"
    >
      <q-item
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.to"
        :color="menu.to == $route.fullPath ? 'primary' : 'white'"
        :text-color="menu.to == $route.fullPath ? 'white' : 'primary'"
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
    <div class="text-center q-pt-xl">
      <q-btn round style="border-radius: 10px 10px 10px 10px">
        <q-avatar size="80px" style="border-radius: 10px 10px 10px 10px">
          <img src="~assets/Yass.jpg" />
        </q-avatar>
      </q-btn>
      <div
        class="q-pt-md text-subtitle2 text-grey-8 text-weight-bolder q-mx-md"
      >
        Mohammad Yassier Bashier
      </div>
    </div>
    <!-- LOGOUT BUTTON -->
    <div class="text-center q-pt-xl">
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

<script>
const itemList = [
  {
    icon: "event",
    label: "Bulletin",
    to: "/a/bulletin"
  },
  {
    icon: "assignment_turned_in",
    label: "Clearance",
    to: "/a/clearances"
  },
  {
    icon: "assignment_ind",
    label: "Attendance",
    to: "/a/attendance"
  },
  {
    icon: "person",
    label: "Records",
    to: "/a/records"
  }
];
export default {
  name: "StudentDrawerLayout",

  data() {
    return {
      left: false,
      menus: itemList
    };
  },

  computed: {
    leftDrawerState: {
      get() {
        return this.$store.state.siteNav.leftDrawerState;
      },
      set(val) {
        console.log(val);
        this.$store.dispatch("siteNav/leftDrawerState", val);
      }
    }
  }
};
</script>

<style></style>
