import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconStar} from '../../../assets';

const Ratings = () => {
  return (
    <View style={styles.container}>
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
      <IconStar />
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
