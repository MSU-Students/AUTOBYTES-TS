import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { RecordsStateInterface } from './state';

const getters: GetterTree<RecordsStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
