/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { supabase } from '../api';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Counter" | "DrugStores">;

function HomeScreen() {
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
    <>
      <Text>Salam Donay 💃</Text>
      <Button onPress={() => navigation.navigate("Counter")}>Counter</Button>
      <Button onPress={() => navigation.navigate("DrugStores")}>Drug Store</Button>
      <Image style={styles.logo} source={require('../../assets/app-logo.png')}></Image>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 300
  },
  btn: {
    backgroundColor: '#ccc',
    padding: 10
  },
});

export default HomeScreen;
