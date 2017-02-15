import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class ListItem extends Component {

  render() {
    const { name } = this.props.employee;

    return (
        <View style={styles.sectionStyle}>
          <Text style={styles.nameStyle}>
            {name}
          </Text>
        </View>
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