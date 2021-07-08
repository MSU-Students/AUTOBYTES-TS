import { MutationTree } from 'vuex';
import { UiStateInterface } from './state';

const mutation: MutationTree<UiStateInterface> = {
  leftDrawer(state, opened) {
    state.leftDrawerState = opened;
  }
};

export default mutation;
