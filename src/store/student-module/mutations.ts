import { MutationTree } from 'vuex';
import { StudentStateInterface } from './state';

const mutation: MutationTree<StudentStateInterface> = {
  addStudent(state, result) {
    console.log(result);
    state.student.push(result.data);
  },
  getStudent(state, result) {
    state.student.push(...result);
  }
};

export default mutation;
