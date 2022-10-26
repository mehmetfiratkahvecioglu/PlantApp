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
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 16,
    color: '#13231B',
    letterSpacing: 0.07,
    marginLeft: width * 0.06,
  },
  secondText: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 24,
    marginLeft: width * 0.06,
    marginTop: 5,
    marginBottom: 10,
  },
  inputContainer: {
    width: width * 0.88,
    height: height * 0.05,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 18,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.91)',
    borderRadius: 12,
  },
  searchIcon: {
    tintColor: 'rgba(171, 171, 171, 1)',
    width: 15,
    height: 15,
    marginLeft: 20,
    marginRight: 10,
  },
  input: {
    height: 44,
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.91)',
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
  },
  contentContainer: {
    paddingLeft: 18,
    borderTopColor: 'red',
    borderTopWidth: 0.3,
    borderTopColor: '#E5E5E5',
  },
  thirdText: {
    color: '#13231B',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 23.5,
    marginBottom: 4,
  },
});

export default styles;
