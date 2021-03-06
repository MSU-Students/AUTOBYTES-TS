import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ArchivedStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const officerModule: Module<ArchivedStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default officerModule;
