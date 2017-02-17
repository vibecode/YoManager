import  {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CREATE_USER_FAIL,
  LOGIN_USER,
  CREATE_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, ...INITIAL_STATE};
    case LOGIN_USER_FAIL:
      return {...state, errorAuth: 'Authentication failed', password: '', loading: false};
    case CREATE_USER:
      return {...state, loading: true, error: ''};
    case CREATE_USER_FAIL:
      return {...state, errorCreateUser: 'Account creation failed', password: '', loading: false};
    default:
      return state;
  }
}
