import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Slide.style';
const Slide = ({title, subtitle, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Slide;
