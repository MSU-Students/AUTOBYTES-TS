import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';
import helperService from 'src/services/helper.service';
import studentService from 'src/services/student.service';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  async addStudent(context, file: File) {
    const result = await helperService.uploadContacts(file);
    context.commit('addStudents', result);
  },
  async getStudents(context): Promise<any> {
    const result = await studentService.getUsers();
    context.commit('viewStudents', result);
  }
};

export default actions;
