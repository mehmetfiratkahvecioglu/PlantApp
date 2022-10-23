import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.19,
    width: width * 0.43,
    backgroundColor: 'rgba(244, 246, 246, 1)',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(41, 187, 137, 0.18)',
    margin: 8,
  },
  image: {flex: 1, padding: 10},
  title: {fontSize: 17, fontWeight: '600', color: '#13231B', maxWidth: '60%'},
});

export default styles;
