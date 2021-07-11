import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { StudentStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const officerModule: Module<StudentStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default officerModule;
