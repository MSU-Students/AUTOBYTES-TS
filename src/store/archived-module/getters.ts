import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ArchivedStateInterface } from './state';

const getters: GetterTree<ArchivedStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
