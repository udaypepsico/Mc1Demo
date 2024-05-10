import { memo, useState } from 'react';
import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { increamentalValue } from '../core/utils';
import { OpportunityLineItem } from '../data/Record';

export interface ProductInterface {
  id?: string;
  productName?: string;
  productId?: string;
  productCode?: string;
  productPrice?: number;
  productQuantity?: number;
  productWeight?: any;
  productSuggestedQuantity?: number;
  imageSource?: any;
  onProductSelectionChange?: any;
}

const ProductItem = (props: ProductInterface) => {
  const {
    id,
    productName,
    productId,
    productCode,
    productPrice = 0,
    productQuantity = 0,
    productWeight = 0,
    productSuggestedQuantity = 0,
    imageSource,
  } = props;

  const queryClient = useQueryClient();

  const updateProducts = useMutation({
    mutationKey: ['updateproducts'],
    onMutate: async (payload: number) => {
      await queryClient.cancelQueries({ queryKey: ['opportunityLineItem'] });
      queryClient.setQueryData<OpportunityLineItem[]>(['opportunityLineItem'], (old) => {
        return (
          old &&
          old.map((obj) =>
            obj.Id === id ? { ...obj, Quantity: payload } : obj
          )
        );
      });

      const newproducts = queryClient.getQueryData(['opportunityLineItem']);

      return { newproducts };
    },
  });

  const onChangeQuantity = (val: number) => {
    const updatedQuantity = productQuantity + val;
    if (updatedQuantity > 0)
      updateProducts.mutate(updatedQuantity);
    else
      updateProducts.mutate(0);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemContainer}>
        {imageSource &&
          <Image style={styles.photo} source={imageSource} />
        }
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{productName}</Text>
          <Text style={styles.itemCode}>{productCode || productId}</Text>
          <Text style={styles.itemPrice}>${productPrice}</Text>
        </View>
      </View>
      <View style={styles.itemQuantityContainer}>
        <View style={styles.quantityCotainer}>
          <FontAwesome5
            name="minus"
            size={15}
            color="white"
            style={{
              backgroundColor: '#17A1D9',
              padding: 10,
              alignSelf: 'center',
            }}
            onPress={() => {
              onChangeQuantity(-increamentalValue);
            }}
          />
          <TextInput
            style={styles.inputQuantity}
            editable
            keyboardType="numeric"
            onChangeText={(num) =>
              updateProducts.mutate((Number(num) < 0 || !num) ? 0 : Number(num))
            }
            defaultValue={String(productQuantity)}
          />
          <FontAwesome5
            name="plus"
            size={15}
            color="white"
            style={{
              backgroundColor: '#17A1D9',
              padding: 10,
              alignSelf: 'center',
            }}
            onPress={() => {
              onChangeQuantity(increamentalValue);
            }}
          />
          <Text style={styles.totalText}>
            ${(productQuantity * productPrice)}
          </Text>
        </View>
        {productSuggestedQuantity > 0 &&
          <Text style={styles.sugText}>Sug Cant. {productSuggestedQuantity}</Text>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#FFF',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  photo: {
    width: 30,
    height: 80,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#17A1D9',
  },
  itemCode: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: '700',
    color: '#666',
    marginTop: 5,
  },
  itemQuantityContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  quantityCotainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  inputQuantity: {
    borderWidth: 1,
    padding: 4,
    borderColor: '#ccc',
    minWidth: 50,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  sugText: {
    textAlign: 'left',
    paddingTop: 5,
    marginLeft: 20,
  },
  totalText: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 5,
    alignSelf: 'center',
    minWidth: 50,
  },
});

export default memo(ProductItem);
