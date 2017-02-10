import { UPDATE_EMPLOYEE } from './types';

export const UpdateEmployee = ({prop, value}) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {prop, value}
  }
};
