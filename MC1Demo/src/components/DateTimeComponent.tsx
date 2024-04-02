import React, { useEffect, useState } from 'react';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const DateTimeComponent = ({ selectedDate }: { selectedDate: Date }) => {
  const [deliveryDate, setDeliveryDate] = useState<Date>(new Date());

  useEffect(() => {
    setDeliveryDate(selectedDate);
  }, [selectedDate]);

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>
        {deliveryDate.toLocaleDateString('en-us', {
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
