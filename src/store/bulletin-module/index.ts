import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { BulletinStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const officerModule: Module<BulletinStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default officerModule;
