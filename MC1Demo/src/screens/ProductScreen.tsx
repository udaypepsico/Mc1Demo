import React, { useCallback, useState } from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ListRenderItem, FlatList, TextInput, Button } from 'react-native';

import { ProductsType, products } from '../data/Products';
import ProductItem from '../components/ProductItem';



const ProductScreen = () => {
    const renderItem: ListRenderItem<ProductsType> = useCallback(({ item }) => (
        <ProductItem
            Id={item.Id}
            productId={item.productId}
            productName={item.productName}
            productCode={item.productCode}
            imageSource={item.imageSource}
            productWeight={item.productWeight}
            productPrice={item.productPrice}
            productSuggestedQuantity={item.productSuggestedQuantity}
            productQuantity={item.productQuantity} />
    ), []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.h4}>PRODUCT INFOs</Text>
            <View style={{ height: 2, backgroundColor: 'black' }} />

            <View style={styles.listContainer}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.Id.toString()}
                />
            </View>
        </SafeAreaView>
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
        flexDirection: "row",
        padding: 10,
        margin: 2,
        backgroundColor: '#FFF',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
    },
    itemContainer: {
        flexDirection: "row",
    },
    header: {
        padding: 8,
        fontSize: 24,
        color: "white",
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
        fontWeight: "bold",
        color: '#000'
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
        marginLeft: 30
    },
    totalText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
    }
});

export default memo(ProductScreen);
