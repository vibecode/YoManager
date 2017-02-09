import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, Input, CardSection } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
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

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginBottom: 15
  }
};

const mapStateToProps = ({auth}) => {
  const {email, password, error} = auth;

  return {
    email,
    password,
    error
  }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
