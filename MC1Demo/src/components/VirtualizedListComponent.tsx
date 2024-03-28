import React, { Ref, useImperativeHandle, useRef } from 'react';
import { memo } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Record } from '../data/Record';
import { Text } from 'react-native-paper';
import CustomerItem from './CustomerItem';
import {
  RefetchOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { DotIndicator } from 'react-native-indicators';
import { fetchData } from '../lib/api';

const VirtualizedListComponent = ({
  selectedIndex,
  itemSelected,
  onDeletePressed,
  children,
}: {
  selectedIndex: number;
  itemSelected: any;
  onDeletePressed: any;
  children: React.ReactNode;
}) => {
  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery<Record[], Error>({
    queryKey: ['accounts'],
    queryFn: () => fetchData(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const onScrolled = async (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y < -100) {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    }
  };

  return isPending || isFetching ? (
    <DotIndicator color="red" />
  ) : (
    <FlatList
      data={data}
      style={styles.listContainer}
      renderItem={({ item, index }: { item: Record; index: number }) => (
        <View
          style={{
            paddingHorizontal: 10,
            backgroundColor: '#F1F5F7',
            padding: 10,
          }}
        >
          <CustomerItem
            customerRecord={item}
            index={index}
            itemPress={itemSelected}
            selectedIndex={selectedIndex}
            onDeletePressed={onDeletePressed}
          />
        </View>
      )}
      ListFooterComponent={() => <View style={{ height: 30 }}></View>}
      keyExtractor={(item, index) => 'key_' + item.Id}
      extraData={selectedIndex}
      ListEmptyComponent={
        <View style={styles.emptyListView}>
          <Text>No Customer Record Found</Text>
        </View>
      }
      ListHeaderComponent={<>{children}</>}
      initialNumToRender={10}
      getItemLayout={(data, index) => ({
        length: 200,
        offset: (100 + 15) * index,
        index,
      })}
      onScrollEndDrag={onScrolled}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {},
  emptyListView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F7',
  },
});

export default memo(VirtualizedListComponent);
