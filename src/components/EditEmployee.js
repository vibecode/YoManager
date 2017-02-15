import React, { Component } from 'react';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { updateEmployee, saveEmployee } from '../actions';
import { Card, Button } from './common';
import { connect } from 'react-redux';

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.updateEmployee({prop, value});
    })
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.saveEmployee({name, phone, shift, uid: this.props.employee.uid});
  }

  render() {
    return (
        <Card>
          <EmployeeForm />
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {updateEmployee, saveEmployee})(EditEmployee);
