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
import { fetchOpportunityLineItem } from '../lib/api';
import { useTranslation } from 'react-i18next';
import { Button as PaperButton } from 'react-native-paper';
import ExpandableListItem from '../components/ExpandableListItem';
import ProductExchangeDialog from '../components/ProductExchangeDialog';
import { OpportunityLineItem } from '../data/Record';

const MxBExchange = () => {
  const [showDialog, setShowDialog] = useState(false);
  const { t } = useTranslation();
  const {
    isPending: pending,
    error: productFetchError,
    data: productsData,
    isFetching,
  } = useQuery<OpportunityLineItem[], Error>({
    queryKey: ['selectedOpportunityLineItem'],
    queryFn: () => fetchOpportunityLineItem(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
  const listData = [
    { id: 1, name: t('ProductsReceived'), action: t('AddReturn') },
    { id: 2, name: t('ProductsDelivered'), action: t('AddDelivery') },
  ];
  const exchangeItems = productsData?.filter((item, index) => {
    return index < 2;
  })
  const productExchangeHandler = (id: any) => {
    setShowDialog(true);
  }
  const hideDialog = () => {
    setShowDialog(false);
  }
  const renderItem = ({ item }: any) => (
    <View>
      <ExpandableListItem
        clickedChildren={<Text style={styles.itemName}>{item.name}</Text>}
        expandedChildren={
          <PaperButton mode="contained" style={styles.buttonBox} onPress={() => productExchangeHandler(item.id)} >
            {item.action}
          </PaperButton>
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {t('Total')} {t('Changes')} MxB: $0.0
      </Text>
      <FlatList
        data={listData}
        renderItem={renderItem}
      />
      <ProductExchangeDialog products={exchangeItems} visible={showDialog} hideDialog={hideDialog} />
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

export default memo(MxBExchange);
