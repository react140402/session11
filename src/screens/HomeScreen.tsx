/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@rneui/themed';


function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Salam Donay 💃</Text>
    </View>
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

export default HomeScreen;
