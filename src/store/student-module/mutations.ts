import { MutationTree } from 'vuex';
import { StudentStateInterface } from './state';

const mutation: MutationTree<StudentStateInterface> = {
  addStudents(state, students) {
    state.students.push(...students);
  },
  viewStudents(state, result) {

    state.students = result;
  }
};

export default mutation;
