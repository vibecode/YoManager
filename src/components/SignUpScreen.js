import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { emailChanged, passwordChanged, createUser } from '../actions';
import AuthForm  from'./AuthForm';
import { connect } from 'react-redux';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.onSignUpPress = this.onSignUpPress.bind(this);
  }

  onSignUpPress() {
    const {email, password} = this.props;

    this.props.createUser({email, password});
  }

  render() {
    return <AuthForm
        {...this.props}
        onButtonPress={this.onSignUpPress}
        buttonText="Sign up"
        error={this.props.errorCreateUser}
    />
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password, errorCreateUser, loading} = auth;

  return {
    email,
    password,
    errorCreateUser,
    loading
  }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, createUser})(SignUpScreen);
