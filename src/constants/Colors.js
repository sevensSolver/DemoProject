import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const COLORS = {
  // base colors
  primary: '#FC6D3F', // orange
  secondary: '#CDCDD2', // gray
  third: '#FA4A0C',

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
  light: '#707070',
  grayTwo: '#111512',
  blackTwo: '#171717',
  lessWhite: '#f4f4f4',
  grey: '#727272',
  placeholderColor: '#A0A1AC',
  darkGray: '#737375',
  headerTextColor: '#323235',
  veryDarkGray: '#696969',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: width * 0.04,
  h3: width * 0.035,
  h4: width * 0.05,
  body1: width * 0.05,
  body2: width * 0.05,
  body3: width * 0.04,
  body4: 14,
  body5: 12,
  // app dimensions
  width,
  height,
};
