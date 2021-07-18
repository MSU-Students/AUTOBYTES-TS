import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';
import helperService from 'src/services/helper.service';
import studentsService from 'src/services/students.service';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  async addStudents(context, file: File) {
    const result = await helperService.uploadContacts(file);
    console.log("result",result)
    context.commit('addStudents', result);
  },
  async getStudents(context): Promise<any> {
    const result = await studentsService.getStudents();
    context.commit('viewStudents', result);
  }
};

export default actions;
