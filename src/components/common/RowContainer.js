import React from 'react';
import { View, StyleSheet } from 'react-native';

export const RowContainer = ({children}) => {
  const {containerStyle} = styles;

  return (
      <View style={containerStyle}>
        {children}
      </View>
  )
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});
