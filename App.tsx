/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Salam Donay</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setCounter(counter + 1)} >
        <Text>+</Text>
      </TouchableOpacity>
      <Text>{counter}</Text>
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

export default App;
