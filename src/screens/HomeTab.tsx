

import CounterScreen from './CounterScreen';
import DrugStoresScreen from './DrugStoresScreen';
import DrugStoreDetailScreen from './DrugStoreDetailScreen';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';
import HomeScreen from './HomeScreen';
import { createStaticNavigation } from '@react-navigation/native';
import VoiceScreen from './VoiceScreen';


// const RootStack = createNativeStackNavigator<RootStackParamList>({
//     initialRouteName: 'Home',
//     screens: {
//         Home: HomeScreen,
//         Counter: CounterScreen,
//         DrugStores: DrugStoresScreen,
//         DrugStoreDetail: DrugStoreDetailScreen
//     },
// });

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function HomeTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Counter" component={CounterScreen} />
            <Stack.Screen name="Voice" component={VoiceScreen} />
            {/* <Stack.Screen name="DrugStores" component={DrugStoresScreen} />
            <Stack.Screen name="DrugStoreDetail" component={DrugStoreDetailScreen} /> */}
        </Stack.Navigator>
    )
}
