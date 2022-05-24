import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconRemovePhoto, ILPhotoProfileDefault} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = props => {
  const {name, desc, avatar, isEdit, onPress} = props;
  return (
    <View style={styles.container}>
      {isEdit ? (
        <TouchableOpacity style={styles.avatarWrapper} onPress={onPress}>
          <Image
            source={avatar !== undefined ? avatar : ILPhotoProfileDefault}
            style={styles.avatar}
          />
          {isEdit && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      ) : (
        <View style={styles.avatarWrapper}>
          <Image
            source={avatar || ILPhotoProfileDefault}
            style={styles.avatar}
          />
          {isEdit && <IconRemovePhoto style={styles.removePhoto} />}
        </View>
      )}
      {name && <Text style={styles.name}>{name}</Text>}
      {desc && <Text style={styles.profession}>{desc}</Text>}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  removePhoto: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: 16,
  },
  profession: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
