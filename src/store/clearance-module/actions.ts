import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ClearanceStateInterface } from './state';
import clearanceService from 'src/services/Clearance.service';

const actions: ActionTree<ClearanceStateInterface, StateInterface> = {
  async addClearance(context, payload: any) {
    const result = await clearanceService.addClearance(payload);
    context.commit('addClearance', result);
  },
  async getClearance(context): Promise<any> {
    const result = await clearanceService.getClearance();
    context.commit('getClearance', result);
  }
};

export default actions;
