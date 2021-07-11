import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AttendanceStateInterface } from './state';
import attendanceService from 'src/services/attendance.service';

const actions: ActionTree<AttendanceStateInterface, StateInterface> = {
  async addAttendance(context, payload: any) {
    const result = await attendanceService.addAttendance(payload);
    context.commit('addAttendance', result);
  },
  async getAttendance(context): Promise<any> {
    const result = await attendanceService.getAttendance();
    context.commit('getAttendance', result);
  }
};

export default actions;
