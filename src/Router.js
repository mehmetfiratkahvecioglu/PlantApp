import React from 'react';
import TabNavigator from './Navigation/TabNavigator';
import StackNavigator from './Navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserProvider from './context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function Router() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(() => {
    const AsyncStorageFunction = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }

      // AsyncStorage.removeItem('isAppFirstLaunched');
    };

    AsyncStorageFunction();
  }, []);

  return (
    isAppFirstLaunched != null && (
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAppFirstLaunched && (
              <Stack.Screen name="StackNavigator" component={StackNavigator} />
            )}
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    )
  );
}

export default Router;
