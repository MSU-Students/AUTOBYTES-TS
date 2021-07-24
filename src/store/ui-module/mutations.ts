import { MutationTree } from 'vuex';
import { UiStateInterface } from './state';

const mutation: MutationTree<UiStateInterface> = {
  leftDrawer(state, opened) {
    state.leftDrawerState = opened;
  },
  showAccountDialog(state, payload: boolean) {
    state.showAccount = payload;
  },
  showBulletinDialog(state, payload: boolean) {
    state.showBulletin = payload;
  },
  showClearanceDialog(state, payload: boolean) {
    state.showClearance = payload;
  },
  showAttendanceDialog(state, payload: boolean) {
    state.showAttendance = payload;
  },
  showRecordsDialog(state, payload: boolean) {
    state.showRecords = payload;
  },
  showArchivedDialog(state, payload: boolean) {
    state.showRecords = payload;
  },
  showMediaDialog(state, payload: boolean) {
    state.showMedia = payload;
  },
  showEditStudentDialog(state,payload: boolean) {
    state.showEditStudent = payload;
  }
};

export default mutation;
