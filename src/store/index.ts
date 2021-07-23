import { store } from "quasar/wrappers";
import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
  Store
} from "vuex";

import ui from "./ui-module";
import { UiStateInterface } from "./ui-module/state";

import student from "./student-module";
import { StudentStateInterface } from "./student-module/state";

import record from "./records-module";
import { RecordsStateInterface } from "./records-module/state";

import clearance from "./clearance-module";
import { ClearanceStateInterface } from "./clearance-module/state";

import bulletin from "./bulletin-module";
import { BulletinStateInterface } from "./bulletin-module/state";

import attendance from "./attendance-module";
import { AttendanceStateInterface } from "./attendance-module/state";

import archived from "./archived-module";
import { ArchivedStateInterface } from "./archived-module/state";

import media from "./media-module";
import { MediaStateInterface } from "./media-module/state";

import users from "./user-module"
import { UserStateInterface } from "./user-module/state";

import auth from './auth';
import { IAuthState } from './auth/state';






/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: UiStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  uiInterface: UiStateInterface;
  studentStateInterface: StudentStateInterface;
  recordsStateInterface: RecordsStateInterface;
  clearanceStateInterface: ClearanceStateInterface;
  bulletinStateInterface: BulletinStateInterface;
  attendanceStateInterface: AttendanceStateInterface;
  archivedStateInterface: ArchivedStateInterface;
  mediaStateInterface: MediaStateInterface;
  userStateInterface: UserStateInterface
  auth: IAuthState;
}

export const $store: { ref?: Store<StateInterface> } = {
  ref: undefined
};

// provide typings for `this.$store`
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol("vuex-key");

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      ui,
      record,
      clearance,
      bulletin,
      attendance,
      archived,
      media,
      student,
      users,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
