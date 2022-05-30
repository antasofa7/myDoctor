import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Spacer} from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = props => {
  const {title, category, photo, type} = props;
  const navigation = useNavigation();
  if (type === 'dark-profile') {
    return <DarkProfile title={title} category={category} photo={photo} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Spacer width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: type === 'dark' ? 30 : 0,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    borderBottomStartRadius: type === 'dark' ? 20 : 0,
    borderBottomEndRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    flex: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
