import React, { useCallback, useEffect, useState } from 'react';
import { memo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ListRenderItem,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

import ProductItem from '../components/ProductItem';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ProductsType } from '../data/Products';
import { fetchProducts } from '../lib/api';
import { DotIndicator } from 'react-native-indicators';
import SearchSection from '../components/SearchSection';

const ProductScreen = () => {
  const queryClient = useQueryClient();

  const {
    isPending: pending,
    error: productFetchError,
    data: productsData,
    isFetching,
  } = useQuery<ProductsType[], Error>({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  useEffect(() => {
    // i18n.changeLanguage('fr');
  }, []);
  const { t } = useTranslation();
  const onProductSelectionChange = (item: any) => {
    console.log(item);
  };
  const renderItem: ListRenderItem<ProductsType> = useCallback(
    ({ item }) => (
      <ProductItem
        Id={item.Id}
        productId={item.productId}
        productName={item.productName}
        productCode={item.productCode}
        imageSource={item.imageSource}
        productWeight={item.productWeight}
        productPrice={item.productPrice}
        productSuggestedQuantity={item.productSuggestedQuantity}
        productQuantity={item.productQuantity}
        onProductSelectionChange={onProductSelectionChange}
      />
    ),
    []
  );

  const onChangeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('es');
    } else if (i18n.language === 'es') {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
    }
  };
  const onCheckout = () => {
    console.log('checking out');
  };

  if (pending || isFetching) return <DotIndicator color="red" />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h4}>{t('ProductInfo')}</Text>
      <View style={{ position: 'absolute', right: 10, top: 10 }}>
        <Button title=" A " onPress={() => onChangeLanguage()} />
      </View>
      <View style={{ height: 2, backgroundColor: 'black' }} />
      <SearchSection />
      <View style={styles.listContainer}>
        <FlatList
          data={productsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.Id.toString()}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          padding: 5,
          backgroundColor: '#331666',
        }}
      >
        <Button
          onPress={onCheckout}
          color={'#331666'}
          title={t('ProceedToCheckout')}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h4: {
    fontSize: 16,
    fontWeight: '700',
    margin: 10,
  },
  centerItem: {
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    margin: 2,
    backgroundColor: '#FFF',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  header: {
    padding: 8,
    fontSize: 24,
    color: 'white',
    lineHeight: 48,
    backgroundColor: '#ff0000',
  },
  listContainer: {
    flex: 1,
  },
  photo: {
    width: 30,
    height: 80,
  },
  textContainer: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDetail: {
    fontSize: 16,
  },
  quantityCotainer: {
    flexDirection: 'row',
    height: 36,
    margin: 5,
  },
  inputQuantity: {
    borderWidth: 1,
    padding: 4,
    borderColor: '#ccc',
    minWidth: 50,
    textAlign: 'center',
  },
  increamentBtn: {
    padding: 10,
  },
  sugText: {
    marginLeft: 30,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
  },
});

export default memo(ProductScreen);
