import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

const InputChat = props => {
  const {doctor, value, onChangeText} = props;
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={`Tulis pesan untuk ${doctor}`}
    />
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
