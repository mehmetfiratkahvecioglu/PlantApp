import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'rgba(192, 240, 255, 0.5)',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },
  titleContainer: {width: width, paddingLeft: width * 0.05},
  image: {width: width, height: height * 0.6},
  welcomeText: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    letterSpacing: 0.07,
    marginBottom: 10,
  },
  innerText: {
    fontWeight: '600',
  },
  identifyText: {
    color: 'rgba(19, 35, 27, 0.7)',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.07,
    maxWidth: '70%',
  },
  byText: {
    color: 'rgba(89, 113, 101, 0.7)',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 11,
    letterSpacing: 0.07,
    textAlign: 'center',
    maxWidth: '60%',
    marginTop: 15,
  },
  underLineText: {textDecorationLine: 'underline'},
});

export default styles;
