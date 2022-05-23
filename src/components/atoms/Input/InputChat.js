import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const InputChat = () => {
  return (
    <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: colors.disabled,
    padding: 14,
    borderRadius: 10,
    height: 45,
    marginRight: 10,
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
});
