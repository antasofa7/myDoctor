import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor4} from '../../assets';
import {Header, List} from '../../components';
import {FIREBASE} from '../../config';
import {colors} from '../../utils';

const ChooseDoctor = props => {
  const {navigation, route} = props;
  const item = route.params;
  const [doctors, setDoctors] = useState([]);

  useEffect(
    _ => {
      _getDoctorByCategory(item.category);
    },
    [_getDoctorByCategory, item],
  );

  const _getDoctorByCategory = useCallback(category => {
    FIREBASE.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDoctors(data);
          console.log('doctors by category => ', res.val());
        }
      });
  }, []);

  return (
    <View style={styles.page}>
      <Header title={`Pilih ${item.category}`} type="dark" />
      {doctors.map(doctor => {
        return (
          <List
            key={doctor.id}
            photo={doctor.data.photo}
            name={doctor.data.fullName}
            desc={doctor.data.gender}
            type="next"
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
  },
});
