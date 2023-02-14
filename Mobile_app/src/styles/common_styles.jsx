import {StyleSheet} from 'react-native';
const commonStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffff',
    height: '100%',
    // paddingHorizontal: '5%',
  },
  mainContainer2: {
    backgroundColor: '#ffff',
    height: '100%',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    // paddingHorizontal: '5%',
  },
  logo: {
    fontWeight: 700,
    fontSize: 26,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: '#002140',
  },
  heading: {
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 40,
    color: '#0D986A',
    marginBottom: 10,
  },
  para: {
    fontSize: 14,
    lineHeight: 22,
    color: '#0D986A',
    marginBottom: 50,
  },
  inputLabel: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: 'rgba(0, 74, 97, 0.4)',
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,

    backgroundColor: '#FCFCFC',
    borderColor: '#E6E8EB',
    borderRadius: 4,
  },
  textButton: {
    fontWeight: 400,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#004A61',
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
  },
});

export {commonStyles};
