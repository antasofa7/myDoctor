import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const ProfileDoctorItem = props => {
  const {label, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ProfileDoctorItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.text.secondary,
  },
  value: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.text.primary,
  },
});
