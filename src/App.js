import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
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