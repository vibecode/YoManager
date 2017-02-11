import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { Picker } from 'react-native';
import { updateEmployee } from '../actions'
import { connect } from 'react-redux';

class CreateEmployee extends Component {

  render() {
    return (
        <Card>
          <CardSection>
            <Input
                label="Name"
                placeholder="Name"
                value={this.props.name}
                onChangeText={(value) => this.props.updateEmployee({prop: 'name', value: value})}
            />
          </CardSection>

          <CardSection>
            <Input
                label="Phone"
                placeholder="066-22-444-666"
                value={this.props.phone}
                onChangeText={(value) => this.props.updateEmployee({prop: 'phone', value: value})}
            />
          </CardSection>

          <CardSection>
            <Picker
                style={{ flex: 1}}
                selectedValue={this.props.shift}
                onValueChange={(value) => this.props.updateEmployee({prop: 'shift', value: value})}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>

          <Button>Create</Button>
        </Card>

    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {updateEmployee})(CreateEmployee);
