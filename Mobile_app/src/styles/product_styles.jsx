import {StyleSheet} from 'react-native';

const productStyle = StyleSheet.create({
  mainHeading: {
    fontFamily: 'Philosopher',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    color: '#002140',
    width: '50%',
  },
  subHeading: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    width: '40%',
    fontSize: 16,
    color: '#002140',
  },
  inputIcon: {
    fontSize: 20,
    color: 'black',
  },
  componentStyle: {
    container: {
      width: '85%',
      height: 177,
      backgroundColor: '#9CE5CB',
      // opacity: 0.5,
      borderRadius: 24,
      padding: '5%',

      // borderBottomWidth: 100,
      // borderBottomColor: 'red',
      // borderLeftWidth: 50,
      // borderRightWidth: 50,
      // height: 0,
      // width: 100,
    },
    text1: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 21,
      color: '#002140',
    },
    text2: {
      fontFamily: 'Philosopher',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 40,
      color: '#002140',
    },
    price: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 18,
      //   lineHeight: 27,
      color: '#002140',
      marginRight: 20,
    },
  },
  bottomText1:{
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 36,
    letterSpacing: 8,
    color: "#002140"
  },
  bottomText2:{
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 28,
    color: "#002140"
  },
  bottomText3:{},
});

export {productStyle};
