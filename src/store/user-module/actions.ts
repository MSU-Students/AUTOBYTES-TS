import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';
import helperService from 'src/services/helper.service';
import userService from 'src/services/user.service';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  async addUsers(context, payload: any) {
    console.log(payload)
    const result = await userService.addUsers(payload);
    context.commit('addUsers', result);
  },
  async getUsers(context): Promise<any> {
    const result = await userService.getUsers();
    context.commit('getUsers', result);
  }
};

export default actions;
