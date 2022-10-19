import React from 'react';
import GetStarted from './pages/GetStarted';
import OnboardingFirstScreen from './pages/OnboardingFirstScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen
          name="OnboardingFirstScreen"
          component={OnboardingFirstScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
