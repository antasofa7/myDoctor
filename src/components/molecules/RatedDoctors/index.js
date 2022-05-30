import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FIREBASE} from '../../../config';
import {colors, fonts} from '../../../utils';
import RatedDoctorItem from './RatedDoctorItem';

const RatedDoctors = ({navigation}) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    _getTopRatedDoctors();
  }, [_getTopRatedDoctors]);

  const _getTopRatedDoctors = useCallback(async _ => {
    FIREBASE.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        console.log('top rated doctors => ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('data parse => ', data);
          setDoctors(data);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Rated Doctors</Text>
      {doctors.map(doctor => {
        return (
          <RatedDoctorItem
            key={doctor.id}
            name={doctor.data.fullName}
            desc={doctor.data.profession}
            photo={doctor.data.photo}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
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
