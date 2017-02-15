import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
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
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>{children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
  )
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
    marginBottom: 0
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});
