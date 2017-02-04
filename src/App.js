import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseconfig';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers);

    return (
        <Provider store={store}>
          <View>
            <Text>
              Hello
            </Text>
          </View>
        </Provider>
    )
  }
}

export default App;