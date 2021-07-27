import { MutationTree } from 'vuex';
import { ArchivedStateInterface } from './state';

const mutation: MutationTree<ArchivedStateInterface> = {
  addArchived(state, result) {
    state.archived.push(result.data);
  },
  getArchived(state, result) {
    state.archived = [];
    state.archived.push(...result);
  }
};

export default mutation;
