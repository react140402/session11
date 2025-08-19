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
import { RootStackParamList } from '../RootStackParamList';
import { supabase } from '../api';
import Svg, { Circle, Rect } from 'react-native-svg';


type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Counter" | "DrugStores">;

function HomeScreen() {
  const navigation = useNavigation<any>();

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
      <Button onPress={() => navigation.navigate("DrugStoresTab")}>Drug Store</Button>
      <Button onPress={() => navigation.navigate("Voice")}>Voice</Button>
      <Image style={styles.logo} source={require('../../assets/app-logo.png')}></Image>
      <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
        <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
      </Svg>
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
