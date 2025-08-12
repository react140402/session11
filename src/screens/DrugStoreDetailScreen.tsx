import { Button, Card, Divider, ListItem, Text } from "@rneui/base";
import { Image, Linking, ScrollView, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../api";
import { useEffect, useState } from "react";
import Icon from '@react-native-vector-icons/material-design-icons';
import axios from "axios";
import SvgUri from "expo-svg-uri";

type Props = NativeStackScreenProps<RootStackParamList, 'DrugStoreDetail'>;


export default function DrugStoreDetailScreen({ route }: Props) {

    const [drugStore, setDrugStore] = useState<any>({})
    const [user, setUser] = useState<any>({})
    useEffect(() => {
        loadData();
    }, []);
    async function loadData() {
        const { data, error } = await supabase
            .from('DrugStore')
            .select('*')
            .eq('id', route.params.id)
            ;

        if (data)
            setDrugStore(data[0])
        const resp = await axios("https://jsonplaceholder.typicode.com/users/1");
        setUser(resp.data);
    }


    async function loadDataParllel() {
        supabase
            .from('DrugStore')
            .select('*')
            .eq('id', route.params.id)
            .then((data: any) => {
                if (data)
                    setDrugStore(data[0])
            })
            ;

        axios("https://jsonplaceholder.typicode.com/users/1")
            .then((resp: any) => {
                setUser(resp.data);
            });


    }

    const handleCall = () => {
        if (drugStore.telNumber) {
            Linking.openURL(`tel:${drugStore.telNumber}`);
        }
    };

    const handleOpenMap = () => {
        const lat = parseFloat(drugStore.latitude);
        const lng = parseFloat(drugStore.longitude);
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        Linking.openURL(url);
    };

    const formatValue = (value: any) => (value === null || value === '' ? 'نامشخص' : value);

    //Image: url <Image source={{uri: }} />

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <Card>
                <Card.Title style={styles.title}>{drugStore.name}</Card.Title>
                <Card.Divider />
                <View style={styles.infoRow}>
                    <Icon name="home" color="#007AFF" size={16} />
                    <Text style={styles.infoText}>
                        شهر: {formatValue(drugStore.city)}، منطقه: {formatValue(drugStore.county)}
                    </Text>
                </View>
                {drugStore.telNumber ? (
                    <ListItem bottomDivider onPress={handleCall}>
                        <Icon name="phone" color="#007AFF" />
                        <ListItem.Content>
                            <ListItem.Title>تماس با داروخانه</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ) : (
                    <View style={styles.infoRow}>
                        <Icon name="phone" color="#ccc" size={16} />
                        <Text style={[styles.infoText, { color: '#999' }]}>شماره تماس: نامشخص</Text>
                    </View>
                )}
            </Card>

            {/* Details */}
            <Card>
                <Card.Title>اطلاعات تکمیلی</Card.Title>
                <Divider />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>نام مالک:</Text>
                    <Text style={styles.value}>{formatValue(drugStore.ownerName)}</Text>
                    {/* <Image style={styles.avatar} source={{ uri: 'https://api.dicebear.com/9.x/miniavs/svg?seed=' + drugStore.ownerName }} /> */}
                    {/* <Image style={styles.avatar} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> */}
                    <SvgUri
                        width={60}
                        height={60}
                        source={{
                            uri: 'https://api.dicebear.com/9.x/miniavs/svg?seed=' + drugStore.ownerName,
                        }}
                    />
                </View>
                <Divider style={styles.divider} />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>کارشناس فنی:</Text>
                    <Text style={styles.value}>{formatValue(drugStore.technicalExpert)}</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>دانشگاه:</Text>
                    <Text style={styles.value}>{formatValue(drugStore.university)}</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>آدرس:</Text>
                    <Text style={styles.value}>{formatValue(drugStore.address)}</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>سرویس دارویی:</Text>
                    <Text style={styles.value}>{formatValue(drugStore.pharmacyService1)}</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>نوع داروخانه:</Text>
                    <Text style={styles.value}>{formatValue(drugStore.pharmacyType)}</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.detailRow}>
                    <Text style={styles.label}>GLN:</Text>
                    <Text style={styles.value}>{formatValue(drugStore.gln)}</Text>
                </View>
            </Card>

            {/* Location Map */}
            <Card>
                <Card.Title>موقعیت مکانی</Card.Title>
                <Text style={styles.mapHint}>طول جغرافیایی: {drugStore.longitude}</Text>
                <Text style={styles.mapHint}>عرض جغرافیایی: {drugStore.latitude}</Text>
                <Button
                    title="مشاهده در نقشه"
                    icon={<Icon name="map" color="white" size={14} />}
                    onPress={handleOpenMap}
                    buttonStyle={styles.mapButton}
                />

                {/* Optional: Embedded Map */}
                <View style={styles.mapContainer}>
                    {/* <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(clinic.latitude),
              longitude: parseFloat(clinic.longitude),
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            zoomEnabled={false}
            scrollEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: parseFloat(clinic.latitude),
                longitude: parseFloat(clinic.longitude),
              }}
              title={clinic.name}
            />
          </MapView> */}
                </View>
            </Card>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>شناسه: {drugStore.id}</Text>
                <Text style={styles.footerText}>کاربر: {user.name}</Text>

            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#007AFF',
    },
    avatar: {
        width: 60,
        height: 60
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
    },
    infoText: {
        marginLeft: 10,
        fontSize: 16,
        textAlign: 'right',
        direction: 'rtl',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'right',
        width: '40%',
    },
    value: {
        fontSize: 14,
        color: '#555',
        textAlign: 'left',
        flex: 1,
    },
    divider: {
        marginVertical: 4,
    },
    mapHint: {
        textAlign: 'center',
        color: '#666',
        fontSize: 14,
        marginVertical: 4,
    },
    mapButton: {
        backgroundColor: '#007AFF',
        marginTop: 10,
        borderRadius: 8,
    },
    mapContainer: {
        height: 200,
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    footer: {
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#999',
    },
});