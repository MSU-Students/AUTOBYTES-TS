import { MutationTree } from 'vuex';
import { ClearanceStateInterface } from './state';

const mutation: MutationTree<ClearanceStateInterface> = {
  addClearance(state, result) {
    state.clearance.push(result.data);
  },
  getClearance(state, result) {
    state.clearance = [];
    state.clearance.push(...result);
  },
  findById(state, result) {
    state.clearance.push(result.data)
  },
  findOne(state, result) {
    state.clearance.push(result)
  },
  updateClearance(state, result) {
    state.clearance.push(result.data);
  }
};

export default mutation;
