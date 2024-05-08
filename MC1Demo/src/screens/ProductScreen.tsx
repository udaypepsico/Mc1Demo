import React, { useCallback } from 'react';
import { memo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListRenderItem,
  Route,
} from 'react-native';

import ProductItem from '../components/ProductItem';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchOpportunity,
  fetchOpportunityLineItem,
  getSelectedOpportunityData
} from '../lib/api';
import { DotIndicator } from 'react-native-indicators';
import SearchSection from '../components/SearchSection';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Opportunity, OpportunityLineItem } from '../data/Record';
import { useSelectedOpportunityFetch } from '../hooks/useSelectedOpportunityFetch';

const ProductScreen = ({ route }: Route) => {
  const { accountId } = route.params;
  const { t } = useTranslation();
  const queryClient = useQueryClient();

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

  const {
    isPending: accountIdPending,
    error: accountIdFetchError,
    data: AccountId,
    isFetching: accountIdFetching,
  } = useQuery<string, Error>({
    queryKey: ['accountId'],
    queryFn: () => accountId,
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: '',
  });


  const {
    isPending: opportunityIdPending,
    error: opportunityIdFetchError,
    data: OpportunityId,
    isFetching: isOpportunityIdFetching,
  } = useQuery<string, Error>({
    queryKey: ['opportunityId',{accountId,OpportunityData}],
    queryFn: () => getSelectedOpportunityData(accountId,OpportunityData),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: '',
  });

  const selectedOpportunityData = useSelectedOpportunityFetch(accountId,OpportunityData,OpportunityLineItemData);

  console.log(selectedOpportunityData.length);

  const deleteProducts = useMutation({
    mutationKey: ['deleteproducts'],
    onMutate: async (payload: OpportunityLineItem) => {
      await queryClient.cancelQueries({
        queryKey: ['opportunityLineItem'],
      });

      queryClient.setQueryData<OpportunityLineItem[]>(
        ['opportunityLineItem'],
        (old) => {
          return old && old.filter((obj) => obj.Id !== payload.Id);
        }
      );
      const newproducts = queryClient.getQueryData<OpportunityLineItem[]>([
        'opportunityLineItem',
      ]);

      return { newproducts };
    },
    onError: (error, variables, context) => {
      console.log('Error' + error);
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
          productName={item.Product2.Name}
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
            <Text>{t('NoRecordFound')}</Text>
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
    alignSelf: 'center',
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
