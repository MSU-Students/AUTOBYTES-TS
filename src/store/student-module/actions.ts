import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';
import studentService from 'src/services/Student.service';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  async addStudent(context, payload: any) {
    const result = await studentService.addUser(payload);
    context.commit('addStudent', result);
  },
  async getStudent(context): Promise<any> {
    const result = await studentService.getUser();
    context.commit('getStudent', result);
  }
};

export default actions;
