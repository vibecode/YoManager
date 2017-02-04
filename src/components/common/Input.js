import React from 'react';
import { TextInput, View, Text } from 'react-native';

export const Input = ({value, onChangeText, placeholder, secureTextEntry}) => {
  const {inputStyle, containerStyle} = styles;

  return (
      <View style={containerStyle}>
        <TextInput
            style={inputStyle}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
            placeholderTextColor="#ddd"
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
        />
      </View>
  );
};

const styles = {
  inputStyle: {
    color: '#007aff',
    paddingRight: 6,
    paddingLeft: 6,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  containerStyle: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  }
};
