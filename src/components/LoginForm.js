import React, { Component } from 'react';
import { Card, Button, Input, CardSection } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
                label="email"
                placeholder="your@mail.com"
                onChangeText={this.onEmailChange}
                value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
                secureTextEntry
                label="Password"
                placeholder="Password"
                onChangeText={this.onPasswordChange}
                value={this.props.password}
            />
          </CardSection>

          <Button>Login</Button>
        </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
