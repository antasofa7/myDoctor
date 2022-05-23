import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSend} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disabled}) => {
  return (
    <View style={styles.container(disabled)}>
      <IconSend disabled={disabled} />
    </View>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disabled => ({
    backgroundColor: disabled ? colors.disabled : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 8,
    paddingRight: 3,
    paddingLeft: 8,
  }),
});
