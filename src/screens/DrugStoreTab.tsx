import DrugStoresScreen from './DrugStoresScreen';
import DrugStoreDetailScreen from './DrugStoreDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParamList';


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function DrugStoreTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DrugStores" component={DrugStoresScreen} />
            <Stack.Screen name="DrugStoreDetail" component={DrugStoreDetailScreen} />
        </Stack.Navigator>
    )
}
