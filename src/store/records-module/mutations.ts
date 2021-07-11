import { MutationTree } from 'vuex';
import { RecordsStateInterface } from './state';

const mutation: MutationTree<RecordsStateInterface> = {
  addRecords(state, result) {
    console.log(result);
    state.records.push(result.data);
  },
  getRecords(state, result) {
    state.records.push(...result);
  }
};

export default mutation;
