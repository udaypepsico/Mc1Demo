import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useEffect, useState } from 'react';
import { memo } from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import { ProductsType } from '../data/Products';
import { fetchFullProducts } from '../lib/api';
import ProductDisplayItem from './ProductDisplayItem';
import { useTranslation } from 'react-i18next';

const SearchSection = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [productDisplayResult, setProductDisplayResult] = useState<
    ProductsType[] | undefined
  >([]);

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

  const renderItem: ListRenderItem<ProductsType> = useCallback(
    ({ item }) => (
      <ProductDisplayItem
        product={item}
        closeSearchList={() => { setSearchQuery('') }}
      />
    ),
    []
  );

  useEffect(() => {
    const productDisplayResult = !(searchQuery.trim().length === 0)
      ? searchQuery.split(' ').length > 1
        ? productsData!.filter((obj) => {
          return obj.Name!
            .toLowerCase()
            .startsWith(searchQuery.toLowerCase());
        })
        : productsData!.filter((obj) => {
          return obj.Name!
            .toLowerCase()
            .split(' ')
            .some((item) => item.startsWith(searchQuery.toLowerCase()));
        })
      : [];

    setProductDisplayResult(productDisplayResult);
  }, [searchQuery]);

  return (
    <View style={{ zIndex: 1 }}>
      <View style={styles.productSearchContainer}>
        <Searchbar
          placeholder={t("Search Products")}
          onChangeText={(query) => setSearchQuery(query)}
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
            onPress={() => {
              console.log('BarCode Icon clicked');
            }}
          />
        </View>
      </View>
      {productDisplayResult && productDisplayResult?.length >0 &&
        <FlatList
          data={productDisplayResult}
          style={styles.listContainer}
          renderItem={renderItem}
          keyExtractor={(item) => item.Id.toString()}
        />
      }
    </View>

  );
};

const styles = StyleSheet.create({
  productSearchContainer: {
    flexDirection: 'row',
    marginTop: 10,
    height: 42,
  },
  listContainer: {
    position: 'absolute',
    top: 60,
    padding: 5,
    width: Dimensions.get('window').width,
    maxHeight: Dimensions.get('window').height - 260,
    backgroundColor: '#CCCCCC'
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
  }
});

export default memo(SearchSection);
