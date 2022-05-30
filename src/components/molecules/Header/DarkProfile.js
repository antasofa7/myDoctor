import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {DummyDoctor5} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const DarkProfile = props => {
  const {title, category, photo} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon="back-light"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.text}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Image source={{uri: photo}} style={styles.profile} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.white,
    textTransform: 'capitalize',
  },
  category: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.text.secondary,
    marginTop: 2,
    textTransform: 'capitalize',
  },
  profile: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
