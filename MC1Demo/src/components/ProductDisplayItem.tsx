import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { memo } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { ProductsType } from '../data/Products';

const ProductDisplayItem = ({ product,closeSearchList }: { product: ProductsType;closeSearchList:any }) => {
  const queryClient = useQueryClient();

  const updateProducts = useMutation({
    mutationKey: ['addproducts'],
    onMutate: async (payload: ProductsType) => {
      await queryClient.cancelQueries({ queryKey: ['products'] });

      queryClient.setQueryData<ProductsType[]>(['products'], (old) => {
        
        if(old && old.some(e => e.Id === payload.Id))
        {
          return (old)
        }
        return (
          old && [
            ...old,
            {
              ...payload,
            },
          ]
        );
      });
      const newproducts = queryClient.getQueryData(['products']);

      return { newproducts };
    }
  });

  return (
    <View style={styles.item}>
      <Image style={styles.photo} source={{uri:product.DisplayUrl}} />
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
    width: 30,
    height: 30,
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
