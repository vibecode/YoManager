import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
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
