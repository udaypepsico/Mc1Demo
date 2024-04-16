import React, { useEffect } from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ProductsType } from '../data/Products';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProducts } from '../lib/api';
import { useTranslation } from 'react-i18next';


const SummaryScreen = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const productsData = queryClient.getQueryData(['products']) as ProductsType[];

  console.log('Summary', productsData);
  let totalPrice = 0;
  let totalPieces = 0;
  const bxbChange = 0;
  const mxbChange = 0;
  const exchange = 0;
  const gifts = 0;
  const discount = 0;
  const ieps = 0;
  const iva = 0;

  productsData?.forEach((p: any) => {
    console.log(p.productPrice, p.productQuantity);
    totalPrice += p.productPrice * p.productQuantity;
    totalPieces += p.productQuantity;
  })

  const total = totalPrice + bxbChange + mxbChange + exchange;
  const subTotal = total - gifts - discount - ieps - iva;

  const renderItem = ({ item }: any) => (
    <View >
      <View style={styles.itemHeading}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.rightArrow}>⌃</Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.itemHeading}>
        <Text style={styles.itemName}>{t('Total')}</Text>
        <Text style={styles.rightArrow}>⌃</Text>
      </View>
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
    </View>
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
