import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ProductStack from './ProductStack';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { authenticate } from '../lib/api';
import { Record } from '../data/Record';
import { DotIndicator } from 'react-native-indicators';
import { ErrorMessage } from '../components/ErrorMessage';

const MyDayScreen = () => {
  const navigation = useNavigation();

  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery<Record[], Error>({
    queryKey: ['accounts'],
    queryFn: () => authenticate(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isPending) return <DotIndicator color="red" />;

  if (error) return <ErrorMessage message={error.message}></ErrorMessage>;

  if (!data) return null;

  // Invalidate queries

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: addTodo,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //     queryClient.invalidateQueries({ queryKey: ['reminders'] })
  //   },
  // })

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="blue" />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: '#054997',
          }}
        >
          {/* <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Button
              title="Go to Products"
              onPress={() => navigation.navigate('ProductsTab')}
            />
          </View> */}
          <View style={styles.container}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.Name}</Text>
              )}
              keyExtractor={(item, index) => 'key_' + index}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default memo(MyDayScreen);
