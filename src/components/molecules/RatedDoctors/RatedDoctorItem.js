import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Ratings from '../../atoms/Ratings';

const RatedDoctorItem = props => {
  const {name, desc, photo, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: photo}} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <Ratings />
    </TouchableOpacity>
  );
};

export default RatedDoctorItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  profile: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
  },
  category: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
    textTransform: 'capitalize',
  },
});
