import React from 'react';
import { memo } from 'react';
import { Dimensions, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const BarChartComponent = () => {
  const stackData = [
    {
      stacks: [
        { value: 10, color: 'orange' },
        { value: 20, color: '#4ABFF4'},
      ],
      label: 'Total',
      barWidth:70
    },
  ];

  return (
    <View style={{backgroundColor:'blue'}}>
      <BarChart
        width={Dimensions.get('window').width}
        height={100}
        backgroundColor='red'
        isAnimated
        horizontal
        spacing={20}
        noOfSections={1}
        barBorderRadius={6}
        stackData={stackData}
        xAxisThickness={0}
        yAxisThickness={0}
      />
    </View>
  );
};

export default memo(BarChartComponent);
