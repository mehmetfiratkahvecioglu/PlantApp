import {SafeAreaView, Text, FlatList, View, Image} from 'react-native';
import React from 'react';
import styles from './OnboardingFirstScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import GreenButton from '../../components/GreenButton';
const slides = [
  {
    id: '1',
    image: require('../../assets/Phone.png'),
    title: 'Take a photo to identify the plant!',
  },
  {
    id: '2',
    image: require('../../assets/Phone.png'),
    title: 'xxxxdsfdsf s dsfdsff sd dsf',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={require('../../assets/Phone.png')} style={styles.image} />
    </View>
  );
};

const OnboardingFirstScreen = () => {
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
      <FlatList
        data={slides}
        contentContainerStyle={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
      />
      <GreenButton title={'sfsdf'} />
    </LinearGradient>
  );
};

export default OnboardingFirstScreen;
