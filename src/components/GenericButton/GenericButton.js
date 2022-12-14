import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './GenericButton.style';
import LinearGradient from 'react-native-linear-gradient';

const GenericButton = ({
  title,
  detail,
  theme,
  selectedRadioButton,
  onPress,
  name,
}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[
          styles[theme].lineerFirstColor,
          styles[theme].lineerSecondColor,
          styles[theme].lineerThirdColor,
        ]}
        style={styles[theme].innerContainer}>
        <View style={styles[theme].radioContainer}>
          <View style={styles[theme].radioButton}>
            {selectedRadioButton === name && (
              <View style={styles[theme].outerRadioButton}>
                <View style={styles[theme].innerRadioButton} />
              </View>
            )}
          </View>
        </View>
        <View style={styles[theme].textsContainer}>
          <Text style={styles[theme].title}>{title}</Text>
          <Text style={styles[theme].detail}>{detail}</Text>
        </View>
        {theme === 'secondary' && (
          <View style={styles[theme].saleContainer}>
            <View style={styles[theme].innerSaleContainer}>
              <Text style={styles[theme].saleText}>Save 50%</Text>
            </View>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GenericButton;
