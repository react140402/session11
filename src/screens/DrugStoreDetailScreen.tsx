import { Text } from "@rneui/base";
import { View } from "react-native";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'DrugStoreDetail'>;


export default function DrugStoreDetailScreen({ route }: Props) {
    return (
        <View>
            <Text>DrugStoreScree {route.params.id}</Text>
        </View>
    )
}
