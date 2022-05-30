import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoodNewsItem from './GoodNewsItem';
import {colors, fonts} from '../../../utils';
import {FIREBASE} from '../../../config';

const GoodNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    FIREBASE.database()
      .ref('news/')
      .once('value')
      .then(res => {
        console.log('news data => ', res.val());
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          console.log('data filter news => ', filterData);
          setNews(filterData);
        }
      })
      .catch(err => {
        console.log('error => ', err.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good News</Text>
      {news.map(item => {
        return (
          <GoodNewsItem
            key={item.id}
            title={item.title}
            date={item.date}
            imageUrl={item.image}
          />
        );
      })}
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
