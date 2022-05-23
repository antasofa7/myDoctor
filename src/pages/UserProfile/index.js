import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List, Profile, Spacer} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Spacer height={40} />
      <Profile name="Shayna Melinda" desc="Product Designer" />
      <Spacer height={30 - 16} />
      <List
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
