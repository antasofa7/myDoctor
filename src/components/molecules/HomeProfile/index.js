import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILPhotoProfileDefault} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    avatar: ILPhotoProfileDefault,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('userData').then(res => {
      //   console.log('user data => ', res);
      res.avatar = {uri: res.avatar};
      setProfile(res);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={
          profile.avatar !== undefined ? profile.avatar : ILPhotoProfileDefault
        }
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.proffesion}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  avatar: {
    width: 46,
    height: 46,
    marginRight: 16,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  proffesion: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
