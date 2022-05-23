import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoodNewsItem from './GoodNewsItem';
import {colors, fonts} from '../../../utils';

const GoodNews = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good News</Text>
      <GoodNewsItem />
      <GoodNewsItem />
      <GoodNewsItem />
    </View>
  );
};

export default GoodNews;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
    marginLeft: 16,
  },
});
