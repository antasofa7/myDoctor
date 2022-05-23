import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import IsMeBubble from './IsMyBubble';
import OtherBubble from './OtherBubble';

const BubbleChat = ({isMe}) => {
  if (isMe) {
    return <IsMeBubble />;
  }
  return <OtherBubble />;
};

export default BubbleChat;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  bubble: {
    backgroundColor: colors.cardLight,
    maxWidth: '75%',
    padding: 12,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
