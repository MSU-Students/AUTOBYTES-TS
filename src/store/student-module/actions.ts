import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StudentStateInterface } from './state';
import helperService from 'src/services/helper.service';
import studentsService from 'src/services/students.service';
import { Students } from 'src/services/rest-api';

const actions: ActionTree<StudentStateInterface, StateInterface> = {
  async addStudents(context, file: File) {
    // upload masterlist
    const result: Students[] = await helperService.uploadMasterlist(file);
    await studentsService.addStudents(result);
    // generate account @ user entity
    result.map(r => {
      context.dispatch('users/addUsers', {
        userType: 'student',
        userName: r.idNumber,
        password: r.studentName.split(",")[0].replace(/[^a-zA-Z\s]/g, '').toLowerCase(),
        firstName: r.studentName.split(",")[1],
        lastName: r.studentName.split(",")[0],
        idNumber: r.idNumber,
        disabled: false,
        refreshToken: '',
      }, { root: true })
    })
    context.commit('addStudents', result);
  },
  async getStudents(context): Promise<any> {
    const result = await studentsService.getStudents();
    context.commit('viewStudents', result);
  },
  async updateStudent(context, payload: any): Promise<any> { // { id: id, payload: payload }
    console.log("payload: ", payload)
    const result = await studentsService.updateStudent(payload._id, payload);
    context.commit('updateStudent', result);
  }
};

export default actions;
