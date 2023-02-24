import {StyleSheet} from 'react-native';

import {COLORS, Scale, SIZES} from '../../constants/Index';

export default StyleSheet.create({
  topContainer: {
    marginTop: 5,
    flex: 1,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.1,
    // backgroundColor: 'pink',
    paddingHorizontal: Scale(15),
    marginBottom: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: COLORS.white,
    fontSize: Scale(18),
    fontWeight: 'bold',
  },
  imageStyle: {
    width: SIZES.width,
    height: Scale(250),
  },
  galleryViewStyle: {
    height: 50,
    marginVertical: 20,
    // backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  galleryTextStyle: {
    color: '#fff',
    fontSize: Scale(20),
  },

  descriptionStyle: {
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: Scale(10),
    backgroundColor: 'white',
    borderRadius: 5,
    textAlignVertical: 'top',
    alignSelf: 'center',
    fontSize: Scale(18),
    paddingVertical: Scale(30),
  },
});
