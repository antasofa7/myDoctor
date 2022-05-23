import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {DummyDoctor5} from '../../../assets';

const OtherBubble = _ => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor5} style={styles.avatar} />
      <View>
        <View style={styles.bubble}>
          <Text style={styles.message}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.time}>4.20 AM</Text>
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
  avatar: {
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
