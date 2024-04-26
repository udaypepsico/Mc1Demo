import React, { useCallback } from 'react';
import { memo } from 'react';
import { ListRenderItem, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DonutChartComponent from './DonutChartComponent';

interface ProgressIndicatorType {
  id: number;
  name: string;
  percentage: number;
}

const RouteComponent = () => {
  const progressIndicators: ProgressIndicatorType[] = [
    { id: 1, name: 'Sent vs Delivered', percentage: 50 },
    { id: 2, name: 'Del', percentage: 10 },
    { id: 3, name: 'Merch', percentage: 30 },
    { id: 4, name: 'Work Order', percentage: 15 },
    { id: 5, name: 'MEM', percentage: 20 },
    { id: 6, name: 'POP', percentage: 40 },
  ];

  const renderItem: ListRenderItem<ProgressIndicatorType> = useCallback(
    ({ item, index }: { item: ProgressIndicatorType; index: number }) => (
      <DonutChartComponent name={item.name} percentage={item.percentage} />
    ),
    [progressIndicators]
  );

  return (
      <FlatList
        style = {styles.listStyle}
        horizontal
        data={progressIndicators}
        keyExtractor={(item) => 'key_' + item.id.toString()}
        renderItem={renderItem}
        
      />
  );
};

const styles = StyleSheet.create({
  listStyle:{
    margin:10
  }
});

export default memo(RouteComponent);
