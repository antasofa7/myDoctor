import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const ListHospital = props => {
  const {thumbnail, category, name, address} = props;
  return (
    <View style={styles.container}>
      <Image source={thumbnail} style={styles.photo} />
      <View style={styles.text}>
        <Text style={styles.name}>{category}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  photo: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
  },
  address: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 6,
  },
});
