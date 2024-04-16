import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { selectedDate } from '../lib/api';

const DateTimeComponent = ({ selectedDate }: { selectedDate: Date }) => {

  const queryClient = useQueryClient();

  const dateOfDelivery = (queryClient.getQueryData(['selectedDate']) as selectedDate) && 
                          (queryClient.getQueryData(['selectedDate']) as selectedDate).selectedDate;

  useEffect(() => {

  }, [selectedDate]);

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>
        {dateOfDelivery && dateOfDelivery.toLocaleDateString('en-us', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  dateText: {
    color: '#4C4E4E',
  },
});

export default memo(DateTimeComponent);
