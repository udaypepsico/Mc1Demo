import { memo, useState } from 'react';
import { ProductsType } from '../data/Products';
import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProductItem = (props: any) => {
  const {
    productName,
    productId,
    productCode,
    productPrice,
    productQuantity,
    productWeight,
    productSuggestedQuantity,
    imageSource,
  } = props;

  const [text, onChangeText] = useState('Useless Text');
  const [quantity, setQuantity] = useState(productQuantity);

  const queryClient = useQueryClient();

  const updateProducts = useMutation({
    mutationKey: ['updateproducts'],
    onMutate: async (payload: number) => {
      await queryClient.cancelQueries({ queryKey: ['products'] });

      queryClient.setQueryData<ProductsType[]>(['products'], (old) => {
        return (
          old &&
          old.map((obj) =>
            obj.productId === productId ? { ...obj, productQuantity: payload } : obj
          )
        );
      });

      const newproducts = queryClient.getQueryData(['products']);

      return { newproducts };
    },
  });

  const onChangeQuantity = (val: number) => {
    setQuantity(quantity + val);
    updateProducts.mutate(quantity + val);

    // console.log(
    //   (
    //     queryClient.getQueryData([
    //       'products',
    //       { Id: productId },
    //     ]) as ProductsType
    //   ).productQuantity
    // );
  };

  if (quantity < 0) {
    setQuantity(0);
  }
  return (
    <View style={styles.item}>
      <View style={styles.itemContainer}>
        <Image style={styles.photo} source={imageSource} />
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{productName}</Text>
          <Text style={styles.itemDetail}>
            {productCode} | {productId}
          </Text>
          <Text>
            ${productPrice} | {productWeight}
          </Text>
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
            onPress={() => onChangeQuantity(-productQuantity)}
          />
          <TextInput
            style={styles.inputQuantity}
            editable
            keyboardType="numeric"
            onChangeText={(num) =>
              setQuantity(Number(num) < 0 ? 0 : Number(num))
            }
            defaultValue={String(quantity)}
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
            onPress={() => onChangeQuantity(productQuantity)}
          />
          <Text style={styles.totalText}>
            ${(quantity * productPrice).toFixed(2)}
          </Text>
        </View>
        <Text style={styles.sugText}>Sug Qty {productSuggestedQuantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#FFF',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    justifyContent: 'space-around',
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    padding: 8,
    fontSize: 24,
    color: 'white',
    lineHeight: 48,
    backgroundColor: '#ff0000',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDetail: {
    fontSize: 16,
  },
  itemQuantityContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  quantityCotainer: {
    flexDirection: 'row',
  },
  inputQuantity: {
    borderWidth: 1,
    padding: 4,
    borderColor: '#ccc',
    minWidth: 50,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  increamentBtn: {
    padding: 10,
  },
  sugText: {
    textAlign: 'left',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'right',
    alignSelf: 'center',
  },
});

export default memo(ProductItem);
