import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../../pages/GetStarted';
import OnboardingFirstScreen from '../../pages/OnboardingFirstScreen';
import PaywallScreen from '../../pages/PaywallScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen
        name="OnboardingFirstScreen"
        component={OnboardingFirstScreen}
      />
      <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
