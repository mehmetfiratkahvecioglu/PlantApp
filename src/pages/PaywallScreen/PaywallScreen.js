import {View, Text, ImageBackground, FlatList} from 'react-native';
import React from 'react';
import styles from './PaywallScreen.style';
import Slide from '../../components/Slide';
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
const PaywallScreen = () => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/paywallBG.jpg')}
        resizeMode="cover"
        style={styles.image}>
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
      <View style={styles.buttonsContainer}></View>
    </>
  );
};

export default PaywallScreen;
