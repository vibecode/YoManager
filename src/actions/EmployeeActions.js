import {
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  FETCH_EMPLOYEE_SUCCESS,
  SAVE_EMPLOYEE_SUCCESS
} from './types';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const updateEmployee = ({prop, value}) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {prop, value}
  }
};

export const createEmployee = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
              dispatch({type: CREATE_EMPLOYEE});
              Actions.employeeList({type: 'reset'})
            }); //TODO catch error

  }
};

export const saveEmployee = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then(() => {
              dispatch({type: SAVE_EMPLOYEE_SUCCESS});
              Actions.employeeList({type: 'reset'});
            });
            //TODO catch error
  }

};

export const deleteEmployee = ({uid}) => {
  const {currentUser} = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
              Actions.employeeList({type: 'reset'});
            });
            //TODO catch error
  };
};

export const fetchEmployees = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', (snapshot) => {
              dispatch({type: FETCH_EMPLOYEE_SUCCESS, payload: snapshot.val()})
            });
            //TODO catch error
  }
};
