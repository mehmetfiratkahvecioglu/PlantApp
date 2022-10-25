import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const handleADD = () => {
    dispatch({type: 'ADD_LIST', payload: {name: 'xxx'}});
  };

  return (
    <SafeAreaView>
      <Text>ProfileScreen</Text>
      <TouchableOpacity style={{height: 100, width: 400}} onPress={handleADD}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Add Name</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
