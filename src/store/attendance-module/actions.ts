import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AttendanceStateInterface } from './state';
import attendanceService from 'src/services/attendance.service';
import helperService from 'src/services/helper.service';

const actions: ActionTree<AttendanceStateInterface, StateInterface> = {
  async addAttendance(context, file: File) {
    const result = await helperService.uploadCSV(file);
    context.commit('addAttendance', result);
  },
  async getAttendance(context): Promise<any> {
    const result = await attendanceService.getAttendance();
    context.commit('getAttendance', result);
  }
};

export default actions;
