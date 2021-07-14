import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ArchivedStateInterface } from './state';
import archivedService from 'src/services/archived.service';

const actions: ActionTree<ArchivedStateInterface, StateInterface> = {
  async addArchived(context, payload: any) {
    const result = await archivedService.addArchives(payload);
    context.commit('addArchived', result);
  },
  async getArchived(context): Promise<any> {
    const result = await archivedService.getArchives();
    context.commit('getArchived', result);
  }
};

export default actions;
