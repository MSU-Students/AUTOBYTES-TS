import { MutationTree } from 'vuex';
import { MediaStateInterface } from './state';

const mutation: MutationTree<MediaStateInterface> = {
  addMedia(state, result) {
    state.media.push(result.data);
  },
  getMedia(state, result) {
    state.media = [];
    state.media = result;
  },
};

export default mutation;
