import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconCatDocAnak,
  IconCatDocGigi,
  IconCatDocObat,
  IconCatDocPsikiater,
  IconCatDocUmum,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategoryItem = props => {
  const {category, onPress} = props;
  const Icon = _ => {
    switch (category) {
      case 'dokter umum':
        return <IconCatDocUmum />;
      case 'psikiater':
        return <IconCatDocPsikiater />;
      case 'dokter obat':
        return <IconCatDocObat />;
      case 'dokter anak':
        return <IconCatDocAnak />;
      case 'dokter gigi':
        return <IconCatDocGigi />;
      default:
        return <IconCatDocUmum />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.text}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    padding: 12,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 110,
    height: 130,
  },
  text: {
    marginTop: 28,
    fontFamily: fonts.primary.light,
    fontSize: 12,
    color: colors.text.primary,
    overflow: 'hidden',
  },
  category: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 12,
    color: colors.text.primary,
  },
});
