import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  onRowPress() {
    Actions.createEmployee({employee: this.props.employee});
  }

  render() {
    const {name} = this.props.employee;

    return (
        <TouchableWithoutFeedback onPress={this.onRowPress}>
          <View style={styles.sectionStyle}>
            <Text style={styles.nameStyle}>
              {name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 18,
  },
  sectionStyle: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  }
});

export default ListItem;