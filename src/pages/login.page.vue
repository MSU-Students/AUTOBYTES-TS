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
            <q-img
              src="~assets/citlogo.png"
              style="height: 170px; max-width: 190px"
            />
          </q-card-section>
          <q-card-section class="text-center">
            <div class="text-h3 text-grey-10 text-weight-bold">AutoBytes</div>
          </q-card-section>
          <q-card-actions class="q-mx-sm q-pt-md" align="center">
            <q-btn
              class="full-width"
              label="Login with Google"
              color="primary"
              icon="google"
              size="lg"
              @click="googleLogin()"
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

<script>
import loginService from "src/services/login.services.js";
export default {
  data() {
    return {
      password: "",
      isPwd: true
    };
  },

  created() {
    loginService.onLoad();
  },

  methods: {
    async googleLogin() {
      const res = await loginService.signIn();
      console.log(res);
    }
  }
};
</script>

<style></style>
