import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { IAuthState } from './state';

const getters: GetterTree<IAuthState, StateInterface> = {
    someGetter(/* context */) {
        // your code
    }
};

export default getters;
