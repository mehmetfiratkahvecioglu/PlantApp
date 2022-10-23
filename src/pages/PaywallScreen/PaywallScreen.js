import {
  View,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './PaywallScreen.style';
import Slide from '../../components/Slide';
import GenericButton from '../../components/GenericButton';
import GreenButton from '../../components/GreenButton';
const slides = [
  {
    id: '1',
    icon: require('../../assets/scannerIcon.png'),
    title: 'Unlimited',
    subtitle: 'Plant Identify',
  },
  {
    id: '2',
    icon: require('../../assets/speedmeterIcon.png'),
    title: 'Faster',
    subtitle: 'Process',
  },
  {
    id: '3',
    icon: require('../../assets/scannerIcon.png'),
    title: 'Detailed',
    subtitle: 'Plant care',
  },
];

const renderItem = ({item}) => (
  <Slide title={item.title} subtitle={item.subtitle} icon={item.icon} />
);
const PaywallScreen = ({navigation}) => {
  const [selectedRadioButton, setSelectedRadioButton] = useState('second');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../../assets/paywallBG.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <TouchableOpacity
          style={styles.xButton}
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}>
          <Text style={styles.xText}>x</Text>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            <Text style={styles.insideTitle}>PlantApp</Text> Premium
          </Text>
          <Text style={styles.subtitle}>Access All Features</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={slides}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
      <View style={styles.buttonsContainer}>
        <View style={styles.innerButtonsContainer}>
          <GenericButton
            name={'first'}
            theme={'primary'}
            title={'1 Month'}
            detail={'$2.99/month, auto renewable'}
            selectedRadioButton={selectedRadioButton}
            onPress={() => {
              setSelectedRadioButton('first');
            }}
          />
          <GenericButton
            name={'second'}
            theme={'secondary'}
            title={'1 Year'}
            detail={'First 3 days free, then $529,99/year'}
            selectedRadioButton={selectedRadioButton}
            onPress={() => {
              setSelectedRadioButton('second');
            }}
          />
        </View>
        <View style={styles.greenButtonContainer}>
          <GreenButton
            title={'Try free for 3 days'}
            onPress={() => {
              console.log('tık');
            }}
          />
        </View>

        <Text style={styles.explanation}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <Text style={styles.termsText}>Terms • Privacy • Restore</Text>
      </View>
    </View>
  );
};

export default PaywallScreen;
