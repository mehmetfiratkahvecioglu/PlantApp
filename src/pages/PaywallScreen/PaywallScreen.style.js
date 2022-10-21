import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(17, 29, 24, 1)',
  },
  image: {
    height: height * 0.6,
    width: width,
    justifyContent: 'flex-end',
  },
  titleContainer: {marginHorizontal: 20, marginBottom: 10},
  title: {
    color: 'white',
    fontSize: 27,
    lineHeight: 47,
    fontWeight: '300',
  },
  insideTitle: {fontWeight: '800', fontSize: 30},
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '300',
    fontSize: 17,
    lineHeight: 24,
  },
  flatListContainer: {marginHorizontal: 10},
  buttonsContainer: {
    height: height * 0.4,
    alignItems: 'center',
    paddingBottom: 20,
  },
  innerButtonsContainer: {marginBottom: 15},
  greenButtonContainer: {flex: 1},
  explanation: {
    fontWeight: '300',
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
    maxWidth: '85%',
    marginVertical: 10,
  },
  termsText: {
    fontWeight: '300',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
    maxWidth: '85%',
    marginVertical: 10,
  },
});

export default styles;
