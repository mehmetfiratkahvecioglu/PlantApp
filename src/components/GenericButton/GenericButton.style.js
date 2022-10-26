import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    height: height / 15,
    width: width * 0.9,
    borderRadius: 14,
    flexDirection: 'row',
    marginVertical: 5,
  },
  innerContainer: {flex: 1, flexDirection: 'row', borderRadius: 14},
  radioContainer: {justifyContent: 'center', marginLeft: 10},
  textsContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Rubik',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    alignItems: 'center',
  },
  detail: {
    fontFamily: 'Rubik',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    alignItems: 'center',
  },
  radioButton: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 24,
  },
  outerRadioButton: {
    width: 24,
    height: 24,
    backgroundColor: '#28AF6E',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRadioButton: {
    width: 9,
    height: 9,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  saleContainer: {justifyContent: 'flex-start'},
  innerSaleContainer: {
    backgroundColor: '#28AF6E',
    padding: 8,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saleText: {color: 'white', fontWeight: '500', fontSize: 12, lineHeight: 18},
});

export default {
  primary: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderWidth: 0.5,
    },
    lineerFirstColor: 'rgba(255, 255, 255, 0.05)',
    lineerSecondColor: 'rgba(255, 255, 255, 0.05)',
    lineerThirdColor: 'rgba(255, 255, 255, 0.05)',
  }),

  secondary: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: 'rgba(40, 175, 110, 0)',
      borderColor: 'rgba(40, 175, 110, 1)',
      borderWidth: 1.5,
    },
    lineerFirstColor: 'rgba(40, 175, 110, 0.1)',
    lineerSecondColor: 'rgba(40, 175, 110, 0)',
    lineerThirdColor: 'rgba(40, 175, 110, 0.25)',
  }),
};
