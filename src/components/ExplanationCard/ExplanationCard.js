import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './ExplanationCard.style';

const explanationCard = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        resizeMode={'stretch'}
        style={styles.image}
        imageStyle={{borderRadius: 12}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default explanationCard;
