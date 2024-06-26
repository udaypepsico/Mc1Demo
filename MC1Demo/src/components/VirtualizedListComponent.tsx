import React, { Ref, useCallback, useImperativeHandle, useRef } from 'react';
import { memo } from 'react';
import {
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Visits } from '../data/Record';
import { Text } from 'react-native-paper';
import CustomerItem from './CustomerItem';
import {
  RefetchOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { DotIndicator } from 'react-native-indicators';
import { fetchVisitData } from '../lib/api';
import { selectedIndexVisitType } from '../screens/MyDayScreen';

const VirtualizedListComponent = ({
  selectedIndexVisit,
  itemSelected,
  onCancelVisit,
  onCheckInPressed,
  children
}: {
  selectedIndexVisit: selectedIndexVisitType;
  itemSelected: any;
  onCheckInPressed: any;
  onCancelVisit: any;
  children: React.ReactNode;
}) => {
  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery<Visits[], Error>({
    queryKey: ['visits'],
    queryFn: () => fetchVisitData(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const onScrolled = async (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y < -100) {
      queryClient.invalidateQueries({ queryKey: ['visits'] });
    }
  };
  
  const renderItem: ListRenderItem<Visits> = useCallback(
    ({ item, index }: { item: Visits; index: number }) => (
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
          selectedIndex={selectedIndexVisit.selectedIndex}
          onCancelVisit={onCancelVisit}
          onCheckInPressed={onCheckInPressed}
        />
      </View>
    ),
    [selectedIndexVisit]
  );

  return isPending || isFetching ? (
    <DotIndicator color="red" />
  ) : (
    <FlatList
      data={data}
      style={styles.listContainer}
      renderItem={renderItem}
      ListFooterComponent={() => <View style={{ height: 30 }}></View>}
      keyExtractor={(item, index) => 'key_' + item.Id}
      extraData={selectedIndexVisit}
      ListEmptyComponent={
        <View style={styles.emptyListView}>
          <Text>No Customer Record Found</Text>
        </View>
      }
      ListHeaderComponent={<>{children}</>}
      initialNumToRender={10}
      maxToRenderPerBatch={5}
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
