import {Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import GreenButton from '../../components/GreenButton';
export default function OnboardingFirst({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          'rgba(192, 240, 255, 1)',
          'rgba(192, 240, 255, 0.3)',
          'rgba(192, 240, 255, 1)',
        ]}
        style={styles.linearGradient}>
        <Text>Welcome to PlantApp</Text>
        <Text>Identify more than 3000+ plants and 88% accuracy.</Text>

        <Image
          style={styles.image}
          source={require('../../assets/ImagegetStarted.png')}
        />

        <GreenButton
          title={'Get Started '}
          onPress={() => {
            navigation.navigate('OnboardingFirstScreen');
          }}
        />
        <Text>
          By tapping next, you are agreeing to PlantID Terms of Use & Privacy
          Policy.
        </Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'rgba(192, 240, 255, 0.5)',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },

  image: {width: 375, height: 499},
});
