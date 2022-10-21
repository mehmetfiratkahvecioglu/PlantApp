import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height / 15,
    width: width * 0.9,
    padding: 18,
    backgroundColor: 'rgba(40, 175, 110, 1)',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 24,
    fontStyle: 'normal',
    height: 24,
    letterSpacing: -0.24,
  },
});

export default styles;
