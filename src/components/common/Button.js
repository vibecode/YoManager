import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export const Button = ({onPress, children, borderStyle, textStyle}) => {
  const {buttonStyle, defaultTextStyle} = styles;

  return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, borderStyle]}>
          <Text style={[defaultTextStyle, textStyle]}>{children}</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    textAlign: 'center',
    color: '#007aff',
    fontWeight: '600',
    padding: 16
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#007aff'
  }
});
