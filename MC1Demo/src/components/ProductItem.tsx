import { memo, useState } from 'react';
import { ProductsType } from '../data/Products';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
} from 'react-native';

const ProductItem = (props: ProductsType) => {
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

  const onChangeQuantity = (val: number) => {
    console.log('changing', val);
    if (quantity === 0 && val < 0) {
      console.log('Value can not be less than zero');
      return;
    }
    setQuantity(quantity + val);
  };

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
      <View>
        <View style={styles.quantityCotainer}>
          <Button title=" - " onPress={() => onChangeQuantity(-1)} />
          <TextInput
            style={styles.inputQuantity}
            editable
            keyboardType="numeric"
            onChangeText={(num) =>
              setQuantity(Number(num) < 0 ? 0 : Number(num))
            }
            defaultValue={String(quantity)}
          />
          <Button title=" + " onPress={() => onChangeQuantity(1)} />
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

export default memo(ProductItem);
