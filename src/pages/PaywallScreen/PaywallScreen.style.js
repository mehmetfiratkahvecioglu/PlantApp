import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(13, 25, 21, 0.98)',
  },
});

export default styles;
