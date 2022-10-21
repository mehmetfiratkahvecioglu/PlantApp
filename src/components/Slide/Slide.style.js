import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    height: height * 0.15,
    width: width * 0.43,
  },
  image: {height: 20, width: 20},
  imageContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    marginBottom: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
    alignItems: 'center',
    letterSpacing: 0.38,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    letterSpacing: -0.08,
  },
});

export default styles;
