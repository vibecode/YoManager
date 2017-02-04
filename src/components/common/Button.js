import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


export const Button = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;

  return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    textAlign:'center',
    color: '#007aff',
    fontWeight: '600',
    padding: 16
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#007aff'
  }
};
