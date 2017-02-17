import {
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  SAVE_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_SUCCESS:
      return INITIAL_STATE;
    case UPDATE_EMPLOYEE:
      return {...state, [action.payload.prop]: action.payload.value};
    case CREATE_EMPLOYEE:
      return INITIAL_STATE;
    case SAVE_EMPLOYEE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
