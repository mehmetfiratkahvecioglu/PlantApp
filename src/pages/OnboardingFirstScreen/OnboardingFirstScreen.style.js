import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50, paddingBottom: 50, alignItems: 'center'},
  flatList: {height: height * 0.75},
  image: {width: width * 1, height: height * 0.7},
  title: {fontWeight: '500', fontSize: 28, maxWidth: '80%'},
  indicatorContainer: {
    height: 30,
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstIndicator: {
    height: 10,
    width: 10,
    backgroundColor: '#13231B',
    borderRadius: 50,
    margin: 4,
  },
  secondIndicator: {
    height: 6,
    width: 6,
    backgroundColor: 'rgba(19, 35, 27, 0.25)',
    borderRadius: 50,
    margin: 4,
  },
});

export default styles;
