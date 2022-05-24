import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import InputChat from './InputChat';

const Input = props => {
  const {
    label,
    type,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    disabled,
  } = props;

  const [border, setBorder] = useState(colors.border);

  const onFocusForm = _ => setBorder(colors.tertiary);
  const onBlurForm = _ => setBorder(colors.border);

  if (type === 'chat') {
    return <InputChat />;
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.input(border)}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
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
  input: border => ({
    marginTop: 6,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    fontFamily: fonts.primary.regular,
    fontSize: 14,
  }),
});
