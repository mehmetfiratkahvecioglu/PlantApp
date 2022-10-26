import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginVertical: 10,
    marginRight: 5,
    height: height * 0.2,
    width: width * 0.68,
    backgroundColor: 'red',
  },
  image: {flex: 1, borderRadius: 19, justifyContent: 'flex-end'},
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 64,
    justifyContent: 'center',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    padding: 10,
  },
  title: {
    fontFamily: 'Rubik',
    fontWeight: '600',
    fontSize: 15,
    color: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    letterSpacing: 0.38,
  },
});

export default styles;
