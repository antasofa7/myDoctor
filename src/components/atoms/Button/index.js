import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = props => {
  const {type, title, onPress, icon, disabled} = props;
  if (type === 'btn-icon') {
    return <BtnIconSend disabled={disabled} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.label(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.backgroundColor
        : colors.button.primary.backgroundColor,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  label: type => ({
    fontSize: 18,
    fontFamily: fonts.primary.semiBold,
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    textAlign: 'center',
  }),
});

export default Button;
