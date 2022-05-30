import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Profile, Spacer} from '../../components';
import ProfileDoctorItem from '../../components/molecules/ProfileDoctorItem';
import {colors} from '../../utils';

const DoctorProfile = props => {
  const {navigation, route} = props;
  const doctor = route.params;
  console.log('doctor => ', doctor);
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Spacer height={40} />
      <Profile
        name={doctor.data.fullName}
        desc={doctor.data.profession}
        photo={doctor.data.photo}
      />
      <Spacer height={10} />
      <ProfileDoctorItem
        label="Alumnus"
        value={`${doctor.data.University}, 2020`}
      />
      <ProfileDoctorItem
        label="Tempat Praktik"
        value={doctor.data.hospital_address}
      />
      <ProfileDoctorItem label="No. STR" value={doctor.data.str_number} />
      <View style={styles.btn}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', doctor)}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
});
