import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RatedDoctorItem from './RatedDoctorItem';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../../assets';

const RatedDoctors = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Rated Doctors</Text>
      <RatedDoctorItem
        name="Alexa Rachel"
        desc="Pediatrician"
        avatar={DummyDoctor1}
        onPress={() => navigation.navigate('DoctorProfile')}
      />
      <RatedDoctorItem
        name="Sunny Frank"
        desc="Dentist"
        avatar={DummyDoctor2}
        onPress={() => navigation.navigate('DoctorProfile')}
      />
      <RatedDoctorItem
        name="Poe Minn"
        desc="Podiatrist"
        avatar={DummyDoctor3}
        onPress={() => navigation.navigate('DoctorProfile')}
      />
    </View>
  );
};

export default RatedDoctors;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
  },
});
