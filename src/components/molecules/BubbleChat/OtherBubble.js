import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const OtherBubble = props => {
  const {text, date, photo} = props;
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <View>
        <View style={styles.bubble}>
          <Text style={styles.message}>{text}</Text>
        </View>
        <Text style={styles.time}>{date}</Text>
      </View>
    </View>
  );
};

export default OtherBubble;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  bubble: {
    backgroundColor: colors.primary,
    maxWidth: '85%',
    padding: 12,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  message: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.white,
  },
  time: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
