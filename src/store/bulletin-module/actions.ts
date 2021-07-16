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
  },
  async getBulletin(context, id: string): Promise<any> {
    const result = await bulletinService.getBulletin(id);
    context.commit('getBulletin', result);
  },
  async updateBulletin(context, payload: any): Promise<any> { // { id: id, payload: payload }
    const result = await bulletinService.updateBulletin(payload.id, payload);
    context.commit('updateBulletin', result);
  }
};

export default actions;
