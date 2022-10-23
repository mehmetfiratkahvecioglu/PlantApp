import React from 'react';
import GetStarted from './pages/GetStarted';
import OnboardingFirstScreen from './pages/OnboardingFirstScreen';
import PaywallScreen from './pages/PaywallScreen';
import TabNavigator from './Navigation/TabNavigator';
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
        <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
