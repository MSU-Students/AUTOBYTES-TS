import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { BulletinStateInterface } from './state';

const getters: GetterTree<BulletinStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
