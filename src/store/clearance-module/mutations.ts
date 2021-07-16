import { MutationTree } from 'vuex';
import { ClearanceStateInterface } from './state';

const mutation: MutationTree<ClearanceStateInterface> = {
  addClearance(state, result) {
    console.log(result);
    state.clearance.push(result.data);
  },
  getClearance(state, result) {
    state.clearance = [];
    state.clearance.push(...result);
  }
};

export default mutation;
