import {SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
const MyGardenScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'ADD_LIST', payload: {name: 'sayfa açılınca değişti'}});

    dispatch({type: 'Change_Message'});
  }, []);

  const name = useSelector(s => s.name);
  const message = useSelector(s => s.message);

  return (
    <SafeAreaView>
      <Text>MyGardenScreen </Text>
      <Text>name: {name}</Text>
      <Text>saate göre mesaj : {message}</Text>
    </SafeAreaView>
  );
};

export default MyGardenScreen;
