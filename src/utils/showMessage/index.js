import {showMessage} from 'react-native-flash-message';
import {fonts} from '../fonts';

export const showError = message => {
  showMessage({
    message: message,
    type: 'danger',
    duration: 3000,
    titleStyle: {fontFamily: fonts.primary.regular, fontSize: 14},
  });
};

export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'success',
    duration: 3000,
    titleStyle: {fontFamily: fonts.primary.regular, fontSize: 14},
  });
};
