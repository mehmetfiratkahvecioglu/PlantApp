import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './HomeScreen.style';
import ExplanationCard from '../../../components/ExplanationCard';
import CategoryCard from '../../../components/CategoryCard';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
const explanationCardSlides = [
  {
    id: '1',
    image: require('../../../assets/Background.jpg'),
    title: 'How to identify plants easily with PlantApp?',
  },
  {
    id: '2',
    image: require('../../../assets/vegetable.jpg'),
    title: 'Species and varieties, what are the differences?',
  },
];

const categoryCardSlides = [
  {
    image: require('../../../assets/CategoryBackground1.jpg'),
    title: 'Edible Plants',
  },
  {
    id: '2',
    image: require('../../../assets/CategoryBackground2.jpg'),
    title: 'Ferns',
  },
  {
    id: '3',
    image: require('../../../assets/CategoryBackground3.jpg'),
    title: 'Cacti and Succulents',
  },
  {
    id: '4',
    image: require('../../../assets/CategoryBackground4.jpg'),
    title: 'Palms',
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');
  const message = useSelector(s => s.message);

  useEffect(() => {
    dispatch({type: 'Change_Message'});
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        resizeMode={'stretch'}
        source={require('../../../assets/HomePageBackground.jpg')}
        style={styles.imageBackground}>
        <Text style={styles.firstText}>Hi, plant lover!</Text>
        <Text style={styles.secondText}>{message}</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../../assets/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search for plants"
            placeholderTextColor={'rgba(175, 175, 175, 1)'}
          />
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Text style={styles.thirdText}>Get Started</Text>
        <FlatList
          data={explanationCardSlides}
          renderItem={({item}) => <ExplanationCard item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'center'}}
        showsVerticalScrollIndicator={false}
        key={'#'}
        keyExtractor={item => '#' + item.id}
        numColumns={2}
        data={categoryCardSlides}
        renderItem={({item}) => <CategoryCard item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
