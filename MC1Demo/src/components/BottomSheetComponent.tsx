import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useState } from 'react';
import { memo, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ListRenderItem,
} from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import { ProductsType } from '../data/Products';
import ProductDisplayItem from './ProductDisplayItem';
import { useQuery } from '@tanstack/react-query';
import { fetchFullProducts } from '../lib/api';

const BottomSheetComponent = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  //   const [productDisplayResult, setProductDisplayResult] = useState<
  //     ProductsType[] | undefined
  //   >([]);

  const snapPoints = useMemo(() => ['15%', '50%', '90%'], []);

  const handleSheetChange = (index: number) => {
    console.log('handleSheetChanges', index);
  };

  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const {
    isPending: pending,
    error: productFetchError,
    data: productsData,
    isFetching,
  } = useQuery<ProductsType[], Error>({
    queryKey: ['fullproducts'],
    queryFn: () => fetchFullProducts(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const productDisplayResult = !(searchQuery.trim().length === 0)
    ? searchQuery.split(' ').length > 1
      ? productsData!.filter((obj) => {
          return obj.Name!.toLowerCase().startsWith(searchQuery.toLowerCase());
        })
      : productsData!.filter((obj) => {
          return obj
            .Name!.toLowerCase()
            .split(' ')
            .some((item) => item.startsWith(searchQuery.toLowerCase()));
        })
    : [];

  const renderItem: ListRenderItem<ProductsType> = useCallback(
    ({ item }) => (
      <ProductDisplayItem
        product={item}
        closeSearchList={() => {
          handleSnapPress(0);
          setSearchQuery('');
        }}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
    >
      <View style={styles.productSearchContainer}>
        <Searchbar
          placeholder={t('Search Products')}
          onKeyPress={() => searchQuery.length === 0 && handleSnapPress(1)}
          onClearIconPress={() => handleSnapPress(0)}
          onChangeText={(query) => {
            setSearchQuery(query);
          }}
          value={searchQuery}
          style={styles.searchBar}
          maxLength={20}
          returnKeyType="search"
          inputStyle={styles.searchInputText}
        />
        <View>
          <IconButton
            icon="barcode"
            iconColor="black"
            style={{
              backgroundColor: '#17A1D9',
              borderRadius: 10,
              marginTop: 0,
              marginLeft: 10,
              height: '100%',
            }}
            size={30}
            mode="contained"
            onPress={() => handleSnapPress(1)}
          />
        </View>
      </View>
      {productDisplayResult && productDisplayResult?.length > 0 && (
        <BottomSheetFlatList
          data={productDisplayResult.slice(0, 5)}
          keyExtractor={(item) => item.Id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  productSearchContainer: {
    flexDirection: 'row',
    marginTop: 10,
    height: 42,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: '100%',
    fontStyle: 'normal',
  },
  searchInputText: {
    fontSize: 14,
    fontWeight: 'normal',
    paddingBottom: 20,
    color: 'black',
  },
});

export default memo(BottomSheetComponent);
