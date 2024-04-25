import React, { useCallback, useEffect, useState } from 'react';
import { memo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchOpportunityLineItem } from '../lib/api';
import { useTranslation } from 'react-i18next';
import { Button as PaperButton } from 'react-native-paper';
import ExpandableListItem from '../components/ExpandableListItem';
import ProductExchangeDialog from '../components/ProductExchangeDialog';
import { OpportunityLineItem } from '../data/Record';

const BxBExchange = () => {
  const [showDialog, setShowDialog] = useState(false);
  const { t } = useTranslation();

  const {
    isPending: pending,
    error: productFetchError,
    data: productsData,
    isFetching,
  } = useQuery<OpportunityLineItem[], Error>({
    queryKey: ['opportunitylineitem'],
    queryFn: () => fetchOpportunityLineItem(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData:[]
  });

  const [listData, setListData] = useState([
    {
      id: 1,
      name: t('ProductsReceived'),
      action: t('AddReturn'),
    },
    {
      id: 2,
      name: t('ProductsDelivered'),
      action: t('AddDelivery'),
    },
  ]);

  const bxbChange = 0;
  const mxbChange = 0;
  const exchange = 0;
  const gifts = 0;
  const discount = 0;
  const ieps = 0;
  const iva = 0;

  const productItem = {
    productId: '11',
    productCode: 'PEP Pro',
    productName: 'PepsiCo',
    itemDetail: 'PepsiCo Brnad products',
    productPrice: 14.5,
    productWeight: 10,
    productQuantity: 100,
    productSuggestedQuantity: 10,
  };

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
        {t('Total')} {t('Changes')} BxB: $0.0
      </Text>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
    backgroundColor: 'rgb(7, 90, 154)',
    padding: 10,
    marginTop: 20,
    color: '#FFF',
    borderRadius: 5,
  },
  buttonBox: {
    margin: 10,
  },
});

export default memo(BxBExchange);
