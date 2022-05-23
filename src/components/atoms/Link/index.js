import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Link = props => {
  const {title, fontSize, align, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(fontSize, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (fontSize, align) => ({
    fontFamily: fonts.primary.regular,
    fontSize: fontSize,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
