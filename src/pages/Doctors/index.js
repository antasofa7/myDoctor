import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategories,
  GoodNews,
  HomeProfile,
  RatedDoctors,
  Spacer,
} from '../../components';
import {colors, fonts} from '../../utils';

const Doctors = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer height={30} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <DoctorCategories navigation={navigation} />
          <RatedDoctors navigation={navigation} />
          <GoodNews />
          <Spacer height={30} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  welcome: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.text.primary,
    maxWidth: 240,
    marginTop: 30,
    marginLeft: 16,
  },
});
