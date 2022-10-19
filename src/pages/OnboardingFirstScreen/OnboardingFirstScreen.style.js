import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50},
  flatList: {height: height * 0.75},
  image: {width: width * 1, height: height * 0.7},
  title: {fontWeight: '500', fontSize: 28, maxWidth: '80%'},
});

export default styles;
