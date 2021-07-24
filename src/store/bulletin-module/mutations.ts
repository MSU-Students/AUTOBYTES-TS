import { MutationTree } from 'vuex';
import { BulletinStateInterface } from './state';

const mutation: MutationTree<BulletinStateInterface> = {
  addBulletin(state, result) {
    state.bulletins.push(result.data);
  },
  getBulletins(state, result) {
    state.bulletins = [];
    state.bulletins.push(...result);
  },
  updateBulletin(state, result) {
    state.bulletins.push(result.data);
  }
};

export default mutation;
