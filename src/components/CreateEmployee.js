import React, { Component } from 'react';
import { Card, Button } from './common';
import { updateEmployee, createEmployee } from '../actions'
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';

class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.createEmployee({name, phone, shift: shift || 'Monday'});
  }

  render() {
    return (
        <Card>
          <EmployeeForm {...this.props} />
          <Button onPress={this.onButtonPress}>
            Create
          </Button>
        </Card>

    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {updateEmployee, createEmployee})(CreateEmployee);
