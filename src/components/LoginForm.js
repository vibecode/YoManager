import React, { Component } from 'react';
import { Card, Button, Input, CardSection } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onEmailChange(text) {
      this.props.emailChanged(text);
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
                label="email"
                placeholder="your@mail.com"
                onChangeText={this.onEmailChange}
                value={this.props.email}re
            />
          </CardSection>

          <CardSection>
            <Input
                secureTextEntry
                label="Password"
                placeholder="Password"
            />
          </CardSection>

          <CardSection>

          </CardSection>
        </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email
  }
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);