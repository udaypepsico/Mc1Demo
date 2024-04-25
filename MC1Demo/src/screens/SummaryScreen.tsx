import React, { useEffect, useLayoutEffect } from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Route } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProducts, getSelectedOpportunityItems } from '../lib/api';
import { useTranslation } from 'react-i18next';
import ExpandableListItem from '../components/ExpandableListItem';
import { Button } from 'react-native-paper';
import { OpportunityLineItem } from '../data/Record';

const SummaryScreen = ({route}: Route) => {
  const { accountId } = route.params;
  const { t } = useTranslation();
  
  const {
    isPending: pending,
    error: productFetchError,
    data: productsData,
    isFetching,
  } = useQuery<OpportunityLineItem[], Error>({
    queryKey: ['selectedOpportunityLineItem'],
    queryFn: () => getSelectedOpportunityItems(accountId),
    staleTime: Infinity,
    gcTime: Infinity,
  });


  let totalPrice = 0;
  let totalPieces = 0;
  const bxbChange = 0;
  const mxbChange = 0;
  const exchange = 0;
  const gifts = 0;
  const discount = 0;
  const ieps = 0;
  const iva = 0;

  productsData?.forEach((p: OpportunityLineItem) => {
    totalPrice += p.UnitPrice * p.Quantity;
    totalPieces += p.Quantity;
  })

  const total = totalPrice + bxbChange + mxbChange + exchange;
  const subTotal = total - gifts - discount - ieps - iva;

  const SummaryList = () => (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('Product')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('BxBChange')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${bxbChange}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('MxBChange')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${mxbChange}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('Exchange')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${exchange}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('Total')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${total.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('GiftProducts')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${gifts}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('Discounts')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${discount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>IEPS</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${ieps}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>IVA</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${iva}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('Subtotal')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${subTotal.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('Pieces')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${totalPieces}</Text>
      </View>
    </View>
  );

  const ProductList = () => (
    <View style={styles.table}>
      {
        productsData?.map((p: any) => {
          return (
            <View style={styles.row}><Text style={styles.cell}>{p.productName}</Text>
              <Text style={[styles.cell, styles.rightAlign]}>${p.productPrice.toFixed(2)}</Text>
            </View>
          )

        })

      }
    </View>
  );
  const BxBList = () => (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('BxBChange')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${totalPrice.toFixed(2)}</Text>
      </View>

    </View>
  );
  const MxBList = () => (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>{t('MxBChange')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>${totalPrice.toFixed(2)}</Text>
      </View>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ExpandableListItem
          clickedChildren={<Text style={styles.itemName}>{t('Total')}</Text>}
          expandedChildren={
            <SummaryList />
          }
        />
        <ExpandableListItem
          clickedChildren={<Text style={styles.itemName}>{t('Products')}</Text>}
          expandedChildren={
            <ProductList />
          }
        />
        <ExpandableListItem
          clickedChildren={<Text style={styles.itemName}>{t('BxBChange')}</Text>}
          expandedChildren={
            <BxBList />
          }
        />
        <ExpandableListItem
          clickedChildren={<Text style={styles.itemName}>{t('MxBChange')}</Text>}
          expandedChildren={
            <MxBList />
          }
        />
        <ExpandableListItem
          clickedChildren={<Text style={styles.itemName}>{t('Print')} {t('Ticket')}</Text>}
          expandedChildren={
            <Button>PRINT</Button>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  table: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 5,
    textAlign: "left",
    fontSize: 18,
  },
  rightAlign: {
    textAlign: "right"
  },
  rightArrow: {
    position: 'absolute',
    right: 10,
    top: 2,
    fontSize: 40,
    color: '#fff'
  },
  itemHeading: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    color: '#FFF'
  },
  itemName: {
    color: '#fff',
  },
});

export default memo(SummaryScreen);
