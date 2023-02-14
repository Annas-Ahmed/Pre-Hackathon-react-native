// const {StyleSheet} = require('react-native/types');
import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  imageContainer: {
    height: '65%',
    width: '100%',
    backgroundColor: '#0D986A',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {},
  textContainer: {
    paddingHorizontal: '5%',
    // alignItems: 'space-around',
    justifyContent: 'space-evenly',
    height: '30%',
  },
  heading: {
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 30,
    color: '#0D986A',
    textTransform: 'uppercase',
  },
  para: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17,
    color: '#0D986A',
  },
});

export {homeStyles};
