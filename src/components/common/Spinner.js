import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Spinner = ({size}) => {
  return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator
            size={size || 'large'}
            color='#007aff'
        />
      </View>
  )
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
