import { MutationTree } from 'vuex';
import { RecordsStateInterface } from './state';

const mutation: MutationTree<RecordsStateInterface> = {
  addRecords(state, result) {
    console.log(result);
    state.records.push(result.data);
  },
  getRecords(state, result) {
    state.records = [];
    state.records.push(...result);
  },
  getRecordType(state, types) {
    state.types = [];
    state.types.push(...types);
  }
};

export default mutation;
