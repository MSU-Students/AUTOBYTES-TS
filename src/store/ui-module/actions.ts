import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UiStateInterface } from './state';

const actions: ActionTree<UiStateInterface, StateInterface> = {
  leftDrawer(context, opened) {
    context.commit('leftDrawer', opened)
  }
};

export default actions;
