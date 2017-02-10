import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class CreateEmployee extends Component {

  render() {
    return (
        <Card>
          <CardSection>
              <Input
                  label="Name"
                  placeholder="Name"
              />
          </CardSection>

          <CardSection>
            <Input
                label="Phone"
                placeholder="066-22-444-666"
            />
          </CardSection>

          <Button>Create</Button>
        </Card>

    )
  }
}

export default CreateEmployee;