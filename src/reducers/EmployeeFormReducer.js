import {
  UPDATE_EMPLOYEE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};