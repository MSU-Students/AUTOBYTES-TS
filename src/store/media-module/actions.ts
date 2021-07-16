import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { MediaStateInterface } from './state';
import mediaService from 'src/services/media.service';

const actions: ActionTree<MediaStateInterface, StateInterface> = {
  async uploadMedia(context, payload: any) {
    const result = await mediaService.uploadMedia(payload);
    context.commit('uploadMedia', result);
  },
  async getMedia(context, id: string): Promise<any> {
    const result = await mediaService.getMedia(id);
    console.log("image: ", result);
    context.commit('getMedia', result);
  }
};

export default actions;