import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILCoverHospital,
} from '../../assets';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';

const Hospitals = () => {
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
        <ListHospital
          thumbnail={DummyHospital1}
          category="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          thumbnail={DummyHospital2}
          category="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          thumbnail={DummyHospital3}
          category="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
        />
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
