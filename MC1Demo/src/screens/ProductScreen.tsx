import React, { useCallback, useEffect, useState } from 'react';
import { memo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ListRenderItem,
  TextInput,
  Button,
  Pressable,
} from 'react-native';

import ProductItem from '../components/ProductItem';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ProductsType } from '../data/Products';
import { getSelectedOpportunityItems } from '../lib/api';
import { DotIndicator } from 'react-native-indicators';
import SearchSection from '../components/SearchSection';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Opportunity, OpportunityLineItem } from '../data/Record';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductScreen = () => {
  const { params } = useRoute();
  const accountId = params.accountId;
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  console.log(accountId);
  const {
    isPending: pending,
    error: productFetchError,
    data: selectedOpportunityData,
    isFetching,
  } = useQuery<OpportunityLineItem[], Error>({
    queryKey: ['selectedOpportunityLineItem'],
    queryFn: () => getSelectedOpportunityItems(accountId),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  useEffect(() => {
    //console.log('accountId=', accountId);
  }, []);

  const deleteProducts = useMutation({
    mutationKey: ['deleteproducts'],
    onMutate: async (payload: ProductsType) => {
      await queryClient.cancelQueries({ queryKey: ['selectedOpportunityLineItem'] });

      queryClient.setQueryData<ProductsType[]>(['selectedOpportunityLineItem'], (old) => {
        return old && old.filter(obj => obj.Id !== payload.Id);
      });

      const newproducts = queryClient.getQueryData(['selectedOpportunityLineItem']);
      return { newproducts };
    },
  });

  const rightSwipeActions = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'flex-end',
          borderRadius: 10,
        }}
      >
        <MaterialIcons
          name="delete-forever"
          size={30}
          color="white"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
    );
  };

  const onProductSelectionChange = (item: any) => {
    console.log(item);
  };
  const renderItem: ListRenderItem<OpportunityLineItem> = useCallback(
    ({ item, index }) => (
      <Swipeable
        renderRightActions={rightSwipeActions}
        rightThreshold={50}
        onSwipeableOpen={(
          direction: 'left' | 'right',
          swipeable: Swipeable
        ) => {
          deleteProducts.mutate(item);
          swipeable.close();
        }}
      >
        <ProductItem
          Id={item.Id}
          productId={item.Product2Id}
          productName={item.Name}
          productCode={item.ProductCode}
          imageSource={1}
          productWeight={1}
          productPrice={item.UnitPrice}
          productSuggestedQuantity={item.ListPrice}
          productQuantity={item.Quantity}
          onProductSelectionChange={onProductSelectionChange}
        />
      </Swipeable>
    ),
    []
  );

  if (pending || isFetching) return <DotIndicator color="red" />;

  return (
    <View style={styles.container}>
      <Text style={styles.h4}>{t('ProductInfo')}</Text>
      <SearchSection />
      <FlatList
        style={styles.listContainer}
        data={selectedOpportunityData}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
        maxToRenderPerBatch={5}
        ListEmptyComponent={
          <View style={styles.emptyListView}>
            <Text>No Customer Record Found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h4: {
    fontSize: 16,
    fontWeight: '700',
    margin: 10,
    alignSelf: 'center'
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
    margin: 10,
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
  emptyListView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(ProductScreen);
