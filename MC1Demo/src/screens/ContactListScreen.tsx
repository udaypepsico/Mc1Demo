import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { oauth, net } from 'react-native-force';
import { Response } from '../data/Response';
import { Record } from '../data/Record';
import { NetworkMode, useQuery, useQueryClient } from '@tanstack/react-query';
import { DotIndicator } from 'react-native-indicators';
import { ErrorMessage } from '../components/ErrorMessage';
import { authenticate, fetchData } from '../lib/api';

const ContactListScreen = () => {

  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery<Record[],Error>({
    queryKey: ['accounts'],
    queryFn: () => authenticate(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isPending) return <DotIndicator color="red" />;

  if (error) return <ErrorMessage message={error.message}></ErrorMessage>;

  if (!data) return null;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.Name}</Text>}
        keyExtractor={(item, index) => 'key_' + index}
      />
    </View>
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

export default memo(ContactListScreen);
