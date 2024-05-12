import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { memo } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { ProductsType } from '../data/Products';
import { Opportunity, OpportunityLineItem } from '../data/Record';

const ProductDisplayItem = ({ product,closeSearchList }: { product: ProductsType;closeSearchList:any }) => {
  const queryClient = useQueryClient();

  const updateProducts = useMutation({
    mutationKey: ['addproducts'],
    onMutate: async (payload: ProductsType) => {
      await queryClient.cancelQueries({ queryKey: ['opportunityLineItem'] });

      const accountId = queryClient.getQueryData(['accountId']) as string;

      const OpportunityData = queryClient.getQueryData(['opportunity']) as Opportunity[];

      const selectedOpportunityId = queryClient.getQueryData(['opportunityId',{accountId,OpportunityData}]) as string;

      queryClient.setQueryData<OpportunityLineItem[]>(['opportunityLineItem'], (old) => {
        return (
          old && payload && [
            ...old,
            {
              Quantity: 10,
              ListPrice: 10,
              Id: 'string',
              Product2Id: payload.Id,
              ProductCode: payload.productCode,
              TotalPrice: 10,
              Name: 'Test Opportunity Line Item',
              Product2: {Name:payload.Name,Attributes:payload.attributes},
              OpportunityId: selectedOpportunityId,
              UnitPrice: 10,
              Description: `Test Opportunity Line Item added on ${Date.now()}`
            },
          ]
        );
      });

      const newproducts = queryClient.getQueryData(['opportunityLineItem']);

      console.log(newproducts);

      return { newproducts };
    },
    onError: (error, variables, context) => {
      console.log('Error' + error);
    },
  });
  const productIcon = product.DisplayUrl ? product.DisplayUrl : 'https://cdn.iconscout.com/icon/free/png-256/free-pepsi-3442215-2875978.png';

  return (
    <View style={styles.item}>
      <Image style={styles.photo} source={{uri: productIcon}} />
      <Text style={styles.itemName}>{product.Name}</Text>
      <Button
        mode="contained"
        onPress={() => {
          updateProducts.mutate(product);
          closeSearchList();
        }}
      >
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    margin: 2,
    borderColor: '#17A1D9',
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  photo: {
    width: 40,
    height: 40,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    flex: 1,
    marginHorizontal: 10,
  },
});

export default memo(ProductDisplayItem);
