/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Button, Card, Text } from '@rneui/themed';
import Icon from '@react-native-vector-icons/material-design-icons';
import { supabase } from '../api';



const PageSize = 10;
export default function DrugStoresScreen() {
  const [page, setPage] = useState(0);
  const [drugStoreList, setDrugStoreList] = useState<any[]>([])

  useEffect(() => {
    loadData();
  }, [page])

  async function loadData() {
    console.log(page)
    const { data, error } = await supabase
      .from('DrugStore')
      .select('*', { count: 'exact' })
      .range(page * PageSize, ((page + 1) * PageSize) - 1)
      ;
    if (data)
      setDrugStoreList([...drugStoreList, ...data])
  }

  return (
    <>
      <Text>Drug Stores</Text>
      <FlatList data={drugStoreList}
        renderItem={({ item }) => <>

          <Card>
            <Text h4>{item.name}</Text>
            <Button size="sm" type="clear">
              <Icon name='more'></Icon>
            </Button>
          </Card>
        </>}
        keyExtractor={(item) => item.id}
        onEndReached={() => setPage(page + 1)}
      />



    </>
  );
}


