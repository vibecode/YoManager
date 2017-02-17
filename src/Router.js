import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import { Actions } from 'react-native-router-flux';

const RouterComponent = () => {
  return (
      <Router sceneStyle={{ paddingTop: 65}}>
        <Scene key="auth">
          <Scene
              key="login"
              component={LoginScreen}
              title="Please Login"
          />
          <Scene
              key="signUp"
              component={SignUpScreen}
              title="Please Sign Up"
          />
        </Scene>

        <Scene key="main">
          <Scene
              onRight={() => Actions.createEmployee()}
              rightTitle="Add"
              key="employeeList"
              component={EmployeeList}
              title="Employees"
              initial
          />
          <Scene
              key="createEmployee"
              title="Create Employee"
              component={CreateEmployee}
          />
          <Scene
              key="editEmployee"
              component={EditEmployee}
              title="Edit Employee"
          />
        </Scene>
      </Router>
  )
};

export default RouterComponent;
