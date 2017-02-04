import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseconfig';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers);

    return (
        <Provider store={store}>
          <View>
            <LoginForm />
          </View>
        </Provider>
    )
  }
}

export default App;