import loginService from 'src/services/login.services';
import { restApi } from 'src/services/rest-api.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { IAuthState } from './state';

const actions: ActionTree<IAuthState, StateInterface> = {
  async login(context, payload: { userName: string, password: string, userType: string }) {
    const user = await loginService.loginUser(payload.userName, payload.password, payload.userType);
    context.commit('setCurrentUser', user);
    return user;
  },
  async authUser(context) {
    try {
      const user = await restApi.getProfile();
      context.commit('setCurrentUser', user.data);
      return user;
    } catch (error) {
      // work around
      localStorage.removeItem('access-token');
      localStorage.removeItem('refresh-token');
      return error;
    }
  }
};

export default actions;
