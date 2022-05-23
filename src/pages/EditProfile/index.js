import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Profile, Spacer} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Profile" />
        <Spacer height={40} />
        <Profile isEdit />
        <View style={styles.content}>
          <Input label="Full Name" />
          <Spacer height={24} />
          <Input label="Pekerjaan" />
          <Spacer height={24} />
          <Input label="Email Address" />
          <Spacer height={24} />
          <Input label="Password" />
          <Spacer height={40} />
          <Button
            title="Save Profile"
            onPress={() => navigation.goBack('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 2,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingTop: 26,
    paddingBottom: 48,
  },
});
