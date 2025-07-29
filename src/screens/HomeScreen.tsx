/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { supabase } from '../api';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Counter">;

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    const { data, count, error } = await supabase
      .from('DrugStore')
      .select('*', { count: 'exact' })
      .limit(1)
      ;
    console.log(count);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Salam Donay 💃</Text>
      <Button onPress={() => navigation.navigate("Counter")}>Counter</Button>
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
