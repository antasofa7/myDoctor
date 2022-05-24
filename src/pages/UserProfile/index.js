import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Header, List, Profile, Spacer} from '../../components';
import {FIREBASE} from '../../config';
import {colors, fonts, getData, removeData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
  });

  useEffect(_ => {
    getData('userData').then(res => {
      res.avatar = {uri: res.avatar};
      setProfile(res);
      // console.log(res.avatar);
    });
  });

  const _logout = _ => {
    FIREBASE.auth()
      .signOut()
      .then(res => {
        removeData();
        console.log('logout => ', res);
        navigation.replace('GetStarted');
      })
      .catch(err => {
        const errorMessage = err.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
          duration: 3000,
          titleStyle: {fontFamily: fonts.primary.regular, fontSize: 14},
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Spacer height={40} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          avatar={profile.avatar}
        />
      )}
      <Spacer height={30 - 16} />
      <List
        name="Edit Profile"
        desc="Last updated yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="On Google Play Store"
        type="next"
        icon="rate"
      />
      <List
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="help"
      />
      <List
        name="Log Out"
        // desc="Read our guidelines"
        type="next"
        icon="logout"
        onPress={_logout}
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
