import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './OnboardingFirstScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import GreenButton from '../../components/GreenButton';

const OnboardingFirstScreen = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0.5}}
      colors={[
        'rgba(250, 250, 250, 1)',
        'rgba(192, 240, 255, 0.3)',
        'rgba(250, 250, 250, 1)',
      ]}
      style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Take a photo to <Text style={styles.innerText}>identify</Text>
        </Text>
        <Text style={styles.title}>the plant!</Text>
        <Image
          source={require('../../assets/Object.png')}
          style={styles.ObjectImage}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Phone1x.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
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
