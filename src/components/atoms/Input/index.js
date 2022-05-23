import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import InputChat from './InputChat';

const Input = props => {
  const {label, type} = props;
  if (type === 'chat') {
    return <InputChat />;
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
  },
  input: {
    marginTop: 6,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  },
});
