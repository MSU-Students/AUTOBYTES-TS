import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { BulletinStateInterface } from './state';
import bulletinService from 'src/services/bulletin.service';

const actions: ActionTree<BulletinStateInterface, StateInterface> = {
  async addBulletin(context, payload: any) {
    const result = await bulletinService.addBulletin(payload);
    context.commit('addBulletin', result);
  },
  async getBulletins(context): Promise<any> {
    const result = await bulletinService.getBulletins();
    context.commit('getBulletins', result);
  }
};

export default actions;
