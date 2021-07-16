import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { MediaStateInterface } from './state';

const getters: GetterTree<MediaStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
