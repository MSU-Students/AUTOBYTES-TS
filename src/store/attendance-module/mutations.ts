import { MutationTree } from 'vuex';
import { AttendanceStateInterface } from './state';

const mutation: MutationTree<AttendanceStateInterface> = {
  addAttendance(state, result) {
    console.log(result);
    state.attendance.push(result.data);
  },
  getAttendance(state, result) {
    state.attendance.push(...result);
  }
};

export default mutation;
