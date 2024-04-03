import React from 'react';
import { memo } from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';

const ProductDisplayItem = (props: any) => {
  const { productName, imageSource } = props;

  return (
    <View style={styles.item}>
      <View style={styles.itemContainer}>
        <Image style={styles.photo} source={imageSource} />
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{productName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  photo: {
    width: 30,
    height: 30,
  },
  textContainer: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default memo(ProductDisplayItem);
