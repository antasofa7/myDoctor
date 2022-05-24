const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(17, 35, 64, 0.5)',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  white: '#FFFFFF',
  black: '#000000',
  grey: mainColors.grey1,

  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInActive: mainColors.dark2,
    menuActive: mainColors.green1,
  },
  button: {
    primary: {
      backgroundColor: mainColors.green1,
      text: '#FFFFFF',
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      text: mainColors.dark1,
    },
    disabled: {
      backgroundColor: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  disabled: mainColors.grey3,
  loadingBackground: mainColors.black2,
};
