import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { updateEmployee, saveEmployee, deleteEmployee } from '../actions';
import { Card, Button, Confirm } from './common';
import { View } from 'react-native';
import { connect } from 'react-redux';

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
    this.state = {
      showModal: false
    }
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

  onDeletePress() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  onAccept() {
    const {uid} = this.props.employee;

    this.props.deleteEmployee({uid});
  }

  onDecline() {
    this.setState({
      showModal: false
    })
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

          <Card>
            <Button onPress={this.onDeletePress}>
              Delete employee
            </Button>
          </Card>

          <Confirm
              isVisible={this.state.showModal}
              onAccept={this.onAccept}
              onDecline={this.onDecline}
          >
            This will delete the record. Are you sure?
          </Confirm>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};
export default connect(mapStateToProps, {updateEmployee, saveEmployee, deleteEmployee})(EditEmployee);
