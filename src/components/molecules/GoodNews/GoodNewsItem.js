import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const GoodNewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.news}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default GoodNewsItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  news: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
  },
  date: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    marginRight: 16,
  },
});
