import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(251, 250, 250, 1)'},
  imageBackground: {
    height: height * 0.22,
    width: width,
    justifyContent: 'flex-end',
  },
  firstText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#13231B',
    marginLeft: width * 0.06,
  },
  secondText: {
    fontWeight: '500',
    fontSize: 24,
    marginLeft: width * 0.06,
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    width: width * 0.88,
    height: height * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.91)',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    marginBottom: 14,
    paddingLeft: 20,
  },
  thirdText: {
    color: '#13231B',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 23.5,
    marginBottom: 16,
    marginLeft: 24,
  },
});

export default styles;
