import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Profile, Spacer} from '../../components';
import ProfileDoctorItem from '../../components/molecules/ProfileDoctorItem';
import {colors} from '../../utils';

const DoctorProfile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Spacer height={40} />
      <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
      <Spacer height={10} />
      <ProfileDoctorItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileDoctorItem
        label="Tempat Praktik"
        value="Rumah Sakit Umum, Bandung"
      />
      <ProfileDoctorItem label="No. STR" value="0000116622081996" />
      <View style={styles.btn}>
        <Button title="Start Consultation" />
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
