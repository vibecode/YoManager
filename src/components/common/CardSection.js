import React from 'react';
import { View, StyleSheet } from 'react-native';

export const CardSection = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    marginBottom: 16
  }
});
