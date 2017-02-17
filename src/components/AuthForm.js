import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button, Input, CardSection, Spinner, RowContainer } from './common';

class AuthForm extends Component {
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

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
        <Button onPress={this.props.onButtonPress}>
          {this.props.buttonText}
        </Button>
    )
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
          <RowContainer>
            {this.renderButton()}
          </RowContainer>
        </Card>
    )
  }
}

export default AuthForm;

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginBottom: 15
  }
});
