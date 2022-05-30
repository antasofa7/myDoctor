import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILPhotoProfileDefault} from '../../assets';
import {Button, Header, Input, Profile, Spacer} from '../../components';
import {FIREBASE} from '../../config';
import {colors, getData, showError, storeData} from '../../utils';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILPhotoProfileDefault);
  const [photoForDB, setPhotoForDB] = useState('');

  const _getUser = useCallback(async _ => {
    const dataUser = await getData('userData');
    if (dataUser) {
      setPhoto({uri: dataUser.avatar});
      setProfile(dataUser);
      // console.log('data user => ', dataUser);
    }
  }, []);

  useEffect(
    _ => {
      _getUser();
    },
    [_getUser],
  );

  const _editProfile = _ => {
    const newPassword = password.toString();
    console.log('password => ', newPassword.length);
    if (newPassword.length > 0) {
      if (newPassword.length < 6) {
        showError('Password minimal 6 karakter!');
      } else {
        _editPasswordOnly();
        _editProfileWithoutPassword();
        navigation.goBack('UserProfile');
      }
    } else {
      _editProfileWithoutPassword();
      navigation.goBack('UserProfile');
    }
  };

  const _editPasswordOnly = _ => {
    const newPassword = password.password.toString();
    FIREBASE.auth().onAuthStateChanged(user => {
      console.log('currentUser => ', user);
      if (user) {
        user
          .updatePassword(newPassword)
          .then(res => {
            console.log('update password => ', res);
          })
          .catch(err => {
            const errorMessage = err.message;
            showError(errorMessage);
            console.log('error =>', errorMessage);
          });
      }
    });
  };

  const _editProfileWithoutPassword = _ => {
    const dataUser = profile;
    dataUser.avatar = photoForDB;
    FIREBASE.database()
      .ref(`users/${dataUser.uid}/`)
      .update(dataUser)
      .then(() => {
        console.log('success', dataUser);
        storeData('userData', dataUser);
      })
      .catch(err => {
        const errorMessage = err.message;
        showError(errorMessage);
        console.log('error => ', err.message);
      });
  };

  const getImage = _ => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      res => {
        if (res.didCancel || res.errorCode) {
          showError('Oops! Sepertinya Anda tidak memilih foto.');
        } else {
          const dataImage = {uri: res.assets[0]};
          console.log('getImage => ', dataImage.uri.type);
          setPhotoForDB(
            `data: ${dataImage.uri.type};base64, ${dataImage.uri.base64}`,
          );
          setPhoto(dataImage.uri);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Profile" />
        <Spacer height={40} />
        <Profile isEdit avatar={photo} onPress={getImage} />
        <View style={styles.content}>
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={fullName => setProfile({...profile, fullName})}
          />
          <Spacer height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={profession => setProfile({...profile, profession})}
          />
          <Spacer height={24} />
          <Input label="Email Address" value={profile.email} disabled />
          <Spacer height={24} />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={password =>
              setPassword({password: password.toString()})
            }
          />
          <Spacer height={40} />
          <Button
            title="Save Profile"
            disabled={profile.fullName && profile.profession ? false : true}
            onPress={_editProfile}
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
