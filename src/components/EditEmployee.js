import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  render() {
    return (
        <Card>
          <EmployeeForm />
          <Button>
            Save Changes
          </Button>
        </Card>
    )
  }
}

export default EmployeeEdit;
