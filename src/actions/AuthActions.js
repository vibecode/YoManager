import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch))
  }
};

const loginUserFail = (dispatch) => {
  console.log('fail');
  dispatch({
    type: LOGIN_USER_FAIL
  })
};

const loginUserSuccess = (dispatch, user) => {
  console.log('yo');
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
