import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { RecordsStateInterface } from './state';
import recordsService from 'src/services/records.service';

const actions: ActionTree<RecordsStateInterface, StateInterface> = {
  async addRecords(context, payload: any) {
    const result = await recordsService.addRecords(payload);
    context.commit('addRecords', result);
  },
  async getRecords(context): Promise<any> {
    const result = await recordsService.getRecords();
    context.commit('getRecords', result);
  },
  getRecordType(context): void {
    const types = context.state.records.map((i) => { return i.recordsType });
    let newTypes = [...new Set(types)];
    context.commit('getRecordType', newTypes)
  }
};

export default actions;
