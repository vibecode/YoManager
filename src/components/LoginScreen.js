import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, Input, CardSection, Spinner, RowContainer } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import AuthForm  from'./AuthForm';
import { connect } from 'react-redux';

class LoginScreen extends Component {
  render() {
    return (
        <View>
          <AuthForm {...this.props} />
          <Card>
            <Text style={styles.textStyle}>
              Don't have an account?
            </Text>
            <RowContainer>
              <Button>
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
  const {email, password, error, loading} = auth;

  return {
    email,
    password,
    error,
    loading
  }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginScreen);
