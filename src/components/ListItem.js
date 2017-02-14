import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  render() {
    const { name } = this.props.employee;

    return (
        <CardSection>
          <Text style={styles.nameStyle}>
            {name}
          </Text>
        </CardSection>
    )
  }
}

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default ListItem;