import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ClearanceStateInterface } from './state';
import clearanceService from 'src/services/clearance.service';

const actions: ActionTree<ClearanceStateInterface, StateInterface> = {
  async addClearance(context, payload: any) {
    const result = await clearanceService.addClearance(payload);
    context.commit('addClearance', result);
  },
  async getClearance(context): Promise<any> {
    const result = await clearanceService.getClearance();
    context.commit('getClearance', result);
  },
  async findById(context, payload): Promise<any> {
    const result = await clearanceService.findById(payload._id);
    context.commit('findById', result)
  },
  async findOne(context, payload): Promise<any> {
    const result = await clearanceService.findOne(payload.idNumber);
    context.commit('findOne', result)
  }
};

export default actions;
