import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const IsMeBubble = props => {
  const {text, date} = props;
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.message}>{text}</Text>
      </View>
      <Text style={styles.time}>{date}</Text>
    </View>
  );
};

export default IsMeBubble;

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
  message: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.text.primary,
  },
  time: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
