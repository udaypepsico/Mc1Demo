import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ProductStack from './ProductStack';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const MyDayScreen = () => {
  const navigation = useNavigation();

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
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Button
              title="Go to Products"
              onPress={() => navigation.navigate('ProductsTab')}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default memo(MyDayScreen);
