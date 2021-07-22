import IUser from 'src/interfaces/users.interface';
import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
  addUsers(state, result) {
    state.users.push(result.data);
  },
  getUsers(state, result: IUser[]) {
    state.users = [];
    state.users.push(...result);
  }
};

export default mutation;
