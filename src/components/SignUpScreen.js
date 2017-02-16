import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button, Input, CardSection, Spinner, RowContainer } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import AuthForm  from'./AuthForm';
import { connect } from 'react-redux';

class SignUpScreen extends Component {
  render() {
    return <AuthForm {...this.props}/>
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {
    email,
    password,
    error,
    loading
  }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(SignUpScreen);
