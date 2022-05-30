import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FIREBASE} from '../../../config';
import {Spacer} from '../../atoms';
import DoctorCategoryItem from './DoctorCategoryItem';

const DoctorCategories = ({navigation}) => {
  const [doctorCategories, setDoctorCategories] = useState([]);

  useEffect(
    _ => {
      _getDoctorCategories();
    },
    [_getDoctorCategories],
  );

  const _getDoctorCategories = useCallback(() => {
    FIREBASE.database()
      .ref('doctor_categories')
      .once('value')
      .then(res => {
        console.log('docter categories data => ', res.val());
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          console.log('data filter doctor => ', filterData);
          setDoctorCategories(filterData);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Spacer width={16} />
        {doctorCategories.map(item => {
          return (
            <DoctorCategoryItem
              key={item.id}
              category={item.category}
              onPress={() => navigation.navigate('ChooseDoctor', item)}
            />
          );
        })}
        <Spacer width={6} />
      </ScrollView>
    </View>
  );
};

export default DoctorCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
  },
});
