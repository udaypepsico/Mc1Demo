import React, { useState } from 'react';
import { memo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Touchable,
} from 'react-native';
import { ProductsType } from '../data/Products';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchOpportunity, fetchOpportunityLineItem } from '../lib/api';
import { useTranslation } from 'react-i18next';
import { Button as PaperButton } from 'react-native-paper';
import ExpandableListItem from '../components/ExpandableListItem';
import { Opportunity, OpportunityLineItem } from '../data/Record';
import { useSelectedOpportunityFetch } from '../hooks/useSelectedOpportunityFetch';

const CheckoutScreen = () => {
  const queryClient = useQueryClient();

  const { t } = useTranslation();

  const {
    isPending: opportunityPending,
    error: opportunityFetchError,
    data: OpportunityData,
    isFetching: isOpportunityFetching,
  } = useQuery<Opportunity[], Error>({
    queryKey: ['opportunity'],
    queryFn: () => fetchOpportunity(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: [],
  });

  const {
    isPending: pending,
    error: productFetchError,
    data: OpportunityLineItemData,
    isFetching,
  } = useQuery<OpportunityLineItem[], Error>({
    queryKey: ['opportunityLineItem'],
    queryFn: () => fetchOpportunityLineItem(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: [],
  });

  const accountId = queryClient.getQueryData(['accountId']) as string;

  const selectedOpportunityData = useSelectedOpportunityFetch(
    accountId,
    OpportunityData,
    OpportunityLineItemData
  );

  const CheckoutItem = ({ item }: any) => (
    <View>
      <Text>{item.Name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{t('Final Checkout')}</Text>
      {selectedOpportunityData?.map((item) => (
        <CheckoutItem item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  textContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    fontSize: 14,
    paddingLeft: 10,
  },
  itemName: {
    color: '#fff',
  },
  rightArrow: {
    position: 'absolute',
    right: 10,
    top: 2,
    fontSize: 40,
    color: '#fff',
  },
  itemHeading: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop: 20,
    color: '#FFF',
  },
  buttonBox: {
    margin: 10,
  },
});

export default memo(CheckoutScreen);
