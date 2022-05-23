import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import DoctorCategoryItem from './DoctorCategoryItem';
import {Spacer} from '../../atoms';
import {JSONDoctorCategory as categories} from '../../../assets';

const DoctorCategories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Spacer width={16} />
        {categories?.data.map(item => {
          return (
            <DoctorCategoryItem
              key={item.id}
              category={item.category}
              onPress={() => navigation.navigate('ChooseDoctor')}
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
