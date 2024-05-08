import { useQueryClient } from '@tanstack/react-query';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { selectedDate } from '../lib/api';
import { t } from 'i18next';

const DateTimeComponent = ({ selectedDate }: { selectedDate: Date }) => {

  const queryClient = useQueryClient();

  const dateOfDelivery = (queryClient.getQueryData(['selectedDate']) as selectedDate) &&
    (queryClient.getQueryData(['selectedDate']) as selectedDate).selectedDate;

  const localeDate = (d: any) => {
    let dateString = d.toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });
    dateString = dateString.replace(',', '');
    const dateStrAr = dateString.split(' ');
    return t('Days.' + dateStrAr[0]) + ', ' + t('Months.' + dateStrAr[1]) + ' ' + dateStrAr[2] + ' ' + dateStrAr[3];
  }
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>
        {
          /*dateOfDelivery && dateOfDelivery.toLocaleDateString('en-us', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })*/
          dateOfDelivery && localeDate(dateOfDelivery)
        }
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
