import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './OnboardingFirstScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import GreenButton from '../../components/GreenButton';

const OnboardingFirstScreen = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[
        'rgba(192, 240, 255, 0.7)',
        'rgba(192, 240, 255, 0.3)',
        'rgba(192, 240, 255, 0.7)',
      ]}
      style={styles.container}>
      <Text style={styles.title}>Take a photo to identify the plant!'</Text>
      <Image source={require('../../assets/Phone.png')} style={styles.image} />
      <GreenButton
        title={'Continue'}
        onPress={() => {
          navigation.navigate('PaywallScreen');
        }}
      />
      <View style={styles.indicatorContainer}>
        <View style={styles.firstIndicator} />
        <View style={styles.secondIndicator} />
      </View>
    </LinearGradient>
  );
};

export default OnboardingFirstScreen;
