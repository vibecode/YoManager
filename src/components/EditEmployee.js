import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { updateEmployee, saveEmployee } from '../actions';
import { Card, Button } from './common';
import { View } from 'react-native';
import { connect } from 'react-redux';

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
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

  onTextPress() {
    const {phone, shift} = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
        <View>
          <Card>
            <EmployeeForm />
            <Button onPress={this.onButtonPress}>
              Save Changes
            </Button>
          </Card>

          <Card>
            <Button onPress={this.onTextPress}>
              Send Message
            </Button>
          </Card>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {updateEmployee, saveEmployee})(EditEmployee);
