import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './CategoryCard.style';
const CategoryCard = ({item}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        style={styles.image}
        imageStyle={{borderRadius: 12}}>
        <Text style={styles.title}>{item.title}</Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryCard;
