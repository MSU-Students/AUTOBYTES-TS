<template>
  <q-page>
    <div class="fullscreen" :class="$q.screen.lt.md ? '' : 'row'">
      <div class="col-4 flex flex-center">
        <q-card
          flat
          class="my-card bg-transparent"
          :class="$q.screen.lt.md ? 'absolute-center q-px-sm' : ''"
          :style="$q.screen.lt.md ? 'width: 400px' : 'width: 450px'"
        >
          <q-card-section class="text-center">
            <q-avatar square size="150px">
              <q-img src="~assets/citlogo1.png" />
            </q-avatar>
          </q-card-section>
          <q-card-section class="text-center">
            <div class="text-h3 text-grey-10 text-weight-bold">AUTOBYTES</div>
            <div class="text-h5 text-grey-7 text-weight-light q-pt-xl">
              Log in to your account
            </div>
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <q-input v-model="username" filled label="ID Number">
              <template v-slot:append>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              label="Password"
              v-model="pass"
              filled
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions class="q-mx-sm q-pt-xl" align="center">
            <q-btn
              class="full-width"
              label="Login"
              color="primary"
              size="lg"
              @click="loginUser()"
            />
          </q-card-actions>
        </q-card>
      </div>
      <div v-if="!$q.screen.lt.md" class="col-8">
        <q-img src="~assets/citbldg.jpg" class="full-height" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, prop, Options } from "vue-class-component";
import { AUser } from "src/store/auth/state";
import { mapActions } from "vuex";

@Options({
  methods: {
    ...mapActions("auth", ["login"]),
  },
})
export default class Login extends Vue {
  username = "";
  pass = "";
  usertype = "";
  isPwd = true;

  login!: (auth: {
    userName: string;
    password: string;
    userType: any;
  }) => Promise<AUser>;
  async loginUser() {
    try {
      const res = await this.login({
        userName: this.username,
        password: this.pass,
        userType: this.usertype,
      });
      if (res.userType == "admin" || res.userType == "officer") {
        await this.$router.replace("/a/bulletin");
      } else {
        await this.$router.replace("/s/bulletin");
      }
    } catch (error) {
      this.$q.notify({
        type: "negative",
        message: "Wrong Username or Password!",
        caption: `${error.message}`,
      });
    }
  }
}
</script>

<style></style>
