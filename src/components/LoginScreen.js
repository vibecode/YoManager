import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, RowContainer } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import AuthForm  from'./AuthForm';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.onSignUpPress = this.onSignUpPress.bind(this);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  onSignUpPress() {
    Actions.signUp();
  }

  onLoginPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  render() {
    return (
        <View>
          <AuthForm
              {...this.props}
              onButtonPress={this.onLoginPress}
              buttonText="Log In"
              error={this.props.errorAuth}
          />
          <Card>
            <Text style={styles.textStyle}>
              Don't have an account?
            </Text>
            <RowContainer>
              <Button onPress={this.onSignUpPress}>
                Sign Up
              </Button>
            </RowContainer>
          </Card>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: '#007aff',
    textAlign: 'center',
    marginBottom: 20
  }
});

const mapStateToProps = ({auth}) => {
  const {email, password, errorAuth, loading} = auth;

  return {
    email,
    password,
    errorAuth,
    loading
  }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginScreen);
