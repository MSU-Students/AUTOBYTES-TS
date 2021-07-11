import { MutationTree } from 'vuex';
import { BulletinStateInterface } from './state';

const mutation: MutationTree<BulletinStateInterface> = {
  addBulletin(state, result) {
    console.log(result);
    state.bulletin.push(result.data);
  },
  getBulletin(state, result) {
    state.bulletin.push(...result);
  }
};

export default mutation;
