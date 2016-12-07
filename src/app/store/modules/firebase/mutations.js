import {
  GET_FIREBASE_DATA,
} from './../../mutation-types';

export default {
  [GET_FIREBASE_DATA](state, res) {
    state.firebaseData = res;
  },
};
