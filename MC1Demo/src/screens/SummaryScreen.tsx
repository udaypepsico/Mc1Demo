import React from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Route, Alert } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchOpportunity, fetchOpportunityLineItem } from '../lib/api';
import { useTranslation } from 'react-i18next';
import ExpandableListItem from '../components/ExpandableListItem';
import { Button as PaperButton } from 'react-native-paper';
import { Opportunity, OpportunityLineItem } from '../data/Record';
import { DotIndicator } from 'react-native-indicators';
import { useSelectedOpportunityFetch } from '../hooks/useSelectedOpportunityFetch';
import { useNavigation } from '@react-navigation/native';
import ProductItem from '../components/ProductItem';

const SummaryScreen = ({ route, navigate }: Route) => {
  const { accountId } = route.params;
  const { t } = useTranslation();
  const navigation = useNavigation();

  let totalPrice = 0;
  let totalPieces = 0;
  const bxbChange = 0;
  const mxbChange = 0;
  const exchange = 0;
  const gifts = 0;
  const discount = 0;
  const ieps = 0;
  const iva = 0;

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
    isPending: opportunityLineItemPending,
    error: opportunityLineItemFetchError,
    data: OpportunityLineItemData,
    isFetching: isOpportunityLineItemFetching,
  } = useQuery<OpportunityLineItem[], Error>({
    queryKey: ['opportunityLineItem'],
    queryFn: () => fetchOpportunityLineItem(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: [],
  });

  if (opportunityPending || opportunityLineItemPending) {
    return <DotIndicator color="red" />;
  }

  const selectedOpportunityData = useSelectedOpportunityFetch(accountId, OpportunityData, OpportunityLineItemData);
  selectedOpportunityData?.forEach((p: OpportunityLineItem) => {
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
      <View style={[styles.row, styles.greyBg]}>
        <Text style={[styles.cell, styles.bold]}>{t('Total')}</Text>
        <Text style={[styles.cell, styles.rightAlign, styles.bold]}>${total.toFixed(2)}</Text>
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
      <View style={[styles.row, styles.greyBg]}>
        <Text style={[styles.cell, styles.bold]}>{t('Subtotal')}</Text>
        <Text style={[styles.cell, styles.rightAlign, , styles.bold]}>${subTotal.toFixed(2)}</Text>
      </View>
      <View style={[styles.row, styles.greyBg]}>
        <Text style={styles.cell}>{t('Pieces')}</Text>
        <Text style={[styles.cell, styles.rightAlign]}>{totalPieces}</Text>
      </View>
    </View>
  );

  const ProductList = () => (
    <View style={styles.table}>
      {
        selectedOpportunityData?.map((p: OpportunityLineItem, index) => {
          return <ProductItem key={'itm_' + index}
            id={p.Id}
            productId={p.Product2Id}
            productName={p.Product2.Name}
            productCode={p.ProductCode}
            productWeight={1}
            productPrice={p.UnitPrice}
            productSuggestedQuantity={p.ListPrice}
            productQuantity={p.Quantity || 0}
          />
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

  const checkhoutHander = () => {
    navigation.navigate('Checkout' as never);
  }
  const printHandler = () =>{
    Alert.alert('Printer is not configured');
  }
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
            <PaperButton icon={'printer'} style={styles.printBtn} mode='outlined' onPress={printHandler}>{t('Print').toUpperCase()}</PaperButton>
          }
        />
      </ScrollView>
      <PaperButton style={styles.stickyBtn} mode='contained' onPress={checkhoutHander}>{t('CheckOut')}</PaperButton>
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
  bold: {
    fontWeight: 'bold'
  },
  row: {
    flexDirection: "row",
    padding: 5,
    borderColor: '#EEE',
    borderWidth: 0.2,
  },
  greyBg: {
    backgroundColor: '#DDD',
  },
  liteGreyBg: {
    backgroundColor: '#EEE',
  },
  cell: {
    flex: 1,
    padding: 5,
    textAlign: "left",
    fontSize: 16,
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
  stickyBtn: {
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
  printBtn: {
    width: '50%',
    alignSelf: 'center',
    margin: 10,
  }
});

export default memo(SummaryScreen);
