import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Button } from './Button';

export const Confirm = ({children, isVisible, onAccept, onDecline}) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
      <Modal
          visible={isVisible}
          transparent
          animationType={'slide'}
          onRequestClose={() => {}}
      >
        <View style={containerStyle}>
          <View style={cardSectionStyle}>
                <Text style={textStyle}>{children}</Text>
          </View>
          <View style={cardSectionStyle}>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </View>
        </View>
      </Modal>
  )
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    marginBottom: 0,
    padding: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderColor: '#ddd',
    position: 'relative',
    flexDirection: 'row'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18,
    color: '#007aff'
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    position: 'relative'
  }
});
