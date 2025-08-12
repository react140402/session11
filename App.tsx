
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './src/screens/HomeTab';
import DrugStoreTab from './src/screens/DrugStoreTab';
import Icon from '@react-native-vector-icons/material-design-icons';
const Tab = createBottomTabNavigator();


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (

    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="HomeTab"
          component={HomeTab}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (<Icon name="home" size={size} color={color} />)
          }}
        />
        <Tab.Screen name="DrugStoresTab" component={DrugStoreTab}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (<Icon name="heart" size={size} color={color} />)
          }} />
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
