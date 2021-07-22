import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UiStateInterface } from './state';

const actions: ActionTree<UiStateInterface, StateInterface> = {
  leftDrawer(context, opened) {
    context.commit('leftDrawer', opened)
  },
  showAccountDialog(context, payload: boolean) {
    context.commit('showAccountDialog', payload);
  },
  showBulletinDialog(context, payload: boolean) {
    context.commit('showBulletinDialog', payload);
  },
  showClearanceDialog(context, payload: boolean) {
    context.commit('showClearanceDialog', payload);
  },
  sendMessagePopups(context, payload: boolean) {
    context.commit('sendMessagePopups', payload);
  },
  showAttendanceDialog(context, payload: boolean) {
    context.commit('showAttendanceDialog', payload);
  },
  showRecordsDialog(context, payload: boolean) {
    context.commit('showRecordsDialog', payload);
  },
  showArchivedDialog(context, payload: boolean) {
    context.commit('showArchivedDialog', payload);
  }
};

export default actions;