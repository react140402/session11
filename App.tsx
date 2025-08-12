/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import DrugStoresScreen from './src/screens/DrugStoresScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './src/screens/HomeTab';
import CounterScreen from './src/screens/CounterScreen';
import DrugStoreTab from './src/screens/DrugStoreTab';

const Tab = createBottomTabNavigator();


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (

    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
        <Tab.Screen name="DrugStoresTab" component={DrugStoreTab} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#ccc',
    padding: 10
  },
});

export default App;
