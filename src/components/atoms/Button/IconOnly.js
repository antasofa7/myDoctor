import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = _ => {
    switch (icon) {
      case 'back-dark':
        return <IconBackDark />;
      case 'back-light':
        return <IconBackLight />;

      default:
        return <IconBackDark />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
