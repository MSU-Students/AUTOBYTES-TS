import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AttendanceStateInterface } from './state';

const getters: GetterTree<AttendanceStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
