import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './Screens/MainScreen';
import Profile from './Screens/Profile';
import Manager from './Screens/Manager';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} options={{tabBarLabel: 'Home', tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
          name="home-heart"
          color={color}
          size={26} /> )}}/>
        <Tab.Screen name="Meds" component={Manager} options={{tabBarLabel: 'Meds', tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
          name="medical-bag"
          color={color}
          size={26} /> )}}/>
        <Tab.Screen name="More" component={Profile} options={{tabBarLabel: 'More', tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
          name="menu"
          color={color}
          size={26} /> )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
