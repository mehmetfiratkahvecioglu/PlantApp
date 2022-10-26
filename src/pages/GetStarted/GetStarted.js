import {Text, StyleSheet, SafeAreaView, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import GreenButton from '../../components/GreenButton';
import styles from './GetStarted.style';

export default function OnboardingFirst({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.5}}
        colors={[
          'rgba(250, 250, 250, 1)',
          'rgba(192, 240, 255, 0.6)',
          'rgba(250, 250, 250, 1)',
        ]}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeText}>
            Welcome to <Text style={styles.innerText}>PlantApp</Text>
          </Text>
          <Text style={styles.identifyText}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/GetStartedImage.png')}
        />

        <GreenButton
          title={'Get Started '}
          onPress={() => {
            navigation.navigate('OnboardingFirstScreen');
          }}
        />
        <Text style={styles.byText}>
          By tapping next, you are agreeing to PlantID{' '}
          <Text style={styles.underLineText}>Terms of Use</Text> &{' '}
          <Text style={styles.underLineText}>Privacy Policy</Text>.
        </Text>
      </LinearGradient>
    </>
  );
}
