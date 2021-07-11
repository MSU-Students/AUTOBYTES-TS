import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { BulletinStateInterface } from './state';
import bulletinService from 'src/services/bulletin.service';

const actions: ActionTree<BulletinStateInterface, StateInterface> = {
  async addBulletin(context, payload: any) {
    const result = await bulletinService.addingBulletin(payload);
    context.commit('addBulletin', result);
  },
  async getBulletin(context): Promise<any> {
    const result = await bulletinService.getBulletin();
    context.commit('getBulletin', result);
  }
};

export default actions;
