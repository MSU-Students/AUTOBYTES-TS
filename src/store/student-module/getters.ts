import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';

const getters: GetterTree<StudentStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
