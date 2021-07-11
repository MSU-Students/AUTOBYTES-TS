import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ClearanceStateInterface } from './state';

const getters: GetterTree<ClearanceStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
