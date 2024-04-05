import React, { useState } from 'react';
import { memo } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { DateContainerType, generateDateTime } from '../core/utils';
import { Text } from 'react-native-paper';
import { useQueryClient } from '@tanstack/react-query';

const DateScrollContainer = ({ type,updateSelectedDate }: { type: string;updateSelectedDate:any }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const dateComponent: DateContainerType[] = generateDateTime(type, 30);
  const queryClient = useQueryClient();
  
  return (
    <View>
      <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
        {dateComponent.map((itemType, index) => {
          return (
            <Pressable
              style={[
                styles.dateContainerView,
                {
                  backgroundColor:
                    index === selectedItem ? '#17A3DA' : 'transparent',
                },
              ]}
              key={'_key ' + itemType.WeekDay + itemType.DateString}
              onPress={() => {
                setSelectedItem(index);
                queryClient.setQueryData(['selectedDate'], { selectedDate:new Date(Date.parse(itemType.DateFormatString!)) });
                updateSelectedDate(itemType.DateFormatString);
              }}
            >
              <Text style={{ color: 'white', fontSize: 10,fontWeight:'bold',paddingHorizontal:5 }}>
                {itemType.WeekDay}
              </Text>
              <Text style={{ color: 'white', fontSize: 10,fontWeight:'bold',paddingHorizontal:5 }}>
                {itemType.DateString}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal:10,
  },
  dateContainerView: {
    minHeight:40,
    flexDirection: 'column',
    padding: 5,
    marginHorizontal:5,
    marginBottom:10,
    justifyContent: 'space-between',
    borderRadius:5,
    alignContent:'center'
  },
});

export default memo(DateScrollContainer);
