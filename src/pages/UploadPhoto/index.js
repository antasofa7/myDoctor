import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Header, Link, Spacer} from '../../components';
import {
  IconAddPhoto,
  IconRemovePhoto,
  ILPhotoProfileDefault,
} from '../../assets';
import {colors, fonts, storeData} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {FIREBASE} from '../../config';

const UploadPhoto = props => {
  const {navigation, route} = props;
  const {dataUser} = route.params;

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILPhotoProfileDefault);
  const [photoForDB, setPhotoForDB] = useState('');
  const getImage = _ => {
    // launchCamera({}, res => {
    //   console.log('res => ', res);
    //   const src = {uri: res.assets[0].uri};
    //   setPhoto(src);
    //   setHasPhoto(true);
    // });
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      res => {
        if (res.didCancel || res.errorCode) {
          showMessage({
            message: 'Oops! Sepertinya Anda tidak memilih foto.',
            type: 'danger',
            duration: 3000,
            titleStyle: {fontFamily: fonts.primary.regular, fontSize: 14},
          });
        } else {
          const dataImage = {uri: res.assets[0]};
          console.log('getImage => ', dataImage.uri.type);
          setPhotoForDB(
            `data: ${dataImage.uri.type};base64, ${dataImage.uri.base64}`,
          );
          setPhoto(dataImage.uri);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = _ => {
    FIREBASE.database()
      .ref(`users/${dataUser.uid}/`)
      .update({avatar: photoForDB});

    dataUser.avatar = photoForDB;
    storeData('userData', dataUser);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {!hasPhoto ? (
              <IconAddPhoto style={styles.addPhoto} />
            ) : (
              <IconRemovePhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{dataUser.fullName}</Text>
          <Text style={styles.profession}>{dataUser.profession}</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={uploadAndContinue}
            disabled={!hasPhoto}
          />
          <Spacer height={30} />
          <Link
            title="Skip for this"
            fontSize={16}
            align="center"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 6,
    right: 6,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: 26,
  },
  profession: {
    fontFamily: fonts.primary.regular,
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
