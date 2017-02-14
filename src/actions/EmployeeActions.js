import { UPDATE_EMPLOYEE, CREATE_EMPLOYEE, FETCH_EMPLOYEE_SUCCESS } from './types';
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
            });
  }
};

export const fetchEmployees = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
          dispatch({type: FETCH_EMPLOYEE_SUCCESS, payload: snapshot.val()})
        });
  }
};
