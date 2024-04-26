import React from 'react';
import { memo } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { Text } from 'react-native-paper';

const DonutChartComponent = ({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) => {
  const pieData = [
    { value: percentage, color: '#3CE27B' },
    { value: 100 - percentage, color: '#D4D4D4' },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        focusOnPress
        donut
        radius={25}
        innerRadius={15}
        textSize={10}
        data={pieData}
        centerLabelComponent={() => {
          return <Text style={{ fontSize: 10 }}>{percentage}%</Text>;
        }}
      />
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //maxHeight: (Dimensions.get('window').width - 20) / 6 + 20,
    maxWidth: (Dimensions.get('window').width - 20) / 6,
    padding: 10,
    alignItems:'center',
  },
  textStyle: {
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 10,
    paddingTop:10,
    textAlign:'center',
    fontWeight:'400'
  },
});

export default memo(DonutChartComponent);
