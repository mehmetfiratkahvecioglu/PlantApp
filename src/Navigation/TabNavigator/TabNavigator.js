import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/TabNavigatorScreens/HomeScreen';
import ProfileScreen from '../../pages/TabNavigatorScreens/ProfileScreen';
import DiagnoseScreen from '../../pages/TabNavigatorScreens/DiagnoseScreen';
import MyGardenScreen from '../../pages/TabNavigatorScreens/MyGardenScreen';
import ScanScreen from '../../pages/TabNavigatorScreens/ScanScreen';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 74,
        height: 64,
      }}>
      <View
        style={{
          width: 74,
          height: 64,
          borderRadius: 32,
          flex: 1,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 2}}>
              <Image
                source={require('../../assets/Home.png')}
                style={{
                  width: 21,
                  height: 21,
                  tintColor: focused ? '#28AF6E' : '#BDBDBD',
                  margin: 2,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: focused ? '#28AF6E' : '#BDBDBD',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DiagnoseScreen"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 2}}>
              <Image
                source={require('../../assets/Diagnose.png')}
                style={{
                  width: 21,
                  height: 21,
                  tintColor: focused ? '#28AF6E' : '#BDBDBD',
                  margin: 2,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: focused ? '#28AF6E' : '#BDBDBD',
                }}>
                Diagnose
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../../assets/Scan.png')}
                resizeMode="stretch"
                style={{width: 74, height: 64}}
              />
            );
          },
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="MyGardenScreen"
        component={MyGardenScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 2}}>
              <Image
                source={require('../../assets/MyGarden.png')}
                style={{
                  width: 21,
                  height: 21,
                  tintColor: focused ? '#28AF6E' : '#BDBDBD',
                  margin: 2,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: focused ? '#28AF6E' : '#BDBDBD',
                }}>
                My Garden
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 2}}>
              <Image
                source={require('../../assets/Profile.png')}
                style={{
                  width: 21,
                  height: 21,
                  tintColor: focused ? '#28AF6E' : '#BDBDBD',
                  margin: 2,
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: focused ? '#28AF6E' : '#BDBDBD',
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
