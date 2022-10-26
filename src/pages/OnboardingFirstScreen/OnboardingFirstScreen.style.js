import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {height: height * 0.75},
  imageContainer: {
    width: width,
    height: height * 0.6,
    alignItems: 'center',
  },
  image: {flex: 1},
  titleContainer: {
    width: width,
    paddingLeft: width * 0.05,
    height: 80,
  },
  title: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 28,
    letterSpacing: -1,
    lineHeight: 34,
  },
  ObjectImage: {position: 'absolute', bottom: 25, left: '50%'},
  innerText: {fontWeight: '800'},
  indicatorContainer: {
    marginTop: 20,
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
