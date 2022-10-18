import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
export default function OnboardingFirst() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          'rgba(192, 240, 255, 0.7)',
          'rgba(192, 240, 255, 0.3)',
          'rgba(192, 240, 255, 0.7)',
        ]}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
        <Image
          style={styles.image}
          source={require('../../assets/ImagegetStarted.png')}
        />
      </LinearGradient>
    </>
  );
}

var styles = StyleSheet.create({
  container: {flex: 1},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: 'rgba(192, 240, 255, 0.5)',
  },
  image: {width: 375, height: 499},
});
