import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILCoverHospital} from '../../assets';
import {ListHospital} from '../../components';
import {FIREBASE} from '../../config';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    FIREBASE.database()
      .ref('hospitals/')
      .once('value')
      .then(res => {
        console.log('hospitals data => ', res.val());
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          console.log('data filter hospital => ', filterData);
          setHospitals(filterData);
        }
      });
  }, []);

  return (
    <View style={styles.page}>
      <ImageBackground
        source={ILCoverHospital}
        style={styles.cover}
        fit="cover">
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.available}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map(item => {
          return (
            <ListHospital
              key={item.id}
              imageUrl={item.image}
              category={item.category}
              name={item.name}
              address={item.address}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  cover: {
    width: '100%',
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  available: {
    fontFamily: fonts.primary.light,
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    flex: 1,
    paddingTop: 30 - 16,
    backgroundColor: colors.white,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    marginTop: -30,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});
