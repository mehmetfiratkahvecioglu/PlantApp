import React from 'react';
import OnboardingFirst from './pages/Onboarding/OnboardingFirst';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
