/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Counter: CounterScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {

  return (
    <Navigation />
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
