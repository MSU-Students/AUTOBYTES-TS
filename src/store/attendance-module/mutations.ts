import { MutationTree } from 'vuex';
import { AttendanceStateInterface } from './state';

const mutation: MutationTree<AttendanceStateInterface> = {
  addAttendance(state, attendace) {
    state.attendances.push(...attendace);
  },
  getAttendance(state, result) {
    state.attendances.push(...result);
  }
};

export default mutation;
