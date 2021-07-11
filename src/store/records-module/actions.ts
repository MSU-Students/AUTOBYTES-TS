import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { RecordsStateInterface } from './state';
import recordsService from 'src/services/Records.service';

const actions: ActionTree<RecordsStateInterface, StateInterface> = {
  async addRecords(context, payload: any) {
    const result = await recordsService.addRecords(payload);
    context.commit('addRecords', result);
  },
  async getRecords(context): Promise<any> {
    const result = await recordsService.getRecords();
    context.commit('getRecords', result);
  }
};

export default actions;
