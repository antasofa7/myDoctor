import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospital,
  IconMessage,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = props => {
  const {title, active, onPress, onLongPress} = props;
  const Icon = _ => {
    switch (title) {
      case 'Doctors':
        return active ? <IconDoctorActive /> : <IconDoctor />;

      case 'Messages':
        return <IconMessage active={active} />;
      case 'Hospitals':
        return <IconHospital active={active} />;
      default:
        return <IconDoctorActive />;
    }
  };
  return (
    <TouchableOpacity
      // accessibilityRole="button"
      //     accessibilityState={isFocused ? {selected: true} : {}}
      //     accessibilityLabel={options.tabBarAccessibilityLabel}
      //     testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: active => ({
    fontFamily: fonts.primary.semiBold,
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInActive,
    marginTop: 4,
  }),
});
