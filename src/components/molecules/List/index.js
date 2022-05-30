import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconLogout,
  IconNext,
  IconRate,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = props => {
  const {photo, name, desc, type, onPress, icon} = props;
  const Icon = () => {
    switch (icon) {
      case 'edit-profile':
        return <IconEditProfile />;
      case 'language':
        return <IconLanguage />;
      case 'rate':
        return <IconRate />;
      case 'help':
        return <IconHelp />;
      case 'logout':
        return <IconLogout />;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? (
        <Icon style={styles.icon} />
      ) : (
        <Image source={{uri: photo}} style={styles.photo} />
      )}
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        {desc && (
          <Text style={styles.desc} numberOfLines={1}>
            {desc}
          </Text>
        )}
      </View>
      {type === 'next' && <IconNext style={styles.next} />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  photo: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  text: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
    textTransform: 'capitalize',
  },
});
